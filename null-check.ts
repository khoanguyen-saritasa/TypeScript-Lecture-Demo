type User = {
    name: string;
    age: number;
}

type CurrentUser = User | null

const currentUser: CurrentUser  = null

function getUser(): User {
    if(currentUser == null){
        throw Error("There is no user");
    }
    return currentUser
}
