import {EventAttributes, Message, MessageType} from "./models";


function openUrl(url: string): void {
    const message: Message = {
        type: MessageType.OPEN_URL,
        payload: url
    }
    window.parent.postMessage(message, '*');
}

function closeOnSite(): void {
    const message: Message = {
        type: MessageType.CLOSE_ONSITE,
    }
    window.parent.postMessage(message, '*');
}

function sendEvent(slug: string, customAttributes: EventAttributes = {}): void {
    const message: Message = {
        type: MessageType.SEND_EVENT,
        payload: {
            slug,
            customAttributes
        }
    }
    window.parent.postMessage(message, '*');
}

export { openUrl, closeOnSite, sendEvent };
