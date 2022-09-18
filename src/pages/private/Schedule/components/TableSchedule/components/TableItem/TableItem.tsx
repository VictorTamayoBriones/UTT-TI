import { useContext } from "react"
import { IDay } from "../../../../models/IDay"
import { ModalContext } from "../../../../context/ModalContext/ModalContext"
interface Props{
  data: IDay,
  rowId: string,
  indexDay: number
}

function TableItem({data, rowId, indexDay}:Props) {

  const { handleModal } = useContext(ModalContext);

  return (
    <td onClick={ ()=>handleModal(true, data, rowId, indexDay) } >
      <p>{data.subject}</p>
      <p>{data.teacher}</p>
      <p>{data.classroom}</p>
    </td>
  )
}
export default TableItem