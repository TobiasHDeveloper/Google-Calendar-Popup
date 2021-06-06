chrome.browserAction.onClicked.addListener(
    function(tab) {
        //open google calendar, with an absurd width and height, to fill out the whole screen (it won't go past the max diamentions)
        window.open("https://calendar.google.com/calendar/u/0/r", "", "width=10000px,height=10000"); //replace the url here, to open any page
    }
);
