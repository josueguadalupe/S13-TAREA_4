class ArrFacto{
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=""
    }
    factorialnum(num){
        let factoriales = []
        for (let i = 0; i < num.length; i++) {
            let factorial = 1
        for (let j = 2; j <= num[i]; j++) {
            factorial = factorial* j
          }
            factoriales.push(factorial)
        }
        return factoriales
    }
    ejercicio14(){
        let cadena = document.getElementById("num1").value
        let arreglo = cadena.split(";")
        let resp=this.factorialnum(arreglo)
        document.getElementById("resp").textContent=`El factorial de ${arreglo} es: ${resp} ` 
    }
}
let cal = new ArrFacto() 