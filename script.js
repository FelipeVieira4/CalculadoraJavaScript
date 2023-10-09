//Colocar regex para input do teclado
const addValor = (valor) =>{

  document.getElementById("input").value += valor;
  return;

  return;
}

const calcularOperacao = () =>{
  let display = document.getElementById("input");

  try{
    display.value = eval(display.value);
  }catch{
    alert("[ERRO] Reveja a Equação");
  }  

  return;
}

const limparInput = () =>{
  document.getElementById("input").value="";
  return;
}