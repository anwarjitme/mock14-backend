function tokenVerify(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ error: "not authorized" });
  }

  jwt.verify(token, "quiz", (err, user) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.user = user;
    next();
  });
}

module.exports={
          tokenVerify
}