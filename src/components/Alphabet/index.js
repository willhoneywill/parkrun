import { getUniqueEventsAndCount } from "../../utils/results";
import { parkrunWithThisLetter } from "../../utils/events";

export default function Alphabet({ results }) {
    const uniqueEventsAndCount = getUniqueEventsAndCount(results);
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    return <>
        <h2>I have completed the following events in the unoffical Parkrun alphabet challenge</h2>
        <ul>
            {alphabet.map(letter => (
                <li key={letter}> <span className={"parkrun-letter parkrun-letter--none" + parkrunWithThisLetter( letter, uniqueEventsAndCount )}> {letter} </span> - { parkrunWithThisLetter( letter, uniqueEventsAndCount )}</li>
            ))}
        </ul>
    </>;
}