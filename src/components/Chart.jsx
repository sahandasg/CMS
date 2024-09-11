import React from 'react';

//MUI Chart
import {BarChart} from '@mui/x-charts/BarChart';

function Chart(props) {
    return (
        <div className="w-full h-fit border-2 rounded m-4">
            <h4 className="p-4">{props.title}</h4>
            <BarChart
                series={[{data: props.data}]}
                xAxis={[{
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    scaleType: 'band',
                    categoryGapRatio: 0.3,
                    barGapRatio: 0.5,
                }]}
                pading={{top: 20, left: 10, right: 10, bottom: 30}}
                height={300}
            />
        </div>
    );
}

export default Chart;