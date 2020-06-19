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
            arrData(data.mydata);
            

        })
var body=document.querySelector("#root");
console.log(body);
var main=document.createElement("section");
main.classList.add("container");
body.appendChild(main);
var art1=document.createElement("article");
art1.setAttribute("class","artical1");
main.appendChild(art1);
//creating image
var image=document.createElement("img");
image.src="images/user.png";
image.alt="user";
art1.appendChild(image);
//creating fuction to get the object name
function details(mydetails){
    var h2=document.createElement("h2");
    h2.textContent=mydetails.name;
    art1.appendChild(h2);
    var phone=document.createElement("h4");
    phone.textContent=mydetails.mobile;
    art1.appendChild(phone);
    var email=document.createElement("h4");
    email.textContent=mydetails.eamil;
    art1.appendChild(email);
    var resume1=document.createElement("a");
    resume1.href="resume1.html";
    resume1.textContent="RESUME";
    art1.appendChild(resume1);
}
function arrData(arrdetails){
    for(i in arrdetails){
    let art1=document.createElement("article");
    art1.setAttribute("class","artical2");
    main.appendChild(art1);


    var image=document.createElement("img");
    image.src="images/user.png";
    image.alt="user";
    art1.appendChild(image);

    let h2=document.createElement("h2");
    h2.textContent=arrdetails[i].name;
    art1.appendChild(h2);

    let phone=document.createElement("h4");
    phone.textContent=arrdetails[i].mobile;
    art1.appendChild(phone);

    let email=document.createElement("h4");
    email.textContent=arrdetails[i].eamil;
    art1.appendChild(email);

    let resume1=document.createElement("a");
    resume1.href="resume1.html"
    resume1.textContent="RESUME";
    art1.appendChild(resume1);
    }
}

















// creating article 2
// var art2=document.createElement("article");
// art2.setAttribute("class","artical1");
// main.appendChild(art2);
// var image=document.createElement("img");
// image.src="images/user.png";
// image.alt="user";
// art2.appendChild(image);
// //creating fuction to get the object name
// function details(mydetails){
//     var h2=document.createElement("h2");
//     h2.textContent=mydetails.name;
//     art2.appendChild(h2);
//     var phone=document.createElement("h4");
//     phone.textContent=mydetails.mobile;
//     art2.appendChild(phone);
//     var email=document.createElement("h4");
//     email.textContent=mydetails.eamil;
//     art2.appendChild(email);
//     var resume1=document.createElement("a");
// resume1.href="#";
// resume1.textContent="RESUME";
// art2.appendChild(resume1);
// }















// function details(data){
//     var name=document.createElement('h2');
//     name.textContent=data.name;
//     child.appendChild(name);
// }        

    




//   //get the body tag
//   var body=document.getElementById("root");
//   console.log(body);
//   //create section
//   var main=document.createElement("section");
//   // classname to the section
//   main.classList.add("main");
//  // console.log(main);
//  //append main section to the body
//   body.appendChild(main);
//   //create artical1
//   var artical1=document.createElement("article");
//   artical1.setAttribute("class","artical1");
//   main.appendChild(artical1);
//   //create Image tag
//   var image=document.createElement("img");
//   image.src="images/user.png";
//   image.alt="userImage";
//   artical1.appendChild(image);
//   // create horizontal
//   artical1.appendChild(document.createElement("hr"));
//   var name1=document.createElement("h2"); 
//   name1.textContent="Vamsi Krishna";
//   artical1.appendChild(name1);
//   var email=document.createElement("h2");
//   email.textContent="vamsi@gmail.com";
//   artical1.appendChild(email);
//   var phone=document.createElement("h2");
//   phone.textContent="8639333895";
//   artical1.appendChild(phone);  
//   //console.log(artical1);
  
//   //create artical2
//   var artical2=document.createElement("article");
//   artical2.setAttribute("class","artical2");
//   main.appendChild(artical2)
//   var image=document.createElement("img");
//   image.src="images/user.png";
//   image.alt="userImage";
//   artical2.appendChild(image);
//   // create horizontal
//   artical2.appendChild(document.createElement("hr"));
//   var name1=document.createElement("h2"); 
//   name1.textContent="Vamsi Krishna";
//   artical2.appendChild(name1);
//   var email=document.createElement("h2");
//   email.textContent="vamsi@gmail.com";
//   artical2.appendChild(email);
//   var phone=document.createElement("h2");
//   phone.textContent="8639333895";
//   artical2.appendChild(phone);
