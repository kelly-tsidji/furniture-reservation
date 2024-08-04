// TODO: make sure i'm not importing extra stuff for each file

import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from "react-router-dom";

import FormattedDate from './Date';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import DataTable from './DataTable';
import TabGroup from './TabGroup';

import '../style/Dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// TODO: add enough work orders to see table pagination
// TODO: removed unecessary colums from fetch request

function Dashboard() {

    // TODO: change ports
    const port = process.env.REACT_APP_PORT || 4000;
    const navigate = useNavigate();

    const [dbData, setDbData] = useState([]);
    // const [selectedOrder, setSelectedOrder] = useState(null);    // TODO: this was for the old sidebar
    
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
    // NOTE: the page automatically changes when the data is updated
    useEffect(() => {
        fetchData();
    }, []);

    console.log("DB DATA");
    console.log(dbData);  // TODO: remove later

    // TODO: delete later
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

    console.log("work orders");
    console.log(workOrders);

    // the columns of the table
    const columns = useMemo( () => [
        {
            Header: 'Order #',
            accessor: 'workOrderId',
            Cell: ({value}) => <Link to={`/orders/${value}`}>{value}</Link>
        },
        { Header: 'Event', accessor: 'event' },
        {
            Header: 'Start Date',
            accessor: 'startDate',
            Cell: ({value}) => FormattedDate(value)
        },
        {
            Header: 'End Date',
            accessor: 'endDate',
            Cell: ({value}) => FormattedDate(value)
        },
        { Header: 'Building', accessor: 'building.name' },
        { Header: 'Added by', accessor: 'user.username' },
    ], []);

    // Define the tabs and their content
    const tabs = [
        {
            eventKey: 'allOrders',
            title: 'All Work Orders',
            content: <DataTable columns={columns} data={dbData} />,
        },
        {
            eventKey: 'myOrders',
            title: 'My Work Orders',
            content: <DataTable columns={columns} data={dbData} />,
        },
    ];

    // TODO: actually style main section lol
    // display the work orders, 
    // and optionally display the items loaned for a particular order
    return (
        <>
            <Navbar/>

            <div className='container-fluid'>
                <div className='row flex-nowrap'>

                    {/* TODO: might not need main anymore */}
                    {/* this was for the old sidebar */}
                    {/* <main className={`main-content ${selectedOrder ? 'shrink' : ''}`}> */}
                    <main className={'main-content'}>
                        <header className='my-4'>
                            <h1 className='text-center'>Dashboard: Upcoming Work Orders</h1>
                        </header>

                        {/* <DataTable columns={columns} data={dbData} /> */}
                        <TabGroup tabs={tabs} />

                        {/* {workOrders} */}
                    </main>

                    {/* used for the old sidebar */}
                    {/* <Sidebar order={selectedOrder} onClose={() => setSelectedOrder(null)}/> */}
                    
                </div>
            </div>
        </>
    );    

}

export default Dashboard;
