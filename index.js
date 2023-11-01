// code your solution here
function saturdayFun(){
    console.log("function exists")

}
function saturdayFun(activity="roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(){
    console.log("function exists")
}
function mondayWork(place="go to the office"){
    return (`This Monday, I will ${place}.`)
}

function wrapAdjective(){
    console.log('fuction exists')
}

function wrapAdjective(special){
   return function (string){
    return `You are ${special}${string}${special}!`
   }
   

}
