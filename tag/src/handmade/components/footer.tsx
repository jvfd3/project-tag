// Footer

import React from 'react';

const estilo = {
    red: {
        color: 'red',
        backgroundColor: 'red'
    },
}

class FooterComponentClass extends React.Component {
    render() {
        return (
            <div className='FooterCapsule' style={estilo.red}>
                <h1 className=''>
                    R
                </h1>
            </div>
        );
    }
}

export default FooterComponentClass;