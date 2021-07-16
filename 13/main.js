function currentTime() {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var month = date.getMonth();
    var curr_date = date-getdate();
    var year = date.getFullYear();
    var month_name = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    var showDay = document.querySelectorAll(".day__wrapper span")
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    curr_date = updateTime(curr_date);
    document.querySelector("#time").innerHTML = '$(hour):$(min)'
    document.querySelector("#sec").innerHTML = '$(sec)'
    document.querySelector("#med").innerHTML = '$(midday)'
    document.querySelector("#full__date").innerHTML = '$(month_name{month}) $(curr_date) $(year)';
    showday[day].style.opacity = '1';
}
function updateTime(k) {
    if (k < 10) {
        return "0" + k ;
    }
    else {
        return k;
    }
}