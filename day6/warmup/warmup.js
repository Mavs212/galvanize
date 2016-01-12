var warmup1 = function(){
  var x = Math.floor(100*Math.random());
  var y = Math.floor(100*Math.random());
  var mean = (x+y)/2;
  var variance = (((x-mean)*(x-mean))+((y-mean)*(y-mean)))/2;
   var std = Math.sqrt(variance);
   console.log("Numbers are "+x+ " " +y);
   console.log("Mean is"  + mean);
   console.log("Variance is "+variance);
   console.log("Standard deviation is "+ std);

};

  var warmup2 = function() {

    var a= Math.floor(100*Math.random());
    console.log("Random Number is "+a);
    console.log("Even Numbers are:")
    for(var i=0; i<a; i++) {
      if(i%2===0){
        console.log(i);
      }
    }
};


var warmup3 = function() {
    var a = Math.floor(100*Math.random());
      if(a>40){
        for(var i=40; i<a; i++){
          if(i%2!==0){
            console.log(i);
          }
        }
      }
      if(a<40){
        for(var i=0; i<a; i++){
          if(i%2!==0){
            console.log(i);
          }
        }
      }
};


var warmup4 = function() {
    var a =[];
      for(var i=0; i<20; i++){
        a.push(Math.floor(100*Math.random())) ;
      }
     console.log(a);
    console.log(Math.max.apply(null,a));
    console.log(Math.min.apply(null,a));
};
warmup1()
warmup2()
warmup3()
warmup4()