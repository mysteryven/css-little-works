import React, { PropsWithChildren } from 'react'
import type { FunctionComponent } from 'react'
import { Link } from 'react-router-dom';

const Container: FunctionComponent<PropsWithChildren> = (props) => {
    return (
        <div className="menu-container-wrapper">
            <Link to="/" className="menu-back">Back</Link>
            <div className="menu-container">
                {props.children}
            </div>
        </div>
    )
}

export default Container;