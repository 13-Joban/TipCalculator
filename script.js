
let calculatebtn = document.querySelector('#cal_tip');

calculatebtn.addEventListener('click', Calculatetip);


function Calculatetip(){

    let inptamt  = document.querySelector('#amt_inpt').value;
let services = document.querySelector('#services').value;
let persons = document.querySelector('#persons').value;

    if(persons === 1){
        document.querySelector('#each').style.display = "none";

    }
    else{
        document.querySelector('#each').style.display = "block";
    }
        console.log("inptamt" + inptamt);
        console.log("services" + services);
    let total = inptamt*services; console.log("total " + total);
    total = (total)/persons;console.log("total " + total);
    total = (total)/100;console.log("total " + total);

    total = Math.round(total);

    total = total.toFixed(2);
    

    document.querySelector('#total').innerHTML = total;
    document.querySelector('#display_tip_amt').style.display ="block";


}