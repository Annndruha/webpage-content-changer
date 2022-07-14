function reddenPage() {
    document.body.style.backgroundColor = 'red';
    console.log('reddenPage')
}


function add_rule() {
    //if (!tab.url.includes("chrome://")) {
    console.log('executeScript.')
    // const tab_id = getTabId()
    // chrome.scripting.executeScript({
    //     target: {tabId: tab_id},
    //     function: reddenPage
    // })

    //}

    chrome.tabs.query({active: true}, function(tabs){
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: reddenPage
        })
    })
}


$("#apply").on('click', function (e) {
    e.stopPropagation()
    console.log('Apply pressed.')
    add_rule()
})


console.log('Main loaded')

const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
    if (button.value === 'Apply rule!') {
        button.value = 'Disable rule!'
        paragraph.textContent = 'Rule active.'
        add_rule()
    } else {
        button.value = 'Apply rule!'
        paragraph.textContent = 'Rule disabled.'
    }
}