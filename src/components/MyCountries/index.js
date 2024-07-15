import { getUniqueCountryEventsAndCount } from "../../utils/results";
import { getCountryName } from "../../utils/countries";

export default function MyCountries({ results }) {
    const uniqueEventsAndCount = getUniqueCountryEventsAndCount(results);
    const uniqueEvents = Object.keys(uniqueEventsAndCount).length;

    return <>
        <h2>I have run Parkrun in { uniqueEvents } different Parkrun countries</h2>
        <ol>
            {Object.keys(uniqueEventsAndCount).map(event => {
                return <li key={event}>{ getCountryName(event) } <span class="fi fi-gr"></span></li>;
            })}
        </ol>
    </>;
}