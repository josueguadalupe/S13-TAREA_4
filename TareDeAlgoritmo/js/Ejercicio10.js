class DigPares{
    pares(arreglo){
        let cv = []
        for(let pos=0;pos<=arreglo.length;pos++){
            if (arreglo[pos]%2==0){
                cv.push(arreglo[pos])
            }
        }
        return cv
    }
    ejercicio10(){
        let d=document
        let num1= (d.getElementById('num1').value)
        let pares1=this.pares(num1)
        d.getElementById("resp").textContent=`Los digitos pares son: [${pares1}] ` 
    }
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('resp').textContent=" "
    }  
}
let cal = new DigPares() 