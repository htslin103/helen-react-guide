import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //transform from object to just number
    const totalMaximum = Math.max(...dataPointValues);  //we took the array above and used spread to spread them out as individual

 return (<div className='chart'>
    {props.dataPoints.map(dataPoint => (
    <ChartBar 
     key={dataPoint.label}
     value={dataPoint.value} 
     maxValue={totalMaximum}//max value would be the largest month 
     label={dataPoint.label}
     />
     ))}
 </div>
 );
};

export default Chart; 