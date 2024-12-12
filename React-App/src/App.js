import React from 'react';

const App = () => {

    (async () => {
        const response = await fetch('http://localhost:12345/works?creationDate_gte=' + 1734969600000);
        const result = await response.json();
        console.log(result);
    })()

    return <h1>Hello, React!</h1>;
};

export default App;
