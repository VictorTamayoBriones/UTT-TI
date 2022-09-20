import { useContext } from "react"
import { IDay } from "../../../../models/IDay"
import { ModalContext } from "../../../../context/ModalContext/ModalContext"
import { TableItemSchedule } from '../../styled-components/TableItem';
interface Props{
  data: IDay,
  rowId: string,
  indexDay: number
}

function TableItem({data, rowId, indexDay}:Props) {

  const { handleModal } = useContext(ModalContext);
  
  return (
    <TableItemSchedule onClick={ ()=>handleModal(true, data, rowId, indexDay) } color={data.color} >
      <p>{data.subject}</p>
      <p>{data.teacher}</p>
      <p>{data.classroom}</p>
    </TableItemSchedule>
  )
}
export default TableItem