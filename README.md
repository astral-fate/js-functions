# js-functions


There are three types of functions:

Function Expresion
Function Decliration
Function Arrows

bellow, we will have simple examples, for every type:


in function exprestion, we treats functions, as if they were variables, and we define them as such. E.g:

                  
                  
                  var DefineFunction = function(){
                
                  let calc = 1+3;
                  let results = console.log(`the output is ${calc}`);
                  
                  }
                  DefineFunction();
                  
                  
                  
                  
                  
                               
                  
in this example, we defined a function, without giving it any parameters, then we just called the function, by writing the name of the function, followed by ()
and on the output, the content of the function was displayed as follows:


![image](https://user-images.githubusercontent.com/63984422/147711922-5b4086d8-c0fb-4216-bb71-b0897d9d610c.png)



now if we want to pass parameters for the function, it will be as follows:


                  var DefineFunction = function(parameter1, parameter2){
                  
                  let calc = parameter1+parameter2;
                  let results = console.log(`the out put is ${calc}`);
                  
                  }
                  DefineFunction(3, 5);
                  
                  
 what we have changed in this example that we passed two parameters for the function, as the values for the local variables we defined.
 So  function(parameter1, parameter2) means the function will revice two parameters from the program, then  DefineFunction(3, 5) means that
 the program now chooses 3 and 5 as the values of the two parameter for the function. Then, on the function's body, these two parameters will
 be used by the variable we just defined as follows: let calc = parameter1+parameter2
                  
                  
 without all that being said and explained, we will have the follwoing results:
 
 
 ![image](https://user-images.githubusercontent.com/63984422/147711984-0eb3835b-171c-4787-bf18-d1b4ad539794.png)
