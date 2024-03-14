const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    const location = document.querySelector('#cityInput');
    chrome.storage.sync.set({'city': location.value}, function(){
        close();
    })
})