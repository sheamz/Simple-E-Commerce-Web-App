import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Privacy = () => {
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Passwords Updated:', passwords);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col md={6} className="mx-auto">
                    <Form.Group controlId="currentPassword" className="mb-3">
                        <Form.Label>Current Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type={showPassword.currentPassword ? 'text' : 'password'}
                                name="currentPassword"
                                value={passwords.currentPassword}
                                onChange={handlePasswordChange}
                                placeholder="Enter current password"
                            />
                            <Button
                                variant="outline-secondary"
                                onClick={() => togglePasswordVisibility('currentPassword')}
                            >
                                {showPassword.currentPassword ? <FaEyeSlash /> : <FaEye />}
                            </Button>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="newPassword" className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type={showPassword.newPassword ? 'text' : 'password'}
                                name="newPassword"
                                value={passwords.newPassword}
                                onChange={handlePasswordChange}
                                placeholder="Enter new password"
                            />
                            <Button
                                variant="outline-secondary"
                                onClick={() => togglePasswordVisibility('newPassword')}
                            >
                                {showPassword.newPassword ? <FaEyeSlash /> : <FaEye />}
                            </Button>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="confirmPassword" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type={showPassword.confirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                value={passwords.confirmPassword}
                                onChange={handlePasswordChange}
                                placeholder="Confirm new password"
                            />
                            <Button
                                variant="outline-secondary"
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                            >
                                {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </Button>
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
            <div className="d-flex justify-content-end" style={{ marginRight: '25%' }}>
                <Button
                    variant="primary"
                    type="submit"
                    style={{ width: '200px', backgroundColor: '#8d27ae', outline: 'none', border: 'none' }}
                >
                    Change Password
                </Button>
            </div>
        </Form>
    );
};

export default Privacy;