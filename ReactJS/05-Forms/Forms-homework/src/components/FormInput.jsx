import styles from './FormInput.module.css';

const FormInput = (props) => {
  return (
    <div className="formInput">
      {/* <label htmlFor="">Username: </label> */}
      <input name={props.name} />
    </div>
  );
};
export default FormInput;
