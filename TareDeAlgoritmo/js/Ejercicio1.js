class SumPerfe{
    esNumeroPerfecto(num1) {
        let suma = 0;
        for (let i = 0; i < num1; i++) {
          if (num1% i === 0) {
            suma += i;
          }
        }
        return suma === num1;
      }
    ejercicio1(){
        let numerosInput = document.getElementById("num1");
        let resultadoP = document.getElementById("resp");
        let serie = numerosInput.value.split(";").map(valor => parseInt(valor.trim()));
        let resp = []
        let $resp=0

        
        for (let i = 0; i < serie.length; i++) {
          if (this.esNumeroPerfecto(serie[i])) {
             $resp+= serie[i];
             resp.push(serie[i])
             }
        }
        resultadoP.textContent = `La suma de los números perfectos es: $${$resp}`;
    }
   

    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new SumPerfe() 