//write out line


var e="";
function cool(){
  for(var i =0; i<=7; i++){
    e+="#";
    console.log(e);
  }
}
cool();



var fizBuzz = function() {
  var output="";
    for (var i = 1; i<=100; i++) {
      if (i%3==0 && i%5==0) {
        output +="FizzBuzz, ";}
      else if (i%3===0){
        output +="Fizz, ";
      }
      else if (i%5==0){
        output +="Buzz, ";}
      else{
        output +=i+", ";}
      }
    console.log(output);
};


//chessboard

var chessBoard = function(x){
  for(var i =0; i<=x; i++){
    if(n%2!==0){
      console.log=" # # # #"+/n;
    }
    if(n%2===0){
      console.log="# # # # "+/n;
    }
  }
}
