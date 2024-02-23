function outerFunction() {
    var outerVariable = "I am outer!";
    
    function innerFunction() {
      console.log(outerVariable); 
    }
    
    return innerFunction;
  }
  
  var myClosure = outerFunction();
  myClosure(); 
  