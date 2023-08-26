export type DisplayLocation = 'center_modal'
export interface AndroidInAppBridge {
  postMessage: (messageJSON: string) => void;
}

export interface AndroidAnalyticBridge {
  newEvent: (slug: string, attributesJSON?: string) => void;
}

export interface PageMetaData {
  rect?: {
    height: number
  }
}

export interface DisplayOptions {
  location: DisplayLocation;
  shouldVerticalDragDismissMessage: boolean;
}

export interface ActionData {
  close?: boolean;
  click_type?: boolean;
  action?: {}
}

export interface AndroidMessage {
  type: 'action_taken' | 'resize' | 'rendering_complete',
  body?: ActionData,
  pageMetaData?: PageMetaData
  displayLocation?: DisplayLocation
  dragToDismissDisabled?: boolean
}
