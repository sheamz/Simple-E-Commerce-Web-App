import React from 'react';
import Statistics from './Statistics';

const UserInfo = ({ userInfo }) => {
    return (
        <div className="text-center mb-4">
            <h2>{`${userInfo.firstName} ${userInfo.middleName} ${userInfo.lastName}`}</h2>
            <p className="text-muted">{userInfo.email}</p>
            <Statistics />
        </div>
    );
};

export default UserInfo;