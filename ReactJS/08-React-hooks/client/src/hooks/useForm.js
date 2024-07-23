import { useState } from "react";

export function useForm(initialValues) {

    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return {
        values,
        changeHandler
    };
}