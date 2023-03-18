class TablaMul{
    ejercicio5(){
        let numerosInput = parseInt(document.getElementById("num1").value);
        let $resp = document.getElementById("resp");
        let resultado=" "
        for (let i = 1; i <= 12; i++) {
            resultado+=`${numerosInput} x ${i} = ${numerosInput * i}\n`;
          }
          $resp.textContent=resultado
    }
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new TablaMul() 