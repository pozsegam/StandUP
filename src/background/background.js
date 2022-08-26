chrome.runtime.onInstalled.addListener((reason) => {
  if (reason !== chrome.runtime.OnInstalledReason.INSTALL) {
    return;
  }

  chrome.alarms.create("alarm", {
    delayInMinutes: 0,
    periodInMinutes: 1,
  });

  chrome.alarms.onAlarm.addListener(console.log("fired"));
});
