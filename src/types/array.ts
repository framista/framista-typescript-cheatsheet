const roles = ['admin', 'owner', 'user'] as const;
type Role = typeof roles; // it requires the whole array
type Role1 = typeof roles[number]; // it creates enum
const r: Role = ['admin', 'owner', 'user'];
const r1: Role1 = 'admin';

const func = <T extends string>(key: T, keys: T[]) => {
  console.log(key);
};
func('a', ['b', 'c']); // the first arg doesn't need to be included in array
const func1 = <T extends string>(key: NoInfer<T>, keys: T[]) => {
  console.log(key);
};
func1('b', ['b', 'c']); // in first argument you can add only sth from array (second arg)
