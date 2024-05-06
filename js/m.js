/*
let round = Math.round(8.4);
let pow = Math.pow(4, 5)
let sqrt = Math.sqrt(16)
let abs = Math.abs(-134)
let ceil = Math.ceil(4.1)
let floor = Math.floor(4.9)
let min = Math.min(397,443,352,4654,74,7,47,34,54,363,6,473634,634,6)
let max = Math.max(397,443,352,4654,74,7,47,34,54,363,6,473634,634,6)


document.write(max);
*/
let byTag = document.getElementsByTagName("h1");
let byId = document.getElementById("idNomi");
let byClass = document.getElementsByClassName("classNomi");
let byQuary = document.querySelector("p");
let bySelectorAll = document.querySelectorAll("p");
let byAll = document.getElementsByTagName("h1").namedItem("idNomi")

byAll.style.backgroundColor = "green";
byAll.style.color = "black";
byAll.style.width = "350px"
byAll.style.height = "200px"
byAll.style.border = "5px solid royalblue"
byAll.style.textAlign = "center"
byAll.style.paddingTop = "50px"
byAll.style.boxSizing = "border-box"
byAll.style.textTransform = "uppercase"

console.log(byAll);