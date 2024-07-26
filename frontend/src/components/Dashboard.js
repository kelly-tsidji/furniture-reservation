import React, { useState, useEffect } from 'react';
import FormattedDate from './Date';
import Sidebar from './Sidebar';
import '../style/Sidebar.css';

// TODO: removed unecessary colums from fetch request

function Dashboard() {

    // TODO: change ports
    const port = process.env.REACT_APP_PORT || 4000;
    const [dbData, setDbData] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

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
        <div key = {order.id} className='card mb-3'>
            <div className='card-body'>
                <h2 className='card-title'>Work Order #{order.workOrderId}</h2>
                <p className='card-text'>
                    Event: {order.event} ({FormattedDate(order.startDate)} to {FormattedDate(order.endDate)})
                </p>
                <p className='card-text'>
                    Event Building: {order.building.name}
                </p>
                <p className='card-text'>
                    Added by: {order.user.username}
                </p>
                <button className='btn btn-primary' onClick={() => setSelectedOrder(order.workOrderId)}>
                    View details
                </button>
            </div>
        </div>
    )

    // display the work orders, 
    // and optionally display the items loaned for a particular order
    return (
        <div className='container-fluid'>
            
            {/* <div className={`row flex-nowrap ${selectedOrder ? 'sidebar-open' : ''}`}> */}
            <div className='row flex-nowrap'>
                
                <main className={`main-content ${selectedOrder ? 'shrink' : ''}`}>
                {/* <main className={`col ${selectedOrder ? 'col-md-8' : 'col-md-11'} ms-3 me-3 ms-md-4 me-md-4 ms-lg-5 me-lg-5`}> */}
                {/* <main className='col ms-3 me-3 ms-md-4 me-md-4 ms-lg-5 me-lg-5'> */}
                   
                    <header className='my-4'>
                        <h1 className='text-center'>Dashboard: Upcoming Work Orders</h1>
                    </header>

                    {workOrders}
                </main>

                <Sidebar order={selectedOrder} onClose={() => setSelectedOrder(null)}/>
            </div>
        </div>
    );    

}

export default Dashboard;
