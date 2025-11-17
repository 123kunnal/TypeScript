interface Base{
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}
// Pick<T, K> creates a new type with only the selected keys
// lets u pick from both types and interface
type UpdatedProps=Pick<Base,'name'|'age'|'email'>;
function UpdateUser(updatedProps:UpdatedProps){
    //hit the database to update the user
}
//have to givre all 3 
UpdateUser({
    name:"kunnal",
    age:20,
    email:"heck@gmail.m"
})