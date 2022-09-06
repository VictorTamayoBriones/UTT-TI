import { BodyContainer } from "./styled-components/BodyContainer"

interface Props{
    text: string
}

function Body({text}:Props) {
  return (
    <BodyContainer>
        <p>{text}</p>
    </BodyContainer>
  )
}
export default Body