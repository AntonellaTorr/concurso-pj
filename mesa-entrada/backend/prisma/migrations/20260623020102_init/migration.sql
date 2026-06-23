-- CreateTable
CREATE TABLE "Ciudad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Fuero" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Organismo" (
    "codigo" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "ciudadId" INTEGER NOT NULL,
    "fueroId" INTEGER NOT NULL,
    CONSTRAINT "Organismo_ciudadId_fkey" FOREIGN KEY ("ciudadId") REFERENCES "Ciudad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Organismo_fueroId_fkey" FOREIGN KEY ("fueroId") REFERENCES "Fuero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Expediente" (
    "codigoOrganismo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "anio" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "ciudadId" INTEGER NOT NULL,

    PRIMARY KEY ("codigoOrganismo", "tipo", "numero", "anio"),
    CONSTRAINT "Expediente_codigoOrganismo_fkey" FOREIGN KEY ("codigoOrganismo") REFERENCES "Organismo" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Expediente_ciudadId_fkey" FOREIGN KEY ("ciudadId") REFERENCES "Ciudad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Persona" (
    "dni" TEXT NOT NULL PRIMARY KEY,
    "apellido" TEXT NOT NULL,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TipoVinculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ExpedientePersona" (
    "expCodigoOrganismo" TEXT NOT NULL,
    "expTipo" TEXT NOT NULL,
    "expNumero" INTEGER NOT NULL,
    "expAnio" INTEGER NOT NULL,
    "personaDni" TEXT NOT NULL,
    "vinculoId" INTEGER NOT NULL,

    PRIMARY KEY ("expCodigoOrganismo", "expTipo", "expNumero", "expAnio", "personaDni"),
    CONSTRAINT "ExpedientePersona_expCodigoOrganismo_expTipo_expNumero_expAnio_fkey" FOREIGN KEY ("expCodigoOrganismo", "expTipo", "expNumero", "expAnio") REFERENCES "Expediente" ("codigoOrganismo", "tipo", "numero", "anio") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExpedientePersona_personaDni_fkey" FOREIGN KEY ("personaDni") REFERENCES "Persona" ("dni") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExpedientePersona_vinculoId_fkey" FOREIGN KEY ("vinculoId") REFERENCES "TipoVinculo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Ciudad_nombre_key" ON "Ciudad"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Ciudad_codigo_key" ON "Ciudad"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Fuero_nombre_key" ON "Fuero"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Fuero_codigo_key" ON "Fuero"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "TipoVinculo_descripcion_key" ON "TipoVinculo"("descripcion");
