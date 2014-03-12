chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     var activeTab = arrayOfTabs[0];
     var activeTabUrl = arrayOfTabs[0].url; // or do whatever you need
     
     // Check the url contains q=, indicating a google search query, and if so inject the CSS
     if (activeTabUrl.indexOf("q=") > -1)
        chrome.tabs.insertCSS({code: 'fix.css'});


  });
