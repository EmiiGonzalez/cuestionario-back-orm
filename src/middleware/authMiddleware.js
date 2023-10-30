import jsonwebtoken from "jsonwebtoken";

const keySecret = "me_gusta_la_pepsi";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401).send("No Autorizado");
  }
  jsonwebtoken.verify(token, keySecret, (err, user) => {
    if (err) return res.sendStatus(403).send("Token no válido");
    console.log(user);
    req.user = user;
    next();
  })
  
};
