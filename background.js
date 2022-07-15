// function reddenPage() {
//   document.body.style.backgroundColor = 'red';
// }

chrome.tabs.onCreated.addListener(function (tab) {
    console.log('onCreated 320723582095-=====')

    // chrome.scripting.executeScript({
    //     target: {tabId: tab.id},
    //     function: function reddenPage() {
    //         //document.body.style.backgroundColor = 'red';
    //         console.log('reddenPage')
    //     }
    //
    //     //     chrome.tabs.query({
    //     //   "currentWindow": true,// Filters tabs in current window
    //     //   "status": "complete", //The Page is completely loaded
    //     //   "active": true, // The tab or web page is browsed at this state,
    //     //   "windowType": "normal", // Filters normal web pages, eliminates g-talk notifications etc
    //     // }, function (tabs) {//It returns an array
    //     //   for (tab in tabs) {
    //     //     $('#url').val(tabs[tab].url);
    //     //     $('#title').val(tabs[tab].title);
    //     //     $loader.hide();
    //     //   }
    //     // })
    // })
})
// chrome.tabs.onCreated.addListener(
//     callback: reddenPage
// )
// chrome.action.onClicked.addListener((tab) => {
//   if(!tab.url.includes("chrome://")) {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: reddenPage
//     });
//   }
// });
