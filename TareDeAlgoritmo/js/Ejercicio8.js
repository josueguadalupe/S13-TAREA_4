class DigNum{  
    ejercicio8() {
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let digitos = [];
        while(num1 != 0) {
           digitos.push(num1 % 10);
           num1=Math.trunc(num1/10)
           d.getElementById("resp").textContent=`[ ${digitos} ]`
        }
      }  

      limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new DigNum() 