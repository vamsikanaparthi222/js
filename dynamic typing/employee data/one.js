let employees =[
    {id:01, name:"vamsi", sal:95000, company:"google", location:"banglore"},
    {id:02, name:"ajay", sal:93000, company:"capgemini", location:"banglore"},
    {id:03, name:"nayak", sal:90000, company:"infosys", location:"banglore"},
    {id:01, name:"vijay", sal:85000, company:"wipro", location:"banglore"},
    {id:01, name:"vamsi", sal:95000, company:"cognigent", location:"banglore"},

];
function displaydata(){
    let rows = "";
    for(user of employees){
        rows =
        rows+
        `<tr> 
            <td> ${emp.id}</td>
            <td> ${emp.name}</td>
            <td> ${emp.sal}</td> 
            <td> ${emp.company}</td>
            <td> ${emp.location}</td>
      </tr>`;
    }
    document.getElementById("abc").innerHTML.innerHTML = rows;
}