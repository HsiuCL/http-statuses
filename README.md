# @hsiucl/http-statuses

This is a simple, easy-to-use package for handling HTTP status codes in your
projects. It provides the list of commonly used HTTP status codes and their
corresponding messages. You can also add your own custom statuses. Please note
that this package does not include all the status codes, but it covers the most
common ones (Check out the [supporting statuses](#supporting-statuses)).

## Features

- **Common List of HTTP Status Codes**: Access a ready-to-use list of standard
  HTTP status codes and their descriptions.
- **Add Custom Status Codes**: Easily extend or override existing status codes
  with your own custom codes and messages.
- **Code-to-Message, Message-to-Code Conversions**: Convert status codes to their
  corresponding messages and the other way to enhance readability in your code.
- **Comprehensive Description**: Detailed description for each status code to
  help you understand the purpose of each code or quickly look up a specific
  code.

## Installation

Install via npm:

```bash
npm install @hsiucl/http-statuses --save
```

## Usage

### Getting Started

Once installed, you can import the library into your project:

```typescript
import StatusCodes from "@hsiucl/http-statuses/codes";
import StatusMessages from "@hsiucl/http-statuses/messages";
import {
  registerStatuses,
  getStatusCode,
  getStatusMessage,
} from "@hsiucl/http-statuses/statuses";
```

### Accessing Status Codes and Messages

Get the status code / message of a standard HTTP status code :

```typescript
console.log(StatusCodes._2_Success._200_OK); // Outputs: 200
console.log(StatusMessages._3_Redirection._304_NotModified); // Outputs: Not Modified
```

The naming convention is `_<group code>_<group name>._<status code>_<status
message>`. For instance, `_2_Success._200_OK` is the Success group (2XX) with
the 200 status OK.

### Retrieve a Status Message

Get the message description of a standard HTTP status code or a custom status code:

```typescript
console.log(getStatusMessage(200)); // Outputs: OK
```

### Retrieve a Status Code

Get the status code from a standard HTTP status message or a custom status message:

```typescript
console.log(getStatusCode("OK")); // Outputs: 200
```

### Add a Custom Status Code

You can add your own custom status codes by overwriting the existing status
codes or adding new ones. We recommend using the `StatusCodes` and
`StatusMessages` objects as the base for your custom statuses, and you can use
your custom statuses by exporting them. Here’s an example of adding a custom
status:

```typescript
// Define your custom status codes
const CustomStatusCodes = {
  ...StatusCodes,
  /**
   * ## 6XX : Business Error
   * ### [ 600 ] - Invalid User
   * - The user is not a valid member.
   * - It could be an incorrect user or the user does not have the necessary permissions.
   */
  _6_BusinessError: {
    /**
     * ### [ 600 ] - Invalid User
     * - The user is not a valid member.
     * - It could be an incorrect user or the user does not have the necessary permissions.
     */
    _600_InvalidUser: 600,
  },
};

// Define your custom status messages
const CustomStatusMessages = {
  ...StatusMessages,
  /**
   * ## 6XX : Business Error
   * ### [ 600 ] - Invalid User
   * - The user is not a valid member.
   * - It could be an incorrect user or the user does not have the necessary permissions.
   */
  _6_BusinessError: {
    /**
     * ### [ 600 ] - Invalid User
     * - The user is not a valid member.
     * - It could be an incorrect user or the user does not have the necessary permissions.
     */
    _600_InvalidUser: "Invalid User",
  },
};

// Register the custom status codes and messages
registerStatuses(CustomStatusCodes, CustomStatusMessages);

// Export the custom status codes and messages
export {
  CustomStatusCodes as StatusCodes,
  CustomStatusMessages as StatusMessages,
};
```

Note that you can add as many custom groups / custom status codes as you need,
as long as :\\

1. They follow the structure of [group].[status] (you do not have to follow our
   naming convention, but it is recommended for consistency)
2. Your custom status codes and messages matches each other. If you have a
   `BusinessError.InvalidUser` status code, you should also have a
   `BusinessError.InvalidUser` message.
3. Remember to register your custom status codes and messages using the
   `registerStatuses` function so the conversion functions can work properly,
   even for your custom statuses.

Another thing you might notice is the description of the status code and
message. This is how we document the status codes and messages in the package to
help you understand the purpose of each code and quickly look up a specific code.

## Supporting Statuses

### 2XX - Success

| Code | Message         |
| ---- | --------------- |
| 200  | OK              |
| 201  | Created         |
| 202  | Accepted        |
| 204  | No Content      |
| 205  | Reset Content   |
| 206  | Partial Content |

### 3XX - Redirection

| Code | Message            |
| ---- | ------------------ |
| 301  | Moved Permanently  |
| 302  | Found              |
| 303  | See Other          |
| 304  | Not Modified       |
| 307  | Temporary Redirect |
| 308  | Permanent Redirect |

### 4XX - Client Error

| Code | Message                         |
| ---- | ------------------------------- |
| 400  | Bad Request                     |
| 401  | Unauthorized                    |
| 403  | Forbidden                       |
| 404  | Not Found                       |
| 405  | Method Not Allowed              |
| 406  | Not Acceptable                  |
| 407  | Proxy Authentication Required   |
| 409  | Conflict                        |
| 410  | Gone                            |
| 411  | Length Required                 |
| 412  | Precondition Failed             |
| 413  | Payload Too Large               |
| 414  | URI Too Long                    |
| 415  | Unsupported Media Type          |
| 416  | Range Not Satisfiable           |
| 422  | Unprocessable Entity            |
| 425  | Too Early                       |
| 426  | Upgrade Required                |
| 428  | Precondition Required           |
| 429  | Too Many Requests               |
| 431  | Request Header Fields Too Large |

### 5XX - Server Error

| Code | Message               |
| ---- | --------------------- |
| 500  | Internal Server Error |
| 501  | Not Implemented       |
| 502  | Bad Gateway           |
| 503  | Service Unavailable   |
| 504  | Gateway Timeout       |

## Contributing

Contributions to improve HTTP Status Codes Helper are welcome. Please ensure any
pull requests or issues adhere to the following guidelines:

- **Feature Requests**: Clearly describe the feature and why it would be
  beneficial.
- **Bug Reports**: Include a detailed description of the issue with steps to
  reproduce and the expected outcome.

## License

This project is licensed under the ISC License
