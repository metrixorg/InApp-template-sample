import { ActionData, DisplayOptions, AndroidMessage, PageMetaData } from './models';
import {Bridge} from "../models";

const OPTIONS: DisplayOptions = {
  location: 'center_modal',
  shouldVerticalDragDismissMessage: true,
};

export class AndroidBridge extends Bridge {
  initialize() {
    const pageMetaData = this.getPageMetaData();

    window.onload = () => {
      this.postMessageToNative({
        type: 'rendering_complete',
        pageMetaData,
        displayLocation: OPTIONS.location,
        dragToDismissDisabled: !OPTIONS.shouldVerticalDragDismissMessage,
      });
    };
    window.onresize = () => {
      this.postMessageToNative({
        type: 'resize',
        pageMetaData,
        displayLocation: OPTIONS.location,
      });
    };
  }

  close() {
    this.actionTaken({ close: true });
  }

  openUrl(url: string) {
    this.actionTaken({ action: { action_type: 'U', url }, close: true });
  }

  sendEvent(slug: string, attributes?: Record<string, string>) {
    this.newEvent(slug, attributes);
  }

  sendResponse() {
    /* empty */
  }

  private postMessageToNative(message: AndroidMessage) {
    console.log('postMessageToNative(): ' + message);

    let messageJSON = JSON.stringify(message);
    if (window.MetrixInAppBridge) {
      window.MetrixInAppBridge.postMessage(messageJSON);
    } else {
      throw Error('Metrix in-app bridge not found');
    }
  }

  private getPageMetaData(): PageMetaData {
    let body = document.body,
      html = document.documentElement;

    let height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );

    return {
      rect: {
        height,
      },
    };
  }

  private actionTaken(data: ActionData) {
    console.log('actionTaken(): ' + data);
    this.postMessageToNative({ type: 'action_taken', body: data });
  }

  private newEvent(slug: string, attributes?: Record<string, string>) {
    if (window.MetrixAnalyticsBridge) {
      window.MetrixAnalyticsBridge.newEvent(
        slug,
        attributes ? JSON.stringify(attributes) : undefined,
      );
    } else {
      throw Error('Metrix analytic bridge not found');
    }
  }
}
