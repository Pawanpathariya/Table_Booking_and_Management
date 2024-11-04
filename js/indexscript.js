document.getElementById("submit").addEventListener("click",check);

 function check(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    let storedusername="pawan";
    let storedpassword=123;

    if(username==storedusername && password==storedpassword){
        alert(`Login successful, welcome ${storedusername}`);

        window.location.href="dashboard.html";
    }
    else{
        alert("Incorrect Password or Username")
    }
}