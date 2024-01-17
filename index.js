let divPaper = document.getElementById("divPaper");
let divRock = document.getElementById("divRock");
let divScissors = document.getElementById("divScissors");

// Adding class to resize
divPaper.childNodes[1].classList.add("optedStyle")
divRock.childNodes[1].classList.add("optedStyle")
divScissors.childNodes[1].classList.add("optedStyle")

// Array for choices
let svgArray = [
    divPaper.innerHTML,
    divRock.innerHTML,
    divScissors.innerHTML
]

let i, j, k=0;
// Click events for choices
divPaper.addEventListener("click", () => {
    document.getElementById("userTurn").style.display = "none"
    document.getElementById("compTurn").style.display = "flex"
    document.getElementById("userOpted").innerHTML = svgArray[0]
    console.log(document.getElementById("paper").classList)
    i = 0;
    computer()
})
divRock.addEventListener("click", () => {
    document.getElementById("userTurn").style.display = "none"
    document.getElementById("compTurn").style.display = "flex"
    document.getElementById("userOpted").innerHTML = svgArray[1]
    i = 1;
    computer()
})
divScissors.addEventListener("click", () => {
    document.getElementById("userTurn").style.display = "none"
    document.getElementById("compTurn").style.display = "flex"
    document.getElementById("userOpted").innerHTML = svgArray[2]
    i = 2;
    computer()
})

// Function for random computer choices
function computer() {
    let svgRandomIndex = Math.floor(Math.random() * svgArray.length);
    setTimeout(() => {
        j = svgRandomIndex;
        document.getElementById("compOpted").innerHTML = svgArray[svgRandomIndex];
        if ((i==0 & j==0) || (i==1 & j==1) || (i==2 & j==2)) {
            document.getElementById("result").style.display = "flex"
            document.getElementById("winLoss").innerText = "Draw"
        }
        else if ((i==0 && j==1) || (i==1 & j==2) || (i==2 & j==0)) {
            document.getElementById("result").style.display = "flex"
            document.getElementById("winLoss").innerText = "You Win"
            document.getElementById("yourChoice").style.boxShadow = "0 0 0 3.5vw hsla(0, 0%, 3%, 0.207), 0 0 0 7vw hsla(0, 0%, 3%, 0.157), 0 0 0 10.5vw hsla(0, 0%, 3%, 0.107)"
            document.getElementById("scoreNum").innerText = ++k;
        }
        else if ((i==0 && j==2) || (i==1 & j==0) || (i==2 & j==1)) {
            document.getElementById("result").style.display = "flex"
            document.getElementById("winLoss").innerText = "You Lose"
            document.getElementById("compChoice").style.boxShadow = "0 0 0 3.5vw hsla(0, 0%, 3%, 0.207), 0 0 0 7vw hsla(0, 0%, 3%, 0.157), 0 0 0 10.5vw hsla(0, 0%, 3%, 0.107)"
            document.getElementById("scoreNum").innerText = --k;
        }
    }, 1000);
}

// let paper = document.getElementById("paper");
// let rock = document.getElementById("rock");
// let scissors = document.getElementById("scissors");
// let svgArray = [
//         [paper.innerHTML,"1vw solid hsl(230, 89%, 65%)","0px 0.5vw 0 0.5px hsl(230, 89%, 62%), inset 0px 0.5vw 0px 0.5px hsla(228, 25%, 31%, 0.1)"],
//         [rock.innerHTML,"1vw solid hsl(349, 70%, 56%)","0px 0.5vw 0 0.5px hsl(349, 71%, 52%), inset 0px 0.5vw 0px 0.5px hsla(228, 25%, 31%, 0.1)"],
//         [scissors.innerHTML,"1vw solid hsl(40, 84%, 53%)","0px 0.5vw 0 0.5px hsl(39, 89%, 49%), inset 0px 0.5vw 0px 0.5px hsla(228, 25%, 31%, 0.1)"]
//     ]
// let i, j, k=0;
// paper.addEventListener("click", () => {
//     document.getElementById("userTurn").style.display = "none"
//     document.getElementById("compTurn").style.display = "flex"
//     document.getElementById("userOpted").innerHTML = svgArray[0][0]
//     document.getElementById("userOpted").style.border = svgArray[0][1]
//     document.getElementById("userOpted").style.boxShadow = svgArray[0][2]
//     i = 0;
//     computer()
// })
// rock.addEventListener("click", () => {
//     document.getElementById("userTurn").style.display = "none"
//     document.getElementById("compTurn").style.display = "flex"
//     document.getElementById("userOpted").innerHTML = svgArray[1][0]
//     document.getElementById("userOpted").style.border = svgArray[1][1]
//     document.getElementById("userOpted").style.boxShadow = svgArray[1][2]
//     i = 1;
//     computer()
// })
// scissors.addEventListener("click", () => {
//     document.getElementById("userTurn").style.display = "none"
//     document.getElementById("compTurn").style.display = "flex"
//     document.getElementById("userOpted").innerHTML = svgArray[2][0]
//     document.getElementById("userOpted").style.border = svgArray[2][1]
//     document.getElementById("userOpted").style.boxShadow = svgArray[2][2]
//     i = 2;
//     computer()
// })

// function computer() {
//     let svgRandomIndex = Math.floor(Math.random() * svgArray.length);
//     setTimeout(() => {
//         j = svgRandomIndex;
//         document.getElementById("compOpted").innerHTML = svgArray[svgRandomIndex][0];
//         document.getElementById("compOpted").classList.add("svgMainStyle")
//         document.getElementById("compOpted").style.border = svgArray[svgRandomIndex][1];
//         document.getElementById("compOpted").style.boxShadow = svgArray[svgRandomIndex][2];
//         if ((i==0 & j==0) || (i==1 & j==1) || (i==2 & j==2)) {
//             document.getElementById("result").style.display = "flex"
//             document.getElementById("winLoss").innerText = "Draw"
//         }
//         else if ((i==0 && j==1) || (i==1 & j==2) || (i==2 & j==0)) {
//             document.getElementById("result").style.display = "flex"
//             document.getElementById("winLoss").innerText = "You Win"
//             document.getElementById("yourChoice").style.boxShadow = "0 0 0 3.5vw hsla(0, 0%, 3%, 0.207), 0 0 0 7vw hsla(0, 0%, 3%, 0.157), 0 0 0 10.5vw hsla(0, 0%, 3%, 0.107)"
//             document.getElementById("scoreNum").innerText = ++k;
//         }
//         else if ((i==0 && j==2) || (i==1 & j==0) || (i==2 & j==1)) {
//             document.getElementById("result").style.display = "flex"
//             document.getElementById("winLoss").innerText = "You Lose"
//             document.getElementById("compChoice").style.boxShadow = "0 0 0 3.5vw hsla(0, 0%, 3%, 0.207), 0 0 0 7vw hsla(0, 0%, 3%, 0.157), 0 0 0 10.5vw hsla(0, 0%, 3%, 0.107)"
//             document.getElementById("scoreNum").innerText = --k;
//         }
//     }, 1000);
// }

// Rules btn js
document.getElementById("rulesBtn").addEventListener("click", () => {
    document.getElementById("rules").style.display = "flex"
})
// Close btn js
document.getElementById("close").addEventListener("click", () => {
    document.getElementById("rules").style.display = "none"
})
// Play again js
document.getElementById("restart").addEventListener("click", ()=>{
    document.getElementById("userTurn").style.display = "flex"
    document.getElementById("compTurn").style.display = "none"
    document.getElementById("result").style.display = "none"
    document.getElementById("compOpted").innerHTML = ""
    document.getElementById("yourChoice").style.boxShadow = "none"
    document.getElementById("compChoice").style.boxShadow = "none"
})
// Reset js
document.getElementById("reset").addEventListener("click", ()=>{
    document.getElementById("userTurn").style.display = "flex"
    document.getElementById("compTurn").style.display = "none"
    document.getElementById("result").style.display = "none"
    document.getElementById("compOpted").innerHTML = ""
    document.getElementById("yourChoice").style.boxShadow = "none"
    document.getElementById("compChoice").style.boxShadow = "none"
    k=0
    document.getElementById("scoreNum").innerText = k;
})


