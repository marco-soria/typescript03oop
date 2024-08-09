export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('dooo');
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
    this.doSomething();
  }

  move() {
    // code
    console.log('moving as a Cat');
    super.move();
  }
}

const tiger = new Cat('tiger', 'marco');
// tiger.name = 'otro nombre';
tiger.meow(1);
// tiger.doSomething();
tiger.move();
