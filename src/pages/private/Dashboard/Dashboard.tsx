import { CardToSection } from "../../../components/CardToSection"
import { CardsToSection } from "./styled-components/CardsToSection"
import { Container } from "./styled-components/ContainerDashboard"


function Dashboard() {
  return (
    <Container>
      <h1>Welcome User</h1>
      <CardsToSection>
        <CardToSection path="/" text="My Schedule" color="#ccc"/>
      </CardsToSection>
    </Container>
  )
}
export default Dashboard