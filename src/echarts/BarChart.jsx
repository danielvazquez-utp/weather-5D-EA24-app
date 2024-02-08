import ReactECharts from 'echarts-for-react';
const BarChart = ({ labels, serie }) => {
    const options = {
        title: {
            text: "Main Title",
        },
        xAxis: {
            type: 'category',
            data: labels
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: serie,
                type: 'line'
            }
        ]
    };
    return <ReactECharts option={ options } />
}
export default BarChart;
BarChart.defaultProps = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    serie: [120, 200, 150, 80, 70, 110, 130],
}