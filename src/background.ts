chrome.commands.onCommand.addListener(function(command) {
    if (command === 'freeze-dom') {

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.executeScript(tabs[0].id, {code: 'debugger;'});
        });
    }
});
