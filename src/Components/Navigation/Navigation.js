import React, {useState} from 'react';
import './style.css'

function Navigation() {
    const[navstatus, setnavstatus] = useState(0);
    const[divwidth, setdivwidth] = useState('');

    function opennav() {
        if(navstatus===0) {
            setdivwidth('100%')
            setnavstatus(1)
        } else{
            setdivwidth('0')
            setnavstatus(0)

        }
    }
    return(
        <React.Fragment>
            <div>
                <div className='main-div' style={{width:divwidth}}>
                    <button onClick={opennav}><i className="fa fa-bars"/></button>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navigation;