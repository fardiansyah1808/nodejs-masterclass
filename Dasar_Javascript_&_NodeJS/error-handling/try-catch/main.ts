// Try Catch
// 1. Syntax Error
// 2. Reference Error
// 3. Type Error
// 4. Range Error
// 5. Custom Error


function exampleSyntaxError(){
    console.log(2*3)
}

function exampleReferenceError(){
    console.log("before declaration 🔮");
    console.log(noVariable);
    console.log("after declaration 🔮");
}

function exampleTypeError(){
    console.log("before declaration 🔮");
    console.log(null.print());
    console.log("after declaration 🔮");
}

function exampleRangeError(n:number){
    console.log("before declaration 🔮");
    if (n < 0) throw new RangeError("Number is negative");
    console.log("after declaration 🔮");
}

function tryCatchExample(){
    try{
        exampleRangeError(1);
    }catch(error){
        console.log(error);
    } finally{
        console.log("after declaration 🔮");
    }
}

function parentFunction(){
    try{
        childFunction();
    }catch(error){
        console.log(error);
    }
}

function childFunction(){
    try{
        exampleRangeError(-1);
    }catch(error){
        throw new Error("Error from child function");
    }
}

function checkingErrorType(){
    try{
        exampleTypeError();
    }catch(error){
        switch(error.name){
            case "SyntaxError":
                console.log("Syntax Error");
                break;
            case "RangeError":
                console.log("Range Error");
                break;
            case "ReferenceError":
                console.log("Reference Error");
                break;
            case "TypeError":
                console.log("Type Error");
                break;
            default:
                console.log("Unknown Error");
        }
    }
}

checkingErrorType();
