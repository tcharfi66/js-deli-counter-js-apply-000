
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

return "Currently serving " + copy + ".";


}