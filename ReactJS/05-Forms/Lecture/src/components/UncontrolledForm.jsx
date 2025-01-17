

export default function UncontrolledForm() {


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log(formData.get('username'));
        console.log(formData.get('password'));
    };

    return (
        <>
            <h1>Uncontrolled form</h1>

            <form onSubmit={submitHandler}>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="numer" name="age" id="age" />
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