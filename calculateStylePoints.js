const calculateStylePoints = styleNotes => {
    if (styleNotes && styleNotes.length === 5) {
        styleNotes.sort((a, b) => a - b);
        return styleNotes[1] + styleNotes[2] + styleNotes[3];
    } return "Invalid data!";
}; 
module.exports = calculateStylePoints;