
const display = document.getElementById('display')
;
//console.log(display)
let displayValue = "";

const minusbnt = document.getElementById('minus')
//console.log(minusbnt)

const plusbnt = document.getElementById('plus')
//console.log(plusbnt) 

const multbnt = document.getElementById('mult')
//console.log(multbnt)

const equalbnt = document.getElementById('equal')
//console.log(equalbnt)

const zerobnt = document.getElementById('zero')
//console.log(zerobnt)

const onebnt = document.getElementById('one')
//console.log(onebnt)

const twobnt = document.getElementById('two')
//console.log(twobnt)

const threebnt = document.getElementById('three')
//console.log(threebnt)

const fourbnt = document.getElementById('four')
//console.log(fourbnt)

const fivebnt = document.getElementById('five')
//console.log(fivebnt)

const sixbnt = document.getElementById('six')
//console.log(sixbnt)

const sevenbnt = document.getElementById('seven')
//console.log(sevenbnt)

const eightbnt = document.getElementById('eight')
//console.log(eightbnt)

const ninebnt = document.getElementById('nine')
//console.log(ninebnt)

const detbnt = document.getElementById('det')
//console.log(detbnt)

const clebnt = document.getElementById ('cle')
//console.log(clebnt)

minusbnt.addEventListener ("click",
    function () {
        displayValue += "-";
        display.value = displayValue;
    }
);

plusbnt.addEventListener ("click",
    function (){
        displayValue += "+";
        display.value = displayValue;
    }
);

multbnt.addEventListener ('click',
    function () {
        displayValue += '*';
        display.value = displayValue;
    }
);

equalbnt.addEventListener ('click',
    function (){
        displayValue = 
        eval(displayValue);
        display.value = displayValue;
    }
);

zerobnt.addEventListener ('click',
    function () {
        displayValue += '0';
        display.value = displayValue;
    }
);

onebnt.addEventListener ('click',
    function () {
        displayValue += '1';
        display.value = displayValue;
    }
);

twobnt.addEventListener ('click',
    function () {
        displayValue += '2';
        display.value = displayValue;
    }
);

threebnt.addEventListener ('click',
    function () {
        displayValue += '3';
        display.value = displayValue;
    }
);

fourbnt.addEventListener ('click',
    function () {
        displayValue += '4';
        display.value = displayValue;

    }
);

fivebnt.addEventListener ('click',
    function () {
        displayValue += '5';
        display.value = displayValue;
    }
);

sixbnt.addEventListener ('click',
    function () {
        displayValue += '6';
        display.value = displayValue;
    }
);

sevenbnt.addEventListener ('click',
    function () {
        displayValue += '7';
        display.value = displayValue;
    }
);

eightbnt.addEventListener ('click',
    function () {
        displayValue += '8';
        display.value = displayValue;
    }
);

ninebnt.addEventListener ('click',
    function () {
        displayValue += '9';
        display.value = displayValue;
    }
);

detbnt.addEventListener ('click',
    function () {
        displayValue =
        displayValue.slice(0,-1)
        display.value = displayValue
    }
);

clebnt.addEventListener ('click',
    function () {
     displayValue = ''
        display.value = displayValue
   
    }
)


//strings methods 

//const string = "12345678902347778"
//const strLen= string.length
//console.log(string.slice(0,-1)) 
