const display = document.getElementById("input")
let displayValue = "";


const plusbnt = document.getElementById('plus')
console.log(plusbnt)
const minusbnt = document.getElementById('minus')
console.log(minusbnt)
const multsbnt = document.getElementById('multnum')
console.log(multsbnt)
const onebnt = document.getElementById('one')
console.log(onebnt)
const twobnt = document.getElementById('two')
console.log(twobnt)
const equalbnt = document.getElementById('equal')
console.log(equalbnt)
//  NORMAL
//function hellowolrd(name ){
 //return `hello , ${name}`


// //  VAR FUNC
// const helloWolrd2 = function(name){
//    return `hello , ${name}`  
// }

// console.log(helloWolrd2('jame'))
// //  ARROW FUNC
// const helloWolrd3 = (name1, name2)=> {
//    return `hello , ${name1} and ${name2}`  
// }

// console.log(helloWolrd3('bob', 'kelvin'))

// //TRY THESE : ADDITON, subration OF TWO NUMBER VIA A FUNC
// const Addition = (one, two)=> {
//     return one + two
// }
// console.log(Addition(34, 45)) 
// //this is for the subtration
// const subtration = (three, four)=> {
//     return three - four
// }
// console.log(subtration (100, 50))
// // for variable function
// const add = function(five, six){
//     return five + six 
// }
// console.log(add(23, 23))
//  // for normal function
//  const tion = function(seven, eight, nine){
//     return seven + eight + nine 
//  }
//  console.log(tion(23, 23, 23))

//  int MediaDeviceInfo()
//  {
//     float c, fh; 
//  }

 //let inputval=0
 //function addnum () {
   //inputval+=1
   //return inputval
 //}
 //plusbnt.addEventListener('click', ()=>{
   //input.value=addnum()
   
 //})
 //function subnum () {
   //inputval-=1
   //return inputval
 //}
 //minusbnt.addEventListener('click', ()=>{
   //input.value=subnum ()
 //} )

 //function multnum (){
   //inputval+=2
   //return inputval
 //}
 //timesbnt.addEventListener('click', ()=>{
   //input.value=multnum()
 //})

 plusbnt.addEventListener ('click',
  function () {
    displayValue += '+'
    display.value = displayValue
  }
 )
 minusbnt.addEventListener ('click',
  function () {
    displayValue += '-'
    display.value = displayValue
  }
 )
 multnum.addEventListener ('click',
  function () {
    displayValue += '*'
    display.value = displayValue
  }
 )
onebnt.addEventListener ('click',
  function () {
    displayValue += '1'
    display.value = displayValue
  }
)
twobnt.addEventListener ('click',
  function () {
    displayValue += '2'
    display.value = displayValue
  }
)
equalbnt.addEventListener ('click',
  function () {
    displayValue = 
    eval(displayValue)
    display.value = displayValue
  }
)

 