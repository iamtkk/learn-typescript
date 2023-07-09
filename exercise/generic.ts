function generic<T extends { length: number }>(arr: T) {
  return arr.length;
}

// console.log(generic([1, 2, 3]));

type DeveloperKeys = keyof { name: string; skill: string };

function printKey<T extends keyof { name: string; skill: string }>(value: T) {
  console.log(value);
}

printKey("name");

