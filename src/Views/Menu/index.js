import * as React from 'react';
import Page from '../../Components/Page';
import ModalPicker from '../../Components/ModalPicker';
import Buttons from '../../Components/Buttons';
import TitulosInicio from '../../Components/StartTittles';
import Presentation from '../../Components/Presentation';
import { useNavigate } from 'react-router-dom';

var nombre = "Lizzi Silva";

const Menu = () => {
    const Navigator = useNavigate();
    const navegar = () => {
         Navigator('/login');
    }

    return (
       
        <Page
            showNavBar={true}
            useAbsoluteCenter={true}
            pageTitle="Menú Principal">
            <div>
                <ModalPicker>
                </ModalPicker>
            </div>
            <div>
                <TitulosInicio
                    title={`Bienvenid@ ${nombre}`}>
                </TitulosInicio>
                <Presentation></Presentation>
                <div>
                    <Buttons>
                        <button class="button button1" onClick={navegar}>Citas</button>
                        <button class="button button2" onClick={navegar}>Usuario</button>
                        <button class="button button1" onClick={navegar}>Carnet</button>
                        <button class="button button2" onClick={navegar}>Vacunas</button>
                    </Buttons>
                </div>
            </div>
        </Page>

    );
}

export default Menu;


