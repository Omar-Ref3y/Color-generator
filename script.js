const Container = document.querySelector(".container")
const removeColor=document.querySelector(".remove")
const addColor=document.querySelector(".add")
const notice=document.querySelector(".notice")
var colorNum=3
if (!localStorage.hasOwnProperty("colorNum")) {
    localStorage.setItem("colorNum",3)
}

for (let index = 0; index < colorNum; index++) {
    const colorEl = document.createElement("div")
    colorEl.classList.add("color-container")
    Container.appendChild(colorEl)
}
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        if (colorNum >= 0 && colorNum < 6) {
            colorNum++;
            localStorage.setItem("colorNum",colorNum)
            generateEle()
        }
        console.log(colorNum)
        localStorage.setItem("colorNum",colorNum)
    }
});
document.addEventListener("keydown", function (event) {
    if (event.altKey) {
        notice.style.display="none"
        if (colorNum > 1 && colorNum <= 6) {
            localStorage.setItem("colorNum",colorNum--)
            removeEle()
        }
        console.log(colorNum)
        localStorage.setItem("colorNum",colorNum)
    }
})
addColor.addEventListener("click", function (event) {

        if (colorNum >= 0 && colorNum < 6) {
            colorNum++;
            localStorage.setItem("colorNum",colorNum)
            generateEle()
        }
        console.log(colorNum)
        localStorage.setItem("colorNum",colorNum)
    });
removeColor.addEventListener("click", function (event) {
        if (colorNum > 1 && colorNum <= 6) {
            localStorage.setItem("colorNum",colorNum--)
            removeEle()
        }
        console.log(colorNum)
        localStorage.setItem("colorNum",colorNum)
})
function removeEle() {
    notice.style.display="none"
    const removeColor = document.querySelector(`.color-container:nth-child(${localStorage.getItem("colorNum")})`)
    Container.removeChild(removeColor)
}
function generateEle() {
    notice.style.display="none"
    const colorEl = document.createElement("div")
    colorEl.classList.add("color-container")
    Container.appendChild(colorEl)
    const newColorCode = randomColor()
    colorEl.style.backgroundColor = "#" + newColorCode
    colorEl.innerText = "#" + newColorCode
}

generateColors()
function generateColors() {
let deColor = document.querySelectorAll(".color-container")
    deColor.forEach((ele) => {
        const newColorCode = randomColor()
        ele.style.backgroundColor = "#" + newColorCode
        ele.innerText = "#" + newColorCode
    });
}

function randomColor() {
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let color = ""
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNum, randomNum + 1)
    }
    return color;
}
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        generateColors()
        notice.style.display="none"
    }
})
document.addEventListener("touchstart", function (event) {
    generateColors()
    notice.style.display="none"
})

