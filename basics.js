/*let r = 5;
const PI = 3.14;
let circumference = 2 * PI * r;
console.log("The circumference of a circle is: "+circumference)*/




/*let age = prompt("Enter a number: ");

if (age >=18 ){ 
    alert("You can vote")

    console.log("You can") 

}else{ 
    
    alert("You cannot vote")
    console.log("Youc cannot")
   
}*/



/*let marks = prompt("Enter marks: ");
if (marks >= 70){
    alert("First class")
}
else if(marks <= 69 && marks >59){
alert("Second class")
}
else if(marks <= 59 && marks > 40){
    alert("Third class")
}
else if(marks< 40){
    alert("You failed bhuskule")
}*/


/*function num(){
    let a = 6;
    if(true){
        let a = 5;
        console.log(a);

    }
    console.log(a)
}
num();//funtion call
function num1(){
    var b =7;
    if(true){
        var b = 9;
        console.log(b);
    }
    console.log(b);
}
num1()//function call */



/*let i;
for(i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}*/


/*function multiply(a,b){
    let multiply = 1;
    multiply = a*b;

    console.log(multiply)
 
}
multiply(2,3); 
 parameters*/


 function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");

    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
        button.textContent="Light-mode";
    }else{
        button.textContent="Dark-mode";
    }
}

const textchange  = document.querySelector("#change");
const textvalue = ["a FullStackDeveloper","a Designer","a Teacher"];
let counter = 0;
setInterval(()=>{
    textchange.textContent = textvalue[counter];
    counter=(counter+1)% textvalue.length;
},3000);
