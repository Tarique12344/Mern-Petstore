// UserProfile.js

import React from 'react';
import { useAuth } from './AuthContext';

const UserProfile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default UserProfile;
