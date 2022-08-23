import { Overlay } from "./style"
import Kraken1 from '../../assets/kraken-t1.png';
import Kraken2 from '../../assets/kraken-t2.png';


function OverlayLogin() {
  return (
    <Overlay>
        <img src={Kraken1} alt="" />
        <img src={Kraken2} alt="" />
    </Overlay>
  )
}
export default OverlayLogin