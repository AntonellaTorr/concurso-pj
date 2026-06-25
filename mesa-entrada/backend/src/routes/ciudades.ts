import Routes from "express";
import { prisma } from "../prisma.js";  

const router = Routes();

// GET /ciudades
router.get("/", async (req, res) => {
    try {
        const ciudades = await prisma.ciudad.findMany();    
        res.json(ciudades);
    } catch (error) {
        console.error("Error al obtener ciudades:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
// GET /ciudades/:id
router.get("/:id", async (req, res) => {    
    try {
        const { id } = req.params;
        const ciudad = await prisma.ciudad.findUnique({
            where: { id: parseInt(id) }
        });
        if (!ciudad) {
            return res.status(404).json({ error: "Ciudad no encontrada" });
        }
        res.json(ciudad);
    } catch (error) {
        console.error("Error al obtener ciudad:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}); 

export default router;