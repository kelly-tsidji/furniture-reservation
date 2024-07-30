// import React, { useState, useMemo } from 'react';
// import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
// import { Table, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Dummy data
// const data = [
//     { id: 1, name: 'Item 1', category: 'Category 1', price: 10.0 },
//     { id: 2, name: 'Item 2', category: 'Category 2', price: 20.0 },
//     { id: 3, name: 'Item 3', category: 'Category 1', price: 30.0 },
//     // Add more dummy rows as needed
// ];

// // Define columns
// const columns = [
//     {
//         Header: 'ID',
//         accessor: 'id',
//     },
//     {
//         Header: 'Name',
//         accessor: 'name',
//     },
//     {
//         Header: 'Category',
//         accessor: 'category',
//     },
//     {
//         Header: 'Price',
//         accessor: 'price',
//     },
//     {
//         Header: 'Actions',
//         accessor: 'actions',
//         Cell: ({ row }) => (
//             <div>
//                 <Button variant="warning" onClick={() => handleEdit(row.original)}>Edit</Button>
//                 <Button variant="danger" onClick={() => handleDelete(row.original.id)}>Delete</Button>
//             </div>
//         ),
//     },
// ];

// // Handlers for edit and delete actions
// const handleEdit = (row) => {
//     console.log('Edit row:', row);
// };

// const handleDelete = (id) => {
//     console.log('Delete row with ID:', id);
// };

// const DataTable = () => {
//     const [tableData, setTableData] = useState(data);
    
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         page,
//         prepareRow,
//         selectedFlatRows,
//         toggleAllRowsSelected,
//         toggleRowSelected,
//     } = useTable(
//         {
//             columns: useMemo(() => columns, []),
//             data: useMemo(() => tableData, [tableData]),
//             initialState: { pageSize: 10 },
//         },
//         useSortBy,
//         usePagination,
//         useRowSelect,
//         hooks => {
//             hooks.visibleColumns.push(columns => [
//                 {
//                     id: 'selection',
//                     Header: ({ getToggleAllRowsSelectedProps }) => (
//                         <div>
//                             <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
//                         </div>
//                     ),
//                     Cell: ({ row }) => (
//                         <div>
//                             <input type="checkbox" {...row.getToggleRowSelectedProps()} />
//                         </div>
//                     ),
//                 },
//                 ...columns,
//             ]);
//         }
//     );

//     return (
//         <div>
//             <Button
//                 variant="danger"
//                 onClick={() => {
//                     const selectedIds = selectedFlatRows.map(row => row.original.id);
//                     setTableData(prevData => prevData.filter(row => !selectedIds.includes(row.id)));
//                 }}
//             >
//                 Delete Selected
//             </Button>

//             <Table {...getTableProps()} striped bordered hover responsive>
//                 <thead>
//                     {headerGroups.map(headerGroup => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map(column => (
//                                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                                     {column.render('Header')}
//                                     <span>
//                                         {column.isSorted
//                                             ? column.isSortedDesc
//                                                 ? ' 🔽'
//                                                 : ' 🔼'
//                                             : ''}
//                                     </span>
//                                 </th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {page.map(row => {
//                         prepareRow(row);
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map(cell => (
//                                     <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                 ))}
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default DataTable;








// /* LEARNING HOW TO DO IT */
import React, { useState, useMemo } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
    { id: 1, name: 'Item 1', category: 'Category 1', price: 10.0 },
    { id: 2, name: 'Item 2', category: 'Category 2', price: 20.0 },
    { id: 3, name: 'Item 3', category: 'Category 1', price: 30.0 },
];

const columns = [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Category",
        accessor: "category",
    },
    {
        Header: "Price",
        accessor: "price",
    },
    {
        Header: "Actions",
        accessor: "actions",
        Cell: ({row}) => (
            <div>
                <Button variant="warning" onClick={() => handleEdit(row.original)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(row.original.id)}>Delete</Button>
            </div>
        ),
    },
];

const handleEdit = (row) => {
    console.log('edit row', row);
};


const handleDelete = (id) => {
    console.log('delete row w/ id ', id);
};

const DataTable = () => {
    const [tableData, setTableData] = useState(data);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        selectedFlatRows,
        toggleAllRowsSelected,
        toggleRowSelected,
    } = useTable(
        {
            columns: useMemo(() => columns, []),
            data: useMemo(() => tableData, [tableData]),
            initialState: {pageSize: 10},
        },
        useSortBy,
        usePagination,
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            <input type='checkbox' {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    Cell: ({ row }) => (
                        <div>
                            <input type='checkbox' {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ]);
        }
    );

    return (
        <div>
            <Button
                variant='danger'
                onClick={() => {
                    const selectedIds = selectedFlatRows.map(row => row.original.id);
                    setTableData(prevData => prevData.filter(row => !selectedIds.includes(row.id)));
                }}
            >
                Delete Selected
            </Button>

            <Table {...getTableProps()} striped bordered hover responsive>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    <div className='d-flex w-100 align-items-center justify-content-between'>
                                        {column.render('Header')}
                                        {column.id !== 'selection' && (
                                            <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? <FontAwesomeIcon icon={faSortDown} />
                                                        : <FontAwesomeIcon icon={faSortUp} />
                                                    : <FontAwesomeIcon icon={faSort} />}  
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
                
            </Table>
        </div>
    );
};

export default DataTable;
