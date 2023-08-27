import { Bridge } from './models';
import { AndroidBridge } from './android/bridge';
import { IframeBridge } from './web/bridge';
import { AndroidAnalyticBridge, AndroidInAppBridge } from './android/models';

declare global {
  interface Window {
    /** Campaign ID of current in-app. This will be set inside window object by backend */
    id: string;

    /** Bridge for actions on android SDK. This will be set inside window object by SDK */
    MetrixInAppBridge: AndroidInAppBridge;

    /** Bridge for sending events to android SDK. This will be set inside window object by SDK */
    MetrixAnalyticsBridge: AndroidAnalyticBridge;
  }
}

let bridge: Bridge;
if (window.MetrixInAppBridge) {
  bridge = new AndroidBridge();
  console.log('Android');
} else {
  bridge = new IframeBridge();
  console.log('Web')
}

bridge.initialize();

/** Open url from the app */
function openUrl(url?: string) {
  if (url) {
    bridge.openUrl(url);
  } else {
    throw Error('Url is not provided inside openUrl method');
  }
}

/** Close in-app banner */
function close() {
  bridge.close();
}

/** Send events using slug and optional event attributes */
function sendEvent(slug?: string, attributes?: Record<string, string>) {
  if (slug) {
    bridge.sendEvent(slug, attributes);
  } else {
    throw Error('Slug of event is not provided inside sendEvent method');
  }
}

/** Track user interactions with in-app banner. ex. sending { nps: 2 } after selecting number 2 inside nps form */
function sendResponse(attributes?: Record<string, string>) {
  bridge.sendResponse(attributes);
}

export { openUrl, close, sendEvent, sendResponse };
