import { IconAward, IconCalendarTime } from "@tabler/icons"
import { CardToSection } from "../../../../../components/CardToSection"
import { PrivateRoutes } from "../../../../../models"
import { theme } from "../../../../../theme"
import { CardsToSection } from "../../styled-components/CardsToSection"

function CardsActions() {
  return (
    <CardsToSection>
      <CardToSection path={ `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.SCHEDULE}` } text="My Schedule" color={ theme.yellow.color } Image={IconCalendarTime} />
      <CardToSection path={ `/` } text="Evaluación Docente" color={ theme.graddient } Image={ IconAward } label="Este módulo estara activo a final del cuatri." />
    </CardsToSection>
  )
}
export default CardsActions