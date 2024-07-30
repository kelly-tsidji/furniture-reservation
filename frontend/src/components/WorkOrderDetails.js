import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import DataTable from './DataTable';

function WorkOrderDetails() {

    const { workOrderId } = useParams();
    const [selectedOrder, setSelectedOrder] = useState(false);

    return (
        <>
            <Navbar/>

            <div className='container-fluid'>
                <div className='row flex-nowrap'>

                    {/* TODO: this was for the old sidebar, might re-add later */}
                    <main className={`main-content ${selectedOrder ? 'shrink' : ''}`}>
                        <header className='my-4'>
                            <h1 className='text-center'>Work Order #{workOrderId}</h1>
                        </header>

                        <div className='card mb-3'>
                            <div className='card-body'>
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <h5 className='card-title'>Tables</h5>
                                    <button type="button" className="btn btn-secondary btn-sm">+ Add</button>
                                </div>

                                <DataTable />
                            </div>
                        </div>

                    </main>
                    
                    <Sidebar order={selectedOrder} onClose={() => setSelectedOrder(false)}/>
                    
                </div>
            </div>
        </>
    );    
}

export default WorkOrderDetails;
