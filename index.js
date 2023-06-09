window.addEventListener("load", CalculateTime)
// console.log(`${dayNames[day]} ${hour%12} : ${minute} : ${ampm}`)
function CalculateTime() {

    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    let currDate = new Date();
    let day = currDate.getDay();

    // console.log()

    let hour = currDate.getHours();
    let minute = currDate.getMinutes();
    let ampm = hour >= 12 ? "PM" : "AM"

    hour = hour % 12;
    hour = hour ? hour : '12'
    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute;
    document.getElementById("day").innerHTML = dayNames[day]
    document.getElementById("hour").innerHTML = hour
    document.getElementById("minute").innerHTML = minute
    document.getElementById("ampm").innerHTML = ampm

    setTimeout(CalculateTime, 200)
}

