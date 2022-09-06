import { TerminalUI } from "../../../components/TerminalUI"
import CardsActions from "./components/CardsActions/CardsActions"
import { Container } from "./styled-components/ContainerDashboard"


function Dashboard() {
  return (
    <Container>
      <h1>Welcome User</h1>
      <CardsActions/>
      <TerminalUI text='Crea tu horario facilmente sin complicaciones para que logres vizualizarlo de la mejor manera. Evalua a tus profesores al final del cuatrimestre para ayudar todos a conocer la forma de trabajo de ellos.' />
    </Container>
  )
}
export default Dashboard