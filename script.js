
const sp = document.getElementById('ph')
var table = document.getElementById("table");
window.addEventListener('load', function(){
  table.addEventListener('click', function (e){
     
     sp.innerHTML= "Hello world";
     
    if(e.target.id == 'one'){

    
        sp.style.color = 'red';
    }
    if(e.target.id == 'two'){

    
        sp.style.color = 'orange';
    }
    if(e.target.id == 'three'){

    
        sp.style.color = 'yellow';
    }
    if(e.target.id == 'four'){

    
        sp.style.color = 'green';
    }
    if(e.target.id == 'five'){

    
        sp.style.color = 'blue';
    }
    if(e.target.id == 'six'){

    
        sp.style.color = 'purple';
    }

  })});


