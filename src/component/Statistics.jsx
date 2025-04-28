import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Statistics = () => {
    const statistics = {
        totalOrders: 25,
        ordersInCart: 3,
        activeOrders: 5,
        canceledOrders: 2,
    };

    return (
        <Row className="mb-4">
            <Col md={3}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Total Orders</Card.Title>
                        <Card.Text>{statistics.totalOrders}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Orders in Cart</Card.Title>
                        <Card.Text>{statistics.ordersInCart}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Active Orders</Card.Title>
                        <Card.Text>{statistics.activeOrders}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Canceled Orders</Card.Title>
                        <Card.Text>{statistics.canceledOrders}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Statistics;