function filesGetting(file,callback){
    var ajaxCall=new XMLHttpRequest();
    ajaxCall.overrideMimeType("aplication/json");
    ajaxCall.open("GET",file,true);
    ajaxCall.onreadystatechange=function(){
        if(ajaxCall.readyState === 4 && ajaxCall.status == "200"){
            callback(ajaxCall.responseText);
            //console.log(ajaxCall.status.responseText);
        }
    }
    ajaxCall.send(null);
}
filesGetting("js/data.json",function(jsondata){
    var data=JSON.parse(jsondata);
    console.log(data.mydata);
    details(data.details);
    //arrData(data.mydata);
    //resumes(data.resume);
    

})
var body=document.querySelector("#root1");
console.log(body);
var main=document.createElement("section");
main.classList.add("container");
body.appendChild(main);
var art1=document.createElement("article");
art1.setAttribute("class","artical4");
main.appendChild(art1);
var art2=document.createElement("article");
art2.setAttribute("class","artical5");
main.appendChild(art2);
var h2=document.createElement("h2");
h2.textContent="RESUME";
h2.style.textAlign="center";
art1.appendChild(h2);
var co=document.createElement("h3");
co.textContent="Career Objective";
art1.appendChild(co);
var co1=document.createElement("p");
co1.textContent="To pursue a challenging career in the software industry, where I can apply my knowledge, acquire skills and creatively involve with system that effectively contributes to growth of Organization.";
art1.appendChild(co1);
art1.appendChild(document.createElement("hr"));
var eq=document.createElement("h3");
eq.textContent="Educational Qualifications";
art1.appendChild(eq);
let resume=[
    {
        sno:"1",
        school:"AP IIIT RGUKT RK valley",
        Degree:"B.Tech",
        CGPA:"8.1"
    },
    {
        sno:"2",
        school:"AP IIIT RGUKT RK valley",
        Degree:"PUC",
        CGPA:"7.7"
    },
    {
        sno:"3",
        school:"ZPHS PAPIREDDY GARI Palli",
        Degree:"Matriculation",
        CGPA:"9.3"
    }    
];
function generateTableHead(table,data){
    let thead=table.createTHead();
    let row=thead.insertRow();
    for(let key of data){
        let th=document.createElement("th");
        let text=document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
function generateTable(table,data) {
    for (let element of data){
        let row=table.insertRow();
        for(key in element){
            let cell=row.insertCell();
            let text =document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }    
}
let table=document.createElement("table");
table.setAttribute("border","1");
let data=Object.keys(resume[0]);
generateTableHead(table,data);
generateTable(table,data); 
art1.appendChild(table);
art1.appendChild(document.createElement("hr"));
var skill=document.createElement("h3");
skill.textContent="Skills";
art1.appendChild(skill);
var lists = [
    "C",
    "C++",
    "HTML5",
    "CSS3",
    "JavaScript"
     ];
    var ul = document.createElement('ul');
    lists.forEach(function(fruit) {
    var li = document.createElement('li');
    li.innerHTML = fruit; // For instance, just to give us something to see
    li.className = "fruity";
    ul.appendChild(li);
});
art1.appendChild(ul);
art1.appendChild(document.createElement("hr"));
var hobbies=document.createElement("h3");
hobbies.textContent="Hobbies";
art1.appendChild(hobbies);
var listss = [
    "aaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbb",
    "ccccccccccccccccccccccccccccc",
    "dddddddddddddddddd",
    "eeeeeeeeeeeeeeeeeeeeeeeeeee"
     ];
    var uls = document.createElement('ul');
    listss.forEach(function(fruit) {
    var li = document.createElement('li');
    li.innerHTML = fruit; // For instance, just to give us something to see
    li.className = "fruity";
    uls.appendChild(li);
});
art1.appendChild(uls);

//article 2
//creating image
var image=document.createElement("img");
image.src="images/user.png";
image.alt="user";
art2.appendChild(image);
function details(mydetails){
    var h2=document.createElement("h2");
    h2.textContent=mydetails.name;
    art2.appendChild(h2);
    var phone=document.createElement("h4");
    phone.textContent=mydetails.mobile;
    art2.appendChild(phone);
    var email=document.createElement("h4");
    email.textContent=mydetails.eamil;
    art2.appendChild(email);
}    

//creating fuction to get the object name
// var col=[];
// function resumes(resdetails){
 
//     for (var i=0;i<resdetails.length;i++){
//         for (var key in resdetails[i]){
//             if(col.indexOf(key)=== -1){
//                 col.push(key);
//                 console.log("vamsi");
//             }
//         }
//     }
// }
// var table=document.createElement("table");
// var tr=table.insertRow(-1);
// for(var i=0;i<col.length;i++){
//     var th=document.createElement("th");
//     th.innerHTML=col[i];
//     tr.appendChild(th);
// }
// for (var i=0;i<resumes(resdetails).length;i++){
//     tr=table.insertRow(-1);
//     for(var j=0;j<col.length;i++){
//     var tabCell=tr.insertCell(-1);
//     tabCell.innerHTML=resdetails[i][col[j]];
//     }
// }
// art1.appendChild(table);
