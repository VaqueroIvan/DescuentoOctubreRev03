//Written by: Ivan Vaquero;
//Title: Clase2Carla;
//Declarations of variables;
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let dato3 = <HTMLInputElement>document.getElementById("dato3");

let valor1: number = 0;
let valor2: number = 0;
let valor3: string = 0;
//Main***********************************************************************
btnEnviar.addEventListener("click", () => {
  //It runs when you press submit button.
  valor1 = Number(dato1.value);
  valor2 = Number(dato2.value);
  valor3 = String(dato3.value);
  console.log("El valor 1 es: " + valor1);
  console.log("El valor 2 es: " + valor2);
  console.log("El valor 3 es: " + valor3);
  if (valor3 === "Octubre") {
    alert("TOTAL: " + valor1 * valor2);
    alert("TOTAL con descuento: " + valor1 * valor2 * 0.85);
  }
});
//End***************************************************************
