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


