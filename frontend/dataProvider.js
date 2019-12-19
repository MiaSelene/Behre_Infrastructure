function SetInterests(interests){
  for (var i=0; i<interests.length; i++) {
    localStorage[i] = true;
  }
}
//Event Types 1: Party; 2: Art; 3: Library; 4: Group activity
function InterestedIn(EventID){
  if(localStorage[EventID]){
    return true;
  }
  return false;
}
