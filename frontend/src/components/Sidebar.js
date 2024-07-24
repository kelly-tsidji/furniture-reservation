import React from 'react';
import '../style/Sidebar.css';

// rename file honestly

// display the items loaned for a work order
// TODO: finish
export default function Sidebar({order, onClose}) {
    if (!order) return null;

    return (
        // <div className={`sidebar ${order ? 'show': ''}`}>
        //     <button className='btn-close' onClick={onClose}></button>
        //     <p>Hello!</p>
        // </div>

    <div className="col-2 col-md-3 col-lg-2 px-0">
        <div id="sidebar" className="collapse collapse-horizontal show border-end">
            <div className="sidebar-header">
                <h6 className="sidebar-title d-none d-sm-block" id="sidebar-title">Menu</h6>
                <button className='btn-close' onClick={onClose}></button>
            </div>
            <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-bootstrap"></i> <span>Item</span> </a>
                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-film"></i> <span>Item</span></a>
                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-heart"></i> <span>Item</span></a>
                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-bricks"></i> <span>Item</span></a>
                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-clock"></i> <span>Item</span></a>
                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-archive"></i> <span>Item</span></a>
                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-gear"></i> <span>Item</span></a>
                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-calendar"></i> <span>Item</span></a>
                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-envelope"></i> <span>Item</span></a>
            </div>
        </div>
    </div>
    );
};
