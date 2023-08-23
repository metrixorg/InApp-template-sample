import { Bridge } from './models';
import { AndroidBridge } from './android/bridge';
import { IframeBridge } from './web/bridge';
import {AndroidAnalyticBridge, AndroidInAppBridge} from "./android/models";

declare global {
  interface Window {
    /** Campaign ID of current in-app. This will be set to window object by backend */
    id: string;

    /** Bridge for actions on android SDK. This will be set to window object by SDK */
    MetrixInAppBridge: AndroidInAppBridge;

    /** Bridge for sending events to android SDK. This will be set to window object by SDK */
    MetrixAnalyticsBridge: AndroidAnalyticBridge;
  }
}

let bridge: Bridge;
if (window.MetrixInAppBridge && window.MetrixAnalyticsBridge) {
  bridge = new AndroidBridge();
} else {
  bridge = new IframeBridge();
}

bridge.initialize();

function openUrl(url: string) {
  bridge.openUrl(url);
}

function close() {
  bridge.close();
}

function sendEvent(slug: string, attributes?: Record<string, string>) {
  bridge.sendEvent(slug, attributes);
}

export { openUrl, close, sendEvent };
