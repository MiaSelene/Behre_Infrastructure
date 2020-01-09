
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
  } return "false";
}

function GetEvents(){
  return [{ID:1, name:"(B)Ehre Eroeffnung", people:10, price:200, date:new Date("2019-12-24")},{ID:2, name:"(lung", people:11, price:170, date:new Date("2019-12-23")},{ID:4, name:"Schwindel", people:2, price:2000, date:new Date("2019-12-23")}, {ID:3, name:"Sylvester St\'Austellung", people:5, price:15, date:new Date("2019-12-30")}];
}
