
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model CheckIn
 * 
 */
export type CheckIn = $Result.DefaultSelection<Prisma.$CheckInPayload>
/**
 * Model Perform
 * 
 */
export type Perform = $Result.DefaultSelection<Prisma.$PerformPayload>
/**
 * Model JoinIn
 * 
 */
export type JoinIn = $Result.DefaultSelection<Prisma.$JoinInPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Type: {
  CHILDREND: 'CHILDREND',
  YOUTH: 'YOUTH'
};

export type Type = (typeof Type)[keyof typeof Type]

}

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs>;

  /**
   * `prisma.checkIn`: Exposes CRUD operations for the **CheckIn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckIns
    * const checkIns = await prisma.checkIn.findMany()
    * ```
    */
  get checkIn(): Prisma.CheckInDelegate<ExtArgs>;

  /**
   * `prisma.perform`: Exposes CRUD operations for the **Perform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Performs
    * const performs = await prisma.perform.findMany()
    * ```
    */
  get perform(): Prisma.PerformDelegate<ExtArgs>;

  /**
   * `prisma.joinIn`: Exposes CRUD operations for the **JoinIn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JoinIns
    * const joinIns = await prisma.joinIn.findMany()
    * ```
    */
  get joinIn(): Prisma.JoinInDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Member: 'Member',
    CheckIn: 'CheckIn',
    Perform: 'Perform',
    JoinIn: 'JoinIn'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'member' | 'checkIn' | 'perform' | 'joinIn'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>,
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      CheckIn: {
        payload: Prisma.$CheckInPayload<ExtArgs>
        fields: Prisma.CheckInFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckInFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckInFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findFirst: {
            args: Prisma.CheckInFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckInFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findMany: {
            args: Prisma.CheckInFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          create: {
            args: Prisma.CheckInCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          createMany: {
            args: Prisma.CheckInCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckInCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          delete: {
            args: Prisma.CheckInDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          update: {
            args: Prisma.CheckInUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          deleteMany: {
            args: Prisma.CheckInDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CheckInUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CheckInUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          aggregate: {
            args: Prisma.CheckInAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCheckIn>
          }
          groupBy: {
            args: Prisma.CheckInGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CheckInGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckInCountArgs<ExtArgs>,
            result: $Utils.Optional<CheckInCountAggregateOutputType> | number
          }
        }
      }
      Perform: {
        payload: Prisma.$PerformPayload<ExtArgs>
        fields: Prisma.PerformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerformFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerformFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerformPayload>
          }
          findFirst: {
            args: Prisma.PerformFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerformFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerformPayload>
          }
          findMany: {
            args: Prisma.PerformFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerformPayload>[]
          }
          create: {
            args: Prisma.PerformCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerformPayload>
          }
          createMany: {
            args: Prisma.PerformCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerformCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerformPayload>[]
          }
          delete: {
            args: Prisma.PerformDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerformPayload>
          }
          update: {
            args: Prisma.PerformUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerformPayload>
          }
          deleteMany: {
            args: Prisma.PerformDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PerformUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PerformUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerformPayload>
          }
          aggregate: {
            args: Prisma.PerformAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePerform>
          }
          groupBy: {
            args: Prisma.PerformGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PerformGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerformCountArgs<ExtArgs>,
            result: $Utils.Optional<PerformCountAggregateOutputType> | number
          }
        }
      }
      JoinIn: {
        payload: Prisma.$JoinInPayload<ExtArgs>
        fields: Prisma.JoinInFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoinInFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JoinInPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoinInFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JoinInPayload>
          }
          findFirst: {
            args: Prisma.JoinInFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JoinInPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoinInFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JoinInPayload>
          }
          findMany: {
            args: Prisma.JoinInFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JoinInPayload>[]
          }
          create: {
            args: Prisma.JoinInCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JoinInPayload>
          }
          createMany: {
            args: Prisma.JoinInCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JoinInCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JoinInPayload>[]
          }
          delete: {
            args: Prisma.JoinInDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JoinInPayload>
          }
          update: {
            args: Prisma.JoinInUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JoinInPayload>
          }
          deleteMany: {
            args: Prisma.JoinInDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JoinInUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JoinInUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JoinInPayload>
          }
          aggregate: {
            args: Prisma.JoinInAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJoinIn>
          }
          groupBy: {
            args: Prisma.JoinInGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JoinInGroupByOutputType>[]
          }
          count: {
            args: Prisma.JoinInCountArgs<ExtArgs>,
            result: $Utils.Optional<JoinInCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    CheckIn: number
    JoinIn: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CheckIn?: boolean | MemberCountOutputTypeCountCheckInArgs
    JoinIn?: boolean | MemberCountOutputTypeCountJoinInArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountCheckInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountJoinInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinInWhereInput
  }


  /**
   * Count Type PerformCountOutputType
   */

  export type PerformCountOutputType = {
    JoinIn: number
  }

  export type PerformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JoinIn?: boolean | PerformCountOutputTypeCountJoinInArgs
  }

  // Custom InputTypes
  /**
   * PerformCountOutputType without action
   */
  export type PerformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformCountOutputType
     */
    select?: PerformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerformCountOutputType without action
   */
  export type PerformCountOutputTypeCountJoinInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinInWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    type: $Enums.Type | null
    class: string | null
    school: string | null
    createdAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    type: $Enums.Type | null
    class: string | null
    school: string | null
    createdAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    fullname: number
    type: number
    class: number
    school: number
    createdAt: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    fullname?: true
    type?: true
    class?: true
    school?: true
    createdAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    fullname?: true
    type?: true
    class?: true
    school?: true
    createdAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    fullname?: true
    type?: true
    class?: true
    school?: true
    createdAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    fullname: string
    type: $Enums.Type
    class: string
    school: string
    createdAt: Date
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    type?: boolean
    class?: boolean
    school?: boolean
    createdAt?: boolean
    CheckIn?: boolean | Member$CheckInArgs<ExtArgs>
    JoinIn?: boolean | Member$JoinInArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    type?: boolean
    class?: boolean
    school?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    fullname?: boolean
    type?: boolean
    class?: boolean
    school?: boolean
    createdAt?: boolean
  }

  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CheckIn?: boolean | Member$CheckInArgs<ExtArgs>
    JoinIn?: boolean | Member$JoinInArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      CheckIn: Prisma.$CheckInPayload<ExtArgs>[]
      JoinIn: Prisma.$JoinInPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      type: $Enums.Type
      class: string
      school: string
      createdAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
    **/
    create<T extends MemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberCreateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends MemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
    **/
    delete<T extends MemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
    **/
    upsert<T extends MemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CheckIn<T extends Member$CheckInArgs<ExtArgs> = {}>(args?: Subset<T, Member$CheckInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'findMany'> | Null>;

    JoinIn<T extends Member$JoinInArgs<ExtArgs> = {}>(args?: Subset<T, Member$JoinInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Member model
   */ 
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'Int'>
    readonly fullname: FieldRef<"Member", 'String'>
    readonly type: FieldRef<"Member", 'Type'>
    readonly class: FieldRef<"Member", 'String'>
    readonly school: FieldRef<"Member", 'String'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
  }

  /**
   * Member.CheckIn
   */
  export type Member$CheckInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * Member.JoinIn
   */
  export type Member$JoinInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    where?: JoinInWhereInput
    orderBy?: JoinInOrderByWithRelationInput | JoinInOrderByWithRelationInput[]
    cursor?: JoinInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinInScalarFieldEnum | JoinInScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model CheckIn
   */

  export type AggregateCheckIn = {
    _count: CheckInCountAggregateOutputType | null
    _avg: CheckInAvgAggregateOutputType | null
    _sum: CheckInSumAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  export type CheckInAvgAggregateOutputType = {
    id: number | null
    memberId: number | null
  }

  export type CheckInSumAggregateOutputType = {
    id: number | null
    memberId: number | null
  }

  export type CheckInMinAggregateOutputType = {
    id: number | null
    note: string | null
    memberId: number | null
    createdAt: Date | null
  }

  export type CheckInMaxAggregateOutputType = {
    id: number | null
    note: string | null
    memberId: number | null
    createdAt: Date | null
  }

  export type CheckInCountAggregateOutputType = {
    id: number
    note: number
    memberId: number
    createdAt: number
    _all: number
  }


  export type CheckInAvgAggregateInputType = {
    id?: true
    memberId?: true
  }

  export type CheckInSumAggregateInputType = {
    id?: true
    memberId?: true
  }

  export type CheckInMinAggregateInputType = {
    id?: true
    note?: true
    memberId?: true
    createdAt?: true
  }

  export type CheckInMaxAggregateInputType = {
    id?: true
    note?: true
    memberId?: true
    createdAt?: true
  }

  export type CheckInCountAggregateInputType = {
    id?: true
    note?: true
    memberId?: true
    createdAt?: true
    _all?: true
  }

  export type CheckInAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIn to aggregate.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckIns
    **/
    _count?: true | CheckInCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckInAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckInSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckInMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckInMaxAggregateInputType
  }

  export type GetCheckInAggregateType<T extends CheckInAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckIn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckIn[P]>
      : GetScalarType<T[P], AggregateCheckIn[P]>
  }




  export type CheckInGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithAggregationInput | CheckInOrderByWithAggregationInput[]
    by: CheckInScalarFieldEnum[] | CheckInScalarFieldEnum
    having?: CheckInScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckInCountAggregateInputType | true
    _avg?: CheckInAvgAggregateInputType
    _sum?: CheckInSumAggregateInputType
    _min?: CheckInMinAggregateInputType
    _max?: CheckInMaxAggregateInputType
  }

  export type CheckInGroupByOutputType = {
    id: number
    note: string | null
    memberId: number | null
    createdAt: Date
    _count: CheckInCountAggregateOutputType | null
    _avg: CheckInAvgAggregateOutputType | null
    _sum: CheckInSumAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  type GetCheckInGroupByPayload<T extends CheckInGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckInGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckInGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckInGroupByOutputType[P]>
            : GetScalarType<T[P], CheckInGroupByOutputType[P]>
        }
      >
    >


  export type CheckInSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    memberId?: boolean
    createdAt?: boolean
    member?: boolean | CheckIn$memberArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    memberId?: boolean
    createdAt?: boolean
    member?: boolean | CheckIn$memberArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectScalar = {
    id?: boolean
    note?: boolean
    memberId?: boolean
    createdAt?: boolean
  }

  export type CheckInInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | CheckIn$memberArgs<ExtArgs>
  }
  export type CheckInIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | CheckIn$memberArgs<ExtArgs>
  }

  export type $CheckInPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckIn"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      note: string | null
      memberId: number | null
      createdAt: Date
    }, ExtArgs["result"]["checkIn"]>
    composites: {}
  }

  type CheckInGetPayload<S extends boolean | null | undefined | CheckInDefaultArgs> = $Result.GetResult<Prisma.$CheckInPayload, S>

  type CheckInCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CheckInFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CheckInCountAggregateInputType | true
    }

  export interface CheckInDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckIn'], meta: { name: 'CheckIn' } }
    /**
     * Find zero or one CheckIn that matches the filter.
     * @param {CheckInFindUniqueArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CheckInFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CheckInFindUniqueArgs<ExtArgs>>
    ): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CheckIn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CheckInFindUniqueOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CheckInFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckInFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CheckIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CheckInFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckInFindFirstArgs<ExtArgs>>
    ): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CheckIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CheckInFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckInFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CheckIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckIns
     * const checkIns = await prisma.checkIn.findMany()
     * 
     * // Get first 10 CheckIns
     * const checkIns = await prisma.checkIn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkInWithIdOnly = await prisma.checkIn.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CheckInFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckInFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CheckIn.
     * @param {CheckInCreateArgs} args - Arguments to create a CheckIn.
     * @example
     * // Create one CheckIn
     * const CheckIn = await prisma.checkIn.create({
     *   data: {
     *     // ... data to create a CheckIn
     *   }
     * })
     * 
    **/
    create<T extends CheckInCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CheckInCreateArgs<ExtArgs>>
    ): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CheckIns.
     * @param {CheckInCreateManyArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CheckInCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckInCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckIns and returns the data saved in the database.
     * @param {CheckInCreateManyAndReturnArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CheckInCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckInCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a CheckIn.
     * @param {CheckInDeleteArgs} args - Arguments to delete one CheckIn.
     * @example
     * // Delete one CheckIn
     * const CheckIn = await prisma.checkIn.delete({
     *   where: {
     *     // ... filter to delete one CheckIn
     *   }
     * })
     * 
    **/
    delete<T extends CheckInDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CheckInDeleteArgs<ExtArgs>>
    ): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CheckIn.
     * @param {CheckInUpdateArgs} args - Arguments to update one CheckIn.
     * @example
     * // Update one CheckIn
     * const checkIn = await prisma.checkIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CheckInUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CheckInUpdateArgs<ExtArgs>>
    ): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CheckIns.
     * @param {CheckInDeleteManyArgs} args - Arguments to filter CheckIns to delete.
     * @example
     * // Delete a few CheckIns
     * const { count } = await prisma.checkIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CheckInDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckInDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CheckInUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CheckInUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CheckIn.
     * @param {CheckInUpsertArgs} args - Arguments to update or create a CheckIn.
     * @example
     * // Update or create a CheckIn
     * const checkIn = await prisma.checkIn.upsert({
     *   create: {
     *     // ... data to create a CheckIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckIn we want to update
     *   }
     * })
    **/
    upsert<T extends CheckInUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CheckInUpsertArgs<ExtArgs>>
    ): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInCountArgs} args - Arguments to filter CheckIns to count.
     * @example
     * // Count the number of CheckIns
     * const count = await prisma.checkIn.count({
     *   where: {
     *     // ... the filter for the CheckIns we want to count
     *   }
     * })
    **/
    count<T extends CheckInCountArgs>(
      args?: Subset<T, CheckInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckInCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckInAggregateArgs>(args: Subset<T, CheckInAggregateArgs>): Prisma.PrismaPromise<GetCheckInAggregateType<T>>

    /**
     * Group by CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGroupByArgs} args - Group by arguments.
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
      T extends CheckInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckInGroupByArgs['orderBy'] }
        : { orderBy?: CheckInGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckIn model
   */
  readonly fields: CheckInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckInClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    member<T extends CheckIn$memberArgs<ExtArgs> = {}>(args?: Subset<T, CheckIn$memberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CheckIn model
   */ 
  interface CheckInFieldRefs {
    readonly id: FieldRef<"CheckIn", 'Int'>
    readonly note: FieldRef<"CheckIn", 'String'>
    readonly memberId: FieldRef<"CheckIn", 'Int'>
    readonly createdAt: FieldRef<"CheckIn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckIn findUnique
   */
  export type CheckInFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findUniqueOrThrow
   */
  export type CheckInFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findFirst
   */
  export type CheckInFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findFirstOrThrow
   */
  export type CheckInFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findMany
   */
  export type CheckInFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIns to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn create
   */
  export type CheckInCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckIn.
     */
    data?: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
  }

  /**
   * CheckIn createMany
   */
  export type CheckInCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckIn createManyAndReturn
   */
  export type CheckInCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckIn update
   */
  export type CheckInUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckIn.
     */
    data: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
    /**
     * Choose, which CheckIn to update.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn updateMany
   */
  export type CheckInUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput
  }

  /**
   * CheckIn upsert
   */
  export type CheckInUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckIn to update in case it exists.
     */
    where: CheckInWhereUniqueInput
    /**
     * In case the CheckIn found by the `where` argument doesn't exist, create a new CheckIn with this data.
     */
    create: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
    /**
     * In case the CheckIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
  }

  /**
   * CheckIn delete
   */
  export type CheckInDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter which CheckIn to delete.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn deleteMany
   */
  export type CheckInDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIns to delete
     */
    where?: CheckInWhereInput
  }

  /**
   * CheckIn.member
   */
  export type CheckIn$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * CheckIn without action
   */
  export type CheckInDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
  }


  /**
   * Model Perform
   */

  export type AggregatePerform = {
    _count: PerformCountAggregateOutputType | null
    _avg: PerformAvgAggregateOutputType | null
    _sum: PerformSumAggregateOutputType | null
    _min: PerformMinAggregateOutputType | null
    _max: PerformMaxAggregateOutputType | null
  }

  export type PerformAvgAggregateOutputType = {
    id: number | null
  }

  export type PerformSumAggregateOutputType = {
    id: number | null
  }

  export type PerformMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type PerformMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type PerformCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type PerformAvgAggregateInputType = {
    id?: true
  }

  export type PerformSumAggregateInputType = {
    id?: true
  }

  export type PerformMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type PerformMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type PerformCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type PerformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perform to aggregate.
     */
    where?: PerformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performs to fetch.
     */
    orderBy?: PerformOrderByWithRelationInput | PerformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Performs
    **/
    _count?: true | PerformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerformMaxAggregateInputType
  }

  export type GetPerformAggregateType<T extends PerformAggregateArgs> = {
        [P in keyof T & keyof AggregatePerform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerform[P]>
      : GetScalarType<T[P], AggregatePerform[P]>
  }




  export type PerformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformWhereInput
    orderBy?: PerformOrderByWithAggregationInput | PerformOrderByWithAggregationInput[]
    by: PerformScalarFieldEnum[] | PerformScalarFieldEnum
    having?: PerformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerformCountAggregateInputType | true
    _avg?: PerformAvgAggregateInputType
    _sum?: PerformSumAggregateInputType
    _min?: PerformMinAggregateInputType
    _max?: PerformMaxAggregateInputType
  }

  export type PerformGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: PerformCountAggregateOutputType | null
    _avg: PerformAvgAggregateOutputType | null
    _sum: PerformSumAggregateOutputType | null
    _min: PerformMinAggregateOutputType | null
    _max: PerformMaxAggregateOutputType | null
  }

  type GetPerformGroupByPayload<T extends PerformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerformGroupByOutputType[P]>
            : GetScalarType<T[P], PerformGroupByOutputType[P]>
        }
      >
    >


  export type PerformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    JoinIn?: boolean | Perform$JoinInArgs<ExtArgs>
    _count?: boolean | PerformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perform"]>

  export type PerformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["perform"]>

  export type PerformSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type PerformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JoinIn?: boolean | Perform$JoinInArgs<ExtArgs>
    _count?: boolean | PerformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PerformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PerformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perform"
    objects: {
      JoinIn: Prisma.$JoinInPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["perform"]>
    composites: {}
  }

  type PerformGetPayload<S extends boolean | null | undefined | PerformDefaultArgs> = $Result.GetResult<Prisma.$PerformPayload, S>

  type PerformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PerformFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PerformCountAggregateInputType | true
    }

  export interface PerformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perform'], meta: { name: 'Perform' } }
    /**
     * Find zero or one Perform that matches the filter.
     * @param {PerformFindUniqueArgs} args - Arguments to find a Perform
     * @example
     * // Get one Perform
     * const perform = await prisma.perform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PerformFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PerformFindUniqueArgs<ExtArgs>>
    ): Prisma__PerformClient<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Perform that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PerformFindUniqueOrThrowArgs} args - Arguments to find a Perform
     * @example
     * // Get one Perform
     * const perform = await prisma.perform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PerformFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PerformFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PerformClient<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Perform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformFindFirstArgs} args - Arguments to find a Perform
     * @example
     * // Get one Perform
     * const perform = await prisma.perform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PerformFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PerformFindFirstArgs<ExtArgs>>
    ): Prisma__PerformClient<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Perform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformFindFirstOrThrowArgs} args - Arguments to find a Perform
     * @example
     * // Get one Perform
     * const perform = await prisma.perform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PerformFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PerformFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PerformClient<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Performs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Performs
     * const performs = await prisma.perform.findMany()
     * 
     * // Get first 10 Performs
     * const performs = await prisma.perform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const performWithIdOnly = await prisma.perform.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PerformFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerformFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Perform.
     * @param {PerformCreateArgs} args - Arguments to create a Perform.
     * @example
     * // Create one Perform
     * const Perform = await prisma.perform.create({
     *   data: {
     *     // ... data to create a Perform
     *   }
     * })
     * 
    **/
    create<T extends PerformCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PerformCreateArgs<ExtArgs>>
    ): Prisma__PerformClient<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Performs.
     * @param {PerformCreateManyArgs} args - Arguments to create many Performs.
     * @example
     * // Create many Performs
     * const perform = await prisma.perform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PerformCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerformCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Performs and returns the data saved in the database.
     * @param {PerformCreateManyAndReturnArgs} args - Arguments to create many Performs.
     * @example
     * // Create many Performs
     * const perform = await prisma.perform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Performs and only return the `id`
     * const performWithIdOnly = await prisma.perform.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PerformCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PerformCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Perform.
     * @param {PerformDeleteArgs} args - Arguments to delete one Perform.
     * @example
     * // Delete one Perform
     * const Perform = await prisma.perform.delete({
     *   where: {
     *     // ... filter to delete one Perform
     *   }
     * })
     * 
    **/
    delete<T extends PerformDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PerformDeleteArgs<ExtArgs>>
    ): Prisma__PerformClient<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Perform.
     * @param {PerformUpdateArgs} args - Arguments to update one Perform.
     * @example
     * // Update one Perform
     * const perform = await prisma.perform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PerformUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PerformUpdateArgs<ExtArgs>>
    ): Prisma__PerformClient<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Performs.
     * @param {PerformDeleteManyArgs} args - Arguments to filter Performs to delete.
     * @example
     * // Delete a few Performs
     * const { count } = await prisma.perform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PerformDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerformDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Performs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Performs
     * const perform = await prisma.perform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PerformUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PerformUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Perform.
     * @param {PerformUpsertArgs} args - Arguments to update or create a Perform.
     * @example
     * // Update or create a Perform
     * const perform = await prisma.perform.upsert({
     *   create: {
     *     // ... data to create a Perform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perform we want to update
     *   }
     * })
    **/
    upsert<T extends PerformUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PerformUpsertArgs<ExtArgs>>
    ): Prisma__PerformClient<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Performs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformCountArgs} args - Arguments to filter Performs to count.
     * @example
     * // Count the number of Performs
     * const count = await prisma.perform.count({
     *   where: {
     *     // ... the filter for the Performs we want to count
     *   }
     * })
    **/
    count<T extends PerformCountArgs>(
      args?: Subset<T, PerformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerformAggregateArgs>(args: Subset<T, PerformAggregateArgs>): Prisma.PrismaPromise<GetPerformAggregateType<T>>

    /**
     * Group by Perform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformGroupByArgs} args - Group by arguments.
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
      T extends PerformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerformGroupByArgs['orderBy'] }
        : { orderBy?: PerformGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perform model
   */
  readonly fields: PerformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    JoinIn<T extends Perform$JoinInArgs<ExtArgs> = {}>(args?: Subset<T, Perform$JoinInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Perform model
   */ 
  interface PerformFieldRefs {
    readonly id: FieldRef<"Perform", 'Int'>
    readonly name: FieldRef<"Perform", 'String'>
    readonly description: FieldRef<"Perform", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Perform findUnique
   */
  export type PerformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
    /**
     * Filter, which Perform to fetch.
     */
    where: PerformWhereUniqueInput
  }

  /**
   * Perform findUniqueOrThrow
   */
  export type PerformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
    /**
     * Filter, which Perform to fetch.
     */
    where: PerformWhereUniqueInput
  }

  /**
   * Perform findFirst
   */
  export type PerformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
    /**
     * Filter, which Perform to fetch.
     */
    where?: PerformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performs to fetch.
     */
    orderBy?: PerformOrderByWithRelationInput | PerformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Performs.
     */
    cursor?: PerformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Performs.
     */
    distinct?: PerformScalarFieldEnum | PerformScalarFieldEnum[]
  }

  /**
   * Perform findFirstOrThrow
   */
  export type PerformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
    /**
     * Filter, which Perform to fetch.
     */
    where?: PerformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performs to fetch.
     */
    orderBy?: PerformOrderByWithRelationInput | PerformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Performs.
     */
    cursor?: PerformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Performs.
     */
    distinct?: PerformScalarFieldEnum | PerformScalarFieldEnum[]
  }

  /**
   * Perform findMany
   */
  export type PerformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
    /**
     * Filter, which Performs to fetch.
     */
    where?: PerformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performs to fetch.
     */
    orderBy?: PerformOrderByWithRelationInput | PerformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Performs.
     */
    cursor?: PerformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performs.
     */
    skip?: number
    distinct?: PerformScalarFieldEnum | PerformScalarFieldEnum[]
  }

  /**
   * Perform create
   */
  export type PerformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
    /**
     * The data needed to create a Perform.
     */
    data: XOR<PerformCreateInput, PerformUncheckedCreateInput>
  }

  /**
   * Perform createMany
   */
  export type PerformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Performs.
     */
    data: PerformCreateManyInput | PerformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perform createManyAndReturn
   */
  export type PerformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Performs.
     */
    data: PerformCreateManyInput | PerformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perform update
   */
  export type PerformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
    /**
     * The data needed to update a Perform.
     */
    data: XOR<PerformUpdateInput, PerformUncheckedUpdateInput>
    /**
     * Choose, which Perform to update.
     */
    where: PerformWhereUniqueInput
  }

  /**
   * Perform updateMany
   */
  export type PerformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Performs.
     */
    data: XOR<PerformUpdateManyMutationInput, PerformUncheckedUpdateManyInput>
    /**
     * Filter which Performs to update
     */
    where?: PerformWhereInput
  }

  /**
   * Perform upsert
   */
  export type PerformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
    /**
     * The filter to search for the Perform to update in case it exists.
     */
    where: PerformWhereUniqueInput
    /**
     * In case the Perform found by the `where` argument doesn't exist, create a new Perform with this data.
     */
    create: XOR<PerformCreateInput, PerformUncheckedCreateInput>
    /**
     * In case the Perform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerformUpdateInput, PerformUncheckedUpdateInput>
  }

  /**
   * Perform delete
   */
  export type PerformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
    /**
     * Filter which Perform to delete.
     */
    where: PerformWhereUniqueInput
  }

  /**
   * Perform deleteMany
   */
  export type PerformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Performs to delete
     */
    where?: PerformWhereInput
  }

  /**
   * Perform.JoinIn
   */
  export type Perform$JoinInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    where?: JoinInWhereInput
    orderBy?: JoinInOrderByWithRelationInput | JoinInOrderByWithRelationInput[]
    cursor?: JoinInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinInScalarFieldEnum | JoinInScalarFieldEnum[]
  }

  /**
   * Perform without action
   */
  export type PerformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
  }


  /**
   * Model JoinIn
   */

  export type AggregateJoinIn = {
    _count: JoinInCountAggregateOutputType | null
    _avg: JoinInAvgAggregateOutputType | null
    _sum: JoinInSumAggregateOutputType | null
    _min: JoinInMinAggregateOutputType | null
    _max: JoinInMaxAggregateOutputType | null
  }

  export type JoinInAvgAggregateOutputType = {
    id: number | null
    memberId: number | null
    perfomId: number | null
  }

  export type JoinInSumAggregateOutputType = {
    id: number | null
    memberId: number | null
    perfomId: number | null
  }

  export type JoinInMinAggregateOutputType = {
    id: number | null
    memberId: number | null
    perfomId: number | null
  }

  export type JoinInMaxAggregateOutputType = {
    id: number | null
    memberId: number | null
    perfomId: number | null
  }

  export type JoinInCountAggregateOutputType = {
    id: number
    memberId: number
    perfomId: number
    _all: number
  }


  export type JoinInAvgAggregateInputType = {
    id?: true
    memberId?: true
    perfomId?: true
  }

  export type JoinInSumAggregateInputType = {
    id?: true
    memberId?: true
    perfomId?: true
  }

  export type JoinInMinAggregateInputType = {
    id?: true
    memberId?: true
    perfomId?: true
  }

  export type JoinInMaxAggregateInputType = {
    id?: true
    memberId?: true
    perfomId?: true
  }

  export type JoinInCountAggregateInputType = {
    id?: true
    memberId?: true
    perfomId?: true
    _all?: true
  }

  export type JoinInAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinIn to aggregate.
     */
    where?: JoinInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinIns to fetch.
     */
    orderBy?: JoinInOrderByWithRelationInput | JoinInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoinInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JoinIns
    **/
    _count?: true | JoinInCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JoinInAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JoinInSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoinInMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoinInMaxAggregateInputType
  }

  export type GetJoinInAggregateType<T extends JoinInAggregateArgs> = {
        [P in keyof T & keyof AggregateJoinIn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoinIn[P]>
      : GetScalarType<T[P], AggregateJoinIn[P]>
  }




  export type JoinInGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinInWhereInput
    orderBy?: JoinInOrderByWithAggregationInput | JoinInOrderByWithAggregationInput[]
    by: JoinInScalarFieldEnum[] | JoinInScalarFieldEnum
    having?: JoinInScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoinInCountAggregateInputType | true
    _avg?: JoinInAvgAggregateInputType
    _sum?: JoinInSumAggregateInputType
    _min?: JoinInMinAggregateInputType
    _max?: JoinInMaxAggregateInputType
  }

  export type JoinInGroupByOutputType = {
    id: number
    memberId: number | null
    perfomId: number | null
    _count: JoinInCountAggregateOutputType | null
    _avg: JoinInAvgAggregateOutputType | null
    _sum: JoinInSumAggregateOutputType | null
    _min: JoinInMinAggregateOutputType | null
    _max: JoinInMaxAggregateOutputType | null
  }

  type GetJoinInGroupByPayload<T extends JoinInGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoinInGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoinInGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoinInGroupByOutputType[P]>
            : GetScalarType<T[P], JoinInGroupByOutputType[P]>
        }
      >
    >


  export type JoinInSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    perfomId?: boolean
    member?: boolean | JoinIn$memberArgs<ExtArgs>
    perform?: boolean | JoinIn$performArgs<ExtArgs>
  }, ExtArgs["result"]["joinIn"]>

  export type JoinInSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    perfomId?: boolean
    member?: boolean | JoinIn$memberArgs<ExtArgs>
    perform?: boolean | JoinIn$performArgs<ExtArgs>
  }, ExtArgs["result"]["joinIn"]>

  export type JoinInSelectScalar = {
    id?: boolean
    memberId?: boolean
    perfomId?: boolean
  }

  export type JoinInInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | JoinIn$memberArgs<ExtArgs>
    perform?: boolean | JoinIn$performArgs<ExtArgs>
  }
  export type JoinInIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | JoinIn$memberArgs<ExtArgs>
    perform?: boolean | JoinIn$performArgs<ExtArgs>
  }

  export type $JoinInPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JoinIn"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs> | null
      perform: Prisma.$PerformPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      memberId: number | null
      perfomId: number | null
    }, ExtArgs["result"]["joinIn"]>
    composites: {}
  }

  type JoinInGetPayload<S extends boolean | null | undefined | JoinInDefaultArgs> = $Result.GetResult<Prisma.$JoinInPayload, S>

  type JoinInCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JoinInFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JoinInCountAggregateInputType | true
    }

  export interface JoinInDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JoinIn'], meta: { name: 'JoinIn' } }
    /**
     * Find zero or one JoinIn that matches the filter.
     * @param {JoinInFindUniqueArgs} args - Arguments to find a JoinIn
     * @example
     * // Get one JoinIn
     * const joinIn = await prisma.joinIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JoinInFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JoinInFindUniqueArgs<ExtArgs>>
    ): Prisma__JoinInClient<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one JoinIn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JoinInFindUniqueOrThrowArgs} args - Arguments to find a JoinIn
     * @example
     * // Get one JoinIn
     * const joinIn = await prisma.joinIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JoinInFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JoinInFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JoinInClient<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first JoinIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinInFindFirstArgs} args - Arguments to find a JoinIn
     * @example
     * // Get one JoinIn
     * const joinIn = await prisma.joinIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JoinInFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JoinInFindFirstArgs<ExtArgs>>
    ): Prisma__JoinInClient<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first JoinIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinInFindFirstOrThrowArgs} args - Arguments to find a JoinIn
     * @example
     * // Get one JoinIn
     * const joinIn = await prisma.joinIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JoinInFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JoinInFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JoinInClient<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more JoinIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JoinIns
     * const joinIns = await prisma.joinIn.findMany()
     * 
     * // Get first 10 JoinIns
     * const joinIns = await prisma.joinIn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const joinInWithIdOnly = await prisma.joinIn.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JoinInFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JoinInFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a JoinIn.
     * @param {JoinInCreateArgs} args - Arguments to create a JoinIn.
     * @example
     * // Create one JoinIn
     * const JoinIn = await prisma.joinIn.create({
     *   data: {
     *     // ... data to create a JoinIn
     *   }
     * })
     * 
    **/
    create<T extends JoinInCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JoinInCreateArgs<ExtArgs>>
    ): Prisma__JoinInClient<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many JoinIns.
     * @param {JoinInCreateManyArgs} args - Arguments to create many JoinIns.
     * @example
     * // Create many JoinIns
     * const joinIn = await prisma.joinIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends JoinInCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JoinInCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JoinIns and returns the data saved in the database.
     * @param {JoinInCreateManyAndReturnArgs} args - Arguments to create many JoinIns.
     * @example
     * // Create many JoinIns
     * const joinIn = await prisma.joinIn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JoinIns and only return the `id`
     * const joinInWithIdOnly = await prisma.joinIn.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends JoinInCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, JoinInCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a JoinIn.
     * @param {JoinInDeleteArgs} args - Arguments to delete one JoinIn.
     * @example
     * // Delete one JoinIn
     * const JoinIn = await prisma.joinIn.delete({
     *   where: {
     *     // ... filter to delete one JoinIn
     *   }
     * })
     * 
    **/
    delete<T extends JoinInDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JoinInDeleteArgs<ExtArgs>>
    ): Prisma__JoinInClient<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one JoinIn.
     * @param {JoinInUpdateArgs} args - Arguments to update one JoinIn.
     * @example
     * // Update one JoinIn
     * const joinIn = await prisma.joinIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JoinInUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JoinInUpdateArgs<ExtArgs>>
    ): Prisma__JoinInClient<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more JoinIns.
     * @param {JoinInDeleteManyArgs} args - Arguments to filter JoinIns to delete.
     * @example
     * // Delete a few JoinIns
     * const { count } = await prisma.joinIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JoinInDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JoinInDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JoinIns
     * const joinIn = await prisma.joinIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JoinInUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JoinInUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JoinIn.
     * @param {JoinInUpsertArgs} args - Arguments to update or create a JoinIn.
     * @example
     * // Update or create a JoinIn
     * const joinIn = await prisma.joinIn.upsert({
     *   create: {
     *     // ... data to create a JoinIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JoinIn we want to update
     *   }
     * })
    **/
    upsert<T extends JoinInUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JoinInUpsertArgs<ExtArgs>>
    ): Prisma__JoinInClient<$Result.GetResult<Prisma.$JoinInPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of JoinIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinInCountArgs} args - Arguments to filter JoinIns to count.
     * @example
     * // Count the number of JoinIns
     * const count = await prisma.joinIn.count({
     *   where: {
     *     // ... the filter for the JoinIns we want to count
     *   }
     * })
    **/
    count<T extends JoinInCountArgs>(
      args?: Subset<T, JoinInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoinInCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JoinIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JoinInAggregateArgs>(args: Subset<T, JoinInAggregateArgs>): Prisma.PrismaPromise<GetJoinInAggregateType<T>>

    /**
     * Group by JoinIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinInGroupByArgs} args - Group by arguments.
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
      T extends JoinInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoinInGroupByArgs['orderBy'] }
        : { orderBy?: JoinInGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JoinInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoinInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JoinIn model
   */
  readonly fields: JoinInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JoinIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoinInClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    member<T extends JoinIn$memberArgs<ExtArgs> = {}>(args?: Subset<T, JoinIn$memberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    perform<T extends JoinIn$performArgs<ExtArgs> = {}>(args?: Subset<T, JoinIn$performArgs<ExtArgs>>): Prisma__PerformClient<$Result.GetResult<Prisma.$PerformPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the JoinIn model
   */ 
  interface JoinInFieldRefs {
    readonly id: FieldRef<"JoinIn", 'Int'>
    readonly memberId: FieldRef<"JoinIn", 'Int'>
    readonly perfomId: FieldRef<"JoinIn", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JoinIn findUnique
   */
  export type JoinInFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    /**
     * Filter, which JoinIn to fetch.
     */
    where: JoinInWhereUniqueInput
  }

  /**
   * JoinIn findUniqueOrThrow
   */
  export type JoinInFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    /**
     * Filter, which JoinIn to fetch.
     */
    where: JoinInWhereUniqueInput
  }

  /**
   * JoinIn findFirst
   */
  export type JoinInFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    /**
     * Filter, which JoinIn to fetch.
     */
    where?: JoinInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinIns to fetch.
     */
    orderBy?: JoinInOrderByWithRelationInput | JoinInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinIns.
     */
    cursor?: JoinInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinIns.
     */
    distinct?: JoinInScalarFieldEnum | JoinInScalarFieldEnum[]
  }

  /**
   * JoinIn findFirstOrThrow
   */
  export type JoinInFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    /**
     * Filter, which JoinIn to fetch.
     */
    where?: JoinInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinIns to fetch.
     */
    orderBy?: JoinInOrderByWithRelationInput | JoinInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinIns.
     */
    cursor?: JoinInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinIns.
     */
    distinct?: JoinInScalarFieldEnum | JoinInScalarFieldEnum[]
  }

  /**
   * JoinIn findMany
   */
  export type JoinInFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    /**
     * Filter, which JoinIns to fetch.
     */
    where?: JoinInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinIns to fetch.
     */
    orderBy?: JoinInOrderByWithRelationInput | JoinInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JoinIns.
     */
    cursor?: JoinInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinIns.
     */
    skip?: number
    distinct?: JoinInScalarFieldEnum | JoinInScalarFieldEnum[]
  }

  /**
   * JoinIn create
   */
  export type JoinInCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    /**
     * The data needed to create a JoinIn.
     */
    data?: XOR<JoinInCreateInput, JoinInUncheckedCreateInput>
  }

  /**
   * JoinIn createMany
   */
  export type JoinInCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JoinIns.
     */
    data: JoinInCreateManyInput | JoinInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JoinIn createManyAndReturn
   */
  export type JoinInCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many JoinIns.
     */
    data: JoinInCreateManyInput | JoinInCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JoinIn update
   */
  export type JoinInUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    /**
     * The data needed to update a JoinIn.
     */
    data: XOR<JoinInUpdateInput, JoinInUncheckedUpdateInput>
    /**
     * Choose, which JoinIn to update.
     */
    where: JoinInWhereUniqueInput
  }

  /**
   * JoinIn updateMany
   */
  export type JoinInUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JoinIns.
     */
    data: XOR<JoinInUpdateManyMutationInput, JoinInUncheckedUpdateManyInput>
    /**
     * Filter which JoinIns to update
     */
    where?: JoinInWhereInput
  }

  /**
   * JoinIn upsert
   */
  export type JoinInUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    /**
     * The filter to search for the JoinIn to update in case it exists.
     */
    where: JoinInWhereUniqueInput
    /**
     * In case the JoinIn found by the `where` argument doesn't exist, create a new JoinIn with this data.
     */
    create: XOR<JoinInCreateInput, JoinInUncheckedCreateInput>
    /**
     * In case the JoinIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoinInUpdateInput, JoinInUncheckedUpdateInput>
  }

  /**
   * JoinIn delete
   */
  export type JoinInDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
    /**
     * Filter which JoinIn to delete.
     */
    where: JoinInWhereUniqueInput
  }

  /**
   * JoinIn deleteMany
   */
  export type JoinInDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinIns to delete
     */
    where?: JoinInWhereInput
  }

  /**
   * JoinIn.member
   */
  export type JoinIn$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * JoinIn.perform
   */
  export type JoinIn$performArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perform
     */
    select?: PerformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformInclude<ExtArgs> | null
    where?: PerformWhereInput
  }

  /**
   * JoinIn without action
   */
  export type JoinInDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinIn
     */
    select?: JoinInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinInInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MemberScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    type: 'type',
    class: 'class',
    school: 'school',
    createdAt: 'createdAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const CheckInScalarFieldEnum: {
    id: 'id',
    note: 'note',
    memberId: 'memberId',
    createdAt: 'createdAt'
  };

  export type CheckInScalarFieldEnum = (typeof CheckInScalarFieldEnum)[keyof typeof CheckInScalarFieldEnum]


  export const PerformScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type PerformScalarFieldEnum = (typeof PerformScalarFieldEnum)[keyof typeof PerformScalarFieldEnum]


  export const JoinInScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    perfomId: 'perfomId'
  };

  export type JoinInScalarFieldEnum = (typeof JoinInScalarFieldEnum)[keyof typeof JoinInScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: IntFilter<"Member"> | number
    fullname?: StringFilter<"Member"> | string
    type?: EnumTypeFilter<"Member"> | $Enums.Type
    class?: StringFilter<"Member"> | string
    school?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    CheckIn?: CheckInListRelationFilter
    JoinIn?: JoinInListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    type?: SortOrder
    class?: SortOrder
    school?: SortOrder
    createdAt?: SortOrder
    CheckIn?: CheckInOrderByRelationAggregateInput
    JoinIn?: JoinInOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    fullname?: StringFilter<"Member"> | string
    type?: EnumTypeFilter<"Member"> | $Enums.Type
    class?: StringFilter<"Member"> | string
    school?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    CheckIn?: CheckInListRelationFilter
    JoinIn?: JoinInListRelationFilter
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    type?: SortOrder
    class?: SortOrder
    school?: SortOrder
    createdAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Member"> | number
    fullname?: StringWithAggregatesFilter<"Member"> | string
    type?: EnumTypeWithAggregatesFilter<"Member"> | $Enums.Type
    class?: StringWithAggregatesFilter<"Member"> | string
    school?: StringWithAggregatesFilter<"Member"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type CheckInWhereInput = {
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    id?: IntFilter<"CheckIn"> | number
    note?: StringNullableFilter<"CheckIn"> | string | null
    memberId?: IntNullableFilter<"CheckIn"> | number | null
    createdAt?: DateTimeFilter<"CheckIn"> | Date | string
    member?: XOR<MemberNullableRelationFilter, MemberWhereInput> | null
  }

  export type CheckInOrderByWithRelationInput = {
    id?: SortOrder
    note?: SortOrderInput | SortOrder
    memberId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    member?: MemberOrderByWithRelationInput
  }

  export type CheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    note?: StringNullableFilter<"CheckIn"> | string | null
    memberId?: IntNullableFilter<"CheckIn"> | number | null
    createdAt?: DateTimeFilter<"CheckIn"> | Date | string
    member?: XOR<MemberNullableRelationFilter, MemberWhereInput> | null
  }, "id">

  export type CheckInOrderByWithAggregationInput = {
    id?: SortOrder
    note?: SortOrderInput | SortOrder
    memberId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CheckInCountOrderByAggregateInput
    _avg?: CheckInAvgOrderByAggregateInput
    _max?: CheckInMaxOrderByAggregateInput
    _min?: CheckInMinOrderByAggregateInput
    _sum?: CheckInSumOrderByAggregateInput
  }

  export type CheckInScalarWhereWithAggregatesInput = {
    AND?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    OR?: CheckInScalarWhereWithAggregatesInput[]
    NOT?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CheckIn"> | number
    note?: StringNullableWithAggregatesFilter<"CheckIn"> | string | null
    memberId?: IntNullableWithAggregatesFilter<"CheckIn"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CheckIn"> | Date | string
  }

  export type PerformWhereInput = {
    AND?: PerformWhereInput | PerformWhereInput[]
    OR?: PerformWhereInput[]
    NOT?: PerformWhereInput | PerformWhereInput[]
    id?: IntFilter<"Perform"> | number
    name?: StringFilter<"Perform"> | string
    description?: StringFilter<"Perform"> | string
    JoinIn?: JoinInListRelationFilter
  }

  export type PerformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    JoinIn?: JoinInOrderByRelationAggregateInput
  }

  export type PerformWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PerformWhereInput | PerformWhereInput[]
    OR?: PerformWhereInput[]
    NOT?: PerformWhereInput | PerformWhereInput[]
    name?: StringFilter<"Perform"> | string
    description?: StringFilter<"Perform"> | string
    JoinIn?: JoinInListRelationFilter
  }, "id">

  export type PerformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: PerformCountOrderByAggregateInput
    _avg?: PerformAvgOrderByAggregateInput
    _max?: PerformMaxOrderByAggregateInput
    _min?: PerformMinOrderByAggregateInput
    _sum?: PerformSumOrderByAggregateInput
  }

  export type PerformScalarWhereWithAggregatesInput = {
    AND?: PerformScalarWhereWithAggregatesInput | PerformScalarWhereWithAggregatesInput[]
    OR?: PerformScalarWhereWithAggregatesInput[]
    NOT?: PerformScalarWhereWithAggregatesInput | PerformScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Perform"> | number
    name?: StringWithAggregatesFilter<"Perform"> | string
    description?: StringWithAggregatesFilter<"Perform"> | string
  }

  export type JoinInWhereInput = {
    AND?: JoinInWhereInput | JoinInWhereInput[]
    OR?: JoinInWhereInput[]
    NOT?: JoinInWhereInput | JoinInWhereInput[]
    id?: IntFilter<"JoinIn"> | number
    memberId?: IntNullableFilter<"JoinIn"> | number | null
    perfomId?: IntNullableFilter<"JoinIn"> | number | null
    member?: XOR<MemberNullableRelationFilter, MemberWhereInput> | null
    perform?: XOR<PerformNullableRelationFilter, PerformWhereInput> | null
  }

  export type JoinInOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrderInput | SortOrder
    perfomId?: SortOrderInput | SortOrder
    member?: MemberOrderByWithRelationInput
    perform?: PerformOrderByWithRelationInput
  }

  export type JoinInWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JoinInWhereInput | JoinInWhereInput[]
    OR?: JoinInWhereInput[]
    NOT?: JoinInWhereInput | JoinInWhereInput[]
    memberId?: IntNullableFilter<"JoinIn"> | number | null
    perfomId?: IntNullableFilter<"JoinIn"> | number | null
    member?: XOR<MemberNullableRelationFilter, MemberWhereInput> | null
    perform?: XOR<PerformNullableRelationFilter, PerformWhereInput> | null
  }, "id">

  export type JoinInOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrderInput | SortOrder
    perfomId?: SortOrderInput | SortOrder
    _count?: JoinInCountOrderByAggregateInput
    _avg?: JoinInAvgOrderByAggregateInput
    _max?: JoinInMaxOrderByAggregateInput
    _min?: JoinInMinOrderByAggregateInput
    _sum?: JoinInSumOrderByAggregateInput
  }

  export type JoinInScalarWhereWithAggregatesInput = {
    AND?: JoinInScalarWhereWithAggregatesInput | JoinInScalarWhereWithAggregatesInput[]
    OR?: JoinInScalarWhereWithAggregatesInput[]
    NOT?: JoinInScalarWhereWithAggregatesInput | JoinInScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JoinIn"> | number
    memberId?: IntNullableWithAggregatesFilter<"JoinIn"> | number | null
    perfomId?: IntNullableWithAggregatesFilter<"JoinIn"> | number | null
  }

  export type MemberCreateInput = {
    fullname: string
    type?: $Enums.Type
    class: string
    school: string
    createdAt?: Date | string
    CheckIn?: CheckInCreateNestedManyWithoutMemberInput
    JoinIn?: JoinInCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: number
    fullname: string
    type?: $Enums.Type
    class: string
    school: string
    createdAt?: Date | string
    CheckIn?: CheckInUncheckedCreateNestedManyWithoutMemberInput
    JoinIn?: JoinInUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    class?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckIn?: CheckInUpdateManyWithoutMemberNestedInput
    JoinIn?: JoinInUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    class?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckIn?: CheckInUncheckedUpdateManyWithoutMemberNestedInput
    JoinIn?: JoinInUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: number
    fullname: string
    type?: $Enums.Type
    class: string
    school: string
    createdAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    class?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    class?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateInput = {
    note?: string | null
    createdAt?: Date | string
    member?: MemberCreateNestedOneWithoutCheckInInput
  }

  export type CheckInUncheckedCreateInput = {
    id?: number
    note?: string | null
    memberId?: number | null
    createdAt?: Date | string
  }

  export type CheckInUpdateInput = {
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneWithoutCheckInNestedInput
  }

  export type CheckInUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateManyInput = {
    id?: number
    note?: string | null
    memberId?: number | null
    createdAt?: Date | string
  }

  export type CheckInUpdateManyMutationInput = {
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformCreateInput = {
    name: string
    description: string
    JoinIn?: JoinInCreateNestedManyWithoutPerformInput
  }

  export type PerformUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    JoinIn?: JoinInUncheckedCreateNestedManyWithoutPerformInput
  }

  export type PerformUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    JoinIn?: JoinInUpdateManyWithoutPerformNestedInput
  }

  export type PerformUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    JoinIn?: JoinInUncheckedUpdateManyWithoutPerformNestedInput
  }

  export type PerformCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type PerformUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PerformUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type JoinInCreateInput = {
    member?: MemberCreateNestedOneWithoutJoinInInput
    perform?: PerformCreateNestedOneWithoutJoinInInput
  }

  export type JoinInUncheckedCreateInput = {
    id?: number
    memberId?: number | null
    perfomId?: number | null
  }

  export type JoinInUpdateInput = {
    member?: MemberUpdateOneWithoutJoinInNestedInput
    perform?: PerformUpdateOneWithoutJoinInNestedInput
  }

  export type JoinInUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    perfomId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JoinInCreateManyInput = {
    id?: number
    memberId?: number | null
    perfomId?: number | null
  }

  export type JoinInUpdateManyMutationInput = {

  }

  export type JoinInUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    perfomId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CheckInListRelationFilter = {
    every?: CheckInWhereInput
    some?: CheckInWhereInput
    none?: CheckInWhereInput
  }

  export type JoinInListRelationFilter = {
    every?: JoinInWhereInput
    some?: JoinInWhereInput
    none?: JoinInWhereInput
  }

  export type CheckInOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JoinInOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    type?: SortOrder
    class?: SortOrder
    school?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    type?: SortOrder
    class?: SortOrder
    school?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    type?: SortOrder
    class?: SortOrder
    school?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MemberNullableRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CheckInCountOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInAvgOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
  }

  export type CheckInMaxOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInMinOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInSumOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PerformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PerformAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PerformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PerformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PerformSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PerformNullableRelationFilter = {
    is?: PerformWhereInput | null
    isNot?: PerformWhereInput | null
  }

  export type JoinInCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    perfomId?: SortOrder
  }

  export type JoinInAvgOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    perfomId?: SortOrder
  }

  export type JoinInMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    perfomId?: SortOrder
  }

  export type JoinInMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    perfomId?: SortOrder
  }

  export type JoinInSumOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    perfomId?: SortOrder
  }

  export type CheckInCreateNestedManyWithoutMemberInput = {
    create?: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput> | CheckInCreateWithoutMemberInput[] | CheckInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMemberInput | CheckInCreateOrConnectWithoutMemberInput[]
    createMany?: CheckInCreateManyMemberInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type JoinInCreateNestedManyWithoutMemberInput = {
    create?: XOR<JoinInCreateWithoutMemberInput, JoinInUncheckedCreateWithoutMemberInput> | JoinInCreateWithoutMemberInput[] | JoinInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: JoinInCreateOrConnectWithoutMemberInput | JoinInCreateOrConnectWithoutMemberInput[]
    createMany?: JoinInCreateManyMemberInputEnvelope
    connect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput> | CheckInCreateWithoutMemberInput[] | CheckInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMemberInput | CheckInCreateOrConnectWithoutMemberInput[]
    createMany?: CheckInCreateManyMemberInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type JoinInUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<JoinInCreateWithoutMemberInput, JoinInUncheckedCreateWithoutMemberInput> | JoinInCreateWithoutMemberInput[] | JoinInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: JoinInCreateOrConnectWithoutMemberInput | JoinInCreateOrConnectWithoutMemberInput[]
    createMany?: JoinInCreateManyMemberInputEnvelope
    connect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CheckInUpdateManyWithoutMemberNestedInput = {
    create?: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput> | CheckInCreateWithoutMemberInput[] | CheckInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMemberInput | CheckInCreateOrConnectWithoutMemberInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutMemberInput | CheckInUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: CheckInCreateManyMemberInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutMemberInput | CheckInUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutMemberInput | CheckInUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type JoinInUpdateManyWithoutMemberNestedInput = {
    create?: XOR<JoinInCreateWithoutMemberInput, JoinInUncheckedCreateWithoutMemberInput> | JoinInCreateWithoutMemberInput[] | JoinInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: JoinInCreateOrConnectWithoutMemberInput | JoinInCreateOrConnectWithoutMemberInput[]
    upsert?: JoinInUpsertWithWhereUniqueWithoutMemberInput | JoinInUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: JoinInCreateManyMemberInputEnvelope
    set?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    disconnect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    delete?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    connect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    update?: JoinInUpdateWithWhereUniqueWithoutMemberInput | JoinInUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: JoinInUpdateManyWithWhereWithoutMemberInput | JoinInUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: JoinInScalarWhereInput | JoinInScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CheckInUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput> | CheckInCreateWithoutMemberInput[] | CheckInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMemberInput | CheckInCreateOrConnectWithoutMemberInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutMemberInput | CheckInUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: CheckInCreateManyMemberInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutMemberInput | CheckInUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutMemberInput | CheckInUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type JoinInUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<JoinInCreateWithoutMemberInput, JoinInUncheckedCreateWithoutMemberInput> | JoinInCreateWithoutMemberInput[] | JoinInUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: JoinInCreateOrConnectWithoutMemberInput | JoinInCreateOrConnectWithoutMemberInput[]
    upsert?: JoinInUpsertWithWhereUniqueWithoutMemberInput | JoinInUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: JoinInCreateManyMemberInputEnvelope
    set?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    disconnect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    delete?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    connect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    update?: JoinInUpdateWithWhereUniqueWithoutMemberInput | JoinInUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: JoinInUpdateManyWithWhereWithoutMemberInput | JoinInUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: JoinInScalarWhereInput | JoinInScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutCheckInInput = {
    create?: XOR<MemberCreateWithoutCheckInInput, MemberUncheckedCreateWithoutCheckInInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCheckInInput
    connect?: MemberWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MemberUpdateOneWithoutCheckInNestedInput = {
    create?: XOR<MemberCreateWithoutCheckInInput, MemberUncheckedCreateWithoutCheckInInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCheckInInput
    upsert?: MemberUpsertWithoutCheckInInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutCheckInInput, MemberUpdateWithoutCheckInInput>, MemberUncheckedUpdateWithoutCheckInInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JoinInCreateNestedManyWithoutPerformInput = {
    create?: XOR<JoinInCreateWithoutPerformInput, JoinInUncheckedCreateWithoutPerformInput> | JoinInCreateWithoutPerformInput[] | JoinInUncheckedCreateWithoutPerformInput[]
    connectOrCreate?: JoinInCreateOrConnectWithoutPerformInput | JoinInCreateOrConnectWithoutPerformInput[]
    createMany?: JoinInCreateManyPerformInputEnvelope
    connect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
  }

  export type JoinInUncheckedCreateNestedManyWithoutPerformInput = {
    create?: XOR<JoinInCreateWithoutPerformInput, JoinInUncheckedCreateWithoutPerformInput> | JoinInCreateWithoutPerformInput[] | JoinInUncheckedCreateWithoutPerformInput[]
    connectOrCreate?: JoinInCreateOrConnectWithoutPerformInput | JoinInCreateOrConnectWithoutPerformInput[]
    createMany?: JoinInCreateManyPerformInputEnvelope
    connect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
  }

  export type JoinInUpdateManyWithoutPerformNestedInput = {
    create?: XOR<JoinInCreateWithoutPerformInput, JoinInUncheckedCreateWithoutPerformInput> | JoinInCreateWithoutPerformInput[] | JoinInUncheckedCreateWithoutPerformInput[]
    connectOrCreate?: JoinInCreateOrConnectWithoutPerformInput | JoinInCreateOrConnectWithoutPerformInput[]
    upsert?: JoinInUpsertWithWhereUniqueWithoutPerformInput | JoinInUpsertWithWhereUniqueWithoutPerformInput[]
    createMany?: JoinInCreateManyPerformInputEnvelope
    set?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    disconnect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    delete?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    connect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    update?: JoinInUpdateWithWhereUniqueWithoutPerformInput | JoinInUpdateWithWhereUniqueWithoutPerformInput[]
    updateMany?: JoinInUpdateManyWithWhereWithoutPerformInput | JoinInUpdateManyWithWhereWithoutPerformInput[]
    deleteMany?: JoinInScalarWhereInput | JoinInScalarWhereInput[]
  }

  export type JoinInUncheckedUpdateManyWithoutPerformNestedInput = {
    create?: XOR<JoinInCreateWithoutPerformInput, JoinInUncheckedCreateWithoutPerformInput> | JoinInCreateWithoutPerformInput[] | JoinInUncheckedCreateWithoutPerformInput[]
    connectOrCreate?: JoinInCreateOrConnectWithoutPerformInput | JoinInCreateOrConnectWithoutPerformInput[]
    upsert?: JoinInUpsertWithWhereUniqueWithoutPerformInput | JoinInUpsertWithWhereUniqueWithoutPerformInput[]
    createMany?: JoinInCreateManyPerformInputEnvelope
    set?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    disconnect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    delete?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    connect?: JoinInWhereUniqueInput | JoinInWhereUniqueInput[]
    update?: JoinInUpdateWithWhereUniqueWithoutPerformInput | JoinInUpdateWithWhereUniqueWithoutPerformInput[]
    updateMany?: JoinInUpdateManyWithWhereWithoutPerformInput | JoinInUpdateManyWithWhereWithoutPerformInput[]
    deleteMany?: JoinInScalarWhereInput | JoinInScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutJoinInInput = {
    create?: XOR<MemberCreateWithoutJoinInInput, MemberUncheckedCreateWithoutJoinInInput>
    connectOrCreate?: MemberCreateOrConnectWithoutJoinInInput
    connect?: MemberWhereUniqueInput
  }

  export type PerformCreateNestedOneWithoutJoinInInput = {
    create?: XOR<PerformCreateWithoutJoinInInput, PerformUncheckedCreateWithoutJoinInInput>
    connectOrCreate?: PerformCreateOrConnectWithoutJoinInInput
    connect?: PerformWhereUniqueInput
  }

  export type MemberUpdateOneWithoutJoinInNestedInput = {
    create?: XOR<MemberCreateWithoutJoinInInput, MemberUncheckedCreateWithoutJoinInInput>
    connectOrCreate?: MemberCreateOrConnectWithoutJoinInInput
    upsert?: MemberUpsertWithoutJoinInInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutJoinInInput, MemberUpdateWithoutJoinInInput>, MemberUncheckedUpdateWithoutJoinInInput>
  }

  export type PerformUpdateOneWithoutJoinInNestedInput = {
    create?: XOR<PerformCreateWithoutJoinInInput, PerformUncheckedCreateWithoutJoinInInput>
    connectOrCreate?: PerformCreateOrConnectWithoutJoinInInput
    upsert?: PerformUpsertWithoutJoinInInput
    disconnect?: PerformWhereInput | boolean
    delete?: PerformWhereInput | boolean
    connect?: PerformWhereUniqueInput
    update?: XOR<XOR<PerformUpdateToOneWithWhereWithoutJoinInInput, PerformUpdateWithoutJoinInInput>, PerformUncheckedUpdateWithoutJoinInInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CheckInCreateWithoutMemberInput = {
    note?: string | null
    createdAt?: Date | string
  }

  export type CheckInUncheckedCreateWithoutMemberInput = {
    id?: number
    note?: string | null
    createdAt?: Date | string
  }

  export type CheckInCreateOrConnectWithoutMemberInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput>
  }

  export type CheckInCreateManyMemberInputEnvelope = {
    data: CheckInCreateManyMemberInput | CheckInCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type JoinInCreateWithoutMemberInput = {
    perform?: PerformCreateNestedOneWithoutJoinInInput
  }

  export type JoinInUncheckedCreateWithoutMemberInput = {
    id?: number
    perfomId?: number | null
  }

  export type JoinInCreateOrConnectWithoutMemberInput = {
    where: JoinInWhereUniqueInput
    create: XOR<JoinInCreateWithoutMemberInput, JoinInUncheckedCreateWithoutMemberInput>
  }

  export type JoinInCreateManyMemberInputEnvelope = {
    data: JoinInCreateManyMemberInput | JoinInCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type CheckInUpsertWithWhereUniqueWithoutMemberInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutMemberInput, CheckInUncheckedUpdateWithoutMemberInput>
    create: XOR<CheckInCreateWithoutMemberInput, CheckInUncheckedCreateWithoutMemberInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutMemberInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutMemberInput, CheckInUncheckedUpdateWithoutMemberInput>
  }

  export type CheckInUpdateManyWithWhereWithoutMemberInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutMemberInput>
  }

  export type CheckInScalarWhereInput = {
    AND?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    OR?: CheckInScalarWhereInput[]
    NOT?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    id?: IntFilter<"CheckIn"> | number
    note?: StringNullableFilter<"CheckIn"> | string | null
    memberId?: IntNullableFilter<"CheckIn"> | number | null
    createdAt?: DateTimeFilter<"CheckIn"> | Date | string
  }

  export type JoinInUpsertWithWhereUniqueWithoutMemberInput = {
    where: JoinInWhereUniqueInput
    update: XOR<JoinInUpdateWithoutMemberInput, JoinInUncheckedUpdateWithoutMemberInput>
    create: XOR<JoinInCreateWithoutMemberInput, JoinInUncheckedCreateWithoutMemberInput>
  }

  export type JoinInUpdateWithWhereUniqueWithoutMemberInput = {
    where: JoinInWhereUniqueInput
    data: XOR<JoinInUpdateWithoutMemberInput, JoinInUncheckedUpdateWithoutMemberInput>
  }

  export type JoinInUpdateManyWithWhereWithoutMemberInput = {
    where: JoinInScalarWhereInput
    data: XOR<JoinInUpdateManyMutationInput, JoinInUncheckedUpdateManyWithoutMemberInput>
  }

  export type JoinInScalarWhereInput = {
    AND?: JoinInScalarWhereInput | JoinInScalarWhereInput[]
    OR?: JoinInScalarWhereInput[]
    NOT?: JoinInScalarWhereInput | JoinInScalarWhereInput[]
    id?: IntFilter<"JoinIn"> | number
    memberId?: IntNullableFilter<"JoinIn"> | number | null
    perfomId?: IntNullableFilter<"JoinIn"> | number | null
  }

  export type MemberCreateWithoutCheckInInput = {
    fullname: string
    type?: $Enums.Type
    class: string
    school: string
    createdAt?: Date | string
    JoinIn?: JoinInCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutCheckInInput = {
    id?: number
    fullname: string
    type?: $Enums.Type
    class: string
    school: string
    createdAt?: Date | string
    JoinIn?: JoinInUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutCheckInInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCheckInInput, MemberUncheckedCreateWithoutCheckInInput>
  }

  export type MemberUpsertWithoutCheckInInput = {
    update: XOR<MemberUpdateWithoutCheckInInput, MemberUncheckedUpdateWithoutCheckInInput>
    create: XOR<MemberCreateWithoutCheckInInput, MemberUncheckedCreateWithoutCheckInInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutCheckInInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutCheckInInput, MemberUncheckedUpdateWithoutCheckInInput>
  }

  export type MemberUpdateWithoutCheckInInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    class?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JoinIn?: JoinInUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutCheckInInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    class?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JoinIn?: JoinInUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type JoinInCreateWithoutPerformInput = {
    member?: MemberCreateNestedOneWithoutJoinInInput
  }

  export type JoinInUncheckedCreateWithoutPerformInput = {
    id?: number
    memberId?: number | null
  }

  export type JoinInCreateOrConnectWithoutPerformInput = {
    where: JoinInWhereUniqueInput
    create: XOR<JoinInCreateWithoutPerformInput, JoinInUncheckedCreateWithoutPerformInput>
  }

  export type JoinInCreateManyPerformInputEnvelope = {
    data: JoinInCreateManyPerformInput | JoinInCreateManyPerformInput[]
    skipDuplicates?: boolean
  }

  export type JoinInUpsertWithWhereUniqueWithoutPerformInput = {
    where: JoinInWhereUniqueInput
    update: XOR<JoinInUpdateWithoutPerformInput, JoinInUncheckedUpdateWithoutPerformInput>
    create: XOR<JoinInCreateWithoutPerformInput, JoinInUncheckedCreateWithoutPerformInput>
  }

  export type JoinInUpdateWithWhereUniqueWithoutPerformInput = {
    where: JoinInWhereUniqueInput
    data: XOR<JoinInUpdateWithoutPerformInput, JoinInUncheckedUpdateWithoutPerformInput>
  }

  export type JoinInUpdateManyWithWhereWithoutPerformInput = {
    where: JoinInScalarWhereInput
    data: XOR<JoinInUpdateManyMutationInput, JoinInUncheckedUpdateManyWithoutPerformInput>
  }

  export type MemberCreateWithoutJoinInInput = {
    fullname: string
    type?: $Enums.Type
    class: string
    school: string
    createdAt?: Date | string
    CheckIn?: CheckInCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutJoinInInput = {
    id?: number
    fullname: string
    type?: $Enums.Type
    class: string
    school: string
    createdAt?: Date | string
    CheckIn?: CheckInUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutJoinInInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutJoinInInput, MemberUncheckedCreateWithoutJoinInInput>
  }

  export type PerformCreateWithoutJoinInInput = {
    name: string
    description: string
  }

  export type PerformUncheckedCreateWithoutJoinInInput = {
    id?: number
    name: string
    description: string
  }

  export type PerformCreateOrConnectWithoutJoinInInput = {
    where: PerformWhereUniqueInput
    create: XOR<PerformCreateWithoutJoinInInput, PerformUncheckedCreateWithoutJoinInInput>
  }

  export type MemberUpsertWithoutJoinInInput = {
    update: XOR<MemberUpdateWithoutJoinInInput, MemberUncheckedUpdateWithoutJoinInInput>
    create: XOR<MemberCreateWithoutJoinInInput, MemberUncheckedCreateWithoutJoinInInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutJoinInInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutJoinInInput, MemberUncheckedUpdateWithoutJoinInInput>
  }

  export type MemberUpdateWithoutJoinInInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    class?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckIn?: CheckInUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutJoinInInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    class?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckIn?: CheckInUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type PerformUpsertWithoutJoinInInput = {
    update: XOR<PerformUpdateWithoutJoinInInput, PerformUncheckedUpdateWithoutJoinInInput>
    create: XOR<PerformCreateWithoutJoinInInput, PerformUncheckedCreateWithoutJoinInInput>
    where?: PerformWhereInput
  }

  export type PerformUpdateToOneWithWhereWithoutJoinInInput = {
    where?: PerformWhereInput
    data: XOR<PerformUpdateWithoutJoinInInput, PerformUncheckedUpdateWithoutJoinInInput>
  }

  export type PerformUpdateWithoutJoinInInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PerformUncheckedUpdateWithoutJoinInInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CheckInCreateManyMemberInput = {
    id?: number
    note?: string | null
    createdAt?: Date | string
  }

  export type JoinInCreateManyMemberInput = {
    id?: number
    perfomId?: number | null
  }

  export type CheckInUpdateWithoutMemberInput = {
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinInUpdateWithoutMemberInput = {
    perform?: PerformUpdateOneWithoutJoinInNestedInput
  }

  export type JoinInUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    perfomId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JoinInUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    perfomId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JoinInCreateManyPerformInput = {
    id?: number
    memberId?: number | null
  }

  export type JoinInUpdateWithoutPerformInput = {
    member?: MemberUpdateOneWithoutJoinInNestedInput
  }

  export type JoinInUncheckedUpdateWithoutPerformInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JoinInUncheckedUpdateManyWithoutPerformInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MemberCountOutputTypeDefaultArgs instead
     */
    export type MemberCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PerformCountOutputTypeDefaultArgs instead
     */
    export type PerformCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PerformCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemberDefaultArgs instead
     */
    export type MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckInDefaultArgs instead
     */
    export type CheckInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckInDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PerformDefaultArgs instead
     */
    export type PerformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PerformDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JoinInDefaultArgs instead
     */
    export type JoinInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JoinInDefaultArgs<ExtArgs>

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