import { PrismaClient } from "../src/generated/prisma/index.js";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {

  // Ciudades
  const neuquen = await prisma.ciudad.upsert({ where: { codigo: "NQ" }, update: {}, create: { nombre: "Neuquén", codigo: "NQ" } });
  const zapala = await prisma.ciudad.upsert({ where: { codigo: "ZA" }, update: {}, create: { nombre: "Zapala", codigo: "ZA" } });
  const junin = await prisma.ciudad.upsert({ where: { codigo: "JU" }, update: {}, create: { nombre: "Junín de los Andes", codigo: "JU" } });

  // Fueros
  const familia = await prisma.fuero.upsert({ where: { codigo: "FA" }, update: {}, create: { nombre: "Familia", codigo: "FA" } });
  const civil = await prisma.fuero.upsert({ where: { codigo: "CI" }, update: {}, create: { nombre: "Civil", codigo: "CI" } });
  const laboral = await prisma.fuero.upsert({ where: { codigo: "LA" }, update: {}, create: { nombre: "Laboral", codigo: "LA" } });
  const ejecutivos = await prisma.fuero.upsert({ where: { codigo: "EJ" }, update: {}, create: { nombre: "Ejecutivos", codigo: "EJ" } });

  // Organismos — código J + ciudad.codigo + fuero.codigo
  const orgNQFA = await prisma.organismo.upsert({ where: { codigo: "JNQFA" }, update: {}, create: { codigo: "JNQFA", nombre: "Juzgado de Familia Nº1 Neuquén", titulo: "Juzgado de Familia", ciudadId: neuquen.id, fueroId: familia.id } });
  const orgNQCI = await prisma.organismo.upsert({ where: { codigo: "JNQCI" }, update: {}, create: { codigo: "JNQCI", nombre: "Juzgado Civil Nº1 Neuquén", titulo: "Juzgado Civil", ciudadId: neuquen.id, fueroId: civil.id } });
  const orgNQLA = await prisma.organismo.upsert({ where: { codigo: "JNQLA" }, update: {}, create: { codigo: "JNQLA", nombre: "Juzgado Laboral Nº1 Neuquén", titulo: "Juzgado Laboral", ciudadId: neuquen.id, fueroId: laboral.id } });
  const orgNQEJ = await prisma.organismo.upsert({ where: { codigo: "JNQEJ" }, update: {}, create: { codigo: "JNQEJ", nombre: "Juzgado Ejecutivos Nº1 Neuquén", titulo: "Juzgado Ejecutivos", ciudadId: neuquen.id, fueroId: ejecutivos.id } });
  const orgZACI = await prisma.organismo.upsert({ where: { codigo: "JZACI" }, update: {}, create: { codigo: "JZACI", nombre: "Juzgado Civil Zapala", titulo: "Juzgado Civil", ciudadId: zapala.id, fueroId: civil.id } });
  const orgZAFA = await prisma.organismo.upsert({ where: { codigo: "JZAFA" }, update: {}, create: { codigo: "JZAFA", nombre: "Juzgado de Familia Zapala", titulo: "Juzgado de Familia", ciudadId: zapala.id, fueroId: familia.id } });
  const orgJUEJ = await prisma.organismo.upsert({ where: { codigo: "JJUEJ" }, update: {}, create: { codigo: "JJUEJ", nombre: "Juzgado Ejecutivos Junín", titulo: "Juzgado Ejecutivos", ciudadId: junin.id, fueroId: ejecutivos.id } });
  const orgJULA = await prisma.organismo.upsert({ where: { codigo: "JJULA" }, update: {}, create: { codigo: "JJULA", nombre: "Juzgado Laboral Junín", titulo: "Juzgado Laboral", ciudadId: junin.id, fueroId: laboral.id } });

  // Vínculos
  const actor = await prisma.tipoVinculo.upsert({ where: { descripcion: "ACTOR" }, update: {}, create: { descripcion: "ACTOR" } });
  const demandado = await prisma.tipoVinculo.upsert({ where: { descripcion: "DEMANDADO" }, update: {}, create: { descripcion: "DEMANDADO" } });
  const condenado = await prisma.tipoVinculo.upsert({ where: { descripcion: "CONDENADO" }, update: {}, create: { descripcion: "CONDENADO" } });
  const victima = await prisma.tipoVinculo.upsert({ where: { descripcion: "VICTIMA" }, update: {}, create: { descripcion: "VICTIMA" } });

  // Personas
  const p1 = await prisma.persona.upsert({ where: { dni: "12345678" }, update: {}, create: { dni: "12345678", apellido: "García", nombre: "Juan" } });
  const p2 = await prisma.persona.upsert({ where: { dni: "87654321" }, update: {}, create: { dni: "87654321", apellido: "López", nombre: "María" } });
  const p3 = await prisma.persona.upsert({ where: { dni: "11223344" }, update: {}, create: { dni: "11223344", apellido: "Rodríguez", nombre: "Carlos" } });
  const p4 = await prisma.persona.upsert({ where: { dni: "44332211" }, update: {}, create: { dni: "44332211", apellido: "Martínez", nombre: "Ana" } });
  const p5 = await prisma.persona.upsert({ where: { dni: "55667788" }, update: {}, create: { dni: "55667788", apellido: "Fernández", nombre: "Luis" } });
  const p6 = await prisma.persona.upsert({ where: { dni: "99887766" }, update: {}, create: { dni: "99887766", apellido: "Pérez", nombre: "Laura" } });
  const p7 = await prisma.persona.upsert({ where: { dni: "33445566" }, update: {}, create: { dni: "33445566", apellido: "Gómez", nombre: "Diego" } });
  const p8 = await prisma.persona.upsert({ where: { dni: "77889900" }, update: {}, create: { dni: "77889900", apellido: "Sánchez", nombre: "Claudia" } });

  // Helper para crear expediente + actor en una transacción
  const crearExpediente = async (
    codigoOrganismo: string, tipo: string, numero: number, anio: number,
    titulo: string, ciudadId: number, actorDni: string,
    extras: { dni: string, vinculoId: number }[] = []
  ) => {
    const existe = await prisma.expediente.findUnique({
      where: { codigoOrganismo_tipo_numero_anio: { codigoOrganismo, tipo, numero, anio } }
    });
    if (existe) return;

    await prisma.$transaction(async (tx) => {
      await tx.expediente.create({
        data: { codigoOrganismo, tipo, numero, anio, titulo, ciudadId }
      });
      await tx.expedientePersona.create({
        data: { expCodigoOrganismo: codigoOrganismo, expTipo: tipo, expNumero: numero, expAnio: anio, personaDni: actorDni, vinculoId: actor.id }
      });
      for (const extra of extras) {
        await tx.expedientePersona.create({
          data: { expCodigoOrganismo: codigoOrganismo, expTipo: tipo, expNumero: numero, expAnio: anio, personaDni: extra.dni, vinculoId: extra.vinculoId }
        });
      }
    });
  };

  // Neuquén - Familia (JNQFA)
  await crearExpediente("JNQFA", "EXP", 1, 2022, "García c/ López s/ divorcio", neuquen.id, p1.dni, [{ dni: p2.dni, vinculoId: demandado.id }]);
  await crearExpediente("JNQFA", "EXP", 2, 2023, "Rodríguez s/ tenencia", neuquen.id, p3.dni);
  await crearExpediente("JNQFA", "EXP", 3, 2023, "Martínez c/ Fernández s/ alimentos", neuquen.id, p4.dni, [{ dni: p5.dni, vinculoId: demandado.id }]);
  await crearExpediente("JNQFA", "EXP", 4, 2024, "Pérez s/ guarda", neuquen.id, p6.dni);
  await crearExpediente("JNQFA", "LEG", 1, 2024, "Gómez s/ adopción", neuquen.id, p7.dni);
  await crearExpediente("JNQFA", "EXP", 5, 2025, "Sánchez c/ García s/ régimen de visitas", neuquen.id, p8.dni, [{ dni: p1.dni, vinculoId: demandado.id }]);

  // Neuquén - Civil (JNQCI)
  await crearExpediente("JNQCI", "EXP", 1, 2022, "López c/ Municipalidad s/ daños", neuquen.id, p2.dni, [{ dni: p3.dni, vinculoId: demandado.id }]);
  await crearExpediente("JNQCI", "EXP", 2, 2023, "Fernández c/ constructora s/ vicios ocultos", neuquen.id, p5.dni);
  await crearExpediente("JNQCI", "EXP", 3, 2024, "Gómez c/ aseguradora s/ cobro", neuquen.id, p7.dni, [{ dni: p8.dni, vinculoId: demandado.id }]);
  await crearExpediente("JNQCI", "LEG", 1, 2025, "Rodríguez s/ sucesión", neuquen.id, p3.dni);

  // Neuquén - Laboral (JNQLA)
  await crearExpediente("JNQLA", "EXP", 1, 2022, "García c/ empresa s/ despido", neuquen.id, p1.dni, [{ dni: p4.dni, vinculoId: demandado.id }]);
  await crearExpediente("JNQLA", "EXP", 2, 2023, "Martínez c/ comercio s/ horas extra", neuquen.id, p4.dni);
  await crearExpediente("JNQLA", "EXP", 3, 2024, "Pérez c/ fábrica s/ accidente laboral", neuquen.id, p6.dni, [{ dni: p7.dni, vinculoId: demandado.id }]);
  await crearExpediente("JNQLA", "EXP", 4, 2025, "Sánchez c/ empresa s/ indemnización", neuquen.id, p8.dni);

  // Neuquén - Ejecutivos (JNQEJ)
  await crearExpediente("JNQEJ", "EXP", 1, 2023, "Banco c/ López s/ cobro ejecutivo", neuquen.id, p2.dni);
  await crearExpediente("JNQEJ", "EXP", 2, 2024, "Fernández c/ deudor s/ ejecución", neuquen.id, p5.dni, [{ dni: p1.dni, vinculoId: condenado.id }]);
  await crearExpediente("JNQEJ", "EXP", 3, 2025, "Gómez c/ empresa s/ cobro", neuquen.id, p7.dni);

  // Zapala - Civil (JZACI)
  await crearExpediente("JZACI", "EXP", 1, 2022, "Rodríguez c/ estado s/ daños", zapala.id, p3.dni);
  await crearExpediente("JZACI", "EXP", 2, 2023, "Martínez c/ vecino s/ límites", zapala.id, p4.dni, [{ dni: p5.dni, vinculoId: demandado.id }]);
  await crearExpediente("JZACI", "EXP", 3, 2024, "Pérez c/ municipio s/ daños", zapala.id, p6.dni);
  await crearExpediente("JZACI", "LEG", 1, 2025, "Sánchez s/ sucesión", zapala.id, p8.dni);

  // Zapala - Familia (JZAFA)
  await crearExpediente("JZAFA", "EXP", 1, 2023, "López s/ divorcio", zapala.id, p2.dni, [{ dni: p3.dni, vinculoId: demandado.id }]);
  await crearExpediente("JZAFA", "EXP", 2, 2024, "García c/ Martínez s/ alimentos", zapala.id, p1.dni);
  await crearExpediente("JZAFA", "EXP", 3, 2025, "Fernández s/ tenencia", zapala.id, p5.dni);

  // Junín - Ejecutivos (JJUEJ)
  await crearExpediente("JJUEJ", "EXP", 1, 2022, "Banco c/ Rodríguez s/ cobro", junin.id, p3.dni);
  await crearExpediente("JJUEJ", "EXP", 2, 2024, "Gómez c/ deudor s/ ejecución", junin.id, p7.dni, [{ dni: p8.dni, vinculoId: condenado.id }]);
  await crearExpediente("JJUEJ", "EXP", 3, 2025, "Pérez c/ empresa s/ cobro ejecutivo", junin.id, p6.dni);

  // Junín - Laboral (JJULA)
  await crearExpediente("JJULA", "EXP", 1, 2023, "Sánchez c/ empresa s/ despido", junin.id, p8.dni, [{ dni: p1.dni, vinculoId: demandado.id }]);
  await crearExpediente("JJULA", "EXP", 2, 2024, "López c/ comercio s/ accidente", junin.id, p2.dni);
  await crearExpediente("JJULA", "EXP", 3, 2025, "Martínez c/ fábrica s/ horas extra", junin.id, p4.dni);

  console.log("Seed completado — 30 expedientes cargados");
}

main().catch(console.error).finally(() => prisma.$disconnect());