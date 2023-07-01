function scuberGreetingForFeet(someValue){

  let result;
  if (someValue <= 400) {
   return result = "This one is on me!";
  }
  else if (someValue > 400 && someValue <=2000) {
    return result = "That will be twenty bucks."
  }
  else if (someValue <2500 && someValue >2000) {
    return result = "I will gladly take your thirty bucks."
  }
  else if (someValue >= 2500) {
    return result = "No can do."
  }


}

function ternaryCheckCity(someCity){
  let result;
  if (someCity === "NYC") {
    return result = "Ok, sounds good."
  }
  else return result = "No go."
  
}

function switchOnCharmFromTip(someTip){
  let result;
  if (someTip === "generous") {
    return result = "Thank you so much."
  }
  else if (someTip === "not as generous") {
    return result = "Thank you."
  }
  else return result = "Bye."
}