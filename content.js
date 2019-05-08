// alert("Grrr.")
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     const re = /bear/gi
//     const matches = document.documentElement.innerHTML.match(re)
//     sendResponse({count: matches.length})
// })

const re = /bear/gi
const matches = document.documentElement.innerHTML.match(re)
chrome.runtime.sendMessage({ "url": window.location.hostname })


// {
//     url: window.location.href,
//     count: matches.length
// }

