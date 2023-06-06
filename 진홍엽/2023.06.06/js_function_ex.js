sayHello();

function sayHello(name) {
    let newName = name || "friend";
    let msg = `Hello, ${newName}`;
    console.log(msg);
  }
  
let sayHello = function(name = "friend") {
  let msg = `Hello, ${name}`;
  console.log(msg);
};