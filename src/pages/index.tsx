import Porta from "@/components/porta"
import PortaModel from "@/model/porta"
import { useState } from "react"

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  // const p2 = new PortaModel(2)
  // const p3 = new PortaModel(3)

  return (
    <div style={{display: 'flex'}}>
      <Porta porta={p1}/>
    </div>
  )
}
