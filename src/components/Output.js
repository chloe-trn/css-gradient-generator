import React from 'react';

const Output = ({text}) => {
    return (
        <div className="css-output">
            background: {text};
        </div>
    );
}

export default Output;