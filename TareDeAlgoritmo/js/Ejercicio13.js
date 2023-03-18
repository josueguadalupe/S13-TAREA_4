class FactoNum{
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=""
    }
    factorialnum(num){
        let facto=1
        for(let i=1;i<=num;i++){
            facto=facto*i
        }
       return facto
    }
    ejercicio13(){
        let d=document
        let num1=parseInt(d.getElementById('num1').value)
        let resp=this.factorialnum(num1)
        d.getElementById("resp").textContent=`El factorial es: ${resp} ` 
    }

}
let cal = new FactoNum() 