import Form from 'react-bootstrap/Form';
import { useForm } from '../hooks/useForm';

function ArticleCreate() {

    const { values, changeHandler } = useForm({
        title: '',
        content: '',
    });

    return (
        <div>
            <Form style={{ width: '500px', margin: 'auto' }}>
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
            </Form>
        </div>
    );
}

export default ArticleCreate;