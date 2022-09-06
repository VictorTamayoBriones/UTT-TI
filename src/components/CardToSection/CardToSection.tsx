import { useNavigate } from "react-router-dom"
import { Card, ImageCard } from "./styled-components/Card";
import { IconCalendarStats } from '@tabler/icons';

interface Props{
    path: string,
    text: string,
    color: string
}

function CardToSection({path, text, color}:Props) {

    const navigate = useNavigate();

    return (
      <Card onClick={ ()=>navigate(path) } color={ color } >
        <p>{text}</p>
        <ImageCard>
          <IconCalendarStats/>
        </ImageCard>
      </Card>
    )
}
export default CardToSection