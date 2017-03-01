function firstGeneration(){
    var Section1 = 'ABC';
    var Section2 = '123';
    var Sect1Sect2 = Section1[Math.floor(Math.random() * 3)] + Section2[Math.floor(Math.random() * 3)] + ".png";
    
    return Sect1Sect2;
    
}

function Generation(){
    var Section1 = 'ABC';
    var Section2 = '123456789';
    var Sect1Sect2 = Section1[Math.floor(Math.random() * 3)] + Section2[Math.floor(Math.random() * 3)] + ".png";
    
    return Sect1Sect2;
    
}


function secondGeneration(){
    var Section1 = 'ABC';
    var Section2 = '456';
    var Sect1Sect2 = Section1[Math.floor(Math.random() * 3)] + Section2[Math.floor(Math.random() * 3)] + ".png";
    
    return Sect1Sect2;
    
}

function thirdGeneration(){
    var Section1 = 'ABC';
    var Section2 = '789';
    var Sect1Sect2 = Section1[Math.floor(Math.random() * 3)] + Section2[Math.floor(Math.random() * 3)] + ".png";
    
    return Sect1Sect2;
    
}


function setImages(){
      document.getElementById("Sq11").src= Generation();
      document.getElementById("Sq12").src= Generation();
      document.getElementById("Sq13").src= Generation();
          
      document.getElementById("Sq21").src= Generation();
      document.getElementById("Sq22").src= Generation();
      document.getElementById("Sq23").src= Generation();
    
      document.getElementById("Sq31").src= Generation();
      document.getElementById("Sq32").src= Generation();
      document.getElementById("Sq33").src= Generation();
   }
function loaddoge(){
   var wow=document.getElementsByClassName("PuzzlePiece");
    
   for(var counterWOW=0;counterWOW<9;counterWOW++){
      wow[counterWOW].src= "doge.png";
   }
   
}

function set11(){
      document.getElementById("Sq11").src= firstGeneration();
   }


function set12(){
     document.getElementById("Sq12").src= firstGeneration();    
}

function set13(){
     document.getElementById("Sq13").src= firstGeneration();    
}

function set21(){
     document.getElementById("Sq21").src= secondGeneration();    
}

function set22(){
     document.getElementById("Sq22").src= secondGeneration();    
}

function set23(){
     document.getElementById("Sq23").src= secondGeneration();    
}

function set31(){
     document.getElementById("Sq31").src= thirdGeneration();    
}

function set32(){
     document.getElementById("Sq32").src= thirdGeneration();    
}

function set33(){
     document.getElementById("Sq33").src= thirdGeneration();    
}
