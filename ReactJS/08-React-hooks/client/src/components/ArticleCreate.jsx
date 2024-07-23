import Form from 'react-bootstrap/Form';
import { useForm } from '../hooks/useForm';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

// 4. Import in any component
import { useContext } from 'react';

function ArticleCreate() {
    const navigate = useNavigate();

    // 5. connect to context X
    const { user } = useContext(UserContext);
    const initialFormValues = {
        title: '',
        content: '',
    };

    const formSubmitHandler = (values) => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({...values, author: user.username})
            });

            const result = await response.json();
            navigate(`/articles/${result._id}/details`);

        })();
    };

    const { values, changeHandler, submitHandler } = useForm(initialFormValues, formSubmitHandler);

    return (
        <div>
            <Form style={{ width: '500px', margin: 'auto' }} onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="React hooks"
                        value={values.title}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='Custom React hooks help with...'
                        name="content"
                        value={values.content}
                        onChange={changeHandler}

                    />
                </Form.Group>

                <FormGroup>
                    <Button type="submit" variant="success">Submit</Button>{' '}
                </FormGroup>
            </Form>
        </div>
    );
}

export default ArticleCreate;