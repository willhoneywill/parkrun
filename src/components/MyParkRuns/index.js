import { getUniqueEventsAndCount } from "../../utils/results";

export default function MyParkRuns({ results }) {
    const uniqueEventsAndCount = getUniqueEventsAndCount(results);
    const uniqueEvents = Object.keys(uniqueEventsAndCount).length;

    

    return <>
        <h2>I have run in { uniqueEvents } unique Parkrun events</h2>
        <ol>
            {Object.keys(uniqueEventsAndCount).map(event => {
                return <li key={event}>{event}</li>;
            })}
        </ol>
    </>;
}