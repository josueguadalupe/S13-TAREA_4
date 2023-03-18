class Expo2{
    ejercicio4(){
        let numerosInput = document.getElementById("num1");
        let resultadoP = document.getElementById("resp");
        let serie = numerosInput.value.split(";").map(valor => parseInt(valor.trim()));
        let resp = [];
        for (let i = 0; i < serie.length; i++) {
          let potencia = Math.pow(serie[i], serie[i]);
          resp.push(potencia);
        }
      
        resultadoP.textContent = `El resultado es: ${resp}`;
      }
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new Expo2() 