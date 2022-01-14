# js-functions


There are three types of functions:

Function Expresion
Function Decliration
Function Arrows





bellow, we will have simple examples, for every type, but before that, let's introduce the generlized function is as follows:




                     function Function_Name (){
                     const cal = 10*10;
                     console.log(cal);
                     } 
                     Function_Name();
                     
                     
This will print me 100. 

![image](https://user-images.githubusercontent.com/63984422/149405984-52629b96-1ca2-4684-b7a3-c5ccc696b0b9.png)




as for function exprestion, we treats functions, as if they were variables, and we define them as such. E.g:

                  
                  
                  var DefineFunction = function(){
                
                  let calc = 1+3;
                  let results = console.log(`the output is ${calc}`);
                  
                  }
                  DefineFunction();
                  
                  
                  
                  
                  
                               
                  
in this example, we defined a function, without giving it any parameters, then we just called the function, by writing the name of the function, followed by ()
and on the output, the content of the function was displayed as follows:


![image](https://user-images.githubusercontent.com/63984422/147711922-5b4086d8-c0fb-4216-bb71-b0897d9d610c.png)



now if we want to pass parameters for the function, it will be as follows:


                  var DefineFunction = function(args1, agrs2){
                  
                  let calc = args1+agrs2;
                  let results = console.log(`the out put is ${calc}`);
                  
                  }
                  DefineFunction(3, 5);
                  
                  
![image](https://user-images.githubusercontent.com/63984422/149405889-7c012d27-ec6b-4225-a658-f6e99fd0e4da.png)

                  
                  
 what we have changed in this example that we passed two parameters for the function, as the values for the local variables we defined.
 So  function(args1, agrs2) means the function will revice two parameters from the program, then by calling the function, with assinged agrymenrs as such:
 DefineFunction(3, 5)
 means that the program now chooses 3 and 5 as the values of the two arguments for the function. Then, on the function's body, these two arguments will
 be used by the variable we just defined as follows: let calc = args1+args2;
                  
                  
 without all that being said and explained, we will have the follwoing results:
 
 
 ![image](https://user-images.githubusercontent.com/63984422/147711984-0eb3835b-171c-4787-bf18-d1b4ad539794.png)
 
 notice that we haven't been working with return values yet. All we be doing is using consolws inside the function, then calling this function to display some output. Later on we will introduce return
