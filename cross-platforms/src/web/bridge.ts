import { IframeMessage, MessageType } from './models';
import { Bridge } from '../models';

export class IframeBridge extends Bridge {
  initialize() {
    /* empty */
  }

  close() {
    const message: IframeMessage = {
      type: MessageType.CLOSE_ONSITE,
      id: window.id,
    };
    window.parent.postMessage(message, '*');
  }

  openUrl(url: string) {
    const message: IframeMessage = {
      type: MessageType.OPEN_URL,
      payload: url,
      id: window.id,
    };
    window.parent.postMessage(message, '*');
  }

  sendEvent(slug: string, attributes?: Record<string, string>) {
    const message: IframeMessage = {
      type: MessageType.SEND_EVENT,
      id: window.id,
      payload: {
        slug,
        attributes,
      },
    };
    window.parent.postMessage(message, '*');
  }

  sendResponse() {
    /* empty */
  }
}
