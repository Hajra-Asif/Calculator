// var equal = document.getElementById("isequal").value ;

// if(equal === undefined || equal === ""){
//     document.getElementById("isequal").value = "Syntax Error"
// }

var equal = document.getElementById("isequal").innerText;

if(equal === undefined || equal === ""){
    document.getElementById("isequal").innerText = "Syntax Error";
}
