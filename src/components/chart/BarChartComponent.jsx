import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList} from 'recharts';

const CustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const centerX = x + width / 2;
    const centerY = y + height / 2;

    return (
        <g>
            <rect x={centerX - 20} y={centerY - 10} width={40} height={20} fill="rgba(54, 54, 54, 0.8)" rx={3} ry={3} />
            <text x={centerX} y={centerY} fill="#fff" textAnchor="middle" dominantBaseline="middle">
                {value}
            </text>
        </g>
    );
};

const BarChartComponent = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <XAxis dataKey="date"/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="viewCount" name="Кол-во просмотров" fill="rgba(241, 196, 15, 1)">
                    <LabelList dataKey="viewCount" position="inside" content={<CustomizedLabel />}/>
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;