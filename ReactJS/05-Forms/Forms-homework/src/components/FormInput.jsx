import styles from './FormInput.module.css';

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div className="formInput">
      <label htmlFor="">{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};
export default FormInput;
