var cal = GetEvents()
for (var i=0; i<cal.length; i++){
  var Event = ["party","reading","art","group"][parseInt(cal[i].ID)-1];
  var content = cal[i]
  if (InterestedIn(Event)=="true"){
    CreateCell(Event, content["name"], content["people"], content["price"], content["date"] );

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
}
