import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
        field: "amount",
        headerName: 'Amount',
        type: 'number',
        width: 120,
        valueGetter: (value, row) => `${row.amount || ''} $`,
    },
    {field: "date", headerName: 'Date', width: 120},
    {field: "status", headerName: 'Status', width: 150},
];

const rows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon', amount: 35, date: "08/04/2024", status: "pending"},
    {id: 2, lastName: 'Lannister', firstName: 'Cersei', amount: 42, date: "08/04/2024", status: "done"},
    {id: 3, lastName: 'Lannister', firstName: 'Jaime', amount: 45, date: "08/04/2024", status: "done"},
    {id: 4, lastName: 'Stark', firstName: 'Arya', amount: 16, date: "07/04/2024", status: "cancel"},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', amount: 210, date: "06/04/2024", status: "done"},
    {id: 6, lastName: 'Melisandre', firstName: null, amount: 150, date: "06/04/2024", status: "pending"},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara', amount: 44, date: "06/04/2024", status: "done"},
    {id: 8, lastName: 'Frances', firstName: 'Rossini', amount: 36, date: "05/04/2024", status: "done"},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey', amount: 65, date: "05/04/2024", status: "pending"},
];

const paginationModel = {page: 0, pageSize: 5};

function LastTransActions(props) {
    return (
        <div className="w-[60%] h-fit border-2 rounded m-4 p-6">
            <h4 className="text-3xl font-semibold mb-8">Last Transactions</h4>
            <Paper>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{pagination: {paginationModel}}}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{border: 0}}
                />
            </Paper>
        </div>
    );
}

export default LastTransActions;