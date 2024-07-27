import React from 'react';
import '../style/Dashboard.css';

// TODO: rename file honestly

// display the items loaned for a work order
// TODO: finish
export default function Sidebar({order, onClose}) {
    if (!order) return null;

    return (
       
        <div id="sidebar-container">

            <div id="sidebar" className="border-end">
                <div className="sidebar-header">
                    {/* <h6 className="sidebar-title d-none d-sm-block" id="sidebar-title">Loaned Furniture</h6> */}
                    <span className="fs-5 fw-semibold" id="sidebar-title">Loaned Furniture</span>
                    <button className="btn-close" onClick={onClose}></button>
                </div>

                <div className="list-group list-group-flush border-bottom scrollarea">
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small>Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                </div>




                
            </div>
        </div>
    );
};
