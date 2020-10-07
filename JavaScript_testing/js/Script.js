

function sayHello (event){
  document.getElementById("buttonSubmite").textContent="Submitted!"
  var name=document.getElementById("inName").value;
  console.log(event);
  console.log(name);
  // var message= "<h1>"+name+" ,queres fazer cocó? </h1>";
  // console.log(message);
  // document.getElementById("Resposta").innerHTML=message;
  document.getElementById("Resposta").innerHTML="<h1>"+name+" ,queres fazer cocó? </h1>";
}

document.querySelector("#buttonSubmite").addEventListener("click", sayHello);
document.querySelector("#inName").addEventListener("keypress", function (e) {
  if(e.key=="Enter")
  sayHello();
});

// document.querySelector("#buttonSubmite").onclick=sayHello;