class NumPrimos{
    isPrimo(num){
        let acu=0,divisor=2,band=1
        while(divisor < num && band == 1){
            if (num % divisor == 0){
                band=0
            }else{
                divisor=divisor+1
            }
        }
        return band
    }
    ejercicio2(){
        let numerosInput = document.getElementById("num1");
        let resultadoP = document.getElementById("resp");
        let serie = numerosInput.value.split(";").map(valor => parseInt(valor.trim()));
        let resp = []
        for (let i = 0; i < serie.length; i++) {
          if (this.isPrimo(serie[i])) {
             resp.push(serie[i])
             }
        }
        resultadoP.textContent = ` ${resp.join(",")} Son Primos`;
    }   
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new NumPrimos() 