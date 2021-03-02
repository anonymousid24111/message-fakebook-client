const toTimeFacebook = (time) => {
    let temp = new Date(time)
    let now = new Date()
    let c = Math.floor((now.getTimezoneOffset() - temp + Number(now)) / 1000)
    if (c < 60 * 60 * 24 * 7) {
        return temp.toUTCString().slice(0, 3) + temp.toUTCString().slice(16, 22)
    }
    return temp.toUTCString().slice(0, 22)
}
const getTimeToNow = (time) => {
    let a = new Date(time)
    let now = new Date()
    let c = Math.floor((now.getTimezoneOffset() - a + Number(now)) / 1000)
    if (c > 60 * 60 * 24) return a.toUTCString()
    if (c > 60 * 60) return Math.floor(c / (60 * 60)) + "h"
    if (c > 60) return Math.floor(c / 60) + "m"
    return "1m"
}

export {
    toTimeFacebook,
    getTimeToNow
}
