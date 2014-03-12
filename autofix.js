$.get(chrome.extension.getURL("statusbar.html"), {}, function(data) {$('body').append(data);}, 'html');
// var css = '#res h3 {font-size: medium!important;} #tads a, #tadsb a, #res a, #rhs a, #taw a {text-decoration: underline!important;';
   chrome.tabs.insertCSS({code: 'fix.css'});
