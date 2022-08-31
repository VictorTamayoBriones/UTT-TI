
import { useSelector } from "react-redux"
import { AppStore } from "../../redux/store"
import { AlertContainer } from "./style/style"

function Alert() {

  const alertState = useSelector((store: AppStore)=>store.alert);

  return (
    <AlertContainer status={ alertState.status } type={ alertState.type }>
      <p>{ alertState.message }</p>
    </AlertContainer>
  )
}
export default Alert