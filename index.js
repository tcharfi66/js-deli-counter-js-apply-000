
//currLine= array of people in line n = new person

function takeANumber(currLine, n){
 
  
  var ctr= currLine.length;
  
  //position in line is index+1
  
  currLine.push(n)
  return "Welcome, " + n + ". You are number " + (ctr+1) + " in line."
  
}

function nowServing(currLine){

var copy = currLine[0];
delete currLine[0];


if(currLine[0] != null){
  
  return " There is nobody waiting to be served!";
}

else {
  return "Currently serving " + copy + ".";
  
}



}