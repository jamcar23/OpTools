import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Login(): React.ReactElement {
  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Title>Connect to device</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="ipAddress">
              <Form.Label>IP Address</Form.Label>
              <Form.Control placeholder="127.0.0.1:5555" />
              <Form.Text className="test-muted">
                IP Address and port of device running OP with Zink. Note: don`t specify protocol (i.e. don`t add
                http://, tcp://, ipc://, etc.).
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Connect
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
