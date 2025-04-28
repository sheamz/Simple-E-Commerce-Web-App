import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ShippingInformation = () => {
    const [addresses, setAddresses] = useState([
        {
            street: '123 Main St.',
            region: 'Region 4A',
            province: 'Silang',
            city: 'Cavite',
            barangay: 'Adlas',
            postalCode: '4118',
        },
    ]);

    const [newAddress, setNewAddress] = useState({
        street: '',
        region: '',
        province: '',
        city: '',
        barangay: '',
        postalCode: '',
    });

    const [editIndex, setEditIndex] = useState(null);

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setNewAddress({ ...newAddress, [name]: value });
    };

    const addAddress = () => {
        if (
            !newAddress.street ||
            !newAddress.region ||
            !newAddress.province ||
            !newAddress.city ||
            !newAddress.barangay ||
            !newAddress.postalCode
        ) {
            alert('Please fill in all address fields.');
            return;
        }

        if (editIndex !== null) {
            const updatedAddresses = [...addresses];
            updatedAddresses[editIndex] = newAddress;
            setAddresses(updatedAddresses);
            setEditIndex(null);
        } else {
            setAddresses([...addresses, newAddress]);
        }

        setNewAddress({
            street: '',
            region: '',
            province: '',
            city: '',
            barangay: '',
            postalCode: '',
        });
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setNewAddress(addresses[index]);
    };

    const handleDelete = (index) => {
        const updatedAddresses = addresses.filter((_, i) => i !== index);
        setAddresses(updatedAddresses);
    };

    return (
        <>
            <Row className="mb-3">
                <Col md={6} className="mx-auto">
                    <Form.Group controlId="street" className="mb-3">
                        <Form.Label>Street Name, Building, House No.</Form.Label>
                        <Form.Control
                            type="text"
                            name="street"
                            value={newAddress.street}
                            onChange={handleAddressChange}
                            placeholder="Enter street name, building, house no."
                        />
                    </Form.Group>
                    <Form.Group controlId="region" className="mb-3">
                        <Form.Label>Region</Form.Label>
                        <Form.Control
                            type="text"
                            name="region"
                            value={newAddress.region}
                            onChange={handleAddressChange}
                            placeholder="Enter region"
                        />
                    </Form.Group>
                    <Form.Group controlId="province" className="mb-3">
                        <Form.Label>Province</Form.Label>
                        <Form.Control
                            type="text"
                            name="province"
                            value={newAddress.province}
                            onChange={handleAddressChange}
                            placeholder="Enter province"
                        />
                    </Form.Group>
                    <Form.Group controlId="city" className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            value={newAddress.city}
                            onChange={handleAddressChange}
                            placeholder="Enter city"
                        />
                    </Form.Group>
                    <Form.Group controlId="barangay" className="mb-3">
                        <Form.Label>Barangay</Form.Label>
                        <Form.Control
                            type="text"
                            name="barangay"
                            value={newAddress.barangay}
                            onChange={handleAddressChange}
                            placeholder="Enter barangay"
                        />
                    </Form.Group>
                    <Form.Group controlId="postalCode" className="mb-3">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            type="text"
                            name="postalCode"
                            value={newAddress.postalCode}
                            onChange={handleAddressChange}
                            placeholder="Enter postal code"
                        />
                    </Form.Group>
                    <Button variant="success" className="w-100 mb-3" onClick={addAddress}>
                        <FaPlus /> {editIndex !== null ? 'Update Address' : 'Add Address'}
                    </Button>
                </Col>
            </Row>

            <h5 className="mt-4 text-center">Saved Addresses:</h5>
            {addresses.map((address, index) => (
                <Card key={index} className="mb-3 w-50 mx-auto">
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <h6>Address {index + 1}</h6>
                        <Button variant="outline-secondary" onClick={() => handleEdit(index)}>
                            <FaEdit /> Edit
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        <p><strong>Address:</strong> {address.street} {address.barangay} {address.city} {address.province} {address.region} {address.postalCode}</p>
                        <div className="d-flex justify-content-end">
                            <Button variant="danger" onClick={() => handleDelete(index)}>
                                <FaTrash /> Delete
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default ShippingInformation;