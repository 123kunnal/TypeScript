interface Base{
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}

type UpdatedProps=Pick<Base,'ṇāṁē'|'age'|'email'>;
function UpdateUser(updatedProps:UpdatedProps){
    //hit the database to update the user
}