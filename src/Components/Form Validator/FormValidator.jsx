import React, {useState} from 'react';
import './form.css';

const FormValidator = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const [erruser, seterruser] = useState('');
    const [errmail, seterrmail] = useState('');
    const [errpass, seterrpass] = useState('');
    const [errcpass, seterrcpass] = useState('');

    const [ucolor, setucolor] = useState('');
    const [mailcolor, setmailcolor] = useState('');
    const [pwcolor, setpwcolor] = useState('');
    const [cpwcolor, setcpwcolor] = useState('');


    const validate = () => {
        if (userName.length > 8)
        {
            seterruser('')
            setucolor('green')
        }
        else
        {
            seterruser('username must be 8 characters long')
            setucolor('red')
        }

        if(email.includes('@gmail'))
        {
            seterrmail('')
            setmailcolor('green')
        }
        else
        {
            setmailcolor('red');
            seterrmail('must contain @gmail')
        }
        if (password.length > 8)
        {
            seterrpass('')
            setpwcolor('green')
        }
        else
        {
            seterrpass('pw must be 8 characters long')
            setpwcolor('red')
        }
        if (password !== '' && cpassword===password)
        {
            seterrcpass('')
            setcpwcolor('green')
        }
        else
        {
            seterrcpass('passwords should match')
            setcpwcolor('red')
        }
    }

    return (
        <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow p-3 mb-5 bg-white rounded text-center">
                    <h1>Form Validation</h1>
                    <input type="text" placeholder='Username' className='form-control' style={{borderColor: ucolor}}
                           value={userName}
                           onChange={(e) => {
                               setUserName(e.target.value)
                           }}/><small>{erruser}</small>
                    <input type="email" placeholder='Email' className='form-control' style={{borderColor: mailcolor}}
                           value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/><small>{errmail}</small>
                    <input type="password" placeholder='Password' className='form-control'
                           style={{borderColor: pwcolor}} value={password}
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}/><small>{errpass}</small>
                    <input type="password" placeholder='Confirm Password' className='form-control'
                           style={{borderColor: cpwcolor}} value={cpassword}
                           onChange={(e) => {
                               setCpassword(e.target.value)
                           }}/><small>{errcpass}</small>
                    <button className='btn' onClick={validate}>Submit</button>

                </div>
            </div>

        </React.Fragment>
    );
}


export default FormValidator;