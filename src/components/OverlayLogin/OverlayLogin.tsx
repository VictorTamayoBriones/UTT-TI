import { Overlay } from "./style"
import Kraken1 from '../../assets/kraken-t1.svg';
import Kraken2 from '../../assets/kraken-t2.svg';


function OverlayLogin() {
  return (
    <Overlay>
        <img src={Kraken1} alt="" />
        <img src={Kraken2} alt="" />
    </Overlay>
  )
}
export default OverlayLogin