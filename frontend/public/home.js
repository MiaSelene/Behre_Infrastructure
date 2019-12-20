var inputElement = document.getElementById("calendar");
var cal = GetEvents()
var content = "";
for (var i=0; i<cal.length; i++){
  var Event = ["party","reading","art","group"][cal.ID];
  if (InterestedIn(Event)=="true"){
    content += cal[i].name
  }
}
inputElement.innerHTML = content;


function CreateCell(Event, name, people, prize, date)
