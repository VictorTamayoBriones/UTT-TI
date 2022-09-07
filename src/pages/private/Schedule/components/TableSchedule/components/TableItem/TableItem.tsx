import { useDispatch } from "react-redux"
import { changeModalState } from "../../../../../../../redux/states/Modal/modal";
import { IDay } from "../../../../models/IDay"
interface Props{
  data: IDay
}

function TableItem({data}:Props) {

  const dispatch = useDispatch();

  return (
    <td onClick={()=>dispatch(changeModalState('visible'))} >
      <p>{data.subject}</p>
      <p>{data.teacher}</p>
      <p>{data.classroom}</p>
    </td>
  )
}
export default TableItem