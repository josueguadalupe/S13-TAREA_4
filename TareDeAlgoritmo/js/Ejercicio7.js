class SumDiv{
    sumaDivisores(numero, valorInicial) {
        let suma = 0;
        for (let i = valorInicial; i < numero; i++) {
          if (numero % i === 0) {
            suma += i;
          }
        }
        return suma;
      }
    ejercicio7(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        let $resp = document.getElementById("resp")
        let expo1=this.sumaDivisores(num1,num2)
        $resp.textContent=`La suma de los divisores es : ${expo1} `
        
    }

    limpiar(){
      let d=document
      d.getElementById('num1').value=""
      d.getElementById('num2').value=""
      d.getElementById('resp').textContent=""
  }
}
let cal = new SumDiv() 