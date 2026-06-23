import  Routes from "express";
import { prisma } from "../prisma.js";

const Router = Routes();

Router.get("/", async (req, res) => {
  try {
    const expedientes = await prisma.expediente.findMany(); 
    res.json(expedientes);
  } catch (error) {
    console.error("Error al obtener expedientes:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

Router.get("/:codigoOrganismo/:tipo/:numero/:anio",async (req, res) => { 
    try {
        const { codigoOrganismo, tipo, numero, anio } = req.params;
        const expediente = await prisma.expediente.findUnique({
            where: {
                codigoOrganismo_tipo_numero_anio: {
                    codigoOrganismo: codigoOrganismo,
                    tipo,
                    numero: parseInt(numero),
                    anio: parseInt(anio)
                }
            }
        });
        if (!expediente) {
            return res.status(404).json({ error: "Expediente no encontrado" });
        }
        res.json(expediente);     

    }catch (error) {
        console.error("Error al obtener el expediente:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
Router.post("/", async (req, res) => {
  const { codigoOrganismo, tipo, numero, anio, titulo, ciudadId, actorDni } = req.body;

  try {
    // Validaciones previas
    const organismo = await prisma.organismo.findUnique({ where: { codigo: codigoOrganismo } });
    const ciudad = await prisma.ciudad.findUnique({ where: { id: ciudadId } });

    if (!organismo || !ciudad) {
      return res.status(400).json({ error: "Organismo o ciudad no válido" });
    }

    const actor = await prisma.persona.findUnique({ where: { dni: actorDni } });
    if (!actor) {
      return res.status(400).json({ error: "La persona actora no existe" });
    }

    const existeExpediente = await prisma.expediente.findUnique({
      where: {
        codigoOrganismo_tipo_numero_anio: {
          codigoOrganismo,
          tipo,
          numero: parseInt(numero),
          anio: parseInt(anio)
        }
      }
    });

    if (existeExpediente) {
      return res.status(400).json({ error: "El expediente con esos datos ya existe" });
    }

    const vinculoActor = await prisma.tipoVinculo.findUnique({ where: { descripcion: "ACTOR" } });
    if (!vinculoActor) {
      return res.status(500).json({ error: "Vínculo ACTOR no configurado en el sistema" });
    }

    const expediente = await prisma.$transaction(async (tx) => {
      const nuevoExpediente = await tx.expediente.create({
        data: { codigoOrganismo, tipo, numero: parseInt(numero), anio: parseInt(anio), titulo, ciudadId }
      });

      await tx.expedientePersona.create({
        data: {
          expCodigoOrganismo: codigoOrganismo,
          expTipo: tipo,
          expNumero: parseInt(numero),
          expAnio: parseInt(anio),
          personaDni: actorDni,
          vinculoId: vinculoActor.id
        }
      });

      return nuevoExpediente;
    });

    res.status(201).json(expediente);

  } catch (error) {
    console.error("Error al crear el expediente:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


Router.post("/:codigoOrganismo/:tipo/:numero/:anio/personas", async (req, res) => {
  const { codigoOrganismo, tipo, numero, anio } = req.params;
  const { personaDni, vinculoId } = req.body;

  try {
    // Verificar que el expediente existe
    const expediente = await prisma.expediente.findUnique({
      where: {
        codigoOrganismo_tipo_numero_anio: {
          codigoOrganismo, tipo,
          numero: parseInt(numero),
          anio: parseInt(anio)
        }
      }
    });

    if (!expediente) {
      return res.status(404).json({ error: "Expediente no encontrado" });
    }

    // Verificar que el vínculo existe
    const vinculo = await prisma.tipoVinculo.findUnique({ where: { id: vinculoId } });
    if (!vinculo) {
      return res.status(400).json({ error: "Vínculo no válido" });
    }

    // No se puede agregar un actor por este endpoint
    if (vinculo.descripcion === "ACTOR") {
      return res.status(400).json({ error: "El actor principal solo se asigna al crear el expediente" });
    }

    // Verificar que la persona existe
    const persona = await prisma.persona.findUnique({ where: { dni: personaDni } });
    if (!persona) {
      return res.status(400).json({ error: "Persona no encontrada" });
    }

    const relacion = await prisma.expedientePersona.create({
      data: {
        expCodigoOrganismo: codigoOrganismo,
        expTipo: tipo,
        expNumero: parseInt(numero),
        expAnio: parseInt(anio),
        personaDni,
        vinculoId
      }
    });

    res.status(201).json(relacion);

  } catch (error) {
    console.error("Error al agregar persona al expediente:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

Router.put("/:codigoOrganismo/:tipo/:numero/:anio", async (req, res) => {
  const { codigoOrganismo, tipo, numero, anio } = req.params;
  const { titulo, ciudadId } = req.body;

  try {
    const expediente = await prisma.expediente.update({
      where: {
        codigoOrganismo_tipo_numero_anio: {
          codigoOrganismo,
          tipo,
          numero: parseInt(numero),
          anio: parseInt(anio)
        }
      },
      data: { titulo, ciudadId }
    });

    res.json(expediente);

  } catch (error) {
    console.error("Error al actualizar el expediente:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

Router.delete("/:codigoOrganismo/:tipo/:numero/:anio", async (req, res) => {
  const { codigoOrganismo, tipo, numero, anio } = req.params;

  try {
    await prisma.expediente.delete({
      where: {
        codigoOrganismo_tipo_numero_anio: {
          codigoOrganismo,
          tipo,
          numero: parseInt(numero),
          anio: parseInt(anio)
        }
      }
    });

    res.status(204).send();

  } catch (error) {
    console.error("Error al eliminar el expediente:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

Router.get("/:codigoOrganismo/:tipo/:numero/:anio/personas", async (req, res) => {
  const { codigoOrganismo, tipo, numero, anio } = req.params;

  try {
    const expediente = await prisma.expediente.findUnique({
      where: {
        codigoOrganismo_tipo_numero_anio: {
          codigoOrganismo, tipo,
          numero: parseInt(numero),
          anio: parseInt(anio)
        }
      }
    });

    if (!expediente) {
      return res.status(404).json({ error: "Expediente no encontrado" });
    }

    const personas = await prisma.expedientePersona.findMany({
      where: {
        expCodigoOrganismo: codigoOrganismo,
        expTipo: tipo,
        expNumero: parseInt(numero),
        expAnio: parseInt(anio)
      },
      include: {
        persona: true,
        vinculo: true
      }
    });

    res.json(personas);

  } catch (error) {
    console.error("Error al listar personas del expediente:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default Router;
