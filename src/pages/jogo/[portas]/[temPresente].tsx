import Porta from "@/components/porta"
import { atualizarPortas, criarPortas } from "functions/portas"
import { useEffect, useState } from "react"
import styles from './styles.module.css'
import Link from "next/link"
import { useRouter } from 'next/router'

export default function jogo() {
  const router = useRouter()
  const [portas, setPortas] = useState([])
  const [valido, setValido] = useState(false)

  useEffect( () => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdPortasValidas = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setValido(qtdPortasValidas && temPresenteValido)

  }, [portas])

  useEffect( () => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])
  // +router.query.portas
  // +router.query.temPresente

  function renderizarPortas() {
    return portas.map( porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {
          valido ?
          renderizarPortas()
          : <h2>Valores Inválidos</h2>
      
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}