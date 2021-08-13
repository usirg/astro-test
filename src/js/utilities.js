export function renderDuration (firstDateStr, lastDateStr) {
    let duration = "";
    const firstDate = new Date(firstDateStr);
    const firstMonth = firstDate.toLocaleString('default', { month: 'short' });//firstDate.getMonth();
    const firstYear = firstDate.getFullYear();
    const lastDate = new Date(lastDateStr);
    const lastMonth = lastDate.toLocaleString('default', { month: 'short' })//lastDate.getMonth();
    const lastYear = lastDate.getFullYear();
    if (firstYear == lastYear) {

    }
    duration = firstYear == lastYear ? 
        firstMonth + (lastMonth != firstMonth ? " - " + lastMonth : "") + " " + firstYear :
        firstMonth + " " + firstYear + " - " + lastMonth + " " + lastYear;
    return duration;
}