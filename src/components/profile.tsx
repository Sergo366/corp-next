'use client'

import React from 'react';
import {useSession} from "next-auth/react";

const Profile = () => {
    const session = useSession();

    console.log('session', session)

    return (
        <div>
            {session.data?.user
                ? 'user is signed in'
                : 'user is signed out'
            }
        </div>
    );
};

export default Profile;