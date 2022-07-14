function reddenPage(url) {
    document.body.style.backgroundColor = 'red';
    //$('#d''root: --theme-page-background-color: #afafaf;'
    //document.documentElement.style.setProperty('--theme-page-background-color', '#fff');
    console.log('reddenPage', url)
}

function remove_rule() {
    document.body.style.backgroundColor = 'white';
}

function add_rule() {
    console.log('executeScript.')
    chrome.tabs.query({active: true}, function(tabs){
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: reddenPage,
            args: [tabs[0].url]
        })
        console.log(tabs[0].url)
    })
}

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
        remove_rule()
    }
}
console.log('Content changer main script loaded.')

add_rule()