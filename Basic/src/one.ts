interface User {
    name: string;
    age: number;
}

function addAge(p1: User, p2: User): number {
    return p1.age + p2.age;
}

const u1: User = { name: "Kunal", age: 20 };
const u2: User = { name: "Rahul", age: 22 };

console.log(addAge(u1, u2));  // Output: 42
