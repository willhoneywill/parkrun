import { Chart } from "react-google-charts";
import { getUniqueEventsAndCount } from "../../utils/results";

export default function PieChart({ results }) {
    const uniqueEventsAndCount = getUniqueEventsAndCount(results);
    const options = {
        title: "My most common Parkruns",
        sliceVisibilityThreshold: 0.02
    };

    let data = [['Event', 'Count']];
    for (let event in uniqueEventsAndCount) {
        data.push([event, uniqueEventsAndCount[event]]);
    }

    return <Chart
        chartType="PieChart"
        data={data}
        width="100%"
        height="400px"
        options={options}
        />;
}