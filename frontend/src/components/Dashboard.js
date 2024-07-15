import React, { useState, useEffect } from 'react';

function Dashboard() {

    // TODO: change ports
    const port = process.env.REACT_APP_PORT || 4000;

    const [dbData, setDbData] = useState([]);

    const fetchData = async() => {
        try {
            const response = await fetch(`http://localhost:${port}/built`);

            if (!response.ok) {
                throw new Error('Network response was not ok' + response.statusText);
            }

            const data = await response.json();
            console.log(data);  // TODO: remove later
            setDbData(data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log('Component mounted');
        fetchData();
    }, [])

    return (
        <h1>Hello</h1>
    );    
}

export default Dashboard;
