function numParImpar(){
    let number= document.getElementById("num").value;
    if(number.length==0)
    alert("Escribe un número");
    else if(number <= 0)
    alert("el número es invalido");
    else if(number%2==0)
    alert("El número introducido es par");
    else alert("El número introducido es impar");
  }