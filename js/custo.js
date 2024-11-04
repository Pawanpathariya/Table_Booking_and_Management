document.getElementById("Next1").addEventListener("click",localed)
function localed(){
     let name=document.getElementById("name").value;
     let num=document.getElementById("num").value;
     let per=document.getElementById("per").value;
     let date=document.getElementById("date").value;
     let time=document.getElementById("time").value;
    if(name=="" && num=="" && per=="" &&date=="" && time==""){
        alert("fill all detail");
    }

    else{
        localStorage.setItem("Name",name);
        localStorage.setItem("Contact",num);
        localStorage.setItem("Person",per);
        localStorage.setItem("Date",date);
        localStorage.setItem("Time",time);
        window.location.href="dishes.html";
    }
}

