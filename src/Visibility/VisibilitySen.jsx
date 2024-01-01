import React from "react";
import VisibilitySensor from 'react-visibility-sensor';
import _debounce from 'lodash/debounce';

export const VisibilitySen = ({
    user,
    onVisibilityChange,
    ...props
}) => {
    // const debouncedOnChange = _debounce(onVisibilityChange, 100); // Adjust the delay time as needed
    const debouncedOnChange = onVisibilityChange; // Adjust the delay time as needed

    return (
        <>
            <VisibilitySensor
                onChange={(vis) => debouncedOnChange(vis, user, true)}
                {...props}
            >
                    <div className="user-container">
                        <p>
                            userId:{user.id}
                        </p>
                        <p>
                            userName: {user.name}
                        </p>
                    </div>
                    
            </VisibilitySensor>
            {user.data.map(userData => (
                <VisibilitySensor
                    key={userData.id} 
                    onChange={(vis) => debouncedOnChange(vis, userData, false)}
                    {...props}
                >
                    <div className="user-container">
                        <p>
                            userId:{userData.id}
                        </p>
                        <p>
                            userName: {userData.name}
                        </p>
                    </div>
                </VisibilitySensor>
            ))}
        </>
    )
}