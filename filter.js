let arr = [12, 0, 20, 18, 27, 33, 46];

function Even(arr) 
{ 
    if(arr %2==0) 
       return true; 
    else 
       return false;  
} 
var newarray = arr.filter(Even);

console.log(newarray); 
						