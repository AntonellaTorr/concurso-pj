
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ciudad
 * 
 */
export type Ciudad = $Result.DefaultSelection<Prisma.$CiudadPayload>
/**
 * Model Fuero
 * 
 */
export type Fuero = $Result.DefaultSelection<Prisma.$FueroPayload>
/**
 * Model Organismo
 * 
 */
export type Organismo = $Result.DefaultSelection<Prisma.$OrganismoPayload>
/**
 * Model Expediente
 * 
 */
export type Expediente = $Result.DefaultSelection<Prisma.$ExpedientePayload>
/**
 * Model Persona
 * 
 */
export type Persona = $Result.DefaultSelection<Prisma.$PersonaPayload>
/**
 * Model TipoVinculo
 * 
 */
export type TipoVinculo = $Result.DefaultSelection<Prisma.$TipoVinculoPayload>
/**
 * Model ExpedientePersona
 * 
 */
export type ExpedientePersona = $Result.DefaultSelection<Prisma.$ExpedientePersonaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Ciudads
 * const ciudads = await prisma.ciudad.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Ciudads
   * const ciudads = await prisma.ciudad.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ciudad`: Exposes CRUD operations for the **Ciudad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ciudads
    * const ciudads = await prisma.ciudad.findMany()
    * ```
    */
  get ciudad(): Prisma.CiudadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fuero`: Exposes CRUD operations for the **Fuero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fueros
    * const fueros = await prisma.fuero.findMany()
    * ```
    */
  get fuero(): Prisma.FueroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organismo`: Exposes CRUD operations for the **Organismo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organismos
    * const organismos = await prisma.organismo.findMany()
    * ```
    */
  get organismo(): Prisma.OrganismoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expediente`: Exposes CRUD operations for the **Expediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expedientes
    * const expedientes = await prisma.expediente.findMany()
    * ```
    */
  get expediente(): Prisma.ExpedienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.persona`: Exposes CRUD operations for the **Persona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personas
    * const personas = await prisma.persona.findMany()
    * ```
    */
  get persona(): Prisma.PersonaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoVinculo`: Exposes CRUD operations for the **TipoVinculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoVinculos
    * const tipoVinculos = await prisma.tipoVinculo.findMany()
    * ```
    */
  get tipoVinculo(): Prisma.TipoVinculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expedientePersona`: Exposes CRUD operations for the **ExpedientePersona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpedientePersonas
    * const expedientePersonas = await prisma.expedientePersona.findMany()
    * ```
    */
  get expedientePersona(): Prisma.ExpedientePersonaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ciudad: 'Ciudad',
    Fuero: 'Fuero',
    Organismo: 'Organismo',
    Expediente: 'Expediente',
    Persona: 'Persona',
    TipoVinculo: 'TipoVinculo',
    ExpedientePersona: 'ExpedientePersona'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ciudad" | "fuero" | "organismo" | "expediente" | "persona" | "tipoVinculo" | "expedientePersona"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Ciudad: {
        payload: Prisma.$CiudadPayload<ExtArgs>
        fields: Prisma.CiudadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CiudadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CiudadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          findFirst: {
            args: Prisma.CiudadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CiudadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          findMany: {
            args: Prisma.CiudadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>[]
          }
          create: {
            args: Prisma.CiudadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          createMany: {
            args: Prisma.CiudadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CiudadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>[]
          }
          delete: {
            args: Prisma.CiudadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          update: {
            args: Prisma.CiudadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          deleteMany: {
            args: Prisma.CiudadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CiudadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CiudadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>[]
          }
          upsert: {
            args: Prisma.CiudadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          aggregate: {
            args: Prisma.CiudadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCiudad>
          }
          groupBy: {
            args: Prisma.CiudadGroupByArgs<ExtArgs>
            result: $Utils.Optional<CiudadGroupByOutputType>[]
          }
          count: {
            args: Prisma.CiudadCountArgs<ExtArgs>
            result: $Utils.Optional<CiudadCountAggregateOutputType> | number
          }
        }
      }
      Fuero: {
        payload: Prisma.$FueroPayload<ExtArgs>
        fields: Prisma.FueroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FueroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FueroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload>
          }
          findFirst: {
            args: Prisma.FueroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FueroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload>
          }
          findMany: {
            args: Prisma.FueroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload>[]
          }
          create: {
            args: Prisma.FueroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload>
          }
          createMany: {
            args: Prisma.FueroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FueroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload>[]
          }
          delete: {
            args: Prisma.FueroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload>
          }
          update: {
            args: Prisma.FueroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload>
          }
          deleteMany: {
            args: Prisma.FueroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FueroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FueroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload>[]
          }
          upsert: {
            args: Prisma.FueroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FueroPayload>
          }
          aggregate: {
            args: Prisma.FueroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuero>
          }
          groupBy: {
            args: Prisma.FueroGroupByArgs<ExtArgs>
            result: $Utils.Optional<FueroGroupByOutputType>[]
          }
          count: {
            args: Prisma.FueroCountArgs<ExtArgs>
            result: $Utils.Optional<FueroCountAggregateOutputType> | number
          }
        }
      }
      Organismo: {
        payload: Prisma.$OrganismoPayload<ExtArgs>
        fields: Prisma.OrganismoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganismoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganismoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload>
          }
          findFirst: {
            args: Prisma.OrganismoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganismoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload>
          }
          findMany: {
            args: Prisma.OrganismoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload>[]
          }
          create: {
            args: Prisma.OrganismoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload>
          }
          createMany: {
            args: Prisma.OrganismoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganismoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload>[]
          }
          delete: {
            args: Prisma.OrganismoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload>
          }
          update: {
            args: Prisma.OrganismoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload>
          }
          deleteMany: {
            args: Prisma.OrganismoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganismoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganismoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload>[]
          }
          upsert: {
            args: Prisma.OrganismoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganismoPayload>
          }
          aggregate: {
            args: Prisma.OrganismoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganismo>
          }
          groupBy: {
            args: Prisma.OrganismoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganismoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganismoCountArgs<ExtArgs>
            result: $Utils.Optional<OrganismoCountAggregateOutputType> | number
          }
        }
      }
      Expediente: {
        payload: Prisma.$ExpedientePayload<ExtArgs>
        fields: Prisma.ExpedienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpedienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpedienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          findFirst: {
            args: Prisma.ExpedienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpedienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          findMany: {
            args: Prisma.ExpedienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>[]
          }
          create: {
            args: Prisma.ExpedienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          createMany: {
            args: Prisma.ExpedienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpedienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>[]
          }
          delete: {
            args: Prisma.ExpedienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          update: {
            args: Prisma.ExpedienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          deleteMany: {
            args: Prisma.ExpedienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpedienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpedienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>[]
          }
          upsert: {
            args: Prisma.ExpedienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          aggregate: {
            args: Prisma.ExpedienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpediente>
          }
          groupBy: {
            args: Prisma.ExpedienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpedienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpedienteCountArgs<ExtArgs>
            result: $Utils.Optional<ExpedienteCountAggregateOutputType> | number
          }
        }
      }
      Persona: {
        payload: Prisma.$PersonaPayload<ExtArgs>
        fields: Prisma.PersonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findFirst: {
            args: Prisma.PersonaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findMany: {
            args: Prisma.PersonaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          create: {
            args: Prisma.PersonaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          createMany: {
            args: Prisma.PersonaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          delete: {
            args: Prisma.PersonaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          update: {
            args: Prisma.PersonaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          deleteMany: {
            args: Prisma.PersonaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          upsert: {
            args: Prisma.PersonaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          aggregate: {
            args: Prisma.PersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersona>
          }
          groupBy: {
            args: Prisma.PersonaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonaCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaCountAggregateOutputType> | number
          }
        }
      }
      TipoVinculo: {
        payload: Prisma.$TipoVinculoPayload<ExtArgs>
        fields: Prisma.TipoVinculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoVinculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoVinculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload>
          }
          findFirst: {
            args: Prisma.TipoVinculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoVinculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload>
          }
          findMany: {
            args: Prisma.TipoVinculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload>[]
          }
          create: {
            args: Prisma.TipoVinculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload>
          }
          createMany: {
            args: Prisma.TipoVinculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoVinculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload>[]
          }
          delete: {
            args: Prisma.TipoVinculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload>
          }
          update: {
            args: Prisma.TipoVinculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload>
          }
          deleteMany: {
            args: Prisma.TipoVinculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoVinculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoVinculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload>[]
          }
          upsert: {
            args: Prisma.TipoVinculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVinculoPayload>
          }
          aggregate: {
            args: Prisma.TipoVinculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoVinculo>
          }
          groupBy: {
            args: Prisma.TipoVinculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoVinculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoVinculoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoVinculoCountAggregateOutputType> | number
          }
        }
      }
      ExpedientePersona: {
        payload: Prisma.$ExpedientePersonaPayload<ExtArgs>
        fields: Prisma.ExpedientePersonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpedientePersonaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpedientePersonaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload>
          }
          findFirst: {
            args: Prisma.ExpedientePersonaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpedientePersonaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload>
          }
          findMany: {
            args: Prisma.ExpedientePersonaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload>[]
          }
          create: {
            args: Prisma.ExpedientePersonaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload>
          }
          createMany: {
            args: Prisma.ExpedientePersonaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpedientePersonaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload>[]
          }
          delete: {
            args: Prisma.ExpedientePersonaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload>
          }
          update: {
            args: Prisma.ExpedientePersonaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload>
          }
          deleteMany: {
            args: Prisma.ExpedientePersonaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpedientePersonaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpedientePersonaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload>[]
          }
          upsert: {
            args: Prisma.ExpedientePersonaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePersonaPayload>
          }
          aggregate: {
            args: Prisma.ExpedientePersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpedientePersona>
          }
          groupBy: {
            args: Prisma.ExpedientePersonaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpedientePersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpedientePersonaCountArgs<ExtArgs>
            result: $Utils.Optional<ExpedientePersonaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    ciudad?: CiudadOmit
    fuero?: FueroOmit
    organismo?: OrganismoOmit
    expediente?: ExpedienteOmit
    persona?: PersonaOmit
    tipoVinculo?: TipoVinculoOmit
    expedientePersona?: ExpedientePersonaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CiudadCountOutputType
   */

  export type CiudadCountOutputType = {
    expedientes: number
    organismos: number
  }

  export type CiudadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedientes?: boolean | CiudadCountOutputTypeCountExpedientesArgs
    organismos?: boolean | CiudadCountOutputTypeCountOrganismosArgs
  }

  // Custom InputTypes
  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CiudadCountOutputType
     */
    select?: CiudadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeCountExpedientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedienteWhereInput
  }

  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeCountOrganismosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganismoWhereInput
  }


  /**
   * Count Type FueroCountOutputType
   */

  export type FueroCountOutputType = {
    organismos: number
  }

  export type FueroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organismos?: boolean | FueroCountOutputTypeCountOrganismosArgs
  }

  // Custom InputTypes
  /**
   * FueroCountOutputType without action
   */
  export type FueroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FueroCountOutputType
     */
    select?: FueroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FueroCountOutputType without action
   */
  export type FueroCountOutputTypeCountOrganismosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganismoWhereInput
  }


  /**
   * Count Type OrganismoCountOutputType
   */

  export type OrganismoCountOutputType = {
    expedientes: number
  }

  export type OrganismoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedientes?: boolean | OrganismoCountOutputTypeCountExpedientesArgs
  }

  // Custom InputTypes
  /**
   * OrganismoCountOutputType without action
   */
  export type OrganismoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganismoCountOutputType
     */
    select?: OrganismoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganismoCountOutputType without action
   */
  export type OrganismoCountOutputTypeCountExpedientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedienteWhereInput
  }


  /**
   * Count Type ExpedienteCountOutputType
   */

  export type ExpedienteCountOutputType = {
    personas: number
  }

  export type ExpedienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personas?: boolean | ExpedienteCountOutputTypeCountPersonasArgs
  }

  // Custom InputTypes
  /**
   * ExpedienteCountOutputType without action
   */
  export type ExpedienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedienteCountOutputType
     */
    select?: ExpedienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpedienteCountOutputType without action
   */
  export type ExpedienteCountOutputTypeCountPersonasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedientePersonaWhereInput
  }


  /**
   * Count Type PersonaCountOutputType
   */

  export type PersonaCountOutputType = {
    expedientes: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedientes?: boolean | PersonaCountOutputTypeCountExpedientesArgs
  }

  // Custom InputTypes
  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: PersonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountExpedientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedientePersonaWhereInput
  }


  /**
   * Count Type TipoVinculoCountOutputType
   */

  export type TipoVinculoCountOutputType = {
    expedientePersonas: number
  }

  export type TipoVinculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedientePersonas?: boolean | TipoVinculoCountOutputTypeCountExpedientePersonasArgs
  }

  // Custom InputTypes
  /**
   * TipoVinculoCountOutputType without action
   */
  export type TipoVinculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculoCountOutputType
     */
    select?: TipoVinculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoVinculoCountOutputType without action
   */
  export type TipoVinculoCountOutputTypeCountExpedientePersonasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedientePersonaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ciudad
   */

  export type AggregateCiudad = {
    _count: CiudadCountAggregateOutputType | null
    _avg: CiudadAvgAggregateOutputType | null
    _sum: CiudadSumAggregateOutputType | null
    _min: CiudadMinAggregateOutputType | null
    _max: CiudadMaxAggregateOutputType | null
  }

  export type CiudadAvgAggregateOutputType = {
    id: number | null
  }

  export type CiudadSumAggregateOutputType = {
    id: number | null
  }

  export type CiudadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
  }

  export type CiudadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
  }

  export type CiudadCountAggregateOutputType = {
    id: number
    nombre: number
    codigo: number
    _all: number
  }


  export type CiudadAvgAggregateInputType = {
    id?: true
  }

  export type CiudadSumAggregateInputType = {
    id?: true
  }

  export type CiudadMinAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
  }

  export type CiudadMaxAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
  }

  export type CiudadCountAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    _all?: true
  }

  export type CiudadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciudad to aggregate.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ciudads
    **/
    _count?: true | CiudadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CiudadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CiudadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CiudadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CiudadMaxAggregateInputType
  }

  export type GetCiudadAggregateType<T extends CiudadAggregateArgs> = {
        [P in keyof T & keyof AggregateCiudad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCiudad[P]>
      : GetScalarType<T[P], AggregateCiudad[P]>
  }




  export type CiudadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CiudadWhereInput
    orderBy?: CiudadOrderByWithAggregationInput | CiudadOrderByWithAggregationInput[]
    by: CiudadScalarFieldEnum[] | CiudadScalarFieldEnum
    having?: CiudadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CiudadCountAggregateInputType | true
    _avg?: CiudadAvgAggregateInputType
    _sum?: CiudadSumAggregateInputType
    _min?: CiudadMinAggregateInputType
    _max?: CiudadMaxAggregateInputType
  }

  export type CiudadGroupByOutputType = {
    id: number
    nombre: string
    codigo: string
    _count: CiudadCountAggregateOutputType | null
    _avg: CiudadAvgAggregateOutputType | null
    _sum: CiudadSumAggregateOutputType | null
    _min: CiudadMinAggregateOutputType | null
    _max: CiudadMaxAggregateOutputType | null
  }

  type GetCiudadGroupByPayload<T extends CiudadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CiudadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CiudadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CiudadGroupByOutputType[P]>
            : GetScalarType<T[P], CiudadGroupByOutputType[P]>
        }
      >
    >


  export type CiudadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    expedientes?: boolean | Ciudad$expedientesArgs<ExtArgs>
    organismos?: boolean | Ciudad$organismosArgs<ExtArgs>
    _count?: boolean | CiudadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciudad"]>

  export type CiudadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
  }, ExtArgs["result"]["ciudad"]>

  export type CiudadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
  }, ExtArgs["result"]["ciudad"]>

  export type CiudadSelectScalar = {
    id?: boolean
    nombre?: boolean
    codigo?: boolean
  }

  export type CiudadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "codigo", ExtArgs["result"]["ciudad"]>
  export type CiudadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedientes?: boolean | Ciudad$expedientesArgs<ExtArgs>
    organismos?: boolean | Ciudad$organismosArgs<ExtArgs>
    _count?: boolean | CiudadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CiudadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CiudadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CiudadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ciudad"
    objects: {
      expedientes: Prisma.$ExpedientePayload<ExtArgs>[]
      organismos: Prisma.$OrganismoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      codigo: string
    }, ExtArgs["result"]["ciudad"]>
    composites: {}
  }

  type CiudadGetPayload<S extends boolean | null | undefined | CiudadDefaultArgs> = $Result.GetResult<Prisma.$CiudadPayload, S>

  type CiudadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CiudadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CiudadCountAggregateInputType | true
    }

  export interface CiudadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ciudad'], meta: { name: 'Ciudad' } }
    /**
     * Find zero or one Ciudad that matches the filter.
     * @param {CiudadFindUniqueArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CiudadFindUniqueArgs>(args: SelectSubset<T, CiudadFindUniqueArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ciudad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CiudadFindUniqueOrThrowArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CiudadFindUniqueOrThrowArgs>(args: SelectSubset<T, CiudadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindFirstArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CiudadFindFirstArgs>(args?: SelectSubset<T, CiudadFindFirstArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindFirstOrThrowArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CiudadFindFirstOrThrowArgs>(args?: SelectSubset<T, CiudadFindFirstOrThrowArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ciudads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ciudads
     * const ciudads = await prisma.ciudad.findMany()
     * 
     * // Get first 10 Ciudads
     * const ciudads = await prisma.ciudad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CiudadFindManyArgs>(args?: SelectSubset<T, CiudadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ciudad.
     * @param {CiudadCreateArgs} args - Arguments to create a Ciudad.
     * @example
     * // Create one Ciudad
     * const Ciudad = await prisma.ciudad.create({
     *   data: {
     *     // ... data to create a Ciudad
     *   }
     * })
     * 
     */
    create<T extends CiudadCreateArgs>(args: SelectSubset<T, CiudadCreateArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ciudads.
     * @param {CiudadCreateManyArgs} args - Arguments to create many Ciudads.
     * @example
     * // Create many Ciudads
     * const ciudad = await prisma.ciudad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CiudadCreateManyArgs>(args?: SelectSubset<T, CiudadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ciudads and returns the data saved in the database.
     * @param {CiudadCreateManyAndReturnArgs} args - Arguments to create many Ciudads.
     * @example
     * // Create many Ciudads
     * const ciudad = await prisma.ciudad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ciudads and only return the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CiudadCreateManyAndReturnArgs>(args?: SelectSubset<T, CiudadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ciudad.
     * @param {CiudadDeleteArgs} args - Arguments to delete one Ciudad.
     * @example
     * // Delete one Ciudad
     * const Ciudad = await prisma.ciudad.delete({
     *   where: {
     *     // ... filter to delete one Ciudad
     *   }
     * })
     * 
     */
    delete<T extends CiudadDeleteArgs>(args: SelectSubset<T, CiudadDeleteArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ciudad.
     * @param {CiudadUpdateArgs} args - Arguments to update one Ciudad.
     * @example
     * // Update one Ciudad
     * const ciudad = await prisma.ciudad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CiudadUpdateArgs>(args: SelectSubset<T, CiudadUpdateArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ciudads.
     * @param {CiudadDeleteManyArgs} args - Arguments to filter Ciudads to delete.
     * @example
     * // Delete a few Ciudads
     * const { count } = await prisma.ciudad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CiudadDeleteManyArgs>(args?: SelectSubset<T, CiudadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ciudads
     * const ciudad = await prisma.ciudad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CiudadUpdateManyArgs>(args: SelectSubset<T, CiudadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudads and returns the data updated in the database.
     * @param {CiudadUpdateManyAndReturnArgs} args - Arguments to update many Ciudads.
     * @example
     * // Update many Ciudads
     * const ciudad = await prisma.ciudad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ciudads and only return the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CiudadUpdateManyAndReturnArgs>(args: SelectSubset<T, CiudadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ciudad.
     * @param {CiudadUpsertArgs} args - Arguments to update or create a Ciudad.
     * @example
     * // Update or create a Ciudad
     * const ciudad = await prisma.ciudad.upsert({
     *   create: {
     *     // ... data to create a Ciudad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ciudad we want to update
     *   }
     * })
     */
    upsert<T extends CiudadUpsertArgs>(args: SelectSubset<T, CiudadUpsertArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ciudads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadCountArgs} args - Arguments to filter Ciudads to count.
     * @example
     * // Count the number of Ciudads
     * const count = await prisma.ciudad.count({
     *   where: {
     *     // ... the filter for the Ciudads we want to count
     *   }
     * })
    **/
    count<T extends CiudadCountArgs>(
      args?: Subset<T, CiudadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CiudadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ciudad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CiudadAggregateArgs>(args: Subset<T, CiudadAggregateArgs>): Prisma.PrismaPromise<GetCiudadAggregateType<T>>

    /**
     * Group by Ciudad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CiudadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CiudadGroupByArgs['orderBy'] }
        : { orderBy?: CiudadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CiudadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCiudadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ciudad model
   */
  readonly fields: CiudadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ciudad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CiudadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expedientes<T extends Ciudad$expedientesArgs<ExtArgs> = {}>(args?: Subset<T, Ciudad$expedientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organismos<T extends Ciudad$organismosArgs<ExtArgs> = {}>(args?: Subset<T, Ciudad$organismosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ciudad model
   */
  interface CiudadFieldRefs {
    readonly id: FieldRef<"Ciudad", 'Int'>
    readonly nombre: FieldRef<"Ciudad", 'String'>
    readonly codigo: FieldRef<"Ciudad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ciudad findUnique
   */
  export type CiudadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad findUniqueOrThrow
   */
  export type CiudadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad findFirst
   */
  export type CiudadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad findFirstOrThrow
   */
  export type CiudadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad findMany
   */
  export type CiudadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudads to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad create
   */
  export type CiudadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The data needed to create a Ciudad.
     */
    data: XOR<CiudadCreateInput, CiudadUncheckedCreateInput>
  }

  /**
   * Ciudad createMany
   */
  export type CiudadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ciudads.
     */
    data: CiudadCreateManyInput | CiudadCreateManyInput[]
  }

  /**
   * Ciudad createManyAndReturn
   */
  export type CiudadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * The data used to create many Ciudads.
     */
    data: CiudadCreateManyInput | CiudadCreateManyInput[]
  }

  /**
   * Ciudad update
   */
  export type CiudadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The data needed to update a Ciudad.
     */
    data: XOR<CiudadUpdateInput, CiudadUncheckedUpdateInput>
    /**
     * Choose, which Ciudad to update.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad updateMany
   */
  export type CiudadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ciudads.
     */
    data: XOR<CiudadUpdateManyMutationInput, CiudadUncheckedUpdateManyInput>
    /**
     * Filter which Ciudads to update
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to update.
     */
    limit?: number
  }

  /**
   * Ciudad updateManyAndReturn
   */
  export type CiudadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * The data used to update Ciudads.
     */
    data: XOR<CiudadUpdateManyMutationInput, CiudadUncheckedUpdateManyInput>
    /**
     * Filter which Ciudads to update
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to update.
     */
    limit?: number
  }

  /**
   * Ciudad upsert
   */
  export type CiudadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The filter to search for the Ciudad to update in case it exists.
     */
    where: CiudadWhereUniqueInput
    /**
     * In case the Ciudad found by the `where` argument doesn't exist, create a new Ciudad with this data.
     */
    create: XOR<CiudadCreateInput, CiudadUncheckedCreateInput>
    /**
     * In case the Ciudad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CiudadUpdateInput, CiudadUncheckedUpdateInput>
  }

  /**
   * Ciudad delete
   */
  export type CiudadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter which Ciudad to delete.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad deleteMany
   */
  export type CiudadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciudads to delete
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to delete.
     */
    limit?: number
  }

  /**
   * Ciudad.expedientes
   */
  export type Ciudad$expedientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    where?: ExpedienteWhereInput
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    cursor?: ExpedienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpedienteScalarFieldEnum | ExpedienteScalarFieldEnum[]
  }

  /**
   * Ciudad.organismos
   */
  export type Ciudad$organismosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    where?: OrganismoWhereInput
    orderBy?: OrganismoOrderByWithRelationInput | OrganismoOrderByWithRelationInput[]
    cursor?: OrganismoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganismoScalarFieldEnum | OrganismoScalarFieldEnum[]
  }

  /**
   * Ciudad without action
   */
  export type CiudadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
  }


  /**
   * Model Fuero
   */

  export type AggregateFuero = {
    _count: FueroCountAggregateOutputType | null
    _avg: FueroAvgAggregateOutputType | null
    _sum: FueroSumAggregateOutputType | null
    _min: FueroMinAggregateOutputType | null
    _max: FueroMaxAggregateOutputType | null
  }

  export type FueroAvgAggregateOutputType = {
    id: number | null
  }

  export type FueroSumAggregateOutputType = {
    id: number | null
  }

  export type FueroMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
  }

  export type FueroMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
  }

  export type FueroCountAggregateOutputType = {
    id: number
    nombre: number
    codigo: number
    _all: number
  }


  export type FueroAvgAggregateInputType = {
    id?: true
  }

  export type FueroSumAggregateInputType = {
    id?: true
  }

  export type FueroMinAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
  }

  export type FueroMaxAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
  }

  export type FueroCountAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    _all?: true
  }

  export type FueroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fuero to aggregate.
     */
    where?: FueroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fueros to fetch.
     */
    orderBy?: FueroOrderByWithRelationInput | FueroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FueroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fueros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fueros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fueros
    **/
    _count?: true | FueroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FueroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FueroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FueroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FueroMaxAggregateInputType
  }

  export type GetFueroAggregateType<T extends FueroAggregateArgs> = {
        [P in keyof T & keyof AggregateFuero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuero[P]>
      : GetScalarType<T[P], AggregateFuero[P]>
  }




  export type FueroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FueroWhereInput
    orderBy?: FueroOrderByWithAggregationInput | FueroOrderByWithAggregationInput[]
    by: FueroScalarFieldEnum[] | FueroScalarFieldEnum
    having?: FueroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FueroCountAggregateInputType | true
    _avg?: FueroAvgAggregateInputType
    _sum?: FueroSumAggregateInputType
    _min?: FueroMinAggregateInputType
    _max?: FueroMaxAggregateInputType
  }

  export type FueroGroupByOutputType = {
    id: number
    nombre: string
    codigo: string
    _count: FueroCountAggregateOutputType | null
    _avg: FueroAvgAggregateOutputType | null
    _sum: FueroSumAggregateOutputType | null
    _min: FueroMinAggregateOutputType | null
    _max: FueroMaxAggregateOutputType | null
  }

  type GetFueroGroupByPayload<T extends FueroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FueroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FueroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FueroGroupByOutputType[P]>
            : GetScalarType<T[P], FueroGroupByOutputType[P]>
        }
      >
    >


  export type FueroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    organismos?: boolean | Fuero$organismosArgs<ExtArgs>
    _count?: boolean | FueroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fuero"]>

  export type FueroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
  }, ExtArgs["result"]["fuero"]>

  export type FueroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
  }, ExtArgs["result"]["fuero"]>

  export type FueroSelectScalar = {
    id?: boolean
    nombre?: boolean
    codigo?: boolean
  }

  export type FueroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "codigo", ExtArgs["result"]["fuero"]>
  export type FueroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organismos?: boolean | Fuero$organismosArgs<ExtArgs>
    _count?: boolean | FueroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FueroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FueroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FueroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fuero"
    objects: {
      organismos: Prisma.$OrganismoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      codigo: string
    }, ExtArgs["result"]["fuero"]>
    composites: {}
  }

  type FueroGetPayload<S extends boolean | null | undefined | FueroDefaultArgs> = $Result.GetResult<Prisma.$FueroPayload, S>

  type FueroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FueroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FueroCountAggregateInputType | true
    }

  export interface FueroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fuero'], meta: { name: 'Fuero' } }
    /**
     * Find zero or one Fuero that matches the filter.
     * @param {FueroFindUniqueArgs} args - Arguments to find a Fuero
     * @example
     * // Get one Fuero
     * const fuero = await prisma.fuero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FueroFindUniqueArgs>(args: SelectSubset<T, FueroFindUniqueArgs<ExtArgs>>): Prisma__FueroClient<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fuero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FueroFindUniqueOrThrowArgs} args - Arguments to find a Fuero
     * @example
     * // Get one Fuero
     * const fuero = await prisma.fuero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FueroFindUniqueOrThrowArgs>(args: SelectSubset<T, FueroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FueroClient<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fuero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FueroFindFirstArgs} args - Arguments to find a Fuero
     * @example
     * // Get one Fuero
     * const fuero = await prisma.fuero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FueroFindFirstArgs>(args?: SelectSubset<T, FueroFindFirstArgs<ExtArgs>>): Prisma__FueroClient<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fuero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FueroFindFirstOrThrowArgs} args - Arguments to find a Fuero
     * @example
     * // Get one Fuero
     * const fuero = await prisma.fuero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FueroFindFirstOrThrowArgs>(args?: SelectSubset<T, FueroFindFirstOrThrowArgs<ExtArgs>>): Prisma__FueroClient<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fueros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FueroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fueros
     * const fueros = await prisma.fuero.findMany()
     * 
     * // Get first 10 Fueros
     * const fueros = await prisma.fuero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fueroWithIdOnly = await prisma.fuero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FueroFindManyArgs>(args?: SelectSubset<T, FueroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fuero.
     * @param {FueroCreateArgs} args - Arguments to create a Fuero.
     * @example
     * // Create one Fuero
     * const Fuero = await prisma.fuero.create({
     *   data: {
     *     // ... data to create a Fuero
     *   }
     * })
     * 
     */
    create<T extends FueroCreateArgs>(args: SelectSubset<T, FueroCreateArgs<ExtArgs>>): Prisma__FueroClient<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fueros.
     * @param {FueroCreateManyArgs} args - Arguments to create many Fueros.
     * @example
     * // Create many Fueros
     * const fuero = await prisma.fuero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FueroCreateManyArgs>(args?: SelectSubset<T, FueroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fueros and returns the data saved in the database.
     * @param {FueroCreateManyAndReturnArgs} args - Arguments to create many Fueros.
     * @example
     * // Create many Fueros
     * const fuero = await prisma.fuero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fueros and only return the `id`
     * const fueroWithIdOnly = await prisma.fuero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FueroCreateManyAndReturnArgs>(args?: SelectSubset<T, FueroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fuero.
     * @param {FueroDeleteArgs} args - Arguments to delete one Fuero.
     * @example
     * // Delete one Fuero
     * const Fuero = await prisma.fuero.delete({
     *   where: {
     *     // ... filter to delete one Fuero
     *   }
     * })
     * 
     */
    delete<T extends FueroDeleteArgs>(args: SelectSubset<T, FueroDeleteArgs<ExtArgs>>): Prisma__FueroClient<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fuero.
     * @param {FueroUpdateArgs} args - Arguments to update one Fuero.
     * @example
     * // Update one Fuero
     * const fuero = await prisma.fuero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FueroUpdateArgs>(args: SelectSubset<T, FueroUpdateArgs<ExtArgs>>): Prisma__FueroClient<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fueros.
     * @param {FueroDeleteManyArgs} args - Arguments to filter Fueros to delete.
     * @example
     * // Delete a few Fueros
     * const { count } = await prisma.fuero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FueroDeleteManyArgs>(args?: SelectSubset<T, FueroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fueros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FueroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fueros
     * const fuero = await prisma.fuero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FueroUpdateManyArgs>(args: SelectSubset<T, FueroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fueros and returns the data updated in the database.
     * @param {FueroUpdateManyAndReturnArgs} args - Arguments to update many Fueros.
     * @example
     * // Update many Fueros
     * const fuero = await prisma.fuero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fueros and only return the `id`
     * const fueroWithIdOnly = await prisma.fuero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FueroUpdateManyAndReturnArgs>(args: SelectSubset<T, FueroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fuero.
     * @param {FueroUpsertArgs} args - Arguments to update or create a Fuero.
     * @example
     * // Update or create a Fuero
     * const fuero = await prisma.fuero.upsert({
     *   create: {
     *     // ... data to create a Fuero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fuero we want to update
     *   }
     * })
     */
    upsert<T extends FueroUpsertArgs>(args: SelectSubset<T, FueroUpsertArgs<ExtArgs>>): Prisma__FueroClient<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fueros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FueroCountArgs} args - Arguments to filter Fueros to count.
     * @example
     * // Count the number of Fueros
     * const count = await prisma.fuero.count({
     *   where: {
     *     // ... the filter for the Fueros we want to count
     *   }
     * })
    **/
    count<T extends FueroCountArgs>(
      args?: Subset<T, FueroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FueroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fuero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FueroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FueroAggregateArgs>(args: Subset<T, FueroAggregateArgs>): Prisma.PrismaPromise<GetFueroAggregateType<T>>

    /**
     * Group by Fuero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FueroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FueroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FueroGroupByArgs['orderBy'] }
        : { orderBy?: FueroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FueroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFueroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fuero model
   */
  readonly fields: FueroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fuero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FueroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organismos<T extends Fuero$organismosArgs<ExtArgs> = {}>(args?: Subset<T, Fuero$organismosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fuero model
   */
  interface FueroFieldRefs {
    readonly id: FieldRef<"Fuero", 'Int'>
    readonly nombre: FieldRef<"Fuero", 'String'>
    readonly codigo: FieldRef<"Fuero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fuero findUnique
   */
  export type FueroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FueroInclude<ExtArgs> | null
    /**
     * Filter, which Fuero to fetch.
     */
    where: FueroWhereUniqueInput
  }

  /**
   * Fuero findUniqueOrThrow
   */
  export type FueroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FueroInclude<ExtArgs> | null
    /**
     * Filter, which Fuero to fetch.
     */
    where: FueroWhereUniqueInput
  }

  /**
   * Fuero findFirst
   */
  export type FueroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FueroInclude<ExtArgs> | null
    /**
     * Filter, which Fuero to fetch.
     */
    where?: FueroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fueros to fetch.
     */
    orderBy?: FueroOrderByWithRelationInput | FueroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fueros.
     */
    cursor?: FueroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fueros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fueros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fueros.
     */
    distinct?: FueroScalarFieldEnum | FueroScalarFieldEnum[]
  }

  /**
   * Fuero findFirstOrThrow
   */
  export type FueroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FueroInclude<ExtArgs> | null
    /**
     * Filter, which Fuero to fetch.
     */
    where?: FueroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fueros to fetch.
     */
    orderBy?: FueroOrderByWithRelationInput | FueroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fueros.
     */
    cursor?: FueroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fueros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fueros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fueros.
     */
    distinct?: FueroScalarFieldEnum | FueroScalarFieldEnum[]
  }

  /**
   * Fuero findMany
   */
  export type FueroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FueroInclude<ExtArgs> | null
    /**
     * Filter, which Fueros to fetch.
     */
    where?: FueroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fueros to fetch.
     */
    orderBy?: FueroOrderByWithRelationInput | FueroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fueros.
     */
    cursor?: FueroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fueros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fueros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fueros.
     */
    distinct?: FueroScalarFieldEnum | FueroScalarFieldEnum[]
  }

  /**
   * Fuero create
   */
  export type FueroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FueroInclude<ExtArgs> | null
    /**
     * The data needed to create a Fuero.
     */
    data: XOR<FueroCreateInput, FueroUncheckedCreateInput>
  }

  /**
   * Fuero createMany
   */
  export type FueroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fueros.
     */
    data: FueroCreateManyInput | FueroCreateManyInput[]
  }

  /**
   * Fuero createManyAndReturn
   */
  export type FueroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * The data used to create many Fueros.
     */
    data: FueroCreateManyInput | FueroCreateManyInput[]
  }

  /**
   * Fuero update
   */
  export type FueroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FueroInclude<ExtArgs> | null
    /**
     * The data needed to update a Fuero.
     */
    data: XOR<FueroUpdateInput, FueroUncheckedUpdateInput>
    /**
     * Choose, which Fuero to update.
     */
    where: FueroWhereUniqueInput
  }

  /**
   * Fuero updateMany
   */
  export type FueroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fueros.
     */
    data: XOR<FueroUpdateManyMutationInput, FueroUncheckedUpdateManyInput>
    /**
     * Filter which Fueros to update
     */
    where?: FueroWhereInput
    /**
     * Limit how many Fueros to update.
     */
    limit?: number
  }

  /**
   * Fuero updateManyAndReturn
   */
  export type FueroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * The data used to update Fueros.
     */
    data: XOR<FueroUpdateManyMutationInput, FueroUncheckedUpdateManyInput>
    /**
     * Filter which Fueros to update
     */
    where?: FueroWhereInput
    /**
     * Limit how many Fueros to update.
     */
    limit?: number
  }

  /**
   * Fuero upsert
   */
  export type FueroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FueroInclude<ExtArgs> | null
    /**
     * The filter to search for the Fuero to update in case it exists.
     */
    where: FueroWhereUniqueInput
    /**
     * In case the Fuero found by the `where` argument doesn't exist, create a new Fuero with this data.
     */
    create: XOR<FueroCreateInput, FueroUncheckedCreateInput>
    /**
     * In case the Fuero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FueroUpdateInput, FueroUncheckedUpdateInput>
  }

  /**
   * Fuero delete
   */
  export type FueroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FueroInclude<ExtArgs> | null
    /**
     * Filter which Fuero to delete.
     */
    where: FueroWhereUniqueInput
  }

  /**
   * Fuero deleteMany
   */
  export type FueroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fueros to delete
     */
    where?: FueroWhereInput
    /**
     * Limit how many Fueros to delete.
     */
    limit?: number
  }

  /**
   * Fuero.organismos
   */
  export type Fuero$organismosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    where?: OrganismoWhereInput
    orderBy?: OrganismoOrderByWithRelationInput | OrganismoOrderByWithRelationInput[]
    cursor?: OrganismoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganismoScalarFieldEnum | OrganismoScalarFieldEnum[]
  }

  /**
   * Fuero without action
   */
  export type FueroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuero
     */
    select?: FueroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuero
     */
    omit?: FueroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FueroInclude<ExtArgs> | null
  }


  /**
   * Model Organismo
   */

  export type AggregateOrganismo = {
    _count: OrganismoCountAggregateOutputType | null
    _avg: OrganismoAvgAggregateOutputType | null
    _sum: OrganismoSumAggregateOutputType | null
    _min: OrganismoMinAggregateOutputType | null
    _max: OrganismoMaxAggregateOutputType | null
  }

  export type OrganismoAvgAggregateOutputType = {
    ciudadId: number | null
    fueroId: number | null
  }

  export type OrganismoSumAggregateOutputType = {
    ciudadId: number | null
    fueroId: number | null
  }

  export type OrganismoMinAggregateOutputType = {
    codigo: string | null
    nombre: string | null
    titulo: string | null
    ciudadId: number | null
    fueroId: number | null
  }

  export type OrganismoMaxAggregateOutputType = {
    codigo: string | null
    nombre: string | null
    titulo: string | null
    ciudadId: number | null
    fueroId: number | null
  }

  export type OrganismoCountAggregateOutputType = {
    codigo: number
    nombre: number
    titulo: number
    ciudadId: number
    fueroId: number
    _all: number
  }


  export type OrganismoAvgAggregateInputType = {
    ciudadId?: true
    fueroId?: true
  }

  export type OrganismoSumAggregateInputType = {
    ciudadId?: true
    fueroId?: true
  }

  export type OrganismoMinAggregateInputType = {
    codigo?: true
    nombre?: true
    titulo?: true
    ciudadId?: true
    fueroId?: true
  }

  export type OrganismoMaxAggregateInputType = {
    codigo?: true
    nombre?: true
    titulo?: true
    ciudadId?: true
    fueroId?: true
  }

  export type OrganismoCountAggregateInputType = {
    codigo?: true
    nombre?: true
    titulo?: true
    ciudadId?: true
    fueroId?: true
    _all?: true
  }

  export type OrganismoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organismo to aggregate.
     */
    where?: OrganismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organismos to fetch.
     */
    orderBy?: OrganismoOrderByWithRelationInput | OrganismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organismos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organismos
    **/
    _count?: true | OrganismoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganismoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganismoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganismoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganismoMaxAggregateInputType
  }

  export type GetOrganismoAggregateType<T extends OrganismoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganismo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganismo[P]>
      : GetScalarType<T[P], AggregateOrganismo[P]>
  }




  export type OrganismoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganismoWhereInput
    orderBy?: OrganismoOrderByWithAggregationInput | OrganismoOrderByWithAggregationInput[]
    by: OrganismoScalarFieldEnum[] | OrganismoScalarFieldEnum
    having?: OrganismoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganismoCountAggregateInputType | true
    _avg?: OrganismoAvgAggregateInputType
    _sum?: OrganismoSumAggregateInputType
    _min?: OrganismoMinAggregateInputType
    _max?: OrganismoMaxAggregateInputType
  }

  export type OrganismoGroupByOutputType = {
    codigo: string
    nombre: string
    titulo: string
    ciudadId: number
    fueroId: number
    _count: OrganismoCountAggregateOutputType | null
    _avg: OrganismoAvgAggregateOutputType | null
    _sum: OrganismoSumAggregateOutputType | null
    _min: OrganismoMinAggregateOutputType | null
    _max: OrganismoMaxAggregateOutputType | null
  }

  type GetOrganismoGroupByPayload<T extends OrganismoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganismoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganismoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganismoGroupByOutputType[P]>
            : GetScalarType<T[P], OrganismoGroupByOutputType[P]>
        }
      >
    >


  export type OrganismoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nombre?: boolean
    titulo?: boolean
    ciudadId?: boolean
    fueroId?: boolean
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    fuero?: boolean | FueroDefaultArgs<ExtArgs>
    expedientes?: boolean | Organismo$expedientesArgs<ExtArgs>
    _count?: boolean | OrganismoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organismo"]>

  export type OrganismoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nombre?: boolean
    titulo?: boolean
    ciudadId?: boolean
    fueroId?: boolean
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    fuero?: boolean | FueroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organismo"]>

  export type OrganismoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nombre?: boolean
    titulo?: boolean
    ciudadId?: boolean
    fueroId?: boolean
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    fuero?: boolean | FueroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organismo"]>

  export type OrganismoSelectScalar = {
    codigo?: boolean
    nombre?: boolean
    titulo?: boolean
    ciudadId?: boolean
    fueroId?: boolean
  }

  export type OrganismoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigo" | "nombre" | "titulo" | "ciudadId" | "fueroId", ExtArgs["result"]["organismo"]>
  export type OrganismoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    fuero?: boolean | FueroDefaultArgs<ExtArgs>
    expedientes?: boolean | Organismo$expedientesArgs<ExtArgs>
    _count?: boolean | OrganismoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganismoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    fuero?: boolean | FueroDefaultArgs<ExtArgs>
  }
  export type OrganismoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    fuero?: boolean | FueroDefaultArgs<ExtArgs>
  }

  export type $OrganismoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organismo"
    objects: {
      ciudad: Prisma.$CiudadPayload<ExtArgs>
      fuero: Prisma.$FueroPayload<ExtArgs>
      expedientes: Prisma.$ExpedientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codigo: string
      nombre: string
      titulo: string
      ciudadId: number
      fueroId: number
    }, ExtArgs["result"]["organismo"]>
    composites: {}
  }

  type OrganismoGetPayload<S extends boolean | null | undefined | OrganismoDefaultArgs> = $Result.GetResult<Prisma.$OrganismoPayload, S>

  type OrganismoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganismoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganismoCountAggregateInputType | true
    }

  export interface OrganismoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organismo'], meta: { name: 'Organismo' } }
    /**
     * Find zero or one Organismo that matches the filter.
     * @param {OrganismoFindUniqueArgs} args - Arguments to find a Organismo
     * @example
     * // Get one Organismo
     * const organismo = await prisma.organismo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganismoFindUniqueArgs>(args: SelectSubset<T, OrganismoFindUniqueArgs<ExtArgs>>): Prisma__OrganismoClient<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organismo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganismoFindUniqueOrThrowArgs} args - Arguments to find a Organismo
     * @example
     * // Get one Organismo
     * const organismo = await prisma.organismo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganismoFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganismoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganismoClient<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organismo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganismoFindFirstArgs} args - Arguments to find a Organismo
     * @example
     * // Get one Organismo
     * const organismo = await prisma.organismo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganismoFindFirstArgs>(args?: SelectSubset<T, OrganismoFindFirstArgs<ExtArgs>>): Prisma__OrganismoClient<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organismo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganismoFindFirstOrThrowArgs} args - Arguments to find a Organismo
     * @example
     * // Get one Organismo
     * const organismo = await prisma.organismo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganismoFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganismoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganismoClient<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organismos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganismoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organismos
     * const organismos = await prisma.organismo.findMany()
     * 
     * // Get first 10 Organismos
     * const organismos = await prisma.organismo.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const organismoWithCodigoOnly = await prisma.organismo.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends OrganismoFindManyArgs>(args?: SelectSubset<T, OrganismoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organismo.
     * @param {OrganismoCreateArgs} args - Arguments to create a Organismo.
     * @example
     * // Create one Organismo
     * const Organismo = await prisma.organismo.create({
     *   data: {
     *     // ... data to create a Organismo
     *   }
     * })
     * 
     */
    create<T extends OrganismoCreateArgs>(args: SelectSubset<T, OrganismoCreateArgs<ExtArgs>>): Prisma__OrganismoClient<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organismos.
     * @param {OrganismoCreateManyArgs} args - Arguments to create many Organismos.
     * @example
     * // Create many Organismos
     * const organismo = await prisma.organismo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganismoCreateManyArgs>(args?: SelectSubset<T, OrganismoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organismos and returns the data saved in the database.
     * @param {OrganismoCreateManyAndReturnArgs} args - Arguments to create many Organismos.
     * @example
     * // Create many Organismos
     * const organismo = await prisma.organismo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organismos and only return the `codigo`
     * const organismoWithCodigoOnly = await prisma.organismo.createManyAndReturn({
     *   select: { codigo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganismoCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganismoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organismo.
     * @param {OrganismoDeleteArgs} args - Arguments to delete one Organismo.
     * @example
     * // Delete one Organismo
     * const Organismo = await prisma.organismo.delete({
     *   where: {
     *     // ... filter to delete one Organismo
     *   }
     * })
     * 
     */
    delete<T extends OrganismoDeleteArgs>(args: SelectSubset<T, OrganismoDeleteArgs<ExtArgs>>): Prisma__OrganismoClient<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organismo.
     * @param {OrganismoUpdateArgs} args - Arguments to update one Organismo.
     * @example
     * // Update one Organismo
     * const organismo = await prisma.organismo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganismoUpdateArgs>(args: SelectSubset<T, OrganismoUpdateArgs<ExtArgs>>): Prisma__OrganismoClient<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organismos.
     * @param {OrganismoDeleteManyArgs} args - Arguments to filter Organismos to delete.
     * @example
     * // Delete a few Organismos
     * const { count } = await prisma.organismo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganismoDeleteManyArgs>(args?: SelectSubset<T, OrganismoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organismos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganismoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organismos
     * const organismo = await prisma.organismo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganismoUpdateManyArgs>(args: SelectSubset<T, OrganismoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organismos and returns the data updated in the database.
     * @param {OrganismoUpdateManyAndReturnArgs} args - Arguments to update many Organismos.
     * @example
     * // Update many Organismos
     * const organismo = await prisma.organismo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organismos and only return the `codigo`
     * const organismoWithCodigoOnly = await prisma.organismo.updateManyAndReturn({
     *   select: { codigo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganismoUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganismoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organismo.
     * @param {OrganismoUpsertArgs} args - Arguments to update or create a Organismo.
     * @example
     * // Update or create a Organismo
     * const organismo = await prisma.organismo.upsert({
     *   create: {
     *     // ... data to create a Organismo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organismo we want to update
     *   }
     * })
     */
    upsert<T extends OrganismoUpsertArgs>(args: SelectSubset<T, OrganismoUpsertArgs<ExtArgs>>): Prisma__OrganismoClient<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organismos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganismoCountArgs} args - Arguments to filter Organismos to count.
     * @example
     * // Count the number of Organismos
     * const count = await prisma.organismo.count({
     *   where: {
     *     // ... the filter for the Organismos we want to count
     *   }
     * })
    **/
    count<T extends OrganismoCountArgs>(
      args?: Subset<T, OrganismoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganismoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organismo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganismoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganismoAggregateArgs>(args: Subset<T, OrganismoAggregateArgs>): Prisma.PrismaPromise<GetOrganismoAggregateType<T>>

    /**
     * Group by Organismo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganismoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganismoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganismoGroupByArgs['orderBy'] }
        : { orderBy?: OrganismoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganismoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganismoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organismo model
   */
  readonly fields: OrganismoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organismo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganismoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ciudad<T extends CiudadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CiudadDefaultArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fuero<T extends FueroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FueroDefaultArgs<ExtArgs>>): Prisma__FueroClient<$Result.GetResult<Prisma.$FueroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expedientes<T extends Organismo$expedientesArgs<ExtArgs> = {}>(args?: Subset<T, Organismo$expedientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organismo model
   */
  interface OrganismoFieldRefs {
    readonly codigo: FieldRef<"Organismo", 'String'>
    readonly nombre: FieldRef<"Organismo", 'String'>
    readonly titulo: FieldRef<"Organismo", 'String'>
    readonly ciudadId: FieldRef<"Organismo", 'Int'>
    readonly fueroId: FieldRef<"Organismo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Organismo findUnique
   */
  export type OrganismoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    /**
     * Filter, which Organismo to fetch.
     */
    where: OrganismoWhereUniqueInput
  }

  /**
   * Organismo findUniqueOrThrow
   */
  export type OrganismoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    /**
     * Filter, which Organismo to fetch.
     */
    where: OrganismoWhereUniqueInput
  }

  /**
   * Organismo findFirst
   */
  export type OrganismoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    /**
     * Filter, which Organismo to fetch.
     */
    where?: OrganismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organismos to fetch.
     */
    orderBy?: OrganismoOrderByWithRelationInput | OrganismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organismos.
     */
    cursor?: OrganismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organismos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organismos.
     */
    distinct?: OrganismoScalarFieldEnum | OrganismoScalarFieldEnum[]
  }

  /**
   * Organismo findFirstOrThrow
   */
  export type OrganismoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    /**
     * Filter, which Organismo to fetch.
     */
    where?: OrganismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organismos to fetch.
     */
    orderBy?: OrganismoOrderByWithRelationInput | OrganismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organismos.
     */
    cursor?: OrganismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organismos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organismos.
     */
    distinct?: OrganismoScalarFieldEnum | OrganismoScalarFieldEnum[]
  }

  /**
   * Organismo findMany
   */
  export type OrganismoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    /**
     * Filter, which Organismos to fetch.
     */
    where?: OrganismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organismos to fetch.
     */
    orderBy?: OrganismoOrderByWithRelationInput | OrganismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organismos.
     */
    cursor?: OrganismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organismos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organismos.
     */
    distinct?: OrganismoScalarFieldEnum | OrganismoScalarFieldEnum[]
  }

  /**
   * Organismo create
   */
  export type OrganismoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    /**
     * The data needed to create a Organismo.
     */
    data: XOR<OrganismoCreateInput, OrganismoUncheckedCreateInput>
  }

  /**
   * Organismo createMany
   */
  export type OrganismoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organismos.
     */
    data: OrganismoCreateManyInput | OrganismoCreateManyInput[]
  }

  /**
   * Organismo createManyAndReturn
   */
  export type OrganismoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * The data used to create many Organismos.
     */
    data: OrganismoCreateManyInput | OrganismoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organismo update
   */
  export type OrganismoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    /**
     * The data needed to update a Organismo.
     */
    data: XOR<OrganismoUpdateInput, OrganismoUncheckedUpdateInput>
    /**
     * Choose, which Organismo to update.
     */
    where: OrganismoWhereUniqueInput
  }

  /**
   * Organismo updateMany
   */
  export type OrganismoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organismos.
     */
    data: XOR<OrganismoUpdateManyMutationInput, OrganismoUncheckedUpdateManyInput>
    /**
     * Filter which Organismos to update
     */
    where?: OrganismoWhereInput
    /**
     * Limit how many Organismos to update.
     */
    limit?: number
  }

  /**
   * Organismo updateManyAndReturn
   */
  export type OrganismoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * The data used to update Organismos.
     */
    data: XOR<OrganismoUpdateManyMutationInput, OrganismoUncheckedUpdateManyInput>
    /**
     * Filter which Organismos to update
     */
    where?: OrganismoWhereInput
    /**
     * Limit how many Organismos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organismo upsert
   */
  export type OrganismoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    /**
     * The filter to search for the Organismo to update in case it exists.
     */
    where: OrganismoWhereUniqueInput
    /**
     * In case the Organismo found by the `where` argument doesn't exist, create a new Organismo with this data.
     */
    create: XOR<OrganismoCreateInput, OrganismoUncheckedCreateInput>
    /**
     * In case the Organismo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganismoUpdateInput, OrganismoUncheckedUpdateInput>
  }

  /**
   * Organismo delete
   */
  export type OrganismoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
    /**
     * Filter which Organismo to delete.
     */
    where: OrganismoWhereUniqueInput
  }

  /**
   * Organismo deleteMany
   */
  export type OrganismoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organismos to delete
     */
    where?: OrganismoWhereInput
    /**
     * Limit how many Organismos to delete.
     */
    limit?: number
  }

  /**
   * Organismo.expedientes
   */
  export type Organismo$expedientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    where?: ExpedienteWhereInput
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    cursor?: ExpedienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpedienteScalarFieldEnum | ExpedienteScalarFieldEnum[]
  }

  /**
   * Organismo without action
   */
  export type OrganismoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organismo
     */
    select?: OrganismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organismo
     */
    omit?: OrganismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganismoInclude<ExtArgs> | null
  }


  /**
   * Model Expediente
   */

  export type AggregateExpediente = {
    _count: ExpedienteCountAggregateOutputType | null
    _avg: ExpedienteAvgAggregateOutputType | null
    _sum: ExpedienteSumAggregateOutputType | null
    _min: ExpedienteMinAggregateOutputType | null
    _max: ExpedienteMaxAggregateOutputType | null
  }

  export type ExpedienteAvgAggregateOutputType = {
    numero: number | null
    anio: number | null
    ciudadId: number | null
  }

  export type ExpedienteSumAggregateOutputType = {
    numero: number | null
    anio: number | null
    ciudadId: number | null
  }

  export type ExpedienteMinAggregateOutputType = {
    codigoOrganismo: string | null
    tipo: string | null
    numero: number | null
    anio: number | null
    titulo: string | null
    ciudadId: number | null
  }

  export type ExpedienteMaxAggregateOutputType = {
    codigoOrganismo: string | null
    tipo: string | null
    numero: number | null
    anio: number | null
    titulo: string | null
    ciudadId: number | null
  }

  export type ExpedienteCountAggregateOutputType = {
    codigoOrganismo: number
    tipo: number
    numero: number
    anio: number
    titulo: number
    ciudadId: number
    _all: number
  }


  export type ExpedienteAvgAggregateInputType = {
    numero?: true
    anio?: true
    ciudadId?: true
  }

  export type ExpedienteSumAggregateInputType = {
    numero?: true
    anio?: true
    ciudadId?: true
  }

  export type ExpedienteMinAggregateInputType = {
    codigoOrganismo?: true
    tipo?: true
    numero?: true
    anio?: true
    titulo?: true
    ciudadId?: true
  }

  export type ExpedienteMaxAggregateInputType = {
    codigoOrganismo?: true
    tipo?: true
    numero?: true
    anio?: true
    titulo?: true
    ciudadId?: true
  }

  export type ExpedienteCountAggregateInputType = {
    codigoOrganismo?: true
    tipo?: true
    numero?: true
    anio?: true
    titulo?: true
    ciudadId?: true
    _all?: true
  }

  export type ExpedienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expediente to aggregate.
     */
    where?: ExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedientes to fetch.
     */
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expedientes
    **/
    _count?: true | ExpedienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpedienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpedienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpedienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpedienteMaxAggregateInputType
  }

  export type GetExpedienteAggregateType<T extends ExpedienteAggregateArgs> = {
        [P in keyof T & keyof AggregateExpediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpediente[P]>
      : GetScalarType<T[P], AggregateExpediente[P]>
  }




  export type ExpedienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedienteWhereInput
    orderBy?: ExpedienteOrderByWithAggregationInput | ExpedienteOrderByWithAggregationInput[]
    by: ExpedienteScalarFieldEnum[] | ExpedienteScalarFieldEnum
    having?: ExpedienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpedienteCountAggregateInputType | true
    _avg?: ExpedienteAvgAggregateInputType
    _sum?: ExpedienteSumAggregateInputType
    _min?: ExpedienteMinAggregateInputType
    _max?: ExpedienteMaxAggregateInputType
  }

  export type ExpedienteGroupByOutputType = {
    codigoOrganismo: string
    tipo: string
    numero: number
    anio: number
    titulo: string
    ciudadId: number
    _count: ExpedienteCountAggregateOutputType | null
    _avg: ExpedienteAvgAggregateOutputType | null
    _sum: ExpedienteSumAggregateOutputType | null
    _min: ExpedienteMinAggregateOutputType | null
    _max: ExpedienteMaxAggregateOutputType | null
  }

  type GetExpedienteGroupByPayload<T extends ExpedienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpedienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpedienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpedienteGroupByOutputType[P]>
            : GetScalarType<T[P], ExpedienteGroupByOutputType[P]>
        }
      >
    >


  export type ExpedienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigoOrganismo?: boolean
    tipo?: boolean
    numero?: boolean
    anio?: boolean
    titulo?: boolean
    ciudadId?: boolean
    organismo?: boolean | OrganismoDefaultArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    personas?: boolean | Expediente$personasArgs<ExtArgs>
    _count?: boolean | ExpedienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expediente"]>

  export type ExpedienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigoOrganismo?: boolean
    tipo?: boolean
    numero?: boolean
    anio?: boolean
    titulo?: boolean
    ciudadId?: boolean
    organismo?: boolean | OrganismoDefaultArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expediente"]>

  export type ExpedienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigoOrganismo?: boolean
    tipo?: boolean
    numero?: boolean
    anio?: boolean
    titulo?: boolean
    ciudadId?: boolean
    organismo?: boolean | OrganismoDefaultArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expediente"]>

  export type ExpedienteSelectScalar = {
    codigoOrganismo?: boolean
    tipo?: boolean
    numero?: boolean
    anio?: boolean
    titulo?: boolean
    ciudadId?: boolean
  }

  export type ExpedienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigoOrganismo" | "tipo" | "numero" | "anio" | "titulo" | "ciudadId", ExtArgs["result"]["expediente"]>
  export type ExpedienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organismo?: boolean | OrganismoDefaultArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    personas?: boolean | Expediente$personasArgs<ExtArgs>
    _count?: boolean | ExpedienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpedienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organismo?: boolean | OrganismoDefaultArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
  }
  export type ExpedienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organismo?: boolean | OrganismoDefaultArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
  }

  export type $ExpedientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expediente"
    objects: {
      organismo: Prisma.$OrganismoPayload<ExtArgs>
      ciudad: Prisma.$CiudadPayload<ExtArgs>
      personas: Prisma.$ExpedientePersonaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codigoOrganismo: string
      tipo: string
      numero: number
      anio: number
      titulo: string
      ciudadId: number
    }, ExtArgs["result"]["expediente"]>
    composites: {}
  }

  type ExpedienteGetPayload<S extends boolean | null | undefined | ExpedienteDefaultArgs> = $Result.GetResult<Prisma.$ExpedientePayload, S>

  type ExpedienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpedienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpedienteCountAggregateInputType | true
    }

  export interface ExpedienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expediente'], meta: { name: 'Expediente' } }
    /**
     * Find zero or one Expediente that matches the filter.
     * @param {ExpedienteFindUniqueArgs} args - Arguments to find a Expediente
     * @example
     * // Get one Expediente
     * const expediente = await prisma.expediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpedienteFindUniqueArgs>(args: SelectSubset<T, ExpedienteFindUniqueArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpedienteFindUniqueOrThrowArgs} args - Arguments to find a Expediente
     * @example
     * // Get one Expediente
     * const expediente = await prisma.expediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpedienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpedienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteFindFirstArgs} args - Arguments to find a Expediente
     * @example
     * // Get one Expediente
     * const expediente = await prisma.expediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpedienteFindFirstArgs>(args?: SelectSubset<T, ExpedienteFindFirstArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteFindFirstOrThrowArgs} args - Arguments to find a Expediente
     * @example
     * // Get one Expediente
     * const expediente = await prisma.expediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpedienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpedienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expedientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expedientes
     * const expedientes = await prisma.expediente.findMany()
     * 
     * // Get first 10 Expedientes
     * const expedientes = await prisma.expediente.findMany({ take: 10 })
     * 
     * // Only select the `codigoOrganismo`
     * const expedienteWithCodigoOrganismoOnly = await prisma.expediente.findMany({ select: { codigoOrganismo: true } })
     * 
     */
    findMany<T extends ExpedienteFindManyArgs>(args?: SelectSubset<T, ExpedienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expediente.
     * @param {ExpedienteCreateArgs} args - Arguments to create a Expediente.
     * @example
     * // Create one Expediente
     * const Expediente = await prisma.expediente.create({
     *   data: {
     *     // ... data to create a Expediente
     *   }
     * })
     * 
     */
    create<T extends ExpedienteCreateArgs>(args: SelectSubset<T, ExpedienteCreateArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expedientes.
     * @param {ExpedienteCreateManyArgs} args - Arguments to create many Expedientes.
     * @example
     * // Create many Expedientes
     * const expediente = await prisma.expediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpedienteCreateManyArgs>(args?: SelectSubset<T, ExpedienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expedientes and returns the data saved in the database.
     * @param {ExpedienteCreateManyAndReturnArgs} args - Arguments to create many Expedientes.
     * @example
     * // Create many Expedientes
     * const expediente = await prisma.expediente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expedientes and only return the `codigoOrganismo`
     * const expedienteWithCodigoOrganismoOnly = await prisma.expediente.createManyAndReturn({
     *   select: { codigoOrganismo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpedienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpedienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expediente.
     * @param {ExpedienteDeleteArgs} args - Arguments to delete one Expediente.
     * @example
     * // Delete one Expediente
     * const Expediente = await prisma.expediente.delete({
     *   where: {
     *     // ... filter to delete one Expediente
     *   }
     * })
     * 
     */
    delete<T extends ExpedienteDeleteArgs>(args: SelectSubset<T, ExpedienteDeleteArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expediente.
     * @param {ExpedienteUpdateArgs} args - Arguments to update one Expediente.
     * @example
     * // Update one Expediente
     * const expediente = await prisma.expediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpedienteUpdateArgs>(args: SelectSubset<T, ExpedienteUpdateArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expedientes.
     * @param {ExpedienteDeleteManyArgs} args - Arguments to filter Expedientes to delete.
     * @example
     * // Delete a few Expedientes
     * const { count } = await prisma.expediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpedienteDeleteManyArgs>(args?: SelectSubset<T, ExpedienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expedientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expedientes
     * const expediente = await prisma.expediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpedienteUpdateManyArgs>(args: SelectSubset<T, ExpedienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expedientes and returns the data updated in the database.
     * @param {ExpedienteUpdateManyAndReturnArgs} args - Arguments to update many Expedientes.
     * @example
     * // Update many Expedientes
     * const expediente = await prisma.expediente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expedientes and only return the `codigoOrganismo`
     * const expedienteWithCodigoOrganismoOnly = await prisma.expediente.updateManyAndReturn({
     *   select: { codigoOrganismo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpedienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpedienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expediente.
     * @param {ExpedienteUpsertArgs} args - Arguments to update or create a Expediente.
     * @example
     * // Update or create a Expediente
     * const expediente = await prisma.expediente.upsert({
     *   create: {
     *     // ... data to create a Expediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expediente we want to update
     *   }
     * })
     */
    upsert<T extends ExpedienteUpsertArgs>(args: SelectSubset<T, ExpedienteUpsertArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expedientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteCountArgs} args - Arguments to filter Expedientes to count.
     * @example
     * // Count the number of Expedientes
     * const count = await prisma.expediente.count({
     *   where: {
     *     // ... the filter for the Expedientes we want to count
     *   }
     * })
    **/
    count<T extends ExpedienteCountArgs>(
      args?: Subset<T, ExpedienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpedienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpedienteAggregateArgs>(args: Subset<T, ExpedienteAggregateArgs>): Prisma.PrismaPromise<GetExpedienteAggregateType<T>>

    /**
     * Group by Expediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpedienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpedienteGroupByArgs['orderBy'] }
        : { orderBy?: ExpedienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpedienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpedienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expediente model
   */
  readonly fields: ExpedienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpedienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organismo<T extends OrganismoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganismoDefaultArgs<ExtArgs>>): Prisma__OrganismoClient<$Result.GetResult<Prisma.$OrganismoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ciudad<T extends CiudadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CiudadDefaultArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    personas<T extends Expediente$personasArgs<ExtArgs> = {}>(args?: Subset<T, Expediente$personasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expediente model
   */
  interface ExpedienteFieldRefs {
    readonly codigoOrganismo: FieldRef<"Expediente", 'String'>
    readonly tipo: FieldRef<"Expediente", 'String'>
    readonly numero: FieldRef<"Expediente", 'Int'>
    readonly anio: FieldRef<"Expediente", 'Int'>
    readonly titulo: FieldRef<"Expediente", 'String'>
    readonly ciudadId: FieldRef<"Expediente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Expediente findUnique
   */
  export type ExpedienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which Expediente to fetch.
     */
    where: ExpedienteWhereUniqueInput
  }

  /**
   * Expediente findUniqueOrThrow
   */
  export type ExpedienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which Expediente to fetch.
     */
    where: ExpedienteWhereUniqueInput
  }

  /**
   * Expediente findFirst
   */
  export type ExpedienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which Expediente to fetch.
     */
    where?: ExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedientes to fetch.
     */
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expedientes.
     */
    cursor?: ExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expedientes.
     */
    distinct?: ExpedienteScalarFieldEnum | ExpedienteScalarFieldEnum[]
  }

  /**
   * Expediente findFirstOrThrow
   */
  export type ExpedienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which Expediente to fetch.
     */
    where?: ExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedientes to fetch.
     */
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expedientes.
     */
    cursor?: ExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expedientes.
     */
    distinct?: ExpedienteScalarFieldEnum | ExpedienteScalarFieldEnum[]
  }

  /**
   * Expediente findMany
   */
  export type ExpedienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which Expedientes to fetch.
     */
    where?: ExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedientes to fetch.
     */
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expedientes.
     */
    cursor?: ExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expedientes.
     */
    distinct?: ExpedienteScalarFieldEnum | ExpedienteScalarFieldEnum[]
  }

  /**
   * Expediente create
   */
  export type ExpedienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Expediente.
     */
    data: XOR<ExpedienteCreateInput, ExpedienteUncheckedCreateInput>
  }

  /**
   * Expediente createMany
   */
  export type ExpedienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expedientes.
     */
    data: ExpedienteCreateManyInput | ExpedienteCreateManyInput[]
  }

  /**
   * Expediente createManyAndReturn
   */
  export type ExpedienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * The data used to create many Expedientes.
     */
    data: ExpedienteCreateManyInput | ExpedienteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expediente update
   */
  export type ExpedienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Expediente.
     */
    data: XOR<ExpedienteUpdateInput, ExpedienteUncheckedUpdateInput>
    /**
     * Choose, which Expediente to update.
     */
    where: ExpedienteWhereUniqueInput
  }

  /**
   * Expediente updateMany
   */
  export type ExpedienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expedientes.
     */
    data: XOR<ExpedienteUpdateManyMutationInput, ExpedienteUncheckedUpdateManyInput>
    /**
     * Filter which Expedientes to update
     */
    where?: ExpedienteWhereInput
    /**
     * Limit how many Expedientes to update.
     */
    limit?: number
  }

  /**
   * Expediente updateManyAndReturn
   */
  export type ExpedienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * The data used to update Expedientes.
     */
    data: XOR<ExpedienteUpdateManyMutationInput, ExpedienteUncheckedUpdateManyInput>
    /**
     * Filter which Expedientes to update
     */
    where?: ExpedienteWhereInput
    /**
     * Limit how many Expedientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expediente upsert
   */
  export type ExpedienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Expediente to update in case it exists.
     */
    where: ExpedienteWhereUniqueInput
    /**
     * In case the Expediente found by the `where` argument doesn't exist, create a new Expediente with this data.
     */
    create: XOR<ExpedienteCreateInput, ExpedienteUncheckedCreateInput>
    /**
     * In case the Expediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpedienteUpdateInput, ExpedienteUncheckedUpdateInput>
  }

  /**
   * Expediente delete
   */
  export type ExpedienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter which Expediente to delete.
     */
    where: ExpedienteWhereUniqueInput
  }

  /**
   * Expediente deleteMany
   */
  export type ExpedienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expedientes to delete
     */
    where?: ExpedienteWhereInput
    /**
     * Limit how many Expedientes to delete.
     */
    limit?: number
  }

  /**
   * Expediente.personas
   */
  export type Expediente$personasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    where?: ExpedientePersonaWhereInput
    orderBy?: ExpedientePersonaOrderByWithRelationInput | ExpedientePersonaOrderByWithRelationInput[]
    cursor?: ExpedientePersonaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpedientePersonaScalarFieldEnum | ExpedientePersonaScalarFieldEnum[]
  }

  /**
   * Expediente without action
   */
  export type ExpedienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
  }


  /**
   * Model Persona
   */

  export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  export type PersonaMinAggregateOutputType = {
    dni: string | null
    apellido: string | null
    nombre: string | null
  }

  export type PersonaMaxAggregateOutputType = {
    dni: string | null
    apellido: string | null
    nombre: string | null
  }

  export type PersonaCountAggregateOutputType = {
    dni: number
    apellido: number
    nombre: number
    _all: number
  }


  export type PersonaMinAggregateInputType = {
    dni?: true
    apellido?: true
    nombre?: true
  }

  export type PersonaMaxAggregateInputType = {
    dni?: true
    apellido?: true
    nombre?: true
  }

  export type PersonaCountAggregateInputType = {
    dni?: true
    apellido?: true
    nombre?: true
    _all?: true
  }

  export type PersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Persona to aggregate.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personas
    **/
    _count?: true | PersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType
  }

  export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersona[P]>
      : GetScalarType<T[P], AggregatePersona[P]>
  }




  export type PersonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaWhereInput
    orderBy?: PersonaOrderByWithAggregationInput | PersonaOrderByWithAggregationInput[]
    by: PersonaScalarFieldEnum[] | PersonaScalarFieldEnum
    having?: PersonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaCountAggregateInputType | true
    _min?: PersonaMinAggregateInputType
    _max?: PersonaMaxAggregateInputType
  }

  export type PersonaGroupByOutputType = {
    dni: string
    apellido: string
    nombre: string
    _count: PersonaCountAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  type GetPersonaGroupByPayload<T extends PersonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaGroupByOutputType[P]>
        }
      >
    >


  export type PersonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dni?: boolean
    apellido?: boolean
    nombre?: boolean
    expedientes?: boolean | Persona$expedientesArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dni?: boolean
    apellido?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dni?: boolean
    apellido?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectScalar = {
    dni?: boolean
    apellido?: boolean
    nombre?: boolean
  }

  export type PersonaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dni" | "apellido" | "nombre", ExtArgs["result"]["persona"]>
  export type PersonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedientes?: boolean | Persona$expedientesArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Persona"
    objects: {
      expedientes: Prisma.$ExpedientePersonaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      dni: string
      apellido: string
      nombre: string
    }, ExtArgs["result"]["persona"]>
    composites: {}
  }

  type PersonaGetPayload<S extends boolean | null | undefined | PersonaDefaultArgs> = $Result.GetResult<Prisma.$PersonaPayload, S>

  type PersonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonaCountAggregateInputType | true
    }

  export interface PersonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Persona'], meta: { name: 'Persona' } }
    /**
     * Find zero or one Persona that matches the filter.
     * @param {PersonaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonaFindUniqueArgs>(args: SelectSubset<T, PersonaFindUniqueArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Persona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonaFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonaFindFirstArgs>(args?: SelectSubset<T, PersonaFindFirstArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonaFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     * 
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     * 
     * // Only select the `dni`
     * const personaWithDniOnly = await prisma.persona.findMany({ select: { dni: true } })
     * 
     */
    findMany<T extends PersonaFindManyArgs>(args?: SelectSubset<T, PersonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Persona.
     * @param {PersonaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     * 
     */
    create<T extends PersonaCreateArgs>(args: SelectSubset<T, PersonaCreateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personas.
     * @param {PersonaCreateManyArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonaCreateManyArgs>(args?: SelectSubset<T, PersonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personas and returns the data saved in the database.
     * @param {PersonaCreateManyAndReturnArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personas and only return the `dni`
     * const personaWithDniOnly = await prisma.persona.createManyAndReturn({
     *   select: { dni: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonaCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Persona.
     * @param {PersonaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     * 
     */
    delete<T extends PersonaDeleteArgs>(args: SelectSubset<T, PersonaDeleteArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Persona.
     * @param {PersonaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonaUpdateArgs>(args: SelectSubset<T, PersonaUpdateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personas.
     * @param {PersonaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonaDeleteManyArgs>(args?: SelectSubset<T, PersonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonaUpdateManyArgs>(args: SelectSubset<T, PersonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas and returns the data updated in the database.
     * @param {PersonaUpdateManyAndReturnArgs} args - Arguments to update many Personas.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personas and only return the `dni`
     * const personaWithDniOnly = await prisma.persona.updateManyAndReturn({
     *   select: { dni: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonaUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Persona.
     * @param {PersonaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
     */
    upsert<T extends PersonaUpsertArgs>(args: SelectSubset<T, PersonaUpsertArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends PersonaCountArgs>(
      args?: Subset<T, PersonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonaAggregateArgs>(args: Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>

    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonaGroupByArgs['orderBy'] }
        : { orderBy?: PersonaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Persona model
   */
  readonly fields: PersonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Persona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expedientes<T extends Persona$expedientesArgs<ExtArgs> = {}>(args?: Subset<T, Persona$expedientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Persona model
   */
  interface PersonaFieldRefs {
    readonly dni: FieldRef<"Persona", 'String'>
    readonly apellido: FieldRef<"Persona", 'String'>
    readonly nombre: FieldRef<"Persona", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Persona findUnique
   */
  export type PersonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findUniqueOrThrow
   */
  export type PersonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findFirst
   */
  export type PersonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findFirstOrThrow
   */
  export type PersonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findMany
   */
  export type PersonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Personas to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona create
   */
  export type PersonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to create a Persona.
     */
    data: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
  }

  /**
   * Persona createMany
   */
  export type PersonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personas.
     */
    data: PersonaCreateManyInput | PersonaCreateManyInput[]
  }

  /**
   * Persona createManyAndReturn
   */
  export type PersonaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * The data used to create many Personas.
     */
    data: PersonaCreateManyInput | PersonaCreateManyInput[]
  }

  /**
   * Persona update
   */
  export type PersonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to update a Persona.
     */
    data: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
    /**
     * Choose, which Persona to update.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona updateMany
   */
  export type PersonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personas.
     */
    data: XOR<PersonaUpdateManyMutationInput, PersonaUncheckedUpdateManyInput>
    /**
     * Filter which Personas to update
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to update.
     */
    limit?: number
  }

  /**
   * Persona updateManyAndReturn
   */
  export type PersonaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * The data used to update Personas.
     */
    data: XOR<PersonaUpdateManyMutationInput, PersonaUncheckedUpdateManyInput>
    /**
     * Filter which Personas to update
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to update.
     */
    limit?: number
  }

  /**
   * Persona upsert
   */
  export type PersonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The filter to search for the Persona to update in case it exists.
     */
    where: PersonaWhereUniqueInput
    /**
     * In case the Persona found by the `where` argument doesn't exist, create a new Persona with this data.
     */
    create: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
    /**
     * In case the Persona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
  }

  /**
   * Persona delete
   */
  export type PersonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter which Persona to delete.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona deleteMany
   */
  export type PersonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personas to delete
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to delete.
     */
    limit?: number
  }

  /**
   * Persona.expedientes
   */
  export type Persona$expedientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    where?: ExpedientePersonaWhereInput
    orderBy?: ExpedientePersonaOrderByWithRelationInput | ExpedientePersonaOrderByWithRelationInput[]
    cursor?: ExpedientePersonaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpedientePersonaScalarFieldEnum | ExpedientePersonaScalarFieldEnum[]
  }

  /**
   * Persona without action
   */
  export type PersonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
  }


  /**
   * Model TipoVinculo
   */

  export type AggregateTipoVinculo = {
    _count: TipoVinculoCountAggregateOutputType | null
    _avg: TipoVinculoAvgAggregateOutputType | null
    _sum: TipoVinculoSumAggregateOutputType | null
    _min: TipoVinculoMinAggregateOutputType | null
    _max: TipoVinculoMaxAggregateOutputType | null
  }

  export type TipoVinculoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoVinculoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoVinculoMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type TipoVinculoMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type TipoVinculoCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type TipoVinculoAvgAggregateInputType = {
    id?: true
  }

  export type TipoVinculoSumAggregateInputType = {
    id?: true
  }

  export type TipoVinculoMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type TipoVinculoMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type TipoVinculoCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type TipoVinculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoVinculo to aggregate.
     */
    where?: TipoVinculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVinculos to fetch.
     */
    orderBy?: TipoVinculoOrderByWithRelationInput | TipoVinculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoVinculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVinculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVinculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoVinculos
    **/
    _count?: true | TipoVinculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoVinculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoVinculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoVinculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoVinculoMaxAggregateInputType
  }

  export type GetTipoVinculoAggregateType<T extends TipoVinculoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoVinculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoVinculo[P]>
      : GetScalarType<T[P], AggregateTipoVinculo[P]>
  }




  export type TipoVinculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoVinculoWhereInput
    orderBy?: TipoVinculoOrderByWithAggregationInput | TipoVinculoOrderByWithAggregationInput[]
    by: TipoVinculoScalarFieldEnum[] | TipoVinculoScalarFieldEnum
    having?: TipoVinculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoVinculoCountAggregateInputType | true
    _avg?: TipoVinculoAvgAggregateInputType
    _sum?: TipoVinculoSumAggregateInputType
    _min?: TipoVinculoMinAggregateInputType
    _max?: TipoVinculoMaxAggregateInputType
  }

  export type TipoVinculoGroupByOutputType = {
    id: number
    descripcion: string
    _count: TipoVinculoCountAggregateOutputType | null
    _avg: TipoVinculoAvgAggregateOutputType | null
    _sum: TipoVinculoSumAggregateOutputType | null
    _min: TipoVinculoMinAggregateOutputType | null
    _max: TipoVinculoMaxAggregateOutputType | null
  }

  type GetTipoVinculoGroupByPayload<T extends TipoVinculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoVinculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoVinculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoVinculoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoVinculoGroupByOutputType[P]>
        }
      >
    >


  export type TipoVinculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    expedientePersonas?: boolean | TipoVinculo$expedientePersonasArgs<ExtArgs>
    _count?: boolean | TipoVinculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoVinculo"]>

  export type TipoVinculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["tipoVinculo"]>

  export type TipoVinculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["tipoVinculo"]>

  export type TipoVinculoSelectScalar = {
    id?: boolean
    descripcion?: boolean
  }

  export type TipoVinculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descripcion", ExtArgs["result"]["tipoVinculo"]>
  export type TipoVinculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedientePersonas?: boolean | TipoVinculo$expedientePersonasArgs<ExtArgs>
    _count?: boolean | TipoVinculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoVinculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoVinculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoVinculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoVinculo"
    objects: {
      expedientePersonas: Prisma.$ExpedientePersonaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descripcion: string
    }, ExtArgs["result"]["tipoVinculo"]>
    composites: {}
  }

  type TipoVinculoGetPayload<S extends boolean | null | undefined | TipoVinculoDefaultArgs> = $Result.GetResult<Prisma.$TipoVinculoPayload, S>

  type TipoVinculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoVinculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoVinculoCountAggregateInputType | true
    }

  export interface TipoVinculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoVinculo'], meta: { name: 'TipoVinculo' } }
    /**
     * Find zero or one TipoVinculo that matches the filter.
     * @param {TipoVinculoFindUniqueArgs} args - Arguments to find a TipoVinculo
     * @example
     * // Get one TipoVinculo
     * const tipoVinculo = await prisma.tipoVinculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoVinculoFindUniqueArgs>(args: SelectSubset<T, TipoVinculoFindUniqueArgs<ExtArgs>>): Prisma__TipoVinculoClient<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoVinculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoVinculoFindUniqueOrThrowArgs} args - Arguments to find a TipoVinculo
     * @example
     * // Get one TipoVinculo
     * const tipoVinculo = await prisma.tipoVinculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoVinculoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoVinculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoVinculoClient<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoVinculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVinculoFindFirstArgs} args - Arguments to find a TipoVinculo
     * @example
     * // Get one TipoVinculo
     * const tipoVinculo = await prisma.tipoVinculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoVinculoFindFirstArgs>(args?: SelectSubset<T, TipoVinculoFindFirstArgs<ExtArgs>>): Prisma__TipoVinculoClient<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoVinculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVinculoFindFirstOrThrowArgs} args - Arguments to find a TipoVinculo
     * @example
     * // Get one TipoVinculo
     * const tipoVinculo = await prisma.tipoVinculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoVinculoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoVinculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoVinculoClient<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoVinculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVinculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoVinculos
     * const tipoVinculos = await prisma.tipoVinculo.findMany()
     * 
     * // Get first 10 TipoVinculos
     * const tipoVinculos = await prisma.tipoVinculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoVinculoWithIdOnly = await prisma.tipoVinculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoVinculoFindManyArgs>(args?: SelectSubset<T, TipoVinculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoVinculo.
     * @param {TipoVinculoCreateArgs} args - Arguments to create a TipoVinculo.
     * @example
     * // Create one TipoVinculo
     * const TipoVinculo = await prisma.tipoVinculo.create({
     *   data: {
     *     // ... data to create a TipoVinculo
     *   }
     * })
     * 
     */
    create<T extends TipoVinculoCreateArgs>(args: SelectSubset<T, TipoVinculoCreateArgs<ExtArgs>>): Prisma__TipoVinculoClient<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoVinculos.
     * @param {TipoVinculoCreateManyArgs} args - Arguments to create many TipoVinculos.
     * @example
     * // Create many TipoVinculos
     * const tipoVinculo = await prisma.tipoVinculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoVinculoCreateManyArgs>(args?: SelectSubset<T, TipoVinculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoVinculos and returns the data saved in the database.
     * @param {TipoVinculoCreateManyAndReturnArgs} args - Arguments to create many TipoVinculos.
     * @example
     * // Create many TipoVinculos
     * const tipoVinculo = await prisma.tipoVinculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoVinculos and only return the `id`
     * const tipoVinculoWithIdOnly = await prisma.tipoVinculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoVinculoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoVinculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoVinculo.
     * @param {TipoVinculoDeleteArgs} args - Arguments to delete one TipoVinculo.
     * @example
     * // Delete one TipoVinculo
     * const TipoVinculo = await prisma.tipoVinculo.delete({
     *   where: {
     *     // ... filter to delete one TipoVinculo
     *   }
     * })
     * 
     */
    delete<T extends TipoVinculoDeleteArgs>(args: SelectSubset<T, TipoVinculoDeleteArgs<ExtArgs>>): Prisma__TipoVinculoClient<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoVinculo.
     * @param {TipoVinculoUpdateArgs} args - Arguments to update one TipoVinculo.
     * @example
     * // Update one TipoVinculo
     * const tipoVinculo = await prisma.tipoVinculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoVinculoUpdateArgs>(args: SelectSubset<T, TipoVinculoUpdateArgs<ExtArgs>>): Prisma__TipoVinculoClient<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoVinculos.
     * @param {TipoVinculoDeleteManyArgs} args - Arguments to filter TipoVinculos to delete.
     * @example
     * // Delete a few TipoVinculos
     * const { count } = await prisma.tipoVinculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoVinculoDeleteManyArgs>(args?: SelectSubset<T, TipoVinculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoVinculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVinculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoVinculos
     * const tipoVinculo = await prisma.tipoVinculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoVinculoUpdateManyArgs>(args: SelectSubset<T, TipoVinculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoVinculos and returns the data updated in the database.
     * @param {TipoVinculoUpdateManyAndReturnArgs} args - Arguments to update many TipoVinculos.
     * @example
     * // Update many TipoVinculos
     * const tipoVinculo = await prisma.tipoVinculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoVinculos and only return the `id`
     * const tipoVinculoWithIdOnly = await prisma.tipoVinculo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoVinculoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoVinculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoVinculo.
     * @param {TipoVinculoUpsertArgs} args - Arguments to update or create a TipoVinculo.
     * @example
     * // Update or create a TipoVinculo
     * const tipoVinculo = await prisma.tipoVinculo.upsert({
     *   create: {
     *     // ... data to create a TipoVinculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoVinculo we want to update
     *   }
     * })
     */
    upsert<T extends TipoVinculoUpsertArgs>(args: SelectSubset<T, TipoVinculoUpsertArgs<ExtArgs>>): Prisma__TipoVinculoClient<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoVinculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVinculoCountArgs} args - Arguments to filter TipoVinculos to count.
     * @example
     * // Count the number of TipoVinculos
     * const count = await prisma.tipoVinculo.count({
     *   where: {
     *     // ... the filter for the TipoVinculos we want to count
     *   }
     * })
    **/
    count<T extends TipoVinculoCountArgs>(
      args?: Subset<T, TipoVinculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoVinculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoVinculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVinculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoVinculoAggregateArgs>(args: Subset<T, TipoVinculoAggregateArgs>): Prisma.PrismaPromise<GetTipoVinculoAggregateType<T>>

    /**
     * Group by TipoVinculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVinculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoVinculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoVinculoGroupByArgs['orderBy'] }
        : { orderBy?: TipoVinculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoVinculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoVinculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoVinculo model
   */
  readonly fields: TipoVinculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoVinculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoVinculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expedientePersonas<T extends TipoVinculo$expedientePersonasArgs<ExtArgs> = {}>(args?: Subset<T, TipoVinculo$expedientePersonasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoVinculo model
   */
  interface TipoVinculoFieldRefs {
    readonly id: FieldRef<"TipoVinculo", 'Int'>
    readonly descripcion: FieldRef<"TipoVinculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoVinculo findUnique
   */
  export type TipoVinculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVinculoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVinculo to fetch.
     */
    where: TipoVinculoWhereUniqueInput
  }

  /**
   * TipoVinculo findUniqueOrThrow
   */
  export type TipoVinculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVinculoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVinculo to fetch.
     */
    where: TipoVinculoWhereUniqueInput
  }

  /**
   * TipoVinculo findFirst
   */
  export type TipoVinculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVinculoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVinculo to fetch.
     */
    where?: TipoVinculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVinculos to fetch.
     */
    orderBy?: TipoVinculoOrderByWithRelationInput | TipoVinculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoVinculos.
     */
    cursor?: TipoVinculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVinculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVinculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoVinculos.
     */
    distinct?: TipoVinculoScalarFieldEnum | TipoVinculoScalarFieldEnum[]
  }

  /**
   * TipoVinculo findFirstOrThrow
   */
  export type TipoVinculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVinculoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVinculo to fetch.
     */
    where?: TipoVinculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVinculos to fetch.
     */
    orderBy?: TipoVinculoOrderByWithRelationInput | TipoVinculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoVinculos.
     */
    cursor?: TipoVinculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVinculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVinculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoVinculos.
     */
    distinct?: TipoVinculoScalarFieldEnum | TipoVinculoScalarFieldEnum[]
  }

  /**
   * TipoVinculo findMany
   */
  export type TipoVinculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVinculoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVinculos to fetch.
     */
    where?: TipoVinculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVinculos to fetch.
     */
    orderBy?: TipoVinculoOrderByWithRelationInput | TipoVinculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoVinculos.
     */
    cursor?: TipoVinculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVinculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVinculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoVinculos.
     */
    distinct?: TipoVinculoScalarFieldEnum | TipoVinculoScalarFieldEnum[]
  }

  /**
   * TipoVinculo create
   */
  export type TipoVinculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVinculoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoVinculo.
     */
    data: XOR<TipoVinculoCreateInput, TipoVinculoUncheckedCreateInput>
  }

  /**
   * TipoVinculo createMany
   */
  export type TipoVinculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoVinculos.
     */
    data: TipoVinculoCreateManyInput | TipoVinculoCreateManyInput[]
  }

  /**
   * TipoVinculo createManyAndReturn
   */
  export type TipoVinculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoVinculos.
     */
    data: TipoVinculoCreateManyInput | TipoVinculoCreateManyInput[]
  }

  /**
   * TipoVinculo update
   */
  export type TipoVinculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVinculoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoVinculo.
     */
    data: XOR<TipoVinculoUpdateInput, TipoVinculoUncheckedUpdateInput>
    /**
     * Choose, which TipoVinculo to update.
     */
    where: TipoVinculoWhereUniqueInput
  }

  /**
   * TipoVinculo updateMany
   */
  export type TipoVinculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoVinculos.
     */
    data: XOR<TipoVinculoUpdateManyMutationInput, TipoVinculoUncheckedUpdateManyInput>
    /**
     * Filter which TipoVinculos to update
     */
    where?: TipoVinculoWhereInput
    /**
     * Limit how many TipoVinculos to update.
     */
    limit?: number
  }

  /**
   * TipoVinculo updateManyAndReturn
   */
  export type TipoVinculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * The data used to update TipoVinculos.
     */
    data: XOR<TipoVinculoUpdateManyMutationInput, TipoVinculoUncheckedUpdateManyInput>
    /**
     * Filter which TipoVinculos to update
     */
    where?: TipoVinculoWhereInput
    /**
     * Limit how many TipoVinculos to update.
     */
    limit?: number
  }

  /**
   * TipoVinculo upsert
   */
  export type TipoVinculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVinculoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoVinculo to update in case it exists.
     */
    where: TipoVinculoWhereUniqueInput
    /**
     * In case the TipoVinculo found by the `where` argument doesn't exist, create a new TipoVinculo with this data.
     */
    create: XOR<TipoVinculoCreateInput, TipoVinculoUncheckedCreateInput>
    /**
     * In case the TipoVinculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoVinculoUpdateInput, TipoVinculoUncheckedUpdateInput>
  }

  /**
   * TipoVinculo delete
   */
  export type TipoVinculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVinculoInclude<ExtArgs> | null
    /**
     * Filter which TipoVinculo to delete.
     */
    where: TipoVinculoWhereUniqueInput
  }

  /**
   * TipoVinculo deleteMany
   */
  export type TipoVinculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoVinculos to delete
     */
    where?: TipoVinculoWhereInput
    /**
     * Limit how many TipoVinculos to delete.
     */
    limit?: number
  }

  /**
   * TipoVinculo.expedientePersonas
   */
  export type TipoVinculo$expedientePersonasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    where?: ExpedientePersonaWhereInput
    orderBy?: ExpedientePersonaOrderByWithRelationInput | ExpedientePersonaOrderByWithRelationInput[]
    cursor?: ExpedientePersonaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpedientePersonaScalarFieldEnum | ExpedientePersonaScalarFieldEnum[]
  }

  /**
   * TipoVinculo without action
   */
  export type TipoVinculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVinculo
     */
    select?: TipoVinculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVinculo
     */
    omit?: TipoVinculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVinculoInclude<ExtArgs> | null
  }


  /**
   * Model ExpedientePersona
   */

  export type AggregateExpedientePersona = {
    _count: ExpedientePersonaCountAggregateOutputType | null
    _avg: ExpedientePersonaAvgAggregateOutputType | null
    _sum: ExpedientePersonaSumAggregateOutputType | null
    _min: ExpedientePersonaMinAggregateOutputType | null
    _max: ExpedientePersonaMaxAggregateOutputType | null
  }

  export type ExpedientePersonaAvgAggregateOutputType = {
    expNumero: number | null
    expAnio: number | null
    vinculoId: number | null
  }

  export type ExpedientePersonaSumAggregateOutputType = {
    expNumero: number | null
    expAnio: number | null
    vinculoId: number | null
  }

  export type ExpedientePersonaMinAggregateOutputType = {
    expCodigoOrganismo: string | null
    expTipo: string | null
    expNumero: number | null
    expAnio: number | null
    personaDni: string | null
    vinculoId: number | null
  }

  export type ExpedientePersonaMaxAggregateOutputType = {
    expCodigoOrganismo: string | null
    expTipo: string | null
    expNumero: number | null
    expAnio: number | null
    personaDni: string | null
    vinculoId: number | null
  }

  export type ExpedientePersonaCountAggregateOutputType = {
    expCodigoOrganismo: number
    expTipo: number
    expNumero: number
    expAnio: number
    personaDni: number
    vinculoId: number
    _all: number
  }


  export type ExpedientePersonaAvgAggregateInputType = {
    expNumero?: true
    expAnio?: true
    vinculoId?: true
  }

  export type ExpedientePersonaSumAggregateInputType = {
    expNumero?: true
    expAnio?: true
    vinculoId?: true
  }

  export type ExpedientePersonaMinAggregateInputType = {
    expCodigoOrganismo?: true
    expTipo?: true
    expNumero?: true
    expAnio?: true
    personaDni?: true
    vinculoId?: true
  }

  export type ExpedientePersonaMaxAggregateInputType = {
    expCodigoOrganismo?: true
    expTipo?: true
    expNumero?: true
    expAnio?: true
    personaDni?: true
    vinculoId?: true
  }

  export type ExpedientePersonaCountAggregateInputType = {
    expCodigoOrganismo?: true
    expTipo?: true
    expNumero?: true
    expAnio?: true
    personaDni?: true
    vinculoId?: true
    _all?: true
  }

  export type ExpedientePersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpedientePersona to aggregate.
     */
    where?: ExpedientePersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpedientePersonas to fetch.
     */
    orderBy?: ExpedientePersonaOrderByWithRelationInput | ExpedientePersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpedientePersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpedientePersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpedientePersonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpedientePersonas
    **/
    _count?: true | ExpedientePersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpedientePersonaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpedientePersonaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpedientePersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpedientePersonaMaxAggregateInputType
  }

  export type GetExpedientePersonaAggregateType<T extends ExpedientePersonaAggregateArgs> = {
        [P in keyof T & keyof AggregateExpedientePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpedientePersona[P]>
      : GetScalarType<T[P], AggregateExpedientePersona[P]>
  }




  export type ExpedientePersonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedientePersonaWhereInput
    orderBy?: ExpedientePersonaOrderByWithAggregationInput | ExpedientePersonaOrderByWithAggregationInput[]
    by: ExpedientePersonaScalarFieldEnum[] | ExpedientePersonaScalarFieldEnum
    having?: ExpedientePersonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpedientePersonaCountAggregateInputType | true
    _avg?: ExpedientePersonaAvgAggregateInputType
    _sum?: ExpedientePersonaSumAggregateInputType
    _min?: ExpedientePersonaMinAggregateInputType
    _max?: ExpedientePersonaMaxAggregateInputType
  }

  export type ExpedientePersonaGroupByOutputType = {
    expCodigoOrganismo: string
    expTipo: string
    expNumero: number
    expAnio: number
    personaDni: string
    vinculoId: number
    _count: ExpedientePersonaCountAggregateOutputType | null
    _avg: ExpedientePersonaAvgAggregateOutputType | null
    _sum: ExpedientePersonaSumAggregateOutputType | null
    _min: ExpedientePersonaMinAggregateOutputType | null
    _max: ExpedientePersonaMaxAggregateOutputType | null
  }

  type GetExpedientePersonaGroupByPayload<T extends ExpedientePersonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpedientePersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpedientePersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpedientePersonaGroupByOutputType[P]>
            : GetScalarType<T[P], ExpedientePersonaGroupByOutputType[P]>
        }
      >
    >


  export type ExpedientePersonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expCodigoOrganismo?: boolean
    expTipo?: boolean
    expNumero?: boolean
    expAnio?: boolean
    personaDni?: boolean
    vinculoId?: boolean
    expediente?: boolean | ExpedienteDefaultArgs<ExtArgs>
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    vinculo?: boolean | TipoVinculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expedientePersona"]>

  export type ExpedientePersonaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expCodigoOrganismo?: boolean
    expTipo?: boolean
    expNumero?: boolean
    expAnio?: boolean
    personaDni?: boolean
    vinculoId?: boolean
    expediente?: boolean | ExpedienteDefaultArgs<ExtArgs>
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    vinculo?: boolean | TipoVinculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expedientePersona"]>

  export type ExpedientePersonaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expCodigoOrganismo?: boolean
    expTipo?: boolean
    expNumero?: boolean
    expAnio?: boolean
    personaDni?: boolean
    vinculoId?: boolean
    expediente?: boolean | ExpedienteDefaultArgs<ExtArgs>
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    vinculo?: boolean | TipoVinculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expedientePersona"]>

  export type ExpedientePersonaSelectScalar = {
    expCodigoOrganismo?: boolean
    expTipo?: boolean
    expNumero?: boolean
    expAnio?: boolean
    personaDni?: boolean
    vinculoId?: boolean
  }

  export type ExpedientePersonaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expCodigoOrganismo" | "expTipo" | "expNumero" | "expAnio" | "personaDni" | "vinculoId", ExtArgs["result"]["expedientePersona"]>
  export type ExpedientePersonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expediente?: boolean | ExpedienteDefaultArgs<ExtArgs>
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    vinculo?: boolean | TipoVinculoDefaultArgs<ExtArgs>
  }
  export type ExpedientePersonaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expediente?: boolean | ExpedienteDefaultArgs<ExtArgs>
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    vinculo?: boolean | TipoVinculoDefaultArgs<ExtArgs>
  }
  export type ExpedientePersonaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expediente?: boolean | ExpedienteDefaultArgs<ExtArgs>
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    vinculo?: boolean | TipoVinculoDefaultArgs<ExtArgs>
  }

  export type $ExpedientePersonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpedientePersona"
    objects: {
      expediente: Prisma.$ExpedientePayload<ExtArgs>
      persona: Prisma.$PersonaPayload<ExtArgs>
      vinculo: Prisma.$TipoVinculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      expCodigoOrganismo: string
      expTipo: string
      expNumero: number
      expAnio: number
      personaDni: string
      vinculoId: number
    }, ExtArgs["result"]["expedientePersona"]>
    composites: {}
  }

  type ExpedientePersonaGetPayload<S extends boolean | null | undefined | ExpedientePersonaDefaultArgs> = $Result.GetResult<Prisma.$ExpedientePersonaPayload, S>

  type ExpedientePersonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpedientePersonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpedientePersonaCountAggregateInputType | true
    }

  export interface ExpedientePersonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpedientePersona'], meta: { name: 'ExpedientePersona' } }
    /**
     * Find zero or one ExpedientePersona that matches the filter.
     * @param {ExpedientePersonaFindUniqueArgs} args - Arguments to find a ExpedientePersona
     * @example
     * // Get one ExpedientePersona
     * const expedientePersona = await prisma.expedientePersona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpedientePersonaFindUniqueArgs>(args: SelectSubset<T, ExpedientePersonaFindUniqueArgs<ExtArgs>>): Prisma__ExpedientePersonaClient<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpedientePersona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpedientePersonaFindUniqueOrThrowArgs} args - Arguments to find a ExpedientePersona
     * @example
     * // Get one ExpedientePersona
     * const expedientePersona = await prisma.expedientePersona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpedientePersonaFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpedientePersonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpedientePersonaClient<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpedientePersona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedientePersonaFindFirstArgs} args - Arguments to find a ExpedientePersona
     * @example
     * // Get one ExpedientePersona
     * const expedientePersona = await prisma.expedientePersona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpedientePersonaFindFirstArgs>(args?: SelectSubset<T, ExpedientePersonaFindFirstArgs<ExtArgs>>): Prisma__ExpedientePersonaClient<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpedientePersona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedientePersonaFindFirstOrThrowArgs} args - Arguments to find a ExpedientePersona
     * @example
     * // Get one ExpedientePersona
     * const expedientePersona = await prisma.expedientePersona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpedientePersonaFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpedientePersonaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpedientePersonaClient<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpedientePersonas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedientePersonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpedientePersonas
     * const expedientePersonas = await prisma.expedientePersona.findMany()
     * 
     * // Get first 10 ExpedientePersonas
     * const expedientePersonas = await prisma.expedientePersona.findMany({ take: 10 })
     * 
     * // Only select the `expCodigoOrganismo`
     * const expedientePersonaWithExpCodigoOrganismoOnly = await prisma.expedientePersona.findMany({ select: { expCodigoOrganismo: true } })
     * 
     */
    findMany<T extends ExpedientePersonaFindManyArgs>(args?: SelectSubset<T, ExpedientePersonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpedientePersona.
     * @param {ExpedientePersonaCreateArgs} args - Arguments to create a ExpedientePersona.
     * @example
     * // Create one ExpedientePersona
     * const ExpedientePersona = await prisma.expedientePersona.create({
     *   data: {
     *     // ... data to create a ExpedientePersona
     *   }
     * })
     * 
     */
    create<T extends ExpedientePersonaCreateArgs>(args: SelectSubset<T, ExpedientePersonaCreateArgs<ExtArgs>>): Prisma__ExpedientePersonaClient<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpedientePersonas.
     * @param {ExpedientePersonaCreateManyArgs} args - Arguments to create many ExpedientePersonas.
     * @example
     * // Create many ExpedientePersonas
     * const expedientePersona = await prisma.expedientePersona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpedientePersonaCreateManyArgs>(args?: SelectSubset<T, ExpedientePersonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpedientePersonas and returns the data saved in the database.
     * @param {ExpedientePersonaCreateManyAndReturnArgs} args - Arguments to create many ExpedientePersonas.
     * @example
     * // Create many ExpedientePersonas
     * const expedientePersona = await prisma.expedientePersona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpedientePersonas and only return the `expCodigoOrganismo`
     * const expedientePersonaWithExpCodigoOrganismoOnly = await prisma.expedientePersona.createManyAndReturn({
     *   select: { expCodigoOrganismo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpedientePersonaCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpedientePersonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpedientePersona.
     * @param {ExpedientePersonaDeleteArgs} args - Arguments to delete one ExpedientePersona.
     * @example
     * // Delete one ExpedientePersona
     * const ExpedientePersona = await prisma.expedientePersona.delete({
     *   where: {
     *     // ... filter to delete one ExpedientePersona
     *   }
     * })
     * 
     */
    delete<T extends ExpedientePersonaDeleteArgs>(args: SelectSubset<T, ExpedientePersonaDeleteArgs<ExtArgs>>): Prisma__ExpedientePersonaClient<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpedientePersona.
     * @param {ExpedientePersonaUpdateArgs} args - Arguments to update one ExpedientePersona.
     * @example
     * // Update one ExpedientePersona
     * const expedientePersona = await prisma.expedientePersona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpedientePersonaUpdateArgs>(args: SelectSubset<T, ExpedientePersonaUpdateArgs<ExtArgs>>): Prisma__ExpedientePersonaClient<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpedientePersonas.
     * @param {ExpedientePersonaDeleteManyArgs} args - Arguments to filter ExpedientePersonas to delete.
     * @example
     * // Delete a few ExpedientePersonas
     * const { count } = await prisma.expedientePersona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpedientePersonaDeleteManyArgs>(args?: SelectSubset<T, ExpedientePersonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpedientePersonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedientePersonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpedientePersonas
     * const expedientePersona = await prisma.expedientePersona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpedientePersonaUpdateManyArgs>(args: SelectSubset<T, ExpedientePersonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpedientePersonas and returns the data updated in the database.
     * @param {ExpedientePersonaUpdateManyAndReturnArgs} args - Arguments to update many ExpedientePersonas.
     * @example
     * // Update many ExpedientePersonas
     * const expedientePersona = await prisma.expedientePersona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpedientePersonas and only return the `expCodigoOrganismo`
     * const expedientePersonaWithExpCodigoOrganismoOnly = await prisma.expedientePersona.updateManyAndReturn({
     *   select: { expCodigoOrganismo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpedientePersonaUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpedientePersonaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpedientePersona.
     * @param {ExpedientePersonaUpsertArgs} args - Arguments to update or create a ExpedientePersona.
     * @example
     * // Update or create a ExpedientePersona
     * const expedientePersona = await prisma.expedientePersona.upsert({
     *   create: {
     *     // ... data to create a ExpedientePersona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpedientePersona we want to update
     *   }
     * })
     */
    upsert<T extends ExpedientePersonaUpsertArgs>(args: SelectSubset<T, ExpedientePersonaUpsertArgs<ExtArgs>>): Prisma__ExpedientePersonaClient<$Result.GetResult<Prisma.$ExpedientePersonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpedientePersonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedientePersonaCountArgs} args - Arguments to filter ExpedientePersonas to count.
     * @example
     * // Count the number of ExpedientePersonas
     * const count = await prisma.expedientePersona.count({
     *   where: {
     *     // ... the filter for the ExpedientePersonas we want to count
     *   }
     * })
    **/
    count<T extends ExpedientePersonaCountArgs>(
      args?: Subset<T, ExpedientePersonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpedientePersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpedientePersona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedientePersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpedientePersonaAggregateArgs>(args: Subset<T, ExpedientePersonaAggregateArgs>): Prisma.PrismaPromise<GetExpedientePersonaAggregateType<T>>

    /**
     * Group by ExpedientePersona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedientePersonaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpedientePersonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpedientePersonaGroupByArgs['orderBy'] }
        : { orderBy?: ExpedientePersonaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpedientePersonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpedientePersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpedientePersona model
   */
  readonly fields: ExpedientePersonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpedientePersona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpedientePersonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expediente<T extends ExpedienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpedienteDefaultArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    persona<T extends PersonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaDefaultArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vinculo<T extends TipoVinculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoVinculoDefaultArgs<ExtArgs>>): Prisma__TipoVinculoClient<$Result.GetResult<Prisma.$TipoVinculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpedientePersona model
   */
  interface ExpedientePersonaFieldRefs {
    readonly expCodigoOrganismo: FieldRef<"ExpedientePersona", 'String'>
    readonly expTipo: FieldRef<"ExpedientePersona", 'String'>
    readonly expNumero: FieldRef<"ExpedientePersona", 'Int'>
    readonly expAnio: FieldRef<"ExpedientePersona", 'Int'>
    readonly personaDni: FieldRef<"ExpedientePersona", 'String'>
    readonly vinculoId: FieldRef<"ExpedientePersona", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExpedientePersona findUnique
   */
  export type ExpedientePersonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    /**
     * Filter, which ExpedientePersona to fetch.
     */
    where: ExpedientePersonaWhereUniqueInput
  }

  /**
   * ExpedientePersona findUniqueOrThrow
   */
  export type ExpedientePersonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    /**
     * Filter, which ExpedientePersona to fetch.
     */
    where: ExpedientePersonaWhereUniqueInput
  }

  /**
   * ExpedientePersona findFirst
   */
  export type ExpedientePersonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    /**
     * Filter, which ExpedientePersona to fetch.
     */
    where?: ExpedientePersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpedientePersonas to fetch.
     */
    orderBy?: ExpedientePersonaOrderByWithRelationInput | ExpedientePersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpedientePersonas.
     */
    cursor?: ExpedientePersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpedientePersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpedientePersonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpedientePersonas.
     */
    distinct?: ExpedientePersonaScalarFieldEnum | ExpedientePersonaScalarFieldEnum[]
  }

  /**
   * ExpedientePersona findFirstOrThrow
   */
  export type ExpedientePersonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    /**
     * Filter, which ExpedientePersona to fetch.
     */
    where?: ExpedientePersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpedientePersonas to fetch.
     */
    orderBy?: ExpedientePersonaOrderByWithRelationInput | ExpedientePersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpedientePersonas.
     */
    cursor?: ExpedientePersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpedientePersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpedientePersonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpedientePersonas.
     */
    distinct?: ExpedientePersonaScalarFieldEnum | ExpedientePersonaScalarFieldEnum[]
  }

  /**
   * ExpedientePersona findMany
   */
  export type ExpedientePersonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    /**
     * Filter, which ExpedientePersonas to fetch.
     */
    where?: ExpedientePersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpedientePersonas to fetch.
     */
    orderBy?: ExpedientePersonaOrderByWithRelationInput | ExpedientePersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpedientePersonas.
     */
    cursor?: ExpedientePersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpedientePersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpedientePersonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpedientePersonas.
     */
    distinct?: ExpedientePersonaScalarFieldEnum | ExpedientePersonaScalarFieldEnum[]
  }

  /**
   * ExpedientePersona create
   */
  export type ExpedientePersonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpedientePersona.
     */
    data: XOR<ExpedientePersonaCreateInput, ExpedientePersonaUncheckedCreateInput>
  }

  /**
   * ExpedientePersona createMany
   */
  export type ExpedientePersonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpedientePersonas.
     */
    data: ExpedientePersonaCreateManyInput | ExpedientePersonaCreateManyInput[]
  }

  /**
   * ExpedientePersona createManyAndReturn
   */
  export type ExpedientePersonaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * The data used to create many ExpedientePersonas.
     */
    data: ExpedientePersonaCreateManyInput | ExpedientePersonaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpedientePersona update
   */
  export type ExpedientePersonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpedientePersona.
     */
    data: XOR<ExpedientePersonaUpdateInput, ExpedientePersonaUncheckedUpdateInput>
    /**
     * Choose, which ExpedientePersona to update.
     */
    where: ExpedientePersonaWhereUniqueInput
  }

  /**
   * ExpedientePersona updateMany
   */
  export type ExpedientePersonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpedientePersonas.
     */
    data: XOR<ExpedientePersonaUpdateManyMutationInput, ExpedientePersonaUncheckedUpdateManyInput>
    /**
     * Filter which ExpedientePersonas to update
     */
    where?: ExpedientePersonaWhereInput
    /**
     * Limit how many ExpedientePersonas to update.
     */
    limit?: number
  }

  /**
   * ExpedientePersona updateManyAndReturn
   */
  export type ExpedientePersonaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * The data used to update ExpedientePersonas.
     */
    data: XOR<ExpedientePersonaUpdateManyMutationInput, ExpedientePersonaUncheckedUpdateManyInput>
    /**
     * Filter which ExpedientePersonas to update
     */
    where?: ExpedientePersonaWhereInput
    /**
     * Limit how many ExpedientePersonas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpedientePersona upsert
   */
  export type ExpedientePersonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpedientePersona to update in case it exists.
     */
    where: ExpedientePersonaWhereUniqueInput
    /**
     * In case the ExpedientePersona found by the `where` argument doesn't exist, create a new ExpedientePersona with this data.
     */
    create: XOR<ExpedientePersonaCreateInput, ExpedientePersonaUncheckedCreateInput>
    /**
     * In case the ExpedientePersona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpedientePersonaUpdateInput, ExpedientePersonaUncheckedUpdateInput>
  }

  /**
   * ExpedientePersona delete
   */
  export type ExpedientePersonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
    /**
     * Filter which ExpedientePersona to delete.
     */
    where: ExpedientePersonaWhereUniqueInput
  }

  /**
   * ExpedientePersona deleteMany
   */
  export type ExpedientePersonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpedientePersonas to delete
     */
    where?: ExpedientePersonaWhereInput
    /**
     * Limit how many ExpedientePersonas to delete.
     */
    limit?: number
  }

  /**
   * ExpedientePersona without action
   */
  export type ExpedientePersonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedientePersona
     */
    select?: ExpedientePersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedientePersona
     */
    omit?: ExpedientePersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedientePersonaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CiudadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    codigo: 'codigo'
  };

  export type CiudadScalarFieldEnum = (typeof CiudadScalarFieldEnum)[keyof typeof CiudadScalarFieldEnum]


  export const FueroScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    codigo: 'codigo'
  };

  export type FueroScalarFieldEnum = (typeof FueroScalarFieldEnum)[keyof typeof FueroScalarFieldEnum]


  export const OrganismoScalarFieldEnum: {
    codigo: 'codigo',
    nombre: 'nombre',
    titulo: 'titulo',
    ciudadId: 'ciudadId',
    fueroId: 'fueroId'
  };

  export type OrganismoScalarFieldEnum = (typeof OrganismoScalarFieldEnum)[keyof typeof OrganismoScalarFieldEnum]


  export const ExpedienteScalarFieldEnum: {
    codigoOrganismo: 'codigoOrganismo',
    tipo: 'tipo',
    numero: 'numero',
    anio: 'anio',
    titulo: 'titulo',
    ciudadId: 'ciudadId'
  };

  export type ExpedienteScalarFieldEnum = (typeof ExpedienteScalarFieldEnum)[keyof typeof ExpedienteScalarFieldEnum]


  export const PersonaScalarFieldEnum: {
    dni: 'dni',
    apellido: 'apellido',
    nombre: 'nombre'
  };

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const TipoVinculoScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type TipoVinculoScalarFieldEnum = (typeof TipoVinculoScalarFieldEnum)[keyof typeof TipoVinculoScalarFieldEnum]


  export const ExpedientePersonaScalarFieldEnum: {
    expCodigoOrganismo: 'expCodigoOrganismo',
    expTipo: 'expTipo',
    expNumero: 'expNumero',
    expAnio: 'expAnio',
    personaDni: 'personaDni',
    vinculoId: 'vinculoId'
  };

  export type ExpedientePersonaScalarFieldEnum = (typeof ExpedientePersonaScalarFieldEnum)[keyof typeof ExpedientePersonaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CiudadWhereInput = {
    AND?: CiudadWhereInput | CiudadWhereInput[]
    OR?: CiudadWhereInput[]
    NOT?: CiudadWhereInput | CiudadWhereInput[]
    id?: IntFilter<"Ciudad"> | number
    nombre?: StringFilter<"Ciudad"> | string
    codigo?: StringFilter<"Ciudad"> | string
    expedientes?: ExpedienteListRelationFilter
    organismos?: OrganismoListRelationFilter
  }

  export type CiudadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    expedientes?: ExpedienteOrderByRelationAggregateInput
    organismos?: OrganismoOrderByRelationAggregateInput
  }

  export type CiudadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    codigo?: string
    AND?: CiudadWhereInput | CiudadWhereInput[]
    OR?: CiudadWhereInput[]
    NOT?: CiudadWhereInput | CiudadWhereInput[]
    expedientes?: ExpedienteListRelationFilter
    organismos?: OrganismoListRelationFilter
  }, "id" | "nombre" | "codigo">

  export type CiudadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    _count?: CiudadCountOrderByAggregateInput
    _avg?: CiudadAvgOrderByAggregateInput
    _max?: CiudadMaxOrderByAggregateInput
    _min?: CiudadMinOrderByAggregateInput
    _sum?: CiudadSumOrderByAggregateInput
  }

  export type CiudadScalarWhereWithAggregatesInput = {
    AND?: CiudadScalarWhereWithAggregatesInput | CiudadScalarWhereWithAggregatesInput[]
    OR?: CiudadScalarWhereWithAggregatesInput[]
    NOT?: CiudadScalarWhereWithAggregatesInput | CiudadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ciudad"> | number
    nombre?: StringWithAggregatesFilter<"Ciudad"> | string
    codigo?: StringWithAggregatesFilter<"Ciudad"> | string
  }

  export type FueroWhereInput = {
    AND?: FueroWhereInput | FueroWhereInput[]
    OR?: FueroWhereInput[]
    NOT?: FueroWhereInput | FueroWhereInput[]
    id?: IntFilter<"Fuero"> | number
    nombre?: StringFilter<"Fuero"> | string
    codigo?: StringFilter<"Fuero"> | string
    organismos?: OrganismoListRelationFilter
  }

  export type FueroOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    organismos?: OrganismoOrderByRelationAggregateInput
  }

  export type FueroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    codigo?: string
    AND?: FueroWhereInput | FueroWhereInput[]
    OR?: FueroWhereInput[]
    NOT?: FueroWhereInput | FueroWhereInput[]
    organismos?: OrganismoListRelationFilter
  }, "id" | "nombre" | "codigo">

  export type FueroOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    _count?: FueroCountOrderByAggregateInput
    _avg?: FueroAvgOrderByAggregateInput
    _max?: FueroMaxOrderByAggregateInput
    _min?: FueroMinOrderByAggregateInput
    _sum?: FueroSumOrderByAggregateInput
  }

  export type FueroScalarWhereWithAggregatesInput = {
    AND?: FueroScalarWhereWithAggregatesInput | FueroScalarWhereWithAggregatesInput[]
    OR?: FueroScalarWhereWithAggregatesInput[]
    NOT?: FueroScalarWhereWithAggregatesInput | FueroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fuero"> | number
    nombre?: StringWithAggregatesFilter<"Fuero"> | string
    codigo?: StringWithAggregatesFilter<"Fuero"> | string
  }

  export type OrganismoWhereInput = {
    AND?: OrganismoWhereInput | OrganismoWhereInput[]
    OR?: OrganismoWhereInput[]
    NOT?: OrganismoWhereInput | OrganismoWhereInput[]
    codigo?: StringFilter<"Organismo"> | string
    nombre?: StringFilter<"Organismo"> | string
    titulo?: StringFilter<"Organismo"> | string
    ciudadId?: IntFilter<"Organismo"> | number
    fueroId?: IntFilter<"Organismo"> | number
    ciudad?: XOR<CiudadScalarRelationFilter, CiudadWhereInput>
    fuero?: XOR<FueroScalarRelationFilter, FueroWhereInput>
    expedientes?: ExpedienteListRelationFilter
  }

  export type OrganismoOrderByWithRelationInput = {
    codigo?: SortOrder
    nombre?: SortOrder
    titulo?: SortOrder
    ciudadId?: SortOrder
    fueroId?: SortOrder
    ciudad?: CiudadOrderByWithRelationInput
    fuero?: FueroOrderByWithRelationInput
    expedientes?: ExpedienteOrderByRelationAggregateInput
  }

  export type OrganismoWhereUniqueInput = Prisma.AtLeast<{
    codigo?: string
    AND?: OrganismoWhereInput | OrganismoWhereInput[]
    OR?: OrganismoWhereInput[]
    NOT?: OrganismoWhereInput | OrganismoWhereInput[]
    nombre?: StringFilter<"Organismo"> | string
    titulo?: StringFilter<"Organismo"> | string
    ciudadId?: IntFilter<"Organismo"> | number
    fueroId?: IntFilter<"Organismo"> | number
    ciudad?: XOR<CiudadScalarRelationFilter, CiudadWhereInput>
    fuero?: XOR<FueroScalarRelationFilter, FueroWhereInput>
    expedientes?: ExpedienteListRelationFilter
  }, "codigo">

  export type OrganismoOrderByWithAggregationInput = {
    codigo?: SortOrder
    nombre?: SortOrder
    titulo?: SortOrder
    ciudadId?: SortOrder
    fueroId?: SortOrder
    _count?: OrganismoCountOrderByAggregateInput
    _avg?: OrganismoAvgOrderByAggregateInput
    _max?: OrganismoMaxOrderByAggregateInput
    _min?: OrganismoMinOrderByAggregateInput
    _sum?: OrganismoSumOrderByAggregateInput
  }

  export type OrganismoScalarWhereWithAggregatesInput = {
    AND?: OrganismoScalarWhereWithAggregatesInput | OrganismoScalarWhereWithAggregatesInput[]
    OR?: OrganismoScalarWhereWithAggregatesInput[]
    NOT?: OrganismoScalarWhereWithAggregatesInput | OrganismoScalarWhereWithAggregatesInput[]
    codigo?: StringWithAggregatesFilter<"Organismo"> | string
    nombre?: StringWithAggregatesFilter<"Organismo"> | string
    titulo?: StringWithAggregatesFilter<"Organismo"> | string
    ciudadId?: IntWithAggregatesFilter<"Organismo"> | number
    fueroId?: IntWithAggregatesFilter<"Organismo"> | number
  }

  export type ExpedienteWhereInput = {
    AND?: ExpedienteWhereInput | ExpedienteWhereInput[]
    OR?: ExpedienteWhereInput[]
    NOT?: ExpedienteWhereInput | ExpedienteWhereInput[]
    codigoOrganismo?: StringFilter<"Expediente"> | string
    tipo?: StringFilter<"Expediente"> | string
    numero?: IntFilter<"Expediente"> | number
    anio?: IntFilter<"Expediente"> | number
    titulo?: StringFilter<"Expediente"> | string
    ciudadId?: IntFilter<"Expediente"> | number
    organismo?: XOR<OrganismoScalarRelationFilter, OrganismoWhereInput>
    ciudad?: XOR<CiudadScalarRelationFilter, CiudadWhereInput>
    personas?: ExpedientePersonaListRelationFilter
  }

  export type ExpedienteOrderByWithRelationInput = {
    codigoOrganismo?: SortOrder
    tipo?: SortOrder
    numero?: SortOrder
    anio?: SortOrder
    titulo?: SortOrder
    ciudadId?: SortOrder
    organismo?: OrganismoOrderByWithRelationInput
    ciudad?: CiudadOrderByWithRelationInput
    personas?: ExpedientePersonaOrderByRelationAggregateInput
  }

  export type ExpedienteWhereUniqueInput = Prisma.AtLeast<{
    codigoOrganismo_tipo_numero_anio?: ExpedienteCodigoOrganismoTipoNumeroAnioCompoundUniqueInput
    AND?: ExpedienteWhereInput | ExpedienteWhereInput[]
    OR?: ExpedienteWhereInput[]
    NOT?: ExpedienteWhereInput | ExpedienteWhereInput[]
    codigoOrganismo?: StringFilter<"Expediente"> | string
    tipo?: StringFilter<"Expediente"> | string
    numero?: IntFilter<"Expediente"> | number
    anio?: IntFilter<"Expediente"> | number
    titulo?: StringFilter<"Expediente"> | string
    ciudadId?: IntFilter<"Expediente"> | number
    organismo?: XOR<OrganismoScalarRelationFilter, OrganismoWhereInput>
    ciudad?: XOR<CiudadScalarRelationFilter, CiudadWhereInput>
    personas?: ExpedientePersonaListRelationFilter
  }, "codigoOrganismo_tipo_numero_anio">

  export type ExpedienteOrderByWithAggregationInput = {
    codigoOrganismo?: SortOrder
    tipo?: SortOrder
    numero?: SortOrder
    anio?: SortOrder
    titulo?: SortOrder
    ciudadId?: SortOrder
    _count?: ExpedienteCountOrderByAggregateInput
    _avg?: ExpedienteAvgOrderByAggregateInput
    _max?: ExpedienteMaxOrderByAggregateInput
    _min?: ExpedienteMinOrderByAggregateInput
    _sum?: ExpedienteSumOrderByAggregateInput
  }

  export type ExpedienteScalarWhereWithAggregatesInput = {
    AND?: ExpedienteScalarWhereWithAggregatesInput | ExpedienteScalarWhereWithAggregatesInput[]
    OR?: ExpedienteScalarWhereWithAggregatesInput[]
    NOT?: ExpedienteScalarWhereWithAggregatesInput | ExpedienteScalarWhereWithAggregatesInput[]
    codigoOrganismo?: StringWithAggregatesFilter<"Expediente"> | string
    tipo?: StringWithAggregatesFilter<"Expediente"> | string
    numero?: IntWithAggregatesFilter<"Expediente"> | number
    anio?: IntWithAggregatesFilter<"Expediente"> | number
    titulo?: StringWithAggregatesFilter<"Expediente"> | string
    ciudadId?: IntWithAggregatesFilter<"Expediente"> | number
  }

  export type PersonaWhereInput = {
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    dni?: StringFilter<"Persona"> | string
    apellido?: StringFilter<"Persona"> | string
    nombre?: StringFilter<"Persona"> | string
    expedientes?: ExpedientePersonaListRelationFilter
  }

  export type PersonaOrderByWithRelationInput = {
    dni?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
    expedientes?: ExpedientePersonaOrderByRelationAggregateInput
  }

  export type PersonaWhereUniqueInput = Prisma.AtLeast<{
    dni?: string
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    apellido?: StringFilter<"Persona"> | string
    nombre?: StringFilter<"Persona"> | string
    expedientes?: ExpedientePersonaListRelationFilter
  }, "dni">

  export type PersonaOrderByWithAggregationInput = {
    dni?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
    _count?: PersonaCountOrderByAggregateInput
    _max?: PersonaMaxOrderByAggregateInput
    _min?: PersonaMinOrderByAggregateInput
  }

  export type PersonaScalarWhereWithAggregatesInput = {
    AND?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    OR?: PersonaScalarWhereWithAggregatesInput[]
    NOT?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    dni?: StringWithAggregatesFilter<"Persona"> | string
    apellido?: StringWithAggregatesFilter<"Persona"> | string
    nombre?: StringWithAggregatesFilter<"Persona"> | string
  }

  export type TipoVinculoWhereInput = {
    AND?: TipoVinculoWhereInput | TipoVinculoWhereInput[]
    OR?: TipoVinculoWhereInput[]
    NOT?: TipoVinculoWhereInput | TipoVinculoWhereInput[]
    id?: IntFilter<"TipoVinculo"> | number
    descripcion?: StringFilter<"TipoVinculo"> | string
    expedientePersonas?: ExpedientePersonaListRelationFilter
  }

  export type TipoVinculoOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    expedientePersonas?: ExpedientePersonaOrderByRelationAggregateInput
  }

  export type TipoVinculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    descripcion?: string
    AND?: TipoVinculoWhereInput | TipoVinculoWhereInput[]
    OR?: TipoVinculoWhereInput[]
    NOT?: TipoVinculoWhereInput | TipoVinculoWhereInput[]
    expedientePersonas?: ExpedientePersonaListRelationFilter
  }, "id" | "descripcion">

  export type TipoVinculoOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: TipoVinculoCountOrderByAggregateInput
    _avg?: TipoVinculoAvgOrderByAggregateInput
    _max?: TipoVinculoMaxOrderByAggregateInput
    _min?: TipoVinculoMinOrderByAggregateInput
    _sum?: TipoVinculoSumOrderByAggregateInput
  }

  export type TipoVinculoScalarWhereWithAggregatesInput = {
    AND?: TipoVinculoScalarWhereWithAggregatesInput | TipoVinculoScalarWhereWithAggregatesInput[]
    OR?: TipoVinculoScalarWhereWithAggregatesInput[]
    NOT?: TipoVinculoScalarWhereWithAggregatesInput | TipoVinculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoVinculo"> | number
    descripcion?: StringWithAggregatesFilter<"TipoVinculo"> | string
  }

  export type ExpedientePersonaWhereInput = {
    AND?: ExpedientePersonaWhereInput | ExpedientePersonaWhereInput[]
    OR?: ExpedientePersonaWhereInput[]
    NOT?: ExpedientePersonaWhereInput | ExpedientePersonaWhereInput[]
    expCodigoOrganismo?: StringFilter<"ExpedientePersona"> | string
    expTipo?: StringFilter<"ExpedientePersona"> | string
    expNumero?: IntFilter<"ExpedientePersona"> | number
    expAnio?: IntFilter<"ExpedientePersona"> | number
    personaDni?: StringFilter<"ExpedientePersona"> | string
    vinculoId?: IntFilter<"ExpedientePersona"> | number
    expediente?: XOR<ExpedienteScalarRelationFilter, ExpedienteWhereInput>
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
    vinculo?: XOR<TipoVinculoScalarRelationFilter, TipoVinculoWhereInput>
  }

  export type ExpedientePersonaOrderByWithRelationInput = {
    expCodigoOrganismo?: SortOrder
    expTipo?: SortOrder
    expNumero?: SortOrder
    expAnio?: SortOrder
    personaDni?: SortOrder
    vinculoId?: SortOrder
    expediente?: ExpedienteOrderByWithRelationInput
    persona?: PersonaOrderByWithRelationInput
    vinculo?: TipoVinculoOrderByWithRelationInput
  }

  export type ExpedientePersonaWhereUniqueInput = Prisma.AtLeast<{
    expCodigoOrganismo_expTipo_expNumero_expAnio_personaDni?: ExpedientePersonaExpCodigoOrganismoExpTipoExpNumeroExpAnioPersonaDniCompoundUniqueInput
    AND?: ExpedientePersonaWhereInput | ExpedientePersonaWhereInput[]
    OR?: ExpedientePersonaWhereInput[]
    NOT?: ExpedientePersonaWhereInput | ExpedientePersonaWhereInput[]
    expCodigoOrganismo?: StringFilter<"ExpedientePersona"> | string
    expTipo?: StringFilter<"ExpedientePersona"> | string
    expNumero?: IntFilter<"ExpedientePersona"> | number
    expAnio?: IntFilter<"ExpedientePersona"> | number
    personaDni?: StringFilter<"ExpedientePersona"> | string
    vinculoId?: IntFilter<"ExpedientePersona"> | number
    expediente?: XOR<ExpedienteScalarRelationFilter, ExpedienteWhereInput>
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
    vinculo?: XOR<TipoVinculoScalarRelationFilter, TipoVinculoWhereInput>
  }, "expCodigoOrganismo_expTipo_expNumero_expAnio_personaDni">

  export type ExpedientePersonaOrderByWithAggregationInput = {
    expCodigoOrganismo?: SortOrder
    expTipo?: SortOrder
    expNumero?: SortOrder
    expAnio?: SortOrder
    personaDni?: SortOrder
    vinculoId?: SortOrder
    _count?: ExpedientePersonaCountOrderByAggregateInput
    _avg?: ExpedientePersonaAvgOrderByAggregateInput
    _max?: ExpedientePersonaMaxOrderByAggregateInput
    _min?: ExpedientePersonaMinOrderByAggregateInput
    _sum?: ExpedientePersonaSumOrderByAggregateInput
  }

  export type ExpedientePersonaScalarWhereWithAggregatesInput = {
    AND?: ExpedientePersonaScalarWhereWithAggregatesInput | ExpedientePersonaScalarWhereWithAggregatesInput[]
    OR?: ExpedientePersonaScalarWhereWithAggregatesInput[]
    NOT?: ExpedientePersonaScalarWhereWithAggregatesInput | ExpedientePersonaScalarWhereWithAggregatesInput[]
    expCodigoOrganismo?: StringWithAggregatesFilter<"ExpedientePersona"> | string
    expTipo?: StringWithAggregatesFilter<"ExpedientePersona"> | string
    expNumero?: IntWithAggregatesFilter<"ExpedientePersona"> | number
    expAnio?: IntWithAggregatesFilter<"ExpedientePersona"> | number
    personaDni?: StringWithAggregatesFilter<"ExpedientePersona"> | string
    vinculoId?: IntWithAggregatesFilter<"ExpedientePersona"> | number
  }

  export type CiudadCreateInput = {
    nombre: string
    codigo: string
    expedientes?: ExpedienteCreateNestedManyWithoutCiudadInput
    organismos?: OrganismoCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUncheckedCreateInput = {
    id?: number
    nombre: string
    codigo: string
    expedientes?: ExpedienteUncheckedCreateNestedManyWithoutCiudadInput
    organismos?: OrganismoUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    expedientes?: ExpedienteUpdateManyWithoutCiudadNestedInput
    organismos?: OrganismoUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    expedientes?: ExpedienteUncheckedUpdateManyWithoutCiudadNestedInput
    organismos?: OrganismoUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadCreateManyInput = {
    id?: number
    nombre: string
    codigo: string
  }

  export type CiudadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type CiudadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type FueroCreateInput = {
    nombre: string
    codigo: string
    organismos?: OrganismoCreateNestedManyWithoutFueroInput
  }

  export type FueroUncheckedCreateInput = {
    id?: number
    nombre: string
    codigo: string
    organismos?: OrganismoUncheckedCreateNestedManyWithoutFueroInput
  }

  export type FueroUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    organismos?: OrganismoUpdateManyWithoutFueroNestedInput
  }

  export type FueroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    organismos?: OrganismoUncheckedUpdateManyWithoutFueroNestedInput
  }

  export type FueroCreateManyInput = {
    id?: number
    nombre: string
    codigo: string
  }

  export type FueroUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type FueroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type OrganismoCreateInput = {
    codigo: string
    nombre: string
    titulo: string
    ciudad: CiudadCreateNestedOneWithoutOrganismosInput
    fuero: FueroCreateNestedOneWithoutOrganismosInput
    expedientes?: ExpedienteCreateNestedManyWithoutOrganismoInput
  }

  export type OrganismoUncheckedCreateInput = {
    codigo: string
    nombre: string
    titulo: string
    ciudadId: number
    fueroId: number
    expedientes?: ExpedienteUncheckedCreateNestedManyWithoutOrganismoInput
  }

  export type OrganismoUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    ciudad?: CiudadUpdateOneRequiredWithoutOrganismosNestedInput
    fuero?: FueroUpdateOneRequiredWithoutOrganismosNestedInput
    expedientes?: ExpedienteUpdateManyWithoutOrganismoNestedInput
  }

  export type OrganismoUncheckedUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    ciudadId?: IntFieldUpdateOperationsInput | number
    fueroId?: IntFieldUpdateOperationsInput | number
    expedientes?: ExpedienteUncheckedUpdateManyWithoutOrganismoNestedInput
  }

  export type OrganismoCreateManyInput = {
    codigo: string
    nombre: string
    titulo: string
    ciudadId: number
    fueroId: number
  }

  export type OrganismoUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
  }

  export type OrganismoUncheckedUpdateManyInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    ciudadId?: IntFieldUpdateOperationsInput | number
    fueroId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpedienteCreateInput = {
    tipo: string
    numero: number
    anio: number
    titulo: string
    organismo: OrganismoCreateNestedOneWithoutExpedientesInput
    ciudad: CiudadCreateNestedOneWithoutExpedientesInput
    personas?: ExpedientePersonaCreateNestedManyWithoutExpedienteInput
  }

  export type ExpedienteUncheckedCreateInput = {
    codigoOrganismo: string
    tipo: string
    numero: number
    anio: number
    titulo: string
    ciudadId: number
    personas?: ExpedientePersonaUncheckedCreateNestedManyWithoutExpedienteInput
  }

  export type ExpedienteUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    organismo?: OrganismoUpdateOneRequiredWithoutExpedientesNestedInput
    ciudad?: CiudadUpdateOneRequiredWithoutExpedientesNestedInput
    personas?: ExpedientePersonaUpdateManyWithoutExpedienteNestedInput
  }

  export type ExpedienteUncheckedUpdateInput = {
    codigoOrganismo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ciudadId?: IntFieldUpdateOperationsInput | number
    personas?: ExpedientePersonaUncheckedUpdateManyWithoutExpedienteNestedInput
  }

  export type ExpedienteCreateManyInput = {
    codigoOrganismo: string
    tipo: string
    numero: number
    anio: number
    titulo: string
    ciudadId: number
  }

  export type ExpedienteUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedienteUncheckedUpdateManyInput = {
    codigoOrganismo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ciudadId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonaCreateInput = {
    dni: string
    apellido: string
    nombre: string
    expedientes?: ExpedientePersonaCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateInput = {
    dni: string
    apellido: string
    nombre: string
    expedientes?: ExpedientePersonaUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUpdateInput = {
    dni?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    expedientes?: ExpedientePersonaUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateInput = {
    dni?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    expedientes?: ExpedientePersonaUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaCreateManyInput = {
    dni: string
    apellido: string
    nombre: string
  }

  export type PersonaUpdateManyMutationInput = {
    dni?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PersonaUncheckedUpdateManyInput = {
    dni?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TipoVinculoCreateInput = {
    descripcion: string
    expedientePersonas?: ExpedientePersonaCreateNestedManyWithoutVinculoInput
  }

  export type TipoVinculoUncheckedCreateInput = {
    id?: number
    descripcion: string
    expedientePersonas?: ExpedientePersonaUncheckedCreateNestedManyWithoutVinculoInput
  }

  export type TipoVinculoUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    expedientePersonas?: ExpedientePersonaUpdateManyWithoutVinculoNestedInput
  }

  export type TipoVinculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    expedientePersonas?: ExpedientePersonaUncheckedUpdateManyWithoutVinculoNestedInput
  }

  export type TipoVinculoCreateManyInput = {
    id?: number
    descripcion: string
  }

  export type TipoVinculoUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type TipoVinculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedientePersonaCreateInput = {
    expediente: ExpedienteCreateNestedOneWithoutPersonasInput
    persona: PersonaCreateNestedOneWithoutExpedientesInput
    vinculo: TipoVinculoCreateNestedOneWithoutExpedientePersonasInput
  }

  export type ExpedientePersonaUncheckedCreateInput = {
    expCodigoOrganismo: string
    expTipo: string
    expNumero: number
    expAnio: number
    personaDni: string
    vinculoId: number
  }

  export type ExpedientePersonaUpdateInput = {
    expediente?: ExpedienteUpdateOneRequiredWithoutPersonasNestedInput
    persona?: PersonaUpdateOneRequiredWithoutExpedientesNestedInput
    vinculo?: TipoVinculoUpdateOneRequiredWithoutExpedientePersonasNestedInput
  }

  export type ExpedientePersonaUncheckedUpdateInput = {
    expCodigoOrganismo?: StringFieldUpdateOperationsInput | string
    expTipo?: StringFieldUpdateOperationsInput | string
    expNumero?: IntFieldUpdateOperationsInput | number
    expAnio?: IntFieldUpdateOperationsInput | number
    personaDni?: StringFieldUpdateOperationsInput | string
    vinculoId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpedientePersonaCreateManyInput = {
    expCodigoOrganismo: string
    expTipo: string
    expNumero: number
    expAnio: number
    personaDni: string
    vinculoId: number
  }

  export type ExpedientePersonaUpdateManyMutationInput = {

  }

  export type ExpedientePersonaUncheckedUpdateManyInput = {
    expCodigoOrganismo?: StringFieldUpdateOperationsInput | string
    expTipo?: StringFieldUpdateOperationsInput | string
    expNumero?: IntFieldUpdateOperationsInput | number
    expAnio?: IntFieldUpdateOperationsInput | number
    personaDni?: StringFieldUpdateOperationsInput | string
    vinculoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ExpedienteListRelationFilter = {
    every?: ExpedienteWhereInput
    some?: ExpedienteWhereInput
    none?: ExpedienteWhereInput
  }

  export type OrganismoListRelationFilter = {
    every?: OrganismoWhereInput
    some?: OrganismoWhereInput
    none?: OrganismoWhereInput
  }

  export type ExpedienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganismoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CiudadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
  }

  export type CiudadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CiudadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
  }

  export type CiudadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
  }

  export type CiudadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FueroCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
  }

  export type FueroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FueroMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
  }

  export type FueroMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
  }

  export type FueroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CiudadScalarRelationFilter = {
    is?: CiudadWhereInput
    isNot?: CiudadWhereInput
  }

  export type FueroScalarRelationFilter = {
    is?: FueroWhereInput
    isNot?: FueroWhereInput
  }

  export type OrganismoCountOrderByAggregateInput = {
    codigo?: SortOrder
    nombre?: SortOrder
    titulo?: SortOrder
    ciudadId?: SortOrder
    fueroId?: SortOrder
  }

  export type OrganismoAvgOrderByAggregateInput = {
    ciudadId?: SortOrder
    fueroId?: SortOrder
  }

  export type OrganismoMaxOrderByAggregateInput = {
    codigo?: SortOrder
    nombre?: SortOrder
    titulo?: SortOrder
    ciudadId?: SortOrder
    fueroId?: SortOrder
  }

  export type OrganismoMinOrderByAggregateInput = {
    codigo?: SortOrder
    nombre?: SortOrder
    titulo?: SortOrder
    ciudadId?: SortOrder
    fueroId?: SortOrder
  }

  export type OrganismoSumOrderByAggregateInput = {
    ciudadId?: SortOrder
    fueroId?: SortOrder
  }

  export type OrganismoScalarRelationFilter = {
    is?: OrganismoWhereInput
    isNot?: OrganismoWhereInput
  }

  export type ExpedientePersonaListRelationFilter = {
    every?: ExpedientePersonaWhereInput
    some?: ExpedientePersonaWhereInput
    none?: ExpedientePersonaWhereInput
  }

  export type ExpedientePersonaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpedienteCodigoOrganismoTipoNumeroAnioCompoundUniqueInput = {
    codigoOrganismo: string
    tipo: string
    numero: number
    anio: number
  }

  export type ExpedienteCountOrderByAggregateInput = {
    codigoOrganismo?: SortOrder
    tipo?: SortOrder
    numero?: SortOrder
    anio?: SortOrder
    titulo?: SortOrder
    ciudadId?: SortOrder
  }

  export type ExpedienteAvgOrderByAggregateInput = {
    numero?: SortOrder
    anio?: SortOrder
    ciudadId?: SortOrder
  }

  export type ExpedienteMaxOrderByAggregateInput = {
    codigoOrganismo?: SortOrder
    tipo?: SortOrder
    numero?: SortOrder
    anio?: SortOrder
    titulo?: SortOrder
    ciudadId?: SortOrder
  }

  export type ExpedienteMinOrderByAggregateInput = {
    codigoOrganismo?: SortOrder
    tipo?: SortOrder
    numero?: SortOrder
    anio?: SortOrder
    titulo?: SortOrder
    ciudadId?: SortOrder
  }

  export type ExpedienteSumOrderByAggregateInput = {
    numero?: SortOrder
    anio?: SortOrder
    ciudadId?: SortOrder
  }

  export type PersonaCountOrderByAggregateInput = {
    dni?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
  }

  export type PersonaMaxOrderByAggregateInput = {
    dni?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
  }

  export type PersonaMinOrderByAggregateInput = {
    dni?: SortOrder
    apellido?: SortOrder
    nombre?: SortOrder
  }

  export type TipoVinculoCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoVinculoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoVinculoMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoVinculoMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoVinculoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExpedienteScalarRelationFilter = {
    is?: ExpedienteWhereInput
    isNot?: ExpedienteWhereInput
  }

  export type PersonaScalarRelationFilter = {
    is?: PersonaWhereInput
    isNot?: PersonaWhereInput
  }

  export type TipoVinculoScalarRelationFilter = {
    is?: TipoVinculoWhereInput
    isNot?: TipoVinculoWhereInput
  }

  export type ExpedientePersonaExpCodigoOrganismoExpTipoExpNumeroExpAnioPersonaDniCompoundUniqueInput = {
    expCodigoOrganismo: string
    expTipo: string
    expNumero: number
    expAnio: number
    personaDni: string
  }

  export type ExpedientePersonaCountOrderByAggregateInput = {
    expCodigoOrganismo?: SortOrder
    expTipo?: SortOrder
    expNumero?: SortOrder
    expAnio?: SortOrder
    personaDni?: SortOrder
    vinculoId?: SortOrder
  }

  export type ExpedientePersonaAvgOrderByAggregateInput = {
    expNumero?: SortOrder
    expAnio?: SortOrder
    vinculoId?: SortOrder
  }

  export type ExpedientePersonaMaxOrderByAggregateInput = {
    expCodigoOrganismo?: SortOrder
    expTipo?: SortOrder
    expNumero?: SortOrder
    expAnio?: SortOrder
    personaDni?: SortOrder
    vinculoId?: SortOrder
  }

  export type ExpedientePersonaMinOrderByAggregateInput = {
    expCodigoOrganismo?: SortOrder
    expTipo?: SortOrder
    expNumero?: SortOrder
    expAnio?: SortOrder
    personaDni?: SortOrder
    vinculoId?: SortOrder
  }

  export type ExpedientePersonaSumOrderByAggregateInput = {
    expNumero?: SortOrder
    expAnio?: SortOrder
    vinculoId?: SortOrder
  }

  export type ExpedienteCreateNestedManyWithoutCiudadInput = {
    create?: XOR<ExpedienteCreateWithoutCiudadInput, ExpedienteUncheckedCreateWithoutCiudadInput> | ExpedienteCreateWithoutCiudadInput[] | ExpedienteUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutCiudadInput | ExpedienteCreateOrConnectWithoutCiudadInput[]
    createMany?: ExpedienteCreateManyCiudadInputEnvelope
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
  }

  export type OrganismoCreateNestedManyWithoutCiudadInput = {
    create?: XOR<OrganismoCreateWithoutCiudadInput, OrganismoUncheckedCreateWithoutCiudadInput> | OrganismoCreateWithoutCiudadInput[] | OrganismoUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: OrganismoCreateOrConnectWithoutCiudadInput | OrganismoCreateOrConnectWithoutCiudadInput[]
    createMany?: OrganismoCreateManyCiudadInputEnvelope
    connect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
  }

  export type ExpedienteUncheckedCreateNestedManyWithoutCiudadInput = {
    create?: XOR<ExpedienteCreateWithoutCiudadInput, ExpedienteUncheckedCreateWithoutCiudadInput> | ExpedienteCreateWithoutCiudadInput[] | ExpedienteUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutCiudadInput | ExpedienteCreateOrConnectWithoutCiudadInput[]
    createMany?: ExpedienteCreateManyCiudadInputEnvelope
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
  }

  export type OrganismoUncheckedCreateNestedManyWithoutCiudadInput = {
    create?: XOR<OrganismoCreateWithoutCiudadInput, OrganismoUncheckedCreateWithoutCiudadInput> | OrganismoCreateWithoutCiudadInput[] | OrganismoUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: OrganismoCreateOrConnectWithoutCiudadInput | OrganismoCreateOrConnectWithoutCiudadInput[]
    createMany?: OrganismoCreateManyCiudadInputEnvelope
    connect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ExpedienteUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<ExpedienteCreateWithoutCiudadInput, ExpedienteUncheckedCreateWithoutCiudadInput> | ExpedienteCreateWithoutCiudadInput[] | ExpedienteUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutCiudadInput | ExpedienteCreateOrConnectWithoutCiudadInput[]
    upsert?: ExpedienteUpsertWithWhereUniqueWithoutCiudadInput | ExpedienteUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: ExpedienteCreateManyCiudadInputEnvelope
    set?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    disconnect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    delete?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    update?: ExpedienteUpdateWithWhereUniqueWithoutCiudadInput | ExpedienteUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: ExpedienteUpdateManyWithWhereWithoutCiudadInput | ExpedienteUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: ExpedienteScalarWhereInput | ExpedienteScalarWhereInput[]
  }

  export type OrganismoUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<OrganismoCreateWithoutCiudadInput, OrganismoUncheckedCreateWithoutCiudadInput> | OrganismoCreateWithoutCiudadInput[] | OrganismoUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: OrganismoCreateOrConnectWithoutCiudadInput | OrganismoCreateOrConnectWithoutCiudadInput[]
    upsert?: OrganismoUpsertWithWhereUniqueWithoutCiudadInput | OrganismoUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: OrganismoCreateManyCiudadInputEnvelope
    set?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    disconnect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    delete?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    connect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    update?: OrganismoUpdateWithWhereUniqueWithoutCiudadInput | OrganismoUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: OrganismoUpdateManyWithWhereWithoutCiudadInput | OrganismoUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: OrganismoScalarWhereInput | OrganismoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpedienteUncheckedUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<ExpedienteCreateWithoutCiudadInput, ExpedienteUncheckedCreateWithoutCiudadInput> | ExpedienteCreateWithoutCiudadInput[] | ExpedienteUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutCiudadInput | ExpedienteCreateOrConnectWithoutCiudadInput[]
    upsert?: ExpedienteUpsertWithWhereUniqueWithoutCiudadInput | ExpedienteUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: ExpedienteCreateManyCiudadInputEnvelope
    set?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    disconnect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    delete?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    update?: ExpedienteUpdateWithWhereUniqueWithoutCiudadInput | ExpedienteUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: ExpedienteUpdateManyWithWhereWithoutCiudadInput | ExpedienteUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: ExpedienteScalarWhereInput | ExpedienteScalarWhereInput[]
  }

  export type OrganismoUncheckedUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<OrganismoCreateWithoutCiudadInput, OrganismoUncheckedCreateWithoutCiudadInput> | OrganismoCreateWithoutCiudadInput[] | OrganismoUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: OrganismoCreateOrConnectWithoutCiudadInput | OrganismoCreateOrConnectWithoutCiudadInput[]
    upsert?: OrganismoUpsertWithWhereUniqueWithoutCiudadInput | OrganismoUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: OrganismoCreateManyCiudadInputEnvelope
    set?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    disconnect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    delete?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    connect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    update?: OrganismoUpdateWithWhereUniqueWithoutCiudadInput | OrganismoUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: OrganismoUpdateManyWithWhereWithoutCiudadInput | OrganismoUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: OrganismoScalarWhereInput | OrganismoScalarWhereInput[]
  }

  export type OrganismoCreateNestedManyWithoutFueroInput = {
    create?: XOR<OrganismoCreateWithoutFueroInput, OrganismoUncheckedCreateWithoutFueroInput> | OrganismoCreateWithoutFueroInput[] | OrganismoUncheckedCreateWithoutFueroInput[]
    connectOrCreate?: OrganismoCreateOrConnectWithoutFueroInput | OrganismoCreateOrConnectWithoutFueroInput[]
    createMany?: OrganismoCreateManyFueroInputEnvelope
    connect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
  }

  export type OrganismoUncheckedCreateNestedManyWithoutFueroInput = {
    create?: XOR<OrganismoCreateWithoutFueroInput, OrganismoUncheckedCreateWithoutFueroInput> | OrganismoCreateWithoutFueroInput[] | OrganismoUncheckedCreateWithoutFueroInput[]
    connectOrCreate?: OrganismoCreateOrConnectWithoutFueroInput | OrganismoCreateOrConnectWithoutFueroInput[]
    createMany?: OrganismoCreateManyFueroInputEnvelope
    connect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
  }

  export type OrganismoUpdateManyWithoutFueroNestedInput = {
    create?: XOR<OrganismoCreateWithoutFueroInput, OrganismoUncheckedCreateWithoutFueroInput> | OrganismoCreateWithoutFueroInput[] | OrganismoUncheckedCreateWithoutFueroInput[]
    connectOrCreate?: OrganismoCreateOrConnectWithoutFueroInput | OrganismoCreateOrConnectWithoutFueroInput[]
    upsert?: OrganismoUpsertWithWhereUniqueWithoutFueroInput | OrganismoUpsertWithWhereUniqueWithoutFueroInput[]
    createMany?: OrganismoCreateManyFueroInputEnvelope
    set?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    disconnect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    delete?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    connect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    update?: OrganismoUpdateWithWhereUniqueWithoutFueroInput | OrganismoUpdateWithWhereUniqueWithoutFueroInput[]
    updateMany?: OrganismoUpdateManyWithWhereWithoutFueroInput | OrganismoUpdateManyWithWhereWithoutFueroInput[]
    deleteMany?: OrganismoScalarWhereInput | OrganismoScalarWhereInput[]
  }

  export type OrganismoUncheckedUpdateManyWithoutFueroNestedInput = {
    create?: XOR<OrganismoCreateWithoutFueroInput, OrganismoUncheckedCreateWithoutFueroInput> | OrganismoCreateWithoutFueroInput[] | OrganismoUncheckedCreateWithoutFueroInput[]
    connectOrCreate?: OrganismoCreateOrConnectWithoutFueroInput | OrganismoCreateOrConnectWithoutFueroInput[]
    upsert?: OrganismoUpsertWithWhereUniqueWithoutFueroInput | OrganismoUpsertWithWhereUniqueWithoutFueroInput[]
    createMany?: OrganismoCreateManyFueroInputEnvelope
    set?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    disconnect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    delete?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    connect?: OrganismoWhereUniqueInput | OrganismoWhereUniqueInput[]
    update?: OrganismoUpdateWithWhereUniqueWithoutFueroInput | OrganismoUpdateWithWhereUniqueWithoutFueroInput[]
    updateMany?: OrganismoUpdateManyWithWhereWithoutFueroInput | OrganismoUpdateManyWithWhereWithoutFueroInput[]
    deleteMany?: OrganismoScalarWhereInput | OrganismoScalarWhereInput[]
  }

  export type CiudadCreateNestedOneWithoutOrganismosInput = {
    create?: XOR<CiudadCreateWithoutOrganismosInput, CiudadUncheckedCreateWithoutOrganismosInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutOrganismosInput
    connect?: CiudadWhereUniqueInput
  }

  export type FueroCreateNestedOneWithoutOrganismosInput = {
    create?: XOR<FueroCreateWithoutOrganismosInput, FueroUncheckedCreateWithoutOrganismosInput>
    connectOrCreate?: FueroCreateOrConnectWithoutOrganismosInput
    connect?: FueroWhereUniqueInput
  }

  export type ExpedienteCreateNestedManyWithoutOrganismoInput = {
    create?: XOR<ExpedienteCreateWithoutOrganismoInput, ExpedienteUncheckedCreateWithoutOrganismoInput> | ExpedienteCreateWithoutOrganismoInput[] | ExpedienteUncheckedCreateWithoutOrganismoInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutOrganismoInput | ExpedienteCreateOrConnectWithoutOrganismoInput[]
    createMany?: ExpedienteCreateManyOrganismoInputEnvelope
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
  }

  export type ExpedienteUncheckedCreateNestedManyWithoutOrganismoInput = {
    create?: XOR<ExpedienteCreateWithoutOrganismoInput, ExpedienteUncheckedCreateWithoutOrganismoInput> | ExpedienteCreateWithoutOrganismoInput[] | ExpedienteUncheckedCreateWithoutOrganismoInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutOrganismoInput | ExpedienteCreateOrConnectWithoutOrganismoInput[]
    createMany?: ExpedienteCreateManyOrganismoInputEnvelope
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
  }

  export type CiudadUpdateOneRequiredWithoutOrganismosNestedInput = {
    create?: XOR<CiudadCreateWithoutOrganismosInput, CiudadUncheckedCreateWithoutOrganismosInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutOrganismosInput
    upsert?: CiudadUpsertWithoutOrganismosInput
    connect?: CiudadWhereUniqueInput
    update?: XOR<XOR<CiudadUpdateToOneWithWhereWithoutOrganismosInput, CiudadUpdateWithoutOrganismosInput>, CiudadUncheckedUpdateWithoutOrganismosInput>
  }

  export type FueroUpdateOneRequiredWithoutOrganismosNestedInput = {
    create?: XOR<FueroCreateWithoutOrganismosInput, FueroUncheckedCreateWithoutOrganismosInput>
    connectOrCreate?: FueroCreateOrConnectWithoutOrganismosInput
    upsert?: FueroUpsertWithoutOrganismosInput
    connect?: FueroWhereUniqueInput
    update?: XOR<XOR<FueroUpdateToOneWithWhereWithoutOrganismosInput, FueroUpdateWithoutOrganismosInput>, FueroUncheckedUpdateWithoutOrganismosInput>
  }

  export type ExpedienteUpdateManyWithoutOrganismoNestedInput = {
    create?: XOR<ExpedienteCreateWithoutOrganismoInput, ExpedienteUncheckedCreateWithoutOrganismoInput> | ExpedienteCreateWithoutOrganismoInput[] | ExpedienteUncheckedCreateWithoutOrganismoInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutOrganismoInput | ExpedienteCreateOrConnectWithoutOrganismoInput[]
    upsert?: ExpedienteUpsertWithWhereUniqueWithoutOrganismoInput | ExpedienteUpsertWithWhereUniqueWithoutOrganismoInput[]
    createMany?: ExpedienteCreateManyOrganismoInputEnvelope
    set?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    disconnect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    delete?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    update?: ExpedienteUpdateWithWhereUniqueWithoutOrganismoInput | ExpedienteUpdateWithWhereUniqueWithoutOrganismoInput[]
    updateMany?: ExpedienteUpdateManyWithWhereWithoutOrganismoInput | ExpedienteUpdateManyWithWhereWithoutOrganismoInput[]
    deleteMany?: ExpedienteScalarWhereInput | ExpedienteScalarWhereInput[]
  }

  export type ExpedienteUncheckedUpdateManyWithoutOrganismoNestedInput = {
    create?: XOR<ExpedienteCreateWithoutOrganismoInput, ExpedienteUncheckedCreateWithoutOrganismoInput> | ExpedienteCreateWithoutOrganismoInput[] | ExpedienteUncheckedCreateWithoutOrganismoInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutOrganismoInput | ExpedienteCreateOrConnectWithoutOrganismoInput[]
    upsert?: ExpedienteUpsertWithWhereUniqueWithoutOrganismoInput | ExpedienteUpsertWithWhereUniqueWithoutOrganismoInput[]
    createMany?: ExpedienteCreateManyOrganismoInputEnvelope
    set?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    disconnect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    delete?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    update?: ExpedienteUpdateWithWhereUniqueWithoutOrganismoInput | ExpedienteUpdateWithWhereUniqueWithoutOrganismoInput[]
    updateMany?: ExpedienteUpdateManyWithWhereWithoutOrganismoInput | ExpedienteUpdateManyWithWhereWithoutOrganismoInput[]
    deleteMany?: ExpedienteScalarWhereInput | ExpedienteScalarWhereInput[]
  }

  export type OrganismoCreateNestedOneWithoutExpedientesInput = {
    create?: XOR<OrganismoCreateWithoutExpedientesInput, OrganismoUncheckedCreateWithoutExpedientesInput>
    connectOrCreate?: OrganismoCreateOrConnectWithoutExpedientesInput
    connect?: OrganismoWhereUniqueInput
  }

  export type CiudadCreateNestedOneWithoutExpedientesInput = {
    create?: XOR<CiudadCreateWithoutExpedientesInput, CiudadUncheckedCreateWithoutExpedientesInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutExpedientesInput
    connect?: CiudadWhereUniqueInput
  }

  export type ExpedientePersonaCreateNestedManyWithoutExpedienteInput = {
    create?: XOR<ExpedientePersonaCreateWithoutExpedienteInput, ExpedientePersonaUncheckedCreateWithoutExpedienteInput> | ExpedientePersonaCreateWithoutExpedienteInput[] | ExpedientePersonaUncheckedCreateWithoutExpedienteInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutExpedienteInput | ExpedientePersonaCreateOrConnectWithoutExpedienteInput[]
    createMany?: ExpedientePersonaCreateManyExpedienteInputEnvelope
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
  }

  export type ExpedientePersonaUncheckedCreateNestedManyWithoutExpedienteInput = {
    create?: XOR<ExpedientePersonaCreateWithoutExpedienteInput, ExpedientePersonaUncheckedCreateWithoutExpedienteInput> | ExpedientePersonaCreateWithoutExpedienteInput[] | ExpedientePersonaUncheckedCreateWithoutExpedienteInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutExpedienteInput | ExpedientePersonaCreateOrConnectWithoutExpedienteInput[]
    createMany?: ExpedientePersonaCreateManyExpedienteInputEnvelope
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
  }

  export type OrganismoUpdateOneRequiredWithoutExpedientesNestedInput = {
    create?: XOR<OrganismoCreateWithoutExpedientesInput, OrganismoUncheckedCreateWithoutExpedientesInput>
    connectOrCreate?: OrganismoCreateOrConnectWithoutExpedientesInput
    upsert?: OrganismoUpsertWithoutExpedientesInput
    connect?: OrganismoWhereUniqueInput
    update?: XOR<XOR<OrganismoUpdateToOneWithWhereWithoutExpedientesInput, OrganismoUpdateWithoutExpedientesInput>, OrganismoUncheckedUpdateWithoutExpedientesInput>
  }

  export type CiudadUpdateOneRequiredWithoutExpedientesNestedInput = {
    create?: XOR<CiudadCreateWithoutExpedientesInput, CiudadUncheckedCreateWithoutExpedientesInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutExpedientesInput
    upsert?: CiudadUpsertWithoutExpedientesInput
    connect?: CiudadWhereUniqueInput
    update?: XOR<XOR<CiudadUpdateToOneWithWhereWithoutExpedientesInput, CiudadUpdateWithoutExpedientesInput>, CiudadUncheckedUpdateWithoutExpedientesInput>
  }

  export type ExpedientePersonaUpdateManyWithoutExpedienteNestedInput = {
    create?: XOR<ExpedientePersonaCreateWithoutExpedienteInput, ExpedientePersonaUncheckedCreateWithoutExpedienteInput> | ExpedientePersonaCreateWithoutExpedienteInput[] | ExpedientePersonaUncheckedCreateWithoutExpedienteInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutExpedienteInput | ExpedientePersonaCreateOrConnectWithoutExpedienteInput[]
    upsert?: ExpedientePersonaUpsertWithWhereUniqueWithoutExpedienteInput | ExpedientePersonaUpsertWithWhereUniqueWithoutExpedienteInput[]
    createMany?: ExpedientePersonaCreateManyExpedienteInputEnvelope
    set?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    disconnect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    delete?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    update?: ExpedientePersonaUpdateWithWhereUniqueWithoutExpedienteInput | ExpedientePersonaUpdateWithWhereUniqueWithoutExpedienteInput[]
    updateMany?: ExpedientePersonaUpdateManyWithWhereWithoutExpedienteInput | ExpedientePersonaUpdateManyWithWhereWithoutExpedienteInput[]
    deleteMany?: ExpedientePersonaScalarWhereInput | ExpedientePersonaScalarWhereInput[]
  }

  export type ExpedientePersonaUncheckedUpdateManyWithoutExpedienteNestedInput = {
    create?: XOR<ExpedientePersonaCreateWithoutExpedienteInput, ExpedientePersonaUncheckedCreateWithoutExpedienteInput> | ExpedientePersonaCreateWithoutExpedienteInput[] | ExpedientePersonaUncheckedCreateWithoutExpedienteInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutExpedienteInput | ExpedientePersonaCreateOrConnectWithoutExpedienteInput[]
    upsert?: ExpedientePersonaUpsertWithWhereUniqueWithoutExpedienteInput | ExpedientePersonaUpsertWithWhereUniqueWithoutExpedienteInput[]
    createMany?: ExpedientePersonaCreateManyExpedienteInputEnvelope
    set?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    disconnect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    delete?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    update?: ExpedientePersonaUpdateWithWhereUniqueWithoutExpedienteInput | ExpedientePersonaUpdateWithWhereUniqueWithoutExpedienteInput[]
    updateMany?: ExpedientePersonaUpdateManyWithWhereWithoutExpedienteInput | ExpedientePersonaUpdateManyWithWhereWithoutExpedienteInput[]
    deleteMany?: ExpedientePersonaScalarWhereInput | ExpedientePersonaScalarWhereInput[]
  }

  export type ExpedientePersonaCreateNestedManyWithoutPersonaInput = {
    create?: XOR<ExpedientePersonaCreateWithoutPersonaInput, ExpedientePersonaUncheckedCreateWithoutPersonaInput> | ExpedientePersonaCreateWithoutPersonaInput[] | ExpedientePersonaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutPersonaInput | ExpedientePersonaCreateOrConnectWithoutPersonaInput[]
    createMany?: ExpedientePersonaCreateManyPersonaInputEnvelope
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
  }

  export type ExpedientePersonaUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<ExpedientePersonaCreateWithoutPersonaInput, ExpedientePersonaUncheckedCreateWithoutPersonaInput> | ExpedientePersonaCreateWithoutPersonaInput[] | ExpedientePersonaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutPersonaInput | ExpedientePersonaCreateOrConnectWithoutPersonaInput[]
    createMany?: ExpedientePersonaCreateManyPersonaInputEnvelope
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
  }

  export type ExpedientePersonaUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<ExpedientePersonaCreateWithoutPersonaInput, ExpedientePersonaUncheckedCreateWithoutPersonaInput> | ExpedientePersonaCreateWithoutPersonaInput[] | ExpedientePersonaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutPersonaInput | ExpedientePersonaCreateOrConnectWithoutPersonaInput[]
    upsert?: ExpedientePersonaUpsertWithWhereUniqueWithoutPersonaInput | ExpedientePersonaUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: ExpedientePersonaCreateManyPersonaInputEnvelope
    set?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    disconnect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    delete?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    update?: ExpedientePersonaUpdateWithWhereUniqueWithoutPersonaInput | ExpedientePersonaUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: ExpedientePersonaUpdateManyWithWhereWithoutPersonaInput | ExpedientePersonaUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: ExpedientePersonaScalarWhereInput | ExpedientePersonaScalarWhereInput[]
  }

  export type ExpedientePersonaUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<ExpedientePersonaCreateWithoutPersonaInput, ExpedientePersonaUncheckedCreateWithoutPersonaInput> | ExpedientePersonaCreateWithoutPersonaInput[] | ExpedientePersonaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutPersonaInput | ExpedientePersonaCreateOrConnectWithoutPersonaInput[]
    upsert?: ExpedientePersonaUpsertWithWhereUniqueWithoutPersonaInput | ExpedientePersonaUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: ExpedientePersonaCreateManyPersonaInputEnvelope
    set?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    disconnect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    delete?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    update?: ExpedientePersonaUpdateWithWhereUniqueWithoutPersonaInput | ExpedientePersonaUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: ExpedientePersonaUpdateManyWithWhereWithoutPersonaInput | ExpedientePersonaUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: ExpedientePersonaScalarWhereInput | ExpedientePersonaScalarWhereInput[]
  }

  export type ExpedientePersonaCreateNestedManyWithoutVinculoInput = {
    create?: XOR<ExpedientePersonaCreateWithoutVinculoInput, ExpedientePersonaUncheckedCreateWithoutVinculoInput> | ExpedientePersonaCreateWithoutVinculoInput[] | ExpedientePersonaUncheckedCreateWithoutVinculoInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutVinculoInput | ExpedientePersonaCreateOrConnectWithoutVinculoInput[]
    createMany?: ExpedientePersonaCreateManyVinculoInputEnvelope
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
  }

  export type ExpedientePersonaUncheckedCreateNestedManyWithoutVinculoInput = {
    create?: XOR<ExpedientePersonaCreateWithoutVinculoInput, ExpedientePersonaUncheckedCreateWithoutVinculoInput> | ExpedientePersonaCreateWithoutVinculoInput[] | ExpedientePersonaUncheckedCreateWithoutVinculoInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutVinculoInput | ExpedientePersonaCreateOrConnectWithoutVinculoInput[]
    createMany?: ExpedientePersonaCreateManyVinculoInputEnvelope
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
  }

  export type ExpedientePersonaUpdateManyWithoutVinculoNestedInput = {
    create?: XOR<ExpedientePersonaCreateWithoutVinculoInput, ExpedientePersonaUncheckedCreateWithoutVinculoInput> | ExpedientePersonaCreateWithoutVinculoInput[] | ExpedientePersonaUncheckedCreateWithoutVinculoInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutVinculoInput | ExpedientePersonaCreateOrConnectWithoutVinculoInput[]
    upsert?: ExpedientePersonaUpsertWithWhereUniqueWithoutVinculoInput | ExpedientePersonaUpsertWithWhereUniqueWithoutVinculoInput[]
    createMany?: ExpedientePersonaCreateManyVinculoInputEnvelope
    set?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    disconnect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    delete?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    update?: ExpedientePersonaUpdateWithWhereUniqueWithoutVinculoInput | ExpedientePersonaUpdateWithWhereUniqueWithoutVinculoInput[]
    updateMany?: ExpedientePersonaUpdateManyWithWhereWithoutVinculoInput | ExpedientePersonaUpdateManyWithWhereWithoutVinculoInput[]
    deleteMany?: ExpedientePersonaScalarWhereInput | ExpedientePersonaScalarWhereInput[]
  }

  export type ExpedientePersonaUncheckedUpdateManyWithoutVinculoNestedInput = {
    create?: XOR<ExpedientePersonaCreateWithoutVinculoInput, ExpedientePersonaUncheckedCreateWithoutVinculoInput> | ExpedientePersonaCreateWithoutVinculoInput[] | ExpedientePersonaUncheckedCreateWithoutVinculoInput[]
    connectOrCreate?: ExpedientePersonaCreateOrConnectWithoutVinculoInput | ExpedientePersonaCreateOrConnectWithoutVinculoInput[]
    upsert?: ExpedientePersonaUpsertWithWhereUniqueWithoutVinculoInput | ExpedientePersonaUpsertWithWhereUniqueWithoutVinculoInput[]
    createMany?: ExpedientePersonaCreateManyVinculoInputEnvelope
    set?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    disconnect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    delete?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    connect?: ExpedientePersonaWhereUniqueInput | ExpedientePersonaWhereUniqueInput[]
    update?: ExpedientePersonaUpdateWithWhereUniqueWithoutVinculoInput | ExpedientePersonaUpdateWithWhereUniqueWithoutVinculoInput[]
    updateMany?: ExpedientePersonaUpdateManyWithWhereWithoutVinculoInput | ExpedientePersonaUpdateManyWithWhereWithoutVinculoInput[]
    deleteMany?: ExpedientePersonaScalarWhereInput | ExpedientePersonaScalarWhereInput[]
  }

  export type ExpedienteCreateNestedOneWithoutPersonasInput = {
    create?: XOR<ExpedienteCreateWithoutPersonasInput, ExpedienteUncheckedCreateWithoutPersonasInput>
    connectOrCreate?: ExpedienteCreateOrConnectWithoutPersonasInput
    connect?: ExpedienteWhereUniqueInput
  }

  export type PersonaCreateNestedOneWithoutExpedientesInput = {
    create?: XOR<PersonaCreateWithoutExpedientesInput, PersonaUncheckedCreateWithoutExpedientesInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutExpedientesInput
    connect?: PersonaWhereUniqueInput
  }

  export type TipoVinculoCreateNestedOneWithoutExpedientePersonasInput = {
    create?: XOR<TipoVinculoCreateWithoutExpedientePersonasInput, TipoVinculoUncheckedCreateWithoutExpedientePersonasInput>
    connectOrCreate?: TipoVinculoCreateOrConnectWithoutExpedientePersonasInput
    connect?: TipoVinculoWhereUniqueInput
  }

  export type ExpedienteUpdateOneRequiredWithoutPersonasNestedInput = {
    create?: XOR<ExpedienteCreateWithoutPersonasInput, ExpedienteUncheckedCreateWithoutPersonasInput>
    connectOrCreate?: ExpedienteCreateOrConnectWithoutPersonasInput
    upsert?: ExpedienteUpsertWithoutPersonasInput
    connect?: ExpedienteWhereUniqueInput
    update?: XOR<XOR<ExpedienteUpdateToOneWithWhereWithoutPersonasInput, ExpedienteUpdateWithoutPersonasInput>, ExpedienteUncheckedUpdateWithoutPersonasInput>
  }

  export type PersonaUpdateOneRequiredWithoutExpedientesNestedInput = {
    create?: XOR<PersonaCreateWithoutExpedientesInput, PersonaUncheckedCreateWithoutExpedientesInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutExpedientesInput
    upsert?: PersonaUpsertWithoutExpedientesInput
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutExpedientesInput, PersonaUpdateWithoutExpedientesInput>, PersonaUncheckedUpdateWithoutExpedientesInput>
  }

  export type TipoVinculoUpdateOneRequiredWithoutExpedientePersonasNestedInput = {
    create?: XOR<TipoVinculoCreateWithoutExpedientePersonasInput, TipoVinculoUncheckedCreateWithoutExpedientePersonasInput>
    connectOrCreate?: TipoVinculoCreateOrConnectWithoutExpedientePersonasInput
    upsert?: TipoVinculoUpsertWithoutExpedientePersonasInput
    connect?: TipoVinculoWhereUniqueInput
    update?: XOR<XOR<TipoVinculoUpdateToOneWithWhereWithoutExpedientePersonasInput, TipoVinculoUpdateWithoutExpedientePersonasInput>, TipoVinculoUncheckedUpdateWithoutExpedientePersonasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ExpedienteCreateWithoutCiudadInput = {
    tipo: string
    numero: number
    anio: number
    titulo: string
    organismo: OrganismoCreateNestedOneWithoutExpedientesInput
    personas?: ExpedientePersonaCreateNestedManyWithoutExpedienteInput
  }

  export type ExpedienteUncheckedCreateWithoutCiudadInput = {
    codigoOrganismo: string
    tipo: string
    numero: number
    anio: number
    titulo: string
    personas?: ExpedientePersonaUncheckedCreateNestedManyWithoutExpedienteInput
  }

  export type ExpedienteCreateOrConnectWithoutCiudadInput = {
    where: ExpedienteWhereUniqueInput
    create: XOR<ExpedienteCreateWithoutCiudadInput, ExpedienteUncheckedCreateWithoutCiudadInput>
  }

  export type ExpedienteCreateManyCiudadInputEnvelope = {
    data: ExpedienteCreateManyCiudadInput | ExpedienteCreateManyCiudadInput[]
  }

  export type OrganismoCreateWithoutCiudadInput = {
    codigo: string
    nombre: string
    titulo: string
    fuero: FueroCreateNestedOneWithoutOrganismosInput
    expedientes?: ExpedienteCreateNestedManyWithoutOrganismoInput
  }

  export type OrganismoUncheckedCreateWithoutCiudadInput = {
    codigo: string
    nombre: string
    titulo: string
    fueroId: number
    expedientes?: ExpedienteUncheckedCreateNestedManyWithoutOrganismoInput
  }

  export type OrganismoCreateOrConnectWithoutCiudadInput = {
    where: OrganismoWhereUniqueInput
    create: XOR<OrganismoCreateWithoutCiudadInput, OrganismoUncheckedCreateWithoutCiudadInput>
  }

  export type OrganismoCreateManyCiudadInputEnvelope = {
    data: OrganismoCreateManyCiudadInput | OrganismoCreateManyCiudadInput[]
  }

  export type ExpedienteUpsertWithWhereUniqueWithoutCiudadInput = {
    where: ExpedienteWhereUniqueInput
    update: XOR<ExpedienteUpdateWithoutCiudadInput, ExpedienteUncheckedUpdateWithoutCiudadInput>
    create: XOR<ExpedienteCreateWithoutCiudadInput, ExpedienteUncheckedCreateWithoutCiudadInput>
  }

  export type ExpedienteUpdateWithWhereUniqueWithoutCiudadInput = {
    where: ExpedienteWhereUniqueInput
    data: XOR<ExpedienteUpdateWithoutCiudadInput, ExpedienteUncheckedUpdateWithoutCiudadInput>
  }

  export type ExpedienteUpdateManyWithWhereWithoutCiudadInput = {
    where: ExpedienteScalarWhereInput
    data: XOR<ExpedienteUpdateManyMutationInput, ExpedienteUncheckedUpdateManyWithoutCiudadInput>
  }

  export type ExpedienteScalarWhereInput = {
    AND?: ExpedienteScalarWhereInput | ExpedienteScalarWhereInput[]
    OR?: ExpedienteScalarWhereInput[]
    NOT?: ExpedienteScalarWhereInput | ExpedienteScalarWhereInput[]
    codigoOrganismo?: StringFilter<"Expediente"> | string
    tipo?: StringFilter<"Expediente"> | string
    numero?: IntFilter<"Expediente"> | number
    anio?: IntFilter<"Expediente"> | number
    titulo?: StringFilter<"Expediente"> | string
    ciudadId?: IntFilter<"Expediente"> | number
  }

  export type OrganismoUpsertWithWhereUniqueWithoutCiudadInput = {
    where: OrganismoWhereUniqueInput
    update: XOR<OrganismoUpdateWithoutCiudadInput, OrganismoUncheckedUpdateWithoutCiudadInput>
    create: XOR<OrganismoCreateWithoutCiudadInput, OrganismoUncheckedCreateWithoutCiudadInput>
  }

  export type OrganismoUpdateWithWhereUniqueWithoutCiudadInput = {
    where: OrganismoWhereUniqueInput
    data: XOR<OrganismoUpdateWithoutCiudadInput, OrganismoUncheckedUpdateWithoutCiudadInput>
  }

  export type OrganismoUpdateManyWithWhereWithoutCiudadInput = {
    where: OrganismoScalarWhereInput
    data: XOR<OrganismoUpdateManyMutationInput, OrganismoUncheckedUpdateManyWithoutCiudadInput>
  }

  export type OrganismoScalarWhereInput = {
    AND?: OrganismoScalarWhereInput | OrganismoScalarWhereInput[]
    OR?: OrganismoScalarWhereInput[]
    NOT?: OrganismoScalarWhereInput | OrganismoScalarWhereInput[]
    codigo?: StringFilter<"Organismo"> | string
    nombre?: StringFilter<"Organismo"> | string
    titulo?: StringFilter<"Organismo"> | string
    ciudadId?: IntFilter<"Organismo"> | number
    fueroId?: IntFilter<"Organismo"> | number
  }

  export type OrganismoCreateWithoutFueroInput = {
    codigo: string
    nombre: string
    titulo: string
    ciudad: CiudadCreateNestedOneWithoutOrganismosInput
    expedientes?: ExpedienteCreateNestedManyWithoutOrganismoInput
  }

  export type OrganismoUncheckedCreateWithoutFueroInput = {
    codigo: string
    nombre: string
    titulo: string
    ciudadId: number
    expedientes?: ExpedienteUncheckedCreateNestedManyWithoutOrganismoInput
  }

  export type OrganismoCreateOrConnectWithoutFueroInput = {
    where: OrganismoWhereUniqueInput
    create: XOR<OrganismoCreateWithoutFueroInput, OrganismoUncheckedCreateWithoutFueroInput>
  }

  export type OrganismoCreateManyFueroInputEnvelope = {
    data: OrganismoCreateManyFueroInput | OrganismoCreateManyFueroInput[]
  }

  export type OrganismoUpsertWithWhereUniqueWithoutFueroInput = {
    where: OrganismoWhereUniqueInput
    update: XOR<OrganismoUpdateWithoutFueroInput, OrganismoUncheckedUpdateWithoutFueroInput>
    create: XOR<OrganismoCreateWithoutFueroInput, OrganismoUncheckedCreateWithoutFueroInput>
  }

  export type OrganismoUpdateWithWhereUniqueWithoutFueroInput = {
    where: OrganismoWhereUniqueInput
    data: XOR<OrganismoUpdateWithoutFueroInput, OrganismoUncheckedUpdateWithoutFueroInput>
  }

  export type OrganismoUpdateManyWithWhereWithoutFueroInput = {
    where: OrganismoScalarWhereInput
    data: XOR<OrganismoUpdateManyMutationInput, OrganismoUncheckedUpdateManyWithoutFueroInput>
  }

  export type CiudadCreateWithoutOrganismosInput = {
    nombre: string
    codigo: string
    expedientes?: ExpedienteCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUncheckedCreateWithoutOrganismosInput = {
    id?: number
    nombre: string
    codigo: string
    expedientes?: ExpedienteUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type CiudadCreateOrConnectWithoutOrganismosInput = {
    where: CiudadWhereUniqueInput
    create: XOR<CiudadCreateWithoutOrganismosInput, CiudadUncheckedCreateWithoutOrganismosInput>
  }

  export type FueroCreateWithoutOrganismosInput = {
    nombre: string
    codigo: string
  }

  export type FueroUncheckedCreateWithoutOrganismosInput = {
    id?: number
    nombre: string
    codigo: string
  }

  export type FueroCreateOrConnectWithoutOrganismosInput = {
    where: FueroWhereUniqueInput
    create: XOR<FueroCreateWithoutOrganismosInput, FueroUncheckedCreateWithoutOrganismosInput>
  }

  export type ExpedienteCreateWithoutOrganismoInput = {
    tipo: string
    numero: number
    anio: number
    titulo: string
    ciudad: CiudadCreateNestedOneWithoutExpedientesInput
    personas?: ExpedientePersonaCreateNestedManyWithoutExpedienteInput
  }

  export type ExpedienteUncheckedCreateWithoutOrganismoInput = {
    tipo: string
    numero: number
    anio: number
    titulo: string
    ciudadId: number
    personas?: ExpedientePersonaUncheckedCreateNestedManyWithoutExpedienteInput
  }

  export type ExpedienteCreateOrConnectWithoutOrganismoInput = {
    where: ExpedienteWhereUniqueInput
    create: XOR<ExpedienteCreateWithoutOrganismoInput, ExpedienteUncheckedCreateWithoutOrganismoInput>
  }

  export type ExpedienteCreateManyOrganismoInputEnvelope = {
    data: ExpedienteCreateManyOrganismoInput | ExpedienteCreateManyOrganismoInput[]
  }

  export type CiudadUpsertWithoutOrganismosInput = {
    update: XOR<CiudadUpdateWithoutOrganismosInput, CiudadUncheckedUpdateWithoutOrganismosInput>
    create: XOR<CiudadCreateWithoutOrganismosInput, CiudadUncheckedCreateWithoutOrganismosInput>
    where?: CiudadWhereInput
  }

  export type CiudadUpdateToOneWithWhereWithoutOrganismosInput = {
    where?: CiudadWhereInput
    data: XOR<CiudadUpdateWithoutOrganismosInput, CiudadUncheckedUpdateWithoutOrganismosInput>
  }

  export type CiudadUpdateWithoutOrganismosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    expedientes?: ExpedienteUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadUncheckedUpdateWithoutOrganismosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    expedientes?: ExpedienteUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type FueroUpsertWithoutOrganismosInput = {
    update: XOR<FueroUpdateWithoutOrganismosInput, FueroUncheckedUpdateWithoutOrganismosInput>
    create: XOR<FueroCreateWithoutOrganismosInput, FueroUncheckedCreateWithoutOrganismosInput>
    where?: FueroWhereInput
  }

  export type FueroUpdateToOneWithWhereWithoutOrganismosInput = {
    where?: FueroWhereInput
    data: XOR<FueroUpdateWithoutOrganismosInput, FueroUncheckedUpdateWithoutOrganismosInput>
  }

  export type FueroUpdateWithoutOrganismosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type FueroUncheckedUpdateWithoutOrganismosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedienteUpsertWithWhereUniqueWithoutOrganismoInput = {
    where: ExpedienteWhereUniqueInput
    update: XOR<ExpedienteUpdateWithoutOrganismoInput, ExpedienteUncheckedUpdateWithoutOrganismoInput>
    create: XOR<ExpedienteCreateWithoutOrganismoInput, ExpedienteUncheckedCreateWithoutOrganismoInput>
  }

  export type ExpedienteUpdateWithWhereUniqueWithoutOrganismoInput = {
    where: ExpedienteWhereUniqueInput
    data: XOR<ExpedienteUpdateWithoutOrganismoInput, ExpedienteUncheckedUpdateWithoutOrganismoInput>
  }

  export type ExpedienteUpdateManyWithWhereWithoutOrganismoInput = {
    where: ExpedienteScalarWhereInput
    data: XOR<ExpedienteUpdateManyMutationInput, ExpedienteUncheckedUpdateManyWithoutOrganismoInput>
  }

  export type OrganismoCreateWithoutExpedientesInput = {
    codigo: string
    nombre: string
    titulo: string
    ciudad: CiudadCreateNestedOneWithoutOrganismosInput
    fuero: FueroCreateNestedOneWithoutOrganismosInput
  }

  export type OrganismoUncheckedCreateWithoutExpedientesInput = {
    codigo: string
    nombre: string
    titulo: string
    ciudadId: number
    fueroId: number
  }

  export type OrganismoCreateOrConnectWithoutExpedientesInput = {
    where: OrganismoWhereUniqueInput
    create: XOR<OrganismoCreateWithoutExpedientesInput, OrganismoUncheckedCreateWithoutExpedientesInput>
  }

  export type CiudadCreateWithoutExpedientesInput = {
    nombre: string
    codigo: string
    organismos?: OrganismoCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUncheckedCreateWithoutExpedientesInput = {
    id?: number
    nombre: string
    codigo: string
    organismos?: OrganismoUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type CiudadCreateOrConnectWithoutExpedientesInput = {
    where: CiudadWhereUniqueInput
    create: XOR<CiudadCreateWithoutExpedientesInput, CiudadUncheckedCreateWithoutExpedientesInput>
  }

  export type ExpedientePersonaCreateWithoutExpedienteInput = {
    persona: PersonaCreateNestedOneWithoutExpedientesInput
    vinculo: TipoVinculoCreateNestedOneWithoutExpedientePersonasInput
  }

  export type ExpedientePersonaUncheckedCreateWithoutExpedienteInput = {
    personaDni: string
    vinculoId: number
  }

  export type ExpedientePersonaCreateOrConnectWithoutExpedienteInput = {
    where: ExpedientePersonaWhereUniqueInput
    create: XOR<ExpedientePersonaCreateWithoutExpedienteInput, ExpedientePersonaUncheckedCreateWithoutExpedienteInput>
  }

  export type ExpedientePersonaCreateManyExpedienteInputEnvelope = {
    data: ExpedientePersonaCreateManyExpedienteInput | ExpedientePersonaCreateManyExpedienteInput[]
  }

  export type OrganismoUpsertWithoutExpedientesInput = {
    update: XOR<OrganismoUpdateWithoutExpedientesInput, OrganismoUncheckedUpdateWithoutExpedientesInput>
    create: XOR<OrganismoCreateWithoutExpedientesInput, OrganismoUncheckedCreateWithoutExpedientesInput>
    where?: OrganismoWhereInput
  }

  export type OrganismoUpdateToOneWithWhereWithoutExpedientesInput = {
    where?: OrganismoWhereInput
    data: XOR<OrganismoUpdateWithoutExpedientesInput, OrganismoUncheckedUpdateWithoutExpedientesInput>
  }

  export type OrganismoUpdateWithoutExpedientesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    ciudad?: CiudadUpdateOneRequiredWithoutOrganismosNestedInput
    fuero?: FueroUpdateOneRequiredWithoutOrganismosNestedInput
  }

  export type OrganismoUncheckedUpdateWithoutExpedientesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    ciudadId?: IntFieldUpdateOperationsInput | number
    fueroId?: IntFieldUpdateOperationsInput | number
  }

  export type CiudadUpsertWithoutExpedientesInput = {
    update: XOR<CiudadUpdateWithoutExpedientesInput, CiudadUncheckedUpdateWithoutExpedientesInput>
    create: XOR<CiudadCreateWithoutExpedientesInput, CiudadUncheckedCreateWithoutExpedientesInput>
    where?: CiudadWhereInput
  }

  export type CiudadUpdateToOneWithWhereWithoutExpedientesInput = {
    where?: CiudadWhereInput
    data: XOR<CiudadUpdateWithoutExpedientesInput, CiudadUncheckedUpdateWithoutExpedientesInput>
  }

  export type CiudadUpdateWithoutExpedientesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    organismos?: OrganismoUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadUncheckedUpdateWithoutExpedientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    organismos?: OrganismoUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type ExpedientePersonaUpsertWithWhereUniqueWithoutExpedienteInput = {
    where: ExpedientePersonaWhereUniqueInput
    update: XOR<ExpedientePersonaUpdateWithoutExpedienteInput, ExpedientePersonaUncheckedUpdateWithoutExpedienteInput>
    create: XOR<ExpedientePersonaCreateWithoutExpedienteInput, ExpedientePersonaUncheckedCreateWithoutExpedienteInput>
  }

  export type ExpedientePersonaUpdateWithWhereUniqueWithoutExpedienteInput = {
    where: ExpedientePersonaWhereUniqueInput
    data: XOR<ExpedientePersonaUpdateWithoutExpedienteInput, ExpedientePersonaUncheckedUpdateWithoutExpedienteInput>
  }

  export type ExpedientePersonaUpdateManyWithWhereWithoutExpedienteInput = {
    where: ExpedientePersonaScalarWhereInput
    data: XOR<ExpedientePersonaUpdateManyMutationInput, ExpedientePersonaUncheckedUpdateManyWithoutExpedienteInput>
  }

  export type ExpedientePersonaScalarWhereInput = {
    AND?: ExpedientePersonaScalarWhereInput | ExpedientePersonaScalarWhereInput[]
    OR?: ExpedientePersonaScalarWhereInput[]
    NOT?: ExpedientePersonaScalarWhereInput | ExpedientePersonaScalarWhereInput[]
    expCodigoOrganismo?: StringFilter<"ExpedientePersona"> | string
    expTipo?: StringFilter<"ExpedientePersona"> | string
    expNumero?: IntFilter<"ExpedientePersona"> | number
    expAnio?: IntFilter<"ExpedientePersona"> | number
    personaDni?: StringFilter<"ExpedientePersona"> | string
    vinculoId?: IntFilter<"ExpedientePersona"> | number
  }

  export type ExpedientePersonaCreateWithoutPersonaInput = {
    expediente: ExpedienteCreateNestedOneWithoutPersonasInput
    vinculo: TipoVinculoCreateNestedOneWithoutExpedientePersonasInput
  }

  export type ExpedientePersonaUncheckedCreateWithoutPersonaInput = {
    expCodigoOrganismo: string
    expTipo: string
    expNumero: number
    expAnio: number
    vinculoId: number
  }

  export type ExpedientePersonaCreateOrConnectWithoutPersonaInput = {
    where: ExpedientePersonaWhereUniqueInput
    create: XOR<ExpedientePersonaCreateWithoutPersonaInput, ExpedientePersonaUncheckedCreateWithoutPersonaInput>
  }

  export type ExpedientePersonaCreateManyPersonaInputEnvelope = {
    data: ExpedientePersonaCreateManyPersonaInput | ExpedientePersonaCreateManyPersonaInput[]
  }

  export type ExpedientePersonaUpsertWithWhereUniqueWithoutPersonaInput = {
    where: ExpedientePersonaWhereUniqueInput
    update: XOR<ExpedientePersonaUpdateWithoutPersonaInput, ExpedientePersonaUncheckedUpdateWithoutPersonaInput>
    create: XOR<ExpedientePersonaCreateWithoutPersonaInput, ExpedientePersonaUncheckedCreateWithoutPersonaInput>
  }

  export type ExpedientePersonaUpdateWithWhereUniqueWithoutPersonaInput = {
    where: ExpedientePersonaWhereUniqueInput
    data: XOR<ExpedientePersonaUpdateWithoutPersonaInput, ExpedientePersonaUncheckedUpdateWithoutPersonaInput>
  }

  export type ExpedientePersonaUpdateManyWithWhereWithoutPersonaInput = {
    where: ExpedientePersonaScalarWhereInput
    data: XOR<ExpedientePersonaUpdateManyMutationInput, ExpedientePersonaUncheckedUpdateManyWithoutPersonaInput>
  }

  export type ExpedientePersonaCreateWithoutVinculoInput = {
    expediente: ExpedienteCreateNestedOneWithoutPersonasInput
    persona: PersonaCreateNestedOneWithoutExpedientesInput
  }

  export type ExpedientePersonaUncheckedCreateWithoutVinculoInput = {
    expCodigoOrganismo: string
    expTipo: string
    expNumero: number
    expAnio: number
    personaDni: string
  }

  export type ExpedientePersonaCreateOrConnectWithoutVinculoInput = {
    where: ExpedientePersonaWhereUniqueInput
    create: XOR<ExpedientePersonaCreateWithoutVinculoInput, ExpedientePersonaUncheckedCreateWithoutVinculoInput>
  }

  export type ExpedientePersonaCreateManyVinculoInputEnvelope = {
    data: ExpedientePersonaCreateManyVinculoInput | ExpedientePersonaCreateManyVinculoInput[]
  }

  export type ExpedientePersonaUpsertWithWhereUniqueWithoutVinculoInput = {
    where: ExpedientePersonaWhereUniqueInput
    update: XOR<ExpedientePersonaUpdateWithoutVinculoInput, ExpedientePersonaUncheckedUpdateWithoutVinculoInput>
    create: XOR<ExpedientePersonaCreateWithoutVinculoInput, ExpedientePersonaUncheckedCreateWithoutVinculoInput>
  }

  export type ExpedientePersonaUpdateWithWhereUniqueWithoutVinculoInput = {
    where: ExpedientePersonaWhereUniqueInput
    data: XOR<ExpedientePersonaUpdateWithoutVinculoInput, ExpedientePersonaUncheckedUpdateWithoutVinculoInput>
  }

  export type ExpedientePersonaUpdateManyWithWhereWithoutVinculoInput = {
    where: ExpedientePersonaScalarWhereInput
    data: XOR<ExpedientePersonaUpdateManyMutationInput, ExpedientePersonaUncheckedUpdateManyWithoutVinculoInput>
  }

  export type ExpedienteCreateWithoutPersonasInput = {
    tipo: string
    numero: number
    anio: number
    titulo: string
    organismo: OrganismoCreateNestedOneWithoutExpedientesInput
    ciudad: CiudadCreateNestedOneWithoutExpedientesInput
  }

  export type ExpedienteUncheckedCreateWithoutPersonasInput = {
    codigoOrganismo: string
    tipo: string
    numero: number
    anio: number
    titulo: string
    ciudadId: number
  }

  export type ExpedienteCreateOrConnectWithoutPersonasInput = {
    where: ExpedienteWhereUniqueInput
    create: XOR<ExpedienteCreateWithoutPersonasInput, ExpedienteUncheckedCreateWithoutPersonasInput>
  }

  export type PersonaCreateWithoutExpedientesInput = {
    dni: string
    apellido: string
    nombre: string
  }

  export type PersonaUncheckedCreateWithoutExpedientesInput = {
    dni: string
    apellido: string
    nombre: string
  }

  export type PersonaCreateOrConnectWithoutExpedientesInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutExpedientesInput, PersonaUncheckedCreateWithoutExpedientesInput>
  }

  export type TipoVinculoCreateWithoutExpedientePersonasInput = {
    descripcion: string
  }

  export type TipoVinculoUncheckedCreateWithoutExpedientePersonasInput = {
    id?: number
    descripcion: string
  }

  export type TipoVinculoCreateOrConnectWithoutExpedientePersonasInput = {
    where: TipoVinculoWhereUniqueInput
    create: XOR<TipoVinculoCreateWithoutExpedientePersonasInput, TipoVinculoUncheckedCreateWithoutExpedientePersonasInput>
  }

  export type ExpedienteUpsertWithoutPersonasInput = {
    update: XOR<ExpedienteUpdateWithoutPersonasInput, ExpedienteUncheckedUpdateWithoutPersonasInput>
    create: XOR<ExpedienteCreateWithoutPersonasInput, ExpedienteUncheckedCreateWithoutPersonasInput>
    where?: ExpedienteWhereInput
  }

  export type ExpedienteUpdateToOneWithWhereWithoutPersonasInput = {
    where?: ExpedienteWhereInput
    data: XOR<ExpedienteUpdateWithoutPersonasInput, ExpedienteUncheckedUpdateWithoutPersonasInput>
  }

  export type ExpedienteUpdateWithoutPersonasInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    organismo?: OrganismoUpdateOneRequiredWithoutExpedientesNestedInput
    ciudad?: CiudadUpdateOneRequiredWithoutExpedientesNestedInput
  }

  export type ExpedienteUncheckedUpdateWithoutPersonasInput = {
    codigoOrganismo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ciudadId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonaUpsertWithoutExpedientesInput = {
    update: XOR<PersonaUpdateWithoutExpedientesInput, PersonaUncheckedUpdateWithoutExpedientesInput>
    create: XOR<PersonaCreateWithoutExpedientesInput, PersonaUncheckedCreateWithoutExpedientesInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutExpedientesInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutExpedientesInput, PersonaUncheckedUpdateWithoutExpedientesInput>
  }

  export type PersonaUpdateWithoutExpedientesInput = {
    dni?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PersonaUncheckedUpdateWithoutExpedientesInput = {
    dni?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TipoVinculoUpsertWithoutExpedientePersonasInput = {
    update: XOR<TipoVinculoUpdateWithoutExpedientePersonasInput, TipoVinculoUncheckedUpdateWithoutExpedientePersonasInput>
    create: XOR<TipoVinculoCreateWithoutExpedientePersonasInput, TipoVinculoUncheckedCreateWithoutExpedientePersonasInput>
    where?: TipoVinculoWhereInput
  }

  export type TipoVinculoUpdateToOneWithWhereWithoutExpedientePersonasInput = {
    where?: TipoVinculoWhereInput
    data: XOR<TipoVinculoUpdateWithoutExpedientePersonasInput, TipoVinculoUncheckedUpdateWithoutExpedientePersonasInput>
  }

  export type TipoVinculoUpdateWithoutExpedientePersonasInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type TipoVinculoUncheckedUpdateWithoutExpedientePersonasInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedienteCreateManyCiudadInput = {
    codigoOrganismo: string
    tipo: string
    numero: number
    anio: number
    titulo: string
  }

  export type OrganismoCreateManyCiudadInput = {
    codigo: string
    nombre: string
    titulo: string
    fueroId: number
  }

  export type ExpedienteUpdateWithoutCiudadInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    organismo?: OrganismoUpdateOneRequiredWithoutExpedientesNestedInput
    personas?: ExpedientePersonaUpdateManyWithoutExpedienteNestedInput
  }

  export type ExpedienteUncheckedUpdateWithoutCiudadInput = {
    codigoOrganismo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    personas?: ExpedientePersonaUncheckedUpdateManyWithoutExpedienteNestedInput
  }

  export type ExpedienteUncheckedUpdateManyWithoutCiudadInput = {
    codigoOrganismo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
  }

  export type OrganismoUpdateWithoutCiudadInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fuero?: FueroUpdateOneRequiredWithoutOrganismosNestedInput
    expedientes?: ExpedienteUpdateManyWithoutOrganismoNestedInput
  }

  export type OrganismoUncheckedUpdateWithoutCiudadInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fueroId?: IntFieldUpdateOperationsInput | number
    expedientes?: ExpedienteUncheckedUpdateManyWithoutOrganismoNestedInput
  }

  export type OrganismoUncheckedUpdateManyWithoutCiudadInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fueroId?: IntFieldUpdateOperationsInput | number
  }

  export type OrganismoCreateManyFueroInput = {
    codigo: string
    nombre: string
    titulo: string
    ciudadId: number
  }

  export type OrganismoUpdateWithoutFueroInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    ciudad?: CiudadUpdateOneRequiredWithoutOrganismosNestedInput
    expedientes?: ExpedienteUpdateManyWithoutOrganismoNestedInput
  }

  export type OrganismoUncheckedUpdateWithoutFueroInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    ciudadId?: IntFieldUpdateOperationsInput | number
    expedientes?: ExpedienteUncheckedUpdateManyWithoutOrganismoNestedInput
  }

  export type OrganismoUncheckedUpdateManyWithoutFueroInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    ciudadId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpedienteCreateManyOrganismoInput = {
    tipo: string
    numero: number
    anio: number
    titulo: string
    ciudadId: number
  }

  export type ExpedienteUpdateWithoutOrganismoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ciudad?: CiudadUpdateOneRequiredWithoutExpedientesNestedInput
    personas?: ExpedientePersonaUpdateManyWithoutExpedienteNestedInput
  }

  export type ExpedienteUncheckedUpdateWithoutOrganismoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ciudadId?: IntFieldUpdateOperationsInput | number
    personas?: ExpedientePersonaUncheckedUpdateManyWithoutExpedienteNestedInput
  }

  export type ExpedienteUncheckedUpdateManyWithoutOrganismoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ciudadId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpedientePersonaCreateManyExpedienteInput = {
    personaDni: string
    vinculoId: number
  }

  export type ExpedientePersonaUpdateWithoutExpedienteInput = {
    persona?: PersonaUpdateOneRequiredWithoutExpedientesNestedInput
    vinculo?: TipoVinculoUpdateOneRequiredWithoutExpedientePersonasNestedInput
  }

  export type ExpedientePersonaUncheckedUpdateWithoutExpedienteInput = {
    personaDni?: StringFieldUpdateOperationsInput | string
    vinculoId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpedientePersonaUncheckedUpdateManyWithoutExpedienteInput = {
    personaDni?: StringFieldUpdateOperationsInput | string
    vinculoId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpedientePersonaCreateManyPersonaInput = {
    expCodigoOrganismo: string
    expTipo: string
    expNumero: number
    expAnio: number
    vinculoId: number
  }

  export type ExpedientePersonaUpdateWithoutPersonaInput = {
    expediente?: ExpedienteUpdateOneRequiredWithoutPersonasNestedInput
    vinculo?: TipoVinculoUpdateOneRequiredWithoutExpedientePersonasNestedInput
  }

  export type ExpedientePersonaUncheckedUpdateWithoutPersonaInput = {
    expCodigoOrganismo?: StringFieldUpdateOperationsInput | string
    expTipo?: StringFieldUpdateOperationsInput | string
    expNumero?: IntFieldUpdateOperationsInput | number
    expAnio?: IntFieldUpdateOperationsInput | number
    vinculoId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpedientePersonaUncheckedUpdateManyWithoutPersonaInput = {
    expCodigoOrganismo?: StringFieldUpdateOperationsInput | string
    expTipo?: StringFieldUpdateOperationsInput | string
    expNumero?: IntFieldUpdateOperationsInput | number
    expAnio?: IntFieldUpdateOperationsInput | number
    vinculoId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpedientePersonaCreateManyVinculoInput = {
    expCodigoOrganismo: string
    expTipo: string
    expNumero: number
    expAnio: number
    personaDni: string
  }

  export type ExpedientePersonaUpdateWithoutVinculoInput = {
    expediente?: ExpedienteUpdateOneRequiredWithoutPersonasNestedInput
    persona?: PersonaUpdateOneRequiredWithoutExpedientesNestedInput
  }

  export type ExpedientePersonaUncheckedUpdateWithoutVinculoInput = {
    expCodigoOrganismo?: StringFieldUpdateOperationsInput | string
    expTipo?: StringFieldUpdateOperationsInput | string
    expNumero?: IntFieldUpdateOperationsInput | number
    expAnio?: IntFieldUpdateOperationsInput | number
    personaDni?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedientePersonaUncheckedUpdateManyWithoutVinculoInput = {
    expCodigoOrganismo?: StringFieldUpdateOperationsInput | string
    expTipo?: StringFieldUpdateOperationsInput | string
    expNumero?: IntFieldUpdateOperationsInput | number
    expAnio?: IntFieldUpdateOperationsInput | number
    personaDni?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}