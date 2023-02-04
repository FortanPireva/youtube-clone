
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  createdAt: Date
  username: string
  email: string
  avatar: string
  cover: string
  about: string
}

/**
 * Model Comment
 * 
 */
export type Comment = {
  id: string
  createdAt: Date
  text: string
  userId: string
  videoId: string
}

/**
 * Model Subscription
 * 
 */
export type Subscription = {
  id: string
  createdAt: Date
  subscriberId: string
  subscribedToId: string
}

/**
 * Model Video
 * 
 */
export type Video = {
  id: string
  createdAt: Date
  title: string
  description: string | null
  url: string
  thumbnail: string
  userId: string
}

/**
 * Model VideoLike
 * 
 */
export type VideoLike = {
  id: string
  createdAt: Date
  like: number
  userId: string
  videoId: string
}

/**
 * Model View
 * 
 */
export type View = {
  id: string
  createdAt: Date
  userId: string | null
  videoId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<GlobalReject>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<GlobalReject>;

  /**
   * `prisma.videoLike`: Exposes CRUD operations for the **VideoLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoLikes
    * const videoLikes = await prisma.videoLike.findMany()
    * ```
    */
  get videoLike(): Prisma.VideoLikeDelegate<GlobalReject>;

  /**
   * `prisma.view`: Exposes CRUD operations for the **View** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.view.findMany()
    * ```
    */
  get view(): Prisma.ViewDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Comment: 'Comment',
    Subscription: 'Subscription',
    Video: 'Video',
    VideoLike: 'VideoLike',
    View: 'View'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    videos: number
    videoLikes: number
    comments: number
    subscribers: number
    subscribedTo: number
    views: number
  }

  export type UserCountOutputTypeSelect = {
    videos?: boolean
    videoLikes?: boolean
    comments?: boolean
    subscribers?: boolean
    subscribedTo?: boolean
    views?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type VideoCountOutputType
   */


  export type VideoCountOutputType = {
    videoLikes: number
    comments: number
    views: number
  }

  export type VideoCountOutputTypeSelect = {
    videoLikes?: boolean
    comments?: boolean
    views?: boolean
  }

  export type VideoCountOutputTypeGetPayload<S extends boolean | null | undefined | VideoCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VideoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VideoCountOutputTypeArgs)
    ? VideoCountOutputType 
    : S extends { select: any } & (VideoCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VideoCountOutputType ? VideoCountOutputType[P] : never
  } 
      : VideoCountOutputType




  // Custom InputTypes

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    username: string | null
    email: string | null
    avatar: string | null
    cover: string | null
    about: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    username: string | null
    email: string | null
    avatar: string | null
    cover: string | null
    about: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    username: number
    email: number
    avatar: number
    cover: number
    about: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    email?: true
    avatar?: true
    cover?: true
    about?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    email?: true
    avatar?: true
    cover?: true
    about?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    email?: true
    avatar?: true
    cover?: true
    about?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    username: string
    email: string
    avatar: string
    cover: string
    about: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    username?: boolean
    email?: boolean
    avatar?: boolean
    cover?: boolean
    about?: boolean
    videos?: boolean | User$videosArgs
    videoLikes?: boolean | User$videoLikesArgs
    comments?: boolean | User$commentsArgs
    subscribers?: boolean | User$subscribersArgs
    subscribedTo?: boolean | User$subscribedToArgs
    views?: boolean | User$viewsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    videos?: boolean | User$videosArgs
    videoLikes?: boolean | User$videoLikesArgs
    comments?: boolean | User$commentsArgs
    subscribers?: boolean | User$subscribersArgs
    subscribedTo?: boolean | User$subscribedToArgs
    views?: boolean | User$viewsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'videos' ? Array < VideoGetPayload<S['include'][P]>>  :
        P extends 'videoLikes' ? Array < VideoLikeGetPayload<S['include'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'subscribers' ? Array < SubscriptionGetPayload<S['include'][P]>>  :
        P extends 'subscribedTo' ? Array < SubscriptionGetPayload<S['include'][P]>>  :
        P extends 'views' ? Array < ViewGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'videos' ? Array < VideoGetPayload<S['select'][P]>>  :
        P extends 'videoLikes' ? Array < VideoLikeGetPayload<S['select'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'subscribers' ? Array < SubscriptionGetPayload<S['select'][P]>>  :
        P extends 'subscribedTo' ? Array < SubscriptionGetPayload<S['select'][P]>>  :
        P extends 'views' ? Array < ViewGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    videos<T extends User$videosArgs= {}>(args?: Subset<T, User$videosArgs>): PrismaPromise<Array<VideoGetPayload<T>>| Null>;

    videoLikes<T extends User$videoLikesArgs= {}>(args?: Subset<T, User$videoLikesArgs>): PrismaPromise<Array<VideoLikeGetPayload<T>>| Null>;

    comments<T extends User$commentsArgs= {}>(args?: Subset<T, User$commentsArgs>): PrismaPromise<Array<CommentGetPayload<T>>| Null>;

    subscribers<T extends User$subscribersArgs= {}>(args?: Subset<T, User$subscribersArgs>): PrismaPromise<Array<SubscriptionGetPayload<T>>| Null>;

    subscribedTo<T extends User$subscribedToArgs= {}>(args?: Subset<T, User$subscribedToArgs>): PrismaPromise<Array<SubscriptionGetPayload<T>>| Null>;

    views<T extends User$viewsArgs= {}>(args?: Subset<T, User$viewsArgs>): PrismaPromise<Array<ViewGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.videos
   */
  export type User$videosArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    where?: VideoWhereInput
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VideoScalarFieldEnum>
  }


  /**
   * User.videoLikes
   */
  export type User$videoLikesArgs = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    where?: VideoLikeWhereInput
    orderBy?: Enumerable<VideoLikeOrderByWithRelationInput>
    cursor?: VideoLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VideoLikeScalarFieldEnum>
  }


  /**
   * User.comments
   */
  export type User$commentsArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * User.subscribers
   */
  export type User$subscribersArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    where?: SubscriptionWhereInput
    orderBy?: Enumerable<SubscriptionOrderByWithRelationInput>
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SubscriptionScalarFieldEnum>
  }


  /**
   * User.subscribedTo
   */
  export type User$subscribedToArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    where?: SubscriptionWhereInput
    orderBy?: Enumerable<SubscriptionOrderByWithRelationInput>
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SubscriptionScalarFieldEnum>
  }


  /**
   * User.views
   */
  export type User$viewsArgs = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    where?: ViewWhereInput
    orderBy?: Enumerable<ViewOrderByWithRelationInput>
    cursor?: ViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ViewScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    text: string | null
    userId: string | null
    videoId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    text: string | null
    userId: string | null
    videoId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    createdAt: number
    text: number
    userId: number
    videoId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    createdAt?: true
    text?: true
    userId?: true
    videoId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    text?: true
    userId?: true
    videoId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    createdAt?: true
    text?: true
    userId?: true
    videoId?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithAggregationInput>
    by: CommentScalarFieldEnum[]
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: string
    createdAt: Date
    text: string
    userId: string
    videoId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect = {
    id?: boolean
    createdAt?: boolean
    text?: boolean
    userId?: boolean
    videoId?: boolean
    user?: boolean | UserArgs
    video?: boolean | VideoArgs
  }


  export type CommentInclude = {
    user?: boolean | UserArgs
    video?: boolean | VideoArgs
  }

  export type CommentGetPayload<S extends boolean | null | undefined | CommentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Comment :
    S extends undefined ? never :
    S extends { include: any } & (CommentArgs | CommentFindManyArgs)
    ? Comment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'video' ? VideoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CommentArgs | CommentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'video' ? VideoGetPayload<S['select'][P]> :  P extends keyof Comment ? Comment[P] : never
  } 
      : Comment


  type CommentCountArgs = 
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? Prisma__CommentClient<CommentGetPayload<T>> : Prisma__CommentClient<CommentGetPayload<T> | null, null>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? Prisma__CommentClient<CommentGetPayload<T>> : Prisma__CommentClient<CommentGetPayload<T> | null, null>

    /**
     * Find the first Comment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): PrismaPromise<Array<CommentGetPayload<T>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    video<T extends VideoArgs= {}>(args?: Subset<T, VideoArgs>): Prisma__VideoClient<VideoGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Comment base type for findUnique actions
   */
  export type CommentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUnique
   */
  export interface CommentFindUniqueArgs extends CommentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment base type for findFirst actions
   */
  export type CommentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: Enumerable<CommentScalarFieldEnum>
  }

  /**
   * Comment findFirst
   */
  export interface CommentFindFirstArgs extends CommentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    /**
     * The data used to create many Comments.
     */
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
  }



  /**
   * Model Subscription
   */


  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    subscriberId: string | null
    subscribedToId: string | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    subscriberId: string | null
    subscribedToId: string | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    createdAt: number
    subscriberId: number
    subscribedToId: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    createdAt?: true
    subscriberId?: true
    subscribedToId?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    subscriberId?: true
    subscribedToId?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    createdAt?: true
    subscriberId?: true
    subscribedToId?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: Enumerable<SubscriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs = {
    where?: SubscriptionWhereInput
    orderBy?: Enumerable<SubscriptionOrderByWithAggregationInput>
    by: SubscriptionScalarFieldEnum[]
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }


  export type SubscriptionGroupByOutputType = {
    id: string
    createdAt: Date
    subscriberId: string
    subscribedToId: string
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect = {
    id?: boolean
    createdAt?: boolean
    subscriberId?: boolean
    subscribedToId?: boolean
    subscriber?: boolean | UserArgs
    subscribedTo?: boolean | UserArgs
  }


  export type SubscriptionInclude = {
    subscriber?: boolean | UserArgs
    subscribedTo?: boolean | UserArgs
  }

  export type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Subscription :
    S extends undefined ? never :
    S extends { include: any } & (SubscriptionArgs | SubscriptionFindManyArgs)
    ? Subscription  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'subscriber' ? UserGetPayload<S['include'][P]> :
        P extends 'subscribedTo' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SubscriptionArgs | SubscriptionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'subscriber' ? UserGetPayload<S['select'][P]> :
        P extends 'subscribedTo' ? UserGetPayload<S['select'][P]> :  P extends keyof Subscription ? Subscription[P] : never
  } 
      : Subscription


  type SubscriptionCountArgs = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubscriptionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SubscriptionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Subscription'> extends True ? Prisma__SubscriptionClient<SubscriptionGetPayload<T>> : Prisma__SubscriptionClient<SubscriptionGetPayload<T> | null, null>

    /**
     * Find one Subscription that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs>
    ): Prisma__SubscriptionClient<SubscriptionGetPayload<T>>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubscriptionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SubscriptionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Subscription'> extends True ? Prisma__SubscriptionClient<SubscriptionGetPayload<T>> : Prisma__SubscriptionClient<SubscriptionGetPayload<T> | null, null>

    /**
     * Find the first Subscription that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs>
    ): Prisma__SubscriptionClient<SubscriptionGetPayload<T>>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubscriptionFindManyArgs>(
      args?: SelectSubset<T, SubscriptionFindManyArgs>
    ): PrismaPromise<Array<SubscriptionGetPayload<T>>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
    **/
    create<T extends SubscriptionCreateArgs>(
      args: SelectSubset<T, SubscriptionCreateArgs>
    ): Prisma__SubscriptionClient<SubscriptionGetPayload<T>>

    /**
     * Create many Subscriptions.
     *     @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     *     @example
     *     // Create many Subscriptions
     *     const subscription = await prisma.subscription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubscriptionCreateManyArgs>(
      args?: SelectSubset<T, SubscriptionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
    **/
    delete<T extends SubscriptionDeleteArgs>(
      args: SelectSubset<T, SubscriptionDeleteArgs>
    ): Prisma__SubscriptionClient<SubscriptionGetPayload<T>>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubscriptionUpdateArgs>(
      args: SelectSubset<T, SubscriptionUpdateArgs>
    ): Prisma__SubscriptionClient<SubscriptionGetPayload<T>>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubscriptionDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubscriptionUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
    **/
    upsert<T extends SubscriptionUpsertArgs>(
      args: SelectSubset<T, SubscriptionUpsertArgs>
    ): Prisma__SubscriptionClient<SubscriptionGetPayload<T>>

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SubscriptionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    subscriber<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    subscribedTo<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Subscription base type for findUnique actions
   */
  export type SubscriptionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUnique
   */
  export interface SubscriptionFindUniqueArgs extends SubscriptionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }


  /**
   * Subscription base type for findFirst actions
   */
  export type SubscriptionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: Enumerable<SubscriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: Enumerable<SubscriptionScalarFieldEnum>
  }

  /**
   * Subscription findFirst
   */
  export interface SubscriptionFindFirstArgs extends SubscriptionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: Enumerable<SubscriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: Enumerable<SubscriptionScalarFieldEnum>
  }


  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: Enumerable<SubscriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: Enumerable<SubscriptionScalarFieldEnum>
  }


  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }


  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs = {
    /**
     * The data used to create many Subscriptions.
     */
    data: Enumerable<SubscriptionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }


  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }


  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }


  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }


  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }


  /**
   * Subscription without action
   */
  export type SubscriptionArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude | null
  }



  /**
   * Model Video
   */


  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    description: string | null
    url: string | null
    thumbnail: string | null
    userId: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    description: string | null
    url: string | null
    thumbnail: string | null
    userId: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    description: number
    url: number
    thumbnail: number
    userId: number
    _all: number
  }


  export type VideoMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    description?: true
    url?: true
    thumbnail?: true
    userId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    description?: true
    url?: true
    thumbnail?: true
    userId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    description?: true
    url?: true
    thumbnail?: true
    userId?: true
    _all?: true
  }

  export type VideoAggregateArgs = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs = {
    where?: VideoWhereInput
    orderBy?: Enumerable<VideoOrderByWithAggregationInput>
    by: VideoScalarFieldEnum[]
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }


  export type VideoGroupByOutputType = {
    id: string
    createdAt: Date
    title: string
    description: string | null
    url: string
    thumbnail: string
    userId: string
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    thumbnail?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    videoLikes?: boolean | Video$videoLikesArgs
    comments?: boolean | Video$commentsArgs
    views?: boolean | Video$viewsArgs
    _count?: boolean | VideoCountOutputTypeArgs
  }


  export type VideoInclude = {
    user?: boolean | UserArgs
    videoLikes?: boolean | Video$videoLikesArgs
    comments?: boolean | Video$commentsArgs
    views?: boolean | Video$viewsArgs
    _count?: boolean | VideoCountOutputTypeArgs
  }

  export type VideoGetPayload<S extends boolean | null | undefined | VideoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Video :
    S extends undefined ? never :
    S extends { include: any } & (VideoArgs | VideoFindManyArgs)
    ? Video  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'videoLikes' ? Array < VideoLikeGetPayload<S['include'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'views' ? Array < ViewGetPayload<S['include'][P]>>  :
        P extends '_count' ? VideoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VideoArgs | VideoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'videoLikes' ? Array < VideoLikeGetPayload<S['select'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'views' ? Array < ViewGetPayload<S['select'][P]>>  :
        P extends '_count' ? VideoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Video ? Video[P] : never
  } 
      : Video


  type VideoCountArgs = 
    Omit<VideoFindManyArgs, 'select' | 'include'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VideoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VideoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Video'> extends True ? Prisma__VideoClient<VideoGetPayload<T>> : Prisma__VideoClient<VideoGetPayload<T> | null, null>

    /**
     * Find one Video that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VideoFindUniqueOrThrowArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VideoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VideoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Video'> extends True ? Prisma__VideoClient<VideoGetPayload<T>> : Prisma__VideoClient<VideoGetPayload<T> | null, null>

    /**
     * Find the first Video that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VideoFindFirstOrThrowArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VideoFindManyArgs>(
      args?: SelectSubset<T, VideoFindManyArgs>
    ): PrismaPromise<Array<VideoGetPayload<T>>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
    **/
    create<T extends VideoCreateArgs>(
      args: SelectSubset<T, VideoCreateArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Create many Videos.
     *     @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     *     @example
     *     // Create many Videos
     *     const video = await prisma.video.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VideoCreateManyArgs>(
      args?: SelectSubset<T, VideoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
    **/
    delete<T extends VideoDeleteArgs>(
      args: SelectSubset<T, VideoDeleteArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VideoUpdateArgs>(
      args: SelectSubset<T, VideoUpdateArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VideoDeleteManyArgs>(
      args?: SelectSubset<T, VideoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VideoUpdateManyArgs>(
      args: SelectSubset<T, VideoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
    **/
    upsert<T extends VideoUpsertArgs>(
      args: SelectSubset<T, VideoUpsertArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VideoClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    videoLikes<T extends Video$videoLikesArgs= {}>(args?: Subset<T, Video$videoLikesArgs>): PrismaPromise<Array<VideoLikeGetPayload<T>>| Null>;

    comments<T extends Video$commentsArgs= {}>(args?: Subset<T, Video$commentsArgs>): PrismaPromise<Array<CommentGetPayload<T>>| Null>;

    views<T extends Video$viewsArgs= {}>(args?: Subset<T, Video$viewsArgs>): PrismaPromise<Array<ViewGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Video base type for findUnique actions
   */
  export type VideoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUnique
   */
  export interface VideoFindUniqueArgs extends VideoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }


  /**
   * Video base type for findFirst actions
   */
  export type VideoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: Enumerable<VideoScalarFieldEnum>
  }

  /**
   * Video findFirst
   */
  export interface VideoFindFirstArgs extends VideoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: Enumerable<VideoScalarFieldEnum>
  }


  /**
   * Video findMany
   */
  export type VideoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: Enumerable<VideoScalarFieldEnum>
  }


  /**
   * Video create
   */
  export type VideoCreateArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }


  /**
   * Video createMany
   */
  export type VideoCreateManyArgs = {
    /**
     * The data used to create many Videos.
     */
    data: Enumerable<VideoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Video update
   */
  export type VideoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }


  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
  }


  /**
   * Video upsert
   */
  export type VideoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }


  /**
   * Video delete
   */
  export type VideoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }


  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
  }


  /**
   * Video.videoLikes
   */
  export type Video$videoLikesArgs = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    where?: VideoLikeWhereInput
    orderBy?: Enumerable<VideoLikeOrderByWithRelationInput>
    cursor?: VideoLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VideoLikeScalarFieldEnum>
  }


  /**
   * Video.comments
   */
  export type Video$commentsArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Video.views
   */
  export type Video$viewsArgs = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    where?: ViewWhereInput
    orderBy?: Enumerable<ViewOrderByWithRelationInput>
    cursor?: ViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ViewScalarFieldEnum>
  }


  /**
   * Video without action
   */
  export type VideoArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
  }



  /**
   * Model VideoLike
   */


  export type AggregateVideoLike = {
    _count: VideoLikeCountAggregateOutputType | null
    _avg: VideoLikeAvgAggregateOutputType | null
    _sum: VideoLikeSumAggregateOutputType | null
    _min: VideoLikeMinAggregateOutputType | null
    _max: VideoLikeMaxAggregateOutputType | null
  }

  export type VideoLikeAvgAggregateOutputType = {
    like: number | null
  }

  export type VideoLikeSumAggregateOutputType = {
    like: number | null
  }

  export type VideoLikeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    like: number | null
    userId: string | null
    videoId: string | null
  }

  export type VideoLikeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    like: number | null
    userId: string | null
    videoId: string | null
  }

  export type VideoLikeCountAggregateOutputType = {
    id: number
    createdAt: number
    like: number
    userId: number
    videoId: number
    _all: number
  }


  export type VideoLikeAvgAggregateInputType = {
    like?: true
  }

  export type VideoLikeSumAggregateInputType = {
    like?: true
  }

  export type VideoLikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    like?: true
    userId?: true
    videoId?: true
  }

  export type VideoLikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    like?: true
    userId?: true
    videoId?: true
  }

  export type VideoLikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    like?: true
    userId?: true
    videoId?: true
    _all?: true
  }

  export type VideoLikeAggregateArgs = {
    /**
     * Filter which VideoLike to aggregate.
     */
    where?: VideoLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoLikes to fetch.
     */
    orderBy?: Enumerable<VideoLikeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoLikes
    **/
    _count?: true | VideoLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoLikeMaxAggregateInputType
  }

  export type GetVideoLikeAggregateType<T extends VideoLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoLike[P]>
      : GetScalarType<T[P], AggregateVideoLike[P]>
  }




  export type VideoLikeGroupByArgs = {
    where?: VideoLikeWhereInput
    orderBy?: Enumerable<VideoLikeOrderByWithAggregationInput>
    by: VideoLikeScalarFieldEnum[]
    having?: VideoLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoLikeCountAggregateInputType | true
    _avg?: VideoLikeAvgAggregateInputType
    _sum?: VideoLikeSumAggregateInputType
    _min?: VideoLikeMinAggregateInputType
    _max?: VideoLikeMaxAggregateInputType
  }


  export type VideoLikeGroupByOutputType = {
    id: string
    createdAt: Date
    like: number
    userId: string
    videoId: string
    _count: VideoLikeCountAggregateOutputType | null
    _avg: VideoLikeAvgAggregateOutputType | null
    _sum: VideoLikeSumAggregateOutputType | null
    _min: VideoLikeMinAggregateOutputType | null
    _max: VideoLikeMaxAggregateOutputType | null
  }

  type GetVideoLikeGroupByPayload<T extends VideoLikeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VideoLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoLikeGroupByOutputType[P]>
            : GetScalarType<T[P], VideoLikeGroupByOutputType[P]>
        }
      >
    >


  export type VideoLikeSelect = {
    id?: boolean
    createdAt?: boolean
    like?: boolean
    userId?: boolean
    videoId?: boolean
    user?: boolean | UserArgs
    video?: boolean | VideoArgs
  }


  export type VideoLikeInclude = {
    user?: boolean | UserArgs
    video?: boolean | VideoArgs
  }

  export type VideoLikeGetPayload<S extends boolean | null | undefined | VideoLikeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VideoLike :
    S extends undefined ? never :
    S extends { include: any } & (VideoLikeArgs | VideoLikeFindManyArgs)
    ? VideoLike  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'video' ? VideoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VideoLikeArgs | VideoLikeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'video' ? VideoGetPayload<S['select'][P]> :  P extends keyof VideoLike ? VideoLike[P] : never
  } 
      : VideoLike


  type VideoLikeCountArgs = 
    Omit<VideoLikeFindManyArgs, 'select' | 'include'> & {
      select?: VideoLikeCountAggregateInputType | true
    }

  export interface VideoLikeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VideoLike that matches the filter.
     * @param {VideoLikeFindUniqueArgs} args - Arguments to find a VideoLike
     * @example
     * // Get one VideoLike
     * const videoLike = await prisma.videoLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VideoLikeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VideoLikeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VideoLike'> extends True ? Prisma__VideoLikeClient<VideoLikeGetPayload<T>> : Prisma__VideoLikeClient<VideoLikeGetPayload<T> | null, null>

    /**
     * Find one VideoLike that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VideoLikeFindUniqueOrThrowArgs} args - Arguments to find a VideoLike
     * @example
     * // Get one VideoLike
     * const videoLike = await prisma.videoLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VideoLikeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VideoLikeFindUniqueOrThrowArgs>
    ): Prisma__VideoLikeClient<VideoLikeGetPayload<T>>

    /**
     * Find the first VideoLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoLikeFindFirstArgs} args - Arguments to find a VideoLike
     * @example
     * // Get one VideoLike
     * const videoLike = await prisma.videoLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VideoLikeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VideoLikeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VideoLike'> extends True ? Prisma__VideoLikeClient<VideoLikeGetPayload<T>> : Prisma__VideoLikeClient<VideoLikeGetPayload<T> | null, null>

    /**
     * Find the first VideoLike that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoLikeFindFirstOrThrowArgs} args - Arguments to find a VideoLike
     * @example
     * // Get one VideoLike
     * const videoLike = await prisma.videoLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VideoLikeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VideoLikeFindFirstOrThrowArgs>
    ): Prisma__VideoLikeClient<VideoLikeGetPayload<T>>

    /**
     * Find zero or more VideoLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoLikeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoLikes
     * const videoLikes = await prisma.videoLike.findMany()
     * 
     * // Get first 10 VideoLikes
     * const videoLikes = await prisma.videoLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoLikeWithIdOnly = await prisma.videoLike.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VideoLikeFindManyArgs>(
      args?: SelectSubset<T, VideoLikeFindManyArgs>
    ): PrismaPromise<Array<VideoLikeGetPayload<T>>>

    /**
     * Create a VideoLike.
     * @param {VideoLikeCreateArgs} args - Arguments to create a VideoLike.
     * @example
     * // Create one VideoLike
     * const VideoLike = await prisma.videoLike.create({
     *   data: {
     *     // ... data to create a VideoLike
     *   }
     * })
     * 
    **/
    create<T extends VideoLikeCreateArgs>(
      args: SelectSubset<T, VideoLikeCreateArgs>
    ): Prisma__VideoLikeClient<VideoLikeGetPayload<T>>

    /**
     * Create many VideoLikes.
     *     @param {VideoLikeCreateManyArgs} args - Arguments to create many VideoLikes.
     *     @example
     *     // Create many VideoLikes
     *     const videoLike = await prisma.videoLike.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VideoLikeCreateManyArgs>(
      args?: SelectSubset<T, VideoLikeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VideoLike.
     * @param {VideoLikeDeleteArgs} args - Arguments to delete one VideoLike.
     * @example
     * // Delete one VideoLike
     * const VideoLike = await prisma.videoLike.delete({
     *   where: {
     *     // ... filter to delete one VideoLike
     *   }
     * })
     * 
    **/
    delete<T extends VideoLikeDeleteArgs>(
      args: SelectSubset<T, VideoLikeDeleteArgs>
    ): Prisma__VideoLikeClient<VideoLikeGetPayload<T>>

    /**
     * Update one VideoLike.
     * @param {VideoLikeUpdateArgs} args - Arguments to update one VideoLike.
     * @example
     * // Update one VideoLike
     * const videoLike = await prisma.videoLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VideoLikeUpdateArgs>(
      args: SelectSubset<T, VideoLikeUpdateArgs>
    ): Prisma__VideoLikeClient<VideoLikeGetPayload<T>>

    /**
     * Delete zero or more VideoLikes.
     * @param {VideoLikeDeleteManyArgs} args - Arguments to filter VideoLikes to delete.
     * @example
     * // Delete a few VideoLikes
     * const { count } = await prisma.videoLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VideoLikeDeleteManyArgs>(
      args?: SelectSubset<T, VideoLikeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoLikes
     * const videoLike = await prisma.videoLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VideoLikeUpdateManyArgs>(
      args: SelectSubset<T, VideoLikeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VideoLike.
     * @param {VideoLikeUpsertArgs} args - Arguments to update or create a VideoLike.
     * @example
     * // Update or create a VideoLike
     * const videoLike = await prisma.videoLike.upsert({
     *   create: {
     *     // ... data to create a VideoLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoLike we want to update
     *   }
     * })
    **/
    upsert<T extends VideoLikeUpsertArgs>(
      args: SelectSubset<T, VideoLikeUpsertArgs>
    ): Prisma__VideoLikeClient<VideoLikeGetPayload<T>>

    /**
     * Count the number of VideoLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoLikeCountArgs} args - Arguments to filter VideoLikes to count.
     * @example
     * // Count the number of VideoLikes
     * const count = await prisma.videoLike.count({
     *   where: {
     *     // ... the filter for the VideoLikes we want to count
     *   }
     * })
    **/
    count<T extends VideoLikeCountArgs>(
      args?: Subset<T, VideoLikeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoLikeAggregateArgs>(args: Subset<T, VideoLikeAggregateArgs>): PrismaPromise<GetVideoLikeAggregateType<T>>

    /**
     * Group by VideoLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoLikeGroupByArgs} args - Group by arguments.
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
      T extends VideoLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoLikeGroupByArgs['orderBy'] }
        : { orderBy?: VideoLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VideoLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoLikeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VideoLikeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    video<T extends VideoArgs= {}>(args?: Subset<T, VideoArgs>): Prisma__VideoClient<VideoGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VideoLike base type for findUnique actions
   */
  export type VideoLikeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    /**
     * Filter, which VideoLike to fetch.
     */
    where: VideoLikeWhereUniqueInput
  }

  /**
   * VideoLike findUnique
   */
  export interface VideoLikeFindUniqueArgs extends VideoLikeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VideoLike findUniqueOrThrow
   */
  export type VideoLikeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    /**
     * Filter, which VideoLike to fetch.
     */
    where: VideoLikeWhereUniqueInput
  }


  /**
   * VideoLike base type for findFirst actions
   */
  export type VideoLikeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    /**
     * Filter, which VideoLike to fetch.
     */
    where?: VideoLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoLikes to fetch.
     */
    orderBy?: Enumerable<VideoLikeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoLikes.
     */
    cursor?: VideoLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoLikes.
     */
    distinct?: Enumerable<VideoLikeScalarFieldEnum>
  }

  /**
   * VideoLike findFirst
   */
  export interface VideoLikeFindFirstArgs extends VideoLikeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VideoLike findFirstOrThrow
   */
  export type VideoLikeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    /**
     * Filter, which VideoLike to fetch.
     */
    where?: VideoLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoLikes to fetch.
     */
    orderBy?: Enumerable<VideoLikeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoLikes.
     */
    cursor?: VideoLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoLikes.
     */
    distinct?: Enumerable<VideoLikeScalarFieldEnum>
  }


  /**
   * VideoLike findMany
   */
  export type VideoLikeFindManyArgs = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    /**
     * Filter, which VideoLikes to fetch.
     */
    where?: VideoLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoLikes to fetch.
     */
    orderBy?: Enumerable<VideoLikeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoLikes.
     */
    cursor?: VideoLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoLikes.
     */
    skip?: number
    distinct?: Enumerable<VideoLikeScalarFieldEnum>
  }


  /**
   * VideoLike create
   */
  export type VideoLikeCreateArgs = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    /**
     * The data needed to create a VideoLike.
     */
    data: XOR<VideoLikeCreateInput, VideoLikeUncheckedCreateInput>
  }


  /**
   * VideoLike createMany
   */
  export type VideoLikeCreateManyArgs = {
    /**
     * The data used to create many VideoLikes.
     */
    data: Enumerable<VideoLikeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VideoLike update
   */
  export type VideoLikeUpdateArgs = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    /**
     * The data needed to update a VideoLike.
     */
    data: XOR<VideoLikeUpdateInput, VideoLikeUncheckedUpdateInput>
    /**
     * Choose, which VideoLike to update.
     */
    where: VideoLikeWhereUniqueInput
  }


  /**
   * VideoLike updateMany
   */
  export type VideoLikeUpdateManyArgs = {
    /**
     * The data used to update VideoLikes.
     */
    data: XOR<VideoLikeUpdateManyMutationInput, VideoLikeUncheckedUpdateManyInput>
    /**
     * Filter which VideoLikes to update
     */
    where?: VideoLikeWhereInput
  }


  /**
   * VideoLike upsert
   */
  export type VideoLikeUpsertArgs = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    /**
     * The filter to search for the VideoLike to update in case it exists.
     */
    where: VideoLikeWhereUniqueInput
    /**
     * In case the VideoLike found by the `where` argument doesn't exist, create a new VideoLike with this data.
     */
    create: XOR<VideoLikeCreateInput, VideoLikeUncheckedCreateInput>
    /**
     * In case the VideoLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoLikeUpdateInput, VideoLikeUncheckedUpdateInput>
  }


  /**
   * VideoLike delete
   */
  export type VideoLikeDeleteArgs = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
    /**
     * Filter which VideoLike to delete.
     */
    where: VideoLikeWhereUniqueInput
  }


  /**
   * VideoLike deleteMany
   */
  export type VideoLikeDeleteManyArgs = {
    /**
     * Filter which VideoLikes to delete
     */
    where?: VideoLikeWhereInput
  }


  /**
   * VideoLike without action
   */
  export type VideoLikeArgs = {
    /**
     * Select specific fields to fetch from the VideoLike
     */
    select?: VideoLikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoLikeInclude | null
  }



  /**
   * Model View
   */


  export type AggregateView = {
    _count: ViewCountAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  export type ViewMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    videoId: string | null
  }

  export type ViewMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    videoId: string | null
  }

  export type ViewCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    videoId: number
    _all: number
  }


  export type ViewMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    videoId?: true
  }

  export type ViewMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    videoId?: true
  }

  export type ViewCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    videoId?: true
    _all?: true
  }

  export type ViewAggregateArgs = {
    /**
     * Filter which View to aggregate.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: Enumerable<ViewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewMaxAggregateInputType
  }

  export type GetViewAggregateType<T extends ViewAggregateArgs> = {
        [P in keyof T & keyof AggregateView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateView[P]>
      : GetScalarType<T[P], AggregateView[P]>
  }




  export type ViewGroupByArgs = {
    where?: ViewWhereInput
    orderBy?: Enumerable<ViewOrderByWithAggregationInput>
    by: ViewScalarFieldEnum[]
    having?: ViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewCountAggregateInputType | true
    _min?: ViewMinAggregateInputType
    _max?: ViewMaxAggregateInputType
  }


  export type ViewGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string | null
    videoId: string
    _count: ViewCountAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  type GetViewGroupByPayload<T extends ViewGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewGroupByOutputType[P]>
            : GetScalarType<T[P], ViewGroupByOutputType[P]>
        }
      >
    >


  export type ViewSelect = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    videoId?: boolean
    user?: boolean | UserArgs
    video?: boolean | VideoArgs
  }


  export type ViewInclude = {
    user?: boolean | UserArgs
    video?: boolean | VideoArgs
  }

  export type ViewGetPayload<S extends boolean | null | undefined | ViewArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? View :
    S extends undefined ? never :
    S extends { include: any } & (ViewArgs | ViewFindManyArgs)
    ? View  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'video' ? VideoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ViewArgs | ViewFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'video' ? VideoGetPayload<S['select'][P]> :  P extends keyof View ? View[P] : never
  } 
      : View


  type ViewCountArgs = 
    Omit<ViewFindManyArgs, 'select' | 'include'> & {
      select?: ViewCountAggregateInputType | true
    }

  export interface ViewDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one View that matches the filter.
     * @param {ViewFindUniqueArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ViewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ViewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'View'> extends True ? Prisma__ViewClient<ViewGetPayload<T>> : Prisma__ViewClient<ViewGetPayload<T> | null, null>

    /**
     * Find one View that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ViewFindUniqueOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ViewFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ViewFindUniqueOrThrowArgs>
    ): Prisma__ViewClient<ViewGetPayload<T>>

    /**
     * Find the first View that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ViewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ViewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'View'> extends True ? Prisma__ViewClient<ViewGetPayload<T>> : Prisma__ViewClient<ViewGetPayload<T> | null, null>

    /**
     * Find the first View that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ViewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ViewFindFirstOrThrowArgs>
    ): Prisma__ViewClient<ViewGetPayload<T>>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.view.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.view.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewWithIdOnly = await prisma.view.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ViewFindManyArgs>(
      args?: SelectSubset<T, ViewFindManyArgs>
    ): PrismaPromise<Array<ViewGetPayload<T>>>

    /**
     * Create a View.
     * @param {ViewCreateArgs} args - Arguments to create a View.
     * @example
     * // Create one View
     * const View = await prisma.view.create({
     *   data: {
     *     // ... data to create a View
     *   }
     * })
     * 
    **/
    create<T extends ViewCreateArgs>(
      args: SelectSubset<T, ViewCreateArgs>
    ): Prisma__ViewClient<ViewGetPayload<T>>

    /**
     * Create many Views.
     *     @param {ViewCreateManyArgs} args - Arguments to create many Views.
     *     @example
     *     // Create many Views
     *     const view = await prisma.view.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ViewCreateManyArgs>(
      args?: SelectSubset<T, ViewCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a View.
     * @param {ViewDeleteArgs} args - Arguments to delete one View.
     * @example
     * // Delete one View
     * const View = await prisma.view.delete({
     *   where: {
     *     // ... filter to delete one View
     *   }
     * })
     * 
    **/
    delete<T extends ViewDeleteArgs>(
      args: SelectSubset<T, ViewDeleteArgs>
    ): Prisma__ViewClient<ViewGetPayload<T>>

    /**
     * Update one View.
     * @param {ViewUpdateArgs} args - Arguments to update one View.
     * @example
     * // Update one View
     * const view = await prisma.view.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ViewUpdateArgs>(
      args: SelectSubset<T, ViewUpdateArgs>
    ): Prisma__ViewClient<ViewGetPayload<T>>

    /**
     * Delete zero or more Views.
     * @param {ViewDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.view.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ViewDeleteManyArgs>(
      args?: SelectSubset<T, ViewDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ViewUpdateManyArgs>(
      args: SelectSubset<T, ViewUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one View.
     * @param {ViewUpsertArgs} args - Arguments to update or create a View.
     * @example
     * // Update or create a View
     * const view = await prisma.view.upsert({
     *   create: {
     *     // ... data to create a View
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the View we want to update
     *   }
     * })
    **/
    upsert<T extends ViewUpsertArgs>(
      args: SelectSubset<T, ViewUpsertArgs>
    ): Prisma__ViewClient<ViewGetPayload<T>>

    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.view.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewCountArgs>(
      args?: Subset<T, ViewCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewAggregateArgs>(args: Subset<T, ViewAggregateArgs>): PrismaPromise<GetViewAggregateType<T>>

    /**
     * Group by View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewGroupByArgs} args - Group by arguments.
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
      T extends ViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewGroupByArgs['orderBy'] }
        : { orderBy?: ViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for View.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ViewClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    video<T extends VideoArgs= {}>(args?: Subset<T, VideoArgs>): Prisma__VideoClient<VideoGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * View base type for findUnique actions
   */
  export type ViewFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findUnique
   */
  export interface ViewFindUniqueArgs extends ViewFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * View findUniqueOrThrow
   */
  export type ViewFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }


  /**
   * View base type for findFirst actions
   */
  export type ViewFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: Enumerable<ViewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: Enumerable<ViewScalarFieldEnum>
  }

  /**
   * View findFirst
   */
  export interface ViewFindFirstArgs extends ViewFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * View findFirstOrThrow
   */
  export type ViewFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: Enumerable<ViewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: Enumerable<ViewScalarFieldEnum>
  }


  /**
   * View findMany
   */
  export type ViewFindManyArgs = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: Enumerable<ViewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: Enumerable<ViewScalarFieldEnum>
  }


  /**
   * View create
   */
  export type ViewCreateArgs = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    /**
     * The data needed to create a View.
     */
    data: XOR<ViewCreateInput, ViewUncheckedCreateInput>
  }


  /**
   * View createMany
   */
  export type ViewCreateManyArgs = {
    /**
     * The data used to create many Views.
     */
    data: Enumerable<ViewCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * View update
   */
  export type ViewUpdateArgs = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    /**
     * The data needed to update a View.
     */
    data: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
    /**
     * Choose, which View to update.
     */
    where: ViewWhereUniqueInput
  }


  /**
   * View updateMany
   */
  export type ViewUpdateManyArgs = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
  }


  /**
   * View upsert
   */
  export type ViewUpsertArgs = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    /**
     * The filter to search for the View to update in case it exists.
     */
    where: ViewWhereUniqueInput
    /**
     * In case the View found by the `where` argument doesn't exist, create a new View with this data.
     */
    create: XOR<ViewCreateInput, ViewUncheckedCreateInput>
    /**
     * In case the View was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
  }


  /**
   * View delete
   */
  export type ViewDeleteArgs = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
    /**
     * Filter which View to delete.
     */
    where: ViewWhereUniqueInput
  }


  /**
   * View deleteMany
   */
  export type ViewDeleteManyArgs = {
    /**
     * Filter which Views to delete
     */
    where?: ViewWhereInput
  }


  /**
   * View without action
   */
  export type ViewArgs = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CommentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    text: 'text',
    userId: 'userId',
    videoId: 'videoId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    subscriberId: 'subscriberId',
    subscribedToId: 'subscribedToId'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    username: 'username',
    email: 'email',
    avatar: 'avatar',
    cover: 'cover',
    about: 'about'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VideoLikeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    like: 'like',
    userId: 'userId',
    videoId: 'videoId'
  };

  export type VideoLikeScalarFieldEnum = (typeof VideoLikeScalarFieldEnum)[keyof typeof VideoLikeScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    description: 'description',
    url: 'url',
    thumbnail: 'thumbnail',
    userId: 'userId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const ViewScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    videoId: 'videoId'
  };

  export type ViewScalarFieldEnum = (typeof ViewScalarFieldEnum)[keyof typeof ViewScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    username?: StringFilter | string
    email?: StringFilter | string
    avatar?: StringFilter | string
    cover?: StringFilter | string
    about?: StringFilter | string
    videos?: VideoListRelationFilter
    videoLikes?: VideoLikeListRelationFilter
    comments?: CommentListRelationFilter
    subscribers?: SubscriptionListRelationFilter
    subscribedTo?: SubscriptionListRelationFilter
    views?: ViewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    about?: SortOrder
    videos?: VideoOrderByRelationAggregateInput
    videoLikes?: VideoLikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    subscribers?: SubscriptionOrderByRelationAggregateInput
    subscribedTo?: SubscriptionOrderByRelationAggregateInput
    views?: ViewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    about?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    username?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    avatar?: StringWithAggregatesFilter | string
    cover?: StringWithAggregatesFilter | string
    about?: StringWithAggregatesFilter | string
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    text?: StringFilter | string
    userId?: StringFilter | string
    videoId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    video?: XOR<VideoRelationFilter, VideoWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    user?: UserOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = {
    id?: string
  }

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    text?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    videoId?: StringWithAggregatesFilter | string
  }

  export type SubscriptionWhereInput = {
    AND?: Enumerable<SubscriptionWhereInput>
    OR?: Enumerable<SubscriptionWhereInput>
    NOT?: Enumerable<SubscriptionWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    subscriberId?: StringFilter | string
    subscribedToId?: StringFilter | string
    subscriber?: XOR<UserRelationFilter, UserWhereInput>
    subscribedTo?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subscriberId?: SortOrder
    subscribedToId?: SortOrder
    subscriber?: UserOrderByWithRelationInput
    subscribedTo?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = {
    id?: string
  }

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subscriberId?: SortOrder
    subscribedToId?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SubscriptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SubscriptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SubscriptionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    subscriberId?: StringWithAggregatesFilter | string
    subscribedToId?: StringWithAggregatesFilter | string
  }

  export type VideoWhereInput = {
    AND?: Enumerable<VideoWhereInput>
    OR?: Enumerable<VideoWhereInput>
    NOT?: Enumerable<VideoWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    description?: StringNullableFilter | string | null
    url?: StringFilter | string
    thumbnail?: StringFilter | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    videoLikes?: VideoLikeListRelationFilter
    comments?: CommentListRelationFilter
    views?: ViewListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    videoLikes?: VideoLikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    views?: ViewOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = {
    id?: string
  }

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    userId?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VideoScalarWhereWithAggregatesInput>
    OR?: Enumerable<VideoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VideoScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    url?: StringWithAggregatesFilter | string
    thumbnail?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type VideoLikeWhereInput = {
    AND?: Enumerable<VideoLikeWhereInput>
    OR?: Enumerable<VideoLikeWhereInput>
    NOT?: Enumerable<VideoLikeWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    like?: IntFilter | number
    userId?: StringFilter | string
    videoId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    video?: XOR<VideoRelationFilter, VideoWhereInput>
  }

  export type VideoLikeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    like?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    user?: UserOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type VideoLikeWhereUniqueInput = {
    id?: string
  }

  export type VideoLikeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    like?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    _count?: VideoLikeCountOrderByAggregateInput
    _avg?: VideoLikeAvgOrderByAggregateInput
    _max?: VideoLikeMaxOrderByAggregateInput
    _min?: VideoLikeMinOrderByAggregateInput
    _sum?: VideoLikeSumOrderByAggregateInput
  }

  export type VideoLikeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VideoLikeScalarWhereWithAggregatesInput>
    OR?: Enumerable<VideoLikeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VideoLikeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    like?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    videoId?: StringWithAggregatesFilter | string
  }

  export type ViewWhereInput = {
    AND?: Enumerable<ViewWhereInput>
    OR?: Enumerable<ViewWhereInput>
    NOT?: Enumerable<ViewWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: StringNullableFilter | string | null
    videoId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    video?: XOR<VideoRelationFilter, VideoWhereInput>
  }

  export type ViewOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    user?: UserOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type ViewWhereUniqueInput = {
    id?: string
  }

  export type ViewOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    _count?: ViewCountOrderByAggregateInput
    _max?: ViewMaxOrderByAggregateInput
    _min?: ViewMinOrderByAggregateInput
  }

  export type ViewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ViewScalarWhereWithAggregatesInput>
    OR?: Enumerable<ViewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ViewScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringNullableWithAggregatesFilter | string | null
    videoId?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoCreateNestedManyWithoutUserInput
    videoLikes?: VideoLikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionCreateNestedManyWithoutSubscriberInput
    subscribedTo?: SubscriptionCreateNestedManyWithoutSubscribedToInput
    views?: ViewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    videoLikes?: VideoLikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput
    subscribedTo?: SubscriptionUncheckedCreateNestedManyWithoutSubscribedToInput
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    videoLikes?: VideoLikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUpdateManyWithoutSubscriberNestedInput
    subscribedTo?: SubscriptionUpdateManyWithoutSubscribedToNestedInput
    views?: ViewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    videoLikes?: VideoLikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribedTo?: SubscriptionUncheckedUpdateManyWithoutSubscribedToNestedInput
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    createdAt?: Date | string
    text: string
    user: UserCreateNestedOneWithoutCommentsInput
    video: VideoCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    text: string
    userId: string
    videoId: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    text: string
    userId: string
    videoId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    createdAt?: Date | string
    subscriber: UserCreateNestedOneWithoutSubscribersInput
    subscribedTo: UserCreateNestedOneWithoutSubscribedToInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    subscriberId: string
    subscribedToId: string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriber?: UserUpdateOneRequiredWithoutSubscribersNestedInput
    subscribedTo?: UserUpdateOneRequiredWithoutSubscribedToNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriberId?: StringFieldUpdateOperationsInput | string
    subscribedToId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    subscriberId: string
    subscribedToId: string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriberId?: StringFieldUpdateOperationsInput | string
    subscribedToId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    user: UserCreateNestedOneWithoutVideosInput
    videoLikes?: VideoLikeCreateNestedManyWithoutVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    views?: ViewCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    userId: string
    videoLikes?: VideoLikeUncheckedCreateNestedManyWithoutVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    views?: ViewUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    videoLikes?: VideoLikeUpdateManyWithoutVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    views?: ViewUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoLikes?: VideoLikeUncheckedUpdateManyWithoutVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    views?: ViewUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    userId: string
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    like?: number
    user: UserCreateNestedOneWithoutVideoLikesInput
    video: VideoCreateNestedOneWithoutVideoLikesInput
  }

  export type VideoLikeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    like?: number
    userId: string
    videoId: string
  }

  export type VideoLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutVideoLikesNestedInput
    video?: VideoUpdateOneRequiredWithoutVideoLikesNestedInput
  }

  export type VideoLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoLikeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    like?: number
    userId: string
    videoId: string
  }

  export type VideoLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
  }

  export type VideoLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewCreateInput = {
    id?: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutViewsInput
    video: VideoCreateNestedOneWithoutViewsInput
  }

  export type ViewUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId?: string | null
    videoId: string
  }

  export type ViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutViewsNestedInput
    video?: VideoUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId?: string | null
    videoId: string
  }

  export type ViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type VideoLikeListRelationFilter = {
    every?: VideoLikeWhereInput
    some?: VideoLikeWhereInput
    none?: VideoLikeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type ViewListRelationFilter = {
    every?: ViewWhereInput
    some?: ViewWhereInput
    none?: ViewWhereInput
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    about?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    about?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    about?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VideoRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subscriberId?: SortOrder
    subscribedToId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subscriberId?: SortOrder
    subscribedToId?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subscriberId?: SortOrder
    subscribedToId?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    userId?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    userId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type VideoLikeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    like?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type VideoLikeAvgOrderByAggregateInput = {
    like?: SortOrder
  }

  export type VideoLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    like?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type VideoLikeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    like?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type VideoLikeSumOrderByAggregateInput = {
    like?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type ViewCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type ViewMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type ViewMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type VideoCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<VideoCreateWithoutUserInput>, Enumerable<VideoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutUserInput>
    createMany?: VideoCreateManyUserInputEnvelope
    connect?: Enumerable<VideoWhereUniqueInput>
  }

  export type VideoLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<VideoLikeCreateWithoutUserInput>, Enumerable<VideoLikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VideoLikeCreateOrConnectWithoutUserInput>
    createMany?: VideoLikeCreateManyUserInputEnvelope
    connect?: Enumerable<VideoLikeWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type SubscriptionCreateNestedManyWithoutSubscriberInput = {
    create?: XOR<Enumerable<SubscriptionCreateWithoutSubscriberInput>, Enumerable<SubscriptionUncheckedCreateWithoutSubscriberInput>>
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutSubscriberInput>
    createMany?: SubscriptionCreateManySubscriberInputEnvelope
    connect?: Enumerable<SubscriptionWhereUniqueInput>
  }

  export type SubscriptionCreateNestedManyWithoutSubscribedToInput = {
    create?: XOR<Enumerable<SubscriptionCreateWithoutSubscribedToInput>, Enumerable<SubscriptionUncheckedCreateWithoutSubscribedToInput>>
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutSubscribedToInput>
    createMany?: SubscriptionCreateManySubscribedToInputEnvelope
    connect?: Enumerable<SubscriptionWhereUniqueInput>
  }

  export type ViewCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ViewCreateWithoutUserInput>, Enumerable<ViewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ViewCreateOrConnectWithoutUserInput>
    createMany?: ViewCreateManyUserInputEnvelope
    connect?: Enumerable<ViewWhereUniqueInput>
  }

  export type VideoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<VideoCreateWithoutUserInput>, Enumerable<VideoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutUserInput>
    createMany?: VideoCreateManyUserInputEnvelope
    connect?: Enumerable<VideoWhereUniqueInput>
  }

  export type VideoLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<VideoLikeCreateWithoutUserInput>, Enumerable<VideoLikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VideoLikeCreateOrConnectWithoutUserInput>
    createMany?: VideoLikeCreateManyUserInputEnvelope
    connect?: Enumerable<VideoLikeWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput = {
    create?: XOR<Enumerable<SubscriptionCreateWithoutSubscriberInput>, Enumerable<SubscriptionUncheckedCreateWithoutSubscriberInput>>
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutSubscriberInput>
    createMany?: SubscriptionCreateManySubscriberInputEnvelope
    connect?: Enumerable<SubscriptionWhereUniqueInput>
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutSubscribedToInput = {
    create?: XOR<Enumerable<SubscriptionCreateWithoutSubscribedToInput>, Enumerable<SubscriptionUncheckedCreateWithoutSubscribedToInput>>
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutSubscribedToInput>
    createMany?: SubscriptionCreateManySubscribedToInputEnvelope
    connect?: Enumerable<SubscriptionWhereUniqueInput>
  }

  export type ViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ViewCreateWithoutUserInput>, Enumerable<ViewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ViewCreateOrConnectWithoutUserInput>
    createMany?: ViewCreateManyUserInputEnvelope
    connect?: Enumerable<ViewWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VideoUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<VideoCreateWithoutUserInput>, Enumerable<VideoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<VideoUpsertWithWhereUniqueWithoutUserInput>
    createMany?: VideoCreateManyUserInputEnvelope
    set?: Enumerable<VideoWhereUniqueInput>
    disconnect?: Enumerable<VideoWhereUniqueInput>
    delete?: Enumerable<VideoWhereUniqueInput>
    connect?: Enumerable<VideoWhereUniqueInput>
    update?: Enumerable<VideoUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<VideoUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<VideoScalarWhereInput>
  }

  export type VideoLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<VideoLikeCreateWithoutUserInput>, Enumerable<VideoLikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VideoLikeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<VideoLikeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: VideoLikeCreateManyUserInputEnvelope
    set?: Enumerable<VideoLikeWhereUniqueInput>
    disconnect?: Enumerable<VideoLikeWhereUniqueInput>
    delete?: Enumerable<VideoLikeWhereUniqueInput>
    connect?: Enumerable<VideoLikeWhereUniqueInput>
    update?: Enumerable<VideoLikeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<VideoLikeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<VideoLikeScalarWhereInput>
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type SubscriptionUpdateManyWithoutSubscriberNestedInput = {
    create?: XOR<Enumerable<SubscriptionCreateWithoutSubscriberInput>, Enumerable<SubscriptionUncheckedCreateWithoutSubscriberInput>>
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutSubscriberInput>
    upsert?: Enumerable<SubscriptionUpsertWithWhereUniqueWithoutSubscriberInput>
    createMany?: SubscriptionCreateManySubscriberInputEnvelope
    set?: Enumerable<SubscriptionWhereUniqueInput>
    disconnect?: Enumerable<SubscriptionWhereUniqueInput>
    delete?: Enumerable<SubscriptionWhereUniqueInput>
    connect?: Enumerable<SubscriptionWhereUniqueInput>
    update?: Enumerable<SubscriptionUpdateWithWhereUniqueWithoutSubscriberInput>
    updateMany?: Enumerable<SubscriptionUpdateManyWithWhereWithoutSubscriberInput>
    deleteMany?: Enumerable<SubscriptionScalarWhereInput>
  }

  export type SubscriptionUpdateManyWithoutSubscribedToNestedInput = {
    create?: XOR<Enumerable<SubscriptionCreateWithoutSubscribedToInput>, Enumerable<SubscriptionUncheckedCreateWithoutSubscribedToInput>>
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutSubscribedToInput>
    upsert?: Enumerable<SubscriptionUpsertWithWhereUniqueWithoutSubscribedToInput>
    createMany?: SubscriptionCreateManySubscribedToInputEnvelope
    set?: Enumerable<SubscriptionWhereUniqueInput>
    disconnect?: Enumerable<SubscriptionWhereUniqueInput>
    delete?: Enumerable<SubscriptionWhereUniqueInput>
    connect?: Enumerable<SubscriptionWhereUniqueInput>
    update?: Enumerable<SubscriptionUpdateWithWhereUniqueWithoutSubscribedToInput>
    updateMany?: Enumerable<SubscriptionUpdateManyWithWhereWithoutSubscribedToInput>
    deleteMany?: Enumerable<SubscriptionScalarWhereInput>
  }

  export type ViewUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ViewCreateWithoutUserInput>, Enumerable<ViewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ViewCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ViewUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ViewCreateManyUserInputEnvelope
    set?: Enumerable<ViewWhereUniqueInput>
    disconnect?: Enumerable<ViewWhereUniqueInput>
    delete?: Enumerable<ViewWhereUniqueInput>
    connect?: Enumerable<ViewWhereUniqueInput>
    update?: Enumerable<ViewUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ViewUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ViewScalarWhereInput>
  }

  export type VideoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<VideoCreateWithoutUserInput>, Enumerable<VideoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<VideoUpsertWithWhereUniqueWithoutUserInput>
    createMany?: VideoCreateManyUserInputEnvelope
    set?: Enumerable<VideoWhereUniqueInput>
    disconnect?: Enumerable<VideoWhereUniqueInput>
    delete?: Enumerable<VideoWhereUniqueInput>
    connect?: Enumerable<VideoWhereUniqueInput>
    update?: Enumerable<VideoUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<VideoUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<VideoScalarWhereInput>
  }

  export type VideoLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<VideoLikeCreateWithoutUserInput>, Enumerable<VideoLikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VideoLikeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<VideoLikeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: VideoLikeCreateManyUserInputEnvelope
    set?: Enumerable<VideoLikeWhereUniqueInput>
    disconnect?: Enumerable<VideoLikeWhereUniqueInput>
    delete?: Enumerable<VideoLikeWhereUniqueInput>
    connect?: Enumerable<VideoLikeWhereUniqueInput>
    update?: Enumerable<VideoLikeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<VideoLikeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<VideoLikeScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput = {
    create?: XOR<Enumerable<SubscriptionCreateWithoutSubscriberInput>, Enumerable<SubscriptionUncheckedCreateWithoutSubscriberInput>>
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutSubscriberInput>
    upsert?: Enumerable<SubscriptionUpsertWithWhereUniqueWithoutSubscriberInput>
    createMany?: SubscriptionCreateManySubscriberInputEnvelope
    set?: Enumerable<SubscriptionWhereUniqueInput>
    disconnect?: Enumerable<SubscriptionWhereUniqueInput>
    delete?: Enumerable<SubscriptionWhereUniqueInput>
    connect?: Enumerable<SubscriptionWhereUniqueInput>
    update?: Enumerable<SubscriptionUpdateWithWhereUniqueWithoutSubscriberInput>
    updateMany?: Enumerable<SubscriptionUpdateManyWithWhereWithoutSubscriberInput>
    deleteMany?: Enumerable<SubscriptionScalarWhereInput>
  }

  export type SubscriptionUncheckedUpdateManyWithoutSubscribedToNestedInput = {
    create?: XOR<Enumerable<SubscriptionCreateWithoutSubscribedToInput>, Enumerable<SubscriptionUncheckedCreateWithoutSubscribedToInput>>
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutSubscribedToInput>
    upsert?: Enumerable<SubscriptionUpsertWithWhereUniqueWithoutSubscribedToInput>
    createMany?: SubscriptionCreateManySubscribedToInputEnvelope
    set?: Enumerable<SubscriptionWhereUniqueInput>
    disconnect?: Enumerable<SubscriptionWhereUniqueInput>
    delete?: Enumerable<SubscriptionWhereUniqueInput>
    connect?: Enumerable<SubscriptionWhereUniqueInput>
    update?: Enumerable<SubscriptionUpdateWithWhereUniqueWithoutSubscribedToInput>
    updateMany?: Enumerable<SubscriptionUpdateManyWithWhereWithoutSubscribedToInput>
    deleteMany?: Enumerable<SubscriptionScalarWhereInput>
  }

  export type ViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ViewCreateWithoutUserInput>, Enumerable<ViewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ViewCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ViewUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ViewCreateManyUserInputEnvelope
    set?: Enumerable<ViewWhereUniqueInput>
    disconnect?: Enumerable<ViewWhereUniqueInput>
    delete?: Enumerable<ViewWhereUniqueInput>
    connect?: Enumerable<ViewWhereUniqueInput>
    update?: Enumerable<ViewUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ViewUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ViewScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutCommentsInput = {
    create?: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCommentsInput
    connect?: VideoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type VideoUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCommentsInput
    upsert?: VideoUpsertWithoutCommentsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<VideoUpdateWithoutCommentsInput, VideoUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutSubscribersInput = {
    create?: XOR<UserCreateWithoutSubscribersInput, UserUncheckedCreateWithoutSubscribersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscribersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubscribedToInput = {
    create?: XOR<UserCreateWithoutSubscribedToInput, UserUncheckedCreateWithoutSubscribedToInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscribedToInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscribersNestedInput = {
    create?: XOR<UserCreateWithoutSubscribersInput, UserUncheckedCreateWithoutSubscribersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscribersInput
    upsert?: UserUpsertWithoutSubscribersInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSubscribersInput, UserUncheckedUpdateWithoutSubscribersInput>
  }

  export type UserUpdateOneRequiredWithoutSubscribedToNestedInput = {
    create?: XOR<UserCreateWithoutSubscribedToInput, UserUncheckedCreateWithoutSubscribedToInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscribedToInput
    upsert?: UserUpsertWithoutSubscribedToInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSubscribedToInput, UserUncheckedUpdateWithoutSubscribedToInput>
  }

  export type UserCreateNestedOneWithoutVideosInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    connect?: UserWhereUniqueInput
  }

  export type VideoLikeCreateNestedManyWithoutVideoInput = {
    create?: XOR<Enumerable<VideoLikeCreateWithoutVideoInput>, Enumerable<VideoLikeUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<VideoLikeCreateOrConnectWithoutVideoInput>
    createMany?: VideoLikeCreateManyVideoInputEnvelope
    connect?: Enumerable<VideoLikeWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutVideoInput = {
    create?: XOR<Enumerable<CommentCreateWithoutVideoInput>, Enumerable<CommentUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutVideoInput>
    createMany?: CommentCreateManyVideoInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ViewCreateNestedManyWithoutVideoInput = {
    create?: XOR<Enumerable<ViewCreateWithoutVideoInput>, Enumerable<ViewUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<ViewCreateOrConnectWithoutVideoInput>
    createMany?: ViewCreateManyVideoInputEnvelope
    connect?: Enumerable<ViewWhereUniqueInput>
  }

  export type VideoLikeUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<Enumerable<VideoLikeCreateWithoutVideoInput>, Enumerable<VideoLikeUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<VideoLikeCreateOrConnectWithoutVideoInput>
    createMany?: VideoLikeCreateManyVideoInputEnvelope
    connect?: Enumerable<VideoLikeWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<Enumerable<CommentCreateWithoutVideoInput>, Enumerable<CommentUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutVideoInput>
    createMany?: CommentCreateManyVideoInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ViewUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<Enumerable<ViewCreateWithoutVideoInput>, Enumerable<ViewUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<ViewCreateOrConnectWithoutVideoInput>
    createMany?: ViewCreateManyVideoInputEnvelope
    connect?: Enumerable<ViewWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    upsert?: UserUpsertWithoutVideosInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
  }

  export type VideoLikeUpdateManyWithoutVideoNestedInput = {
    create?: XOR<Enumerable<VideoLikeCreateWithoutVideoInput>, Enumerable<VideoLikeUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<VideoLikeCreateOrConnectWithoutVideoInput>
    upsert?: Enumerable<VideoLikeUpsertWithWhereUniqueWithoutVideoInput>
    createMany?: VideoLikeCreateManyVideoInputEnvelope
    set?: Enumerable<VideoLikeWhereUniqueInput>
    disconnect?: Enumerable<VideoLikeWhereUniqueInput>
    delete?: Enumerable<VideoLikeWhereUniqueInput>
    connect?: Enumerable<VideoLikeWhereUniqueInput>
    update?: Enumerable<VideoLikeUpdateWithWhereUniqueWithoutVideoInput>
    updateMany?: Enumerable<VideoLikeUpdateManyWithWhereWithoutVideoInput>
    deleteMany?: Enumerable<VideoLikeScalarWhereInput>
  }

  export type CommentUpdateManyWithoutVideoNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutVideoInput>, Enumerable<CommentUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutVideoInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutVideoInput>
    createMany?: CommentCreateManyVideoInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutVideoInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutVideoInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ViewUpdateManyWithoutVideoNestedInput = {
    create?: XOR<Enumerable<ViewCreateWithoutVideoInput>, Enumerable<ViewUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<ViewCreateOrConnectWithoutVideoInput>
    upsert?: Enumerable<ViewUpsertWithWhereUniqueWithoutVideoInput>
    createMany?: ViewCreateManyVideoInputEnvelope
    set?: Enumerable<ViewWhereUniqueInput>
    disconnect?: Enumerable<ViewWhereUniqueInput>
    delete?: Enumerable<ViewWhereUniqueInput>
    connect?: Enumerable<ViewWhereUniqueInput>
    update?: Enumerable<ViewUpdateWithWhereUniqueWithoutVideoInput>
    updateMany?: Enumerable<ViewUpdateManyWithWhereWithoutVideoInput>
    deleteMany?: Enumerable<ViewScalarWhereInput>
  }

  export type VideoLikeUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<Enumerable<VideoLikeCreateWithoutVideoInput>, Enumerable<VideoLikeUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<VideoLikeCreateOrConnectWithoutVideoInput>
    upsert?: Enumerable<VideoLikeUpsertWithWhereUniqueWithoutVideoInput>
    createMany?: VideoLikeCreateManyVideoInputEnvelope
    set?: Enumerable<VideoLikeWhereUniqueInput>
    disconnect?: Enumerable<VideoLikeWhereUniqueInput>
    delete?: Enumerable<VideoLikeWhereUniqueInput>
    connect?: Enumerable<VideoLikeWhereUniqueInput>
    update?: Enumerable<VideoLikeUpdateWithWhereUniqueWithoutVideoInput>
    updateMany?: Enumerable<VideoLikeUpdateManyWithWhereWithoutVideoInput>
    deleteMany?: Enumerable<VideoLikeScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutVideoInput>, Enumerable<CommentUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutVideoInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutVideoInput>
    createMany?: CommentCreateManyVideoInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutVideoInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutVideoInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ViewUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<Enumerable<ViewCreateWithoutVideoInput>, Enumerable<ViewUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<ViewCreateOrConnectWithoutVideoInput>
    upsert?: Enumerable<ViewUpsertWithWhereUniqueWithoutVideoInput>
    createMany?: ViewCreateManyVideoInputEnvelope
    set?: Enumerable<ViewWhereUniqueInput>
    disconnect?: Enumerable<ViewWhereUniqueInput>
    delete?: Enumerable<ViewWhereUniqueInput>
    connect?: Enumerable<ViewWhereUniqueInput>
    update?: Enumerable<ViewUpdateWithWhereUniqueWithoutVideoInput>
    updateMany?: Enumerable<ViewUpdateManyWithWhereWithoutVideoInput>
    deleteMany?: Enumerable<ViewScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutVideoLikesInput = {
    create?: XOR<UserCreateWithoutVideoLikesInput, UserUncheckedCreateWithoutVideoLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideoLikesInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutVideoLikesInput = {
    create?: XOR<VideoCreateWithoutVideoLikesInput, VideoUncheckedCreateWithoutVideoLikesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutVideoLikesInput
    connect?: VideoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVideoLikesNestedInput = {
    create?: XOR<UserCreateWithoutVideoLikesInput, UserUncheckedCreateWithoutVideoLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideoLikesInput
    upsert?: UserUpsertWithoutVideoLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutVideoLikesInput, UserUncheckedUpdateWithoutVideoLikesInput>
  }

  export type VideoUpdateOneRequiredWithoutVideoLikesNestedInput = {
    create?: XOR<VideoCreateWithoutVideoLikesInput, VideoUncheckedCreateWithoutVideoLikesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutVideoLikesInput
    upsert?: VideoUpsertWithoutVideoLikesInput
    connect?: VideoWhereUniqueInput
    update?: XOR<VideoUpdateWithoutVideoLikesInput, VideoUncheckedUpdateWithoutVideoLikesInput>
  }

  export type UserCreateNestedOneWithoutViewsInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutViewsInput = {
    create?: XOR<VideoCreateWithoutViewsInput, VideoUncheckedCreateWithoutViewsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutViewsInput
    connect?: VideoWhereUniqueInput
  }

  export type UserUpdateOneWithoutViewsNestedInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    upsert?: UserUpsertWithoutViewsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
  }

  export type VideoUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<VideoCreateWithoutViewsInput, VideoUncheckedCreateWithoutViewsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutViewsInput
    upsert?: VideoUpsertWithoutViewsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<VideoUpdateWithoutViewsInput, VideoUncheckedUpdateWithoutViewsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type VideoCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    videoLikes?: VideoLikeCreateNestedManyWithoutVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    views?: ViewCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    videoLikes?: VideoLikeUncheckedCreateNestedManyWithoutVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    views?: ViewUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutUserInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput>
  }

  export type VideoCreateManyUserInputEnvelope = {
    data: Enumerable<VideoCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type VideoLikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    like?: number
    video: VideoCreateNestedOneWithoutVideoLikesInput
  }

  export type VideoLikeUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    like?: number
    videoId: string
  }

  export type VideoLikeCreateOrConnectWithoutUserInput = {
    where: VideoLikeWhereUniqueInput
    create: XOR<VideoLikeCreateWithoutUserInput, VideoLikeUncheckedCreateWithoutUserInput>
  }

  export type VideoLikeCreateManyUserInputEnvelope = {
    data: Enumerable<VideoLikeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    text: string
    video: VideoCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    text: string
    videoId: string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: Enumerable<CommentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutSubscriberInput = {
    id?: string
    createdAt?: Date | string
    subscribedTo: UserCreateNestedOneWithoutSubscribedToInput
  }

  export type SubscriptionUncheckedCreateWithoutSubscriberInput = {
    id?: string
    createdAt?: Date | string
    subscribedToId: string
  }

  export type SubscriptionCreateOrConnectWithoutSubscriberInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutSubscriberInput, SubscriptionUncheckedCreateWithoutSubscriberInput>
  }

  export type SubscriptionCreateManySubscriberInputEnvelope = {
    data: Enumerable<SubscriptionCreateManySubscriberInput>
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutSubscribedToInput = {
    id?: string
    createdAt?: Date | string
    subscriber: UserCreateNestedOneWithoutSubscribersInput
  }

  export type SubscriptionUncheckedCreateWithoutSubscribedToInput = {
    id?: string
    createdAt?: Date | string
    subscriberId: string
  }

  export type SubscriptionCreateOrConnectWithoutSubscribedToInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutSubscribedToInput, SubscriptionUncheckedCreateWithoutSubscribedToInput>
  }

  export type SubscriptionCreateManySubscribedToInputEnvelope = {
    data: Enumerable<SubscriptionCreateManySubscribedToInput>
    skipDuplicates?: boolean
  }

  export type ViewCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutViewsInput
  }

  export type ViewUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    videoId: string
  }

  export type ViewCreateOrConnectWithoutUserInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutUserInput, ViewUncheckedCreateWithoutUserInput>
  }

  export type ViewCreateManyUserInputEnvelope = {
    data: Enumerable<ViewCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type VideoUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutUserInput, VideoUncheckedUpdateWithoutUserInput>
    create: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutUserInput, VideoUncheckedUpdateWithoutUserInput>
  }

  export type VideoUpdateManyWithWhereWithoutUserInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutVideosInput>
  }

  export type VideoScalarWhereInput = {
    AND?: Enumerable<VideoScalarWhereInput>
    OR?: Enumerable<VideoScalarWhereInput>
    NOT?: Enumerable<VideoScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    description?: StringNullableFilter | string | null
    url?: StringFilter | string
    thumbnail?: StringFilter | string
    userId?: StringFilter | string
  }

  export type VideoLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoLikeWhereUniqueInput
    update: XOR<VideoLikeUpdateWithoutUserInput, VideoLikeUncheckedUpdateWithoutUserInput>
    create: XOR<VideoLikeCreateWithoutUserInput, VideoLikeUncheckedCreateWithoutUserInput>
  }

  export type VideoLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoLikeWhereUniqueInput
    data: XOR<VideoLikeUpdateWithoutUserInput, VideoLikeUncheckedUpdateWithoutUserInput>
  }

  export type VideoLikeUpdateManyWithWhereWithoutUserInput = {
    where: VideoLikeScalarWhereInput
    data: XOR<VideoLikeUpdateManyMutationInput, VideoLikeUncheckedUpdateManyWithoutVideoLikesInput>
  }

  export type VideoLikeScalarWhereInput = {
    AND?: Enumerable<VideoLikeScalarWhereInput>
    OR?: Enumerable<VideoLikeScalarWhereInput>
    NOT?: Enumerable<VideoLikeScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    like?: IntFilter | number
    userId?: StringFilter | string
    videoId?: StringFilter | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    text?: StringFilter | string
    userId?: StringFilter | string
    videoId?: StringFilter | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutSubscriberInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutSubscriberInput, SubscriptionUncheckedUpdateWithoutSubscriberInput>
    create: XOR<SubscriptionCreateWithoutSubscriberInput, SubscriptionUncheckedCreateWithoutSubscriberInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutSubscriberInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutSubscriberInput, SubscriptionUncheckedUpdateWithoutSubscriberInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutSubscriberInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutSubscribersInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: Enumerable<SubscriptionScalarWhereInput>
    OR?: Enumerable<SubscriptionScalarWhereInput>
    NOT?: Enumerable<SubscriptionScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    subscriberId?: StringFilter | string
    subscribedToId?: StringFilter | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutSubscribedToInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutSubscribedToInput, SubscriptionUncheckedUpdateWithoutSubscribedToInput>
    create: XOR<SubscriptionCreateWithoutSubscribedToInput, SubscriptionUncheckedCreateWithoutSubscribedToInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutSubscribedToInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutSubscribedToInput, SubscriptionUncheckedUpdateWithoutSubscribedToInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutSubscribedToInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutSubscribedToInput>
  }

  export type ViewUpsertWithWhereUniqueWithoutUserInput = {
    where: ViewWhereUniqueInput
    update: XOR<ViewUpdateWithoutUserInput, ViewUncheckedUpdateWithoutUserInput>
    create: XOR<ViewCreateWithoutUserInput, ViewUncheckedCreateWithoutUserInput>
  }

  export type ViewUpdateWithWhereUniqueWithoutUserInput = {
    where: ViewWhereUniqueInput
    data: XOR<ViewUpdateWithoutUserInput, ViewUncheckedUpdateWithoutUserInput>
  }

  export type ViewUpdateManyWithWhereWithoutUserInput = {
    where: ViewScalarWhereInput
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyWithoutViewsInput>
  }

  export type ViewScalarWhereInput = {
    AND?: Enumerable<ViewScalarWhereInput>
    OR?: Enumerable<ViewScalarWhereInput>
    NOT?: Enumerable<ViewScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: StringNullableFilter | string | null
    videoId?: StringFilter | string
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoCreateNestedManyWithoutUserInput
    videoLikes?: VideoLikeCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionCreateNestedManyWithoutSubscriberInput
    subscribedTo?: SubscriptionCreateNestedManyWithoutSubscribedToInput
    views?: ViewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    videoLikes?: VideoLikeUncheckedCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput
    subscribedTo?: SubscriptionUncheckedCreateNestedManyWithoutSubscribedToInput
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type VideoCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    user: UserCreateNestedOneWithoutVideosInput
    videoLikes?: VideoLikeCreateNestedManyWithoutVideoInput
    views?: ViewCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    userId: string
    videoLikes?: VideoLikeUncheckedCreateNestedManyWithoutVideoInput
    views?: ViewUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutCommentsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    videoLikes?: VideoLikeUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUpdateManyWithoutSubscriberNestedInput
    subscribedTo?: SubscriptionUpdateManyWithoutSubscribedToNestedInput
    views?: ViewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    videoLikes?: VideoLikeUncheckedUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribedTo?: SubscriptionUncheckedUpdateManyWithoutSubscribedToNestedInput
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithoutCommentsInput = {
    update: XOR<VideoUpdateWithoutCommentsInput, VideoUncheckedUpdateWithoutCommentsInput>
    create: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
  }

  export type VideoUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    videoLikes?: VideoLikeUpdateManyWithoutVideoNestedInput
    views?: ViewUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoLikes?: VideoLikeUncheckedUpdateManyWithoutVideoNestedInput
    views?: ViewUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type UserCreateWithoutSubscribersInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoCreateNestedManyWithoutUserInput
    videoLikes?: VideoLikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    subscribedTo?: SubscriptionCreateNestedManyWithoutSubscribedToInput
    views?: ViewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscribersInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    videoLikes?: VideoLikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    subscribedTo?: SubscriptionUncheckedCreateNestedManyWithoutSubscribedToInput
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscribersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscribersInput, UserUncheckedCreateWithoutSubscribersInput>
  }

  export type UserCreateWithoutSubscribedToInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoCreateNestedManyWithoutUserInput
    videoLikes?: VideoLikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionCreateNestedManyWithoutSubscriberInput
    views?: ViewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscribedToInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    videoLikes?: VideoLikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscribedToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscribedToInput, UserUncheckedCreateWithoutSubscribedToInput>
  }

  export type UserUpsertWithoutSubscribersInput = {
    update: XOR<UserUpdateWithoutSubscribersInput, UserUncheckedUpdateWithoutSubscribersInput>
    create: XOR<UserCreateWithoutSubscribersInput, UserUncheckedCreateWithoutSubscribersInput>
  }

  export type UserUpdateWithoutSubscribersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    videoLikes?: VideoLikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    subscribedTo?: SubscriptionUpdateManyWithoutSubscribedToNestedInput
    views?: ViewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscribersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    videoLikes?: VideoLikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    subscribedTo?: SubscriptionUncheckedUpdateManyWithoutSubscribedToNestedInput
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSubscribedToInput = {
    update: XOR<UserUpdateWithoutSubscribedToInput, UserUncheckedUpdateWithoutSubscribedToInput>
    create: XOR<UserCreateWithoutSubscribedToInput, UserUncheckedCreateWithoutSubscribedToInput>
  }

  export type UserUpdateWithoutSubscribedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    videoLikes?: VideoLikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUpdateManyWithoutSubscriberNestedInput
    views?: ViewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscribedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    videoLikes?: VideoLikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutVideosInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videoLikes?: VideoLikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionCreateNestedManyWithoutSubscriberInput
    subscribedTo?: SubscriptionCreateNestedManyWithoutSubscribedToInput
    views?: ViewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVideosInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videoLikes?: VideoLikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput
    subscribedTo?: SubscriptionUncheckedCreateNestedManyWithoutSubscribedToInput
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVideosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
  }

  export type VideoLikeCreateWithoutVideoInput = {
    id?: string
    createdAt?: Date | string
    like?: number
    user: UserCreateNestedOneWithoutVideoLikesInput
  }

  export type VideoLikeUncheckedCreateWithoutVideoInput = {
    id?: string
    createdAt?: Date | string
    like?: number
    userId: string
  }

  export type VideoLikeCreateOrConnectWithoutVideoInput = {
    where: VideoLikeWhereUniqueInput
    create: XOR<VideoLikeCreateWithoutVideoInput, VideoLikeUncheckedCreateWithoutVideoInput>
  }

  export type VideoLikeCreateManyVideoInputEnvelope = {
    data: Enumerable<VideoLikeCreateManyVideoInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutVideoInput = {
    id?: string
    createdAt?: Date | string
    text: string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutVideoInput = {
    id?: string
    createdAt?: Date | string
    text: string
    userId: string
  }

  export type CommentCreateOrConnectWithoutVideoInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput>
  }

  export type CommentCreateManyVideoInputEnvelope = {
    data: Enumerable<CommentCreateManyVideoInput>
    skipDuplicates?: boolean
  }

  export type ViewCreateWithoutVideoInput = {
    id?: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutViewsInput
  }

  export type ViewUncheckedCreateWithoutVideoInput = {
    id?: string
    createdAt?: Date | string
    userId?: string | null
  }

  export type ViewCreateOrConnectWithoutVideoInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutVideoInput, ViewUncheckedCreateWithoutVideoInput>
  }

  export type ViewCreateManyVideoInputEnvelope = {
    data: Enumerable<ViewCreateManyVideoInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVideosInput = {
    update: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
  }

  export type UserUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videoLikes?: VideoLikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUpdateManyWithoutSubscriberNestedInput
    subscribedTo?: SubscriptionUpdateManyWithoutSubscribedToNestedInput
    views?: ViewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videoLikes?: VideoLikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribedTo?: SubscriptionUncheckedUpdateManyWithoutSubscribedToNestedInput
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoLikeUpsertWithWhereUniqueWithoutVideoInput = {
    where: VideoLikeWhereUniqueInput
    update: XOR<VideoLikeUpdateWithoutVideoInput, VideoLikeUncheckedUpdateWithoutVideoInput>
    create: XOR<VideoLikeCreateWithoutVideoInput, VideoLikeUncheckedCreateWithoutVideoInput>
  }

  export type VideoLikeUpdateWithWhereUniqueWithoutVideoInput = {
    where: VideoLikeWhereUniqueInput
    data: XOR<VideoLikeUpdateWithoutVideoInput, VideoLikeUncheckedUpdateWithoutVideoInput>
  }

  export type VideoLikeUpdateManyWithWhereWithoutVideoInput = {
    where: VideoLikeScalarWhereInput
    data: XOR<VideoLikeUpdateManyMutationInput, VideoLikeUncheckedUpdateManyWithoutVideoLikesInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutVideoInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutVideoInput, CommentUncheckedUpdateWithoutVideoInput>
    create: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutVideoInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutVideoInput, CommentUncheckedUpdateWithoutVideoInput>
  }

  export type CommentUpdateManyWithWhereWithoutVideoInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type ViewUpsertWithWhereUniqueWithoutVideoInput = {
    where: ViewWhereUniqueInput
    update: XOR<ViewUpdateWithoutVideoInput, ViewUncheckedUpdateWithoutVideoInput>
    create: XOR<ViewCreateWithoutVideoInput, ViewUncheckedCreateWithoutVideoInput>
  }

  export type ViewUpdateWithWhereUniqueWithoutVideoInput = {
    where: ViewWhereUniqueInput
    data: XOR<ViewUpdateWithoutVideoInput, ViewUncheckedUpdateWithoutVideoInput>
  }

  export type ViewUpdateManyWithWhereWithoutVideoInput = {
    where: ViewScalarWhereInput
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyWithoutViewsInput>
  }

  export type UserCreateWithoutVideoLikesInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionCreateNestedManyWithoutSubscriberInput
    subscribedTo?: SubscriptionCreateNestedManyWithoutSubscribedToInput
    views?: ViewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVideoLikesInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput
    subscribedTo?: SubscriptionUncheckedCreateNestedManyWithoutSubscribedToInput
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVideoLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideoLikesInput, UserUncheckedCreateWithoutVideoLikesInput>
  }

  export type VideoCreateWithoutVideoLikesInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    user: UserCreateNestedOneWithoutVideosInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    views?: ViewCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutVideoLikesInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    userId: string
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    views?: ViewUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutVideoLikesInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutVideoLikesInput, VideoUncheckedCreateWithoutVideoLikesInput>
  }

  export type UserUpsertWithoutVideoLikesInput = {
    update: XOR<UserUpdateWithoutVideoLikesInput, UserUncheckedUpdateWithoutVideoLikesInput>
    create: XOR<UserCreateWithoutVideoLikesInput, UserUncheckedCreateWithoutVideoLikesInput>
  }

  export type UserUpdateWithoutVideoLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUpdateManyWithoutSubscriberNestedInput
    subscribedTo?: SubscriptionUpdateManyWithoutSubscribedToNestedInput
    views?: ViewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVideoLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribedTo?: SubscriptionUncheckedUpdateManyWithoutSubscribedToNestedInput
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithoutVideoLikesInput = {
    update: XOR<VideoUpdateWithoutVideoLikesInput, VideoUncheckedUpdateWithoutVideoLikesInput>
    create: XOR<VideoCreateWithoutVideoLikesInput, VideoUncheckedCreateWithoutVideoLikesInput>
  }

  export type VideoUpdateWithoutVideoLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    views?: ViewUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutVideoLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    views?: ViewUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type UserCreateWithoutViewsInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoCreateNestedManyWithoutUserInput
    videoLikes?: VideoLikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionCreateNestedManyWithoutSubscriberInput
    subscribedTo?: SubscriptionCreateNestedManyWithoutSubscribedToInput
  }

  export type UserUncheckedCreateWithoutViewsInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    avatar?: string
    cover?: string
    about?: string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    videoLikes?: VideoLikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    subscribers?: SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput
    subscribedTo?: SubscriptionUncheckedCreateNestedManyWithoutSubscribedToInput
  }

  export type UserCreateOrConnectWithoutViewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
  }

  export type VideoCreateWithoutViewsInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    user: UserCreateNestedOneWithoutVideosInput
    videoLikes?: VideoLikeCreateNestedManyWithoutVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutViewsInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
    userId: string
    videoLikes?: VideoLikeUncheckedCreateNestedManyWithoutVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutViewsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutViewsInput, VideoUncheckedCreateWithoutViewsInput>
  }

  export type UserUpsertWithoutViewsInput = {
    update: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
  }

  export type UserUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    videoLikes?: VideoLikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUpdateManyWithoutSubscriberNestedInput
    subscribedTo?: SubscriptionUpdateManyWithoutSubscribedToNestedInput
  }

  export type UserUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    videoLikes?: VideoLikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    subscribers?: SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribedTo?: SubscriptionUncheckedUpdateManyWithoutSubscribedToNestedInput
  }

  export type VideoUpsertWithoutViewsInput = {
    update: XOR<VideoUpdateWithoutViewsInput, VideoUncheckedUpdateWithoutViewsInput>
    create: XOR<VideoCreateWithoutViewsInput, VideoUncheckedCreateWithoutViewsInput>
  }

  export type VideoUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    videoLikes?: VideoLikeUpdateManyWithoutVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoLikes?: VideoLikeUncheckedUpdateManyWithoutVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    url: string
    thumbnail: string
  }

  export type VideoLikeCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    like?: number
    videoId: string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    text: string
    videoId: string
  }

  export type SubscriptionCreateManySubscriberInput = {
    id?: string
    createdAt?: Date | string
    subscribedToId: string
  }

  export type SubscriptionCreateManySubscribedToInput = {
    id?: string
    createdAt?: Date | string
    subscriberId: string
  }

  export type ViewCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    videoId: string
  }

  export type VideoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    videoLikes?: VideoLikeUpdateManyWithoutVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    views?: ViewUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    videoLikes?: VideoLikeUncheckedUpdateManyWithoutVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    views?: ViewUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type VideoLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    video?: VideoUpdateOneRequiredWithoutVideoLikesNestedInput
  }

  export type VideoLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoLikeUncheckedUpdateManyWithoutVideoLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUpdateWithoutSubscriberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribedTo?: UserUpdateOneRequiredWithoutSubscribedToNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutSubscriberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribedToId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutSubscribersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribedToId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUpdateWithoutSubscribedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriber?: UserUpdateOneRequiredWithoutSubscribersNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutSubscribedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriberId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutSubscribedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriberId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewUncheckedUpdateManyWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoLikeCreateManyVideoInput = {
    id?: string
    createdAt?: Date | string
    like?: number
    userId: string
  }

  export type CommentCreateManyVideoInput = {
    id?: string
    createdAt?: Date | string
    text: string
    userId: string
  }

  export type ViewCreateManyVideoInput = {
    id?: string
    createdAt?: Date | string
    userId?: string | null
  }

  export type VideoLikeUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutVideoLikesNestedInput
  }

  export type VideoLikeUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutViewsNestedInput
  }

  export type ViewUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
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