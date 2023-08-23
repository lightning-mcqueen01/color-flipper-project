let colors = ["red", "blue", "green", "brown", "yellow", "aqua", "#5e96e0", "black",
        "pink", "#c93750", "#c45ae1", "#b7d618"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random()*colors.length);
    // console.log(typeof colors[randomNumber])
    // console.log(document.getElementById('container1').style)
    document.getElementById('color1').innerText = colors[randomNumber];
    document.getElementById('container1').style.backgroundColor = colors[randomNumber];
    // console.log(document.body.style);

})