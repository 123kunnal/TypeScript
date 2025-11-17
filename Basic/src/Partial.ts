// Partial makes all properties of a type optional creating a type 
// with same properties but each marked as optional.
interface Base{
    //can never be changed can also do Readonly<Base> to apply for all
    readonly id:string,
    name:string,
    age:number,
    email:string,
    password:string
}

type UpdatedProps=Pick<Base,'name'|'age'|'email'>;
//Now we can update anyone by choice
type OptionalProps=Partial<UpdatedProps>;
function UpdateUser(updatedProps:OptionalProps){
    //hit the database to update the user
}
// can give all 3 or any
UpdateUser({
    name:"shen"
})