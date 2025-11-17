// Record lets  u give a cleaner type to objects
type User={
    village:string,
    age:number,
    email:string
}
// Used to have key value pairs
// Can also use Records in TS
const users=new Map<string,User>();
users.set("kunnal",{village:"morta",age:20,email:"kunnal@z.com"})
users.set("samay",{village:"sihani",age:22,email:"samay@y.com"})

const out=users.get("kunnal")
console.log(out);
