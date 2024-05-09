import StatusMessages from "./messages";
import StatusCodes from "./codes";

// =============================================================================
// Class Structure for Status Codes and Messages
// =============================================================================

class Status {
  protected _codeToMessage: Map<number, string> = new Map();
  protected _messageToCode: Map<string, number> = new Map();
  protected _initialized: boolean = false;

  protected initializeIfNot() {
    if (this._initialized) {
      return;
    }

    registerStatuses(StatusCodes, StatusMessages);
    this._initialized = true;
  }

  public register(code: number, message: string) {
    this._codeToMessage.set(code, message);
    this._messageToCode.set(message, code);
  }

  public codeToMessage(code: number) {
    this.initializeIfNot();
    if (!this._codeToMessage.has(code)) {
      throw new Error(`Code ${code} is not registered`);
    }
    return this._codeToMessage.get(code);
  }

  public messageToCode(message: string) {
    this.initializeIfNot();
    if (!this._messageToCode.has(message)) {
      throw new Error(`Message ${message} is not registered`);
    }
    return this._messageToCode.get(message);
  }
}

const status = new Status();

// =============================================================================
// Public functions
// =============================================================================

/**
 * Register status codes and messages using the provided objects.
 * @param codes Status code object
 * @param messages Status message object
 */
export function registerStatuses(
  codes: Record<string, Record<string, number>>,
  messages: Record<string, Record<string, string>>
) {
  const codeKeys = Object.keys(codes);
  const messageKeys = Object.keys(messages);

  for (const key of codeKeys) {
    let messageKeyIdx = -1;
    if ((messageKeyIdx = messageKeys.indexOf(key)) == -1) {
      throw new Error(
        `Code category ${key} is missing a Message category counterpart`
      );
    }
    messageKeys.splice(messageKeyIdx, 1);
    registerMatchingValues(key, codes[key], messages[key]);
  }

  if (messageKeys.length !== 0) {
    throw new Error(
      `Message category ${messageKeys[0]} is missing a Code category counterpart`
    );
  }
}

/**
 * Convert a status code to a status message using the registered status. If the
 * status is not initialized, it will initialize using the default status.
 * @param code Status code
 * @returns Status message
 */
export function getStatusMessage(code: number) {
  return status.codeToMessage(code);
}

/**
 * Convert a status message to a status code using the registered status. If the
 * status is not initialized, it will initialize using the default status.
 * @param message Status message
 * @returns Status code
 */
export function getStatusCode(message: string) {
  return status.messageToCode(message);
}

// =============================================================================
// Helper functions
// =============================================================================

function registerMatchingValues(
  category: string,
  codes: Record<string, number>,
  messages: Record<string, string>
) {
  const codeKeys = Object.keys(codes);
  const messageKeys = Object.keys(messages);

  for (const key of codeKeys) {
    let messageKeyIdx = -1;
    if ((messageKeyIdx = messageKeys.indexOf(key)) == -1) {
      throw new Error(`Code ${category}.${key} is missing a Message`);
    }
    status.register(codes[key], messages[key]);
    messageKeys.splice(messageKeyIdx, 1);
  }

  if (messageKeys.length !== 0) {
    throw new Error(`Message ${category}.${messageKeys[0]} is missing a Code`);
  }
}

// =============================================================================
// Exports
// =============================================================================

export default status;
