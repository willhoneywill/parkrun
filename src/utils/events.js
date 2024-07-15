
export function parkrunWithThisLetter( letter, uniqueEventsAndCount ) {
    
    console.log(uniqueEventsAndCount);
    const events = Object.keys(uniqueEventsAndCount).filter(event => event.startsWith(letter));
    
    if (events.length === 0) {
        return '';
    }

    return events.join(', ');
}