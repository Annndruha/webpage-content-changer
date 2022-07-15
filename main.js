function set_rule(url, property, value){
    url = new URL(url)
    let domain = url.hostname

    chrome.storage.local.get(null, (result)=> {
        console.log('result', result, 'domain', domain)
        let site_rules = result[domain]
        let n_rules = 0
        console.log('site_rules', site_rules)
        if (!varDefined(site_rules)){
            site_rules = {}
            site_rules[1] = {'property': property, 'value': value}
        }
        else {
            n_rules = Object.keys(site_rules).length
            site_rules[n_rules+1] = {'property': property, 'value': value}
        }

        chrome.storage.local.set({[domain]: site_rules}, () => {
            chrome.storage.local.get(null, (res) => {
                console.log("Storage value set:", res[domain])}) //[0]['property'], 'value=', res[domain][0]['value']
        })
    })
}

function updateButton() {
    let property =  document.getElementById('ruleproperty').value
    let value =  document.getElementById('rulevalue').value

    chrome.tabs.query({active: true}, function(tabs){
        set_rule(tabs[0].url, property, value)
    })
}

const button = document.querySelector('#apply');
button.addEventListener('click', updateButton);
console.log('Content changer main script loaded.')



// chrome.storage.local.get(null, (res)=> {
//     //button.value = 'Change rule'
//     paragraph.textContent = res['rule'][1]
//     //console.log('ruuullleee')
// })
//add_rule()

// if (button.value === 'Rule 1') {
//     button.value = 'Rule 2'
//     let where = 'body'
//     let rule = 'document.body.style.backgroundColor = \'green\';'
//     set_rule(where, rule)
// }
// else {
//     button.value = 'Rule 1'
//     let where = 'body'
//     let rule = 'document.body.style.backgroundColor = \'red\';'
//     set_rule(where, rule)
// }

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