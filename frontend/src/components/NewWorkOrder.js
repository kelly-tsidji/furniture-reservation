import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewWorkOrder({ onClose }) {
    return (
        <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">New Work Order</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">
                        {/* CONTENT HERE */}
                        <p>Loaned Furniture</p>

                        <div className="list-group list-group-flush border-bottom scrollarea">
                            <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1">List group item heading</strong>
                                    <small>Wed</small>
                                </div>
                                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                            </a>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewWorkOrder;
