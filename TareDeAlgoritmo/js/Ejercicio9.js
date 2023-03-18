class SumDig{
    sumadigito(num){
    let sum=0
        while(num>0){
            sum=sum+(num%10)
            num=Math.trunc(num/10)
        }
    return sum

    }
    ejercicio9(){
    let $input=document.getElementById("num1")
    let numero = $input.value
    let $resp = document.getElementById("resp")
    let sum = this.sumadigito(numero)
    $resp.value=`La suma de los digitos es:${sum}`
    }

    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new SumDig() 