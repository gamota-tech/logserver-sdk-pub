const sdk = GMOLogSDK.getInstance();

function init(gmoLogConfig){
  sdk.init(gmoLogConfig);
}

function setDebug(debug) {
  sdk.setDebug(debug);
}

function logEvent(eventName, eventParameter) {
  if (typeof eventParameter === 'undefined') {
    sdk.logEvent(eventName);
  } else {
    sdk.logEvent(eventName, eventParameter);
  }
}

