 class LoginError extends Error{
    username:string;

    constructor(message:string, username:string){
        super(message);
        this.username = username;
    }
 }
 
 function login(username:string,password:string){
    let expectedUsername = "admin";
    let expectedPassword = "1234";
    if(expectedUsername !== username || expectedPassword !== password) throw new LoginError("Invalid username or password", username);
    console.log("Login successful");
 }

try {
    login("admin","22");
} catch (error) {
    if(error instanceof LoginError){
        let username = error.username;
        console.log("Username:", username, "is invalid");
        console.log(error.stack);

    }else{
        console.log(error);
    }
}