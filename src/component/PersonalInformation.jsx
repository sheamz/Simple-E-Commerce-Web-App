import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const PersonalInformation = ({ userInfo, setUserInfo }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Personal Information Updated:', userInfo);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col md={6} className="mx-auto">
                    <Form.Group controlId="firstName" className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={userInfo.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                        />
                    </Form.Group>
                    <Form.Group controlId="middleName" className="mb-3">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="middleName"
                            value={userInfo.middleName}
                            onChange={handleChange}
                            placeholder="Enter your middle name"
                        />
                    </Form.Group>
                    <Form.Group controlId="lastName" className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={userInfo.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                        />
                    </Form.Group>
                    <Form.Group controlId="contactNumber" className="mb-3">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="contactNumber"
                            value={userInfo.contactNumber}
                            onChange={handleChange}
                            placeholder="Enter your contact number"
                        />
                    </Form.Group>
                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className="d-flex justify-content-end" style={{ marginRight: '25%' }}>
                <Button variant="primary" type="submit" style={{ width: '200px', backgroundColor: '#8d27ae', outline: 'none', border: 'none' }}>
                    Save Changes
                </Button>
            </div>
        </Form>
    );
};

export default PersonalInformation;