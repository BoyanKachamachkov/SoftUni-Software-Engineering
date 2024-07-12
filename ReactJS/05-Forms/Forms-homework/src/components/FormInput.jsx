import styles from './FormInput.module.css';

const FormInput = (props) => {
  return (
    <div className="formInput">
      <label htmlFor="">Username: </label>
      <input placeholder={props.placeholder} type="text" name="username" id="username" />
    </div>
  );
};
export default FormInput;