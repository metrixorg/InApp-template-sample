export abstract class Bridge {
  abstract openUrl(url: string): void;
  abstract close(): void;
  abstract sendEvent(slug: string, attributes?: Record<string, string>): void;
  abstract sendResponse(attributes?: Record<string, string>): void;
  abstract initialize(): void;
}
