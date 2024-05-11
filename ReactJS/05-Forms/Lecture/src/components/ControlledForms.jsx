import { useState } from "react";


export default function ControlledForm() {

    const [usernameValue, setUsernameValue] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    };

    return (
        <>
            <h1>Controlled form</h1>

            <form >

                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        onChange={usernameChangeHandler}
                        value={usernameValue}
                        type="text" name="username" id="username" />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password" name="password" id="password" />
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        onChange={e => setAge(e.target.value)}
                        value={age}
                        type="numer" name="age" id="age" />
                </div>

                <div>
                    {/* By def. BTN submits form when inside form */}
                    <button>Register</button>
                    <button type="button">Reset</button>
                </div>
            </form>
        </>
    );
}