import * as React from 'react';
import Page from '../../Components/Page';
import ModalPicker from '../../Components/ModalPicker';
import Buttons from '../../Components/Buttons';
import TitulosInicio from '../../Components/StartTittles';
import Presentation from '../../Components/Presentation';
import { useNavigate } from 'react-router-dom';

var nombre = localStorage.getItem('Nombre');

const Menu = () => {
    const Navigator = useNavigate();
    const navegar = () => {
         Navigator('/login');
    }
    const citas = () => {
        Navigator('/citas');
    }
    const SignIn = () => {
        Navigator('/signin');
    }
    const Vacunas = () => {
        Navigator('/vacunas');
    }
    const Search = () => {
        Navigator('/search');
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
                        <button class="button button1" onClick={citas}>Citas</button>
                        <button class="button button2" onClick={SignIn}>Usuario</button>
                        <button class="button button1" onClick={Search}>Carnet</button>
                        <button class="button button2" onClick={Vacunas}>Vacunas</button>
                    </Buttons>
                </div>
            </div>
        </Page>

    );
}

export default Menu;


