function mydel(myid)
{
  let api=`http://localhost:3000/students/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted!!!");
  })
  
}

async function display(){
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
                <td id="last"><a href="#" onclick="mydel('${key.id}')"><ion-icon name="trash-outline"></ion-icon></a>
 </td>
                </tr> `
            })
        table+="</table>"
        document.getElementById("remo").innerHTML=table;
        }
        setInterval(display,1000);