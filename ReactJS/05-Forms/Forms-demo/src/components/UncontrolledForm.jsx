import { useState } from "react";

const UncontrolledForm = () => {

  const [user, setUser] = useState({});

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData.get('username'));

    setUser({
      username: formData.get('username')
    });

  };



  return (
    <>
      <h1>Uncontrolled form</h1>

      {user.username
        ? <p>Hello{user.username}!</p>
        : (
          <form onSubmit={formSubmitHandler}>

            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" id="username" />
            </div>

            <div>
              <label htmlFor="username">Password:</label>
              <input type="password" name="password" id="password" />
            </div>

            <input type="submit" value='Login' />

          </form>
        )
      }


    </>
  );
};
export default UncontrolledForm;