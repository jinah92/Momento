const age = prompt("How old are you?");

if(age >= 18 && age <= 21){
    console.log("you can drink, but you should not");
}else if(age > 21) {
    console.log("go ahead");
}else {
    console.log("too young");
}
const title = document.querySelector("#title");


function handleClick() {
    title.style.color = "blue";
    // title.style.color = "red";
}
// function handleResize(){
//     console.log(event);
//     console.log('I have been resize');
// }

title.addEventListener("click", handleClick);
// window.addEventListener("resize", handleResize);


// const title = document.getElementById("title");
// title.innerHTML = "Hi, From JS";
// title.style.color = 'red';
// document.title = "I own you now";


// console.dir(document);
// console.log(title);
// console.dir(title);