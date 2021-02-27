const toTimeFacebook = (time) => {
    let temp = new Date(time)
    return temp.toUTCString()
}
const getTimeToNow = (time) => {
    let a = new Date(time)
    let now = new Date()
    let c = Math.floor((now.getTimezoneOffset() - a + Number(now)) / 1000)
    // console.log(a, now, c)
    if (c > 60 * 60 * 24) return    a.toUTCString()
    if(c>60*60) return Math.floor(c/(60*60))+"h"
    if(c>60)   return Math.floor(c/60)+"m"
    return "1m"
}

export {
    toTimeFacebook,
    getTimeToNow
}
