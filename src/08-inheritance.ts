export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Cat extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  meow(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('meow!');
    }
  }
}

const pooh = new Animal('fifi');
pooh.move();
console.log(pooh.greeting());

const tiger = new Cat('tiger', 'marco');
tiger.move();
console.log(tiger.greeting());
tiger.meow(5);
console.log(tiger.owner);
