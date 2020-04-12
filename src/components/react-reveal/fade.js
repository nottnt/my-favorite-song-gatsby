import React from "react"
import { Fade } from 'react-reveal';

const fade = ({ option, children }) => {
    return (
        <Fade
            left={option.left}
            right={option.right}
            up={option.up}
            down={option.down}
        >
            {children}
        </Fade>
    );
}

export default fade;