console.log("Hello")
const myArry = ['mango', 'banner', 'apple', 'orange', 'watermelon']
//console.log(myArry[5])

//to select we use at 
const mychoice = myArry.at(2)
console.log(mychoice)

//select we use subset
const subset = myArry.slice(0,5)
console.log(subset)

//pushing helps to add element at the end
const addSet = subset.push('fruit')
console.log(subset)

//pop remove element from the end 
const popSet = subset.pop()
console.log(subset)

//shift is to remove from the beginning 
const subShift = subset.shift()
console.log(subShift)

//unshift add to the beginning of the element
const subUnshift = subset.unshift()
console.log(subset)

//splice is to add, remove, or replace element
const subSplice = subset.splice(1,5)
console.log(subset)

