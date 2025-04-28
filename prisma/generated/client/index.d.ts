
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
 * Model attendees
 * 
 */
export type attendees = $Result.DefaultSelection<Prisma.$attendeesPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model referral_coupons
 * 
 */
export type referral_coupons = $Result.DefaultSelection<Prisma.$referral_couponsPayload>
/**
 * Model reviews
 * 
 */
export type reviews = $Result.DefaultSelection<Prisma.$reviewsPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model vouchers
 * 
 */
export type vouchers = $Result.DefaultSelection<Prisma.$vouchersPayload>
/**
 * Model ticket_types
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type ticket_types = $Result.DefaultSelection<Prisma.$ticket_typesPayload>
/**
 * Model transaction_detail
 * 
 */
export type transaction_detail = $Result.DefaultSelection<Prisma.$transaction_detailPayload>
/**
 * Model organizers
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type organizers = $Result.DefaultSelection<Prisma.$organizersPayload>
/**
 * Model cities
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type cities = $Result.DefaultSelection<Prisma.$citiesPayload>
/**
 * Model points
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type points = $Result.DefaultSelection<Prisma.$pointsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  Music: 'Music',
  Tecnology: 'Tecnology',
  Culinary: 'Culinary',
  Arts: 'Arts',
  Sports: 'Sports',
  Education: 'Education'
};

export type Category = (typeof Category)[keyof typeof Category]


export const Role: {
  user: 'user',
  organizer: 'organizer'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  Pending: 'Pending',
  Confirmating: 'Confirmating',
  Approved: 'Approved',
  Rejected: 'Rejected',
  Canceled: 'Canceled',
  Expired: 'Expired'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attendees
 * const attendees = await prisma.attendees.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Attendees
   * const attendees = await prisma.attendees.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.attendees`: Exposes CRUD operations for the **attendees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendees
    * const attendees = await prisma.attendees.findMany()
    * ```
    */
  get attendees(): Prisma.attendeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referral_coupons`: Exposes CRUD operations for the **referral_coupons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referral_coupons
    * const referral_coupons = await prisma.referral_coupons.findMany()
    * ```
    */
  get referral_coupons(): Prisma.referral_couponsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.reviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vouchers`: Exposes CRUD operations for the **vouchers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.vouchers.findMany()
    * ```
    */
  get vouchers(): Prisma.vouchersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket_types`: Exposes CRUD operations for the **ticket_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_types
    * const ticket_types = await prisma.ticket_types.findMany()
    * ```
    */
  get ticket_types(): Prisma.ticket_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction_detail`: Exposes CRUD operations for the **transaction_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_details
    * const transaction_details = await prisma.transaction_detail.findMany()
    * ```
    */
  get transaction_detail(): Prisma.transaction_detailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizers`: Exposes CRUD operations for the **organizers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizers
    * const organizers = await prisma.organizers.findMany()
    * ```
    */
  get organizers(): Prisma.organizersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cities`: Exposes CRUD operations for the **cities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.cities.findMany()
    * ```
    */
  get cities(): Prisma.citiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.points`: Exposes CRUD operations for the **points** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.points.findMany()
    * ```
    */
  get points(): Prisma.pointsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    attendees: 'attendees',
    events: 'events',
    notifications: 'notifications',
    referral_coupons: 'referral_coupons',
    reviews: 'reviews',
    transactions: 'transactions',
    users: 'users',
    vouchers: 'vouchers',
    ticket_types: 'ticket_types',
    transaction_detail: 'transaction_detail',
    organizers: 'organizers',
    cities: 'cities',
    points: 'points'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "attendees" | "events" | "notifications" | "referral_coupons" | "reviews" | "transactions" | "users" | "vouchers" | "ticket_types" | "transaction_detail" | "organizers" | "cities" | "points"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      attendees: {
        payload: Prisma.$attendeesPayload<ExtArgs>
        fields: Prisma.attendeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attendeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attendeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          findFirst: {
            args: Prisma.attendeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attendeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          findMany: {
            args: Prisma.attendeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>[]
          }
          create: {
            args: Prisma.attendeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          createMany: {
            args: Prisma.attendeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.attendeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>[]
          }
          delete: {
            args: Prisma.attendeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          update: {
            args: Prisma.attendeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          deleteMany: {
            args: Prisma.attendeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attendeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.attendeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>[]
          }
          upsert: {
            args: Prisma.attendeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          aggregate: {
            args: Prisma.AttendeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendees>
          }
          groupBy: {
            args: Prisma.attendeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.attendeesCountArgs<ExtArgs>
            result: $Utils.Optional<AttendeesCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      referral_coupons: {
        payload: Prisma.$referral_couponsPayload<ExtArgs>
        fields: Prisma.referral_couponsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.referral_couponsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.referral_couponsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload>
          }
          findFirst: {
            args: Prisma.referral_couponsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.referral_couponsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload>
          }
          findMany: {
            args: Prisma.referral_couponsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload>[]
          }
          create: {
            args: Prisma.referral_couponsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload>
          }
          createMany: {
            args: Prisma.referral_couponsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.referral_couponsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload>[]
          }
          delete: {
            args: Prisma.referral_couponsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload>
          }
          update: {
            args: Prisma.referral_couponsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload>
          }
          deleteMany: {
            args: Prisma.referral_couponsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.referral_couponsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.referral_couponsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload>[]
          }
          upsert: {
            args: Prisma.referral_couponsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_couponsPayload>
          }
          aggregate: {
            args: Prisma.Referral_couponsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral_coupons>
          }
          groupBy: {
            args: Prisma.referral_couponsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Referral_couponsGroupByOutputType>[]
          }
          count: {
            args: Prisma.referral_couponsCountArgs<ExtArgs>
            result: $Utils.Optional<Referral_couponsCountAggregateOutputType> | number
          }
        }
      }
      reviews: {
        payload: Prisma.$reviewsPayload<ExtArgs>
        fields: Prisma.reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findFirst: {
            args: Prisma.reviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findMany: {
            args: Prisma.reviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          create: {
            args: Prisma.reviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          createMany: {
            args: Prisma.reviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          delete: {
            args: Prisma.reviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          update: {
            args: Prisma.reviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          deleteMany: {
            args: Prisma.reviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          upsert: {
            args: Prisma.reviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.reviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      vouchers: {
        payload: Prisma.$vouchersPayload<ExtArgs>
        fields: Prisma.vouchersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vouchersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vouchersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          findFirst: {
            args: Prisma.vouchersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vouchersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          findMany: {
            args: Prisma.vouchersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>[]
          }
          create: {
            args: Prisma.vouchersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          createMany: {
            args: Prisma.vouchersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vouchersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>[]
          }
          delete: {
            args: Prisma.vouchersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          update: {
            args: Prisma.vouchersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          deleteMany: {
            args: Prisma.vouchersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vouchersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vouchersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>[]
          }
          upsert: {
            args: Prisma.vouchersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          aggregate: {
            args: Prisma.VouchersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVouchers>
          }
          groupBy: {
            args: Prisma.vouchersGroupByArgs<ExtArgs>
            result: $Utils.Optional<VouchersGroupByOutputType>[]
          }
          count: {
            args: Prisma.vouchersCountArgs<ExtArgs>
            result: $Utils.Optional<VouchersCountAggregateOutputType> | number
          }
        }
      }
      ticket_types: {
        payload: Prisma.$ticket_typesPayload<ExtArgs>
        fields: Prisma.ticket_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticket_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticket_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          findFirst: {
            args: Prisma.ticket_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticket_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          findMany: {
            args: Prisma.ticket_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>[]
          }
          create: {
            args: Prisma.ticket_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          createMany: {
            args: Prisma.ticket_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ticket_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>[]
          }
          delete: {
            args: Prisma.ticket_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          update: {
            args: Prisma.ticket_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          deleteMany: {
            args: Prisma.ticket_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticket_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ticket_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>[]
          }
          upsert: {
            args: Prisma.ticket_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          aggregate: {
            args: Prisma.Ticket_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_types>
          }
          groupBy: {
            args: Prisma.ticket_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticket_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_typesCountAggregateOutputType> | number
          }
        }
      }
      transaction_detail: {
        payload: Prisma.$transaction_detailPayload<ExtArgs>
        fields: Prisma.transaction_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaction_detailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaction_detailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          findFirst: {
            args: Prisma.transaction_detailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaction_detailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          findMany: {
            args: Prisma.transaction_detailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>[]
          }
          create: {
            args: Prisma.transaction_detailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          createMany: {
            args: Prisma.transaction_detailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaction_detailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>[]
          }
          delete: {
            args: Prisma.transaction_detailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          update: {
            args: Prisma.transaction_detailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          deleteMany: {
            args: Prisma.transaction_detailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaction_detailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaction_detailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>[]
          }
          upsert: {
            args: Prisma.transaction_detailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          aggregate: {
            args: Prisma.Transaction_detailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction_detail>
          }
          groupBy: {
            args: Prisma.transaction_detailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transaction_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaction_detailCountArgs<ExtArgs>
            result: $Utils.Optional<Transaction_detailCountAggregateOutputType> | number
          }
        }
      }
      organizers: {
        payload: Prisma.$organizersPayload<ExtArgs>
        fields: Prisma.organizersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          findFirst: {
            args: Prisma.organizersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          findMany: {
            args: Prisma.organizersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>[]
          }
          create: {
            args: Prisma.organizersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          createMany: {
            args: Prisma.organizersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>[]
          }
          delete: {
            args: Prisma.organizersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          update: {
            args: Prisma.organizersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          deleteMany: {
            args: Prisma.organizersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organizersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>[]
          }
          upsert: {
            args: Prisma.organizersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          aggregate: {
            args: Prisma.OrganizersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizers>
          }
          groupBy: {
            args: Prisma.organizersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizersGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizersCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizersCountAggregateOutputType> | number
          }
        }
      }
      cities: {
        payload: Prisma.$citiesPayload<ExtArgs>
        fields: Prisma.citiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.citiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.citiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findFirst: {
            args: Prisma.citiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.citiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findMany: {
            args: Prisma.citiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          create: {
            args: Prisma.citiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          createMany: {
            args: Prisma.citiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.citiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          delete: {
            args: Prisma.citiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          update: {
            args: Prisma.citiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          deleteMany: {
            args: Prisma.citiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.citiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.citiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          upsert: {
            args: Prisma.citiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          aggregate: {
            args: Prisma.CitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCities>
          }
          groupBy: {
            args: Prisma.citiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.citiesCountArgs<ExtArgs>
            result: $Utils.Optional<CitiesCountAggregateOutputType> | number
          }
        }
      }
      points: {
        payload: Prisma.$pointsPayload<ExtArgs>
        fields: Prisma.pointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          findFirst: {
            args: Prisma.pointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          findMany: {
            args: Prisma.pointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>[]
          }
          create: {
            args: Prisma.pointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          createMany: {
            args: Prisma.pointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>[]
          }
          delete: {
            args: Prisma.pointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          update: {
            args: Prisma.pointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          deleteMany: {
            args: Prisma.pointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>[]
          }
          upsert: {
            args: Prisma.pointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          aggregate: {
            args: Prisma.PointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoints>
          }
          groupBy: {
            args: Prisma.pointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.pointsCountArgs<ExtArgs>
            result: $Utils.Optional<PointsCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    attendees?: attendeesOmit
    events?: eventsOmit
    notifications?: notificationsOmit
    referral_coupons?: referral_couponsOmit
    reviews?: reviewsOmit
    transactions?: transactionsOmit
    users?: usersOmit
    vouchers?: vouchersOmit
    ticket_types?: ticket_typesOmit
    transaction_detail?: transaction_detailOmit
    organizers?: organizersOmit
    cities?: citiesOmit
    points?: pointsOmit
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
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    attendees: number
    reviews: number
    ticket_types: number
    transaction_detail: number
    transactions: number
    vouchers: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | EventsCountOutputTypeCountAttendeesArgs
    reviews?: boolean | EventsCountOutputTypeCountReviewsArgs
    ticket_types?: boolean | EventsCountOutputTypeCountTicket_typesArgs
    transaction_detail?: boolean | EventsCountOutputTypeCountTransaction_detailArgs
    transactions?: boolean | EventsCountOutputTypeCountTransactionsArgs
    vouchers?: boolean | EventsCountOutputTypeCountVouchersArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendeesWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountTicket_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_typesWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountTransaction_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_detailWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vouchersWhereInput
  }


  /**
   * Count Type TransactionsCountOutputType
   */

  export type TransactionsCountOutputType = {
    notifications: number
  }

  export type TransactionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | TransactionsCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * TransactionsCountOutputType without action
   */
  export type TransactionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsCountOutputType
     */
    select?: TransactionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionsCountOutputType without action
   */
  export type TransactionsCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    attendees: number
    notifications: number
    organizers: number
    referral_coupons: number
    reviews: number
    transactions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | UsersCountOutputTypeCountAttendeesArgs
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
    organizers?: boolean | UsersCountOutputTypeCountOrganizersArgs
    referral_coupons?: boolean | UsersCountOutputTypeCountReferral_couponsArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    transactions?: boolean | UsersCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendeesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrganizersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReferral_couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referral_couponsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type Transaction_detailCountOutputType
   */

  export type Transaction_detailCountOutputType = {
    transactions: number
  }

  export type Transaction_detailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Transaction_detailCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * Transaction_detailCountOutputType without action
   */
  export type Transaction_detailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_detailCountOutputType
     */
    select?: Transaction_detailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Transaction_detailCountOutputType without action
   */
  export type Transaction_detailCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type OrganizersCountOutputType
   */

  export type OrganizersCountOutputType = {
    events: number
  }

  export type OrganizersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | OrganizersCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * OrganizersCountOutputType without action
   */
  export type OrganizersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizersCountOutputType
     */
    select?: OrganizersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizersCountOutputType without action
   */
  export type OrganizersCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
  }


  /**
   * Count Type PointsCountOutputType
   */

  export type PointsCountOutputType = {
    users_users_pointsTopoints: number
  }

  export type PointsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_users_pointsTopoints?: boolean | PointsCountOutputTypeCountUsers_users_pointsTopointsArgs
  }

  // Custom InputTypes
  /**
   * PointsCountOutputType without action
   */
  export type PointsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsCountOutputType
     */
    select?: PointsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PointsCountOutputType without action
   */
  export type PointsCountOutputTypeCountUsers_users_pointsTopointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model attendees
   */

  export type AggregateAttendees = {
    _count: AttendeesCountAggregateOutputType | null
    _avg: AttendeesAvgAggregateOutputType | null
    _sum: AttendeesSumAggregateOutputType | null
    _min: AttendeesMinAggregateOutputType | null
    _max: AttendeesMaxAggregateOutputType | null
  }

  export type AttendeesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    ticket_qty: number | null
    total_paid: number | null
  }

  export type AttendeesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    ticket_qty: bigint | null
    total_paid: bigint | null
  }

  export type AttendeesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    ticket_qty: bigint | null
    total_paid: bigint | null
  }

  export type AttendeesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    ticket_qty: bigint | null
    total_paid: bigint | null
  }

  export type AttendeesCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    ticket_qty: number
    total_paid: number
    _all: number
  }


  export type AttendeesAvgAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_qty?: true
    total_paid?: true
  }

  export type AttendeesSumAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_qty?: true
    total_paid?: true
  }

  export type AttendeesMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_qty?: true
    total_paid?: true
  }

  export type AttendeesMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_qty?: true
    total_paid?: true
  }

  export type AttendeesCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_qty?: true
    total_paid?: true
    _all?: true
  }

  export type AttendeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendees to aggregate.
     */
    where?: attendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendees to fetch.
     */
    orderBy?: attendeesOrderByWithRelationInput | attendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attendees
    **/
    _count?: true | AttendeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendeesMaxAggregateInputType
  }

  export type GetAttendeesAggregateType<T extends AttendeesAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendees[P]>
      : GetScalarType<T[P], AggregateAttendees[P]>
  }




  export type attendeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendeesWhereInput
    orderBy?: attendeesOrderByWithAggregationInput | attendeesOrderByWithAggregationInput[]
    by: AttendeesScalarFieldEnum[] | AttendeesScalarFieldEnum
    having?: attendeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendeesCountAggregateInputType | true
    _avg?: AttendeesAvgAggregateInputType
    _sum?: AttendeesSumAggregateInputType
    _min?: AttendeesMinAggregateInputType
    _max?: AttendeesMaxAggregateInputType
  }

  export type AttendeesGroupByOutputType = {
    id: number
    user_id: number
    event_id: number
    ticket_qty: bigint
    total_paid: bigint
    _count: AttendeesCountAggregateOutputType | null
    _avg: AttendeesAvgAggregateOutputType | null
    _sum: AttendeesSumAggregateOutputType | null
    _min: AttendeesMinAggregateOutputType | null
    _max: AttendeesMaxAggregateOutputType | null
  }

  type GetAttendeesGroupByPayload<T extends attendeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendeesGroupByOutputType[P]>
            : GetScalarType<T[P], AttendeesGroupByOutputType[P]>
        }
      >
    >


  export type attendeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    ticket_qty?: boolean
    total_paid?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendees"]>

  export type attendeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    ticket_qty?: boolean
    total_paid?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendees"]>

  export type attendeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    ticket_qty?: boolean
    total_paid?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendees"]>

  export type attendeesSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    ticket_qty?: boolean
    total_paid?: boolean
  }

  export type attendeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "ticket_qty" | "total_paid", ExtArgs["result"]["attendees"]>
  export type attendeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }
  export type attendeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }
  export type attendeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }

  export type $attendeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attendees"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      events: Prisma.$eventsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      event_id: number
      ticket_qty: bigint
      total_paid: bigint
    }, ExtArgs["result"]["attendees"]>
    composites: {}
  }

  type attendeesGetPayload<S extends boolean | null | undefined | attendeesDefaultArgs> = $Result.GetResult<Prisma.$attendeesPayload, S>

  type attendeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attendeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendeesCountAggregateInputType | true
    }

  export interface attendeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendees'], meta: { name: 'attendees' } }
    /**
     * Find zero or one Attendees that matches the filter.
     * @param {attendeesFindUniqueArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attendeesFindUniqueArgs>(args: SelectSubset<T, attendeesFindUniqueArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attendeesFindUniqueOrThrowArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attendeesFindUniqueOrThrowArgs>(args: SelectSubset<T, attendeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesFindFirstArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attendeesFindFirstArgs>(args?: SelectSubset<T, attendeesFindFirstArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesFindFirstOrThrowArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attendeesFindFirstOrThrowArgs>(args?: SelectSubset<T, attendeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendees
     * const attendees = await prisma.attendees.findMany()
     * 
     * // Get first 10 Attendees
     * const attendees = await prisma.attendees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendeesWithIdOnly = await prisma.attendees.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attendeesFindManyArgs>(args?: SelectSubset<T, attendeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendees.
     * @param {attendeesCreateArgs} args - Arguments to create a Attendees.
     * @example
     * // Create one Attendees
     * const Attendees = await prisma.attendees.create({
     *   data: {
     *     // ... data to create a Attendees
     *   }
     * })
     * 
     */
    create<T extends attendeesCreateArgs>(args: SelectSubset<T, attendeesCreateArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendees.
     * @param {attendeesCreateManyArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendees = await prisma.attendees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attendeesCreateManyArgs>(args?: SelectSubset<T, attendeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendees and returns the data saved in the database.
     * @param {attendeesCreateManyAndReturnArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendees = await prisma.attendees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendees and only return the `id`
     * const attendeesWithIdOnly = await prisma.attendees.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends attendeesCreateManyAndReturnArgs>(args?: SelectSubset<T, attendeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendees.
     * @param {attendeesDeleteArgs} args - Arguments to delete one Attendees.
     * @example
     * // Delete one Attendees
     * const Attendees = await prisma.attendees.delete({
     *   where: {
     *     // ... filter to delete one Attendees
     *   }
     * })
     * 
     */
    delete<T extends attendeesDeleteArgs>(args: SelectSubset<T, attendeesDeleteArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendees.
     * @param {attendeesUpdateArgs} args - Arguments to update one Attendees.
     * @example
     * // Update one Attendees
     * const attendees = await prisma.attendees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attendeesUpdateArgs>(args: SelectSubset<T, attendeesUpdateArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendees.
     * @param {attendeesDeleteManyArgs} args - Arguments to filter Attendees to delete.
     * @example
     * // Delete a few Attendees
     * const { count } = await prisma.attendees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attendeesDeleteManyArgs>(args?: SelectSubset<T, attendeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendees
     * const attendees = await prisma.attendees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attendeesUpdateManyArgs>(args: SelectSubset<T, attendeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees and returns the data updated in the database.
     * @param {attendeesUpdateManyAndReturnArgs} args - Arguments to update many Attendees.
     * @example
     * // Update many Attendees
     * const attendees = await prisma.attendees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendees and only return the `id`
     * const attendeesWithIdOnly = await prisma.attendees.updateManyAndReturn({
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
    updateManyAndReturn<T extends attendeesUpdateManyAndReturnArgs>(args: SelectSubset<T, attendeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendees.
     * @param {attendeesUpsertArgs} args - Arguments to update or create a Attendees.
     * @example
     * // Update or create a Attendees
     * const attendees = await prisma.attendees.upsert({
     *   create: {
     *     // ... data to create a Attendees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendees we want to update
     *   }
     * })
     */
    upsert<T extends attendeesUpsertArgs>(args: SelectSubset<T, attendeesUpsertArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesCountArgs} args - Arguments to filter Attendees to count.
     * @example
     * // Count the number of Attendees
     * const count = await prisma.attendees.count({
     *   where: {
     *     // ... the filter for the Attendees we want to count
     *   }
     * })
    **/
    count<T extends attendeesCountArgs>(
      args?: Subset<T, attendeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendeesAggregateArgs>(args: Subset<T, AttendeesAggregateArgs>): Prisma.PrismaPromise<GetAttendeesAggregateType<T>>

    /**
     * Group by Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesGroupByArgs} args - Group by arguments.
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
      T extends attendeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendeesGroupByArgs['orderBy'] }
        : { orderBy?: attendeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, attendeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attendees model
   */
  readonly fields: attendeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the attendees model
   */
  interface attendeesFieldRefs {
    readonly id: FieldRef<"attendees", 'Int'>
    readonly user_id: FieldRef<"attendees", 'Int'>
    readonly event_id: FieldRef<"attendees", 'Int'>
    readonly ticket_qty: FieldRef<"attendees", 'BigInt'>
    readonly total_paid: FieldRef<"attendees", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * attendees findUnique
   */
  export type attendeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter, which attendees to fetch.
     */
    where: attendeesWhereUniqueInput
  }

  /**
   * attendees findUniqueOrThrow
   */
  export type attendeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter, which attendees to fetch.
     */
    where: attendeesWhereUniqueInput
  }

  /**
   * attendees findFirst
   */
  export type attendeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter, which attendees to fetch.
     */
    where?: attendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendees to fetch.
     */
    orderBy?: attendeesOrderByWithRelationInput | attendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendees.
     */
    cursor?: attendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendees.
     */
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * attendees findFirstOrThrow
   */
  export type attendeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter, which attendees to fetch.
     */
    where?: attendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendees to fetch.
     */
    orderBy?: attendeesOrderByWithRelationInput | attendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendees.
     */
    cursor?: attendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendees.
     */
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * attendees findMany
   */
  export type attendeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter, which attendees to fetch.
     */
    where?: attendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendees to fetch.
     */
    orderBy?: attendeesOrderByWithRelationInput | attendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attendees.
     */
    cursor?: attendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendees.
     */
    skip?: number
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * attendees create
   */
  export type attendeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * The data needed to create a attendees.
     */
    data: XOR<attendeesCreateInput, attendeesUncheckedCreateInput>
  }

  /**
   * attendees createMany
   */
  export type attendeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendees.
     */
    data: attendeesCreateManyInput | attendeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attendees createManyAndReturn
   */
  export type attendeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * The data used to create many attendees.
     */
    data: attendeesCreateManyInput | attendeesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendees update
   */
  export type attendeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * The data needed to update a attendees.
     */
    data: XOR<attendeesUpdateInput, attendeesUncheckedUpdateInput>
    /**
     * Choose, which attendees to update.
     */
    where: attendeesWhereUniqueInput
  }

  /**
   * attendees updateMany
   */
  export type attendeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendees.
     */
    data: XOR<attendeesUpdateManyMutationInput, attendeesUncheckedUpdateManyInput>
    /**
     * Filter which attendees to update
     */
    where?: attendeesWhereInput
    /**
     * Limit how many attendees to update.
     */
    limit?: number
  }

  /**
   * attendees updateManyAndReturn
   */
  export type attendeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * The data used to update attendees.
     */
    data: XOR<attendeesUpdateManyMutationInput, attendeesUncheckedUpdateManyInput>
    /**
     * Filter which attendees to update
     */
    where?: attendeesWhereInput
    /**
     * Limit how many attendees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendees upsert
   */
  export type attendeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * The filter to search for the attendees to update in case it exists.
     */
    where: attendeesWhereUniqueInput
    /**
     * In case the attendees found by the `where` argument doesn't exist, create a new attendees with this data.
     */
    create: XOR<attendeesCreateInput, attendeesUncheckedCreateInput>
    /**
     * In case the attendees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendeesUpdateInput, attendeesUncheckedUpdateInput>
  }

  /**
   * attendees delete
   */
  export type attendeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter which attendees to delete.
     */
    where: attendeesWhereUniqueInput
  }

  /**
   * attendees deleteMany
   */
  export type attendeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendees to delete
     */
    where?: attendeesWhereInput
    /**
     * Limit how many attendees to delete.
     */
    limit?: number
  }

  /**
   * attendees without action
   */
  export type attendeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
  }


  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    organizer_id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    organizer_id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    organizer_id: number | null
    event_picture: string | null
    title: string | null
    location: string | null
    start_date: Date | null
    end_date: Date | null
    category: $Enums.Category | null
    description: string | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    organizer_id: number | null
    event_picture: string | null
    title: string | null
    location: string | null
    start_date: Date | null
    end_date: Date | null
    category: $Enums.Category | null
    description: string | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    organizer_id: number
    event_picture: number
    title: number
    location: number
    start_date: number
    end_date: number
    category: number
    description: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    organizer_id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    organizer_id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    organizer_id?: true
    event_picture?: true
    title?: true
    location?: true
    start_date?: true
    end_date?: true
    category?: true
    description?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    organizer_id?: true
    event_picture?: true
    title?: true
    location?: true
    start_date?: true
    end_date?: true
    category?: true
    description?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    organizer_id?: true
    event_picture?: true
    title?: true
    location?: true
    start_date?: true
    end_date?: true
    category?: true
    description?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    organizer_id: number
    event_picture: string
    title: string
    location: string
    start_date: Date
    end_date: Date
    category: $Enums.Category
    description: string
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizer_id?: boolean
    event_picture?: boolean
    title?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    category?: boolean
    description?: boolean
    attendees?: boolean | events$attendeesArgs<ExtArgs>
    organizer?: boolean | organizersDefaultArgs<ExtArgs>
    reviews?: boolean | events$reviewsArgs<ExtArgs>
    ticket_types?: boolean | events$ticket_typesArgs<ExtArgs>
    transaction_detail?: boolean | events$transaction_detailArgs<ExtArgs>
    transactions?: boolean | events$transactionsArgs<ExtArgs>
    vouchers?: boolean | events$vouchersArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizer_id?: boolean
    event_picture?: boolean
    title?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    category?: boolean
    description?: boolean
    organizer?: boolean | organizersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizer_id?: boolean
    event_picture?: boolean
    title?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    category?: boolean
    description?: boolean
    organizer?: boolean | organizersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    id?: boolean
    organizer_id?: boolean
    event_picture?: boolean
    title?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    category?: boolean
    description?: boolean
  }

  export type eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizer_id" | "event_picture" | "title" | "location" | "start_date" | "end_date" | "category" | "description", ExtArgs["result"]["events"]>
  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | events$attendeesArgs<ExtArgs>
    organizer?: boolean | organizersDefaultArgs<ExtArgs>
    reviews?: boolean | events$reviewsArgs<ExtArgs>
    ticket_types?: boolean | events$ticket_typesArgs<ExtArgs>
    transaction_detail?: boolean | events$transaction_detailArgs<ExtArgs>
    transactions?: boolean | events$transactionsArgs<ExtArgs>
    vouchers?: boolean | events$vouchersArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | organizersDefaultArgs<ExtArgs>
  }
  export type eventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | organizersDefaultArgs<ExtArgs>
  }

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      attendees: Prisma.$attendeesPayload<ExtArgs>[]
      organizer: Prisma.$organizersPayload<ExtArgs>
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      ticket_types: Prisma.$ticket_typesPayload<ExtArgs>[]
      transaction_detail: Prisma.$transaction_detailPayload<ExtArgs>[]
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
      vouchers: Prisma.$vouchersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizer_id: number
      event_picture: string
      title: string
      location: string
      start_date: Date
      end_date: Date
      category: $Enums.Category
      description: string
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {eventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {eventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
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
    updateManyAndReturn<T extends eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
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
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendees<T extends events$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, events$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizer<T extends organizersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizersDefaultArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends events$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, events$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticket_types<T extends events$ticket_typesArgs<ExtArgs> = {}>(args?: Subset<T, events$ticket_typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction_detail<T extends events$transaction_detailArgs<ExtArgs> = {}>(args?: Subset<T, events$transaction_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends events$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, events$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchers<T extends events$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, events$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the events model
   */
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'Int'>
    readonly organizer_id: FieldRef<"events", 'Int'>
    readonly event_picture: FieldRef<"events", 'String'>
    readonly title: FieldRef<"events", 'String'>
    readonly location: FieldRef<"events", 'String'>
    readonly start_date: FieldRef<"events", 'DateTime'>
    readonly end_date: FieldRef<"events", 'DateTime'>
    readonly category: FieldRef<"events", 'Category'>
    readonly description: FieldRef<"events", 'String'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events createManyAndReturn
   */
  export type eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events updateManyAndReturn
   */
  export type eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * events.attendees
   */
  export type events$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    where?: attendeesWhereInput
    orderBy?: attendeesOrderByWithRelationInput | attendeesOrderByWithRelationInput[]
    cursor?: attendeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * events.reviews
   */
  export type events$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * events.ticket_types
   */
  export type events$ticket_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    where?: ticket_typesWhereInput
    orderBy?: ticket_typesOrderByWithRelationInput | ticket_typesOrderByWithRelationInput[]
    cursor?: ticket_typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * events.transaction_detail
   */
  export type events$transaction_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    where?: transaction_detailWhereInput
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    cursor?: transaction_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }

  /**
   * events.transactions
   */
  export type events$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * events.vouchers
   */
  export type events$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    where?: vouchersWhereInput
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    cursor?: vouchersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    transaction_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    transaction_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    transaction_id: number | null
    message: string | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    transaction_id: number | null
    message: string | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    transaction_id: number
    message: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    user_id?: true
    transaction_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    user_id?: true
    transaction_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    transaction_id?: true
    message?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    transaction_id?: true
    message?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    transaction_id?: true
    message?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    user_id: number
    transaction_id: number
    message: string
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    transaction_id?: boolean
    message?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | transactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    transaction_id?: boolean
    message?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | transactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    transaction_id?: boolean
    message?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | transactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    transaction_id?: boolean
    message?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "transaction_id" | "message", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | transactionsDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | transactionsDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | transactionsDefaultArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      transactions: Prisma.$transactionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      transaction_id: number
      message: string
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
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
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends transactionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionsDefaultArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'Int'>
    readonly user_id: FieldRef<"notifications", 'Int'>
    readonly transaction_id: FieldRef<"notifications", 'Int'>
    readonly message: FieldRef<"notifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model referral_coupons
   */

  export type AggregateReferral_coupons = {
    _count: Referral_couponsCountAggregateOutputType | null
    _avg: Referral_couponsAvgAggregateOutputType | null
    _sum: Referral_couponsSumAggregateOutputType | null
    _min: Referral_couponsMinAggregateOutputType | null
    _max: Referral_couponsMaxAggregateOutputType | null
  }

  export type Referral_couponsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    disc_amunt: number | null
  }

  export type Referral_couponsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    disc_amunt: number | null
  }

  export type Referral_couponsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    code: string | null
    expires_date: Date | null
    disc_amunt: number | null
  }

  export type Referral_couponsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    code: string | null
    expires_date: Date | null
    disc_amunt: number | null
  }

  export type Referral_couponsCountAggregateOutputType = {
    id: number
    user_id: number
    code: number
    expires_date: number
    disc_amunt: number
    _all: number
  }


  export type Referral_couponsAvgAggregateInputType = {
    id?: true
    user_id?: true
    disc_amunt?: true
  }

  export type Referral_couponsSumAggregateInputType = {
    id?: true
    user_id?: true
    disc_amunt?: true
  }

  export type Referral_couponsMinAggregateInputType = {
    id?: true
    user_id?: true
    code?: true
    expires_date?: true
    disc_amunt?: true
  }

  export type Referral_couponsMaxAggregateInputType = {
    id?: true
    user_id?: true
    code?: true
    expires_date?: true
    disc_amunt?: true
  }

  export type Referral_couponsCountAggregateInputType = {
    id?: true
    user_id?: true
    code?: true
    expires_date?: true
    disc_amunt?: true
    _all?: true
  }

  export type Referral_couponsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referral_coupons to aggregate.
     */
    where?: referral_couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_coupons to fetch.
     */
    orderBy?: referral_couponsOrderByWithRelationInput | referral_couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: referral_couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned referral_coupons
    **/
    _count?: true | Referral_couponsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Referral_couponsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Referral_couponsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Referral_couponsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Referral_couponsMaxAggregateInputType
  }

  export type GetReferral_couponsAggregateType<T extends Referral_couponsAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral_coupons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral_coupons[P]>
      : GetScalarType<T[P], AggregateReferral_coupons[P]>
  }




  export type referral_couponsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referral_couponsWhereInput
    orderBy?: referral_couponsOrderByWithAggregationInput | referral_couponsOrderByWithAggregationInput[]
    by: Referral_couponsScalarFieldEnum[] | Referral_couponsScalarFieldEnum
    having?: referral_couponsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Referral_couponsCountAggregateInputType | true
    _avg?: Referral_couponsAvgAggregateInputType
    _sum?: Referral_couponsSumAggregateInputType
    _min?: Referral_couponsMinAggregateInputType
    _max?: Referral_couponsMaxAggregateInputType
  }

  export type Referral_couponsGroupByOutputType = {
    id: number
    user_id: number
    code: string
    expires_date: Date
    disc_amunt: number
    _count: Referral_couponsCountAggregateOutputType | null
    _avg: Referral_couponsAvgAggregateOutputType | null
    _sum: Referral_couponsSumAggregateOutputType | null
    _min: Referral_couponsMinAggregateOutputType | null
    _max: Referral_couponsMaxAggregateOutputType | null
  }

  type GetReferral_couponsGroupByPayload<T extends referral_couponsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Referral_couponsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Referral_couponsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Referral_couponsGroupByOutputType[P]>
            : GetScalarType<T[P], Referral_couponsGroupByOutputType[P]>
        }
      >
    >


  export type referral_couponsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    code?: boolean
    expires_date?: boolean
    disc_amunt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_coupons"]>

  export type referral_couponsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    code?: boolean
    expires_date?: boolean
    disc_amunt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_coupons"]>

  export type referral_couponsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    code?: boolean
    expires_date?: boolean
    disc_amunt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_coupons"]>

  export type referral_couponsSelectScalar = {
    id?: boolean
    user_id?: boolean
    code?: boolean
    expires_date?: boolean
    disc_amunt?: boolean
  }

  export type referral_couponsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "code" | "expires_date" | "disc_amunt", ExtArgs["result"]["referral_coupons"]>
  export type referral_couponsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type referral_couponsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type referral_couponsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $referral_couponsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "referral_coupons"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      code: string
      expires_date: Date
      disc_amunt: number
    }, ExtArgs["result"]["referral_coupons"]>
    composites: {}
  }

  type referral_couponsGetPayload<S extends boolean | null | undefined | referral_couponsDefaultArgs> = $Result.GetResult<Prisma.$referral_couponsPayload, S>

  type referral_couponsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<referral_couponsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Referral_couponsCountAggregateInputType | true
    }

  export interface referral_couponsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['referral_coupons'], meta: { name: 'referral_coupons' } }
    /**
     * Find zero or one Referral_coupons that matches the filter.
     * @param {referral_couponsFindUniqueArgs} args - Arguments to find a Referral_coupons
     * @example
     * // Get one Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends referral_couponsFindUniqueArgs>(args: SelectSubset<T, referral_couponsFindUniqueArgs<ExtArgs>>): Prisma__referral_couponsClient<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral_coupons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {referral_couponsFindUniqueOrThrowArgs} args - Arguments to find a Referral_coupons
     * @example
     * // Get one Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends referral_couponsFindUniqueOrThrowArgs>(args: SelectSubset<T, referral_couponsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__referral_couponsClient<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral_coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_couponsFindFirstArgs} args - Arguments to find a Referral_coupons
     * @example
     * // Get one Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends referral_couponsFindFirstArgs>(args?: SelectSubset<T, referral_couponsFindFirstArgs<ExtArgs>>): Prisma__referral_couponsClient<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral_coupons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_couponsFindFirstOrThrowArgs} args - Arguments to find a Referral_coupons
     * @example
     * // Get one Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends referral_couponsFindFirstOrThrowArgs>(args?: SelectSubset<T, referral_couponsFindFirstOrThrowArgs<ExtArgs>>): Prisma__referral_couponsClient<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referral_coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_couponsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.findMany()
     * 
     * // Get first 10 Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referral_couponsWithIdOnly = await prisma.referral_coupons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends referral_couponsFindManyArgs>(args?: SelectSubset<T, referral_couponsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral_coupons.
     * @param {referral_couponsCreateArgs} args - Arguments to create a Referral_coupons.
     * @example
     * // Create one Referral_coupons
     * const Referral_coupons = await prisma.referral_coupons.create({
     *   data: {
     *     // ... data to create a Referral_coupons
     *   }
     * })
     * 
     */
    create<T extends referral_couponsCreateArgs>(args: SelectSubset<T, referral_couponsCreateArgs<ExtArgs>>): Prisma__referral_couponsClient<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referral_coupons.
     * @param {referral_couponsCreateManyArgs} args - Arguments to create many Referral_coupons.
     * @example
     * // Create many Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends referral_couponsCreateManyArgs>(args?: SelectSubset<T, referral_couponsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referral_coupons and returns the data saved in the database.
     * @param {referral_couponsCreateManyAndReturnArgs} args - Arguments to create many Referral_coupons.
     * @example
     * // Create many Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referral_coupons and only return the `id`
     * const referral_couponsWithIdOnly = await prisma.referral_coupons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends referral_couponsCreateManyAndReturnArgs>(args?: SelectSubset<T, referral_couponsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral_coupons.
     * @param {referral_couponsDeleteArgs} args - Arguments to delete one Referral_coupons.
     * @example
     * // Delete one Referral_coupons
     * const Referral_coupons = await prisma.referral_coupons.delete({
     *   where: {
     *     // ... filter to delete one Referral_coupons
     *   }
     * })
     * 
     */
    delete<T extends referral_couponsDeleteArgs>(args: SelectSubset<T, referral_couponsDeleteArgs<ExtArgs>>): Prisma__referral_couponsClient<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral_coupons.
     * @param {referral_couponsUpdateArgs} args - Arguments to update one Referral_coupons.
     * @example
     * // Update one Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends referral_couponsUpdateArgs>(args: SelectSubset<T, referral_couponsUpdateArgs<ExtArgs>>): Prisma__referral_couponsClient<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referral_coupons.
     * @param {referral_couponsDeleteManyArgs} args - Arguments to filter Referral_coupons to delete.
     * @example
     * // Delete a few Referral_coupons
     * const { count } = await prisma.referral_coupons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends referral_couponsDeleteManyArgs>(args?: SelectSubset<T, referral_couponsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referral_coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_couponsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends referral_couponsUpdateManyArgs>(args: SelectSubset<T, referral_couponsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referral_coupons and returns the data updated in the database.
     * @param {referral_couponsUpdateManyAndReturnArgs} args - Arguments to update many Referral_coupons.
     * @example
     * // Update many Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referral_coupons and only return the `id`
     * const referral_couponsWithIdOnly = await prisma.referral_coupons.updateManyAndReturn({
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
    updateManyAndReturn<T extends referral_couponsUpdateManyAndReturnArgs>(args: SelectSubset<T, referral_couponsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral_coupons.
     * @param {referral_couponsUpsertArgs} args - Arguments to update or create a Referral_coupons.
     * @example
     * // Update or create a Referral_coupons
     * const referral_coupons = await prisma.referral_coupons.upsert({
     *   create: {
     *     // ... data to create a Referral_coupons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral_coupons we want to update
     *   }
     * })
     */
    upsert<T extends referral_couponsUpsertArgs>(args: SelectSubset<T, referral_couponsUpsertArgs<ExtArgs>>): Prisma__referral_couponsClient<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referral_coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_couponsCountArgs} args - Arguments to filter Referral_coupons to count.
     * @example
     * // Count the number of Referral_coupons
     * const count = await prisma.referral_coupons.count({
     *   where: {
     *     // ... the filter for the Referral_coupons we want to count
     *   }
     * })
    **/
    count<T extends referral_couponsCountArgs>(
      args?: Subset<T, referral_couponsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Referral_couponsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral_coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Referral_couponsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Referral_couponsAggregateArgs>(args: Subset<T, Referral_couponsAggregateArgs>): Prisma.PrismaPromise<GetReferral_couponsAggregateType<T>>

    /**
     * Group by Referral_coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_couponsGroupByArgs} args - Group by arguments.
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
      T extends referral_couponsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: referral_couponsGroupByArgs['orderBy'] }
        : { orderBy?: referral_couponsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, referral_couponsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferral_couponsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the referral_coupons model
   */
  readonly fields: referral_couponsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for referral_coupons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__referral_couponsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the referral_coupons model
   */
  interface referral_couponsFieldRefs {
    readonly id: FieldRef<"referral_coupons", 'Int'>
    readonly user_id: FieldRef<"referral_coupons", 'Int'>
    readonly code: FieldRef<"referral_coupons", 'String'>
    readonly expires_date: FieldRef<"referral_coupons", 'DateTime'>
    readonly disc_amunt: FieldRef<"referral_coupons", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * referral_coupons findUnique
   */
  export type referral_couponsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
    /**
     * Filter, which referral_coupons to fetch.
     */
    where: referral_couponsWhereUniqueInput
  }

  /**
   * referral_coupons findUniqueOrThrow
   */
  export type referral_couponsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
    /**
     * Filter, which referral_coupons to fetch.
     */
    where: referral_couponsWhereUniqueInput
  }

  /**
   * referral_coupons findFirst
   */
  export type referral_couponsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
    /**
     * Filter, which referral_coupons to fetch.
     */
    where?: referral_couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_coupons to fetch.
     */
    orderBy?: referral_couponsOrderByWithRelationInput | referral_couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referral_coupons.
     */
    cursor?: referral_couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referral_coupons.
     */
    distinct?: Referral_couponsScalarFieldEnum | Referral_couponsScalarFieldEnum[]
  }

  /**
   * referral_coupons findFirstOrThrow
   */
  export type referral_couponsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
    /**
     * Filter, which referral_coupons to fetch.
     */
    where?: referral_couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_coupons to fetch.
     */
    orderBy?: referral_couponsOrderByWithRelationInput | referral_couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referral_coupons.
     */
    cursor?: referral_couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referral_coupons.
     */
    distinct?: Referral_couponsScalarFieldEnum | Referral_couponsScalarFieldEnum[]
  }

  /**
   * referral_coupons findMany
   */
  export type referral_couponsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
    /**
     * Filter, which referral_coupons to fetch.
     */
    where?: referral_couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_coupons to fetch.
     */
    orderBy?: referral_couponsOrderByWithRelationInput | referral_couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing referral_coupons.
     */
    cursor?: referral_couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_coupons.
     */
    skip?: number
    distinct?: Referral_couponsScalarFieldEnum | Referral_couponsScalarFieldEnum[]
  }

  /**
   * referral_coupons create
   */
  export type referral_couponsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
    /**
     * The data needed to create a referral_coupons.
     */
    data: XOR<referral_couponsCreateInput, referral_couponsUncheckedCreateInput>
  }

  /**
   * referral_coupons createMany
   */
  export type referral_couponsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many referral_coupons.
     */
    data: referral_couponsCreateManyInput | referral_couponsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * referral_coupons createManyAndReturn
   */
  export type referral_couponsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * The data used to create many referral_coupons.
     */
    data: referral_couponsCreateManyInput | referral_couponsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * referral_coupons update
   */
  export type referral_couponsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
    /**
     * The data needed to update a referral_coupons.
     */
    data: XOR<referral_couponsUpdateInput, referral_couponsUncheckedUpdateInput>
    /**
     * Choose, which referral_coupons to update.
     */
    where: referral_couponsWhereUniqueInput
  }

  /**
   * referral_coupons updateMany
   */
  export type referral_couponsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update referral_coupons.
     */
    data: XOR<referral_couponsUpdateManyMutationInput, referral_couponsUncheckedUpdateManyInput>
    /**
     * Filter which referral_coupons to update
     */
    where?: referral_couponsWhereInput
    /**
     * Limit how many referral_coupons to update.
     */
    limit?: number
  }

  /**
   * referral_coupons updateManyAndReturn
   */
  export type referral_couponsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * The data used to update referral_coupons.
     */
    data: XOR<referral_couponsUpdateManyMutationInput, referral_couponsUncheckedUpdateManyInput>
    /**
     * Filter which referral_coupons to update
     */
    where?: referral_couponsWhereInput
    /**
     * Limit how many referral_coupons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * referral_coupons upsert
   */
  export type referral_couponsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
    /**
     * The filter to search for the referral_coupons to update in case it exists.
     */
    where: referral_couponsWhereUniqueInput
    /**
     * In case the referral_coupons found by the `where` argument doesn't exist, create a new referral_coupons with this data.
     */
    create: XOR<referral_couponsCreateInput, referral_couponsUncheckedCreateInput>
    /**
     * In case the referral_coupons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<referral_couponsUpdateInput, referral_couponsUncheckedUpdateInput>
  }

  /**
   * referral_coupons delete
   */
  export type referral_couponsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
    /**
     * Filter which referral_coupons to delete.
     */
    where: referral_couponsWhereUniqueInput
  }

  /**
   * referral_coupons deleteMany
   */
  export type referral_couponsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referral_coupons to delete
     */
    where?: referral_couponsWhereInput
    /**
     * Limit how many referral_coupons to delete.
     */
    limit?: number
  }

  /**
   * referral_coupons without action
   */
  export type referral_couponsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
  }


  /**
   * Model reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    rating: number | null
    comment: string | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    rating: number | null
    comment: string | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    rating: number
    comment: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    rating?: true
    comment?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    rating?: true
    comment?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    rating?: true
    comment?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to aggregate.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithAggregationInput | reviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    user_id: number
    event_id: number
    rating: number
    comment: string
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    rating?: boolean
    comment?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    rating?: boolean
    comment?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    rating?: boolean
    comment?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    rating?: boolean
    comment?: boolean
  }

  export type reviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "rating" | "comment", ExtArgs["result"]["reviews"]>
  export type reviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }

  export type $reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reviews"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      events: Prisma.$eventsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      event_id: number
      rating: number
      comment: string
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = $Result.GetResult<Prisma.$reviewsPayload, S>

  type reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reviews'], meta: { name: 'reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {reviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewsFindUniqueArgs>(args: SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewsFindFirstArgs>(args?: SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewsFindManyArgs>(args?: SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {reviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends reviewsCreateArgs>(args: SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewsCreateManyArgs>(args?: SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {reviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends reviewsDeleteArgs>(args: SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {reviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewsUpdateArgs>(args: SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewsDeleteManyArgs>(args?: SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewsUpdateManyArgs>(args: SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends reviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {reviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends reviewsUpsertArgs>(args: SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewsCountArgs>(
      args?: Subset<T, reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsGroupByArgs} args - Group by arguments.
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
      T extends reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewsGroupByArgs['orderBy'] }
        : { orderBy?: reviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reviews model
   */
  readonly fields: reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reviews model
   */
  interface reviewsFieldRefs {
    readonly id: FieldRef<"reviews", 'Int'>
    readonly user_id: FieldRef<"reviews", 'Int'>
    readonly event_id: FieldRef<"reviews", 'Int'>
    readonly rating: FieldRef<"reviews", 'Int'>
    readonly comment: FieldRef<"reviews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reviews findUnique
   */
  export type reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findUniqueOrThrow
   */
  export type reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findFirst
   */
  export type reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findFirstOrThrow
   */
  export type reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findMany
   */
  export type reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews create
   */
  export type reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a reviews.
     */
    data: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
  }

  /**
   * reviews createMany
   */
  export type reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reviews createManyAndReturn
   */
  export type reviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews update
   */
  export type reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a reviews.
     */
    data: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
    /**
     * Choose, which reviews to update.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews updateMany
   */
  export type reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * reviews updateManyAndReturn
   */
  export type reviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews upsert
   */
  export type reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the reviews to update in case it exists.
     */
    where: reviewsWhereUniqueInput
    /**
     * In case the reviews found by the `where` argument doesn't exist, create a new reviews with this data.
     */
    create: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
    /**
     * In case the reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
  }

  /**
   * reviews delete
   */
  export type reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter which reviews to delete.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews deleteMany
   */
  export type reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * reviews without action
   */
  export type reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    ticket_id: number | null
    total_price: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    ticket_id: number | null
    total_price: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    ticket_id: number | null
    total_price: number | null
    payment_proof: string | null
    expired_date: Date | null
    invoice_id: string | null
    status: $Enums.Status | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    ticket_id: number | null
    total_price: number | null
    payment_proof: string | null
    expired_date: Date | null
    invoice_id: string | null
    status: $Enums.Status | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    ticket_id: number
    total_price: number
    payment_proof: number
    expired_date: number
    invoice_id: number
    status: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_id?: true
    total_price?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_id?: true
    total_price?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_id?: true
    total_price?: true
    payment_proof?: true
    expired_date?: true
    invoice_id?: true
    status?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_id?: true
    total_price?: true
    payment_proof?: true
    expired_date?: true
    invoice_id?: true
    status?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_id?: true
    total_price?: true
    payment_proof?: true
    expired_date?: true
    invoice_id?: true
    status?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    user_id: number
    event_id: number
    ticket_id: number
    total_price: number
    payment_proof: string
    expired_date: Date
    invoice_id: string
    status: $Enums.Status
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    ticket_id?: boolean
    total_price?: boolean
    payment_proof?: boolean
    expired_date?: boolean
    invoice_id?: boolean
    status?: boolean
    notifications?: boolean | transactions$notificationsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
    tickets?: boolean | transaction_detailDefaultArgs<ExtArgs>
    _count?: boolean | TransactionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    ticket_id?: boolean
    total_price?: boolean
    payment_proof?: boolean
    expired_date?: boolean
    invoice_id?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
    tickets?: boolean | transaction_detailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    ticket_id?: boolean
    total_price?: boolean
    payment_proof?: boolean
    expired_date?: boolean
    invoice_id?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
    tickets?: boolean | transaction_detailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    ticket_id?: boolean
    total_price?: boolean
    payment_proof?: boolean
    expired_date?: boolean
    invoice_id?: boolean
    status?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "ticket_id" | "total_price" | "payment_proof" | "expired_date" | "invoice_id" | "status", ExtArgs["result"]["transactions"]>
  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | transactions$notificationsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
    tickets?: boolean | transaction_detailDefaultArgs<ExtArgs>
    _count?: boolean | TransactionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
    tickets?: boolean | transaction_detailDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
    tickets?: boolean | transaction_detailDefaultArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      events: Prisma.$eventsPayload<ExtArgs>
      tickets: Prisma.$transaction_detailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      event_id: number
      ticket_id: number
      total_price: number
      payment_proof: string
      expired_date: Date
      invoice_id: string
      status: $Enums.Status
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends transactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
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
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends transactions$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, transactions$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends transaction_detailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transaction_detailDefaultArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", 'Int'>
    readonly user_id: FieldRef<"transactions", 'Int'>
    readonly event_id: FieldRef<"transactions", 'Int'>
    readonly ticket_id: FieldRef<"transactions", 'Int'>
    readonly total_price: FieldRef<"transactions", 'Int'>
    readonly payment_proof: FieldRef<"transactions", 'String'>
    readonly expired_date: FieldRef<"transactions", 'DateTime'>
    readonly invoice_id: FieldRef<"transactions", 'String'>
    readonly status: FieldRef<"transactions", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions createManyAndReturn
   */
  export type transactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions updateManyAndReturn
   */
  export type transactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions.notifications
   */
  export type transactions$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    profile_picture: string | null
    email: string | null
    password: string | null
    referral_code: string | null
    refered_by: string | null
    points: number | null
    is_verified: boolean | null
    role: $Enums.Role | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    profile_picture: string | null
    email: string | null
    password: string | null
    referral_code: string | null
    refered_by: string | null
    points: number | null
    is_verified: boolean | null
    role: $Enums.Role | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    profile_picture: number
    email: number
    password: number
    referral_code: number
    refered_by: number
    points: number
    is_verified: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    points?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    points?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    profile_picture?: true
    email?: true
    password?: true
    referral_code?: true
    refered_by?: true
    points?: true
    is_verified?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    profile_picture?: true
    email?: true
    password?: true
    referral_code?: true
    refered_by?: true
    points?: true
    is_verified?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    profile_picture?: true
    email?: true
    password?: true
    referral_code?: true
    refered_by?: true
    points?: true
    is_verified?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    profile_picture: string | null
    email: string
    password: string
    referral_code: string | null
    refered_by: string | null
    points: number | null
    is_verified: boolean
    role: $Enums.Role
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    profile_picture?: boolean
    email?: boolean
    password?: boolean
    referral_code?: boolean
    refered_by?: boolean
    points?: boolean
    is_verified?: boolean
    role?: boolean
    attendees?: boolean | users$attendeesArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    organizers?: boolean | users$organizersArgs<ExtArgs>
    points_points_user_idTousers?: boolean | users$points_points_user_idTousersArgs<ExtArgs>
    referral_coupons?: boolean | users$referral_couponsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    points_users_pointsTopoints?: boolean | users$points_users_pointsTopointsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    profile_picture?: boolean
    email?: boolean
    password?: boolean
    referral_code?: boolean
    refered_by?: boolean
    points?: boolean
    is_verified?: boolean
    role?: boolean
    points_users_pointsTopoints?: boolean | users$points_users_pointsTopointsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    profile_picture?: boolean
    email?: boolean
    password?: boolean
    referral_code?: boolean
    refered_by?: boolean
    points?: boolean
    is_verified?: boolean
    role?: boolean
    points_users_pointsTopoints?: boolean | users$points_users_pointsTopointsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    profile_picture?: boolean
    email?: boolean
    password?: boolean
    referral_code?: boolean
    refered_by?: boolean
    points?: boolean
    is_verified?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "profile_picture" | "email" | "password" | "referral_code" | "refered_by" | "points" | "is_verified" | "role", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | users$attendeesArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    organizers?: boolean | users$organizersArgs<ExtArgs>
    points_points_user_idTousers?: boolean | users$points_points_user_idTousersArgs<ExtArgs>
    referral_coupons?: boolean | users$referral_couponsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    points_users_pointsTopoints?: boolean | users$points_users_pointsTopointsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points_users_pointsTopoints?: boolean | users$points_users_pointsTopointsArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points_users_pointsTopoints?: boolean | users$points_users_pointsTopointsArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      attendees: Prisma.$attendeesPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
      organizers: Prisma.$organizersPayload<ExtArgs>[]
      points_points_user_idTousers: Prisma.$pointsPayload<ExtArgs> | null
      referral_coupons: Prisma.$referral_couponsPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
      points_users_pointsTopoints: Prisma.$pointsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      profile_picture: string | null
      email: string
      password: string
      referral_code: string | null
      refered_by: string | null
      points: number | null
      is_verified: boolean
      role: $Enums.Role
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendees<T extends users$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, users$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizers<T extends users$organizersArgs<ExtArgs> = {}>(args?: Subset<T, users$organizersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    points_points_user_idTousers<T extends users$points_points_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$points_points_user_idTousersArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referral_coupons<T extends users$referral_couponsArgs<ExtArgs> = {}>(args?: Subset<T, users$referral_couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_couponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends users$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    points_users_pointsTopoints<T extends users$points_users_pointsTopointsArgs<ExtArgs> = {}>(args?: Subset<T, users$points_users_pointsTopointsArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly profile_picture: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly referral_code: FieldRef<"users", 'String'>
    readonly refered_by: FieldRef<"users", 'String'>
    readonly points: FieldRef<"users", 'Int'>
    readonly is_verified: FieldRef<"users", 'Boolean'>
    readonly role: FieldRef<"users", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.attendees
   */
  export type users$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    where?: attendeesWhereInput
    orderBy?: attendeesOrderByWithRelationInput | attendeesOrderByWithRelationInput[]
    cursor?: attendeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * users.notifications
   */
  export type users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users.organizers
   */
  export type users$organizersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    where?: organizersWhereInput
    orderBy?: organizersOrderByWithRelationInput | organizersOrderByWithRelationInput[]
    cursor?: organizersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * users.points_points_user_idTousers
   */
  export type users$points_points_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    where?: pointsWhereInput
  }

  /**
   * users.referral_coupons
   */
  export type users$referral_couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_coupons
     */
    select?: referral_couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_coupons
     */
    omit?: referral_couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_couponsInclude<ExtArgs> | null
    where?: referral_couponsWhereInput
    orderBy?: referral_couponsOrderByWithRelationInput | referral_couponsOrderByWithRelationInput[]
    cursor?: referral_couponsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Referral_couponsScalarFieldEnum | Referral_couponsScalarFieldEnum[]
  }

  /**
   * users.reviews
   */
  export type users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * users.transactions
   */
  export type users$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * users.points_users_pointsTopoints
   */
  export type users$points_users_pointsTopointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    where?: pointsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model vouchers
   */

  export type AggregateVouchers = {
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  export type VouchersAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    code: number | null
    disc_amount: number | null
    quota: number | null
  }

  export type VouchersSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    code: number | null
    disc_amount: number | null
    quota: bigint | null
  }

  export type VouchersMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    code: number | null
    disc_amount: number | null
    start_date: Date | null
    end_date: Date | null
    quota: bigint | null
  }

  export type VouchersMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    code: number | null
    disc_amount: number | null
    start_date: Date | null
    end_date: Date | null
    quota: bigint | null
  }

  export type VouchersCountAggregateOutputType = {
    id: number
    event_id: number
    code: number
    disc_amount: number
    start_date: number
    end_date: number
    quota: number
    _all: number
  }


  export type VouchersAvgAggregateInputType = {
    id?: true
    event_id?: true
    code?: true
    disc_amount?: true
    quota?: true
  }

  export type VouchersSumAggregateInputType = {
    id?: true
    event_id?: true
    code?: true
    disc_amount?: true
    quota?: true
  }

  export type VouchersMinAggregateInputType = {
    id?: true
    event_id?: true
    code?: true
    disc_amount?: true
    start_date?: true
    end_date?: true
    quota?: true
  }

  export type VouchersMaxAggregateInputType = {
    id?: true
    event_id?: true
    code?: true
    disc_amount?: true
    start_date?: true
    end_date?: true
    quota?: true
  }

  export type VouchersCountAggregateInputType = {
    id?: true
    event_id?: true
    code?: true
    disc_amount?: true
    start_date?: true
    end_date?: true
    quota?: true
    _all?: true
  }

  export type VouchersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vouchers to aggregate.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vouchers
    **/
    _count?: true | VouchersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VouchersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VouchersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VouchersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VouchersMaxAggregateInputType
  }

  export type GetVouchersAggregateType<T extends VouchersAggregateArgs> = {
        [P in keyof T & keyof AggregateVouchers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVouchers[P]>
      : GetScalarType<T[P], AggregateVouchers[P]>
  }




  export type vouchersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vouchersWhereInput
    orderBy?: vouchersOrderByWithAggregationInput | vouchersOrderByWithAggregationInput[]
    by: VouchersScalarFieldEnum[] | VouchersScalarFieldEnum
    having?: vouchersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VouchersCountAggregateInputType | true
    _avg?: VouchersAvgAggregateInputType
    _sum?: VouchersSumAggregateInputType
    _min?: VouchersMinAggregateInputType
    _max?: VouchersMaxAggregateInputType
  }

  export type VouchersGroupByOutputType = {
    id: number
    event_id: number
    code: number
    disc_amount: number
    start_date: Date
    end_date: Date
    quota: bigint
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  type GetVouchersGroupByPayload<T extends vouchersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VouchersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VouchersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VouchersGroupByOutputType[P]>
            : GetScalarType<T[P], VouchersGroupByOutputType[P]>
        }
      >
    >


  export type vouchersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    code?: boolean
    disc_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    quota?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>

  export type vouchersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    code?: boolean
    disc_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    quota?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>

  export type vouchersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    code?: boolean
    disc_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    quota?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>

  export type vouchersSelectScalar = {
    id?: boolean
    event_id?: boolean
    code?: boolean
    disc_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    quota?: boolean
  }

  export type vouchersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "code" | "disc_amount" | "start_date" | "end_date" | "quota", ExtArgs["result"]["vouchers"]>
  export type vouchersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }
  export type vouchersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }
  export type vouchersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }

  export type $vouchersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vouchers"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number
      code: number
      disc_amount: number
      start_date: Date
      end_date: Date
      quota: bigint
    }, ExtArgs["result"]["vouchers"]>
    composites: {}
  }

  type vouchersGetPayload<S extends boolean | null | undefined | vouchersDefaultArgs> = $Result.GetResult<Prisma.$vouchersPayload, S>

  type vouchersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vouchersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VouchersCountAggregateInputType | true
    }

  export interface vouchersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vouchers'], meta: { name: 'vouchers' } }
    /**
     * Find zero or one Vouchers that matches the filter.
     * @param {vouchersFindUniqueArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vouchersFindUniqueArgs>(args: SelectSubset<T, vouchersFindUniqueArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vouchers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vouchersFindUniqueOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vouchersFindUniqueOrThrowArgs>(args: SelectSubset<T, vouchersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindFirstArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vouchersFindFirstArgs>(args?: SelectSubset<T, vouchersFindFirstArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vouchers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindFirstOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vouchersFindFirstOrThrowArgs>(args?: SelectSubset<T, vouchersFindFirstOrThrowArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.vouchers.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.vouchers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vouchersFindManyArgs>(args?: SelectSubset<T, vouchersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vouchers.
     * @param {vouchersCreateArgs} args - Arguments to create a Vouchers.
     * @example
     * // Create one Vouchers
     * const Vouchers = await prisma.vouchers.create({
     *   data: {
     *     // ... data to create a Vouchers
     *   }
     * })
     * 
     */
    create<T extends vouchersCreateArgs>(args: SelectSubset<T, vouchersCreateArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {vouchersCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const vouchers = await prisma.vouchers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vouchersCreateManyArgs>(args?: SelectSubset<T, vouchersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {vouchersCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const vouchers = await prisma.vouchers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vouchersCreateManyAndReturnArgs>(args?: SelectSubset<T, vouchersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vouchers.
     * @param {vouchersDeleteArgs} args - Arguments to delete one Vouchers.
     * @example
     * // Delete one Vouchers
     * const Vouchers = await prisma.vouchers.delete({
     *   where: {
     *     // ... filter to delete one Vouchers
     *   }
     * })
     * 
     */
    delete<T extends vouchersDeleteArgs>(args: SelectSubset<T, vouchersDeleteArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vouchers.
     * @param {vouchersUpdateArgs} args - Arguments to update one Vouchers.
     * @example
     * // Update one Vouchers
     * const vouchers = await prisma.vouchers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vouchersUpdateArgs>(args: SelectSubset<T, vouchersUpdateArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {vouchersDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.vouchers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vouchersDeleteManyArgs>(args?: SelectSubset<T, vouchersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const vouchers = await prisma.vouchers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vouchersUpdateManyArgs>(args: SelectSubset<T, vouchersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {vouchersUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const vouchers = await prisma.vouchers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.updateManyAndReturn({
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
    updateManyAndReturn<T extends vouchersUpdateManyAndReturnArgs>(args: SelectSubset<T, vouchersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vouchers.
     * @param {vouchersUpsertArgs} args - Arguments to update or create a Vouchers.
     * @example
     * // Update or create a Vouchers
     * const vouchers = await prisma.vouchers.upsert({
     *   create: {
     *     // ... data to create a Vouchers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vouchers we want to update
     *   }
     * })
     */
    upsert<T extends vouchersUpsertArgs>(args: SelectSubset<T, vouchersUpsertArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.vouchers.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends vouchersCountArgs>(
      args?: Subset<T, vouchersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VouchersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VouchersAggregateArgs>(args: Subset<T, VouchersAggregateArgs>): Prisma.PrismaPromise<GetVouchersAggregateType<T>>

    /**
     * Group by Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersGroupByArgs} args - Group by arguments.
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
      T extends vouchersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vouchersGroupByArgs['orderBy'] }
        : { orderBy?: vouchersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vouchersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVouchersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vouchers model
   */
  readonly fields: vouchersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vouchers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vouchersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the vouchers model
   */
  interface vouchersFieldRefs {
    readonly id: FieldRef<"vouchers", 'Int'>
    readonly event_id: FieldRef<"vouchers", 'Int'>
    readonly code: FieldRef<"vouchers", 'Int'>
    readonly disc_amount: FieldRef<"vouchers", 'Int'>
    readonly start_date: FieldRef<"vouchers", 'DateTime'>
    readonly end_date: FieldRef<"vouchers", 'DateTime'>
    readonly quota: FieldRef<"vouchers", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * vouchers findUnique
   */
  export type vouchersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers findUniqueOrThrow
   */
  export type vouchersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers findFirst
   */
  export type vouchersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vouchers.
     */
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * vouchers findFirstOrThrow
   */
  export type vouchersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vouchers.
     */
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * vouchers findMany
   */
  export type vouchersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * vouchers create
   */
  export type vouchersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * The data needed to create a vouchers.
     */
    data: XOR<vouchersCreateInput, vouchersUncheckedCreateInput>
  }

  /**
   * vouchers createMany
   */
  export type vouchersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vouchers.
     */
    data: vouchersCreateManyInput | vouchersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vouchers createManyAndReturn
   */
  export type vouchersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * The data used to create many vouchers.
     */
    data: vouchersCreateManyInput | vouchersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vouchers update
   */
  export type vouchersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * The data needed to update a vouchers.
     */
    data: XOR<vouchersUpdateInput, vouchersUncheckedUpdateInput>
    /**
     * Choose, which vouchers to update.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers updateMany
   */
  export type vouchersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vouchers.
     */
    data: XOR<vouchersUpdateManyMutationInput, vouchersUncheckedUpdateManyInput>
    /**
     * Filter which vouchers to update
     */
    where?: vouchersWhereInput
    /**
     * Limit how many vouchers to update.
     */
    limit?: number
  }

  /**
   * vouchers updateManyAndReturn
   */
  export type vouchersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * The data used to update vouchers.
     */
    data: XOR<vouchersUpdateManyMutationInput, vouchersUncheckedUpdateManyInput>
    /**
     * Filter which vouchers to update
     */
    where?: vouchersWhereInput
    /**
     * Limit how many vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vouchers upsert
   */
  export type vouchersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * The filter to search for the vouchers to update in case it exists.
     */
    where: vouchersWhereUniqueInput
    /**
     * In case the vouchers found by the `where` argument doesn't exist, create a new vouchers with this data.
     */
    create: XOR<vouchersCreateInput, vouchersUncheckedCreateInput>
    /**
     * In case the vouchers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vouchersUpdateInput, vouchersUncheckedUpdateInput>
  }

  /**
   * vouchers delete
   */
  export type vouchersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter which vouchers to delete.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers deleteMany
   */
  export type vouchersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vouchers to delete
     */
    where?: vouchersWhereInput
    /**
     * Limit how many vouchers to delete.
     */
    limit?: number
  }

  /**
   * vouchers without action
   */
  export type vouchersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
  }


  /**
   * Model ticket_types
   */

  export type AggregateTicket_types = {
    _count: Ticket_typesCountAggregateOutputType | null
    _avg: Ticket_typesAvgAggregateOutputType | null
    _sum: Ticket_typesSumAggregateOutputType | null
    _min: Ticket_typesMinAggregateOutputType | null
    _max: Ticket_typesMaxAggregateOutputType | null
  }

  export type Ticket_typesAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    quota: number | null
    price: number | null
  }

  export type Ticket_typesSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    quota: number | null
    price: number | null
  }

  export type Ticket_typesMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    event_id: number | null
    type_name: string | null
    quota: number | null
    price: number | null
    description: string | null
  }

  export type Ticket_typesMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    event_id: number | null
    type_name: string | null
    quota: number | null
    price: number | null
    description: string | null
  }

  export type Ticket_typesCountAggregateOutputType = {
    id: number
    created_at: number
    event_id: number
    type_name: number
    quota: number
    price: number
    description: number
    _all: number
  }


  export type Ticket_typesAvgAggregateInputType = {
    id?: true
    event_id?: true
    quota?: true
    price?: true
  }

  export type Ticket_typesSumAggregateInputType = {
    id?: true
    event_id?: true
    quota?: true
    price?: true
  }

  export type Ticket_typesMinAggregateInputType = {
    id?: true
    created_at?: true
    event_id?: true
    type_name?: true
    quota?: true
    price?: true
    description?: true
  }

  export type Ticket_typesMaxAggregateInputType = {
    id?: true
    created_at?: true
    event_id?: true
    type_name?: true
    quota?: true
    price?: true
    description?: true
  }

  export type Ticket_typesCountAggregateInputType = {
    id?: true
    created_at?: true
    event_id?: true
    type_name?: true
    quota?: true
    price?: true
    description?: true
    _all?: true
  }

  export type Ticket_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_types to aggregate.
     */
    where?: ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_types to fetch.
     */
    orderBy?: ticket_typesOrderByWithRelationInput | ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ticket_types
    **/
    _count?: true | Ticket_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_typesMaxAggregateInputType
  }

  export type GetTicket_typesAggregateType<T extends Ticket_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_types[P]>
      : GetScalarType<T[P], AggregateTicket_types[P]>
  }




  export type ticket_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_typesWhereInput
    orderBy?: ticket_typesOrderByWithAggregationInput | ticket_typesOrderByWithAggregationInput[]
    by: Ticket_typesScalarFieldEnum[] | Ticket_typesScalarFieldEnum
    having?: ticket_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_typesCountAggregateInputType | true
    _avg?: Ticket_typesAvgAggregateInputType
    _sum?: Ticket_typesSumAggregateInputType
    _min?: Ticket_typesMinAggregateInputType
    _max?: Ticket_typesMaxAggregateInputType
  }

  export type Ticket_typesGroupByOutputType = {
    id: number
    created_at: Date
    event_id: number
    type_name: string
    quota: number
    price: number
    description: string
    _count: Ticket_typesCountAggregateOutputType | null
    _avg: Ticket_typesAvgAggregateOutputType | null
    _sum: Ticket_typesSumAggregateOutputType | null
    _min: Ticket_typesMinAggregateOutputType | null
    _max: Ticket_typesMaxAggregateOutputType | null
  }

  type GetTicket_typesGroupByPayload<T extends ticket_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_typesGroupByOutputType[P]>
        }
      >
    >


  export type ticket_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    event_id?: boolean
    type_name?: boolean
    quota?: boolean
    price?: boolean
    description?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_types"]>

  export type ticket_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    event_id?: boolean
    type_name?: boolean
    quota?: boolean
    price?: boolean
    description?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_types"]>

  export type ticket_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    event_id?: boolean
    type_name?: boolean
    quota?: boolean
    price?: boolean
    description?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_types"]>

  export type ticket_typesSelectScalar = {
    id?: boolean
    created_at?: boolean
    event_id?: boolean
    type_name?: boolean
    quota?: boolean
    price?: boolean
    description?: boolean
  }

  export type ticket_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "event_id" | "type_name" | "quota" | "price" | "description", ExtArgs["result"]["ticket_types"]>
  export type ticket_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }
  export type ticket_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }
  export type ticket_typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }

  export type $ticket_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket_types"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      event_id: number
      type_name: string
      quota: number
      price: number
      description: string
    }, ExtArgs["result"]["ticket_types"]>
    composites: {}
  }

  type ticket_typesGetPayload<S extends boolean | null | undefined | ticket_typesDefaultArgs> = $Result.GetResult<Prisma.$ticket_typesPayload, S>

  type ticket_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticket_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ticket_typesCountAggregateInputType | true
    }

  export interface ticket_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket_types'], meta: { name: 'ticket_types' } }
    /**
     * Find zero or one Ticket_types that matches the filter.
     * @param {ticket_typesFindUniqueArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticket_typesFindUniqueArgs>(args: SelectSubset<T, ticket_typesFindUniqueArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticket_typesFindUniqueOrThrowArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticket_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, ticket_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesFindFirstArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticket_typesFindFirstArgs>(args?: SelectSubset<T, ticket_typesFindFirstArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesFindFirstOrThrowArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticket_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, ticket_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ticket_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_types
     * const ticket_types = await prisma.ticket_types.findMany()
     * 
     * // Get first 10 Ticket_types
     * const ticket_types = await prisma.ticket_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticket_typesWithIdOnly = await prisma.ticket_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ticket_typesFindManyArgs>(args?: SelectSubset<T, ticket_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket_types.
     * @param {ticket_typesCreateArgs} args - Arguments to create a Ticket_types.
     * @example
     * // Create one Ticket_types
     * const Ticket_types = await prisma.ticket_types.create({
     *   data: {
     *     // ... data to create a Ticket_types
     *   }
     * })
     * 
     */
    create<T extends ticket_typesCreateArgs>(args: SelectSubset<T, ticket_typesCreateArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ticket_types.
     * @param {ticket_typesCreateManyArgs} args - Arguments to create many Ticket_types.
     * @example
     * // Create many Ticket_types
     * const ticket_types = await prisma.ticket_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticket_typesCreateManyArgs>(args?: SelectSubset<T, ticket_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ticket_types and returns the data saved in the database.
     * @param {ticket_typesCreateManyAndReturnArgs} args - Arguments to create many Ticket_types.
     * @example
     * // Create many Ticket_types
     * const ticket_types = await prisma.ticket_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ticket_types and only return the `id`
     * const ticket_typesWithIdOnly = await prisma.ticket_types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ticket_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, ticket_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket_types.
     * @param {ticket_typesDeleteArgs} args - Arguments to delete one Ticket_types.
     * @example
     * // Delete one Ticket_types
     * const Ticket_types = await prisma.ticket_types.delete({
     *   where: {
     *     // ... filter to delete one Ticket_types
     *   }
     * })
     * 
     */
    delete<T extends ticket_typesDeleteArgs>(args: SelectSubset<T, ticket_typesDeleteArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket_types.
     * @param {ticket_typesUpdateArgs} args - Arguments to update one Ticket_types.
     * @example
     * // Update one Ticket_types
     * const ticket_types = await prisma.ticket_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticket_typesUpdateArgs>(args: SelectSubset<T, ticket_typesUpdateArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ticket_types.
     * @param {ticket_typesDeleteManyArgs} args - Arguments to filter Ticket_types to delete.
     * @example
     * // Delete a few Ticket_types
     * const { count } = await prisma.ticket_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticket_typesDeleteManyArgs>(args?: SelectSubset<T, ticket_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_types
     * const ticket_types = await prisma.ticket_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticket_typesUpdateManyArgs>(args: SelectSubset<T, ticket_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_types and returns the data updated in the database.
     * @param {ticket_typesUpdateManyAndReturnArgs} args - Arguments to update many Ticket_types.
     * @example
     * // Update many Ticket_types
     * const ticket_types = await prisma.ticket_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ticket_types and only return the `id`
     * const ticket_typesWithIdOnly = await prisma.ticket_types.updateManyAndReturn({
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
    updateManyAndReturn<T extends ticket_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, ticket_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket_types.
     * @param {ticket_typesUpsertArgs} args - Arguments to update or create a Ticket_types.
     * @example
     * // Update or create a Ticket_types
     * const ticket_types = await prisma.ticket_types.upsert({
     *   create: {
     *     // ... data to create a Ticket_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_types we want to update
     *   }
     * })
     */
    upsert<T extends ticket_typesUpsertArgs>(args: SelectSubset<T, ticket_typesUpsertArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesCountArgs} args - Arguments to filter Ticket_types to count.
     * @example
     * // Count the number of Ticket_types
     * const count = await prisma.ticket_types.count({
     *   where: {
     *     // ... the filter for the Ticket_types we want to count
     *   }
     * })
    **/
    count<T extends ticket_typesCountArgs>(
      args?: Subset<T, ticket_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ticket_typesAggregateArgs>(args: Subset<T, Ticket_typesAggregateArgs>): Prisma.PrismaPromise<GetTicket_typesAggregateType<T>>

    /**
     * Group by Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesGroupByArgs} args - Group by arguments.
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
      T extends ticket_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticket_typesGroupByArgs['orderBy'] }
        : { orderBy?: ticket_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ticket_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket_types model
   */
  readonly fields: ticket_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticket_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ticket_types model
   */
  interface ticket_typesFieldRefs {
    readonly id: FieldRef<"ticket_types", 'Int'>
    readonly created_at: FieldRef<"ticket_types", 'DateTime'>
    readonly event_id: FieldRef<"ticket_types", 'Int'>
    readonly type_name: FieldRef<"ticket_types", 'String'>
    readonly quota: FieldRef<"ticket_types", 'Int'>
    readonly price: FieldRef<"ticket_types", 'Int'>
    readonly description: FieldRef<"ticket_types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ticket_types findUnique
   */
  export type ticket_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_types to fetch.
     */
    where: ticket_typesWhereUniqueInput
  }

  /**
   * ticket_types findUniqueOrThrow
   */
  export type ticket_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_types to fetch.
     */
    where: ticket_typesWhereUniqueInput
  }

  /**
   * ticket_types findFirst
   */
  export type ticket_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_types to fetch.
     */
    where?: ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_types to fetch.
     */
    orderBy?: ticket_typesOrderByWithRelationInput | ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_types.
     */
    cursor?: ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_types.
     */
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * ticket_types findFirstOrThrow
   */
  export type ticket_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_types to fetch.
     */
    where?: ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_types to fetch.
     */
    orderBy?: ticket_typesOrderByWithRelationInput | ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_types.
     */
    cursor?: ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_types.
     */
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * ticket_types findMany
   */
  export type ticket_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_types to fetch.
     */
    where?: ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_types to fetch.
     */
    orderBy?: ticket_typesOrderByWithRelationInput | ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ticket_types.
     */
    cursor?: ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_types.
     */
    skip?: number
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * ticket_types create
   */
  export type ticket_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket_types.
     */
    data: XOR<ticket_typesCreateInput, ticket_typesUncheckedCreateInput>
  }

  /**
   * ticket_types createMany
   */
  export type ticket_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticket_types.
     */
    data: ticket_typesCreateManyInput | ticket_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket_types createManyAndReturn
   */
  export type ticket_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * The data used to create many ticket_types.
     */
    data: ticket_typesCreateManyInput | ticket_typesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ticket_types update
   */
  export type ticket_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket_types.
     */
    data: XOR<ticket_typesUpdateInput, ticket_typesUncheckedUpdateInput>
    /**
     * Choose, which ticket_types to update.
     */
    where: ticket_typesWhereUniqueInput
  }

  /**
   * ticket_types updateMany
   */
  export type ticket_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ticket_types.
     */
    data: XOR<ticket_typesUpdateManyMutationInput, ticket_typesUncheckedUpdateManyInput>
    /**
     * Filter which ticket_types to update
     */
    where?: ticket_typesWhereInput
    /**
     * Limit how many ticket_types to update.
     */
    limit?: number
  }

  /**
   * ticket_types updateManyAndReturn
   */
  export type ticket_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * The data used to update ticket_types.
     */
    data: XOR<ticket_typesUpdateManyMutationInput, ticket_typesUncheckedUpdateManyInput>
    /**
     * Filter which ticket_types to update
     */
    where?: ticket_typesWhereInput
    /**
     * Limit how many ticket_types to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ticket_types upsert
   */
  export type ticket_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket_types to update in case it exists.
     */
    where: ticket_typesWhereUniqueInput
    /**
     * In case the ticket_types found by the `where` argument doesn't exist, create a new ticket_types with this data.
     */
    create: XOR<ticket_typesCreateInput, ticket_typesUncheckedCreateInput>
    /**
     * In case the ticket_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticket_typesUpdateInput, ticket_typesUncheckedUpdateInput>
  }

  /**
   * ticket_types delete
   */
  export type ticket_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter which ticket_types to delete.
     */
    where: ticket_typesWhereUniqueInput
  }

  /**
   * ticket_types deleteMany
   */
  export type ticket_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_types to delete
     */
    where?: ticket_typesWhereInput
    /**
     * Limit how many ticket_types to delete.
     */
    limit?: number
  }

  /**
   * ticket_types without action
   */
  export type ticket_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_types
     */
    omit?: ticket_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
  }


  /**
   * Model transaction_detail
   */

  export type AggregateTransaction_detail = {
    _count: Transaction_detailCountAggregateOutputType | null
    _avg: Transaction_detailAvgAggregateOutputType | null
    _sum: Transaction_detailSumAggregateOutputType | null
    _min: Transaction_detailMinAggregateOutputType | null
    _max: Transaction_detailMaxAggregateOutputType | null
  }

  export type Transaction_detailAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type Transaction_detailSumAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type Transaction_detailMinAggregateOutputType = {
    id: number | null
    code: string | null
    event_id: number | null
    is_attend: boolean | null
  }

  export type Transaction_detailMaxAggregateOutputType = {
    id: number | null
    code: string | null
    event_id: number | null
    is_attend: boolean | null
  }

  export type Transaction_detailCountAggregateOutputType = {
    id: number
    code: number
    event_id: number
    is_attend: number
    _all: number
  }


  export type Transaction_detailAvgAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type Transaction_detailSumAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type Transaction_detailMinAggregateInputType = {
    id?: true
    code?: true
    event_id?: true
    is_attend?: true
  }

  export type Transaction_detailMaxAggregateInputType = {
    id?: true
    code?: true
    event_id?: true
    is_attend?: true
  }

  export type Transaction_detailCountAggregateInputType = {
    id?: true
    code?: true
    event_id?: true
    is_attend?: true
    _all?: true
  }

  export type Transaction_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_detail to aggregate.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaction_details
    **/
    _count?: true | Transaction_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Transaction_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Transaction_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_detailMaxAggregateInputType
  }

  export type GetTransaction_detailAggregateType<T extends Transaction_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_detail[P]>
      : GetScalarType<T[P], AggregateTransaction_detail[P]>
  }




  export type transaction_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_detailWhereInput
    orderBy?: transaction_detailOrderByWithAggregationInput | transaction_detailOrderByWithAggregationInput[]
    by: Transaction_detailScalarFieldEnum[] | Transaction_detailScalarFieldEnum
    having?: transaction_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_detailCountAggregateInputType | true
    _avg?: Transaction_detailAvgAggregateInputType
    _sum?: Transaction_detailSumAggregateInputType
    _min?: Transaction_detailMinAggregateInputType
    _max?: Transaction_detailMaxAggregateInputType
  }

  export type Transaction_detailGroupByOutputType = {
    id: number
    code: string
    event_id: number
    is_attend: boolean
    _count: Transaction_detailCountAggregateOutputType | null
    _avg: Transaction_detailAvgAggregateOutputType | null
    _sum: Transaction_detailSumAggregateOutputType | null
    _min: Transaction_detailMinAggregateOutputType | null
    _max: Transaction_detailMaxAggregateOutputType | null
  }

  type GetTransaction_detailGroupByPayload<T extends transaction_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_detailGroupByOutputType[P]>
        }
      >
    >


  export type transaction_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    event_id?: boolean
    is_attend?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
    transactions?: boolean | transaction_detail$transactionsArgs<ExtArgs>
    _count?: boolean | Transaction_detailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_detail"]>

  export type transaction_detailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    event_id?: boolean
    is_attend?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_detail"]>

  export type transaction_detailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    event_id?: boolean
    is_attend?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_detail"]>

  export type transaction_detailSelectScalar = {
    id?: boolean
    code?: boolean
    event_id?: boolean
    is_attend?: boolean
  }

  export type transaction_detailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "event_id" | "is_attend", ExtArgs["result"]["transaction_detail"]>
  export type transaction_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
    transactions?: boolean | transaction_detail$transactionsArgs<ExtArgs>
    _count?: boolean | Transaction_detailCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type transaction_detailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }
  export type transaction_detailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }

  export type $transaction_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction_detail"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      event_id: number
      is_attend: boolean
    }, ExtArgs["result"]["transaction_detail"]>
    composites: {}
  }

  type transaction_detailGetPayload<S extends boolean | null | undefined | transaction_detailDefaultArgs> = $Result.GetResult<Prisma.$transaction_detailPayload, S>

  type transaction_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaction_detailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transaction_detailCountAggregateInputType | true
    }

  export interface transaction_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction_detail'], meta: { name: 'transaction_detail' } }
    /**
     * Find zero or one Transaction_detail that matches the filter.
     * @param {transaction_detailFindUniqueArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaction_detailFindUniqueArgs>(args: SelectSubset<T, transaction_detailFindUniqueArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction_detail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaction_detailFindUniqueOrThrowArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaction_detailFindUniqueOrThrowArgs>(args: SelectSubset<T, transaction_detailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailFindFirstArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaction_detailFindFirstArgs>(args?: SelectSubset<T, transaction_detailFindFirstArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailFindFirstOrThrowArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaction_detailFindFirstOrThrowArgs>(args?: SelectSubset<T, transaction_detailFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaction_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_details
     * const transaction_details = await prisma.transaction_detail.findMany()
     * 
     * // Get first 10 Transaction_details
     * const transaction_details = await prisma.transaction_detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaction_detailWithIdOnly = await prisma.transaction_detail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaction_detailFindManyArgs>(args?: SelectSubset<T, transaction_detailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction_detail.
     * @param {transaction_detailCreateArgs} args - Arguments to create a Transaction_detail.
     * @example
     * // Create one Transaction_detail
     * const Transaction_detail = await prisma.transaction_detail.create({
     *   data: {
     *     // ... data to create a Transaction_detail
     *   }
     * })
     * 
     */
    create<T extends transaction_detailCreateArgs>(args: SelectSubset<T, transaction_detailCreateArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaction_details.
     * @param {transaction_detailCreateManyArgs} args - Arguments to create many Transaction_details.
     * @example
     * // Create many Transaction_details
     * const transaction_detail = await prisma.transaction_detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaction_detailCreateManyArgs>(args?: SelectSubset<T, transaction_detailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaction_details and returns the data saved in the database.
     * @param {transaction_detailCreateManyAndReturnArgs} args - Arguments to create many Transaction_details.
     * @example
     * // Create many Transaction_details
     * const transaction_detail = await prisma.transaction_detail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaction_details and only return the `id`
     * const transaction_detailWithIdOnly = await prisma.transaction_detail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaction_detailCreateManyAndReturnArgs>(args?: SelectSubset<T, transaction_detailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction_detail.
     * @param {transaction_detailDeleteArgs} args - Arguments to delete one Transaction_detail.
     * @example
     * // Delete one Transaction_detail
     * const Transaction_detail = await prisma.transaction_detail.delete({
     *   where: {
     *     // ... filter to delete one Transaction_detail
     *   }
     * })
     * 
     */
    delete<T extends transaction_detailDeleteArgs>(args: SelectSubset<T, transaction_detailDeleteArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction_detail.
     * @param {transaction_detailUpdateArgs} args - Arguments to update one Transaction_detail.
     * @example
     * // Update one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaction_detailUpdateArgs>(args: SelectSubset<T, transaction_detailUpdateArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaction_details.
     * @param {transaction_detailDeleteManyArgs} args - Arguments to filter Transaction_details to delete.
     * @example
     * // Delete a few Transaction_details
     * const { count } = await prisma.transaction_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaction_detailDeleteManyArgs>(args?: SelectSubset<T, transaction_detailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_details
     * const transaction_detail = await prisma.transaction_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaction_detailUpdateManyArgs>(args: SelectSubset<T, transaction_detailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_details and returns the data updated in the database.
     * @param {transaction_detailUpdateManyAndReturnArgs} args - Arguments to update many Transaction_details.
     * @example
     * // Update many Transaction_details
     * const transaction_detail = await prisma.transaction_detail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaction_details and only return the `id`
     * const transaction_detailWithIdOnly = await prisma.transaction_detail.updateManyAndReturn({
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
    updateManyAndReturn<T extends transaction_detailUpdateManyAndReturnArgs>(args: SelectSubset<T, transaction_detailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction_detail.
     * @param {transaction_detailUpsertArgs} args - Arguments to update or create a Transaction_detail.
     * @example
     * // Update or create a Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.upsert({
     *   create: {
     *     // ... data to create a Transaction_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_detail we want to update
     *   }
     * })
     */
    upsert<T extends transaction_detailUpsertArgs>(args: SelectSubset<T, transaction_detailUpsertArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaction_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailCountArgs} args - Arguments to filter Transaction_details to count.
     * @example
     * // Count the number of Transaction_details
     * const count = await prisma.transaction_detail.count({
     *   where: {
     *     // ... the filter for the Transaction_details we want to count
     *   }
     * })
    **/
    count<T extends transaction_detailCountArgs>(
      args?: Subset<T, transaction_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Transaction_detailAggregateArgs>(args: Subset<T, Transaction_detailAggregateArgs>): Prisma.PrismaPromise<GetTransaction_detailAggregateType<T>>

    /**
     * Group by Transaction_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailGroupByArgs} args - Group by arguments.
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
      T extends transaction_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaction_detailGroupByArgs['orderBy'] }
        : { orderBy?: transaction_detailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaction_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction_detail model
   */
  readonly fields: transaction_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaction_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends transaction_detail$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, transaction_detail$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the transaction_detail model
   */
  interface transaction_detailFieldRefs {
    readonly id: FieldRef<"transaction_detail", 'Int'>
    readonly code: FieldRef<"transaction_detail", 'String'>
    readonly event_id: FieldRef<"transaction_detail", 'Int'>
    readonly is_attend: FieldRef<"transaction_detail", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * transaction_detail findUnique
   */
  export type transaction_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where: transaction_detailWhereUniqueInput
  }

  /**
   * transaction_detail findUniqueOrThrow
   */
  export type transaction_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where: transaction_detailWhereUniqueInput
  }

  /**
   * transaction_detail findFirst
   */
  export type transaction_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_details.
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_details.
     */
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }

  /**
   * transaction_detail findFirstOrThrow
   */
  export type transaction_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_details.
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_details.
     */
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }

  /**
   * transaction_detail findMany
   */
  export type transaction_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_details to fetch.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaction_details.
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }

  /**
   * transaction_detail create
   */
  export type transaction_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction_detail.
     */
    data: XOR<transaction_detailCreateInput, transaction_detailUncheckedCreateInput>
  }

  /**
   * transaction_detail createMany
   */
  export type transaction_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_details.
     */
    data: transaction_detailCreateManyInput | transaction_detailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction_detail createManyAndReturn
   */
  export type transaction_detailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * The data used to create many transaction_details.
     */
    data: transaction_detailCreateManyInput | transaction_detailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction_detail update
   */
  export type transaction_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction_detail.
     */
    data: XOR<transaction_detailUpdateInput, transaction_detailUncheckedUpdateInput>
    /**
     * Choose, which transaction_detail to update.
     */
    where: transaction_detailWhereUniqueInput
  }

  /**
   * transaction_detail updateMany
   */
  export type transaction_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_details.
     */
    data: XOR<transaction_detailUpdateManyMutationInput, transaction_detailUncheckedUpdateManyInput>
    /**
     * Filter which transaction_details to update
     */
    where?: transaction_detailWhereInput
    /**
     * Limit how many transaction_details to update.
     */
    limit?: number
  }

  /**
   * transaction_detail updateManyAndReturn
   */
  export type transaction_detailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * The data used to update transaction_details.
     */
    data: XOR<transaction_detailUpdateManyMutationInput, transaction_detailUncheckedUpdateManyInput>
    /**
     * Filter which transaction_details to update
     */
    where?: transaction_detailWhereInput
    /**
     * Limit how many transaction_details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction_detail upsert
   */
  export type transaction_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction_detail to update in case it exists.
     */
    where: transaction_detailWhereUniqueInput
    /**
     * In case the transaction_detail found by the `where` argument doesn't exist, create a new transaction_detail with this data.
     */
    create: XOR<transaction_detailCreateInput, transaction_detailUncheckedCreateInput>
    /**
     * In case the transaction_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaction_detailUpdateInput, transaction_detailUncheckedUpdateInput>
  }

  /**
   * transaction_detail delete
   */
  export type transaction_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter which transaction_detail to delete.
     */
    where: transaction_detailWhereUniqueInput
  }

  /**
   * transaction_detail deleteMany
   */
  export type transaction_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_details to delete
     */
    where?: transaction_detailWhereInput
    /**
     * Limit how many transaction_details to delete.
     */
    limit?: number
  }

  /**
   * transaction_detail.transactions
   */
  export type transaction_detail$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transaction_detail without action
   */
  export type transaction_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
  }


  /**
   * Model organizers
   */

  export type AggregateOrganizers = {
    _count: OrganizersCountAggregateOutputType | null
    _avg: OrganizersAvgAggregateOutputType | null
    _sum: OrganizersSumAggregateOutputType | null
    _min: OrganizersMinAggregateOutputType | null
    _max: OrganizersMaxAggregateOutputType | null
  }

  export type OrganizersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type OrganizersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type OrganizersMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    organizer_name: string | null
    description: string | null
    profile_img: string | null
    user_id: number | null
  }

  export type OrganizersMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    organizer_name: string | null
    description: string | null
    profile_img: string | null
    user_id: number | null
  }

  export type OrganizersCountAggregateOutputType = {
    id: number
    created_at: number
    organizer_name: number
    description: number
    profile_img: number
    user_id: number
    _all: number
  }


  export type OrganizersAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type OrganizersSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type OrganizersMinAggregateInputType = {
    id?: true
    created_at?: true
    organizer_name?: true
    description?: true
    profile_img?: true
    user_id?: true
  }

  export type OrganizersMaxAggregateInputType = {
    id?: true
    created_at?: true
    organizer_name?: true
    description?: true
    profile_img?: true
    user_id?: true
  }

  export type OrganizersCountAggregateInputType = {
    id?: true
    created_at?: true
    organizer_name?: true
    description?: true
    profile_img?: true
    user_id?: true
    _all?: true
  }

  export type OrganizersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizers to aggregate.
     */
    where?: organizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizers to fetch.
     */
    orderBy?: organizersOrderByWithRelationInput | organizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizers
    **/
    _count?: true | OrganizersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizersMaxAggregateInputType
  }

  export type GetOrganizersAggregateType<T extends OrganizersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizers[P]>
      : GetScalarType<T[P], AggregateOrganizers[P]>
  }




  export type organizersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizersWhereInput
    orderBy?: organizersOrderByWithAggregationInput | organizersOrderByWithAggregationInput[]
    by: OrganizersScalarFieldEnum[] | OrganizersScalarFieldEnum
    having?: organizersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizersCountAggregateInputType | true
    _avg?: OrganizersAvgAggregateInputType
    _sum?: OrganizersSumAggregateInputType
    _min?: OrganizersMinAggregateInputType
    _max?: OrganizersMaxAggregateInputType
  }

  export type OrganizersGroupByOutputType = {
    id: number
    created_at: Date
    organizer_name: string
    description: string
    profile_img: string | null
    user_id: number
    _count: OrganizersCountAggregateOutputType | null
    _avg: OrganizersAvgAggregateOutputType | null
    _sum: OrganizersSumAggregateOutputType | null
    _min: OrganizersMinAggregateOutputType | null
    _max: OrganizersMaxAggregateOutputType | null
  }

  type GetOrganizersGroupByPayload<T extends organizersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizersGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizersGroupByOutputType[P]>
        }
      >
    >


  export type organizersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    organizer_name?: boolean
    description?: boolean
    profile_img?: boolean
    user_id?: boolean
    events?: boolean | organizers$eventsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | OrganizersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizers"]>

  export type organizersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    organizer_name?: boolean
    description?: boolean
    profile_img?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizers"]>

  export type organizersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    organizer_name?: boolean
    description?: boolean
    profile_img?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizers"]>

  export type organizersSelectScalar = {
    id?: boolean
    created_at?: boolean
    organizer_name?: boolean
    description?: boolean
    profile_img?: boolean
    user_id?: boolean
  }

  export type organizersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "organizer_name" | "description" | "profile_img" | "user_id", ExtArgs["result"]["organizers"]>
  export type organizersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | organizers$eventsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | OrganizersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type organizersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type organizersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $organizersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organizers"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      organizer_name: string
      description: string
      profile_img: string | null
      user_id: number
    }, ExtArgs["result"]["organizers"]>
    composites: {}
  }

  type organizersGetPayload<S extends boolean | null | undefined | organizersDefaultArgs> = $Result.GetResult<Prisma.$organizersPayload, S>

  type organizersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizersCountAggregateInputType | true
    }

  export interface organizersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organizers'], meta: { name: 'organizers' } }
    /**
     * Find zero or one Organizers that matches the filter.
     * @param {organizersFindUniqueArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizersFindUniqueArgs>(args: SelectSubset<T, organizersFindUniqueArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organizers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizersFindUniqueOrThrowArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizersFindUniqueOrThrowArgs>(args: SelectSubset<T, organizersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersFindFirstArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizersFindFirstArgs>(args?: SelectSubset<T, organizersFindFirstArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersFindFirstOrThrowArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizersFindFirstOrThrowArgs>(args?: SelectSubset<T, organizersFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizers
     * const organizers = await prisma.organizers.findMany()
     * 
     * // Get first 10 Organizers
     * const organizers = await prisma.organizers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizersWithIdOnly = await prisma.organizers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizersFindManyArgs>(args?: SelectSubset<T, organizersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organizers.
     * @param {organizersCreateArgs} args - Arguments to create a Organizers.
     * @example
     * // Create one Organizers
     * const Organizers = await prisma.organizers.create({
     *   data: {
     *     // ... data to create a Organizers
     *   }
     * })
     * 
     */
    create<T extends organizersCreateArgs>(args: SelectSubset<T, organizersCreateArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizers.
     * @param {organizersCreateManyArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizers = await prisma.organizers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizersCreateManyArgs>(args?: SelectSubset<T, organizersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizers and returns the data saved in the database.
     * @param {organizersCreateManyAndReturnArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizers = await prisma.organizers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizers and only return the `id`
     * const organizersWithIdOnly = await prisma.organizers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizersCreateManyAndReturnArgs>(args?: SelectSubset<T, organizersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organizers.
     * @param {organizersDeleteArgs} args - Arguments to delete one Organizers.
     * @example
     * // Delete one Organizers
     * const Organizers = await prisma.organizers.delete({
     *   where: {
     *     // ... filter to delete one Organizers
     *   }
     * })
     * 
     */
    delete<T extends organizersDeleteArgs>(args: SelectSubset<T, organizersDeleteArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organizers.
     * @param {organizersUpdateArgs} args - Arguments to update one Organizers.
     * @example
     * // Update one Organizers
     * const organizers = await prisma.organizers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizersUpdateArgs>(args: SelectSubset<T, organizersUpdateArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizers.
     * @param {organizersDeleteManyArgs} args - Arguments to filter Organizers to delete.
     * @example
     * // Delete a few Organizers
     * const { count } = await prisma.organizers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizersDeleteManyArgs>(args?: SelectSubset<T, organizersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizers
     * const organizers = await prisma.organizers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizersUpdateManyArgs>(args: SelectSubset<T, organizersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizers and returns the data updated in the database.
     * @param {organizersUpdateManyAndReturnArgs} args - Arguments to update many Organizers.
     * @example
     * // Update many Organizers
     * const organizers = await prisma.organizers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizers and only return the `id`
     * const organizersWithIdOnly = await prisma.organizers.updateManyAndReturn({
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
    updateManyAndReturn<T extends organizersUpdateManyAndReturnArgs>(args: SelectSubset<T, organizersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organizers.
     * @param {organizersUpsertArgs} args - Arguments to update or create a Organizers.
     * @example
     * // Update or create a Organizers
     * const organizers = await prisma.organizers.upsert({
     *   create: {
     *     // ... data to create a Organizers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizers we want to update
     *   }
     * })
     */
    upsert<T extends organizersUpsertArgs>(args: SelectSubset<T, organizersUpsertArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersCountArgs} args - Arguments to filter Organizers to count.
     * @example
     * // Count the number of Organizers
     * const count = await prisma.organizers.count({
     *   where: {
     *     // ... the filter for the Organizers we want to count
     *   }
     * })
    **/
    count<T extends organizersCountArgs>(
      args?: Subset<T, organizersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizersAggregateArgs>(args: Subset<T, OrganizersAggregateArgs>): Prisma.PrismaPromise<GetOrganizersAggregateType<T>>

    /**
     * Group by Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersGroupByArgs} args - Group by arguments.
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
      T extends organizersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizersGroupByArgs['orderBy'] }
        : { orderBy?: organizersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, organizersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organizers model
   */
  readonly fields: organizersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organizers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends organizers$eventsArgs<ExtArgs> = {}>(args?: Subset<T, organizers$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the organizers model
   */
  interface organizersFieldRefs {
    readonly id: FieldRef<"organizers", 'Int'>
    readonly created_at: FieldRef<"organizers", 'DateTime'>
    readonly organizer_name: FieldRef<"organizers", 'String'>
    readonly description: FieldRef<"organizers", 'String'>
    readonly profile_img: FieldRef<"organizers", 'String'>
    readonly user_id: FieldRef<"organizers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * organizers findUnique
   */
  export type organizersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter, which organizers to fetch.
     */
    where: organizersWhereUniqueInput
  }

  /**
   * organizers findUniqueOrThrow
   */
  export type organizersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter, which organizers to fetch.
     */
    where: organizersWhereUniqueInput
  }

  /**
   * organizers findFirst
   */
  export type organizersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter, which organizers to fetch.
     */
    where?: organizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizers to fetch.
     */
    orderBy?: organizersOrderByWithRelationInput | organizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizers.
     */
    cursor?: organizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizers.
     */
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * organizers findFirstOrThrow
   */
  export type organizersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter, which organizers to fetch.
     */
    where?: organizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizers to fetch.
     */
    orderBy?: organizersOrderByWithRelationInput | organizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizers.
     */
    cursor?: organizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizers.
     */
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * organizers findMany
   */
  export type organizersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter, which organizers to fetch.
     */
    where?: organizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizers to fetch.
     */
    orderBy?: organizersOrderByWithRelationInput | organizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizers.
     */
    cursor?: organizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizers.
     */
    skip?: number
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * organizers create
   */
  export type organizersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * The data needed to create a organizers.
     */
    data: XOR<organizersCreateInput, organizersUncheckedCreateInput>
  }

  /**
   * organizers createMany
   */
  export type organizersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizers.
     */
    data: organizersCreateManyInput | organizersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizers createManyAndReturn
   */
  export type organizersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * The data used to create many organizers.
     */
    data: organizersCreateManyInput | organizersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * organizers update
   */
  export type organizersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * The data needed to update a organizers.
     */
    data: XOR<organizersUpdateInput, organizersUncheckedUpdateInput>
    /**
     * Choose, which organizers to update.
     */
    where: organizersWhereUniqueInput
  }

  /**
   * organizers updateMany
   */
  export type organizersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizers.
     */
    data: XOR<organizersUpdateManyMutationInput, organizersUncheckedUpdateManyInput>
    /**
     * Filter which organizers to update
     */
    where?: organizersWhereInput
    /**
     * Limit how many organizers to update.
     */
    limit?: number
  }

  /**
   * organizers updateManyAndReturn
   */
  export type organizersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * The data used to update organizers.
     */
    data: XOR<organizersUpdateManyMutationInput, organizersUncheckedUpdateManyInput>
    /**
     * Filter which organizers to update
     */
    where?: organizersWhereInput
    /**
     * Limit how many organizers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * organizers upsert
   */
  export type organizersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * The filter to search for the organizers to update in case it exists.
     */
    where: organizersWhereUniqueInput
    /**
     * In case the organizers found by the `where` argument doesn't exist, create a new organizers with this data.
     */
    create: XOR<organizersCreateInput, organizersUncheckedCreateInput>
    /**
     * In case the organizers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizersUpdateInput, organizersUncheckedUpdateInput>
  }

  /**
   * organizers delete
   */
  export type organizersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter which organizers to delete.
     */
    where: organizersWhereUniqueInput
  }

  /**
   * organizers deleteMany
   */
  export type organizersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizers to delete
     */
    where?: organizersWhereInput
    /**
     * Limit how many organizers to delete.
     */
    limit?: number
  }

  /**
   * organizers.events
   */
  export type organizers$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    cursor?: eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * organizers without action
   */
  export type organizersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
  }


  /**
   * Model cities
   */

  export type AggregateCities = {
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  export type CitiesAvgAggregateOutputType = {
    id: number | null
  }

  export type CitiesSumAggregateOutputType = {
    id: number | null
  }

  export type CitiesMinAggregateOutputType = {
    id: number | null
    city: string | null
    country: string | null
  }

  export type CitiesMaxAggregateOutputType = {
    id: number | null
    city: string | null
    country: string | null
  }

  export type CitiesCountAggregateOutputType = {
    id: number
    city: number
    country: number
    _all: number
  }


  export type CitiesAvgAggregateInputType = {
    id?: true
  }

  export type CitiesSumAggregateInputType = {
    id?: true
  }

  export type CitiesMinAggregateInputType = {
    id?: true
    city?: true
    country?: true
  }

  export type CitiesMaxAggregateInputType = {
    id?: true
    city?: true
    country?: true
  }

  export type CitiesCountAggregateInputType = {
    id?: true
    city?: true
    country?: true
    _all?: true
  }

  export type CitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to aggregate.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitiesMaxAggregateInputType
  }

  export type GetCitiesAggregateType<T extends CitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCities[P]>
      : GetScalarType<T[P], AggregateCities[P]>
  }




  export type citiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citiesWhereInput
    orderBy?: citiesOrderByWithAggregationInput | citiesOrderByWithAggregationInput[]
    by: CitiesScalarFieldEnum[] | CitiesScalarFieldEnum
    having?: citiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitiesCountAggregateInputType | true
    _avg?: CitiesAvgAggregateInputType
    _sum?: CitiesSumAggregateInputType
    _min?: CitiesMinAggregateInputType
    _max?: CitiesMaxAggregateInputType
  }

  export type CitiesGroupByOutputType = {
    id: number
    city: string
    country: string
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  type GetCitiesGroupByPayload<T extends citiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CitiesGroupByOutputType[P]>
        }
      >
    >


  export type citiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    country?: boolean
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    country?: boolean
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    country?: boolean
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectScalar = {
    id?: boolean
    city?: boolean
    country?: boolean
  }

  export type citiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "city" | "country", ExtArgs["result"]["cities"]>

  export type $citiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cities"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      city: string
      country: string
    }, ExtArgs["result"]["cities"]>
    composites: {}
  }

  type citiesGetPayload<S extends boolean | null | undefined | citiesDefaultArgs> = $Result.GetResult<Prisma.$citiesPayload, S>

  type citiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<citiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitiesCountAggregateInputType | true
    }

  export interface citiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cities'], meta: { name: 'cities' } }
    /**
     * Find zero or one Cities that matches the filter.
     * @param {citiesFindUniqueArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends citiesFindUniqueArgs>(args: SelectSubset<T, citiesFindUniqueArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {citiesFindUniqueOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends citiesFindUniqueOrThrowArgs>(args: SelectSubset<T, citiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends citiesFindFirstArgs>(args?: SelectSubset<T, citiesFindFirstArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends citiesFindFirstOrThrowArgs>(args?: SelectSubset<T, citiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.cities.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.cities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citiesWithIdOnly = await prisma.cities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends citiesFindManyArgs>(args?: SelectSubset<T, citiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cities.
     * @param {citiesCreateArgs} args - Arguments to create a Cities.
     * @example
     * // Create one Cities
     * const Cities = await prisma.cities.create({
     *   data: {
     *     // ... data to create a Cities
     *   }
     * })
     * 
     */
    create<T extends citiesCreateArgs>(args: SelectSubset<T, citiesCreateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {citiesCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends citiesCreateManyArgs>(args?: SelectSubset<T, citiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {citiesCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const citiesWithIdOnly = await prisma.cities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends citiesCreateManyAndReturnArgs>(args?: SelectSubset<T, citiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cities.
     * @param {citiesDeleteArgs} args - Arguments to delete one Cities.
     * @example
     * // Delete one Cities
     * const Cities = await prisma.cities.delete({
     *   where: {
     *     // ... filter to delete one Cities
     *   }
     * })
     * 
     */
    delete<T extends citiesDeleteArgs>(args: SelectSubset<T, citiesDeleteArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cities.
     * @param {citiesUpdateArgs} args - Arguments to update one Cities.
     * @example
     * // Update one Cities
     * const cities = await prisma.cities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends citiesUpdateArgs>(args: SelectSubset<T, citiesUpdateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {citiesDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.cities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends citiesDeleteManyArgs>(args?: SelectSubset<T, citiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends citiesUpdateManyArgs>(args: SelectSubset<T, citiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {citiesUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const citiesWithIdOnly = await prisma.cities.updateManyAndReturn({
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
    updateManyAndReturn<T extends citiesUpdateManyAndReturnArgs>(args: SelectSubset<T, citiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cities.
     * @param {citiesUpsertArgs} args - Arguments to update or create a Cities.
     * @example
     * // Update or create a Cities
     * const cities = await prisma.cities.upsert({
     *   create: {
     *     // ... data to create a Cities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cities we want to update
     *   }
     * })
     */
    upsert<T extends citiesUpsertArgs>(args: SelectSubset<T, citiesUpsertArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.cities.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends citiesCountArgs>(
      args?: Subset<T, citiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitiesAggregateArgs>(args: Subset<T, CitiesAggregateArgs>): Prisma.PrismaPromise<GetCitiesAggregateType<T>>

    /**
     * Group by Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesGroupByArgs} args - Group by arguments.
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
      T extends citiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: citiesGroupByArgs['orderBy'] }
        : { orderBy?: citiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, citiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cities model
   */
  readonly fields: citiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__citiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the cities model
   */
  interface citiesFieldRefs {
    readonly id: FieldRef<"cities", 'Int'>
    readonly city: FieldRef<"cities", 'String'>
    readonly country: FieldRef<"cities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cities findUnique
   */
  export type citiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findUniqueOrThrow
   */
  export type citiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findFirst
   */
  export type citiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findFirstOrThrow
   */
  export type citiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findMany
   */
  export type citiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities create
   */
  export type citiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The data needed to create a cities.
     */
    data: XOR<citiesCreateInput, citiesUncheckedCreateInput>
  }

  /**
   * cities createMany
   */
  export type citiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cities.
     */
    data: citiesCreateManyInput | citiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cities createManyAndReturn
   */
  export type citiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The data used to create many cities.
     */
    data: citiesCreateManyInput | citiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cities update
   */
  export type citiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The data needed to update a cities.
     */
    data: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
    /**
     * Choose, which cities to update.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities updateMany
   */
  export type citiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cities.
     */
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
  }

  /**
   * cities updateManyAndReturn
   */
  export type citiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The data used to update cities.
     */
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
  }

  /**
   * cities upsert
   */
  export type citiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The filter to search for the cities to update in case it exists.
     */
    where: citiesWhereUniqueInput
    /**
     * In case the cities found by the `where` argument doesn't exist, create a new cities with this data.
     */
    create: XOR<citiesCreateInput, citiesUncheckedCreateInput>
    /**
     * In case the cities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
  }

  /**
   * cities delete
   */
  export type citiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Filter which cities to delete.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities deleteMany
   */
  export type citiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to delete
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to delete.
     */
    limit?: number
  }

  /**
   * cities without action
   */
  export type citiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
  }


  /**
   * Model points
   */

  export type AggregatePoints = {
    _count: PointsCountAggregateOutputType | null
    _avg: PointsAvgAggregateOutputType | null
    _sum: PointsSumAggregateOutputType | null
    _min: PointsMinAggregateOutputType | null
    _max: PointsMaxAggregateOutputType | null
  }

  export type PointsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    points_amount: number | null
  }

  export type PointsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    points_amount: number | null
  }

  export type PointsMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    user_id: number | null
    points_amount: number | null
    expire_date: Date | null
  }

  export type PointsMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    user_id: number | null
    points_amount: number | null
    expire_date: Date | null
  }

  export type PointsCountAggregateOutputType = {
    id: number
    created_at: number
    user_id: number
    points_amount: number
    expire_date: number
    _all: number
  }


  export type PointsAvgAggregateInputType = {
    id?: true
    user_id?: true
    points_amount?: true
  }

  export type PointsSumAggregateInputType = {
    id?: true
    user_id?: true
    points_amount?: true
  }

  export type PointsMinAggregateInputType = {
    id?: true
    created_at?: true
    user_id?: true
    points_amount?: true
    expire_date?: true
  }

  export type PointsMaxAggregateInputType = {
    id?: true
    created_at?: true
    user_id?: true
    points_amount?: true
    expire_date?: true
  }

  export type PointsCountAggregateInputType = {
    id?: true
    created_at?: true
    user_id?: true
    points_amount?: true
    expire_date?: true
    _all?: true
  }

  export type PointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which points to aggregate.
     */
    where?: pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of points to fetch.
     */
    orderBy?: pointsOrderByWithRelationInput | pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned points
    **/
    _count?: true | PointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointsMaxAggregateInputType
  }

  export type GetPointsAggregateType<T extends PointsAggregateArgs> = {
        [P in keyof T & keyof AggregatePoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoints[P]>
      : GetScalarType<T[P], AggregatePoints[P]>
  }




  export type pointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pointsWhereInput
    orderBy?: pointsOrderByWithAggregationInput | pointsOrderByWithAggregationInput[]
    by: PointsScalarFieldEnum[] | PointsScalarFieldEnum
    having?: pointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointsCountAggregateInputType | true
    _avg?: PointsAvgAggregateInputType
    _sum?: PointsSumAggregateInputType
    _min?: PointsMinAggregateInputType
    _max?: PointsMaxAggregateInputType
  }

  export type PointsGroupByOutputType = {
    id: number
    created_at: Date
    user_id: number
    points_amount: number
    expire_date: Date | null
    _count: PointsCountAggregateOutputType | null
    _avg: PointsAvgAggregateOutputType | null
    _sum: PointsSumAggregateOutputType | null
    _min: PointsMinAggregateOutputType | null
    _max: PointsMaxAggregateOutputType | null
  }

  type GetPointsGroupByPayload<T extends pointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointsGroupByOutputType[P]>
            : GetScalarType<T[P], PointsGroupByOutputType[P]>
        }
      >
    >


  export type pointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    user_id?: boolean
    points_amount?: boolean
    expire_date?: boolean
    users_points_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_users_pointsTopoints?: boolean | points$users_users_pointsTopointsArgs<ExtArgs>
    _count?: boolean | PointsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type pointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    user_id?: boolean
    points_amount?: boolean
    expire_date?: boolean
    users_points_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type pointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    user_id?: boolean
    points_amount?: boolean
    expire_date?: boolean
    users_points_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type pointsSelectScalar = {
    id?: boolean
    created_at?: boolean
    user_id?: boolean
    points_amount?: boolean
    expire_date?: boolean
  }

  export type pointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "user_id" | "points_amount" | "expire_date", ExtArgs["result"]["points"]>
  export type pointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_points_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_users_pointsTopoints?: boolean | points$users_users_pointsTopointsArgs<ExtArgs>
    _count?: boolean | PointsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_points_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type pointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_points_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $pointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "points"
    objects: {
      users_points_user_idTousers: Prisma.$usersPayload<ExtArgs>
      users_users_pointsTopoints: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      user_id: number
      points_amount: number
      expire_date: Date | null
    }, ExtArgs["result"]["points"]>
    composites: {}
  }

  type pointsGetPayload<S extends boolean | null | undefined | pointsDefaultArgs> = $Result.GetResult<Prisma.$pointsPayload, S>

  type pointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointsCountAggregateInputType | true
    }

  export interface pointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['points'], meta: { name: 'points' } }
    /**
     * Find zero or one Points that matches the filter.
     * @param {pointsFindUniqueArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pointsFindUniqueArgs>(args: SelectSubset<T, pointsFindUniqueArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Points that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pointsFindUniqueOrThrowArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pointsFindUniqueOrThrowArgs>(args: SelectSubset<T, pointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsFindFirstArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pointsFindFirstArgs>(args?: SelectSubset<T, pointsFindFirstArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsFindFirstOrThrowArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pointsFindFirstOrThrowArgs>(args?: SelectSubset<T, pointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.points.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.points.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointsWithIdOnly = await prisma.points.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pointsFindManyArgs>(args?: SelectSubset<T, pointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Points.
     * @param {pointsCreateArgs} args - Arguments to create a Points.
     * @example
     * // Create one Points
     * const Points = await prisma.points.create({
     *   data: {
     *     // ... data to create a Points
     *   }
     * })
     * 
     */
    create<T extends pointsCreateArgs>(args: SelectSubset<T, pointsCreateArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {pointsCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const points = await prisma.points.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pointsCreateManyArgs>(args?: SelectSubset<T, pointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {pointsCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const points = await prisma.points.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointsWithIdOnly = await prisma.points.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pointsCreateManyAndReturnArgs>(args?: SelectSubset<T, pointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Points.
     * @param {pointsDeleteArgs} args - Arguments to delete one Points.
     * @example
     * // Delete one Points
     * const Points = await prisma.points.delete({
     *   where: {
     *     // ... filter to delete one Points
     *   }
     * })
     * 
     */
    delete<T extends pointsDeleteArgs>(args: SelectSubset<T, pointsDeleteArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Points.
     * @param {pointsUpdateArgs} args - Arguments to update one Points.
     * @example
     * // Update one Points
     * const points = await prisma.points.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pointsUpdateArgs>(args: SelectSubset<T, pointsUpdateArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {pointsDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.points.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pointsDeleteManyArgs>(args?: SelectSubset<T, pointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const points = await prisma.points.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pointsUpdateManyArgs>(args: SelectSubset<T, pointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {pointsUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const points = await prisma.points.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `id`
     * const pointsWithIdOnly = await prisma.points.updateManyAndReturn({
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
    updateManyAndReturn<T extends pointsUpdateManyAndReturnArgs>(args: SelectSubset<T, pointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Points.
     * @param {pointsUpsertArgs} args - Arguments to update or create a Points.
     * @example
     * // Update or create a Points
     * const points = await prisma.points.upsert({
     *   create: {
     *     // ... data to create a Points
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Points we want to update
     *   }
     * })
     */
    upsert<T extends pointsUpsertArgs>(args: SelectSubset<T, pointsUpsertArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.points.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends pointsCountArgs>(
      args?: Subset<T, pointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointsAggregateArgs>(args: Subset<T, PointsAggregateArgs>): Prisma.PrismaPromise<GetPointsAggregateType<T>>

    /**
     * Group by Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsGroupByArgs} args - Group by arguments.
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
      T extends pointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pointsGroupByArgs['orderBy'] }
        : { orderBy?: pointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the points model
   */
  readonly fields: pointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for points.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_points_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_users_pointsTopoints<T extends points$users_users_pointsTopointsArgs<ExtArgs> = {}>(args?: Subset<T, points$users_users_pointsTopointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the points model
   */
  interface pointsFieldRefs {
    readonly id: FieldRef<"points", 'Int'>
    readonly created_at: FieldRef<"points", 'DateTime'>
    readonly user_id: FieldRef<"points", 'Int'>
    readonly points_amount: FieldRef<"points", 'Int'>
    readonly expire_date: FieldRef<"points", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * points findUnique
   */
  export type pointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    /**
     * Filter, which points to fetch.
     */
    where: pointsWhereUniqueInput
  }

  /**
   * points findUniqueOrThrow
   */
  export type pointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    /**
     * Filter, which points to fetch.
     */
    where: pointsWhereUniqueInput
  }

  /**
   * points findFirst
   */
  export type pointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    /**
     * Filter, which points to fetch.
     */
    where?: pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of points to fetch.
     */
    orderBy?: pointsOrderByWithRelationInput | pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for points.
     */
    cursor?: pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * points findFirstOrThrow
   */
  export type pointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    /**
     * Filter, which points to fetch.
     */
    where?: pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of points to fetch.
     */
    orderBy?: pointsOrderByWithRelationInput | pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for points.
     */
    cursor?: pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * points findMany
   */
  export type pointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    /**
     * Filter, which points to fetch.
     */
    where?: pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of points to fetch.
     */
    orderBy?: pointsOrderByWithRelationInput | pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing points.
     */
    cursor?: pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` points.
     */
    skip?: number
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * points create
   */
  export type pointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    /**
     * The data needed to create a points.
     */
    data: XOR<pointsCreateInput, pointsUncheckedCreateInput>
  }

  /**
   * points createMany
   */
  export type pointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many points.
     */
    data: pointsCreateManyInput | pointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * points createManyAndReturn
   */
  export type pointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * The data used to create many points.
     */
    data: pointsCreateManyInput | pointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * points update
   */
  export type pointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    /**
     * The data needed to update a points.
     */
    data: XOR<pointsUpdateInput, pointsUncheckedUpdateInput>
    /**
     * Choose, which points to update.
     */
    where: pointsWhereUniqueInput
  }

  /**
   * points updateMany
   */
  export type pointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update points.
     */
    data: XOR<pointsUpdateManyMutationInput, pointsUncheckedUpdateManyInput>
    /**
     * Filter which points to update
     */
    where?: pointsWhereInput
    /**
     * Limit how many points to update.
     */
    limit?: number
  }

  /**
   * points updateManyAndReturn
   */
  export type pointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * The data used to update points.
     */
    data: XOR<pointsUpdateManyMutationInput, pointsUncheckedUpdateManyInput>
    /**
     * Filter which points to update
     */
    where?: pointsWhereInput
    /**
     * Limit how many points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * points upsert
   */
  export type pointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    /**
     * The filter to search for the points to update in case it exists.
     */
    where: pointsWhereUniqueInput
    /**
     * In case the points found by the `where` argument doesn't exist, create a new points with this data.
     */
    create: XOR<pointsCreateInput, pointsUncheckedCreateInput>
    /**
     * In case the points was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pointsUpdateInput, pointsUncheckedUpdateInput>
  }

  /**
   * points delete
   */
  export type pointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
    /**
     * Filter which points to delete.
     */
    where: pointsWhereUniqueInput
  }

  /**
   * points deleteMany
   */
  export type pointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which points to delete
     */
    where?: pointsWhereInput
    /**
     * Limit how many points to delete.
     */
    limit?: number
  }

  /**
   * points.users_users_pointsTopoints
   */
  export type points$users_users_pointsTopointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * points without action
   */
  export type pointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pointsInclude<ExtArgs> | null
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


  export const AttendeesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    ticket_qty: 'ticket_qty',
    total_paid: 'total_paid'
  };

  export type AttendeesScalarFieldEnum = (typeof AttendeesScalarFieldEnum)[keyof typeof AttendeesScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    organizer_id: 'organizer_id',
    event_picture: 'event_picture',
    title: 'title',
    location: 'location',
    start_date: 'start_date',
    end_date: 'end_date',
    category: 'category',
    description: 'description'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    transaction_id: 'transaction_id',
    message: 'message'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const Referral_couponsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    code: 'code',
    expires_date: 'expires_date',
    disc_amunt: 'disc_amunt'
  };

  export type Referral_couponsScalarFieldEnum = (typeof Referral_couponsScalarFieldEnum)[keyof typeof Referral_couponsScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    rating: 'rating',
    comment: 'comment'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    ticket_id: 'ticket_id',
    total_price: 'total_price',
    payment_proof: 'payment_proof',
    expired_date: 'expired_date',
    invoice_id: 'invoice_id',
    status: 'status'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    profile_picture: 'profile_picture',
    email: 'email',
    password: 'password',
    referral_code: 'referral_code',
    refered_by: 'refered_by',
    points: 'points',
    is_verified: 'is_verified',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VouchersScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    code: 'code',
    disc_amount: 'disc_amount',
    start_date: 'start_date',
    end_date: 'end_date',
    quota: 'quota'
  };

  export type VouchersScalarFieldEnum = (typeof VouchersScalarFieldEnum)[keyof typeof VouchersScalarFieldEnum]


  export const Ticket_typesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    event_id: 'event_id',
    type_name: 'type_name',
    quota: 'quota',
    price: 'price',
    description: 'description'
  };

  export type Ticket_typesScalarFieldEnum = (typeof Ticket_typesScalarFieldEnum)[keyof typeof Ticket_typesScalarFieldEnum]


  export const Transaction_detailScalarFieldEnum: {
    id: 'id',
    code: 'code',
    event_id: 'event_id',
    is_attend: 'is_attend'
  };

  export type Transaction_detailScalarFieldEnum = (typeof Transaction_detailScalarFieldEnum)[keyof typeof Transaction_detailScalarFieldEnum]


  export const OrganizersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    organizer_name: 'organizer_name',
    description: 'description',
    profile_img: 'profile_img',
    user_id: 'user_id'
  };

  export type OrganizersScalarFieldEnum = (typeof OrganizersScalarFieldEnum)[keyof typeof OrganizersScalarFieldEnum]


  export const CitiesScalarFieldEnum: {
    id: 'id',
    city: 'city',
    country: 'country'
  };

  export type CitiesScalarFieldEnum = (typeof CitiesScalarFieldEnum)[keyof typeof CitiesScalarFieldEnum]


  export const PointsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    user_id: 'user_id',
    points_amount: 'points_amount',
    expire_date: 'expire_date'
  };

  export type PointsScalarFieldEnum = (typeof PointsScalarFieldEnum)[keyof typeof PointsScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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


  export type attendeesWhereInput = {
    AND?: attendeesWhereInput | attendeesWhereInput[]
    OR?: attendeesWhereInput[]
    NOT?: attendeesWhereInput | attendeesWhereInput[]
    id?: IntFilter<"attendees"> | number
    user_id?: IntFilter<"attendees"> | number
    event_id?: IntFilter<"attendees"> | number
    ticket_qty?: BigIntFilter<"attendees"> | bigint | number
    total_paid?: BigIntFilter<"attendees"> | bigint | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
  }

  export type attendeesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_qty?: SortOrder
    total_paid?: SortOrder
    users?: usersOrderByWithRelationInput
    events?: eventsOrderByWithRelationInput
  }

  export type attendeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: attendeesWhereInput | attendeesWhereInput[]
    OR?: attendeesWhereInput[]
    NOT?: attendeesWhereInput | attendeesWhereInput[]
    user_id?: IntFilter<"attendees"> | number
    event_id?: IntFilter<"attendees"> | number
    ticket_qty?: BigIntFilter<"attendees"> | bigint | number
    total_paid?: BigIntFilter<"attendees"> | bigint | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
  }, "id">

  export type attendeesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_qty?: SortOrder
    total_paid?: SortOrder
    _count?: attendeesCountOrderByAggregateInput
    _avg?: attendeesAvgOrderByAggregateInput
    _max?: attendeesMaxOrderByAggregateInput
    _min?: attendeesMinOrderByAggregateInput
    _sum?: attendeesSumOrderByAggregateInput
  }

  export type attendeesScalarWhereWithAggregatesInput = {
    AND?: attendeesScalarWhereWithAggregatesInput | attendeesScalarWhereWithAggregatesInput[]
    OR?: attendeesScalarWhereWithAggregatesInput[]
    NOT?: attendeesScalarWhereWithAggregatesInput | attendeesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"attendees"> | number
    user_id?: IntWithAggregatesFilter<"attendees"> | number
    event_id?: IntWithAggregatesFilter<"attendees"> | number
    ticket_qty?: BigIntWithAggregatesFilter<"attendees"> | bigint | number
    total_paid?: BigIntWithAggregatesFilter<"attendees"> | bigint | number
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: IntFilter<"events"> | number
    organizer_id?: IntFilter<"events"> | number
    event_picture?: StringFilter<"events"> | string
    title?: StringFilter<"events"> | string
    location?: StringFilter<"events"> | string
    start_date?: DateTimeFilter<"events"> | Date | string
    end_date?: DateTimeFilter<"events"> | Date | string
    category?: EnumCategoryFilter<"events"> | $Enums.Category
    description?: StringFilter<"events"> | string
    attendees?: AttendeesListRelationFilter
    organizer?: XOR<OrganizersScalarRelationFilter, organizersWhereInput>
    reviews?: ReviewsListRelationFilter
    ticket_types?: Ticket_typesListRelationFilter
    transaction_detail?: Transaction_detailListRelationFilter
    transactions?: TransactionsListRelationFilter
    vouchers?: VouchersListRelationFilter
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    event_picture?: SortOrder
    title?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    attendees?: attendeesOrderByRelationAggregateInput
    organizer?: organizersOrderByWithRelationInput
    reviews?: reviewsOrderByRelationAggregateInput
    ticket_types?: ticket_typesOrderByRelationAggregateInput
    transaction_detail?: transaction_detailOrderByRelationAggregateInput
    transactions?: transactionsOrderByRelationAggregateInput
    vouchers?: vouchersOrderByRelationAggregateInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    organizer_id?: IntFilter<"events"> | number
    event_picture?: StringFilter<"events"> | string
    location?: StringFilter<"events"> | string
    start_date?: DateTimeFilter<"events"> | Date | string
    end_date?: DateTimeFilter<"events"> | Date | string
    category?: EnumCategoryFilter<"events"> | $Enums.Category
    description?: StringFilter<"events"> | string
    attendees?: AttendeesListRelationFilter
    organizer?: XOR<OrganizersScalarRelationFilter, organizersWhereInput>
    reviews?: ReviewsListRelationFilter
    ticket_types?: Ticket_typesListRelationFilter
    transaction_detail?: Transaction_detailListRelationFilter
    transactions?: TransactionsListRelationFilter
    vouchers?: VouchersListRelationFilter
  }, "id" | "title">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    event_picture?: SortOrder
    title?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events"> | number
    organizer_id?: IntWithAggregatesFilter<"events"> | number
    event_picture?: StringWithAggregatesFilter<"events"> | string
    title?: StringWithAggregatesFilter<"events"> | string
    location?: StringWithAggregatesFilter<"events"> | string
    start_date?: DateTimeWithAggregatesFilter<"events"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"events"> | Date | string
    category?: EnumCategoryWithAggregatesFilter<"events"> | $Enums.Category
    description?: StringWithAggregatesFilter<"events"> | string
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntFilter<"notifications"> | number
    transaction_id?: IntFilter<"notifications"> | number
    message?: StringFilter<"notifications"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transactions?: XOR<TransactionsScalarRelationFilter, transactionsWhereInput>
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    transaction_id?: SortOrder
    message?: SortOrder
    users?: usersOrderByWithRelationInput
    transactions?: transactionsOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    user_id?: IntFilter<"notifications"> | number
    transaction_id?: IntFilter<"notifications"> | number
    message?: StringFilter<"notifications"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transactions?: XOR<TransactionsScalarRelationFilter, transactionsWhereInput>
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    transaction_id?: SortOrder
    message?: SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notifications"> | number
    user_id?: IntWithAggregatesFilter<"notifications"> | number
    transaction_id?: IntWithAggregatesFilter<"notifications"> | number
    message?: StringWithAggregatesFilter<"notifications"> | string
  }

  export type referral_couponsWhereInput = {
    AND?: referral_couponsWhereInput | referral_couponsWhereInput[]
    OR?: referral_couponsWhereInput[]
    NOT?: referral_couponsWhereInput | referral_couponsWhereInput[]
    id?: IntFilter<"referral_coupons"> | number
    user_id?: IntFilter<"referral_coupons"> | number
    code?: StringFilter<"referral_coupons"> | string
    expires_date?: DateTimeFilter<"referral_coupons"> | Date | string
    disc_amunt?: IntFilter<"referral_coupons"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type referral_couponsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    expires_date?: SortOrder
    disc_amunt?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type referral_couponsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: referral_couponsWhereInput | referral_couponsWhereInput[]
    OR?: referral_couponsWhereInput[]
    NOT?: referral_couponsWhereInput | referral_couponsWhereInput[]
    user_id?: IntFilter<"referral_coupons"> | number
    code?: StringFilter<"referral_coupons"> | string
    expires_date?: DateTimeFilter<"referral_coupons"> | Date | string
    disc_amunt?: IntFilter<"referral_coupons"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type referral_couponsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    expires_date?: SortOrder
    disc_amunt?: SortOrder
    _count?: referral_couponsCountOrderByAggregateInput
    _avg?: referral_couponsAvgOrderByAggregateInput
    _max?: referral_couponsMaxOrderByAggregateInput
    _min?: referral_couponsMinOrderByAggregateInput
    _sum?: referral_couponsSumOrderByAggregateInput
  }

  export type referral_couponsScalarWhereWithAggregatesInput = {
    AND?: referral_couponsScalarWhereWithAggregatesInput | referral_couponsScalarWhereWithAggregatesInput[]
    OR?: referral_couponsScalarWhereWithAggregatesInput[]
    NOT?: referral_couponsScalarWhereWithAggregatesInput | referral_couponsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"referral_coupons"> | number
    user_id?: IntWithAggregatesFilter<"referral_coupons"> | number
    code?: StringWithAggregatesFilter<"referral_coupons"> | string
    expires_date?: DateTimeWithAggregatesFilter<"referral_coupons"> | Date | string
    disc_amunt?: IntWithAggregatesFilter<"referral_coupons"> | number
  }

  export type reviewsWhereInput = {
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    id?: IntFilter<"reviews"> | number
    user_id?: IntFilter<"reviews"> | number
    event_id?: IntFilter<"reviews"> | number
    rating?: IntFilter<"reviews"> | number
    comment?: StringFilter<"reviews"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
  }

  export type reviewsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    users?: usersOrderByWithRelationInput
    events?: eventsOrderByWithRelationInput
  }

  export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    user_id?: IntFilter<"reviews"> | number
    event_id?: IntFilter<"reviews"> | number
    rating?: IntFilter<"reviews"> | number
    comment?: StringFilter<"reviews"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
  }, "id">

  export type reviewsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    _count?: reviewsCountOrderByAggregateInput
    _avg?: reviewsAvgOrderByAggregateInput
    _max?: reviewsMaxOrderByAggregateInput
    _min?: reviewsMinOrderByAggregateInput
    _sum?: reviewsSumOrderByAggregateInput
  }

  export type reviewsScalarWhereWithAggregatesInput = {
    AND?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    OR?: reviewsScalarWhereWithAggregatesInput[]
    NOT?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reviews"> | number
    user_id?: IntWithAggregatesFilter<"reviews"> | number
    event_id?: IntWithAggregatesFilter<"reviews"> | number
    rating?: IntWithAggregatesFilter<"reviews"> | number
    comment?: StringWithAggregatesFilter<"reviews"> | string
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    id?: IntFilter<"transactions"> | number
    user_id?: IntFilter<"transactions"> | number
    event_id?: IntFilter<"transactions"> | number
    ticket_id?: IntFilter<"transactions"> | number
    total_price?: IntFilter<"transactions"> | number
    payment_proof?: StringFilter<"transactions"> | string
    expired_date?: DateTimeFilter<"transactions"> | Date | string
    invoice_id?: StringFilter<"transactions"> | string
    status?: EnumStatusFilter<"transactions"> | $Enums.Status
    notifications?: NotificationsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    tickets?: XOR<Transaction_detailScalarRelationFilter, transaction_detailWhereInput>
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_id?: SortOrder
    total_price?: SortOrder
    payment_proof?: SortOrder
    expired_date?: SortOrder
    invoice_id?: SortOrder
    status?: SortOrder
    notifications?: notificationsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    events?: eventsOrderByWithRelationInput
    tickets?: transaction_detailOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    user_id?: IntFilter<"transactions"> | number
    event_id?: IntFilter<"transactions"> | number
    ticket_id?: IntFilter<"transactions"> | number
    total_price?: IntFilter<"transactions"> | number
    payment_proof?: StringFilter<"transactions"> | string
    expired_date?: DateTimeFilter<"transactions"> | Date | string
    invoice_id?: StringFilter<"transactions"> | string
    status?: EnumStatusFilter<"transactions"> | $Enums.Status
    notifications?: NotificationsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    tickets?: XOR<Transaction_detailScalarRelationFilter, transaction_detailWhereInput>
  }, "id">

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_id?: SortOrder
    total_price?: SortOrder
    payment_proof?: SortOrder
    expired_date?: SortOrder
    invoice_id?: SortOrder
    status?: SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transactions"> | number
    user_id?: IntWithAggregatesFilter<"transactions"> | number
    event_id?: IntWithAggregatesFilter<"transactions"> | number
    ticket_id?: IntWithAggregatesFilter<"transactions"> | number
    total_price?: IntWithAggregatesFilter<"transactions"> | number
    payment_proof?: StringWithAggregatesFilter<"transactions"> | string
    expired_date?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    invoice_id?: StringWithAggregatesFilter<"transactions"> | string
    status?: EnumStatusWithAggregatesFilter<"transactions"> | $Enums.Status
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    profile_picture?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    referral_code?: StringNullableFilter<"users"> | string | null
    refered_by?: StringNullableFilter<"users"> | string | null
    points?: IntNullableFilter<"users"> | number | null
    is_verified?: BoolFilter<"users"> | boolean
    role?: EnumRoleFilter<"users"> | $Enums.Role
    attendees?: AttendeesListRelationFilter
    notifications?: NotificationsListRelationFilter
    organizers?: OrganizersListRelationFilter
    points_points_user_idTousers?: XOR<PointsNullableScalarRelationFilter, pointsWhereInput> | null
    referral_coupons?: Referral_couponsListRelationFilter
    reviews?: ReviewsListRelationFilter
    transactions?: TransactionsListRelationFilter
    points_users_pointsTopoints?: XOR<PointsNullableScalarRelationFilter, pointsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    referral_code?: SortOrderInput | SortOrder
    refered_by?: SortOrderInput | SortOrder
    points?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    attendees?: attendeesOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
    organizers?: organizersOrderByRelationAggregateInput
    points_points_user_idTousers?: pointsOrderByWithRelationInput
    referral_coupons?: referral_couponsOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
    transactions?: transactionsOrderByRelationAggregateInput
    points_users_pointsTopoints?: pointsOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    profile_picture?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    referral_code?: StringNullableFilter<"users"> | string | null
    refered_by?: StringNullableFilter<"users"> | string | null
    points?: IntNullableFilter<"users"> | number | null
    is_verified?: BoolFilter<"users"> | boolean
    role?: EnumRoleFilter<"users"> | $Enums.Role
    attendees?: AttendeesListRelationFilter
    notifications?: NotificationsListRelationFilter
    organizers?: OrganizersListRelationFilter
    points_points_user_idTousers?: XOR<PointsNullableScalarRelationFilter, pointsWhereInput> | null
    referral_coupons?: Referral_couponsListRelationFilter
    reviews?: ReviewsListRelationFilter
    transactions?: TransactionsListRelationFilter
    points_users_pointsTopoints?: XOR<PointsNullableScalarRelationFilter, pointsWhereInput> | null
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    referral_code?: SortOrderInput | SortOrder
    refered_by?: SortOrderInput | SortOrder
    points?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    profile_picture?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    referral_code?: StringNullableWithAggregatesFilter<"users"> | string | null
    refered_by?: StringNullableWithAggregatesFilter<"users"> | string | null
    points?: IntNullableWithAggregatesFilter<"users"> | number | null
    is_verified?: BoolWithAggregatesFilter<"users"> | boolean
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
  }

  export type vouchersWhereInput = {
    AND?: vouchersWhereInput | vouchersWhereInput[]
    OR?: vouchersWhereInput[]
    NOT?: vouchersWhereInput | vouchersWhereInput[]
    id?: IntFilter<"vouchers"> | number
    event_id?: IntFilter<"vouchers"> | number
    code?: IntFilter<"vouchers"> | number
    disc_amount?: IntFilter<"vouchers"> | number
    start_date?: DateTimeFilter<"vouchers"> | Date | string
    end_date?: DateTimeFilter<"vouchers"> | Date | string
    quota?: BigIntFilter<"vouchers"> | bigint | number
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
  }

  export type vouchersOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    disc_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    quota?: SortOrder
    events?: eventsOrderByWithRelationInput
  }

  export type vouchersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: vouchersWhereInput | vouchersWhereInput[]
    OR?: vouchersWhereInput[]
    NOT?: vouchersWhereInput | vouchersWhereInput[]
    event_id?: IntFilter<"vouchers"> | number
    code?: IntFilter<"vouchers"> | number
    disc_amount?: IntFilter<"vouchers"> | number
    start_date?: DateTimeFilter<"vouchers"> | Date | string
    end_date?: DateTimeFilter<"vouchers"> | Date | string
    quota?: BigIntFilter<"vouchers"> | bigint | number
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
  }, "id">

  export type vouchersOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    disc_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    quota?: SortOrder
    _count?: vouchersCountOrderByAggregateInput
    _avg?: vouchersAvgOrderByAggregateInput
    _max?: vouchersMaxOrderByAggregateInput
    _min?: vouchersMinOrderByAggregateInput
    _sum?: vouchersSumOrderByAggregateInput
  }

  export type vouchersScalarWhereWithAggregatesInput = {
    AND?: vouchersScalarWhereWithAggregatesInput | vouchersScalarWhereWithAggregatesInput[]
    OR?: vouchersScalarWhereWithAggregatesInput[]
    NOT?: vouchersScalarWhereWithAggregatesInput | vouchersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vouchers"> | number
    event_id?: IntWithAggregatesFilter<"vouchers"> | number
    code?: IntWithAggregatesFilter<"vouchers"> | number
    disc_amount?: IntWithAggregatesFilter<"vouchers"> | number
    start_date?: DateTimeWithAggregatesFilter<"vouchers"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"vouchers"> | Date | string
    quota?: BigIntWithAggregatesFilter<"vouchers"> | bigint | number
  }

  export type ticket_typesWhereInput = {
    AND?: ticket_typesWhereInput | ticket_typesWhereInput[]
    OR?: ticket_typesWhereInput[]
    NOT?: ticket_typesWhereInput | ticket_typesWhereInput[]
    id?: IntFilter<"ticket_types"> | number
    created_at?: DateTimeFilter<"ticket_types"> | Date | string
    event_id?: IntFilter<"ticket_types"> | number
    type_name?: StringFilter<"ticket_types"> | string
    quota?: IntFilter<"ticket_types"> | number
    price?: IntFilter<"ticket_types"> | number
    description?: StringFilter<"ticket_types"> | string
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
  }

  export type ticket_typesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    event_id?: SortOrder
    type_name?: SortOrder
    quota?: SortOrder
    price?: SortOrder
    description?: SortOrder
    events?: eventsOrderByWithRelationInput
  }

  export type ticket_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ticket_typesWhereInput | ticket_typesWhereInput[]
    OR?: ticket_typesWhereInput[]
    NOT?: ticket_typesWhereInput | ticket_typesWhereInput[]
    created_at?: DateTimeFilter<"ticket_types"> | Date | string
    event_id?: IntFilter<"ticket_types"> | number
    type_name?: StringFilter<"ticket_types"> | string
    quota?: IntFilter<"ticket_types"> | number
    price?: IntFilter<"ticket_types"> | number
    description?: StringFilter<"ticket_types"> | string
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
  }, "id">

  export type ticket_typesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    event_id?: SortOrder
    type_name?: SortOrder
    quota?: SortOrder
    price?: SortOrder
    description?: SortOrder
    _count?: ticket_typesCountOrderByAggregateInput
    _avg?: ticket_typesAvgOrderByAggregateInput
    _max?: ticket_typesMaxOrderByAggregateInput
    _min?: ticket_typesMinOrderByAggregateInput
    _sum?: ticket_typesSumOrderByAggregateInput
  }

  export type ticket_typesScalarWhereWithAggregatesInput = {
    AND?: ticket_typesScalarWhereWithAggregatesInput | ticket_typesScalarWhereWithAggregatesInput[]
    OR?: ticket_typesScalarWhereWithAggregatesInput[]
    NOT?: ticket_typesScalarWhereWithAggregatesInput | ticket_typesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ticket_types"> | number
    created_at?: DateTimeWithAggregatesFilter<"ticket_types"> | Date | string
    event_id?: IntWithAggregatesFilter<"ticket_types"> | number
    type_name?: StringWithAggregatesFilter<"ticket_types"> | string
    quota?: IntWithAggregatesFilter<"ticket_types"> | number
    price?: IntWithAggregatesFilter<"ticket_types"> | number
    description?: StringWithAggregatesFilter<"ticket_types"> | string
  }

  export type transaction_detailWhereInput = {
    AND?: transaction_detailWhereInput | transaction_detailWhereInput[]
    OR?: transaction_detailWhereInput[]
    NOT?: transaction_detailWhereInput | transaction_detailWhereInput[]
    id?: IntFilter<"transaction_detail"> | number
    code?: StringFilter<"transaction_detail"> | string
    event_id?: IntFilter<"transaction_detail"> | number
    is_attend?: BoolFilter<"transaction_detail"> | boolean
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type transaction_detailOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    event_id?: SortOrder
    is_attend?: SortOrder
    events?: eventsOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type transaction_detailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: transaction_detailWhereInput | transaction_detailWhereInput[]
    OR?: transaction_detailWhereInput[]
    NOT?: transaction_detailWhereInput | transaction_detailWhereInput[]
    event_id?: IntFilter<"transaction_detail"> | number
    is_attend?: BoolFilter<"transaction_detail"> | boolean
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "id" | "code">

  export type transaction_detailOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    event_id?: SortOrder
    is_attend?: SortOrder
    _count?: transaction_detailCountOrderByAggregateInput
    _avg?: transaction_detailAvgOrderByAggregateInput
    _max?: transaction_detailMaxOrderByAggregateInput
    _min?: transaction_detailMinOrderByAggregateInput
    _sum?: transaction_detailSumOrderByAggregateInput
  }

  export type transaction_detailScalarWhereWithAggregatesInput = {
    AND?: transaction_detailScalarWhereWithAggregatesInput | transaction_detailScalarWhereWithAggregatesInput[]
    OR?: transaction_detailScalarWhereWithAggregatesInput[]
    NOT?: transaction_detailScalarWhereWithAggregatesInput | transaction_detailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaction_detail"> | number
    code?: StringWithAggregatesFilter<"transaction_detail"> | string
    event_id?: IntWithAggregatesFilter<"transaction_detail"> | number
    is_attend?: BoolWithAggregatesFilter<"transaction_detail"> | boolean
  }

  export type organizersWhereInput = {
    AND?: organizersWhereInput | organizersWhereInput[]
    OR?: organizersWhereInput[]
    NOT?: organizersWhereInput | organizersWhereInput[]
    id?: IntFilter<"organizers"> | number
    created_at?: DateTimeFilter<"organizers"> | Date | string
    organizer_name?: StringFilter<"organizers"> | string
    description?: StringFilter<"organizers"> | string
    profile_img?: StringNullableFilter<"organizers"> | string | null
    user_id?: IntFilter<"organizers"> | number
    events?: EventsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type organizersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    organizer_name?: SortOrder
    description?: SortOrder
    profile_img?: SortOrderInput | SortOrder
    user_id?: SortOrder
    events?: eventsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type organizersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    organizer_name?: string
    AND?: organizersWhereInput | organizersWhereInput[]
    OR?: organizersWhereInput[]
    NOT?: organizersWhereInput | organizersWhereInput[]
    created_at?: DateTimeFilter<"organizers"> | Date | string
    description?: StringFilter<"organizers"> | string
    profile_img?: StringNullableFilter<"organizers"> | string | null
    user_id?: IntFilter<"organizers"> | number
    events?: EventsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "organizer_name">

  export type organizersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    organizer_name?: SortOrder
    description?: SortOrder
    profile_img?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: organizersCountOrderByAggregateInput
    _avg?: organizersAvgOrderByAggregateInput
    _max?: organizersMaxOrderByAggregateInput
    _min?: organizersMinOrderByAggregateInput
    _sum?: organizersSumOrderByAggregateInput
  }

  export type organizersScalarWhereWithAggregatesInput = {
    AND?: organizersScalarWhereWithAggregatesInput | organizersScalarWhereWithAggregatesInput[]
    OR?: organizersScalarWhereWithAggregatesInput[]
    NOT?: organizersScalarWhereWithAggregatesInput | organizersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"organizers"> | number
    created_at?: DateTimeWithAggregatesFilter<"organizers"> | Date | string
    organizer_name?: StringWithAggregatesFilter<"organizers"> | string
    description?: StringWithAggregatesFilter<"organizers"> | string
    profile_img?: StringNullableWithAggregatesFilter<"organizers"> | string | null
    user_id?: IntWithAggregatesFilter<"organizers"> | number
  }

  export type citiesWhereInput = {
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    id?: IntFilter<"cities"> | number
    city?: StringFilter<"cities"> | string
    country?: StringFilter<"cities"> | string
  }

  export type citiesOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
  }

  export type citiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    city?: StringFilter<"cities"> | string
    country?: StringFilter<"cities"> | string
  }, "id">

  export type citiesOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    _count?: citiesCountOrderByAggregateInput
    _avg?: citiesAvgOrderByAggregateInput
    _max?: citiesMaxOrderByAggregateInput
    _min?: citiesMinOrderByAggregateInput
    _sum?: citiesSumOrderByAggregateInput
  }

  export type citiesScalarWhereWithAggregatesInput = {
    AND?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    OR?: citiesScalarWhereWithAggregatesInput[]
    NOT?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cities"> | number
    city?: StringWithAggregatesFilter<"cities"> | string
    country?: StringWithAggregatesFilter<"cities"> | string
  }

  export type pointsWhereInput = {
    AND?: pointsWhereInput | pointsWhereInput[]
    OR?: pointsWhereInput[]
    NOT?: pointsWhereInput | pointsWhereInput[]
    id?: IntFilter<"points"> | number
    created_at?: DateTimeFilter<"points"> | Date | string
    user_id?: IntFilter<"points"> | number
    points_amount?: IntFilter<"points"> | number
    expire_date?: DateTimeNullableFilter<"points"> | Date | string | null
    users_points_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_users_pointsTopoints?: UsersListRelationFilter
  }

  export type pointsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    points_amount?: SortOrder
    expire_date?: SortOrderInput | SortOrder
    users_points_user_idTousers?: usersOrderByWithRelationInput
    users_users_pointsTopoints?: usersOrderByRelationAggregateInput
  }

  export type pointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: pointsWhereInput | pointsWhereInput[]
    OR?: pointsWhereInput[]
    NOT?: pointsWhereInput | pointsWhereInput[]
    created_at?: DateTimeFilter<"points"> | Date | string
    points_amount?: IntFilter<"points"> | number
    expire_date?: DateTimeNullableFilter<"points"> | Date | string | null
    users_points_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_users_pointsTopoints?: UsersListRelationFilter
  }, "id" | "user_id">

  export type pointsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    points_amount?: SortOrder
    expire_date?: SortOrderInput | SortOrder
    _count?: pointsCountOrderByAggregateInput
    _avg?: pointsAvgOrderByAggregateInput
    _max?: pointsMaxOrderByAggregateInput
    _min?: pointsMinOrderByAggregateInput
    _sum?: pointsSumOrderByAggregateInput
  }

  export type pointsScalarWhereWithAggregatesInput = {
    AND?: pointsScalarWhereWithAggregatesInput | pointsScalarWhereWithAggregatesInput[]
    OR?: pointsScalarWhereWithAggregatesInput[]
    NOT?: pointsScalarWhereWithAggregatesInput | pointsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"points"> | number
    created_at?: DateTimeWithAggregatesFilter<"points"> | Date | string
    user_id?: IntWithAggregatesFilter<"points"> | number
    points_amount?: IntWithAggregatesFilter<"points"> | number
    expire_date?: DateTimeNullableWithAggregatesFilter<"points"> | Date | string | null
  }

  export type attendeesCreateInput = {
    ticket_qty: bigint | number
    total_paid: bigint | number
    users: usersCreateNestedOneWithoutAttendeesInput
    events: eventsCreateNestedOneWithoutAttendeesInput
  }

  export type attendeesUncheckedCreateInput = {
    id?: number
    user_id: number
    event_id: number
    ticket_qty: bigint | number
    total_paid: bigint | number
  }

  export type attendeesUpdateInput = {
    ticket_qty?: BigIntFieldUpdateOperationsInput | bigint | number
    total_paid?: BigIntFieldUpdateOperationsInput | bigint | number
    users?: usersUpdateOneRequiredWithoutAttendeesNestedInput
    events?: eventsUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type attendeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    ticket_qty?: BigIntFieldUpdateOperationsInput | bigint | number
    total_paid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type attendeesCreateManyInput = {
    id?: number
    user_id: number
    event_id: number
    ticket_qty: bigint | number
    total_paid: bigint | number
  }

  export type attendeesUpdateManyMutationInput = {
    ticket_qty?: BigIntFieldUpdateOperationsInput | bigint | number
    total_paid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type attendeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    ticket_qty?: BigIntFieldUpdateOperationsInput | bigint | number
    total_paid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type eventsCreateInput = {
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesCreateNestedManyWithoutEventsInput
    organizer: organizersCreateNestedOneWithoutEventsInput
    reviews?: reviewsCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutEventsInput
    transactions?: transactionsCreateNestedManyWithoutEventsInput
    vouchers?: vouchersCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateInput = {
    id?: number
    organizer_id: number
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesUncheckedCreateNestedManyWithoutEventsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesUncheckedCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutEventsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutEventsInput
    vouchers?: vouchersUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsUpdateInput = {
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUpdateManyWithoutEventsNestedInput
    organizer?: organizersUpdateOneRequiredWithoutEventsNestedInput
    reviews?: reviewsUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUncheckedUpdateManyWithoutEventsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUncheckedUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsCreateManyInput = {
    id?: number
    organizer_id: number
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
  }

  export type eventsUpdateManyMutationInput = {
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsCreateInput = {
    message: string
    users: usersCreateNestedOneWithoutNotificationsInput
    transactions: transactionsCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: number
    user_id: number
    transaction_id: number
    message: string
  }

  export type notificationsUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutNotificationsNestedInput
    transactions?: transactionsUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsCreateManyInput = {
    id?: number
    user_id: number
    transaction_id: number
    message: string
  }

  export type notificationsUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type referral_couponsCreateInput = {
    code: string
    expires_date: Date | string
    disc_amunt?: number
    users: usersCreateNestedOneWithoutReferral_couponsInput
  }

  export type referral_couponsUncheckedCreateInput = {
    id?: number
    user_id: number
    code: string
    expires_date: Date | string
    disc_amunt?: number
  }

  export type referral_couponsUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    expires_date?: DateTimeFieldUpdateOperationsInput | Date | string
    disc_amunt?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutReferral_couponsNestedInput
  }

  export type referral_couponsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expires_date?: DateTimeFieldUpdateOperationsInput | Date | string
    disc_amunt?: IntFieldUpdateOperationsInput | number
  }

  export type referral_couponsCreateManyInput = {
    id?: number
    user_id: number
    code: string
    expires_date: Date | string
    disc_amunt?: number
  }

  export type referral_couponsUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    expires_date?: DateTimeFieldUpdateOperationsInput | Date | string
    disc_amunt?: IntFieldUpdateOperationsInput | number
  }

  export type referral_couponsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expires_date?: DateTimeFieldUpdateOperationsInput | Date | string
    disc_amunt?: IntFieldUpdateOperationsInput | number
  }

  export type reviewsCreateInput = {
    rating: number
    comment: string
    users: usersCreateNestedOneWithoutReviewsInput
    events: eventsCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateInput = {
    id?: number
    user_id: number
    event_id: number
    rating: number
    comment: string
  }

  export type reviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutReviewsNestedInput
    events?: eventsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type reviewsCreateManyInput = {
    id?: number
    user_id: number
    event_id: number
    rating: number
    comment: string
  }

  export type reviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type reviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type transactionsCreateInput = {
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
    notifications?: notificationsCreateNestedManyWithoutTransactionsInput
    users: usersCreateNestedOneWithoutTransactionsInput
    events: eventsCreateNestedOneWithoutTransactionsInput
    tickets: transaction_detailCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    id?: number
    user_id: number
    event_id: number
    ticket_id: number
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
    notifications?: notificationsUncheckedCreateNestedManyWithoutTransactionsInput
  }

  export type transactionsUpdateInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notifications?: notificationsUpdateManyWithoutTransactionsNestedInput
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
    events?: eventsUpdateOneRequiredWithoutTransactionsNestedInput
    tickets?: transaction_detailUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notifications?: notificationsUncheckedUpdateManyWithoutTransactionsNestedInput
  }

  export type transactionsCreateManyInput = {
    id?: number
    user_id: number
    event_id: number
    ticket_id: number
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
  }

  export type transactionsUpdateManyMutationInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type usersCreateInput = {
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    organizers?: organizersCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    points_users_pointsTopoints?: pointsCreateNestedOneWithoutUsers_users_pointsTopointsInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    points?: number | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    organizers?: organizersUncheckedCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsUncheckedCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    organizers?: organizersUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    points_users_pointsTopoints?: pointsUpdateOneWithoutUsers_users_pointsTopointsNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    organizers?: organizersUncheckedUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUncheckedUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    points?: number | null
    is_verified?: boolean
    role?: $Enums.Role
  }

  export type usersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type vouchersCreateInput = {
    code: number
    disc_amount: number
    start_date: Date | string
    end_date: Date | string
    quota: bigint | number
    events: eventsCreateNestedOneWithoutVouchersInput
  }

  export type vouchersUncheckedCreateInput = {
    id?: number
    event_id: number
    code: number
    disc_amount: number
    start_date: Date | string
    end_date: Date | string
    quota: bigint | number
  }

  export type vouchersUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    disc_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: BigIntFieldUpdateOperationsInput | bigint | number
    events?: eventsUpdateOneRequiredWithoutVouchersNestedInput
  }

  export type vouchersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    disc_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type vouchersCreateManyInput = {
    id?: number
    event_id: number
    code: number
    disc_amount: number
    start_date: Date | string
    end_date: Date | string
    quota: bigint | number
  }

  export type vouchersUpdateManyMutationInput = {
    code?: IntFieldUpdateOperationsInput | number
    disc_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type vouchersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    disc_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ticket_typesCreateInput = {
    created_at?: Date | string
    type_name: string
    quota: number
    price: number
    description?: string
    events: eventsCreateNestedOneWithoutTicket_typesInput
  }

  export type ticket_typesUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    event_id: number
    type_name: string
    quota: number
    price: number
    description?: string
  }

  export type ticket_typesUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    events?: eventsUpdateOneRequiredWithoutTicket_typesNestedInput
  }

  export type ticket_typesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_id?: IntFieldUpdateOperationsInput | number
    type_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ticket_typesCreateManyInput = {
    id?: number
    created_at?: Date | string
    event_id: number
    type_name: string
    quota: number
    price: number
    description?: string
  }

  export type ticket_typesUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ticket_typesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_id?: IntFieldUpdateOperationsInput | number
    type_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type transaction_detailCreateInput = {
    code: string
    is_attend?: boolean
    events: eventsCreateNestedOneWithoutTransaction_detailInput
    transactions?: transactionsCreateNestedManyWithoutTicketsInput
  }

  export type transaction_detailUncheckedCreateInput = {
    id?: number
    code: string
    event_id: number
    is_attend?: boolean
    transactions?: transactionsUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type transaction_detailUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    is_attend?: BoolFieldUpdateOperationsInput | boolean
    events?: eventsUpdateOneRequiredWithoutTransaction_detailNestedInput
    transactions?: transactionsUpdateManyWithoutTicketsNestedInput
  }

  export type transaction_detailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    event_id?: IntFieldUpdateOperationsInput | number
    is_attend?: BoolFieldUpdateOperationsInput | boolean
    transactions?: transactionsUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type transaction_detailCreateManyInput = {
    id?: number
    code: string
    event_id: number
    is_attend?: boolean
  }

  export type transaction_detailUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    is_attend?: BoolFieldUpdateOperationsInput | boolean
  }

  export type transaction_detailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    event_id?: IntFieldUpdateOperationsInput | number
    is_attend?: BoolFieldUpdateOperationsInput | boolean
  }

  export type organizersCreateInput = {
    created_at?: Date | string
    organizer_name: string
    description: string
    profile_img?: string | null
    events?: eventsCreateNestedManyWithoutOrganizerInput
    users: usersCreateNestedOneWithoutOrganizersInput
  }

  export type organizersUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    organizer_name: string
    description: string
    profile_img?: string | null
    user_id: number
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type organizersUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    users?: usersUpdateOneRequiredWithoutOrganizersNestedInput
  }

  export type organizersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type organizersCreateManyInput = {
    id?: number
    created_at?: Date | string
    organizer_name: string
    description: string
    profile_img?: string | null
    user_id: number
  }

  export type organizersUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type citiesCreateInput = {
    city: string
    country: string
  }

  export type citiesUncheckedCreateInput = {
    id?: number
    city: string
    country: string
  }

  export type citiesUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type citiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type citiesCreateManyInput = {
    id?: number
    city: string
    country: string
  }

  export type citiesUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type citiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type pointsCreateInput = {
    created_at?: Date | string
    points_amount: number
    expire_date?: Date | string | null
    users_points_user_idTousers: usersCreateNestedOneWithoutPoints_points_user_idTousersInput
    users_users_pointsTopoints?: usersCreateNestedManyWithoutPoints_users_pointsTopointsInput
  }

  export type pointsUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    user_id: number
    points_amount: number
    expire_date?: Date | string | null
    users_users_pointsTopoints?: usersUncheckedCreateNestedManyWithoutPoints_users_pointsTopointsInput
  }

  export type pointsUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    points_amount?: IntFieldUpdateOperationsInput | number
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_points_user_idTousers?: usersUpdateOneRequiredWithoutPoints_points_user_idTousersNestedInput
    users_users_pointsTopoints?: usersUpdateManyWithoutPoints_users_pointsTopointsNestedInput
  }

  export type pointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    points_amount?: IntFieldUpdateOperationsInput | number
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_users_pointsTopoints?: usersUncheckedUpdateManyWithoutPoints_users_pointsTopointsNestedInput
  }

  export type pointsCreateManyInput = {
    id?: number
    created_at?: Date | string
    user_id: number
    points_amount: number
    expire_date?: Date | string | null
  }

  export type pointsUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    points_amount?: IntFieldUpdateOperationsInput | number
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    points_amount?: IntFieldUpdateOperationsInput | number
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type EventsScalarRelationFilter = {
    is?: eventsWhereInput
    isNot?: eventsWhereInput
  }

  export type attendeesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_qty?: SortOrder
    total_paid?: SortOrder
  }

  export type attendeesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_qty?: SortOrder
    total_paid?: SortOrder
  }

  export type attendeesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_qty?: SortOrder
    total_paid?: SortOrder
  }

  export type attendeesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_qty?: SortOrder
    total_paid?: SortOrder
  }

  export type attendeesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_qty?: SortOrder
    total_paid?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type AttendeesListRelationFilter = {
    every?: attendeesWhereInput
    some?: attendeesWhereInput
    none?: attendeesWhereInput
  }

  export type OrganizersScalarRelationFilter = {
    is?: organizersWhereInput
    isNot?: organizersWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: reviewsWhereInput
    some?: reviewsWhereInput
    none?: reviewsWhereInput
  }

  export type Ticket_typesListRelationFilter = {
    every?: ticket_typesWhereInput
    some?: ticket_typesWhereInput
    none?: ticket_typesWhereInput
  }

  export type Transaction_detailListRelationFilter = {
    every?: transaction_detailWhereInput
    some?: transaction_detailWhereInput
    none?: transaction_detailWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type VouchersListRelationFilter = {
    every?: vouchersWhereInput
    some?: vouchersWhereInput
    none?: vouchersWhereInput
  }

  export type attendeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ticket_typesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transaction_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vouchersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    event_picture?: SortOrder
    title?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    event_picture?: SortOrder
    title?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    event_picture?: SortOrder
    title?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
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

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type TransactionsScalarRelationFilter = {
    is?: transactionsWhereInput
    isNot?: transactionsWhereInput
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    transaction_id?: SortOrder
    message?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    transaction_id?: SortOrder
    message?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    transaction_id?: SortOrder
    message?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type referral_couponsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    expires_date?: SortOrder
    disc_amunt?: SortOrder
  }

  export type referral_couponsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    disc_amunt?: SortOrder
  }

  export type referral_couponsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    expires_date?: SortOrder
    disc_amunt?: SortOrder
  }

  export type referral_couponsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    expires_date?: SortOrder
    disc_amunt?: SortOrder
  }

  export type referral_couponsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    disc_amunt?: SortOrder
  }

  export type reviewsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type reviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
  }

  export type reviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type reviewsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type reviewsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type Transaction_detailScalarRelationFilter = {
    is?: transaction_detailWhereInput
    isNot?: transaction_detailWhereInput
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_id?: SortOrder
    total_price?: SortOrder
    payment_proof?: SortOrder
    expired_date?: SortOrder
    invoice_id?: SortOrder
    status?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_id?: SortOrder
    total_price?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_id?: SortOrder
    total_price?: SortOrder
    payment_proof?: SortOrder
    expired_date?: SortOrder
    invoice_id?: SortOrder
    status?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_id?: SortOrder
    total_price?: SortOrder
    payment_proof?: SortOrder
    expired_date?: SortOrder
    invoice_id?: SortOrder
    status?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_id?: SortOrder
    total_price?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type OrganizersListRelationFilter = {
    every?: organizersWhereInput
    some?: organizersWhereInput
    none?: organizersWhereInput
  }

  export type PointsNullableScalarRelationFilter = {
    is?: pointsWhereInput | null
    isNot?: pointsWhereInput | null
  }

  export type Referral_couponsListRelationFilter = {
    every?: referral_couponsWhereInput
    some?: referral_couponsWhereInput
    none?: referral_couponsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type organizersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type referral_couponsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    profile_picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referral_code?: SortOrder
    refered_by?: SortOrder
    points?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    profile_picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referral_code?: SortOrder
    refered_by?: SortOrder
    points?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    profile_picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referral_code?: SortOrder
    refered_by?: SortOrder
    points?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type vouchersCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    disc_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    quota?: SortOrder
  }

  export type vouchersAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    disc_amount?: SortOrder
    quota?: SortOrder
  }

  export type vouchersMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    disc_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    quota?: SortOrder
  }

  export type vouchersMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    disc_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    quota?: SortOrder
  }

  export type vouchersSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    disc_amount?: SortOrder
    quota?: SortOrder
  }

  export type ticket_typesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    event_id?: SortOrder
    type_name?: SortOrder
    quota?: SortOrder
    price?: SortOrder
    description?: SortOrder
  }

  export type ticket_typesAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    quota?: SortOrder
    price?: SortOrder
  }

  export type ticket_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    event_id?: SortOrder
    type_name?: SortOrder
    quota?: SortOrder
    price?: SortOrder
    description?: SortOrder
  }

  export type ticket_typesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    event_id?: SortOrder
    type_name?: SortOrder
    quota?: SortOrder
    price?: SortOrder
    description?: SortOrder
  }

  export type ticket_typesSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    quota?: SortOrder
    price?: SortOrder
  }

  export type transaction_detailCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    event_id?: SortOrder
    is_attend?: SortOrder
  }

  export type transaction_detailAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type transaction_detailMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    event_id?: SortOrder
    is_attend?: SortOrder
  }

  export type transaction_detailMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    event_id?: SortOrder
    is_attend?: SortOrder
  }

  export type transaction_detailSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type EventsListRelationFilter = {
    every?: eventsWhereInput
    some?: eventsWhereInput
    none?: eventsWhereInput
  }

  export type eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    organizer_name?: SortOrder
    description?: SortOrder
    profile_img?: SortOrder
    user_id?: SortOrder
  }

  export type organizersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type organizersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    organizer_name?: SortOrder
    description?: SortOrder
    profile_img?: SortOrder
    user_id?: SortOrder
  }

  export type organizersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    organizer_name?: SortOrder
    description?: SortOrder
    profile_img?: SortOrder
    user_id?: SortOrder
  }

  export type organizersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type citiesCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
  }

  export type citiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type citiesMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
  }

  export type citiesMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
  }

  export type citiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pointsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    points_amount?: SortOrder
    expire_date?: SortOrder
  }

  export type pointsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points_amount?: SortOrder
  }

  export type pointsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    points_amount?: SortOrder
    expire_date?: SortOrder
  }

  export type pointsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    points_amount?: SortOrder
    expire_date?: SortOrder
  }

  export type pointsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points_amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<usersCreateWithoutAttendeesInput, usersUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAttendeesInput
    connect?: usersWhereUniqueInput
  }

  export type eventsCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<eventsCreateWithoutAttendeesInput, eventsUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutAttendeesInput
    connect?: eventsWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type usersUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<usersCreateWithoutAttendeesInput, usersUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAttendeesInput
    upsert?: usersUpsertWithoutAttendeesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAttendeesInput, usersUpdateWithoutAttendeesInput>, usersUncheckedUpdateWithoutAttendeesInput>
  }

  export type eventsUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<eventsCreateWithoutAttendeesInput, eventsUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutAttendeesInput
    upsert?: eventsUpsertWithoutAttendeesInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutAttendeesInput, eventsUpdateWithoutAttendeesInput>, eventsUncheckedUpdateWithoutAttendeesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type attendeesCreateNestedManyWithoutEventsInput = {
    create?: XOR<attendeesCreateWithoutEventsInput, attendeesUncheckedCreateWithoutEventsInput> | attendeesCreateWithoutEventsInput[] | attendeesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: attendeesCreateOrConnectWithoutEventsInput | attendeesCreateOrConnectWithoutEventsInput[]
    createMany?: attendeesCreateManyEventsInputEnvelope
    connect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
  }

  export type organizersCreateNestedOneWithoutEventsInput = {
    create?: XOR<organizersCreateWithoutEventsInput, organizersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: organizersCreateOrConnectWithoutEventsInput
    connect?: organizersWhereUniqueInput
  }

  export type reviewsCreateNestedManyWithoutEventsInput = {
    create?: XOR<reviewsCreateWithoutEventsInput, reviewsUncheckedCreateWithoutEventsInput> | reviewsCreateWithoutEventsInput[] | reviewsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutEventsInput | reviewsCreateOrConnectWithoutEventsInput[]
    createMany?: reviewsCreateManyEventsInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type ticket_typesCreateNestedManyWithoutEventsInput = {
    create?: XOR<ticket_typesCreateWithoutEventsInput, ticket_typesUncheckedCreateWithoutEventsInput> | ticket_typesCreateWithoutEventsInput[] | ticket_typesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ticket_typesCreateOrConnectWithoutEventsInput | ticket_typesCreateOrConnectWithoutEventsInput[]
    createMany?: ticket_typesCreateManyEventsInputEnvelope
    connect?: ticket_typesWhereUniqueInput | ticket_typesWhereUniqueInput[]
  }

  export type transaction_detailCreateNestedManyWithoutEventsInput = {
    create?: XOR<transaction_detailCreateWithoutEventsInput, transaction_detailUncheckedCreateWithoutEventsInput> | transaction_detailCreateWithoutEventsInput[] | transaction_detailUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutEventsInput | transaction_detailCreateOrConnectWithoutEventsInput[]
    createMany?: transaction_detailCreateManyEventsInputEnvelope
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
  }

  export type transactionsCreateNestedManyWithoutEventsInput = {
    create?: XOR<transactionsCreateWithoutEventsInput, transactionsUncheckedCreateWithoutEventsInput> | transactionsCreateWithoutEventsInput[] | transactionsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutEventsInput | transactionsCreateOrConnectWithoutEventsInput[]
    createMany?: transactionsCreateManyEventsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type vouchersCreateNestedManyWithoutEventsInput = {
    create?: XOR<vouchersCreateWithoutEventsInput, vouchersUncheckedCreateWithoutEventsInput> | vouchersCreateWithoutEventsInput[] | vouchersUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutEventsInput | vouchersCreateOrConnectWithoutEventsInput[]
    createMany?: vouchersCreateManyEventsInputEnvelope
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
  }

  export type attendeesUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<attendeesCreateWithoutEventsInput, attendeesUncheckedCreateWithoutEventsInput> | attendeesCreateWithoutEventsInput[] | attendeesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: attendeesCreateOrConnectWithoutEventsInput | attendeesCreateOrConnectWithoutEventsInput[]
    createMany?: attendeesCreateManyEventsInputEnvelope
    connect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<reviewsCreateWithoutEventsInput, reviewsUncheckedCreateWithoutEventsInput> | reviewsCreateWithoutEventsInput[] | reviewsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutEventsInput | reviewsCreateOrConnectWithoutEventsInput[]
    createMany?: reviewsCreateManyEventsInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type ticket_typesUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<ticket_typesCreateWithoutEventsInput, ticket_typesUncheckedCreateWithoutEventsInput> | ticket_typesCreateWithoutEventsInput[] | ticket_typesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ticket_typesCreateOrConnectWithoutEventsInput | ticket_typesCreateOrConnectWithoutEventsInput[]
    createMany?: ticket_typesCreateManyEventsInputEnvelope
    connect?: ticket_typesWhereUniqueInput | ticket_typesWhereUniqueInput[]
  }

  export type transaction_detailUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<transaction_detailCreateWithoutEventsInput, transaction_detailUncheckedCreateWithoutEventsInput> | transaction_detailCreateWithoutEventsInput[] | transaction_detailUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutEventsInput | transaction_detailCreateOrConnectWithoutEventsInput[]
    createMany?: transaction_detailCreateManyEventsInputEnvelope
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<transactionsCreateWithoutEventsInput, transactionsUncheckedCreateWithoutEventsInput> | transactionsCreateWithoutEventsInput[] | transactionsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutEventsInput | transactionsCreateOrConnectWithoutEventsInput[]
    createMany?: transactionsCreateManyEventsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type vouchersUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<vouchersCreateWithoutEventsInput, vouchersUncheckedCreateWithoutEventsInput> | vouchersCreateWithoutEventsInput[] | vouchersUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutEventsInput | vouchersCreateOrConnectWithoutEventsInput[]
    createMany?: vouchersCreateManyEventsInputEnvelope
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type attendeesUpdateManyWithoutEventsNestedInput = {
    create?: XOR<attendeesCreateWithoutEventsInput, attendeesUncheckedCreateWithoutEventsInput> | attendeesCreateWithoutEventsInput[] | attendeesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: attendeesCreateOrConnectWithoutEventsInput | attendeesCreateOrConnectWithoutEventsInput[]
    upsert?: attendeesUpsertWithWhereUniqueWithoutEventsInput | attendeesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: attendeesCreateManyEventsInputEnvelope
    set?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    disconnect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    delete?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    connect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    update?: attendeesUpdateWithWhereUniqueWithoutEventsInput | attendeesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: attendeesUpdateManyWithWhereWithoutEventsInput | attendeesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: attendeesScalarWhereInput | attendeesScalarWhereInput[]
  }

  export type organizersUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<organizersCreateWithoutEventsInput, organizersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: organizersCreateOrConnectWithoutEventsInput
    upsert?: organizersUpsertWithoutEventsInput
    connect?: organizersWhereUniqueInput
    update?: XOR<XOR<organizersUpdateToOneWithWhereWithoutEventsInput, organizersUpdateWithoutEventsInput>, organizersUncheckedUpdateWithoutEventsInput>
  }

  export type reviewsUpdateManyWithoutEventsNestedInput = {
    create?: XOR<reviewsCreateWithoutEventsInput, reviewsUncheckedCreateWithoutEventsInput> | reviewsCreateWithoutEventsInput[] | reviewsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutEventsInput | reviewsCreateOrConnectWithoutEventsInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutEventsInput | reviewsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: reviewsCreateManyEventsInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutEventsInput | reviewsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutEventsInput | reviewsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type ticket_typesUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ticket_typesCreateWithoutEventsInput, ticket_typesUncheckedCreateWithoutEventsInput> | ticket_typesCreateWithoutEventsInput[] | ticket_typesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ticket_typesCreateOrConnectWithoutEventsInput | ticket_typesCreateOrConnectWithoutEventsInput[]
    upsert?: ticket_typesUpsertWithWhereUniqueWithoutEventsInput | ticket_typesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: ticket_typesCreateManyEventsInputEnvelope
    set?: ticket_typesWhereUniqueInput | ticket_typesWhereUniqueInput[]
    disconnect?: ticket_typesWhereUniqueInput | ticket_typesWhereUniqueInput[]
    delete?: ticket_typesWhereUniqueInput | ticket_typesWhereUniqueInput[]
    connect?: ticket_typesWhereUniqueInput | ticket_typesWhereUniqueInput[]
    update?: ticket_typesUpdateWithWhereUniqueWithoutEventsInput | ticket_typesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ticket_typesUpdateManyWithWhereWithoutEventsInput | ticket_typesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ticket_typesScalarWhereInput | ticket_typesScalarWhereInput[]
  }

  export type transaction_detailUpdateManyWithoutEventsNestedInput = {
    create?: XOR<transaction_detailCreateWithoutEventsInput, transaction_detailUncheckedCreateWithoutEventsInput> | transaction_detailCreateWithoutEventsInput[] | transaction_detailUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutEventsInput | transaction_detailCreateOrConnectWithoutEventsInput[]
    upsert?: transaction_detailUpsertWithWhereUniqueWithoutEventsInput | transaction_detailUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: transaction_detailCreateManyEventsInputEnvelope
    set?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    disconnect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    delete?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    update?: transaction_detailUpdateWithWhereUniqueWithoutEventsInput | transaction_detailUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: transaction_detailUpdateManyWithWhereWithoutEventsInput | transaction_detailUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
  }

  export type transactionsUpdateManyWithoutEventsNestedInput = {
    create?: XOR<transactionsCreateWithoutEventsInput, transactionsUncheckedCreateWithoutEventsInput> | transactionsCreateWithoutEventsInput[] | transactionsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutEventsInput | transactionsCreateOrConnectWithoutEventsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutEventsInput | transactionsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: transactionsCreateManyEventsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutEventsInput | transactionsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutEventsInput | transactionsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type vouchersUpdateManyWithoutEventsNestedInput = {
    create?: XOR<vouchersCreateWithoutEventsInput, vouchersUncheckedCreateWithoutEventsInput> | vouchersCreateWithoutEventsInput[] | vouchersUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutEventsInput | vouchersCreateOrConnectWithoutEventsInput[]
    upsert?: vouchersUpsertWithWhereUniqueWithoutEventsInput | vouchersUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: vouchersCreateManyEventsInputEnvelope
    set?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    disconnect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    delete?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    update?: vouchersUpdateWithWhereUniqueWithoutEventsInput | vouchersUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: vouchersUpdateManyWithWhereWithoutEventsInput | vouchersUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: vouchersScalarWhereInput | vouchersScalarWhereInput[]
  }

  export type attendeesUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<attendeesCreateWithoutEventsInput, attendeesUncheckedCreateWithoutEventsInput> | attendeesCreateWithoutEventsInput[] | attendeesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: attendeesCreateOrConnectWithoutEventsInput | attendeesCreateOrConnectWithoutEventsInput[]
    upsert?: attendeesUpsertWithWhereUniqueWithoutEventsInput | attendeesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: attendeesCreateManyEventsInputEnvelope
    set?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    disconnect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    delete?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    connect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    update?: attendeesUpdateWithWhereUniqueWithoutEventsInput | attendeesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: attendeesUpdateManyWithWhereWithoutEventsInput | attendeesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: attendeesScalarWhereInput | attendeesScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<reviewsCreateWithoutEventsInput, reviewsUncheckedCreateWithoutEventsInput> | reviewsCreateWithoutEventsInput[] | reviewsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutEventsInput | reviewsCreateOrConnectWithoutEventsInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutEventsInput | reviewsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: reviewsCreateManyEventsInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutEventsInput | reviewsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutEventsInput | reviewsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type ticket_typesUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ticket_typesCreateWithoutEventsInput, ticket_typesUncheckedCreateWithoutEventsInput> | ticket_typesCreateWithoutEventsInput[] | ticket_typesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ticket_typesCreateOrConnectWithoutEventsInput | ticket_typesCreateOrConnectWithoutEventsInput[]
    upsert?: ticket_typesUpsertWithWhereUniqueWithoutEventsInput | ticket_typesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: ticket_typesCreateManyEventsInputEnvelope
    set?: ticket_typesWhereUniqueInput | ticket_typesWhereUniqueInput[]
    disconnect?: ticket_typesWhereUniqueInput | ticket_typesWhereUniqueInput[]
    delete?: ticket_typesWhereUniqueInput | ticket_typesWhereUniqueInput[]
    connect?: ticket_typesWhereUniqueInput | ticket_typesWhereUniqueInput[]
    update?: ticket_typesUpdateWithWhereUniqueWithoutEventsInput | ticket_typesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ticket_typesUpdateManyWithWhereWithoutEventsInput | ticket_typesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ticket_typesScalarWhereInput | ticket_typesScalarWhereInput[]
  }

  export type transaction_detailUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<transaction_detailCreateWithoutEventsInput, transaction_detailUncheckedCreateWithoutEventsInput> | transaction_detailCreateWithoutEventsInput[] | transaction_detailUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutEventsInput | transaction_detailCreateOrConnectWithoutEventsInput[]
    upsert?: transaction_detailUpsertWithWhereUniqueWithoutEventsInput | transaction_detailUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: transaction_detailCreateManyEventsInputEnvelope
    set?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    disconnect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    delete?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    update?: transaction_detailUpdateWithWhereUniqueWithoutEventsInput | transaction_detailUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: transaction_detailUpdateManyWithWhereWithoutEventsInput | transaction_detailUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<transactionsCreateWithoutEventsInput, transactionsUncheckedCreateWithoutEventsInput> | transactionsCreateWithoutEventsInput[] | transactionsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutEventsInput | transactionsCreateOrConnectWithoutEventsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutEventsInput | transactionsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: transactionsCreateManyEventsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutEventsInput | transactionsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutEventsInput | transactionsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type vouchersUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<vouchersCreateWithoutEventsInput, vouchersUncheckedCreateWithoutEventsInput> | vouchersCreateWithoutEventsInput[] | vouchersUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutEventsInput | vouchersCreateOrConnectWithoutEventsInput[]
    upsert?: vouchersUpsertWithWhereUniqueWithoutEventsInput | vouchersUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: vouchersCreateManyEventsInputEnvelope
    set?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    disconnect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    delete?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    update?: vouchersUpdateWithWhereUniqueWithoutEventsInput | vouchersUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: vouchersUpdateManyWithWhereWithoutEventsInput | vouchersUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: vouchersScalarWhereInput | vouchersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    connect?: usersWhereUniqueInput
  }

  export type transactionsCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<transactionsCreateWithoutNotificationsInput, transactionsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: transactionsCreateOrConnectWithoutNotificationsInput
    connect?: transactionsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    upsert?: usersUpsertWithoutNotificationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotificationsInput, usersUpdateWithoutNotificationsInput>, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type transactionsUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<transactionsCreateWithoutNotificationsInput, transactionsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: transactionsCreateOrConnectWithoutNotificationsInput
    upsert?: transactionsUpsertWithoutNotificationsInput
    connect?: transactionsWhereUniqueInput
    update?: XOR<XOR<transactionsUpdateToOneWithWhereWithoutNotificationsInput, transactionsUpdateWithoutNotificationsInput>, transactionsUncheckedUpdateWithoutNotificationsInput>
  }

  export type usersCreateNestedOneWithoutReferral_couponsInput = {
    create?: XOR<usersCreateWithoutReferral_couponsInput, usersUncheckedCreateWithoutReferral_couponsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReferral_couponsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutReferral_couponsNestedInput = {
    create?: XOR<usersCreateWithoutReferral_couponsInput, usersUncheckedCreateWithoutReferral_couponsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReferral_couponsInput
    upsert?: usersUpsertWithoutReferral_couponsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReferral_couponsInput, usersUpdateWithoutReferral_couponsInput>, usersUncheckedUpdateWithoutReferral_couponsInput>
  }

  export type usersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    connect?: usersWhereUniqueInput
  }

  export type eventsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<eventsCreateWithoutReviewsInput, eventsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutReviewsInput
    connect?: eventsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    upsert?: usersUpsertWithoutReviewsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewsInput, usersUpdateWithoutReviewsInput>, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type eventsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<eventsCreateWithoutReviewsInput, eventsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutReviewsInput
    upsert?: eventsUpsertWithoutReviewsInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutReviewsInput, eventsUpdateWithoutReviewsInput>, eventsUncheckedUpdateWithoutReviewsInput>
  }

  export type notificationsCreateNestedManyWithoutTransactionsInput = {
    create?: XOR<notificationsCreateWithoutTransactionsInput, notificationsUncheckedCreateWithoutTransactionsInput> | notificationsCreateWithoutTransactionsInput[] | notificationsUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutTransactionsInput | notificationsCreateOrConnectWithoutTransactionsInput[]
    createMany?: notificationsCreateManyTransactionsInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    connect?: usersWhereUniqueInput
  }

  export type eventsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<eventsCreateWithoutTransactionsInput, eventsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutTransactionsInput
    connect?: eventsWhereUniqueInput
  }

  export type transaction_detailCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<transaction_detailCreateWithoutTransactionsInput, transaction_detailUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTransactionsInput
    connect?: transaction_detailWhereUniqueInput
  }

  export type notificationsUncheckedCreateNestedManyWithoutTransactionsInput = {
    create?: XOR<notificationsCreateWithoutTransactionsInput, notificationsUncheckedCreateWithoutTransactionsInput> | notificationsCreateWithoutTransactionsInput[] | notificationsUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutTransactionsInput | notificationsCreateOrConnectWithoutTransactionsInput[]
    createMany?: notificationsCreateManyTransactionsInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type notificationsUpdateManyWithoutTransactionsNestedInput = {
    create?: XOR<notificationsCreateWithoutTransactionsInput, notificationsUncheckedCreateWithoutTransactionsInput> | notificationsCreateWithoutTransactionsInput[] | notificationsUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutTransactionsInput | notificationsCreateOrConnectWithoutTransactionsInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutTransactionsInput | notificationsUpsertWithWhereUniqueWithoutTransactionsInput[]
    createMany?: notificationsCreateManyTransactionsInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutTransactionsInput | notificationsUpdateWithWhereUniqueWithoutTransactionsInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutTransactionsInput | notificationsUpdateManyWithWhereWithoutTransactionsInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    upsert?: usersUpsertWithoutTransactionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransactionsInput, usersUpdateWithoutTransactionsInput>, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type eventsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<eventsCreateWithoutTransactionsInput, eventsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutTransactionsInput
    upsert?: eventsUpsertWithoutTransactionsInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutTransactionsInput, eventsUpdateWithoutTransactionsInput>, eventsUncheckedUpdateWithoutTransactionsInput>
  }

  export type transaction_detailUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<transaction_detailCreateWithoutTransactionsInput, transaction_detailUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTransactionsInput
    upsert?: transaction_detailUpsertWithoutTransactionsInput
    connect?: transaction_detailWhereUniqueInput
    update?: XOR<XOR<transaction_detailUpdateToOneWithWhereWithoutTransactionsInput, transaction_detailUpdateWithoutTransactionsInput>, transaction_detailUncheckedUpdateWithoutTransactionsInput>
  }

  export type notificationsUncheckedUpdateManyWithoutTransactionsNestedInput = {
    create?: XOR<notificationsCreateWithoutTransactionsInput, notificationsUncheckedCreateWithoutTransactionsInput> | notificationsCreateWithoutTransactionsInput[] | notificationsUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutTransactionsInput | notificationsCreateOrConnectWithoutTransactionsInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutTransactionsInput | notificationsUpsertWithWhereUniqueWithoutTransactionsInput[]
    createMany?: notificationsCreateManyTransactionsInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutTransactionsInput | notificationsUpdateWithWhereUniqueWithoutTransactionsInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutTransactionsInput | notificationsUpdateManyWithWhereWithoutTransactionsInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type attendeesCreateNestedManyWithoutUsersInput = {
    create?: XOR<attendeesCreateWithoutUsersInput, attendeesUncheckedCreateWithoutUsersInput> | attendeesCreateWithoutUsersInput[] | attendeesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendeesCreateOrConnectWithoutUsersInput | attendeesCreateOrConnectWithoutUsersInput[]
    createMany?: attendeesCreateManyUsersInputEnvelope
    connect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type organizersCreateNestedManyWithoutUsersInput = {
    create?: XOR<organizersCreateWithoutUsersInput, organizersUncheckedCreateWithoutUsersInput> | organizersCreateWithoutUsersInput[] | organizersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: organizersCreateOrConnectWithoutUsersInput | organizersCreateOrConnectWithoutUsersInput[]
    createMany?: organizersCreateManyUsersInputEnvelope
    connect?: organizersWhereUniqueInput | organizersWhereUniqueInput[]
  }

  export type pointsCreateNestedOneWithoutUsers_points_user_idTousersInput = {
    create?: XOR<pointsCreateWithoutUsers_points_user_idTousersInput, pointsUncheckedCreateWithoutUsers_points_user_idTousersInput>
    connectOrCreate?: pointsCreateOrConnectWithoutUsers_points_user_idTousersInput
    connect?: pointsWhereUniqueInput
  }

  export type referral_couponsCreateNestedManyWithoutUsersInput = {
    create?: XOR<referral_couponsCreateWithoutUsersInput, referral_couponsUncheckedCreateWithoutUsersInput> | referral_couponsCreateWithoutUsersInput[] | referral_couponsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: referral_couponsCreateOrConnectWithoutUsersInput | referral_couponsCreateOrConnectWithoutUsersInput[]
    createMany?: referral_couponsCreateManyUsersInputEnvelope
    connect?: referral_couponsWhereUniqueInput | referral_couponsWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type transactionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type pointsCreateNestedOneWithoutUsers_users_pointsTopointsInput = {
    create?: XOR<pointsCreateWithoutUsers_users_pointsTopointsInput, pointsUncheckedCreateWithoutUsers_users_pointsTopointsInput>
    connectOrCreate?: pointsCreateOrConnectWithoutUsers_users_pointsTopointsInput
    connect?: pointsWhereUniqueInput
  }

  export type attendeesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<attendeesCreateWithoutUsersInput, attendeesUncheckedCreateWithoutUsersInput> | attendeesCreateWithoutUsersInput[] | attendeesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendeesCreateOrConnectWithoutUsersInput | attendeesCreateOrConnectWithoutUsersInput[]
    createMany?: attendeesCreateManyUsersInputEnvelope
    connect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type organizersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<organizersCreateWithoutUsersInput, organizersUncheckedCreateWithoutUsersInput> | organizersCreateWithoutUsersInput[] | organizersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: organizersCreateOrConnectWithoutUsersInput | organizersCreateOrConnectWithoutUsersInput[]
    createMany?: organizersCreateManyUsersInputEnvelope
    connect?: organizersWhereUniqueInput | organizersWhereUniqueInput[]
  }

  export type pointsUncheckedCreateNestedOneWithoutUsers_points_user_idTousersInput = {
    create?: XOR<pointsCreateWithoutUsers_points_user_idTousersInput, pointsUncheckedCreateWithoutUsers_points_user_idTousersInput>
    connectOrCreate?: pointsCreateOrConnectWithoutUsers_points_user_idTousersInput
    connect?: pointsWhereUniqueInput
  }

  export type referral_couponsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<referral_couponsCreateWithoutUsersInput, referral_couponsUncheckedCreateWithoutUsersInput> | referral_couponsCreateWithoutUsersInput[] | referral_couponsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: referral_couponsCreateOrConnectWithoutUsersInput | referral_couponsCreateOrConnectWithoutUsersInput[]
    createMany?: referral_couponsCreateManyUsersInputEnvelope
    connect?: referral_couponsWhereUniqueInput | referral_couponsWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type attendeesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<attendeesCreateWithoutUsersInput, attendeesUncheckedCreateWithoutUsersInput> | attendeesCreateWithoutUsersInput[] | attendeesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendeesCreateOrConnectWithoutUsersInput | attendeesCreateOrConnectWithoutUsersInput[]
    upsert?: attendeesUpsertWithWhereUniqueWithoutUsersInput | attendeesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: attendeesCreateManyUsersInputEnvelope
    set?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    disconnect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    delete?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    connect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    update?: attendeesUpdateWithWhereUniqueWithoutUsersInput | attendeesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: attendeesUpdateManyWithWhereWithoutUsersInput | attendeesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: attendeesScalarWhereInput | attendeesScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsersInput | notificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsersInput | notificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsersInput | notificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type organizersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<organizersCreateWithoutUsersInput, organizersUncheckedCreateWithoutUsersInput> | organizersCreateWithoutUsersInput[] | organizersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: organizersCreateOrConnectWithoutUsersInput | organizersCreateOrConnectWithoutUsersInput[]
    upsert?: organizersUpsertWithWhereUniqueWithoutUsersInput | organizersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: organizersCreateManyUsersInputEnvelope
    set?: organizersWhereUniqueInput | organizersWhereUniqueInput[]
    disconnect?: organizersWhereUniqueInput | organizersWhereUniqueInput[]
    delete?: organizersWhereUniqueInput | organizersWhereUniqueInput[]
    connect?: organizersWhereUniqueInput | organizersWhereUniqueInput[]
    update?: organizersUpdateWithWhereUniqueWithoutUsersInput | organizersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: organizersUpdateManyWithWhereWithoutUsersInput | organizersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: organizersScalarWhereInput | organizersScalarWhereInput[]
  }

  export type pointsUpdateOneWithoutUsers_points_user_idTousersNestedInput = {
    create?: XOR<pointsCreateWithoutUsers_points_user_idTousersInput, pointsUncheckedCreateWithoutUsers_points_user_idTousersInput>
    connectOrCreate?: pointsCreateOrConnectWithoutUsers_points_user_idTousersInput
    upsert?: pointsUpsertWithoutUsers_points_user_idTousersInput
    disconnect?: pointsWhereInput | boolean
    delete?: pointsWhereInput | boolean
    connect?: pointsWhereUniqueInput
    update?: XOR<XOR<pointsUpdateToOneWithWhereWithoutUsers_points_user_idTousersInput, pointsUpdateWithoutUsers_points_user_idTousersInput>, pointsUncheckedUpdateWithoutUsers_points_user_idTousersInput>
  }

  export type referral_couponsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<referral_couponsCreateWithoutUsersInput, referral_couponsUncheckedCreateWithoutUsersInput> | referral_couponsCreateWithoutUsersInput[] | referral_couponsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: referral_couponsCreateOrConnectWithoutUsersInput | referral_couponsCreateOrConnectWithoutUsersInput[]
    upsert?: referral_couponsUpsertWithWhereUniqueWithoutUsersInput | referral_couponsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: referral_couponsCreateManyUsersInputEnvelope
    set?: referral_couponsWhereUniqueInput | referral_couponsWhereUniqueInput[]
    disconnect?: referral_couponsWhereUniqueInput | referral_couponsWhereUniqueInput[]
    delete?: referral_couponsWhereUniqueInput | referral_couponsWhereUniqueInput[]
    connect?: referral_couponsWhereUniqueInput | referral_couponsWhereUniqueInput[]
    update?: referral_couponsUpdateWithWhereUniqueWithoutUsersInput | referral_couponsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: referral_couponsUpdateManyWithWhereWithoutUsersInput | referral_couponsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: referral_couponsScalarWhereInput | referral_couponsScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUsersInput | reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUsersInput | reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUsersInput | reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type transactionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutUsersInput | transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutUsersInput | transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutUsersInput | transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type pointsUpdateOneWithoutUsers_users_pointsTopointsNestedInput = {
    create?: XOR<pointsCreateWithoutUsers_users_pointsTopointsInput, pointsUncheckedCreateWithoutUsers_users_pointsTopointsInput>
    connectOrCreate?: pointsCreateOrConnectWithoutUsers_users_pointsTopointsInput
    upsert?: pointsUpsertWithoutUsers_users_pointsTopointsInput
    disconnect?: pointsWhereInput | boolean
    delete?: pointsWhereInput | boolean
    connect?: pointsWhereUniqueInput
    update?: XOR<XOR<pointsUpdateToOneWithWhereWithoutUsers_users_pointsTopointsInput, pointsUpdateWithoutUsers_users_pointsTopointsInput>, pointsUncheckedUpdateWithoutUsers_users_pointsTopointsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type attendeesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<attendeesCreateWithoutUsersInput, attendeesUncheckedCreateWithoutUsersInput> | attendeesCreateWithoutUsersInput[] | attendeesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendeesCreateOrConnectWithoutUsersInput | attendeesCreateOrConnectWithoutUsersInput[]
    upsert?: attendeesUpsertWithWhereUniqueWithoutUsersInput | attendeesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: attendeesCreateManyUsersInputEnvelope
    set?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    disconnect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    delete?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    connect?: attendeesWhereUniqueInput | attendeesWhereUniqueInput[]
    update?: attendeesUpdateWithWhereUniqueWithoutUsersInput | attendeesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: attendeesUpdateManyWithWhereWithoutUsersInput | attendeesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: attendeesScalarWhereInput | attendeesScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsersInput | notificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsersInput | notificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsersInput | notificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type organizersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<organizersCreateWithoutUsersInput, organizersUncheckedCreateWithoutUsersInput> | organizersCreateWithoutUsersInput[] | organizersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: organizersCreateOrConnectWithoutUsersInput | organizersCreateOrConnectWithoutUsersInput[]
    upsert?: organizersUpsertWithWhereUniqueWithoutUsersInput | organizersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: organizersCreateManyUsersInputEnvelope
    set?: organizersWhereUniqueInput | organizersWhereUniqueInput[]
    disconnect?: organizersWhereUniqueInput | organizersWhereUniqueInput[]
    delete?: organizersWhereUniqueInput | organizersWhereUniqueInput[]
    connect?: organizersWhereUniqueInput | organizersWhereUniqueInput[]
    update?: organizersUpdateWithWhereUniqueWithoutUsersInput | organizersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: organizersUpdateManyWithWhereWithoutUsersInput | organizersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: organizersScalarWhereInput | organizersScalarWhereInput[]
  }

  export type pointsUncheckedUpdateOneWithoutUsers_points_user_idTousersNestedInput = {
    create?: XOR<pointsCreateWithoutUsers_points_user_idTousersInput, pointsUncheckedCreateWithoutUsers_points_user_idTousersInput>
    connectOrCreate?: pointsCreateOrConnectWithoutUsers_points_user_idTousersInput
    upsert?: pointsUpsertWithoutUsers_points_user_idTousersInput
    disconnect?: pointsWhereInput | boolean
    delete?: pointsWhereInput | boolean
    connect?: pointsWhereUniqueInput
    update?: XOR<XOR<pointsUpdateToOneWithWhereWithoutUsers_points_user_idTousersInput, pointsUpdateWithoutUsers_points_user_idTousersInput>, pointsUncheckedUpdateWithoutUsers_points_user_idTousersInput>
  }

  export type referral_couponsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<referral_couponsCreateWithoutUsersInput, referral_couponsUncheckedCreateWithoutUsersInput> | referral_couponsCreateWithoutUsersInput[] | referral_couponsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: referral_couponsCreateOrConnectWithoutUsersInput | referral_couponsCreateOrConnectWithoutUsersInput[]
    upsert?: referral_couponsUpsertWithWhereUniqueWithoutUsersInput | referral_couponsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: referral_couponsCreateManyUsersInputEnvelope
    set?: referral_couponsWhereUniqueInput | referral_couponsWhereUniqueInput[]
    disconnect?: referral_couponsWhereUniqueInput | referral_couponsWhereUniqueInput[]
    delete?: referral_couponsWhereUniqueInput | referral_couponsWhereUniqueInput[]
    connect?: referral_couponsWhereUniqueInput | referral_couponsWhereUniqueInput[]
    update?: referral_couponsUpdateWithWhereUniqueWithoutUsersInput | referral_couponsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: referral_couponsUpdateManyWithWhereWithoutUsersInput | referral_couponsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: referral_couponsScalarWhereInput | referral_couponsScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUsersInput | reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUsersInput | reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUsersInput | reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutUsersInput | transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutUsersInput | transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutUsersInput | transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type eventsCreateNestedOneWithoutVouchersInput = {
    create?: XOR<eventsCreateWithoutVouchersInput, eventsUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: eventsCreateOrConnectWithoutVouchersInput
    connect?: eventsWhereUniqueInput
  }

  export type eventsUpdateOneRequiredWithoutVouchersNestedInput = {
    create?: XOR<eventsCreateWithoutVouchersInput, eventsUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: eventsCreateOrConnectWithoutVouchersInput
    upsert?: eventsUpsertWithoutVouchersInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutVouchersInput, eventsUpdateWithoutVouchersInput>, eventsUncheckedUpdateWithoutVouchersInput>
  }

  export type eventsCreateNestedOneWithoutTicket_typesInput = {
    create?: XOR<eventsCreateWithoutTicket_typesInput, eventsUncheckedCreateWithoutTicket_typesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutTicket_typesInput
    connect?: eventsWhereUniqueInput
  }

  export type eventsUpdateOneRequiredWithoutTicket_typesNestedInput = {
    create?: XOR<eventsCreateWithoutTicket_typesInput, eventsUncheckedCreateWithoutTicket_typesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutTicket_typesInput
    upsert?: eventsUpsertWithoutTicket_typesInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutTicket_typesInput, eventsUpdateWithoutTicket_typesInput>, eventsUncheckedUpdateWithoutTicket_typesInput>
  }

  export type eventsCreateNestedOneWithoutTransaction_detailInput = {
    create?: XOR<eventsCreateWithoutTransaction_detailInput, eventsUncheckedCreateWithoutTransaction_detailInput>
    connectOrCreate?: eventsCreateOrConnectWithoutTransaction_detailInput
    connect?: eventsWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutTicketsInput = {
    create?: XOR<transactionsCreateWithoutTicketsInput, transactionsUncheckedCreateWithoutTicketsInput> | transactionsCreateWithoutTicketsInput[] | transactionsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTicketsInput | transactionsCreateOrConnectWithoutTicketsInput[]
    createMany?: transactionsCreateManyTicketsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutTicketsInput = {
    create?: XOR<transactionsCreateWithoutTicketsInput, transactionsUncheckedCreateWithoutTicketsInput> | transactionsCreateWithoutTicketsInput[] | transactionsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTicketsInput | transactionsCreateOrConnectWithoutTicketsInput[]
    createMany?: transactionsCreateManyTicketsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type eventsUpdateOneRequiredWithoutTransaction_detailNestedInput = {
    create?: XOR<eventsCreateWithoutTransaction_detailInput, eventsUncheckedCreateWithoutTransaction_detailInput>
    connectOrCreate?: eventsCreateOrConnectWithoutTransaction_detailInput
    upsert?: eventsUpsertWithoutTransaction_detailInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutTransaction_detailInput, eventsUpdateWithoutTransaction_detailInput>, eventsUncheckedUpdateWithoutTransaction_detailInput>
  }

  export type transactionsUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<transactionsCreateWithoutTicketsInput, transactionsUncheckedCreateWithoutTicketsInput> | transactionsCreateWithoutTicketsInput[] | transactionsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTicketsInput | transactionsCreateOrConnectWithoutTicketsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutTicketsInput | transactionsUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: transactionsCreateManyTicketsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutTicketsInput | transactionsUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutTicketsInput | transactionsUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<transactionsCreateWithoutTicketsInput, transactionsUncheckedCreateWithoutTicketsInput> | transactionsCreateWithoutTicketsInput[] | transactionsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTicketsInput | transactionsCreateOrConnectWithoutTicketsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutTicketsInput | transactionsUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: transactionsCreateManyTicketsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutTicketsInput | transactionsUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutTicketsInput | transactionsUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type eventsCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput> | eventsCreateWithoutOrganizerInput[] | eventsUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizerInput | eventsCreateOrConnectWithoutOrganizerInput[]
    createMany?: eventsCreateManyOrganizerInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutOrganizersInput = {
    create?: XOR<usersCreateWithoutOrganizersInput, usersUncheckedCreateWithoutOrganizersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrganizersInput
    connect?: usersWhereUniqueInput
  }

  export type eventsUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput> | eventsCreateWithoutOrganizerInput[] | eventsUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizerInput | eventsCreateOrConnectWithoutOrganizerInput[]
    createMany?: eventsCreateManyOrganizerInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type eventsUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput> | eventsCreateWithoutOrganizerInput[] | eventsUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizerInput | eventsCreateOrConnectWithoutOrganizerInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutOrganizerInput | eventsUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: eventsCreateManyOrganizerInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutOrganizerInput | eventsUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutOrganizerInput | eventsUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutOrganizersNestedInput = {
    create?: XOR<usersCreateWithoutOrganizersInput, usersUncheckedCreateWithoutOrganizersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrganizersInput
    upsert?: usersUpsertWithoutOrganizersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrganizersInput, usersUpdateWithoutOrganizersInput>, usersUncheckedUpdateWithoutOrganizersInput>
  }

  export type eventsUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput> | eventsCreateWithoutOrganizerInput[] | eventsUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizerInput | eventsCreateOrConnectWithoutOrganizerInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutOrganizerInput | eventsUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: eventsCreateManyOrganizerInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutOrganizerInput | eventsUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutOrganizerInput | eventsUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPoints_points_user_idTousersInput = {
    create?: XOR<usersCreateWithoutPoints_points_user_idTousersInput, usersUncheckedCreateWithoutPoints_points_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPoints_points_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutPoints_users_pointsTopointsInput = {
    create?: XOR<usersCreateWithoutPoints_users_pointsTopointsInput, usersUncheckedCreateWithoutPoints_users_pointsTopointsInput> | usersCreateWithoutPoints_users_pointsTopointsInput[] | usersUncheckedCreateWithoutPoints_users_pointsTopointsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPoints_users_pointsTopointsInput | usersCreateOrConnectWithoutPoints_users_pointsTopointsInput[]
    createMany?: usersCreateManyPoints_users_pointsTopointsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutPoints_users_pointsTopointsInput = {
    create?: XOR<usersCreateWithoutPoints_users_pointsTopointsInput, usersUncheckedCreateWithoutPoints_users_pointsTopointsInput> | usersCreateWithoutPoints_users_pointsTopointsInput[] | usersUncheckedCreateWithoutPoints_users_pointsTopointsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPoints_users_pointsTopointsInput | usersCreateOrConnectWithoutPoints_users_pointsTopointsInput[]
    createMany?: usersCreateManyPoints_users_pointsTopointsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutPoints_points_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutPoints_points_user_idTousersInput, usersUncheckedCreateWithoutPoints_points_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPoints_points_user_idTousersInput
    upsert?: usersUpsertWithoutPoints_points_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPoints_points_user_idTousersInput, usersUpdateWithoutPoints_points_user_idTousersInput>, usersUncheckedUpdateWithoutPoints_points_user_idTousersInput>
  }

  export type usersUpdateManyWithoutPoints_users_pointsTopointsNestedInput = {
    create?: XOR<usersCreateWithoutPoints_users_pointsTopointsInput, usersUncheckedCreateWithoutPoints_users_pointsTopointsInput> | usersCreateWithoutPoints_users_pointsTopointsInput[] | usersUncheckedCreateWithoutPoints_users_pointsTopointsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPoints_users_pointsTopointsInput | usersCreateOrConnectWithoutPoints_users_pointsTopointsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPoints_users_pointsTopointsInput | usersUpsertWithWhereUniqueWithoutPoints_users_pointsTopointsInput[]
    createMany?: usersCreateManyPoints_users_pointsTopointsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPoints_users_pointsTopointsInput | usersUpdateWithWhereUniqueWithoutPoints_users_pointsTopointsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPoints_users_pointsTopointsInput | usersUpdateManyWithWhereWithoutPoints_users_pointsTopointsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutPoints_users_pointsTopointsNestedInput = {
    create?: XOR<usersCreateWithoutPoints_users_pointsTopointsInput, usersUncheckedCreateWithoutPoints_users_pointsTopointsInput> | usersCreateWithoutPoints_users_pointsTopointsInput[] | usersUncheckedCreateWithoutPoints_users_pointsTopointsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPoints_users_pointsTopointsInput | usersCreateOrConnectWithoutPoints_users_pointsTopointsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPoints_users_pointsTopointsInput | usersUpsertWithWhereUniqueWithoutPoints_users_pointsTopointsInput[]
    createMany?: usersCreateManyPoints_users_pointsTopointsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPoints_users_pointsTopointsInput | usersUpdateWithWhereUniqueWithoutPoints_users_pointsTopointsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPoints_users_pointsTopointsInput | usersUpdateManyWithWhereWithoutPoints_users_pointsTopointsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
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

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutAttendeesInput = {
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    organizers?: organizersCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    points_users_pointsTopoints?: pointsCreateNestedOneWithoutUsers_users_pointsTopointsInput
  }

  export type usersUncheckedCreateWithoutAttendeesInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    points?: number | null
    is_verified?: boolean
    role?: $Enums.Role
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    organizers?: organizersUncheckedCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsUncheckedCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAttendeesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAttendeesInput, usersUncheckedCreateWithoutAttendeesInput>
  }

  export type eventsCreateWithoutAttendeesInput = {
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    organizer: organizersCreateNestedOneWithoutEventsInput
    reviews?: reviewsCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutEventsInput
    transactions?: transactionsCreateNestedManyWithoutEventsInput
    vouchers?: vouchersCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutAttendeesInput = {
    id?: number
    organizer_id: number
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    reviews?: reviewsUncheckedCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesUncheckedCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutEventsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutEventsInput
    vouchers?: vouchersUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutAttendeesInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutAttendeesInput, eventsUncheckedCreateWithoutAttendeesInput>
  }

  export type usersUpsertWithoutAttendeesInput = {
    update: XOR<usersUpdateWithoutAttendeesInput, usersUncheckedUpdateWithoutAttendeesInput>
    create: XOR<usersCreateWithoutAttendeesInput, usersUncheckedCreateWithoutAttendeesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAttendeesInput, usersUncheckedUpdateWithoutAttendeesInput>
  }

  export type usersUpdateWithoutAttendeesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    organizers?: organizersUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    points_users_pointsTopoints?: pointsUpdateOneWithoutUsers_users_pointsTopointsNestedInput
  }

  export type usersUncheckedUpdateWithoutAttendeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    organizers?: organizersUncheckedUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUncheckedUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type eventsUpsertWithoutAttendeesInput = {
    update: XOR<eventsUpdateWithoutAttendeesInput, eventsUncheckedUpdateWithoutAttendeesInput>
    create: XOR<eventsCreateWithoutAttendeesInput, eventsUncheckedCreateWithoutAttendeesInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutAttendeesInput, eventsUncheckedUpdateWithoutAttendeesInput>
  }

  export type eventsUpdateWithoutAttendeesInput = {
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    organizer?: organizersUpdateOneRequiredWithoutEventsNestedInput
    reviews?: reviewsUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutAttendeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    reviews?: reviewsUncheckedUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUncheckedUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type attendeesCreateWithoutEventsInput = {
    ticket_qty: bigint | number
    total_paid: bigint | number
    users: usersCreateNestedOneWithoutAttendeesInput
  }

  export type attendeesUncheckedCreateWithoutEventsInput = {
    id?: number
    user_id: number
    ticket_qty: bigint | number
    total_paid: bigint | number
  }

  export type attendeesCreateOrConnectWithoutEventsInput = {
    where: attendeesWhereUniqueInput
    create: XOR<attendeesCreateWithoutEventsInput, attendeesUncheckedCreateWithoutEventsInput>
  }

  export type attendeesCreateManyEventsInputEnvelope = {
    data: attendeesCreateManyEventsInput | attendeesCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type organizersCreateWithoutEventsInput = {
    created_at?: Date | string
    organizer_name: string
    description: string
    profile_img?: string | null
    users: usersCreateNestedOneWithoutOrganizersInput
  }

  export type organizersUncheckedCreateWithoutEventsInput = {
    id?: number
    created_at?: Date | string
    organizer_name: string
    description: string
    profile_img?: string | null
    user_id: number
  }

  export type organizersCreateOrConnectWithoutEventsInput = {
    where: organizersWhereUniqueInput
    create: XOR<organizersCreateWithoutEventsInput, organizersUncheckedCreateWithoutEventsInput>
  }

  export type reviewsCreateWithoutEventsInput = {
    rating: number
    comment: string
    users: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutEventsInput = {
    id?: number
    user_id: number
    rating: number
    comment: string
  }

  export type reviewsCreateOrConnectWithoutEventsInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutEventsInput, reviewsUncheckedCreateWithoutEventsInput>
  }

  export type reviewsCreateManyEventsInputEnvelope = {
    data: reviewsCreateManyEventsInput | reviewsCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type ticket_typesCreateWithoutEventsInput = {
    created_at?: Date | string
    type_name: string
    quota: number
    price: number
    description?: string
  }

  export type ticket_typesUncheckedCreateWithoutEventsInput = {
    id?: number
    created_at?: Date | string
    type_name: string
    quota: number
    price: number
    description?: string
  }

  export type ticket_typesCreateOrConnectWithoutEventsInput = {
    where: ticket_typesWhereUniqueInput
    create: XOR<ticket_typesCreateWithoutEventsInput, ticket_typesUncheckedCreateWithoutEventsInput>
  }

  export type ticket_typesCreateManyEventsInputEnvelope = {
    data: ticket_typesCreateManyEventsInput | ticket_typesCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type transaction_detailCreateWithoutEventsInput = {
    code: string
    is_attend?: boolean
    transactions?: transactionsCreateNestedManyWithoutTicketsInput
  }

  export type transaction_detailUncheckedCreateWithoutEventsInput = {
    id?: number
    code: string
    is_attend?: boolean
    transactions?: transactionsUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type transaction_detailCreateOrConnectWithoutEventsInput = {
    where: transaction_detailWhereUniqueInput
    create: XOR<transaction_detailCreateWithoutEventsInput, transaction_detailUncheckedCreateWithoutEventsInput>
  }

  export type transaction_detailCreateManyEventsInputEnvelope = {
    data: transaction_detailCreateManyEventsInput | transaction_detailCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type transactionsCreateWithoutEventsInput = {
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
    notifications?: notificationsCreateNestedManyWithoutTransactionsInput
    users: usersCreateNestedOneWithoutTransactionsInput
    tickets: transaction_detailCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutEventsInput = {
    id?: number
    user_id: number
    ticket_id: number
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
    notifications?: notificationsUncheckedCreateNestedManyWithoutTransactionsInput
  }

  export type transactionsCreateOrConnectWithoutEventsInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutEventsInput, transactionsUncheckedCreateWithoutEventsInput>
  }

  export type transactionsCreateManyEventsInputEnvelope = {
    data: transactionsCreateManyEventsInput | transactionsCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type vouchersCreateWithoutEventsInput = {
    code: number
    disc_amount: number
    start_date: Date | string
    end_date: Date | string
    quota: bigint | number
  }

  export type vouchersUncheckedCreateWithoutEventsInput = {
    id?: number
    code: number
    disc_amount: number
    start_date: Date | string
    end_date: Date | string
    quota: bigint | number
  }

  export type vouchersCreateOrConnectWithoutEventsInput = {
    where: vouchersWhereUniqueInput
    create: XOR<vouchersCreateWithoutEventsInput, vouchersUncheckedCreateWithoutEventsInput>
  }

  export type vouchersCreateManyEventsInputEnvelope = {
    data: vouchersCreateManyEventsInput | vouchersCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type attendeesUpsertWithWhereUniqueWithoutEventsInput = {
    where: attendeesWhereUniqueInput
    update: XOR<attendeesUpdateWithoutEventsInput, attendeesUncheckedUpdateWithoutEventsInput>
    create: XOR<attendeesCreateWithoutEventsInput, attendeesUncheckedCreateWithoutEventsInput>
  }

  export type attendeesUpdateWithWhereUniqueWithoutEventsInput = {
    where: attendeesWhereUniqueInput
    data: XOR<attendeesUpdateWithoutEventsInput, attendeesUncheckedUpdateWithoutEventsInput>
  }

  export type attendeesUpdateManyWithWhereWithoutEventsInput = {
    where: attendeesScalarWhereInput
    data: XOR<attendeesUpdateManyMutationInput, attendeesUncheckedUpdateManyWithoutEventsInput>
  }

  export type attendeesScalarWhereInput = {
    AND?: attendeesScalarWhereInput | attendeesScalarWhereInput[]
    OR?: attendeesScalarWhereInput[]
    NOT?: attendeesScalarWhereInput | attendeesScalarWhereInput[]
    id?: IntFilter<"attendees"> | number
    user_id?: IntFilter<"attendees"> | number
    event_id?: IntFilter<"attendees"> | number
    ticket_qty?: BigIntFilter<"attendees"> | bigint | number
    total_paid?: BigIntFilter<"attendees"> | bigint | number
  }

  export type organizersUpsertWithoutEventsInput = {
    update: XOR<organizersUpdateWithoutEventsInput, organizersUncheckedUpdateWithoutEventsInput>
    create: XOR<organizersCreateWithoutEventsInput, organizersUncheckedCreateWithoutEventsInput>
    where?: organizersWhereInput
  }

  export type organizersUpdateToOneWithWhereWithoutEventsInput = {
    where?: organizersWhereInput
    data: XOR<organizersUpdateWithoutEventsInput, organizersUncheckedUpdateWithoutEventsInput>
  }

  export type organizersUpdateWithoutEventsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutOrganizersNestedInput
  }

  export type organizersUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewsUpsertWithWhereUniqueWithoutEventsInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutEventsInput, reviewsUncheckedUpdateWithoutEventsInput>
    create: XOR<reviewsCreateWithoutEventsInput, reviewsUncheckedCreateWithoutEventsInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutEventsInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutEventsInput, reviewsUncheckedUpdateWithoutEventsInput>
  }

  export type reviewsUpdateManyWithWhereWithoutEventsInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutEventsInput>
  }

  export type reviewsScalarWhereInput = {
    AND?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    OR?: reviewsScalarWhereInput[]
    NOT?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    id?: IntFilter<"reviews"> | number
    user_id?: IntFilter<"reviews"> | number
    event_id?: IntFilter<"reviews"> | number
    rating?: IntFilter<"reviews"> | number
    comment?: StringFilter<"reviews"> | string
  }

  export type ticket_typesUpsertWithWhereUniqueWithoutEventsInput = {
    where: ticket_typesWhereUniqueInput
    update: XOR<ticket_typesUpdateWithoutEventsInput, ticket_typesUncheckedUpdateWithoutEventsInput>
    create: XOR<ticket_typesCreateWithoutEventsInput, ticket_typesUncheckedCreateWithoutEventsInput>
  }

  export type ticket_typesUpdateWithWhereUniqueWithoutEventsInput = {
    where: ticket_typesWhereUniqueInput
    data: XOR<ticket_typesUpdateWithoutEventsInput, ticket_typesUncheckedUpdateWithoutEventsInput>
  }

  export type ticket_typesUpdateManyWithWhereWithoutEventsInput = {
    where: ticket_typesScalarWhereInput
    data: XOR<ticket_typesUpdateManyMutationInput, ticket_typesUncheckedUpdateManyWithoutEventsInput>
  }

  export type ticket_typesScalarWhereInput = {
    AND?: ticket_typesScalarWhereInput | ticket_typesScalarWhereInput[]
    OR?: ticket_typesScalarWhereInput[]
    NOT?: ticket_typesScalarWhereInput | ticket_typesScalarWhereInput[]
    id?: IntFilter<"ticket_types"> | number
    created_at?: DateTimeFilter<"ticket_types"> | Date | string
    event_id?: IntFilter<"ticket_types"> | number
    type_name?: StringFilter<"ticket_types"> | string
    quota?: IntFilter<"ticket_types"> | number
    price?: IntFilter<"ticket_types"> | number
    description?: StringFilter<"ticket_types"> | string
  }

  export type transaction_detailUpsertWithWhereUniqueWithoutEventsInput = {
    where: transaction_detailWhereUniqueInput
    update: XOR<transaction_detailUpdateWithoutEventsInput, transaction_detailUncheckedUpdateWithoutEventsInput>
    create: XOR<transaction_detailCreateWithoutEventsInput, transaction_detailUncheckedCreateWithoutEventsInput>
  }

  export type transaction_detailUpdateWithWhereUniqueWithoutEventsInput = {
    where: transaction_detailWhereUniqueInput
    data: XOR<transaction_detailUpdateWithoutEventsInput, transaction_detailUncheckedUpdateWithoutEventsInput>
  }

  export type transaction_detailUpdateManyWithWhereWithoutEventsInput = {
    where: transaction_detailScalarWhereInput
    data: XOR<transaction_detailUpdateManyMutationInput, transaction_detailUncheckedUpdateManyWithoutEventsInput>
  }

  export type transaction_detailScalarWhereInput = {
    AND?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
    OR?: transaction_detailScalarWhereInput[]
    NOT?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
    id?: IntFilter<"transaction_detail"> | number
    code?: StringFilter<"transaction_detail"> | string
    event_id?: IntFilter<"transaction_detail"> | number
    is_attend?: BoolFilter<"transaction_detail"> | boolean
  }

  export type transactionsUpsertWithWhereUniqueWithoutEventsInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutEventsInput, transactionsUncheckedUpdateWithoutEventsInput>
    create: XOR<transactionsCreateWithoutEventsInput, transactionsUncheckedCreateWithoutEventsInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutEventsInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutEventsInput, transactionsUncheckedUpdateWithoutEventsInput>
  }

  export type transactionsUpdateManyWithWhereWithoutEventsInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutEventsInput>
  }

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    OR?: transactionsScalarWhereInput[]
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    id?: IntFilter<"transactions"> | number
    user_id?: IntFilter<"transactions"> | number
    event_id?: IntFilter<"transactions"> | number
    ticket_id?: IntFilter<"transactions"> | number
    total_price?: IntFilter<"transactions"> | number
    payment_proof?: StringFilter<"transactions"> | string
    expired_date?: DateTimeFilter<"transactions"> | Date | string
    invoice_id?: StringFilter<"transactions"> | string
    status?: EnumStatusFilter<"transactions"> | $Enums.Status
  }

  export type vouchersUpsertWithWhereUniqueWithoutEventsInput = {
    where: vouchersWhereUniqueInput
    update: XOR<vouchersUpdateWithoutEventsInput, vouchersUncheckedUpdateWithoutEventsInput>
    create: XOR<vouchersCreateWithoutEventsInput, vouchersUncheckedCreateWithoutEventsInput>
  }

  export type vouchersUpdateWithWhereUniqueWithoutEventsInput = {
    where: vouchersWhereUniqueInput
    data: XOR<vouchersUpdateWithoutEventsInput, vouchersUncheckedUpdateWithoutEventsInput>
  }

  export type vouchersUpdateManyWithWhereWithoutEventsInput = {
    where: vouchersScalarWhereInput
    data: XOR<vouchersUpdateManyMutationInput, vouchersUncheckedUpdateManyWithoutEventsInput>
  }

  export type vouchersScalarWhereInput = {
    AND?: vouchersScalarWhereInput | vouchersScalarWhereInput[]
    OR?: vouchersScalarWhereInput[]
    NOT?: vouchersScalarWhereInput | vouchersScalarWhereInput[]
    id?: IntFilter<"vouchers"> | number
    event_id?: IntFilter<"vouchers"> | number
    code?: IntFilter<"vouchers"> | number
    disc_amount?: IntFilter<"vouchers"> | number
    start_date?: DateTimeFilter<"vouchers"> | Date | string
    end_date?: DateTimeFilter<"vouchers"> | Date | string
    quota?: BigIntFilter<"vouchers"> | bigint | number
  }

  export type usersCreateWithoutNotificationsInput = {
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesCreateNestedManyWithoutUsersInput
    organizers?: organizersCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    points_users_pointsTopoints?: pointsCreateNestedOneWithoutUsers_users_pointsTopointsInput
  }

  export type usersUncheckedCreateWithoutNotificationsInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    points?: number | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesUncheckedCreateNestedManyWithoutUsersInput
    organizers?: organizersUncheckedCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsUncheckedCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNotificationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
  }

  export type transactionsCreateWithoutNotificationsInput = {
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
    users: usersCreateNestedOneWithoutTransactionsInput
    events: eventsCreateNestedOneWithoutTransactionsInput
    tickets: transaction_detailCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutNotificationsInput = {
    id?: number
    user_id: number
    event_id: number
    ticket_id: number
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
  }

  export type transactionsCreateOrConnectWithoutNotificationsInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutNotificationsInput, transactionsUncheckedCreateWithoutNotificationsInput>
  }

  export type usersUpsertWithoutNotificationsInput = {
    update: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type usersUpdateWithoutNotificationsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUpdateManyWithoutUsersNestedInput
    organizers?: organizersUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    points_users_pointsTopoints?: pointsUpdateOneWithoutUsers_users_pointsTopointsNestedInput
  }

  export type usersUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUncheckedUpdateManyWithoutUsersNestedInput
    organizers?: organizersUncheckedUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUncheckedUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type transactionsUpsertWithoutNotificationsInput = {
    update: XOR<transactionsUpdateWithoutNotificationsInput, transactionsUncheckedUpdateWithoutNotificationsInput>
    create: XOR<transactionsCreateWithoutNotificationsInput, transactionsUncheckedCreateWithoutNotificationsInput>
    where?: transactionsWhereInput
  }

  export type transactionsUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: transactionsWhereInput
    data: XOR<transactionsUpdateWithoutNotificationsInput, transactionsUncheckedUpdateWithoutNotificationsInput>
  }

  export type transactionsUpdateWithoutNotificationsInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
    events?: eventsUpdateOneRequiredWithoutTransactionsNestedInput
    tickets?: transaction_detailUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type usersCreateWithoutReferral_couponsInput = {
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    organizers?: organizersCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsCreateNestedOneWithoutUsers_points_user_idTousersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    points_users_pointsTopoints?: pointsCreateNestedOneWithoutUsers_users_pointsTopointsInput
  }

  export type usersUncheckedCreateWithoutReferral_couponsInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    points?: number | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    organizers?: organizersUncheckedCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsUncheckedCreateNestedOneWithoutUsers_points_user_idTousersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReferral_couponsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReferral_couponsInput, usersUncheckedCreateWithoutReferral_couponsInput>
  }

  export type usersUpsertWithoutReferral_couponsInput = {
    update: XOR<usersUpdateWithoutReferral_couponsInput, usersUncheckedUpdateWithoutReferral_couponsInput>
    create: XOR<usersCreateWithoutReferral_couponsInput, usersUncheckedCreateWithoutReferral_couponsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReferral_couponsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReferral_couponsInput, usersUncheckedUpdateWithoutReferral_couponsInput>
  }

  export type usersUpdateWithoutReferral_couponsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    organizers?: organizersUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUpdateOneWithoutUsers_points_user_idTousersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    points_users_pointsTopoints?: pointsUpdateOneWithoutUsers_users_pointsTopointsNestedInput
  }

  export type usersUncheckedUpdateWithoutReferral_couponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    organizers?: organizersUncheckedUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUncheckedUpdateOneWithoutUsers_points_user_idTousersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutReviewsInput = {
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    organizers?: organizersCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    points_users_pointsTopoints?: pointsCreateNestedOneWithoutUsers_users_pointsTopointsInput
  }

  export type usersUncheckedCreateWithoutReviewsInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    points?: number | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    organizers?: organizersUncheckedCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsUncheckedCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
  }

  export type eventsCreateWithoutReviewsInput = {
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesCreateNestedManyWithoutEventsInput
    organizer: organizersCreateNestedOneWithoutEventsInput
    ticket_types?: ticket_typesCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutEventsInput
    transactions?: transactionsCreateNestedManyWithoutEventsInput
    vouchers?: vouchersCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutReviewsInput = {
    id?: number
    organizer_id: number
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesUncheckedCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesUncheckedCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutEventsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutEventsInput
    vouchers?: vouchersUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutReviewsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutReviewsInput, eventsUncheckedCreateWithoutReviewsInput>
  }

  export type usersUpsertWithoutReviewsInput = {
    update: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateWithoutReviewsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    organizers?: organizersUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    points_users_pointsTopoints?: pointsUpdateOneWithoutUsers_users_pointsTopointsNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    organizers?: organizersUncheckedUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUncheckedUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type eventsUpsertWithoutReviewsInput = {
    update: XOR<eventsUpdateWithoutReviewsInput, eventsUncheckedUpdateWithoutReviewsInput>
    create: XOR<eventsCreateWithoutReviewsInput, eventsUncheckedCreateWithoutReviewsInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutReviewsInput, eventsUncheckedUpdateWithoutReviewsInput>
  }

  export type eventsUpdateWithoutReviewsInput = {
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUpdateManyWithoutEventsNestedInput
    organizer?: organizersUpdateOneRequiredWithoutEventsNestedInput
    ticket_types?: ticket_typesUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUncheckedUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUncheckedUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type notificationsCreateWithoutTransactionsInput = {
    message: string
    users: usersCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateWithoutTransactionsInput = {
    id?: number
    user_id: number
    message: string
  }

  export type notificationsCreateOrConnectWithoutTransactionsInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutTransactionsInput, notificationsUncheckedCreateWithoutTransactionsInput>
  }

  export type notificationsCreateManyTransactionsInputEnvelope = {
    data: notificationsCreateManyTransactionsInput | notificationsCreateManyTransactionsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutTransactionsInput = {
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    organizers?: organizersCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    points_users_pointsTopoints?: pointsCreateNestedOneWithoutUsers_users_pointsTopointsInput
  }

  export type usersUncheckedCreateWithoutTransactionsInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    points?: number | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    organizers?: organizersUncheckedCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsUncheckedCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTransactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
  }

  export type eventsCreateWithoutTransactionsInput = {
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesCreateNestedManyWithoutEventsInput
    organizer: organizersCreateNestedOneWithoutEventsInput
    reviews?: reviewsCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutEventsInput
    vouchers?: vouchersCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutTransactionsInput = {
    id?: number
    organizer_id: number
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesUncheckedCreateNestedManyWithoutEventsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesUncheckedCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutEventsInput
    vouchers?: vouchersUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutTransactionsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutTransactionsInput, eventsUncheckedCreateWithoutTransactionsInput>
  }

  export type transaction_detailCreateWithoutTransactionsInput = {
    code: string
    is_attend?: boolean
    events: eventsCreateNestedOneWithoutTransaction_detailInput
  }

  export type transaction_detailUncheckedCreateWithoutTransactionsInput = {
    id?: number
    code: string
    event_id: number
    is_attend?: boolean
  }

  export type transaction_detailCreateOrConnectWithoutTransactionsInput = {
    where: transaction_detailWhereUniqueInput
    create: XOR<transaction_detailCreateWithoutTransactionsInput, transaction_detailUncheckedCreateWithoutTransactionsInput>
  }

  export type notificationsUpsertWithWhereUniqueWithoutTransactionsInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutTransactionsInput, notificationsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<notificationsCreateWithoutTransactionsInput, notificationsUncheckedCreateWithoutTransactionsInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutTransactionsInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutTransactionsInput, notificationsUncheckedUpdateWithoutTransactionsInput>
  }

  export type notificationsUpdateManyWithWhereWithoutTransactionsInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntFilter<"notifications"> | number
    transaction_id?: IntFilter<"notifications"> | number
    message?: StringFilter<"notifications"> | string
  }

  export type usersUpsertWithoutTransactionsInput = {
    update: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type usersUpdateWithoutTransactionsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    organizers?: organizersUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    points_users_pointsTopoints?: pointsUpdateOneWithoutUsers_users_pointsTopointsNestedInput
  }

  export type usersUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    organizers?: organizersUncheckedUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUncheckedUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type eventsUpsertWithoutTransactionsInput = {
    update: XOR<eventsUpdateWithoutTransactionsInput, eventsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<eventsCreateWithoutTransactionsInput, eventsUncheckedCreateWithoutTransactionsInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutTransactionsInput, eventsUncheckedUpdateWithoutTransactionsInput>
  }

  export type eventsUpdateWithoutTransactionsInput = {
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUpdateManyWithoutEventsNestedInput
    organizer?: organizersUpdateOneRequiredWithoutEventsNestedInput
    reviews?: reviewsUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUncheckedUpdateManyWithoutEventsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUncheckedUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type transaction_detailUpsertWithoutTransactionsInput = {
    update: XOR<transaction_detailUpdateWithoutTransactionsInput, transaction_detailUncheckedUpdateWithoutTransactionsInput>
    create: XOR<transaction_detailCreateWithoutTransactionsInput, transaction_detailUncheckedCreateWithoutTransactionsInput>
    where?: transaction_detailWhereInput
  }

  export type transaction_detailUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: transaction_detailWhereInput
    data: XOR<transaction_detailUpdateWithoutTransactionsInput, transaction_detailUncheckedUpdateWithoutTransactionsInput>
  }

  export type transaction_detailUpdateWithoutTransactionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    is_attend?: BoolFieldUpdateOperationsInput | boolean
    events?: eventsUpdateOneRequiredWithoutTransaction_detailNestedInput
  }

  export type transaction_detailUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    event_id?: IntFieldUpdateOperationsInput | number
    is_attend?: BoolFieldUpdateOperationsInput | boolean
  }

  export type attendeesCreateWithoutUsersInput = {
    ticket_qty: bigint | number
    total_paid: bigint | number
    events: eventsCreateNestedOneWithoutAttendeesInput
  }

  export type attendeesUncheckedCreateWithoutUsersInput = {
    id?: number
    event_id: number
    ticket_qty: bigint | number
    total_paid: bigint | number
  }

  export type attendeesCreateOrConnectWithoutUsersInput = {
    where: attendeesWhereUniqueInput
    create: XOR<attendeesCreateWithoutUsersInput, attendeesUncheckedCreateWithoutUsersInput>
  }

  export type attendeesCreateManyUsersInputEnvelope = {
    data: attendeesCreateManyUsersInput | attendeesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUsersInput = {
    message: string
    transactions: transactionsCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateWithoutUsersInput = {
    id?: number
    transaction_id: number
    message: string
  }

  export type notificationsCreateOrConnectWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsCreateManyUsersInputEnvelope = {
    data: notificationsCreateManyUsersInput | notificationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type organizersCreateWithoutUsersInput = {
    created_at?: Date | string
    organizer_name: string
    description: string
    profile_img?: string | null
    events?: eventsCreateNestedManyWithoutOrganizerInput
  }

  export type organizersUncheckedCreateWithoutUsersInput = {
    id?: number
    created_at?: Date | string
    organizer_name: string
    description: string
    profile_img?: string | null
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type organizersCreateOrConnectWithoutUsersInput = {
    where: organizersWhereUniqueInput
    create: XOR<organizersCreateWithoutUsersInput, organizersUncheckedCreateWithoutUsersInput>
  }

  export type organizersCreateManyUsersInputEnvelope = {
    data: organizersCreateManyUsersInput | organizersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type pointsCreateWithoutUsers_points_user_idTousersInput = {
    created_at?: Date | string
    points_amount: number
    expire_date?: Date | string | null
    users_users_pointsTopoints?: usersCreateNestedManyWithoutPoints_users_pointsTopointsInput
  }

  export type pointsUncheckedCreateWithoutUsers_points_user_idTousersInput = {
    id?: number
    created_at?: Date | string
    points_amount: number
    expire_date?: Date | string | null
    users_users_pointsTopoints?: usersUncheckedCreateNestedManyWithoutPoints_users_pointsTopointsInput
  }

  export type pointsCreateOrConnectWithoutUsers_points_user_idTousersInput = {
    where: pointsWhereUniqueInput
    create: XOR<pointsCreateWithoutUsers_points_user_idTousersInput, pointsUncheckedCreateWithoutUsers_points_user_idTousersInput>
  }

  export type referral_couponsCreateWithoutUsersInput = {
    code: string
    expires_date: Date | string
    disc_amunt?: number
  }

  export type referral_couponsUncheckedCreateWithoutUsersInput = {
    id?: number
    code: string
    expires_date: Date | string
    disc_amunt?: number
  }

  export type referral_couponsCreateOrConnectWithoutUsersInput = {
    where: referral_couponsWhereUniqueInput
    create: XOR<referral_couponsCreateWithoutUsersInput, referral_couponsUncheckedCreateWithoutUsersInput>
  }

  export type referral_couponsCreateManyUsersInputEnvelope = {
    data: referral_couponsCreateManyUsersInput | referral_couponsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutUsersInput = {
    rating: number
    comment: string
    events: eventsCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutUsersInput = {
    id?: number
    event_id: number
    rating: number
    comment: string
  }

  export type reviewsCreateOrConnectWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput>
  }

  export type reviewsCreateManyUsersInputEnvelope = {
    data: reviewsCreateManyUsersInput | reviewsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type transactionsCreateWithoutUsersInput = {
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
    notifications?: notificationsCreateNestedManyWithoutTransactionsInput
    events: eventsCreateNestedOneWithoutTransactionsInput
    tickets: transaction_detailCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutUsersInput = {
    id?: number
    event_id: number
    ticket_id: number
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
    notifications?: notificationsUncheckedCreateNestedManyWithoutTransactionsInput
  }

  export type transactionsCreateOrConnectWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type transactionsCreateManyUsersInputEnvelope = {
    data: transactionsCreateManyUsersInput | transactionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type pointsCreateWithoutUsers_users_pointsTopointsInput = {
    created_at?: Date | string
    points_amount: number
    expire_date?: Date | string | null
    users_points_user_idTousers: usersCreateNestedOneWithoutPoints_points_user_idTousersInput
  }

  export type pointsUncheckedCreateWithoutUsers_users_pointsTopointsInput = {
    id?: number
    created_at?: Date | string
    user_id: number
    points_amount: number
    expire_date?: Date | string | null
  }

  export type pointsCreateOrConnectWithoutUsers_users_pointsTopointsInput = {
    where: pointsWhereUniqueInput
    create: XOR<pointsCreateWithoutUsers_users_pointsTopointsInput, pointsUncheckedCreateWithoutUsers_users_pointsTopointsInput>
  }

  export type attendeesUpsertWithWhereUniqueWithoutUsersInput = {
    where: attendeesWhereUniqueInput
    update: XOR<attendeesUpdateWithoutUsersInput, attendeesUncheckedUpdateWithoutUsersInput>
    create: XOR<attendeesCreateWithoutUsersInput, attendeesUncheckedCreateWithoutUsersInput>
  }

  export type attendeesUpdateWithWhereUniqueWithoutUsersInput = {
    where: attendeesWhereUniqueInput
    data: XOR<attendeesUpdateWithoutUsersInput, attendeesUncheckedUpdateWithoutUsersInput>
  }

  export type attendeesUpdateManyWithWhereWithoutUsersInput = {
    where: attendeesScalarWhereInput
    data: XOR<attendeesUpdateManyMutationInput, attendeesUncheckedUpdateManyWithoutUsersInput>
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type organizersUpsertWithWhereUniqueWithoutUsersInput = {
    where: organizersWhereUniqueInput
    update: XOR<organizersUpdateWithoutUsersInput, organizersUncheckedUpdateWithoutUsersInput>
    create: XOR<organizersCreateWithoutUsersInput, organizersUncheckedCreateWithoutUsersInput>
  }

  export type organizersUpdateWithWhereUniqueWithoutUsersInput = {
    where: organizersWhereUniqueInput
    data: XOR<organizersUpdateWithoutUsersInput, organizersUncheckedUpdateWithoutUsersInput>
  }

  export type organizersUpdateManyWithWhereWithoutUsersInput = {
    where: organizersScalarWhereInput
    data: XOR<organizersUpdateManyMutationInput, organizersUncheckedUpdateManyWithoutUsersInput>
  }

  export type organizersScalarWhereInput = {
    AND?: organizersScalarWhereInput | organizersScalarWhereInput[]
    OR?: organizersScalarWhereInput[]
    NOT?: organizersScalarWhereInput | organizersScalarWhereInput[]
    id?: IntFilter<"organizers"> | number
    created_at?: DateTimeFilter<"organizers"> | Date | string
    organizer_name?: StringFilter<"organizers"> | string
    description?: StringFilter<"organizers"> | string
    profile_img?: StringNullableFilter<"organizers"> | string | null
    user_id?: IntFilter<"organizers"> | number
  }

  export type pointsUpsertWithoutUsers_points_user_idTousersInput = {
    update: XOR<pointsUpdateWithoutUsers_points_user_idTousersInput, pointsUncheckedUpdateWithoutUsers_points_user_idTousersInput>
    create: XOR<pointsCreateWithoutUsers_points_user_idTousersInput, pointsUncheckedCreateWithoutUsers_points_user_idTousersInput>
    where?: pointsWhereInput
  }

  export type pointsUpdateToOneWithWhereWithoutUsers_points_user_idTousersInput = {
    where?: pointsWhereInput
    data: XOR<pointsUpdateWithoutUsers_points_user_idTousersInput, pointsUncheckedUpdateWithoutUsers_points_user_idTousersInput>
  }

  export type pointsUpdateWithoutUsers_points_user_idTousersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    points_amount?: IntFieldUpdateOperationsInput | number
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_users_pointsTopoints?: usersUpdateManyWithoutPoints_users_pointsTopointsNestedInput
  }

  export type pointsUncheckedUpdateWithoutUsers_points_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    points_amount?: IntFieldUpdateOperationsInput | number
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_users_pointsTopoints?: usersUncheckedUpdateManyWithoutPoints_users_pointsTopointsNestedInput
  }

  export type referral_couponsUpsertWithWhereUniqueWithoutUsersInput = {
    where: referral_couponsWhereUniqueInput
    update: XOR<referral_couponsUpdateWithoutUsersInput, referral_couponsUncheckedUpdateWithoutUsersInput>
    create: XOR<referral_couponsCreateWithoutUsersInput, referral_couponsUncheckedCreateWithoutUsersInput>
  }

  export type referral_couponsUpdateWithWhereUniqueWithoutUsersInput = {
    where: referral_couponsWhereUniqueInput
    data: XOR<referral_couponsUpdateWithoutUsersInput, referral_couponsUncheckedUpdateWithoutUsersInput>
  }

  export type referral_couponsUpdateManyWithWhereWithoutUsersInput = {
    where: referral_couponsScalarWhereInput
    data: XOR<referral_couponsUpdateManyMutationInput, referral_couponsUncheckedUpdateManyWithoutUsersInput>
  }

  export type referral_couponsScalarWhereInput = {
    AND?: referral_couponsScalarWhereInput | referral_couponsScalarWhereInput[]
    OR?: referral_couponsScalarWhereInput[]
    NOT?: referral_couponsScalarWhereInput | referral_couponsScalarWhereInput[]
    id?: IntFilter<"referral_coupons"> | number
    user_id?: IntFilter<"referral_coupons"> | number
    code?: StringFilter<"referral_coupons"> | string
    expires_date?: DateTimeFilter<"referral_coupons"> | Date | string
    disc_amunt?: IntFilter<"referral_coupons"> | number
  }

  export type reviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutUsersInput, reviewsUncheckedUpdateWithoutUsersInput>
    create: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutUsersInput, reviewsUncheckedUpdateWithoutUsersInput>
  }

  export type reviewsUpdateManyWithWhereWithoutUsersInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutUsersInput>
  }

  export type transactionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type transactionsUpdateManyWithWhereWithoutUsersInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type pointsUpsertWithoutUsers_users_pointsTopointsInput = {
    update: XOR<pointsUpdateWithoutUsers_users_pointsTopointsInput, pointsUncheckedUpdateWithoutUsers_users_pointsTopointsInput>
    create: XOR<pointsCreateWithoutUsers_users_pointsTopointsInput, pointsUncheckedCreateWithoutUsers_users_pointsTopointsInput>
    where?: pointsWhereInput
  }

  export type pointsUpdateToOneWithWhereWithoutUsers_users_pointsTopointsInput = {
    where?: pointsWhereInput
    data: XOR<pointsUpdateWithoutUsers_users_pointsTopointsInput, pointsUncheckedUpdateWithoutUsers_users_pointsTopointsInput>
  }

  export type pointsUpdateWithoutUsers_users_pointsTopointsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    points_amount?: IntFieldUpdateOperationsInput | number
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_points_user_idTousers?: usersUpdateOneRequiredWithoutPoints_points_user_idTousersNestedInput
  }

  export type pointsUncheckedUpdateWithoutUsers_users_pointsTopointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    points_amount?: IntFieldUpdateOperationsInput | number
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventsCreateWithoutVouchersInput = {
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesCreateNestedManyWithoutEventsInput
    organizer: organizersCreateNestedOneWithoutEventsInput
    reviews?: reviewsCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutEventsInput
    transactions?: transactionsCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutVouchersInput = {
    id?: number
    organizer_id: number
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesUncheckedCreateNestedManyWithoutEventsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesUncheckedCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutEventsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutVouchersInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutVouchersInput, eventsUncheckedCreateWithoutVouchersInput>
  }

  export type eventsUpsertWithoutVouchersInput = {
    update: XOR<eventsUpdateWithoutVouchersInput, eventsUncheckedUpdateWithoutVouchersInput>
    create: XOR<eventsCreateWithoutVouchersInput, eventsUncheckedCreateWithoutVouchersInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutVouchersInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutVouchersInput, eventsUncheckedUpdateWithoutVouchersInput>
  }

  export type eventsUpdateWithoutVouchersInput = {
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUpdateManyWithoutEventsNestedInput
    organizer?: organizersUpdateOneRequiredWithoutEventsNestedInput
    reviews?: reviewsUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutVouchersInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUncheckedUpdateManyWithoutEventsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUncheckedUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsCreateWithoutTicket_typesInput = {
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesCreateNestedManyWithoutEventsInput
    organizer: organizersCreateNestedOneWithoutEventsInput
    reviews?: reviewsCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutEventsInput
    transactions?: transactionsCreateNestedManyWithoutEventsInput
    vouchers?: vouchersCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutTicket_typesInput = {
    id?: number
    organizer_id: number
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesUncheckedCreateNestedManyWithoutEventsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutEventsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutEventsInput
    vouchers?: vouchersUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutTicket_typesInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutTicket_typesInput, eventsUncheckedCreateWithoutTicket_typesInput>
  }

  export type eventsUpsertWithoutTicket_typesInput = {
    update: XOR<eventsUpdateWithoutTicket_typesInput, eventsUncheckedUpdateWithoutTicket_typesInput>
    create: XOR<eventsCreateWithoutTicket_typesInput, eventsUncheckedCreateWithoutTicket_typesInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutTicket_typesInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutTicket_typesInput, eventsUncheckedUpdateWithoutTicket_typesInput>
  }

  export type eventsUpdateWithoutTicket_typesInput = {
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUpdateManyWithoutEventsNestedInput
    organizer?: organizersUpdateOneRequiredWithoutEventsNestedInput
    reviews?: reviewsUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutTicket_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUncheckedUpdateManyWithoutEventsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsCreateWithoutTransaction_detailInput = {
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesCreateNestedManyWithoutEventsInput
    organizer: organizersCreateNestedOneWithoutEventsInput
    reviews?: reviewsCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesCreateNestedManyWithoutEventsInput
    transactions?: transactionsCreateNestedManyWithoutEventsInput
    vouchers?: vouchersCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutTransaction_detailInput = {
    id?: number
    organizer_id: number
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesUncheckedCreateNestedManyWithoutEventsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesUncheckedCreateNestedManyWithoutEventsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutEventsInput
    vouchers?: vouchersUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutTransaction_detailInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutTransaction_detailInput, eventsUncheckedCreateWithoutTransaction_detailInput>
  }

  export type transactionsCreateWithoutTicketsInput = {
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
    notifications?: notificationsCreateNestedManyWithoutTransactionsInput
    users: usersCreateNestedOneWithoutTransactionsInput
    events: eventsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutTicketsInput = {
    id?: number
    user_id: number
    event_id: number
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
    notifications?: notificationsUncheckedCreateNestedManyWithoutTransactionsInput
  }

  export type transactionsCreateOrConnectWithoutTicketsInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutTicketsInput, transactionsUncheckedCreateWithoutTicketsInput>
  }

  export type transactionsCreateManyTicketsInputEnvelope = {
    data: transactionsCreateManyTicketsInput | transactionsCreateManyTicketsInput[]
    skipDuplicates?: boolean
  }

  export type eventsUpsertWithoutTransaction_detailInput = {
    update: XOR<eventsUpdateWithoutTransaction_detailInput, eventsUncheckedUpdateWithoutTransaction_detailInput>
    create: XOR<eventsCreateWithoutTransaction_detailInput, eventsUncheckedCreateWithoutTransaction_detailInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutTransaction_detailInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutTransaction_detailInput, eventsUncheckedUpdateWithoutTransaction_detailInput>
  }

  export type eventsUpdateWithoutTransaction_detailInput = {
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUpdateManyWithoutEventsNestedInput
    organizer?: organizersUpdateOneRequiredWithoutEventsNestedInput
    reviews?: reviewsUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutTransaction_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUncheckedUpdateManyWithoutEventsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUncheckedUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type transactionsUpsertWithWhereUniqueWithoutTicketsInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutTicketsInput, transactionsUncheckedUpdateWithoutTicketsInput>
    create: XOR<transactionsCreateWithoutTicketsInput, transactionsUncheckedCreateWithoutTicketsInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutTicketsInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutTicketsInput, transactionsUncheckedUpdateWithoutTicketsInput>
  }

  export type transactionsUpdateManyWithWhereWithoutTicketsInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutTicketsInput>
  }

  export type eventsCreateWithoutOrganizerInput = {
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesCreateNestedManyWithoutEventsInput
    reviews?: reviewsCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutEventsInput
    transactions?: transactionsCreateNestedManyWithoutEventsInput
    vouchers?: vouchersCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutOrganizerInput = {
    id?: number
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
    attendees?: attendeesUncheckedCreateNestedManyWithoutEventsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutEventsInput
    ticket_types?: ticket_typesUncheckedCreateNestedManyWithoutEventsInput
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutEventsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutEventsInput
    vouchers?: vouchersUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutOrganizerInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput>
  }

  export type eventsCreateManyOrganizerInputEnvelope = {
    data: eventsCreateManyOrganizerInput | eventsCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutOrganizersInput = {
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    points_users_pointsTopoints?: pointsCreateNestedOneWithoutUsers_users_pointsTopointsInput
  }

  export type usersUncheckedCreateWithoutOrganizersInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    points?: number | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsUncheckedCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrganizersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrganizersInput, usersUncheckedCreateWithoutOrganizersInput>
  }

  export type eventsUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: eventsWhereUniqueInput
    update: XOR<eventsUpdateWithoutOrganizerInput, eventsUncheckedUpdateWithoutOrganizerInput>
    create: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput>
  }

  export type eventsUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: eventsWhereUniqueInput
    data: XOR<eventsUpdateWithoutOrganizerInput, eventsUncheckedUpdateWithoutOrganizerInput>
  }

  export type eventsUpdateManyWithWhereWithoutOrganizerInput = {
    where: eventsScalarWhereInput
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type eventsScalarWhereInput = {
    AND?: eventsScalarWhereInput | eventsScalarWhereInput[]
    OR?: eventsScalarWhereInput[]
    NOT?: eventsScalarWhereInput | eventsScalarWhereInput[]
    id?: IntFilter<"events"> | number
    organizer_id?: IntFilter<"events"> | number
    event_picture?: StringFilter<"events"> | string
    title?: StringFilter<"events"> | string
    location?: StringFilter<"events"> | string
    start_date?: DateTimeFilter<"events"> | Date | string
    end_date?: DateTimeFilter<"events"> | Date | string
    category?: EnumCategoryFilter<"events"> | $Enums.Category
    description?: StringFilter<"events"> | string
  }

  export type usersUpsertWithoutOrganizersInput = {
    update: XOR<usersUpdateWithoutOrganizersInput, usersUncheckedUpdateWithoutOrganizersInput>
    create: XOR<usersCreateWithoutOrganizersInput, usersUncheckedCreateWithoutOrganizersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrganizersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrganizersInput, usersUncheckedUpdateWithoutOrganizersInput>
  }

  export type usersUpdateWithoutOrganizersInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    points_users_pointsTopoints?: pointsUpdateOneWithoutUsers_users_pointsTopointsNestedInput
  }

  export type usersUncheckedUpdateWithoutOrganizersInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUncheckedUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutPoints_points_user_idTousersInput = {
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    organizers?: organizersCreateNestedManyWithoutUsersInput
    referral_coupons?: referral_couponsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    points_users_pointsTopoints?: pointsCreateNestedOneWithoutUsers_users_pointsTopointsInput
  }

  export type usersUncheckedCreateWithoutPoints_points_user_idTousersInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    points?: number | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    organizers?: organizersUncheckedCreateNestedManyWithoutUsersInput
    referral_coupons?: referral_couponsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPoints_points_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPoints_points_user_idTousersInput, usersUncheckedCreateWithoutPoints_points_user_idTousersInput>
  }

  export type usersCreateWithoutPoints_users_pointsTopointsInput = {
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    organizers?: organizersCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPoints_users_pointsTopointsInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
    attendees?: attendeesUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    organizers?: organizersUncheckedCreateNestedManyWithoutUsersInput
    points_points_user_idTousers?: pointsUncheckedCreateNestedOneWithoutUsers_points_user_idTousersInput
    referral_coupons?: referral_couponsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPoints_users_pointsTopointsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPoints_users_pointsTopointsInput, usersUncheckedCreateWithoutPoints_users_pointsTopointsInput>
  }

  export type usersCreateManyPoints_users_pointsTopointsInputEnvelope = {
    data: usersCreateManyPoints_users_pointsTopointsInput | usersCreateManyPoints_users_pointsTopointsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutPoints_points_user_idTousersInput = {
    update: XOR<usersUpdateWithoutPoints_points_user_idTousersInput, usersUncheckedUpdateWithoutPoints_points_user_idTousersInput>
    create: XOR<usersCreateWithoutPoints_points_user_idTousersInput, usersUncheckedCreateWithoutPoints_points_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPoints_points_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPoints_points_user_idTousersInput, usersUncheckedUpdateWithoutPoints_points_user_idTousersInput>
  }

  export type usersUpdateWithoutPoints_points_user_idTousersInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    organizers?: organizersUpdateManyWithoutUsersNestedInput
    referral_coupons?: referral_couponsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    points_users_pointsTopoints?: pointsUpdateOneWithoutUsers_users_pointsTopointsNestedInput
  }

  export type usersUncheckedUpdateWithoutPoints_points_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    organizers?: organizersUncheckedUpdateManyWithoutUsersNestedInput
    referral_coupons?: referral_couponsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutPoints_users_pointsTopointsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutPoints_users_pointsTopointsInput, usersUncheckedUpdateWithoutPoints_users_pointsTopointsInput>
    create: XOR<usersCreateWithoutPoints_users_pointsTopointsInput, usersUncheckedCreateWithoutPoints_users_pointsTopointsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutPoints_users_pointsTopointsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutPoints_users_pointsTopointsInput, usersUncheckedUpdateWithoutPoints_users_pointsTopointsInput>
  }

  export type usersUpdateManyWithWhereWithoutPoints_users_pointsTopointsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutPoints_users_pointsTopointsInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    profile_picture?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    referral_code?: StringNullableFilter<"users"> | string | null
    refered_by?: StringNullableFilter<"users"> | string | null
    points?: IntNullableFilter<"users"> | number | null
    is_verified?: BoolFilter<"users"> | boolean
    role?: EnumRoleFilter<"users"> | $Enums.Role
  }

  export type attendeesCreateManyEventsInput = {
    id?: number
    user_id: number
    ticket_qty: bigint | number
    total_paid: bigint | number
  }

  export type reviewsCreateManyEventsInput = {
    id?: number
    user_id: number
    rating: number
    comment: string
  }

  export type ticket_typesCreateManyEventsInput = {
    id?: number
    created_at?: Date | string
    type_name: string
    quota: number
    price: number
    description?: string
  }

  export type transaction_detailCreateManyEventsInput = {
    id?: number
    code: string
    is_attend?: boolean
  }

  export type transactionsCreateManyEventsInput = {
    id?: number
    user_id: number
    ticket_id: number
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
  }

  export type vouchersCreateManyEventsInput = {
    id?: number
    code: number
    disc_amount: number
    start_date: Date | string
    end_date: Date | string
    quota: bigint | number
  }

  export type attendeesUpdateWithoutEventsInput = {
    ticket_qty?: BigIntFieldUpdateOperationsInput | bigint | number
    total_paid?: BigIntFieldUpdateOperationsInput | bigint | number
    users?: usersUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type attendeesUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticket_qty?: BigIntFieldUpdateOperationsInput | bigint | number
    total_paid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type attendeesUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticket_qty?: BigIntFieldUpdateOperationsInput | bigint | number
    total_paid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type reviewsUpdateWithoutEventsInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type reviewsUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ticket_typesUpdateWithoutEventsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ticket_typesUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ticket_typesUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type transaction_detailUpdateWithoutEventsInput = {
    code?: StringFieldUpdateOperationsInput | string
    is_attend?: BoolFieldUpdateOperationsInput | boolean
    transactions?: transactionsUpdateManyWithoutTicketsNestedInput
  }

  export type transaction_detailUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    is_attend?: BoolFieldUpdateOperationsInput | boolean
    transactions?: transactionsUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type transaction_detailUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    is_attend?: BoolFieldUpdateOperationsInput | boolean
  }

  export type transactionsUpdateWithoutEventsInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notifications?: notificationsUpdateManyWithoutTransactionsNestedInput
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
    tickets?: transaction_detailUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notifications?: notificationsUncheckedUpdateManyWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type vouchersUpdateWithoutEventsInput = {
    code?: IntFieldUpdateOperationsInput | number
    disc_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type vouchersUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    disc_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type vouchersUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    disc_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type notificationsCreateManyTransactionsInput = {
    id?: number
    user_id: number
    message: string
  }

  export type notificationsUpdateWithoutTransactionsInput = {
    message?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsUncheckedUpdateManyWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type attendeesCreateManyUsersInput = {
    id?: number
    event_id: number
    ticket_qty: bigint | number
    total_paid: bigint | number
  }

  export type notificationsCreateManyUsersInput = {
    id?: number
    transaction_id: number
    message: string
  }

  export type organizersCreateManyUsersInput = {
    id?: number
    created_at?: Date | string
    organizer_name: string
    description: string
    profile_img?: string | null
  }

  export type referral_couponsCreateManyUsersInput = {
    id?: number
    code: string
    expires_date: Date | string
    disc_amunt?: number
  }

  export type reviewsCreateManyUsersInput = {
    id?: number
    event_id: number
    rating: number
    comment: string
  }

  export type transactionsCreateManyUsersInput = {
    id?: number
    event_id: number
    ticket_id: number
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
  }

  export type attendeesUpdateWithoutUsersInput = {
    ticket_qty?: BigIntFieldUpdateOperationsInput | bigint | number
    total_paid?: BigIntFieldUpdateOperationsInput | bigint | number
    events?: eventsUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type attendeesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    ticket_qty?: BigIntFieldUpdateOperationsInput | bigint | number
    total_paid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type attendeesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    ticket_qty?: BigIntFieldUpdateOperationsInput | bigint | number
    total_paid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type notificationsUpdateWithoutUsersInput = {
    message?: StringFieldUpdateOperationsInput | string
    transactions?: transactionsUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type organizersUpdateWithoutUsersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUpdateManyWithoutOrganizerNestedInput
  }

  export type organizersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type organizersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referral_couponsUpdateWithoutUsersInput = {
    code?: StringFieldUpdateOperationsInput | string
    expires_date?: DateTimeFieldUpdateOperationsInput | Date | string
    disc_amunt?: IntFieldUpdateOperationsInput | number
  }

  export type referral_couponsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expires_date?: DateTimeFieldUpdateOperationsInput | Date | string
    disc_amunt?: IntFieldUpdateOperationsInput | number
  }

  export type referral_couponsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expires_date?: DateTimeFieldUpdateOperationsInput | Date | string
    disc_amunt?: IntFieldUpdateOperationsInput | number
  }

  export type reviewsUpdateWithoutUsersInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    events?: eventsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type reviewsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type transactionsUpdateWithoutUsersInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notifications?: notificationsUpdateManyWithoutTransactionsNestedInput
    events?: eventsUpdateOneRequiredWithoutTransactionsNestedInput
    tickets?: transaction_detailUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notifications?: notificationsUncheckedUpdateManyWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type transactionsCreateManyTicketsInput = {
    id?: number
    user_id: number
    event_id: number
    total_price: number
    payment_proof: string
    expired_date: Date | string
    invoice_id: string
    status?: $Enums.Status
  }

  export type transactionsUpdateWithoutTicketsInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notifications?: notificationsUpdateManyWithoutTransactionsNestedInput
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
    events?: eventsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notifications?: notificationsUncheckedUpdateManyWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateManyWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    payment_proof?: StringFieldUpdateOperationsInput | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type eventsCreateManyOrganizerInput = {
    id?: number
    event_picture: string
    title: string
    location: string
    start_date: Date | string
    end_date: Date | string
    category?: $Enums.Category
    description: string
  }

  export type eventsUpdateWithoutOrganizerInput = {
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUpdateManyWithoutEventsNestedInput
    reviews?: reviewsUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
    attendees?: attendeesUncheckedUpdateManyWithoutEventsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutEventsNestedInput
    ticket_types?: ticket_typesUncheckedUpdateManyWithoutEventsNestedInput
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutEventsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutEventsNestedInput
    vouchers?: vouchersUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateManyWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_picture?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    description?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyPoints_users_pointsTopointsInput = {
    id?: number
    first_name: string
    last_name: string
    profile_picture?: string | null
    email: string
    password: string
    referral_code?: string | null
    refered_by?: string | null
    is_verified?: boolean
    role?: $Enums.Role
  }

  export type usersUpdateWithoutPoints_users_pointsTopointsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    organizers?: organizersUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPoints_users_pointsTopointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    attendees?: attendeesUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    organizers?: organizersUncheckedUpdateManyWithoutUsersNestedInput
    points_points_user_idTousers?: pointsUncheckedUpdateOneWithoutUsers_points_user_idTousersNestedInput
    referral_coupons?: referral_couponsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutPoints_users_pointsTopointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    refered_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
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