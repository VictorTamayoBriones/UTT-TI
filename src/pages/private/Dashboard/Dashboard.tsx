import { CardToSection } from "../../../components/CardToSection"
import { PrivateRoutes } from "../../../models"
import { theme } from "../../../theme"
import { CardsToSection } from "./styled-components/CardsToSection"
import { Container } from "./styled-components/ContainerDashboard"
import { IconCalendarTime, IconAward } from '@tabler/icons';

function Dashboard() {
  return (
    <Container>
      <h1>Welcome User</h1>
      <CardsToSection>
        <CardToSection path={ `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.SCHEDULE}` } text="My Schedule" color={ theme.yellow.color } Image={IconCalendarTime} />
        <CardToSection path={ `/` } text="Evaluación Docente" color={ theme.graddient } Image={ IconAward } />
      </CardsToSection>
    </Container>
  )
}
export default Dashboard