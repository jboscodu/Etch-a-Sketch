let generateGrid=()=>{
    let parentDiv=document.querySelector(".container")
    console.log(parentDiv);
    const sqr=document.createElement("div")
    parentDiv.appendChild(sqr)
    sqr.classList.add("square")
}
let removeExistingOne=()=>{
    let  parentDiv=document.querySelector(".container")
    parentDiv.innerHTML=""
}





let generateSquares=(nberOfSquares)=>{
const totalWidth=960
const toalSqr=nberOfSquares * nberOfSquares
let sqrSize=totalWidth / nberOfSquares
for( let i=1;i <= nberOfSquares;i++){
    console.log("reaching out");
    generateGrid()
}

const square=document.querySelectorAll(".square")
square.forEach((square)=>{
    square.style.width= sqrSize + "px"
    square.style.height= sqrSize + "px"
})
 
}


const handleUserInput=()=>{
    const value= parseInt( window.prompt("enter nber of squares you want"))
    if( isNaN (value) || value == 0 || value  > 100  ){
    window.alert("please  enter below a hundred")
    }else{
        removeExistingOne()
        generateSquares(value)
    }
}