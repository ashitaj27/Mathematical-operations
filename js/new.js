
var tableContent = ""; 
        function convert(){
    var kms = document.getElementById("data").value;
    const factor = 0.621371;
    var miles = kms * factor;
   
    document.getElementById("res").innerText = `${miles} miles`;
  } 
  function change(){
    var c = document.getElementById("celcius").value;
    var f = (c*1.8)+32;
    document.getElementById("changed").innerText = c + "celcius =" +f + "fehrenheight"; 
  }
  function check(){
    var x = document.getElementById("number").value;
    var y = Math.sign(x);
    document.getElementById("checked").innerText = y;
    }
    function random(){
        var x = Math.random();
        x = x*10000;
        // var y = Math.floor(x)
        document.getElementById("generated").innerText = Math.floor(x);
    }
    function checkoddeven(){
        var x = document.getElementById("num").value;
        if(x%2 == 0){
            alert(`${x} is a even number`);
        }
        else{
            alert(`${x} is a odd number`);
        }
    }
    function checkprime(){
        var x = document.getElementById("primenumber").value;
        if(x == 1){
           alert(`${x} is neither prime nor composite`);
        }
        else if(x < 0){
            alert(`${x} x is a negative number, so it is not a prime number.`);
        }
        else{
            for(var i = 2; i<x; i++){
                if(x%i == 0){
                    alert(`${x} is not a prime number`);
                    break;
                }
                else{
                    alert(`${x} is a prime number`);
                    break;
                    
                }
            }
        }

    }
    function table(){
        var x = document.getElementById("tableof").value;
        // var tableContent = "";
        for(var i=1;i<=10;i++){
            var res = i*x;
            tableContent += `${x} x ${i} = ${res}<br>`
        //    console.log(`${x} x ${i} = ${res}`)
          
        }
        document.getElementById("displaytable").innerHTML = tableContent;
    }
      
    