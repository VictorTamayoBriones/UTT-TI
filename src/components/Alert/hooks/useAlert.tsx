import { useDispatch } from "react-redux";
import { clearAlert, showAlert } from "../../../redux/states/Alert/alert";

export const useAlert = ()=>{

    const dispatch = useDispatch();

    const handleAlert = (status:'visible'|'hidden', type:'error'|'success', message:string) =>{
        dispatch(clearAlert(''));
        
        dispatch(showAlert({status, type, message})) ;

        setTimeout(()=>{
            dispatch(clearAlert(''));
        }, 4000)
    }

    return{
        handleAlert
    }
}