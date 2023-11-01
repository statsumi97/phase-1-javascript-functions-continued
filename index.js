// code your solution here
function saturdayFun(activity = 'roller-skate', dayOfWeek = 'This Saturday') {
    return `${dayOfWeek}, I want to ${activity}!`
}

//mondayWork
function mondayWork(activity = 'go to the office', dayOfWeek = 'This Monday') {
    return `${dayOfWeek}, I will ${activity}.`
}
let result2 = mondayWork('work from home')

//wrapAdjective
function wrapAdjective(var1 = '*') {
    const symbol1 = var1;
    return function result(word = 'a hard worker') {
        const adj = word
        return `You are ${symbol1}${adj}${symbol1}!`
    }
}