// const createPassword = (name:string, age:number | string) => `${name}${age}`;

// createPassword("Jack", 31);

///////


// const createPassword = (name:string = "Max", age:number | string = 20) => `${name}${age}`;

// createPassword();
// createPassword(null);

/////// Опциональные аргументы

// const createPassword = (name:string, age?:number): string => `${name}${age}`;

// createPassword("Jack");

/////// Остаточные параметры 

// Rest без TS

// const createSkillsFrontend = (name, ...skills) => `${name}, my skills are ${skills.join()}`

// createSkillsFrontend("Jack", "JS", "React", "GIT", "Next.js");

// Rest c TS

// const createSkillsFrontend = (name: string, ...skills: string[]) => `${name}, my skills are ${skills.join()}`

// createSkillsFrontend("Jack", "JS", "React", "GIT", "Next.js");

/////////

// let myFunc: (firstArg: string) => void;

// function oldFunc(name:string): void {
//     alert(`${name} nice to meet you!`);
// }

// myFunc = oldFunc;

