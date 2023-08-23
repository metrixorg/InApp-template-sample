export interface IframeMessage {
  type: MessageType;
  payload?: any;
  id: string;
}

export enum MessageType {
  CLOSE_ONSITE = 'CLOSE_ONSITE',
  OPEN_URL = 'OPEN_URL',
  SEND_EVENT = 'SEND_EVENT'
}
