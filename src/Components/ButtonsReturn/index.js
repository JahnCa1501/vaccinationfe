import './ButtonsReturn.css';
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ButtonsReturn = ({ title })=> {
    const Navigator = useNavigate();
    const navegar = () => {
         Navigator('/login');
    }
    return(
            <button className="buttonsreturn" onClick={navegar}>
              <FaSignOutAlt />
            </button>
    );
}

export default ButtonsReturn;