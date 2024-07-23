import Form from 'react-bootstrap/Form';

function ArticleCreate() {
    return (
        <div>
            <Form style={{ width: '500px', margin: 'auto' }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="React hooks" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Custom React hooks help with...' />
                </Form.Group>
            </Form>
        </div>
    );
}

export default ArticleCreate;