const letras = [{letra:'a', Morse:'.-'},{letra:'b', Morse:'-...'},{letra:'c', Morse:'-.-.'},{letra:'d', Morse:'-..'},{letra:'e', Morse:'.'},{letra:'f', Morse:'..-.'},
{letra:'f', Morse:'..-.'},{letra:'g', Morse:'--.'},{letra:'h', Morse:'....'},{letra:'i', Morse:'..'},{letra:'j', Morse:'.---'},{letra:'k', Morse:'-.-'},
{letra:'l', Morse:'.-..'},{letra:'m', Morse:'--'},{letra:'n', Morse:'-.'},{letra:'o', Morse:'---'},{letra:'p', Morse:'.--.'},{letra:'q', Morse:'--.-'},{letra:'r', Morse:'.-.'},{letra:'s', Morse:'...'},{letra:'t', Morse:'-'},{letra:'u', Morse:'..-'},{letra:'v', Morse:'...-'},{letra:'w', Morse:'.--'},{letra:'x', Morse:'-..-'},{letra:'y', Morse:'-.--'},{letra:'z', Morse:'--..'}];


function traducir(){

  let codigo = document.getElementById('Codigo').value;
  texto = codigo.split(" "); 
  let pasarAMorse = /[a-zA-Z]/.test(texto);
  let traduccion = "";

  // validamos si el codigo ingresado contiene letras, si es asi traducira de msj a codigo Morse
  if (pasarAMorse){
    
    for (let i = 0; i < codigo.length; i++){
      let codigoActual = codigo[i];
      if (codigoActual === " "){
        traduccion += "  ";
      }
  
      for(let j = 0; j < letras.length; j++){
  
        if(codigoActual === letras[j].letra){
          traduccion += " ";
          traduccion += letras[j].Morse;
        }
  
      }
    }
    console.log(traduccion);

  } // si el codigo ingresado no contiene ninguna letra traducira de codigo Morse a msj 
  else{
    
    //Validamos si se ingreso alguna de las convinaciones no utilizadas en el codigo Morse
    if(texto.includes("..--") || texto.includes(".-.-") || texto.includes("---.") || texto.includes("----")){
        console.log("Se ingleso un codigo invalido");
    }else{
        for (let i = 0; i < texto.length; i++){
          let codigoActual = texto[i];
          if (codigoActual === ""){
            traduccion += " ";
          }
          
          for(let j = 0; j < letras.length; j++){
      
            if(codigoActual === letras[j].Morse){
              traduccion += letras[j].letra;
            }
      
          }
        }
        console.log(traduccion);
      }
    }
    
      
}

//   for (let i = 0; i < texto.length; i++){
//     let codigoActual = texto[i];
//     if (codigoActual === ""){
//       traduccion += " ";
//     }

//     for(let j = 0; j < letras.length; j++){

//       if(codigoActual === letras[j].Morse){
//         traduccion += letras[j].letra;
//       }

//     }
//   }
//   console.log(traduccion);
// }


