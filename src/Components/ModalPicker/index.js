import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Buttons from '../Buttons';
import './ModalPicker.css';
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ModalPicker = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const Navigator = useNavigate();
    const navegar = () => {
         Navigator('/login');
    }
    return (
        <div>
            <div className='buttons'>
                <button onClick={handleOpen}><FaBars /></button>
            </div>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ ...style, width: 250 }}>
                    <button className='closebutton' onClick={handleClose}><FaWindowClose /></button>
                    <h2 id="modal-menu">Menú</h2>
                    <div style={{textAlign: "center"}}>
                    <Buttons>
                        <button class="button button1" onClick={navegar}>Citas</button>
                        <button class="button button2" onClick={navegar}>Usuario</button> <br />
                        <button class="button button1" onClick={navegar}>Carnet</button> <br />
                        <button class="button button2" onClick={navegar}>Vacunas</button>
                    </Buttons>
                    </div>
                </Box>
            </Modal>

        </div>

    );
}


const style = {
    backgroundColor: "white",
    borderRadius: 10,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    textAlign: "center",
};

export default ModalPicker;

