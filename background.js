chrome.tabs.onCreated.addListener((tab) => {
	if (tab.pendingUrl === 'chrome://newtab/')
		chrome.tabs.update(tab.id, { url: 'chrome://new-tab-page' });
});
