import React, { useContext, useEffect, useState } from "react"
import { Button } from "../../../../../../components/Button"
import { Form } from "../../../../../../styled-components/FormElements/Form"
import { Input } from "../../../../../../styled-components/FormElements/Input"
import { ModalContext } from "../../../context/ModalContext/ModalContext"
import { ScheduleContext } from "../../../context/SheduleContext/ScheduleContext"

function FormModal() {

  const { modal:{modalDataForm, rowId, indexDay}, closeModal } = useContext(ModalContext);
  
  useEffect(()=>{
    setFormState(modalDataForm);
  }, [modalDataForm])

  const [formState, setFormState]=useState({
    subject: '',
    teacher: '',
    classroom: '',
    color: 'teal'
  })

  const { updateRow } = useContext(ScheduleContext);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setFormState({...formState, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    updateRow(rowId, indexDay, formState);
    closeModal();
  }

  return (
    <Form onSubmit={ handleSubmit } >
      <Input name="subject" type="text" label="Subject" value={ formState.subject } onChange={ handleChange } />
      <Input name="teacher" type="text" label="Teacher" value={ formState.teacher } onChange={ handleChange } />
      <Input name="classroom" type="text" label="Classroom" value={ formState.classroom } onChange={ handleChange } />
      <Input name="color" type="color" label="Color" value={formState.color} onChange={ handleChange } />
      <Button type="submit" >Save</Button>
    </Form>
  )
}
export default FormModal