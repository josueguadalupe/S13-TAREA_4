class PrimerDig{
    primer(numero){
        while (numero >= 10) {
            numero =numero/10;
          }
        return Math.trunc(numero);
    }
    ejercicio11(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let $resp = document.getElementById("resp")
        let primer=this.primer(num1)
        $resp.textContent=`El primer digito es : ${primer} `

    }
    
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new PrimerDig() 