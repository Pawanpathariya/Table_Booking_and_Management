$(document).ready(function(){
    $(".toggle").click(function(){
        $(".title").hide();
        $(".navigation").css("width",100);
    })
})
$(document).ready(function(){
    $(".toggle").dblclick(function(){
        $(".title").show();
        $(".navigation").css("width",300);
    })
})
async function display(){
    let table=`<table width='70%' >
        <tr>
           <th> Seat No.</th>
            <th> Name </th>
            <th> Person </th>
            <th> Contact </th>
            <th> Date of booking</th>
            <th> Time </th>
            <th id="last"> Bill Status</th>
           
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
                <td > ${key.Time} </td>
                <td id="last"> Paid </td>
            
                </tr> `
            })
        table+="</table>"
        document.getElementById("demo").innerHTML=table;
        }
        setInterval(display,1000);