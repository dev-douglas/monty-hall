import Porta from "@/components/porta"

export default function Home() {
  return (
    <div style={{display: 'flex'}}>
      <Porta />
      <Porta selecionada/>
      <Porta />
    </div>
  )
}
