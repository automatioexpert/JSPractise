
function simpleFunction(){
    console.log("Inside  function -- Function has been executed!!")
    
    
}
simpleFunction()

function add(a,b){
 //   var sum=a+b;
  //  console.log("Sum is : "+sum)

  return a+b;
}

as=add(20,30)
console.log("sum is: "+as)

function course(){
    this.top="javascript";
    this.duration="20 hours"
}

var obj_course=new course()
console.log(obj_course.topic+"-----------"+obj_course.duration)