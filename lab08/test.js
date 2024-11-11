function setCookie(cookieKey, cookieValue, exdays) {
    const cookieDate = new Date();
    const expiryDaysInMs = exdays * 24 * 60 * 60 * 1000;
    cookieDate.setTime(cookieDate.getTime() + expiryDaysInMs);
    let expires = "expires="+ cookieDate.toUTCString();
    document.cookie = cookieKey + "=" + cookieValue + ";" + expires +
    ";path=/";
    }
    setCookie('first_name', 'Jim', 30);

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
        getCookie('first_name')