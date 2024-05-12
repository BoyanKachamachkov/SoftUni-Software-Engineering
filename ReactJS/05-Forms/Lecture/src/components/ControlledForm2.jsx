import { useState } from "react";

export default function ControlledForm2() {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (

        <div>
            <h1>Controlled form - exercise</h1>
            <form >

                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text" name="username" id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}

                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text" name="password" id="password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}

                    />
                </div>

                <button type="button" onClick={submitHandler}>Submit</button>
            </form>


        </div>

    );
}