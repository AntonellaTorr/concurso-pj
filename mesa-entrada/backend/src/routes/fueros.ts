import Routes from "express";
import { prisma } from "../prisma.js";  

const router = Routes();

router.get("/", async (req, res) => {
    try {
        const fueros = await prisma.fuero.findMany();    
        res.json(fueros);
    } catch (error) {
        console.error("Error al obtener fueros:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

router.get("/:id", async (req, res) => {        
    try {
        const { id } = req.params;
        const fuero = await prisma.fuero.findUnique({
            where: { id: parseInt(id) }
        });
        if (!fuero) {
            return res.status(404).json({ error: "Fuero no encontrado" });
        }
        res.json(fuero);
    } catch (error) {
        console.error("Error al obtener fuero:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}); 

export default router;