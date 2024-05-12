

export default function ControlledForm2() {


    return (

        <div>
            <h1>Controlled form - exercise</h1>


            <form >

                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" />
                </div>

                <button>Submit</button>
            </form>


        </div>

    );
}