import Router from "express";
import { prisma } from "../prisma.js";

const router = Router();

// GET /personas - Obtener todas las personas
router.get("/", async (req, res) => {
    try {
        const personas = await prisma.persona.findMany();
        res.json(personas);
    } catch (error) {       
        console.error("Error al obtener personas:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// GET /personas/:dni - Obtener una persona por DNI
router.get("/:dni", async (req, res) => {
    const { dni } = req.params;
    try {
        const persona = await prisma.persona.findUnique({
            where: { dni }
        });
        if (!persona) {
            return res.status(404).json({ error: "Persona no encontrada" });
        }
        res.json(persona);
    } catch (error) {
        console.error("Error al obtener la persona:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
// POST /personas - Crear una nueva persona
router.post("/", async (req, res) => {
    const { dni, nombre, apellido } = req.body; 
    const existePersona = await prisma.persona.findUnique({
        where: { dni }
    }); 
    if (existePersona) {
        return res.status(400).json({ error: "La persona con ese DNI ya existe" });
    }
    else{
         try {
        const persona = await prisma.persona.create({
            data: { dni, nombre, apellido }
        });
        res.status(201).json(persona);
        } catch (error) {
            console.error("Error al crear la persona:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
   
});

// PUT /personas/:dni - Actualizar una persona existente
router.put("/:dni", async (req, res) => {
    const { dni } = req.params;
    const { nombre, apellido } = req.body;  

    try {
        const persona = await prisma.persona.update({
            where: { dni },
            data: { nombre, apellido }
        });
        res.json(persona);
    } catch (error) {
        console.error("Error al actualizar la persona:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }   
});

// DELETE /personas/:dni - Eliminar una persona
router.delete("/:dni", async (req, res) => {
    const { dni } = req.params;
    try {
        await prisma.persona.delete({
            where: { dni }
        });
        res.json({ message: "Persona eliminada correctamente" });
    }catch (error:any) {     
        if (error.code === 'P2003' || error.code === 'P2014') {
      return res.status(400).json({ 
        error: "No se puede eliminar la persona porque está asociada a uno o más expedientes" 
      });
    }
        res.status(500).json({ error: "Error interno del servidor" });
    }});

//GET /personas/:dni/expedientes - Obtener todos los expedientes de una persona
router.get("/:dni/expedientes", async (req, res) => {
  const { dni } = req.params;

  const persona = await prisma.persona.findUnique({
    where: { dni },
    include: {
      expedientes: {
        include: {
          expediente: {
            include: { organismo: true, ciudad: true }
          },
          vinculo: true
        }
      }
    }
  });

  if (!persona) {
    return res.status(404).json({ error: "Persona no registrada o no posee expedientes" });
  }

  res.json(persona);
});

export default router;