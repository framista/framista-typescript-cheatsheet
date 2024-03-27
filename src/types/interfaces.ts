interface Animal {
  name: string;
  age: number;
}
interface AnimalPart extends Omit<Animal, 'name'> {}
type A = {
  name: string;
  age: number;
};
type APart = Omit<A, 'age'>;
