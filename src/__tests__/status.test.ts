import StatusCode from "../codes";
import StatusMessages from "../messages";
import { registerStatuses, getStatusMessage, getStatusCode } from "../statuses";

describe("Register Statuses Tests", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("Call statusCodeToMessage without registering status", () => {
    expect(getStatusMessage(200)).toBe("OK");
    expect(getStatusCode("Request Header Fields Too Large")).toBe(431);
  });

  test("Register status using default codes and messages", () => {
    registerStatuses(StatusCode, StatusMessages);
    expect(getStatusMessage(200)).toBe("OK");
    expect(getStatusCode("Request Header Fields Too Large")).toBe(431);
  });

  test("Register status using correct custom codes and messages", () => {
    const customCodes = {
      ...StatusCode,
      BusinessError: {
        _600_InvalidCustomer: 600,
      },
    };

    const customMessages = {
      ...StatusMessages,
      BusinessError: {
        _600_InvalidCustomer: "Invalid Customer",
      },
    };
    registerStatuses(customCodes, customMessages);
    expect(getStatusMessage(600)).toBe("Invalid Customer");
    expect(getStatusCode("Invalid Customer")).toBe(600);
  });

  test("Register status using incorrect custom codes and messages with too many codes.", () => {
    const customCodes = {
      ...StatusCode,
      BusinessError: {
        _600_InvalidCustomer: 600,
      },
    };
    expect(() => registerStatuses(customCodes, StatusMessages)).toThrow();
  });

  test("Register status using incorrect custom codes and messages with too many messages.", () => {
    const customMessages = {
      ...StatusMessages,
      BusinessError: {
        _600_InvalidCustomer: "Invalid Customer",
      },
    };
    expect(() => registerStatuses(StatusCode, customMessages)).toThrow();
  });

  test("Convert between status code and message without registering status", () => {
    expect(() => getStatusCode("Incorrect")).toThrow();
    expect(() => getStatusMessage(999)).toThrow();
  });
});
