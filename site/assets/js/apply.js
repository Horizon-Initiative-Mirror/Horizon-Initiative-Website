// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
document.addEventListener("DOMContentLoaded", function(){
    let userSettings=JSON.parse(localStorage.getItem("userSettings"))
    if (userSettings.settingsVersion == 0) {
        document.querySelector('link[rel="stylesheet"]').href = userSettings.theme
    } else {
        alert("userSettings Outdated! Please reselect your settings! For more information please check the console!")
    }
});
// @license-end
