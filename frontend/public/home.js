var cal = GetEvents()
changeScore(0);
for (var i=0; i<cal.length; i++){
  var Event = ["party","reading","art","group"][parseInt(cal[i].ID)-1];
  var content = cal[i]
  if (InterestedIn(Event)=="true"){
    CreateCell(Event, content["name"], content["people"], content["price"], content["date"] );

  }
}
document.getElementById("recommendedevent").innerHTML=content["name"];

function changeScore(i){
  if (!("Score" in localStorage) ){localStorage["Score"]=100;}
  var score = document.getElementById('pointscore');
  score.innerHTML = i + parseInt(localStorage["Score"]);
  localStorage["Score"]=score.innerHTML;
}


function changeEventVisibility(){
  if(document.getElementById("Event").classList.contains("anim")){
      document.getElementById("Event").classList.remove("anim");
  }else{
    document.getElementById("Event").innerHTML=document.getElementById("recommendedevent").innerHTML;
    document.getElementById("Event").classList.add("anim");
  }
}


function CreateCell(Event, name, people, price, date){
  var table = document.getElementById("calendar");
  var row = table.insertRow(0);
  row.insertCell(0).innerHTML = Event;
  row.insertCell(1).innerHTML = name;
  row.insertCell(2).innerHTML = people;
  row.insertCell(3).innerHTML = price;
  row.insertCell(4).innerHTML = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
  row.addEventListener("click", function() {
    document.getElementById("recommendedevent").innerHTML=name;

  })
}
function buy(){
  localStorage["Score"] = parseInt(localStorage["Score"]) -10;
}
