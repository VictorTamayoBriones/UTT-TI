import { IDay } from "../../../../models/IDay"
interface Props{
  data: IDay,
  rowId: string,
}

function TableItem({data, rowId}:Props) {

  return (
    <td onClick={()=>{console.log(rowId)}} >
      <p>{data.subject}</p>
      <p>{data.teacher}</p>
      <p>{data.classroom}</p>
    </td>
  )
}
export default TableItem