import React, {useState, initialState} from 'react';

function Login() {

    const [ID, setID] = useState(initialState)
    const [Password, setPassword] = useState(initialState)

    const onIDHandler = (event) => {
        setImmediate(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='login-content'> 
            <form className='login-form' onSubmit={onSubmitHandler}>
                <label>ID</label>
                <input type="ID" value={ID} onChange={onIDHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;