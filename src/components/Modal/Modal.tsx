import { ModalContainer } from "./styled-components/ModalContainer"
import { ModalOverLay } from "./styled-components/ModalOverLay"
import { IconLetterX } from '@tabler/icons';
import { CloseButton } from "./styled-components/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { changeModalState, IModal } from "../../redux/states/Modal/modal";
import { Form } from "../../styled-components/FormElements/Form";
import { Input } from "../../styled-components/FormElements/Input";
import { Button } from "../Button";

function Modal() {

  const modal = useSelector((store:AppStore) => store.modal );
  const dispatch = useDispatch();

  return (
    <ModalOverLay status={modal.statusOfModal} >
      <ModalContainer>
        <CloseButton onClick={()=>dispatch(changeModalState('hidden'))} >
          <IconLetterX/>
        </CloseButton>
        <Form>
          <div className="inputs">
            <Input label='Subject' type="text" name='subject' value='' onChange={()=>{}} />
            <Input label='Teacher' type="text" name='teacher' value='' onChange={()=>{}} />
            <Input label='Classroom' type="text" name='classroom' value='' onChange={()=>{}} />
          </div>
          <Button type="submit" >Save</Button>
        </Form>
      </ModalContainer>
    </ModalOverLay>
  )
}
export default Modal