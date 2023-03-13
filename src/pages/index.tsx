import styles from './styles.module.css'
import Cartao from "~/components/cartao";
import Link from 'next/link';

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Mony Hall</h1>
        </Cartao>
        <Cartao></Cartao>
      </div>
      <div>
        <Cartao></Cartao>
        <Cartao bgcolor="#28a085">
          <h2 className={styles.link}>
            <Link href={`/jogo/4/2`}>
              Iniciar
            </Link>
          </h2>
        </Cartao>
      </div>
    </div>
  )
}