import React from 'react';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function Compare(props) {
    return (
        <div className="border-2 rounded p-6 m-6 w-full h-fit">
            <h4 className="font-semibold text-xl">{props.title}</h4>
            <div className="flex gap-4 py-6 items-center">
                <p className="font-semibold text-3xl">$ {props.mount}</p>
                <p className="text-gray-600">{props.percent}</p>
                {
                    props.percent > 0 ? <ArrowUpwardIcon color="success"/> : <ArrowDownwardIcon color="error"/>
                }
            </div>
            <p className="text-gray-500">Compared to the last month</p>
        </div>
    );
}

export default Compare;