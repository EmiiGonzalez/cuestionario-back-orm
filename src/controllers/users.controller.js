import { users } from "../models/users.js";
import jsonwebtoken from "jsonwebtoken";

export const postLogin = async (req, res) => {
    const { contrasena, usuario } = req.body;
    if (contrasena == "123" && usuario == "admin") {
        res.send("ok");
        const token = jsonwebtoken.sign({ usuario }, "me_gusta_la_pepsi", { expiresIn: "1h" });
        res.json({ token });
    } else {
        res.status(401).send("error");
    }
}