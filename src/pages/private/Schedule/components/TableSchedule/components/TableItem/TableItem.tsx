import { IDay } from "../../../../models/IDay"
interface Props{
  data: IDay
}

function TableItem({data}:Props) {

  return (
    <td onClick={()=>{}} >
      <p>{data.subject}</p>
      <p>{data.teacher}</p>
      <p>{data.classroom}</p>
    </td>
  )
}
export default TableItem