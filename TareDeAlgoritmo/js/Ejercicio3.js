class Base{
    ejercicio3(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        let $resp = document.getElementById("resp")
        let mul=Math.pow(num1,num2) 
        $resp.textContent=`La potencia de ${num1} elevado a: ${num2} es igual a ${mul} `
    }

    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new Base() 