import { useState } from "react";

export function useForm(initialValues, submitCallback) {

    const [values, setValues] = useState(initialValues);

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);
    };

    const changeHandler = (e) => {
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return {
        values,
        changeHandler,
        submitHandler
    };
}