import React, { PropsWithChildren } from 'react'
import type { FunctionComponent } from 'react'

const Container: FunctionComponent<PropsWithChildren> = (props) => {
    return (
        <div className="menu-container-wrapper">
            <div className="menu-container">
                {props.children}
            </div>
        </div>
    )
}

export default Container;