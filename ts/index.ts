// Basic types
// const berk = 'Berk';

// Function types

// const add = (a: number, b: number): number => {
//     return a + b;
// };
//
// const joinStrings = (a: string, b: string): string => {
//     return a + b;
// }
//
// function add(a: number, b:number): number {
//     return a + b;
// }
//
// function joinStrings(a: string, b: string):string {
//     return a + b;
// }

// Objects (problems with defining object types)

// const post: {
//     title: string;
//     daysOld: number;
//     published: boolean;
// } = {
//     title: 'Latest Typescript News',
//     daysOld: 10,
//     published: true
// };
//
// const printPost = (postToPrint: {title: string; daysOld: number; published: boolean}) => {
//   return `${postToPrint.title} (${postToPrint.daysOld}) days old.`;
// };

// Objects (with type solution using interface)
//
// interface Post {
//     title: string;
//     daysOld: number;
//     published: boolean;
// }
//
// const post: Post = {
//     title: 'berk',
//     daysOld: 5,
//     published: true
// };
//
// const printPost = (postToPrint: Post) => {
//   return `${postToPrint.title} (${postToPrint.daysOld}) days old.`;
// };
//
// printPost(post);

// Classes and properties (basic)

// class Car {
//     // color: string;
//     // year: number;
//     //
//     // constructor(color: string, year: number) {
//     //     this.color = color;
//     //     this.year = year;
//     // }
//
//     color = 'red';
//     year = 2000;
//
//     drive() {
//         console.log('Vroom');
//     }
// }
//
// const myCar = new Car();
//
// console.log(myCar.color);

// Classes (public and private)

// class Car {
//     constructor(public color: string, private year: number) {}
//
//     public drive() {
//         this.putInGear();
//         this.pressPedal();
//         this.turnWheel();
//     }
//
//     private putInGear() {
//
//     }
//
//     private pressPedal() {
//
//     }
//
//     private turnWheel() {
//
//     }
// }
//
// const myCar = new Car('red', 2000);
//
// myCar.drive();

// Decorators

// const Component = (target: any) => {
//     console.log(target);
// };
//
//
// @Component
// class Car {
//
// }

// Strict mode
//
// class Car {
//     year = 10;
//
//     drive(speed: number) {
//         console.log(`Driving at ${speed});
//     }
// }
//
// const myCar = new Car();
//
// console.log(myCar.year);


// Combining interfaces and classes

// interface Driveable {
//     speed: number;
//     drive(): string;
// }
//
// class Car implements Driveable {
//     speed = 10;
//
//     drive() {
//         return `I am driving at ${this.speed}`;
//     }
// }
//
// const myCar  = new Car();
//
// const startDriving = (driveable: Driveable) => {
//     driveable.drive();
// };
//
// startDriving(myCar);

// Class Generics

// class NumberHolder {
//     value: number;
// }
//
// const numberHolder = new NumberHolder();
//
// numberHolder.value = 10;
//
// class StringHolder {
//     value: string;
// }
//
// const stringHolder = new StringHolder();
//
// stringHolder.value = 'berk';
//
// class BooleanHolder {
//     value: boolean;
// }
//
// const booleanHolder = new BooleanHolder();
//
// booleanHolder.value = false;

// Instead of these ^^, create a generic class with <> syntax

// class ValueHolder<TypeForValueProperty> {
//     value: TypeForValueProperty;
// }
//
// const stringHolder = new ValueHolder<string>();

// Function generics

// const numberWrapper = (value: number): number[] => {
//     return [value];
// };
//
// const stringWrapper = (value: string): string[] => {
//     return [value];
// };
//
// const booleanWrapper = (value: boolean): boolean[] => {
//     return [value];
// };
//
// const valueWrapper = <valueType>(value: valueType): valueType[] => {
//     return [value];
// };
//
// valueWrapper<number>(5);
// valueWrapper<string>('Berk');
// valueWrapper<boolean>(false);