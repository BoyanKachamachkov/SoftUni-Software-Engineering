import { useState } from "react";


export default function ControlledForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    // 1. create states for each input field
    // 2. set initial values that are diff. than undefined or null
    // 3. add onChange handlers on each input
    // 4. add values to each input (connect with respective state)
    // 5. Achieve controlled form inputs!

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const resetHandler = () => {
        setUsername('');
        setPassword('');
        setAge('');
    };

    const submitHandler = (e) => {
        // prevent reload since its submit event, or attach onClick on the register button, thus there would be no need to prevent reload.
        e.preventDefault();
        console.log(username);
        console.log(password);
        console.log(age);

        // reset form after sending it to Mars! :)
        resetHandler();
    };

    return (
        <>
            <h1>Controlled form</h1>

            <form onSubmit={submitHandler}>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        placeholder="Choose username"
                        onChange={usernameChangeHandler}
                        value={username}
                        type="text" name="username" id="username" />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        placeholder="Choose password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password" name="password" id="password" />
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        placeholder="Select your age"
                        onChange={e => setAge(e.target.value)}
                        value={age}
                        type="numer" name="age" id="age" />
                </div>

                <div>
                    {/* By def. BTN submits form when inside form */}
                    <button >Register</button>
                    <button type="button" onClick={resetHandler}>Reset</button>
                </div>
            </form>
        </>
    );
}