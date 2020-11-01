let pTag = document.getElementById("para");
for(i = 1; i <= 100; i++) {
  if( i % 3 === 0 && i % 5 === 0 )
    //print fizzbuzz;
    pTag.innerHTML += "fizzbuzz"
  
  else if( i % 3 === 0 )
    //print fizz
    pTag.innerHTML +="fizz";
  
  else if( i % 5 === 0 )
    //print buzz
    pTag.innerHTML +="buzz";
  
  else
    //print i
    console.log(i);
    pTag.innerHTML += i;
}
  