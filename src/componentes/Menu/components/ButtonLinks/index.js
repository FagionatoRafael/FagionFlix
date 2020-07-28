import React from 'react';

function ButtonLink(props) {
    return (
        <a to={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;