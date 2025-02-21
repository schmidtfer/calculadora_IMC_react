 import { useState } from "react";
 
 const Formulario = () => {
    let [pesoAtual, setPesoAtual] = useState(0);
    let [altura, setAltura] = useState(0);

    const renderizaResultado = () => {
        const media = pesoAtual / (altura * 2);
    
    if(media <18,5) {
        return (
            <p>Você está abaixo do peso</p>
        )
      
    } else if(media> 18,5 && media <24,9) {
        return (
            <p>Você está com peso normal</p>
        )
    } else if (media> 25 && media <30 ){
        return (
            <p>Você está com sobrepeso</p>
        )
    } else{
        return (
            <p>Você está obeso</p>
        )
    
    }
    
    }

     return (
        <div className="container">
            <h1> Calculadora IMC</h1>        
           <form>
            <input type="number" placeholder="Peso" onChange={evento =>setPesoAtual(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Altura" onChange={evento =>setAltura(parseFloat(evento.target.value))} />
            <button type="submit">Calcular</button>
            {renderizaResultado()}
        </form>
        <>   
            <h3>Seu IMC é: </h3>
        </>
        </div>
 )


}





export default Formulario