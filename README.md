# Mesa de Entradas Virtual — Poder Judicial Neuquén

Aplicación fullstack para el registro y gestión de expedientes judiciales, desarrollada para el Concurso Programador/a de Aplicaciones Informáticas MF7.


---

## Demo

| | URL |
|---|---|
| Frontend | https://concurso-pj.vercel.app |
| Backend | https://mesa-entradapj.onrender.com |

> **Nota**: el backend está hosteado en Render con tier gratuito, por lo que puede tardar hasta 1 minuto en responder si estuvo inactivo.

---

## Tecnologías

| Capa | Tecnología |
|---|---|
| Frontend | React 19 + TypeScript + Vite |
| Design System | Ant Design 6 + Recharts |
| Backend | Node.js + Express 5 + TypeScript |
| ORM | Prisma 7 |
| Base de datos | SQLite (via libsql) |

---

## Estructura del proyecto

```
mesa-entrada/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   └── src/
│       ├── index.ts
│       ├── prisma.ts
│       └── routes/
│           ├── expedientes.ts
│           ├── personas.ts
│           ├── organismos.ts
│           ├── estadisticas.ts
│           ├── ciudades.ts
│           ├── fueros.ts
│           └── tipovinculos.ts
└── frontend/
    └── src/
        ├── App.tsx
        └── pages/
            ├── Home.tsx
            ├── Expedientes.tsx
            ├── Personas.tsx
            ├── Organismos.tsx
            └── Estadisticas.tsx
```

---

## Puesta en marcha

### Requisitos previos

- Node.js 18+
- npm 9+

### Backend

```bash
cd mesa-entrada/backend
npm install
npm run seed      # carga datos ficticios (30 expedientes, personas, organismos)
npm run dev       # inicia el servidor en http://localhost:3000
```

### Frontend

```bash
cd mesa-entrada/frontend
npm install
npm run dev       # inicia en http://localhost:5173
```


### Con Docker (alternativa)

Requiere Docker Desktop instalado y corriendo.

```bash
cd mesa-entrada
docker compose up --build   # primera vez (construye las imágenes)
docker compose up           # siguientes veces
docker compose down         # para detener
```

Esto levanta backend en `http://localhost:3000` y frontend en `http://localhost:5173`. El seed se ejecuta automáticamente al iniciar el contenedor del backend. La base de datos SQLite se persiste en `backend/dev.db` mediante un volumen.

---

## API — Endpoints principales

### Expedientes
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/expedientes` | Listar todos |
| GET | `/expedientes/:org/:tipo/:nro/:anio` | Obtener uno |
| POST | `/expedientes` | Crear (requiere `actorDni`) |
| PUT | `/expedientes/:org/:tipo/:nro/:anio` | Actualizar |
| DELETE | `/expedientes/:org/:tipo/:nro/:anio` | Eliminar |
| GET | `/expedientes/:org/:tipo/:nro/:anio/personas` | Personas del expediente |
| POST | `/expedientes/:org/:tipo/:nro/:anio/personas` | Agregar persona al expediente |
| DELETE | `/expedientes/:org/:tipo/:nro/:anio/personas/:dni` | Eliminar persona del expediente (no aplica al actor) |

### Personas
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/personas` | Listar todas |
| GET | `/personas/:dni` | Obtener una |
| POST | `/personas` | Crear |
| PUT | `/personas/:dni` | Actualizar |
| DELETE | `/personas/:dni` | Eliminar |
| GET | `/personas/:dni/expedientes` | Expedientes de una persona |

### Organismos
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/organismos` | Listar todos |
| GET | `/organismos/:codigo` | Obtener uno |
| POST | `/organismos` | Crear (genera el código automáticamente) |
| PUT | `/organismos/:codigo` | Actualizar |
| DELETE | `/organismos/:codigo` | Eliminar |

### Otros
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/estadisticas` | Expedientes por año, ciudad y fuero |
| GET | `/ciudades` | Listar ciudades |
| GET | `/fueros` | Listar fueros |
| GET | `/tipovinculos` | Listar tipos de vínculo |

---

## Decisiones de diseño

**Clave del expediente**: Se usa una clave compuesta en Prisma (`codigoOrganismo + tipo + numero + anio`) en lugar de un ID autoincremental, respetando la clave natural del dominio judicial.

**Código de organismo**: Se genera automáticamente en el backend a partir de ciudad y fuero seleccionados, con el formato `J<CIUDAD><FUERO>` (ej: `JNQFA`, `JZACI`), evitando que el usuario lo ingrese manualmente y posibles errores.

**Actor principal**: Al crear un expediente se requiere el DNI del actor (`actorDni`). La creación del expediente y la asociación del actor se realizan en una transacción para garantizar consistencia. El endpoint de agregar personas al expediente bloquea explícitamente el vínculo ACTOR para que solo pueda existir uno.

**Datos iniciales**: El seed carga 8 organismos (combinando 3 ciudades × 4 fueros), 8 personas y 30 expedientes distribuidos entre todos los organismos, para que los listados y estadísticas tengan datos representativos desde el primer arranque.

**Prisma como ORM**: Se eligió Prisma por familiaridad previa con la herramienta. Ofrece tipado fuerte integrado con TypeScript, lo que reduce errores en tiempo de desarrollo y mejora la experiencia con autocompletado. El esquema centralizado en `schema.prisma` facilita entender el modelo de datos de un vistazo. Además, Prisma maneja las relaciones entre tablas de forma declarativa, genera el cliente tipado automáticamente a partir del esquema, y provee soporte nativo para transacciones

**SQLite con libsql**: Se eligió SQLite por practicidad y portabilidad (un solo archivo `dev.db`, sin servidor de base de datos externo). Se usa el adaptador `@prisma/adapter-libsql` compatible con Prisma 7.

**Recharts para estadísticas**: Se eligió Recharts por su integración natural con React y su compatibilidad con Ant Design, evitando conflictos de estilos.

**Una persona, un vínculo por expediente**: La clave primaria de `ExpedientePersona` no incluye el `vinculoId`, por lo que una misma persona no puede aparecer dos veces en el mismo expediente con vínculos distintos. El enunciado no lo especifica, y se optó por esta restricción para simplificar el modelo y evitar ambigüedades.

**Integridad referencial**: No se permite eliminar una persona que esté vinculada a uno o más expedientes, ni un organismo que tenga expedientes asociados, ni un expediente que tenga personas vinculadas. El backend detecta el error de clave foránea de Prisma (códigos `P2003`/`P2014`) y devuelve un mensaje claro al frontend en lugar de un error genérico.

---

## Datos de prueba incluidos

El seed genera automáticamente:
- 3 ciudades: Neuquén, Zapala, Junín de los Andes
- 4 fueros: Familia, Civil, Laboral, Ejecutivos
- 8 organismos judiciales
- 4 tipos de vínculo: ACTOR, DEMANDADO, CONDENADO, VÍCTIMA
- 8 personas con datos ficticios
- 30 expedientes distribuidos entre años 2022–2025
