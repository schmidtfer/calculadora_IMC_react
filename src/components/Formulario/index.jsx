import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
  let [pesoAtual, setPesoAtual] = useState("");
  let [altura, setAltura] = useState("");
  let [valorIMC, setValorIMC] = useState(0);
  let [resultadoIMC, setResultadoIMC] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault(); 

    const peso = parseFloat(pesoAtual);
    const alturaMetros = parseFloat(altura);

    if (peso > 0 && alturaMetros > 0) {
      const imc = peso / (alturaMetros * alturaMetros);
      setValorIMC(imc);

      if (imc < 18.5) {
        setResultadoIMC("Você está abaixo do peso");
      } else if (imc >= 18.5 && imc < 24.9) {
        setResultadoIMC("Você está com peso normal");
      } else if (imc >= 25 && imc < 30) {
        setResultadoIMC("Você está com sobrepeso");
      } else {
        setResultadoIMC("Você está obeso");
      }
    } else {
      setResultadoIMC("Por favor, insira valores válidos para peso e altura.");
    }
  };
  return (
    
     <>
        <form className={styles.container} onSubmit={calcularIMC}>
          <h1>Calculadora IMC</h1>
          <label className={styles.label}>Peso (kg)</label>
          <input className={styles.input}
            type="number"
            placeholder="Peso"
            value={pesoAtual}
            onChange={(evento) => setPesoAtual(evento.target.value)}
          />
          <br />
          <label className={styles.label}>Altura (m)</label>
          <input className={styles.input}
            type="number"
            placeholder="Altura"
            value={altura}
            onChange={(evento) => setAltura(evento.target.value)}
          />
          <br />
          <button className={styles.button} type="submit">Calcular</button>
        </form>
        {valorIMC > 0 && (
          <div className={styles.resultado}>
            <h3>Seu IMC é: {valorIMC.toFixed(2)}</h3>
            <p>{resultadoIMC}</p>
          </div>
        )}
     
    </>
  );
};

export default Formulario;