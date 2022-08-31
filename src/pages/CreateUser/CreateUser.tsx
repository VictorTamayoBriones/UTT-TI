import { Container } from "../../components/Container"
import { OverlayLogin } from "../../components/OverlayLogin"
import CreateUserForm from "./components/CreateUserForm"
import { CreateUserProvider } from "./context/createUserProvider"

function CreateUser() {
  return (
    <Container width="50%" className="login">
      <h2>Sign up here!</h2>
      <CreateUserProvider>
        < CreateUserForm/>
      </CreateUserProvider>
      <OverlayLogin/>
    </Container>
  )
}
export default CreateUser