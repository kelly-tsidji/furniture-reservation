import React from 'react';
import '../style/Sidebar.css';

// rename file honestly

// display the items loaned for a work order
// TODO: finish
export default function Sidebar({order, onClose}) {
    if (!order) return null;

    return (
        <div className={`sidebar ${order ? 'show': ''}`}>
            <button class='btn-close' onClick={onClose}></button>
            <p>Hello!</p>
        </div>
    );
};
