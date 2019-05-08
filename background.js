
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "id": "get-link-status",
        "title": "بررسی لینک",
        "contexts": ["link", "video", "image", "audio"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.browserAction.setBadgeText({
        "text": "...",
        "tabId": tab.id
    })
    chrome.browserAction.setBadgeBackgroundColor({
        "color": "#FFED46",
        "tabId": tab.id
    })
    let IRIflag = false; let sureCount = 0;
    let targetLink = info.mediaType ? info.srcUrl : info.linkUrl;
    window.sUrls.forEach(element => {
        if (targetLink.toLowerCase().search(element.url.toLowerCase()) >= 0) {
            IRIflag = true
            return;
        }
    });
    if (IRIflag) {
        chrome.browserAction.setBadgeText({
            "text": "IR",
            "tabId": tab.id
        })
        chrome.browserAction.setBadgeBackgroundColor({
            "color": "#4d7",
            "tabId": tab.id
        })
    }
    else {
        chrome.browserAction.setBadgeText({
            "text": "X",
            "tabId": tab.id
        })
        chrome.browserAction.setBadgeBackgroundColor({
            "color": "#f33",
            "tabId": tab.id
        })
    }
    setTimeout(() => {
        chrome.browserAction.setBadgeText({
            "text": "",
            "tabId": tab.id
        })
    }, 7000);
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let IRIflag = false;
    window.sUrls.forEach(element => {
        // element = element.url.toLowerCase().replace(new RegExp('https?://(www\.)?'),"");
        if (request.url.toString().toLowerCase().search(element.url.toLowerCase()) >= 0) {
            IRIflag = true
            return;
        }
    });
    if (IRIflag) {
        chrome.browserAction.setIcon({
            path: "icons/yes.png",
            tabId: sender.tab.id
        });
        chrome.browserAction.setTitle({
            title: "اینترنت داخلی",
            tabId: sender.tab.id
        });
    }
    else {
        chrome.browserAction.setIcon({
            path: "icons/no.png",
            tabId: sender.tab.id
        });
        chrome.browserAction.setTitle({
            title: "اینترنت بین‌الملل",
            tabId: sender.tab.id
        });
    }

})

// chrome.browserAction.onClicked.addListener((tab) => {
//     chrome.tabs.create({url: 'listpage.html'})
// })