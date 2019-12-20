function Init(){
  for (var i=0; i<4; i++){
    var category = ["party","reading","art","group"][i];
    if (InterestedIn(category)=="true") {
      document.getElementById(category).src = "/static/Eventtypes/" + category + "_active.jpeg";
    } else {
      document.getElementById(category).src = "/static/Eventtypes/" + category + "_inactive.jpeg";
    }
  }
}

function Sleep(milliseconds) {
   return new Promise(resolve => setTimeout(resolve, milliseconds));
}


function ActivateElement(id){
  return null;
}


function createButton(id){
  var inputElement = document.getElementById(id);
  inputElement.type = "button"
  inputElement.onclick = async function(){
    console.log('.');
      if (SetInterest(id)=="true"){
        inputElement.src = "/static/Eventtypes/" + id + "_active.jpeg";
      } else {
        inputElement.src = "/static/Eventtypes/" + id + "_inactive.jpeg";
      }

  };
}

Init();
