import styles from './styles.module.css'
import Cartao from "~/components/cartao";
import EntradaNumerica from "~/components/entradaNumerica";
import Link from 'next/link';
import { useState } from "react";

export default function Formulario() {

  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div >
        <Cartao bgcolor="#c0392c">
          <h1>Mony Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica 
            text="Quantidade de portas" 
            value={qtdePortas} 
            onChange={novoValor => setQtdePortas(novoValor)} 
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica 
            text="Porta com presente" 
            value={comPresente} 
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} 
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <h2 className={styles.link}>
            <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
              Iniciar
            </Link>
          </h2>
        </Cartao>
      </div>
    </div>
  )
}