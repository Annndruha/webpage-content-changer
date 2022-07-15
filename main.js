// function reddenPage(url) {
//     document.body.style.backgroundColor = 'red';
//     //$('#d''root: --theme-page-background-color: #afafaf;'
//     //document.documentElement.style.setProperty('--theme-page-background-color', '#fff');
//     console.log('reddenPage', url)
// }
//
// function remove_rule() {
//     document.body.style.backgroundColor = 'white';
// }
//
// function add_rule() {
//     console.log('executeScript.')
//     chrome.tabs.query({active: true}, function(tabs){
//         chrome.scripting.executeScript({
//             target: {tabId: tabs[0].id},
//             function: reddenPage,
//             args: [tabs[0].url]
//         })
//         console.log(tabs[0].url)
//     })
// }
//
// const button = document.querySelector('input');
// const paragraph = document.querySelector('p');
// button.addEventListener('click', updateButton);
//
// function updateButton() {
//     if (button.value === 'Apply rule!') {
//         button.value = 'Disable rule!'
//         paragraph.textContent = 'Rule active.'
//         add_rule()
//     } else {
//         button.value = 'Apply rule!'
//         paragraph.textContent = 'Rule disabled.'
//         remove_rule()
//     }
// }
// console.log('Content changer main script loaded.')
//
// add_rule()


function set_rule(where, rule){
    chrome.storage.local.set({'rule': [where, rule]}, () => {
        chrome.storage.local.get(null, (res)=> {
            //button.value = 'Change rule'
            paragraph.textContent = res['rule'][1]
            //console.log('ruuullleee')
        })
    })
}

const button = document.querySelector('input');
const paragraph = document.querySelector('p');
button.addEventListener('click', updateButton);

function updateButton() {
    if (button.value === 'Rule 1') {
        button.value = 'Rule 2'
        let where = 'body'
        let rule = 'document.body.style.backgroundColor = \'green\';'
        set_rule(where, rule)
    } else {
        button.value = 'Rule 1'
        let where = 'body'
        let rule = 'document.body.style.backgroundColor = \'red\';'
        eval(rule)
        set_rule(where, rule)
    }
}
console.log('Content changer main script loaded.')