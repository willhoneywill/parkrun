
export function getCountryName(url) {
    const countries = {
        'www.parkrun.ie': 'Ireland',
        'www.parkrun.com.de': 'Germany',
        'www.parkrun.org.uk': 'United Kingdom',
        'www.parkrun.pl': 'Poland',
        'www.parkrun.co.nl': 'Netherlands',
        'www.parkrun.co.at': 'Austria',
    };

    return countries[url];
}