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

var rateButton = document.getElementById('rate-button');
rateButton.addEventListener('click',() => {
    chrome.tabs.create({ url: 'https://chrome.google.com/webstore/detail/iri-link-checker/foakpniabhngjaebkipgllinnnbmemee' })
})

var donateButton = document.getElementById('donate-button');
donateButton.addEventListener('click',() => {
    chrome.tabs.create({ url: 'https://idpay.ir/irilinkchecker' })
})

var githubButton = document.getElementById('github-button');
githubButton.addEventListener('click',() => {
    chrome.tabs.create({ url: 'https://github.com/alitalebiuix/irilinkchecker' })
})


var shareButton = document.getElementById('share-button');
shareButton.addEventListener('click',() => {
    chrome.tabs.create({ url: `mailto:ایمیل را وارد کنید?subject=افزونه تشخیص سایت‌های نیم‌بهای داخلی&body=با این افزونه میشه براحتی از نیم‌بها بودن سایت در حال مشاهده آگاه شد.%0d%0a
    لینک افزونه%0d%0a
    http://yon.ir/iranilink%0d%0a
    ویدئوی آموزش افزونه%0d%0a
    https://www.aparat.com/v/Z6olk` })
})

var supportButton = document.getElementById('support-button');
supportButton.addEventListener('click',() => {
    chrome.tabs.create({ url: 'mailto://talebi.ali.prv@gmail.com' })
})