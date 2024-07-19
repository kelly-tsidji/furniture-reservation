function FormattedDate(datetime) {
    const date = new Date(datetime);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
}

export default FormattedDate;