import { createRoot } from 'react-dom/client';
import { tableToJson } from './utils/results';
import PieChart from './charts/PieChart';
import MyParkRuns from './components/MyParkRuns';
import MyCountries from './components/MyCountries';
import Alphabet from './components/Alphabet';


let table = document.querySelector('table#results');
let results = tableToJson(table);

function AllParkRunStats() {
  return <>
    <h2>My Parkrun Stats</h2>
    <PieChart results={results} />
    <MyParkRuns results={results} />
    <MyCountries results={results} />
    <Alphabet results={results} />
  </>;
}

const domNode = document.getElementById('weberino-parkrun');
const root = createRoot(domNode);
root.render(<AllParkRunStats/>);
