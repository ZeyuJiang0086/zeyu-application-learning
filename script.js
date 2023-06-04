function replaceContentById(id,value){
    document.getElementById(id).innerHTML = value;
}

try{
    replaceContentById("demo","Zeyu+");
    replaceContentById("demo2","Qiutong");
}
catch(err){
    document.getElementById("demo").innerHTML = err.message;
}

function printInput(){
    let message = document.getElementById("userInput").value;
    replaceContentById("demo",message);
}

/*
create two demos to try module
 */

import {name,age} from "./person.js";
let text = "sample test" + name + age;
document.getElementById("demo3").innerHTML = text;

import message from "./message.js";
document.getElementById("demo4").innerHTML = message();