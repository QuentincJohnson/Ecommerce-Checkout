//buttons
let pantsPlus = document.getElementById("pants-plus");
let pantsMin = document.getElementById("pants-min");

let shirtsPlus = document.getElementById("shirts-plus");
let shirtsMin = document.getElementById("shirts-min");

let subtotal = document.getElementById("subtotal");
let tax = document.getElementById("tax");
let total = document.getElementById("total");

let calcButt = document.getElementById("calc-butt");



function roundToTwo(value) 
{
    return(Math.round(value * 100) / 100);
}

//pants
function pantsAddOne()
{
    qty = parseInt(document.getElementById("pants-quant").innerHTML);
    qty += 1;
    document.getElementById("pants-quant").innerHTML = qty;

    document.getElementById("pants-total").innerHTML = roundToTwo(qty * 40.99);
}

function pantsMinOne()
{

    if (document.getElementById("pants-quant").innerHTML == 0) {
        document.getElementById("pants-quant").innerHTML = 0;
        
    }
    else{
        qty = parseInt(document.getElementById("pants-quant").innerHTML);
        qty -= 1;
        document.getElementById("pants-quant").innerHTML = qty;
    
        document.getElementById("pants-total").innerHTML = roundToTwo(qty * 40.99);
    }

}

//shirts
function shirtsAddOne()
{
    qty = parseInt(document.getElementById("shirts-quant").innerHTML);
    qty += 1;
    document.getElementById("shirts-quant").innerHTML = qty;

    document.getElementById("shirts-total").innerHTML = roundToTwo(qty * 10.99);
}

function shirtsMinOne()
{
    if (document.getElementById("shirts-quant").innerHTML == 0) {
        document.getElementById("shirts-quant").innerHTML = 0; 
    }

    else{
        qty = parseInt(document.getElementById("shirts-quant").innerHTML);
        qty -= 1;
        document.getElementById("shirts-quant").innerHTML = qty;

        document.getElementById("shirts-total").innerHTML = roundToTwo(qty * 10.99);

    }
    
}

//totals
function addTotals() {
    
   
    
    let sub = roundToTwo( 
    parseFloat(document.getElementById
    ("pants-total").innerHTML) 
    + parseFloat(document.getElementById("shirts-total").innerHTML));

    subtotal.innerHTML = sub;

    tax.innerHTML = roundToTwo(sub * 0.13);

    total.innerHTML = sub + parseInt(tax.innerHTML);

}


//actions
pantsPlus.addEventListener("click", pantsAddOne);
pantsMin.addEventListener("click", pantsMinOne);

shirtsPlus.addEventListener("click", shirtsAddOne);
shirtsMin.addEventListener("click", shirtsMinOne);

calcButt.addEventListener("click", addTotals)