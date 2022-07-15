function set_rule(url, selector, property, value){
    url = new URL(url)
    let domain = url.hostname

    chrome.storage.local.get(null, (result)=> {
        console.log('result', result, 'domain', domain)
        let site_rules = result[domain]
        let n_rules = 0
        console.log('site_rules', site_rules)
        if (!varDefined(site_rules)){
            site_rules = {}
            site_rules[1] = {'selector':selector, 'property': property, 'value': value}
        }
        else {
            n_rules = Object.keys(site_rules).length
            site_rules[n_rules+1] = {'selector':selector, 'property': property, 'value': value}
        }

        chrome.storage.local.set({[domain]: site_rules}, () => {
            chrome.storage.local.get(null, (res) => {
                console.log("Storage value set:", res[domain])})
        })
    })
}

function updateButton() {
    let selector =  document.getElementById('selector').value
    let property =  document.getElementById('ruleproperty').value
    let value =  document.getElementById('rulevalue').value

    chrome.tabs.query({active: true}, function(tabs){
        set_rule(tabs[0].url, selector, property, value)
    })
}

const button = document.querySelector('#apply');
button.addEventListener('click', updateButton);
console.log('Content changer main script loaded.')

// Placeholders
let a = document.getElementById("selector")
a.placeholder = 'selector'

let b = document.getElementById("ruleproperty")
b.placeholder = 'propertyName'

let c = document.getElementById("rulevalue")
c.placeholder = 'value'