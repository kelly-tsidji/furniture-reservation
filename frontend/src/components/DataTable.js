import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

// const data = [
//     { id: 1, name: 'Item 1', category: 'Category 1', price: 10.0 },
//     { id: 2, name: 'Item 2', category: 'Category 2', price: 20.0 },
//     { id: 3, name: 'Item 3', category: 'Category 1', price: 30.0 },
// ];

// const columns = [
//     {
//         Header: "ID",
//         accessor: "id",
//     },
//     {
//         Header: "Name",
//         accessor: "name",
//     },
//     {
//         Header: "Category",
//         accessor: "category",
//     },
//     {
//         Header: "Price",
//         accessor: "price",
//     },
//     {
//         Header: "Actions",
//         accessor: "actions",
//         Cell: ({row}) => (
//             <div>
//                 <Button variant="warning" onClick={() => handleEdit(row.original)}>Edit</Button>
//                 <Button variant="danger" onClick={() => handleDelete(row.original.id)}>Delete</Button>
//             </div>
//         ),
//     },
// ];


const actions = {
    Header: "Actions",
    accessor: "actions",
    Cell: ({row}) => (
        <div>
            <Button variant="warning" onClick={() => handleEdit(row.original)}>Edit</Button>
            <Button variant="danger" onClick={() => handleDelete(row.original.id)}>Delete</Button>
        </div>
    ),
};

const handleEdit = (row) => {
    console.log('edit row', row);
};


const handleDelete = (id) => {
    console.log('delete row w/ id ', id);
};

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
        <input type="checkbox" ref={resolvedRef} {...rest} />
    );
});

// TODO: fix behavior of table when page is shrinking

// creates a table with the information given
const DataTable = ({ columns, data }) => {
    const [tableData, setTableData] = useState(data);

    console.log("DATAAAA");
    console.log(data);

    console.log("TABLEEEEE");
    console.log(tableData);

    // JUST ADDED
    useEffect( () => {
        setTableData(data);
    }, [data]);

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
            columns: columns,
            data: tableData,
            // columns: useMemo(() => columns, []),
            // data: useMemo(() => tableData, [tableData]),
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
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
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
                    {headerGroups.map(headerGroup => {
                        const { key, ...rest } = headerGroup.getHeaderGroupProps();
                        return (
                            <tr key={key} {...rest}>
                                {headerGroup.headers.map(column => {
                                    const { key, ...rest } = column.getHeaderProps(column.getSortByToggleProps());
                                    return (
                                        <th key={key} {...rest}>
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
                                    );
                                })}
                            </tr>
                        );
})}
                </thead>

                <tbody {...getTableBodyProps()}>
                {page.map(row => {
                        prepareRow(row);
                        const { key, ...rest } = row.getRowProps();
                        return (
                            <tr key={key} {...rest}>
                                {row.cells.map(cell => {
                                    const { key, ...rest } = cell.getCellProps();
                                    return (
                                        <td key={key} {...rest}>{cell.render('Cell')}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
                
            </Table>
        </div>
    );
};

export default DataTable;
