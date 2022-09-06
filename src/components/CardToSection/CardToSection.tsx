import { TablerIcon } from "@tabler/icons";
import { useNavigate } from "react-router-dom"
import { Card, ImageCard, LabelCard } from "./styled-components/Card";

interface Props{
  path: string,
  text: string,
  color: string,
  Image: TablerIcon,
  label?: string
}

function CardToSection({path, text, color, Image, label}:Props) {

    const navigate = useNavigate();

    return (
      <>
        <Card onClick={ ()=>navigate(path) } color={ color } >
          <p>{text}</p>
          <ImageCard>
            <Image/>
          </ImageCard>
        </Card>
        {label && <LabelCard>*{label}</LabelCard>}
      </>
    )
}
export default CardToSection