import { IDay } from "../../../../models/IDay"

interface Props{
  data: IDay
}

function TableItem({data}:Props) {
  return (
    <td onClick={()=>alert('Aqui estara el modal')} >
      <p>{data.teacher}</p>
      <p>{data.subject}</p>
      <p>{data.classroom}</p>
    </td>
  )
}
export default TableItem