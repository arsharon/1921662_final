
function process()
{
    console.log("Button Clicked");
    
let ages =document.getElementById("age").value;
document.getElementById("age").value="";
let names =document.getElementById("name").value;
document.getElementById("name").value="";
let bills =document.getElementById("bill").value;
document.getElementById("bill").value="";
let fees =document.getElementById("fee").value;
document.getElementById("fee").value="";

let applicablefee;

function yearlyfees(x,y,a)
{
    let fee=(x+y);
    if(a>50 && fee>20000)
    {
       applicablefee= (x* 0.20);
    }

    let montlyfee=(y/12);
    if(a>30 && montlyfee>250)
    {
        applicablefee=(x*0.15);
    }
    else
    {
        applicablefee=0;
    }
    return applicablefee;
}

let Totalfee= yearlyfees(bills,fees,ages);

let text= `<b>Dear ${names} Your applicable fee is : ${applicablefee}</b>`;
document.getElementById("payable").innerHTML= text;
}
