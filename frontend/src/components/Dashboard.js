import React, { useState, useEffect } from 'react';

function Dashboard() {

    // TODO: change ports
    const port = process.env.REACT_APP_PORT || 4000;

    const [dbData, setDbData] = useState([]);

    // fetchData() gets the work orders from the database 
    // and saves them in dbData
    const fetchData = async() => {
        try {
            const response = await fetch(`http://localhost:${port}/orders`, { signal: AbortSignal.timeout(5000) });

            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }

            const data = await response.json();
            setDbData(data);

        } catch (error) {
            console.error(error);
        }
    }

    // fetch the work orders when the page is opened by the user
    useEffect(() => {
        fetchData();
    }, [])

    console.log(dbData);  // TODO: remove later

    // stores each work order with its associated event, building, and user
    const workOrders = dbData.map(order =>
        <div key = {order.id}>
            <h2>Work Order #{order.workOrderId}</h2>
            <p>
                Event: {order.event} ({order.startDate} to {order.endDate})
            </p>
            <p>
                Event Building: {order.building.name}
            </p>
            <p>
                Added by: {order.user.username}
            </p>
        </div>
    )

    return (

        <>
            <header>
                <h1>Dashboard: Upcoming Work Orders</h1>
            </header>

            {workOrders}
        </>
    );    

}

export default Dashboard;
