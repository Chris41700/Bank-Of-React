import React from 'react'

function UserProfile(props) {
    return (
        <div>
            <h1>User Proifle</h1>

            <div>Username: {props.userName}</div>
            <div>Member Since: {props.memberSince}</div>
        </div>
    )
}

export default UserProfile