class UltimoDig{
    ejercicio12(){
        let d=document
        let serie= parseInt(d.getElementById('num1').value)
        let $resp = document.getElementById("resp")
        let ultimo = serie % 10
        $resp.textContent=`El ultimo digito es : ${ultimo} `
    }
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new UltimoDig() 