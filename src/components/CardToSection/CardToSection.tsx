import { TablerIcon } from "@tabler/icons";
import { useNavigate } from "react-router-dom"
import { Card, ImageCard } from "./styled-components/Card";

interface Props{
  path: string,
  text: string,
  color: string,
  Image: TablerIcon
}

function CardToSection({path, text, color, Image}:Props) {

    const navigate = useNavigate();

    return (
      <Card onClick={ ()=>navigate(path) } color={ color } >
        <p>{text}</p>
        <ImageCard>
          <Image/>
        </ImageCard>
      </Card>
    )
}
export default CardToSection