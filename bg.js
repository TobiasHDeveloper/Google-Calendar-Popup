chrome.browserAction.onClicked.addListener(
    function(tab) {
        window.open("https://calendar.google.com/calendar/u/0/r", "", "width=10000px,height=10000");
    }
);
