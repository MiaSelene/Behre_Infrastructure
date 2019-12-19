
function SetInterest(interest){
  if (localStorage[interest]){
    localStorage[interest] = false;
  }else{
    localStorage[interest] = true;
  }
}
//Event Types 1: Party; 2: Art; 3: Library; 4: Group activity
function InterestedIn(EventID){
  if(localStorage[EventID]){
    return true;
  }
  return false;
}

function GetEvents(){
  return [{ID:1, name:"(B)Ehre Eroeffnung", people:10, price:200, date:new Date("2019-12-24")}, {ID:2, name:"Sylvester St\'Austellung", people:5, price:15, date:new Date("2019-12-30")}];
}
