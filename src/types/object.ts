type User = { name: string; age: number };
type Keys = keyof User; // union type from type
const a: Keys = 'age';

const user = { name: 'Ada', age: 28 };
const user1 = { name: 'Ada', age: 28 } as const;
type uKeys = keyof typeof user; // union type from object
type uValues = typeof user[keyof typeof user];
type u1Values = typeof user1[keyof typeof user1]; // union type from values of object

type Client = typeof user & { id: string };
type Client1 = User & { id: string }; // user type is hidden here

type Prettify<T> = {
  [K in keyof T]: T[K];
};
type Client1Prettify = Prettify<Client1>;

type ForceRequired<T extends Record<string, any>> = {
  [P in keyof T]-?: T[P] extends object
    ? ForceRequired<T[P]>
    : T[P] extends Array
    ? ForceRequired<T[P][number]>
    : NonNullable<T[P]>;
};
