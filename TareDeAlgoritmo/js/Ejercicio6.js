class Divisores{
    ejercicio6(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        let $resp = document.getElementById("resp")
        let expo1=[]
        for(let pos=num2 ;pos < num1; pos++){
            if(num1 % pos == 0){
                expo1.push(pos)
            }
        }
        $resp.textContent=`Los divisores son : [${expo1}] `
    }

    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal = new Divisores() 