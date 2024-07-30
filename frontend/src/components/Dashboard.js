import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import FormattedDate from './Date';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import NewWorkOrder from './NewWorkOrder';

import '../style/Dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


// TODO: removed unecessary colums from fetch request

function Dashboard() {

    // TODO: change ports
    const port = process.env.REACT_APP_PORT || 4000;
    const navigate = useNavigate();

    const [dbData, setDbData] = useState([]);
    // const [selectedOrder, setSelectedOrder] = useState(null);    // TODO: this was for the old sidebar
    
    const [newOrder, setNewOrder] = useState(false);

    // fetchData() gets the upcoming or currently happening work orders,
    // and saves them in dbData
    const fetchData = async() => {
        try {
            const response = await fetch(`http://localhost:${port}/recent-orders`, { signal: AbortSignal.timeout(5000) });

            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }

            const data = await response.json();
            setDbData(data);

        } catch (error) {
            console.error(error);
        }
    }

    // go to a new page to show the details of a work order
    const workOrderDetails = (workOrderId) => {
        navigate(`/orders/${workOrderId}`);
    }

    // fetch the recent work orders when the page is opened by the user
    useEffect(() => {
        fetchData();
    })

    console.log("DB DATA");
    console.log(dbData);  // TODO: remove later

    // stores each work order with its associated event, building, and user
    // NOTE: the work orders are already sorted by event date
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

                {/* used for the old sidebar */}
                {/* <button className='btn btn-primary' onClick={() => setSelectedOrder(order.workOrderId)}> */}
                <button className='btn btn-primary' onClick={() => workOrderDetails(order.workOrderId)}>
                    View details
                </button>
            </div>
        </div>
    )

    // TODO: actually style main section lol
    // display the work orders, 
    // and optionally display the items loaned for a particular order
    return (
        <>
            <Navbar/>

            <div className='container-fluid'>
                <div className='row flex-nowrap'>

                    {/* this was for the old sidebar */}
                    {/* <main className={`main-content ${selectedOrder ? 'shrink' : ''}`}> */}
                    <main className={'main-content'}>
                        <header className='my-4'>
                            <h1 className='text-center'>Dashboard: Upcoming Work Orders</h1>
                        </header>

                        {workOrders}
                    </main>

                    <NewWorkOrder order={newOrder}/>
                    
                    {/* used for the old sidebar */}
                    {/* <Sidebar order={selectedOrder} onClose={() => setSelectedOrder(null)}/> */}
                    
                </div>
            </div>
        </>
    );    

}

export default Dashboard;
