const UncontrolledForm = () => {
  return (
    <>
      <h1>Uncontrolled form</h1>

      <form>

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

    </>
  );
};
export default UncontrolledForm;