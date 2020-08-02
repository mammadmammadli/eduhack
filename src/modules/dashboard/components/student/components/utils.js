export const detectDay = (num) => {
    const current = new Date()

    if (num === 0) {
        return 'MON'
    } else if (num === 1) {
        return 'TUE'
    } else if (num === 2) {
        return 'WED'
    } else if (num === 3) {
        return 'THU'
    } else if (num === 4) {
        return 'FRI'
    } else if (num === 5) {
        return 'SAT'
    }
}

export const convertTime = (time) => {
    if (parseInt(time) <= 12) {
        return `${time} AM`
    } else {
        return `${time - 12} PM`
    }
}
