import { TerminalUI } from "../../../components/TerminalUI"
import { ContainerSection } from "../../../styled-components/Container"
import CardsActions from "./components/CardsActions/CardsActions"


function Dashboard() {
  return (
    <ContainerSection>
      <CardsActions/>
      <TerminalUI text='Crea tu horario facilmente sin complicaciones para que logres vizualizarlo de la mejor manera. Evalua a tus profesores al final del cuatrimestre para ayudar todos a conocer la forma de trabajo de ellos.' />
    </ContainerSection>
  )
}
export default Dashboard