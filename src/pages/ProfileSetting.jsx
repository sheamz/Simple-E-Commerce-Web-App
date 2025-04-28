import React, { useState } from 'react';
import NavBarHome from '../component/NavBarHome';
import { Container, Nav } from 'react-bootstrap';
import UserInfo from '../component/UserInfo';
import PersonalInformation from '../component/PersonalInformation';
import ShippingInformation from '../component/ShippingInformation';
import Privacy from '../component/Privacy';

const ProfileSetting = () => {
    const [activeTab, setActiveTab] = useState('personalInfo'); 

    const [userInfo, setUserInfo] = useState({
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        contactNumber: '',
    });

    return (
        <div className="bg-light min-vh-100">
            <NavBarHome />
            <Container className="mt-4">
                <UserInfo userInfo={userInfo} />
                <Nav variant="tabs mb-5" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                    <Nav.Item>
                        <Nav.Link eventKey="personalInfo">Personal Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="shippingInfo">Shipping Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="privacy">Privacy</Nav.Link>
                    </Nav.Item>
                </Nav>

                {activeTab === 'personalInfo' && (
                    <PersonalInformation userInfo={userInfo} setUserInfo={setUserInfo} />
                )}
                {activeTab === 'shippingInfo' && <ShippingInformation />}
                {activeTab === 'privacy' && <Privacy />}
            </Container>
        </div>
    );
};

export default ProfileSetting;