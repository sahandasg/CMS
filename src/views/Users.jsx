import React from 'react';

import {alpha, styled} from '@mui/material/styles';
import {DataGrid, gridClasses} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({theme}) => ({
    [`& .${gridClasses.row}.even`]: {
        backgroundColor: theme.palette.grey[200],
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&.Mui-selected': {
            backgroundColor: alpha(
                theme.palette.primary.main,
                ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
            '&:hover': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY +
                    theme.palette.action.selectedOpacity +
                    theme.palette.action.hoverOpacity,
                ),
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        ODD_OPACITY + theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    },
}));

function Users(props) {
    const {data, loading} = useDemoData({
        dataSet: 'Employee',
        rowLength: 200,
    });

    return (
        <>
            <div className="flex flex-wrap justify-center w-[85%] absolute right-0">
                <div className="w-full">
                    <StripedDataGrid
                        loading={loading}
                        {...data}
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                        }
                    />
                </div>
            </div>
        </>
    );
}

export default Users;