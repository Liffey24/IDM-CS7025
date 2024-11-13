/* this bit of code sets how long the cookies will last for*/
function setCookie(cookieKey, cookieValue, exdays) {
    const cookieDate = new Date();
    const expiryDaysInMs = exdays * 24 * 60 * 60 *1000;
    cookieDate.setTime(cookieDate.getTime() + expiryDaysInMs);
    let expires = "expires=" + cookieDate.toUTCString();
    document.cookie = cookieKey + "=" + cookieValue + ";" + expires + ";path=/";

}

/*this is for the click counter and saves clicks to local storage */ 
let i = 0;
window.localStorage.setItem('clickCount', i);
setCookie("clickCount","0" , 1 );


function getCookie(cookieKey) {
    let name = cookieKey + "=";
    let myCookie = document.cookie.split(';');
    for(let i = 0; i < myCookie.length; i++) {
    let theCookie = myCookie[i];
    while (theCookie.charAt(0) == ' ') {
    theCookie = theCookie.substring(1);
    }
    if (theCookie.indexOf(name) == 0) {
    return theCookie.substring(name.length, theCookie.length);
    }
    }
    return "";
    }
    
getCookie("clickCount");

/* this is also for click counting*/
function countClicks(){
    let clickCount = parseInt(window.localStorage.getItem ("clickCount"));
    clickCount += 1;
    console.log(clickCount);
    window.localStorage.setItem('clickCount', clickCount);
    document.getElementById('count').textContent = window.localStorage.getItem('clickCount');
}

document.getElementById('clickButton').onclick = countClicks;
 

