class RangoNum{
    ejercicio15 (){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        let resultado = [];
        for (let i = num1; i < num2; i++) {
          resultado.push(i);
        }
        d.getElementById("resp").textContent=`El rango es: [ ${resultado} ]`
      }
      
      limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new RangoNum() 