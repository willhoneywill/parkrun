export function tableToJson(table) { 
  var rows = table.rows;
  var propCells = rows[0].cells;
  var propNames = [];
  var results = [];
  var obj, row, cells;
  var countryUrl = '';

  // Use the first row for the property names
  // Could use a header section but result is the same if
  // there is only one header row
  for (var i=0, iLen=propCells.length; i<iLen; i++) {
    propNames.push(propCells[i].textContent || propCells[i].innerText);
  }
  propNames.push('Country');

  // Use the rows for data
  // Could use tbody rows here to exclude header & footer
  // but starting from 1 gives required result
  for (var j=1, jLen=rows.length; j<jLen; j++) {
    cells = rows[j].cells;
    obj = {};

    for (var k=0; k<iLen; k++) {
      obj[propNames[k]] = cells[k].textContent || cells[k].innerText;
      console.log(cells[k].innerHTML);
      if (cells[k].innerHTML.includes('<a href')) {
        countryUrl = extractCountryUrl(cells[k].innerHTML);
      }
    }
    obj[propNames[k]] = countryUrl;
    results.push(obj)
  }
  return results;
}

// Get unique events from the results and count the number of times they appear
export function getUniqueEventsAndCount(results) {
  let uniqueEvents = {};
  results.forEach(result => {
    if (uniqueEvents[result.Event]) {
      uniqueEvents[result.Event]++;
    } else {
      uniqueEvents[result.Event] = 1;
    }
  });
  return uniqueEvents;
}

export function getUniqueCountryEventsAndCount(results) {
  let uniqueEvents = {};
  results.forEach(result => {
    console.log(result);
    if (uniqueEvents[result.Country]) {
      uniqueEvents[result.Country]++;
    } else {
      uniqueEvents[result.Country] = 1;
    }
  });
  return uniqueEvents;
}

function extractCountryUrl(htmlCode) {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = htmlCode;

  // Extract the URL from the <a> tag
  const url = tempElement.querySelector('a').href;
  if (url) {
    const { hostname } = new URL(url);
    return hostname;
  }
}