import { CardToSection } from "../../../components/CardToSection"
import { PrivateRoutes } from "../../../models"
import { theme } from "../../../theme"
import { CardsToSection } from "./styled-components/CardsToSection"
import { Container } from "./styled-components/ContainerDashboard"


function Dashboard() {
  return (
    <Container>
      <h1>Welcome User</h1>
      <CardsToSection>
        <CardToSection path={ `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.SCHEDULE}` } text="My Schedule" color={ theme.yellow.color }/>
      </CardsToSection>
    </Container>
  )
}
export default Dashboard