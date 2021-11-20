import React from 'react';
import '../components/LandingPage.css';
import LandingLogo from '../assets/images/landing-logo.png'
import Button from '@material-ui/core/Button';

function LandingPage() {
    return (
        <>
            <div className="container">
                <div>
                    <img className="logo" src={LandingLogo} />
                </div>
                <div>
                    <p>O Potes ajuda a dividir suas finanças através de percentuais.</p>
                </div>
                <div>
                    <Button variant="contained" color="primary">
                        Vamos lá
                    </Button>
                </div>
            </div>
        </>
    );
}

export default LandingPage;