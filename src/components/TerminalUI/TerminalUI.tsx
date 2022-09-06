import { Aside } from "./components/Aside"
import { Body } from "./components/Body"
import { TerminalHeader } from "./components/TerminalHeader"
import { TerminalContainer } from "./styled-components/Terminal"

interface Props{
    text: string
}

function TerminalUI({text}:Props) {
  return (
    <TerminalContainer>
      <TerminalHeader/>
      <Aside/>
      <Body text={text} />
    </TerminalContainer>
  )
}
export default TerminalUI