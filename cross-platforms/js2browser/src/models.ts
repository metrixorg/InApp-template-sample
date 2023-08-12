export interface EventAttributes {
    [key: string]: string;
}


export enum MessageType {
    CLOSE_ONSITE = 'CLOSE_ONSITE',
    OPEN_URL = 'OPEN_URL',
    SEND_EVENT = 'SEND_EVENT'
}
export interface Message {
    type: MessageType;
    payload?: any
}
