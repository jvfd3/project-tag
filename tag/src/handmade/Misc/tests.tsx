import React from 'react';
type Prop1 = {
    quotes: string[]
}

type Prop2 = {
    currentIndex: number,
}

class TestClass1 extends React.Component<Prop1, Prop2> {
    render() {
        return (

            <div className='WhiteText'>
                <header className="App-header">
                    <h3>
                        Render Component with State and Props using TypeScript
                    </h3>
                </header>
            </div>
        );
    }
}



export default TestClass1;