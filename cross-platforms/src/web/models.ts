export interface IframeMessage {
  type: MessageType;
  payload?: {
    slug?: string;
    payload?: Record<string, string>;
    attributes?: Record<string, string>;
  } | string;
  id: string;
}

export enum MessageType {
  CLOSE_ONSITE = 'CLOSE_ONSITE',
  OPEN_URL = 'OPEN_URL',
  SEND_EVENT = 'SEND_EVENT',
  SEND_RESPONSE = 'SEND_RESPONSE',
}
