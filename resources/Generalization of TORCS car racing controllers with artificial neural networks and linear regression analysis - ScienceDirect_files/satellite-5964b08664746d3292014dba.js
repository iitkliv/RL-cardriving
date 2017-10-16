_satellite.pushAsyncScript(function(event, target, $variables){
  setTimeout(function(){
  if(document.getElementById('unpaywall') !== null) {
    pageDataTracker.trackEvent('addWebsiteExtension', {
      page: {
        websiteExtension: 'sd:1'
      }
    });
  }
}, 4000);

});
