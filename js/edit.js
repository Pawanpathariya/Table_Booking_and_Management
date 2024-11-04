async function myed(id){
    let name=document.getElementById("name").value;
    let Contact=document.getElementById("course").value;
    let Person=document.getElementById("city").value;
    let Date=document.getElementById("fees").value;

    let api=`http://localhost:3000/students/${id}`;
  
    fetch(api, {
      method: "PATCH",
      headers: {
          "Content-Type" : "application/json"
        },
      body: JSON.stringify(
        {
         // "Seat": seat,
          "Name": name,
          "Person":Person,
          "Contact":Contact,
          "Date":Date,
         // "Total":total  
        }
      )
    })
    .then(json => {
      alert("Data updated!!!");
    });
  }


  async function editDisplay(myid)
{
  let api=`http://localhost:3000/students/${myid}`

  let Obj= await fetch(api);
  let Data=await Obj.json();
  document.getElementById("show").style.display="block";
  myForm=`

    
          Edit Name: <input type="text" id="name" value="${Data.Name}">
          <br>
           Edit Contact : <input type="text" id="course" value="${Data.Contact}">
          <br>
           Edit Person: <input type="text" id="city" value="${Data.Person}">
          <br>
           Edit date: <input type="text" id="fees" value="${Data.Date}">
          <br>
          <button onclick="myed('${Data.id}')"> Edit Save! </button>
  `
  document.getElementById("show").innerHTML=myForm;
}

async function displayed(){
    let table=`<table width='70%' >
        <tr>
            <th> Seat </th>
            <th> Name </th>
            <th> Person </th>
            <th> Contact </th>
            <th> Date </th>
            <th> Bill </th>
            <th id="last"></th>
            `
        let api="http://localhost:3000/students";
        let mydata= await fetch(api);
        let data=await mydata.json();
        data.map((key)=>{
            table+=`<tr>
              <td> ${key.Seat} </td>
                <td> ${key.Name} </td>
                <td> ${key.Person} </td>
                <td > ${key.Contact} </td>
                <td > ${key.Date} </td>
                <td > Paid </td>
                <td id="last" ><a href="#" onclick="editDisplay('${key.id}')"> <ion-icon name="create-outline"></ion-icon> </a>
          </td>
                </tr> `
            })
        table+="</table>"
        document.getElementById("ed").innerHTML=table;
        }
        displayed();