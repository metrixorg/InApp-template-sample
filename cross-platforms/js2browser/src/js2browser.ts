import {EventAttributes, Message, MessageType} from "./models";

declare let window;

function openUrl(url: string): void {
    const message: Message = {
        type: MessageType.OPEN_URL,
        payload: url,
        id: window.id
    }
    window.parent.postMessage(message, '*');
}

function closeOnSite(): void {
    const message: Message = {
        type: MessageType.CLOSE_ONSITE,
        id: window.id
    }
    window.parent.postMessage(message, '*');
}

function sendEvent(slug: string, customAttributes: EventAttributes = {}): void {
    const message: Message = {
        type: MessageType.SEND_EVENT,
        id: window.id,
        payload: {
            slug,
            customAttributes
        }
    }
    window.parent.postMessage(message, '*');
}

export { openUrl, closeOnSite, sendEvent };
