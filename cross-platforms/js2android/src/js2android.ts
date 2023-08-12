import { EventAttributes } from './models';

declare let Android;

function openUrl(url: string): void {
  Android.openUrl(url);
}

function closeInApp(): void {
  Android.closeInApp();
}

function sendEvent(slug: string, customAttributes: EventAttributes = {}): void {
  Android.sendEvent(slug, customAttributes);
}

export { openUrl, closeInApp, sendEvent };
