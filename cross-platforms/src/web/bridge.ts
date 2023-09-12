import { IframeMessage, MessageType } from './models';
import { Bridge } from '../models';

export class IframeBridge extends Bridge {
  initialize() {
    console.log('platform: Web')

    window.addEventListener('message', event => {
      if (event.data?.type === 'getDimensions' && event.data?.id === window.id) {
        const contentHeight = document.body.scrollHeight;
        const contentWidth = document.body.scrollWidth;
        const messageDimensionsBody = {
          id: window.id,
          type: 'SCALE_IFRAME',
          payload: {
            width: contentWidth,
            height: contentHeight,
          },
        };
        window.parent.postMessage(messageDimensionsBody, '*');
      }
    });
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

  sendResponse(attributes?: Record<string, string>) {
    const message: IframeMessage = {
      type: MessageType.SEND_RESPONSE,
      id: window.id,
      payload: {
        payload: attributes,
      },
    };
    window.parent.postMessage(message, '*');
  }
}
