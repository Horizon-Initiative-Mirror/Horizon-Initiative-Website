// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
document.addEventListener("DOMContentLoaded", function() {
    let userSettings = JSON.parse(localStorage.getItem("userSettings"))
    if (userSettings) {
        if (userSettings.settingsVersion == 0) {
            document.querySelector('link[rel="stylesheet"]').href = userSettings.theme
        } else {
            alert("userSettings invalid or outdated! userSettings reset to defaults.")
            const userSettings = {
                settingsVersion: 0,
                theme: "/assets/css/dark1.css" //document.getElementById('theme').value
            };
            localStorage.setItem("userSettings", JSON.stringify(userSettings))
            console.log('Saved Settings:', JSON.stringify(userSettings), ' Reloading Page...');
            location.reload()
        }
    } else {
        alert("userSettings not set! userSettings set to defaults.")
        const userSettings = {
            settingsVersion: 0,
            theme: "/assets/css/dark1.css"
        };
        localStorage.setItem("userSettings", JSON.stringify(userSettings));
        console.log("Saved Settings:", JSON.stringify(userSettings), " Reloading Page...");
        location.reload()
    }
});
// @license-end
