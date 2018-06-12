const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const skiJump = {
        normal: [60, 2],
        big: [60, 1.8],
        mammoth: [120, 1.2]
    };
    let note = 0;
    (distance >= kPoint) ? note = skiJump[hillSize][0] + (distance - kPoint) * skiJump[hillSize][1]
    : note = skiJump[hillSize][0] - (kPoint - distance) * skiJump[hillSize][1];
    return note;
};
module.exports = calculateDistancePoints;