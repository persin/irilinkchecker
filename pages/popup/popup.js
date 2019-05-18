var listButton = document.getElementById('list-button');
listButton.addEventListener('click',() => {
    // chrome.tabs.create({ url: '/pages/listpage/listpage.html' })
    chrome.runtime.sendMessage ({ "open": '/pages/listpage/listpage.html' })
})

var tutButton = document.getElementById('tut-button');
tutButton.addEventListener('click',() => {
    // chrome.tabs.create({ url: '/pages/tutorial/index.html' })
    chrome.runtime.sendMessage ({ "open": '/pages/listpage/index.html' })
})