// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later

const defaultUserSettings = {
        settingsVersion: 1,
        theme: "/assets/css/dark1.css",
        fontset: "/assets/css/fontset1.css"
    }

function handlePageLoad() {
    let userSettings = JSON.parse(localStorage.getItem("userSettings"))
   
    if (userSettings) {
        if (userSettings.settingsVersion == 1) {
            document.getElementById("theme").href = userSettings.theme
            document.getElementById("fontset").href = userSettings.fontset
        } else {
            console.log("userSettings invalid or outdated! userSettings reset to defaults.")
            userSettings = defaultUserSettings
            localStorage.setItem("userSettings", JSON.stringify(userSettings))
            console.log("Saved Settings:", JSON.stringify(userSettings), " Reloading Page...");
            location.reload()
        }
    } else {
        console.log("userSettings not set! userSettings set to defaults.")
        userSettings = defaultUserSettings
        localStorage.setItem("userSettings", JSON.stringify(userSettings));
        console.log("Saved Settings:", JSON.stringify(userSettings), " Reloading Page...");
        location.reload()
    }
};

function userSettingsFromForm() {
            let userSettings = defaultUserSettings
            userSettings.theme = document.getElementById('themeDialog').value
            userSettings.fontset = document.getElementById('fontsetDialog').value
            localStorage.setItem("userSettings",JSON.stringify(userSettings))
            console.log('Saved Settings:', JSON.stringify(userSettings), ' Reloading Page...');
            location.reload();
        };

window.addEventListener("load", handlePageLoad());
// @license-end
