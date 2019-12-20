
function SetInterest(interest){
  if (localStorage[interest]=="true"){
    localStorage[interest] = false;
    return "false";
  }else{
    localStorage[interest] = true;
    return "true";
  }
}

function InterestedIn(Event){
  if(localStorage[Event]=="true"){
    return "true";
  }
  return "false";
}

function GetEvents(){
  return [{ID:1, name:"(B)Ehre Eroeffnung", people:10, price:200, date:new Date("2019-12-24")}, {ID:2, name:"Sylvester St\'Austellung", people:5, price:15, date:new Date("2019-12-30")}];
}
