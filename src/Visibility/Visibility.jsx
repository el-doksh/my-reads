import React, { createRef, useState } from "react";
import './Visibility.scss';
import { usersList } from "./fakeData";
import { VisibilitySen } from "./VisibilitySen";

export const Visibility = () => {
    const [activeUser, setActiveUser] = useState(null);
    const [startScrolling, setStartScrolling] = useState(false);
    const menuRef = createRef();

    const onVisibilityChange = (vis, user, sub = false) => {
        console.log(sub ? 'MAIN: ' : 'SUB: ', user.name, vis);
        setActiveUser(user)
        // const planoutLineElement = document.getElementById('x-id');
        // if(planoutLineElement) {
            // menuRef.current.scrollTo({
            //     behavior: 'smooth',
            //     block: 'start',
            //     top: 10,
            // });
        // }
    }

    const onScrollHandler = () => {
        if(!startScrolling ) {
            setStartScrolling(true)
        }
        // console.log('onScrollHandler');
    }

    return (
        <div className="visibility-wrapper">
            <div className="left-bar" 
                onScroll={onScrollHandler} 
                delayedCall={true}
                // onScrollCapture={onScrollHandler}
                >
                {usersList.map(user => (
                    <VisibilitySen
                        key={user.id} 
                        user={user}
                        onVisibilityChange={onVisibilityChange}
                        scrollCheck
                        // scrollDelay={0} noneed
                        // active={startScrolling}
                        // scrollThrottle={0}
                        // intervalDelay={500}
    //   offset={{ top: -lazyOffset, bottom: -lazyOffset }}
                        // partialVisibility
                        minTopValue={0}
                        partialVisibility="top"
                        // offset={{top:0}}
                    />
                ))}
            </div>
            <div className="side-bar" ref={menuRef}>
                {usersList.map(user => {
                    return (
                        <>
                            <div className="user-item" key={user.id} >
                            <p id="x-id" style={{background: 'red'}}>
                                    {activeUser?.id === user.id ? 'ACTIVE' : ''} {' '}
                                </p>
                                <p>
                                    MAIN:{user.name}
                                </p>
                            </div>
                            {user.data.map(userData => (
                                <div className="user-item" key={userData.id} >
                                <p id="x-id" style={{background: 'red'}}>
                                        {activeUser?.id === userData.id ? 'ACTIVE' : ''} {' '}
                                    </p>
                                    <p>
                                        SUB:{userData.name}
                                    </p>
                                </div>
                            ))}
                        </>
                    )
                })}
            </div>
        </div>
    )
}