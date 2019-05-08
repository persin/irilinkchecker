const bg = chrome.extension.getBackgroundPage()
let count = 0;
document.addEventListener('DOMContentLoaded', function () {
    bg.sUrls.forEach(el => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td class="text-left">${el.url} <a href="${el.protocol}://${el.www?"www.":""}${el.url}"><span class="fa fa-external-link "></span></a></td>
        <td class="text-left">${el.ipv4}</td>
        <td class="text-left">${el.update}</td>
        `
        document.getElementById("list").appendChild(tr);
        count+=1;
    });
    document.getElementById("row-count").innerText =  `
    تعداد: ${count} لینک
    `

}, false)

const searchInput = document.getElementById("searchinput");
var typingTimer;                
var doneTypingInterval = 1000;  
var isSearching = false;
let setLoadingOn = () => {
    if(!isSearching){
        document.getElementById("search-icon").className = "fa fa-circle-o-notch fa-spin  form-control-feedback";
    isSearching = true;
    }
}

let setLoadingOff = () => {
    if(isSearching){
        document.getElementById("search-icon").className = "fa fa-search  form-control-feedback";
        isSearching = false;
        }
}

searchInput.addEventListener("keyup", (e) => {
    setLoadingOn();
    clearTimeout(typingTimer);
    if(e.keyCode != 13){  
        typingTimer = setTimeout(searchIt, doneTypingInterval);
    }
    else searchIt();
});

searchInput.addEventListener("keydown", () => {
    setLoadingOn();
    clearTimeout(typingTimer);
})

let searchIt = () => {
    
    setLoadingOff();
    let text = searchInput.value;
    let lastCount = count;
    
    if (text.length > 0) {
        count=0;
        document.getElementById("list").innerHTML= "";
        bg.sUrls.forEach(el => {
            if ((el.url).toString().toLowerCase().search(text.toLowerCase()) >= 0) {
                const tr = document.createElement('tr')
                tr.innerHTML = `
            <td class="text-left">${el.url} <a href="${el.protocol}://${el.www?"www.":""}${el.url}"><span class="fa fa-external-link "></span></a></td>
            <td class="text-left">${el.ipv4}</td>
            <td class="text-left">${el.update}</td>
            `
                document.getElementById("list").appendChild(tr);
                count+=1;
            }
        })
    }
    else if(lastCount != bg.sUrls.length)
    {
        console.log("else",lastCount)
        count=0;
        bg.sUrls.forEach(el => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
            <td class="text-left">${el.url} <a href="${el.protocol}://${el.www?"www.":""}${el.url}"><span class="fa fa-external-link "></span></a></td>
            <td class="text-left">${el.ipv4}</td>
            <td class="text-left">${el.update}</td>
            `
            document.getElementById("list").appendChild(tr);
            count+=1;
        })
    }
    document.getElementById("row-count").innerText =  `
    تعداد: ${count} لینک
    `
}