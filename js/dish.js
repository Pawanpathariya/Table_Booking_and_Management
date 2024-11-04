var total=0;

//italic 
function itali(){
    document.getElementById("Italic").style.display="grid";   
    document.getElementById("tot").style.display="block";   
}

function indi(){
    document.getElementById("Indian").style.display="grid";  
    document.getElementById("tot").style.display="block";   
   
}
function mexi(){
    document.getElementById("Mexican").style.display="grid";  
    document.getElementById("tot").style.display="block";   
   
}
function japi(){
    document.getElementById("Japanese").style.display="grid";  
    document.getElementById("tot").style.display="block";   
   
}

function addit1(){
total+=450;
document.getElementById("it1").style.backgroundColor="aqua";   

}
function addit2(){
total+=750;
document.getElementById("it2").style.backgroundColor="aqua";   

}
function addit3(){
total+=550;
document.getElementById("it3").style.backgroundColor="aqua";   
}
function addit4(){
total+=350;
document.getElementById("it4").style.backgroundColor="aqua";   

}
function addit5(){
total+=450;
document.getElementById("it5").style.backgroundColor="aqua";   

}
function addit6(){
total+=150;
document.getElementById("it6").style.backgroundColor="aqua";   
}


function totalpay(){
   let a= confirm("You need to pay "+total);
 if(a){
    window.location.href="receipt.html";
 }
 else{
    alert("please pay amount ");
 }
}

let Name=localStorage.getItem("Name");
let Contact=localStorage.getItem("Contact");
let Person=localStorage.getItem("Person");
let Date=localStorage.getItem("Date");
let Time=localStorage.getItem("Time");
let seat=Math.trunc(Math.random()*100);

async function rece(){

    let api="http://localhost:3000/students";

    const response= await fetch(api, {
        method: "POST",
        body: JSON.stringify({ 
          "Seat": seat,
          "Name": Name,
          "Person":Person,
          "Contact":Contact,
          "Time":Time,
          "Date":Date,
          "Total":total  
         }),
         headers: {
            "Content-Type": "application/json",
          }
    });
    window.location.href="index.html"
    alert("Table Booked Thanks for Booking");
}

function sho(){
    document.getElementById("show1").innerHTML+=`<h3>
    Name : ${Name} <br>
    Contact : ${Contact}<br>
    Total person :${Person} <br>
    Date : ${Date} <br>
    Time : ${Time}<br>
    Seat Number:${seat}<br>
    Payment Status : Paid
    </h3>
    `
}

sho()