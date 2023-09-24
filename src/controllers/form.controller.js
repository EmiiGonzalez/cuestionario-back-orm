import { rUnicas } from "../models/rUnicas.js";

export const getRUnicas = async (req, res) => {
    try {
        const rUnica = await rUnicas.findAll();
        res.json(rUnica);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createRUnicas = async (req, res) => {
    const {pEdad, pSexo, p1, p2, p3, p4, p5, p8, p9, p10, p11, p12, p14, p15, p16, p17 } = req.body;
    try {
        const newRUnica = await rUnicas.create({
            pEdad, pSexo, p1, p2, p3, p4, p5, p8, p9, p10, p11, p12, p14, p15, p16, p17
        })
        res.json(newRUnica);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const updateRUnicas = async (req, res) => {
    try {
        res.send("updateRUnicas");
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}