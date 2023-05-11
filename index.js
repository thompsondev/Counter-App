// document.getElementById("counter").innerText = 5
// document.getElementById("game").innerText = 10
// let count = 0
// let myAge = 24
// console.log(count)
// console.log(myAge)

// let myAge = 10
// let humanDogRatio = 10

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)
// document.getElementById("game").innerText = myDogAge

// let bonusPoint = 50
// bonusPoint = bonusPoint + 50
// bonusPoint = bonusPoint - 75
// bonusPoint = bonusPoint + 45

// console.log(bonusPoint)
let countEl = document.getElementById("counter")
let saveEl = document.getElementById("save-btn")
let count = 0


function increment() {
    count +=  1
    countEl.textContent = count 
    console.log("clicked")
}
let saver = document.getElementById("save-el")


function save() {
    let record = count + " - " 
    saver.textContent += record 
    countEl.textContent = 0
    count = 0
    console.log("saved")
}

