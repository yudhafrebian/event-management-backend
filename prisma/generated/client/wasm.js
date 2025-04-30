
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AttendeesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  event_id: 'event_id',
  ticket_qty: 'ticket_qty',
  total_paid: 'total_paid'
};

exports.Prisma.EventsScalarFieldEnum = {
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

exports.Prisma.NotificationsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  transaction_id: 'transaction_id',
  message: 'message'
};

exports.Prisma.Referral_couponsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  code: 'code',
  expires_date: 'expires_date',
  disc_amunt: 'disc_amunt'
};

exports.Prisma.ReviewsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  event_id: 'event_id',
  rating: 'rating',
  comment: 'comment'
};

exports.Prisma.TransactionsScalarFieldEnum = {
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

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  profile_picture: 'profile_picture',
  email: 'email',
  password: 'password',
  referral_code: 'referral_code',
  refered_by: 'refered_by',
  is_verified: 'is_verified',
  role: 'role'
};

exports.Prisma.VouchersScalarFieldEnum = {
  id: 'id',
  event_id: 'event_id',
  code: 'code',
  disc_amount: 'disc_amount',
  start_date: 'start_date',
  end_date: 'end_date',
  quota: 'quota'
};

exports.Prisma.Ticket_typesScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  event_id: 'event_id',
  type_name: 'type_name',
  quota: 'quota',
  price: 'price',
  description: 'description'
};

exports.Prisma.Transaction_detailScalarFieldEnum = {
  id: 'id',
  code: 'code',
  event_id: 'event_id',
  is_attend: 'is_attend'
};

exports.Prisma.OrganizersScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  organizer_name: 'organizer_name',
  description: 'description',
  profile_img: 'profile_img',
  user_id: 'user_id'
};

exports.Prisma.CitiesScalarFieldEnum = {
  id: 'id',
  city: 'city',
  country: 'country'
};

exports.Prisma.PointsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  user_id: 'user_id',
  points_amount: 'points_amount',
  expire_date: 'expire_date'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Category = exports.$Enums.Category = {
  Music: 'Music',
  Tecnology: 'Tecnology',
  Culinary: 'Culinary',
  Arts: 'Arts',
  Sports: 'Sports',
  Education: 'Education'
};

exports.Status = exports.$Enums.Status = {
  Pending: 'Pending',
  Confirmating: 'Confirmating',
  Approved: 'Approved',
  Rejected: 'Rejected',
  Canceled: 'Canceled',
  Expired: 'Expired'
};

exports.Role = exports.$Enums.Role = {
  user: 'user',
  organizer: 'organizer'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
