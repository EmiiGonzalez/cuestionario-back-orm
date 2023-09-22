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
    try {
        res.send("createRUnicas");
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}