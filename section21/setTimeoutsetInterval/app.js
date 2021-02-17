console.log("HELLO!!!...");

setTimeout(() => {
    console.log("...are you still there?")
}, 3000);

console.log("GOODBYE!!");

let id = setInterval(() => {
    console.log(Math.random())
}, 2000);



setTimeout(() => {
    clearInterval(id)
}, 10000);