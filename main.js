//function getfile(file,callback)
//{
  //var xhr = new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
  //xhr.onreadystatechange = function()
  //{
  //if(xhr.readyState === 4 && xhr.status == "200")
  //{
    //callback(xhr.responseText);
  //}
//};
//xhr.send(null);
//}
//getfile("data.json",function(text){
  //var data = JSON.parse(text);
//  console.log(data);
//  details(data.basics);
//  career(data.CareerObjective);
//edu(data.education);
//technic(data.skills);
//achieve(data.achievements);
//})

function loadjson(file)
{
  return new Promise((resolve, reject)=>{
    return fetch(file).then(response=>{
      if (response.ok) {
        resolve(response.json());
      }else {
        reject(new Error('error'));
      }

    })
  })
}

var newfile = loadjson("data.json")
newfile.then(data=>
{
  details(data.basics);
  career(data.CareerObjective);
  edu(data.education);
  technic(data.skills);
  achieve(data.achievements);
})

var child = document.querySelector(".childone");

function details(det) {
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);

  var name = document.createElement("h1");
  name.textContent = det.name;
  child.appendChild(name);

  var phoneno = document.createElement("h3");
  phoneno.textContent = det.phoneno;
  child.appendChild(phoneno);

  var email = document.createElement("a");
  email.href = "mailto:kdurgapavani2310@gmail.com";
  email.textContent = det.email;
  child.appendChild(email);

  var add = document.createElement("h3");
  add.textContent = "Address:";
  child.appendChild(add);

  var line = document.createElement("hr");
  child.appendChild(line);

  var Address = document.createElement("p");
  Address.textContent = det.Address;
  child.appendChild(Address);
}

var child1 = document.querySelector(".childtwo");

function career(careerinfo) {

  var head1 = document.createElement("h3");
  head1.textContent = "Career Objective:";
  child1.appendChild(head1);

  var line1 = document.createElement("hr");
  child1.appendChild(line1);

  var info = document.createElement("p");
  info.textContent = careerinfo.info;
  child1.appendChild(info);
}

function edu(qual) {

  var head2 = document.createElement("h3");
  head2.textContent = "Education Qualification:";
  child1.appendChild(head2);

  var line2 = document.createElement("hr");
  child1.appendChild(line2);

 for(i=0;i<qual.length;i++)
 {
  var deg = document.createElement("h4");
  deg.textContent = qual[i].degree;
  child1.appendChild(deg);

  var eduul = document.createElement("ul");
  var eduli = document.createElement("li");
  eduli.textContent = qual[i].institute;
  eduul.appendChild(eduli);
  child1.appendChild(eduul);

  var dataul = document.createElement("ul");
  var datali = document.createElement("li");
  datali.textContent = qual[i].data;
  dataul.appendChild(datali);
  child1.appendChild(dataul);
}
}

function technic(tec)
{
  var head3 = document.createElement("h3");
  head3.textContent = "Technical Skills";
  child1.appendChild(head3);

  var line3 = document.createElement("hr");
  child1.appendChild(line3);

  var skilldata = document.createElement("table");
  skilldata.border = "1";
  child1.appendChild(skilldata);

  tabledata = "";
  for (i = 0; i < tec.length; i++)
  {
    tabledata+="<tr><td>"+tec[i].title+"</td><td>"+tec[i].data+"</td></tr>"
  }
  skilldata.innerHTML = tabledata;
}

function achieve(ach)
{
  var head4 = document.createElement("h3");
  head4.textContent = "Achievements:";
  child1.appendChild(head4);

  var line4 = document.createElement("hr");
  child1.appendChild(line4);

    var acul = document.createElement("ul");
    var acli = document.createElement("li");
    acli.textContent = ach.grade;
    acul.appendChild(acli);
    child1.appendChild(acul);

    var ac1ul = document.createElement("ul");
    var ac1li = document.createElement("li");
    ac1li.textContent = ach.attendance;
    ac1ul.appendChild(ac1li);
    child1.appendChild(ac1ul);

    var ac2ul = document.createElement("ul");
    var ac2li = document.createElement("li");
    ac2li.textContent = ach.grade;
    ac2ul.appendChild(ac2li);
    child1.appendChild(ac2ul);

}
