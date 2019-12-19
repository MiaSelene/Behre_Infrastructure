var interests = [false,false,false,false];
for (var i=0; i<4; i++){
  var category = ["party","reading","art","group"][i];
  console.log("/static/Eventtypes/" + category + "_active.jpeg")
  if (InterestedIn(i)) {
    interests[i] = true;
    document.getElementById(category).src = "/static/Eventtypes/" + category + "_active.jpeg";
  } else {
    document.getElementById(category).src = "/static/Eventtypes/" + category + "_inactive.jpeg";
  }
}


function ActivateElement(id){
  return null;
}
