const StatusCode = {
  /**
   * ## [ 2xx ] - Success Codes
   * ### [ 200 ] - OK
   * - Generic success.
   * - Should contain a response body. If not, use 204 instead.
   * ### [ 201 ] - Created
   * - Successfully created some instance. (Usually used with POST)
   * - Should contain "Location" header with the URL of the newly created resource.
   * ### [ 202 ] - Accepted
   * - Server accepted the request but it is not yet processed.
   * ### [ 204 ] - No Content
   * - Server successfully processed the request and is not returning any content.
   * ### [ 205 ] - Reset Content
   * - Server successfully processed the request and is not returning any content.
   * - The client should reset the form, view, document, etc. that caused the request to be sent.
   * ### [ 206 ] - Partial Content
   * - Server is returning partial data of the requested resource.
   */
  _2_Success: {
    /**
     * ### [ 200 ] - OK
     * - Generic success.
     * - Should contain a response body. If not, use 204 instead.
     */
    _200_OK: 200,
    /**
     * ### [ 201 ] - Created
     * - Successfully created some instance. (Usually used with POST)
     * - Should contain "Location" header with the URL of the newly created resource.
     */
    _201_Created: 201,
    /**
     * ### [ 202 ] - Accepted
     * - Server accepted the request but it is not yet processed.
     */
    _202_Accepted: 202,
    /**
     * ### [ 204 ] - No Content
     * - Server successfully processed the request and is not returning any content.
     */
    _204_NoContent: 204,
    /**
     * ### [ 205 ] - Reset Content
     * - Server successfully processed the request and is not returning any content.
     * - The client should reset the form, view, document, etc. that caused the request to be sent.
     */
    _205_ResetContent: 205,
    /**
     * ### [ 206 ] - Partial Content
     * - Server is returning partial data of the requested resource.
     */
    _206_PartialContent: 206,
  },
  /**
   * ## [ 3xx ] - Redirection Codes
   * ### [ 301 ] - Moved Permanently
   * - The requested resource has been permanently moved to a new location.
   * - Should contain "Location" header with the new URL.
   * ### [ 302 ] - Moved Temporarily (Found)
   * - The requested resource has been temporarily moved to a new location.
   * - Should contain "Location" header with the new URL.
   * - The client should use GET method in the temporary URL.
   * ### [ 303 ] - See Other
   * - The requested resource can be found under a different URL.
   * - Should contain "Location" header with the new URL.
   * - The client should use GET method in the new URL.
   * ### [ 304 ] - Not Modified
   * - The requested resource has not been modified since the last request.
   * - Whether modified or not is determined by the "If-None-Match" or "If-Modified-Since" header.
   * ### [ 307 ] - Redirect Temporarily
   * - The requested resource has been temporarily moved to a new location.
   * - Should contain "Location" header with the new URL.
   * - The client should use the same method in the temporary URL.
   * ### [ 308 ] - Redirect Permanently
   * - The requested resource has been permanently moved to a new location.
   * - Should contain "Location" header with the new URL.
   * - The client should use the same method in the new URL.
   */
  _3_Redirection: {
    /**
     * ### [ 301 ] - Moved Permanently
     * - The requested resource has been permanently moved to a new location.
     * - Should contain "Location" header with the new URL.
     */
    _301_MovedPermanently: 301,
    /**
     * ### [ 302 ] - Moved Temporarily (Found)
     * - The requested resource has been temporarily moved to a new location.
     * - Should contain "Location" header with the new URL.
     * - The client should use GET method in the temporary URL.
     */
    _302_MovedTemporarily: 302,
    /**
     * ### [ 303 ] - See Other
     * - The requested resource can be found under a different URL.
     * - Should contain "Location" header with the new URL.
     * - The client should use GET method in the new URL.
     */
    _303_SeeOther: 303,
    /**
     * ### [ 304 ] - Not Modified
     * - The requested resource has not been modified since the last request.
     * - Whether modified or not is determined by the "If-None-Match" or "If-Modified-Since" header.
     */
    _304_NotModified: 304,
    /**
     * ### [ 307 ] - Redirect Temporarily
     * - The requested resource has been temporarily moved to a new location.
     * - Should contain "Location" header with the new URL.
     * - The client should use the same method in the temporary URL.
     */
    _307_RedirectTemporarily: 307,
    /**
     * ### [ 308 ] - Redirect Permanently
     * - The requested resource has been permanently moved to a new location.
     * - Should contain "Location" header with the new URL.
     * - The client should use the same method in the new URL.
     */
    _308_RedirectPermanently: 308,
  },
  /**
   * ## [ 4xx ] - Client Error Codes
   * ### [ 400 ] - Bad Request
   * - The server cannot process the request due to a client error.
   * ### [ 401 ] - Unauthorized
   * - The client must authenticate itself to get the requested response.
   * - Basically means the server don't know who you are.
   * - Should contain "WWW-Authenticate" header with the authentication method.
   * ### [ 403 ] - Forbidden
   * - The client does not have access rights to the content.
   * - Basically means the server knows who you are, but you don't have
   *     permission to do this.
   * ### [ 404 ] - Not Found
   * - The server can not find the requested resource.
   * - The resource was never existed. If once existed, use 410 instead.
   * ### [ 405 ] - Method NotAllowed
   *- The endpoint exists but the client tried to use a method that is not
   *     currently allowed.
   * ### [ 406 ] - Not Acceptable
   * - The server does not support any type in the "Accept" header of the request.
   * ### [ 407 ] - Proxy Authentication Required
   * - The client must authenticate itself in order to use a proxy.
   * ### [ 409 ] - Conflict
   * - The request could not be completed due to a conflict with the current state of the resource.
   * ### [ 410 ] - Gone
   * - The resource once existed, but it is no longer available.
   * ### [ 411 ] - Length Required
   * - The server refuses to accept the request without a defined "Content-Length" header.
   * ### [ 412 ] - Precondition Failed
   * - The server does not meet one of the preconditions that the requester put on the request.
   * ### [ 413 ] - Payload TooLarge
   * - The request is larger than the server is willing or able to process.
   * ### [ 414 ] - URI Too Long
   * - The URI provided was too long for the server to process.
   * ### [ 415 ] - Unsupported MediaType
   * - The server does not support the media type that the client provided.
   * ### [ 416 ] - Range Not Satisfiable
   * - The client has asked for a portion of the file, but the server cannot supply that portion.
   * ### [ 422 ] - Unprocessable Entity
   * - The server understands the content type of the request entity,
   *      but it was unable to process the contained instructions.
   * - Usually used when validation fails or data format issues.
   * ### [ 425 ] - Too Early
   * - Indicates that the server is unwilling to risk processing a request that might be replayed.
   * ### [ 426 ] - Upgrade Required
   * - The client should switch to a different protocol such as TLS/1.0.
   * ### [ 428 ] - Precondition Required
   *- The origin server requires the request to add some preconditions that
   *     are required by the command.
   * ### [ 429 ] - Too Many Requests
   * - The user has sent too many requests in a given amount of time.
   * ### [ 431 ] - RequestHeader Fields Too Large
   * - The server is unwilling to process the request because either an individual header field,
   */
  _4_ClientError: {
    /**
     * ### [ 400 ] - Bad Request
     * - The server cannot process the request due to a client error.
     */
    _400_BadRequest: 400,
    /**
     * ### [ 401 ] - Unauthorized
     * - The client must authenticate itself to get the requested response.
     * - Basically means the server don't know who you are.
     * - Should contain "WWW-Authenticate" header with the authentication method.
     */
    _401_Unauthorized: 401,
    /**
     * ### [ 403 ] - Forbidden
     * - The client does not have access rights to the content.
     * - Basically means the server knows who you are, but you don't have
     *     permission to do this.
     */
    _403_Forbidden: 403,
    /**
     * ### [ 404 ] - Not Found
     * - The server can not find the requested resource.
     * - The resource was never existed. If once existed, use 410 instead.
     */
    _404_NotFound: 404,
    /**
     * ### [ 405 ] - Method Not Allowed
     *- The endpoint exists but the client tried to use a method that is not
     *     currently allowed.
     */
    _405_MethodNotAllowed: 405,
    /**
     * ### [ 406 ] - Not Acceptable
     * - The server does not support any type in the "Accept" header of the request.
     */
    _406_NotAcceptable: 406,
    /**
     * ### [ 407 ] - Proxy Authentication Required
     * - The client must authenticate itself in order to use a proxy.
     */
    _407_ProxyAuthenticationRequired: 407,
    /**
     * ### [ 409 ] - Conflict
     * - The request could not be completed due to a conflict with the current state of the resource.
     */
    _409_Conflict: 409,
    /**
     * ### [ 410 ] - Gone
     * - The resource once existed, but it is no longer available.
     */
    _410_Gone: 410,
    /**
     * ### [ 411 ] - Length Required
     * - The server refuses to accept the request without a defined "Content-Length" header.
     */
    _411_LengthRequired: 411,
    /**
     * ### [ 412 ] - Precondition Failed
     * - The server does not meet one of the preconditions that the requester put on the request.
     */
    _412_PreconditionFailed: 412,
    /**
     * ### [ 413 ] - Payload Too Large
     * - The request is larger than the server is willing or able to process.
     */
    _413_PayloadTooLarge: 413,
    /**
     * ### [ 414 ] - URI Too Long
     * - The URI provided was too long for the server to process.
     */
    _414_URITooLong: 414,
    /**
     * ### [ 415 ] - Unsupported Media Type
     * - The server does not support the media type that the client provided.
     */
    _415_UnsupportedMediaType: 415,
    /**
     * ### [ 416 ] - Range NotSatisfiable
     * - The client has asked for a portion of the file, but the server cannot supply that portion.
     */
    _416_RangeNotSatisfiable: 416,
    /**
     * ### [ 422 ] - Unprocessable Entity
     * - The server understands the content type of the request entity,
     *      but it was unable to process the contained instructions.
     * - Usually used when validation fails or data format issues.
     */
    _422_UnprocessableEntity: 422,
    /**
     * ### [ 425 ] - Too Early
     * - Indicates that the server is unwilling to risk processing a request that might be replayed.
     */
    _425_TooEarly: 425,
    /**
     * ### [ 426 ] - Upgrade Required
     * - The client should switch to a different protocol such as TLS/1.0.
     */
    _426_UpgradeRequired: 426,
    /**
     * ### [ 428 ] - Precondition Required
     *- The origin server requires the request to add some preconditions that
     *     are required by the command.
     */
    _428_PreconditionRequired: 428,
    /**
     * ### [ 429 ] - Too Many Requests
     * - The user has sent too many requests in a given amount of time.
     */
    _429_TooManyRequests: 429,
    /**
     * ### [ 431 ] - Request Header Fields Too Large
     * - The server is unwilling to process the request because either an individual header field,
     */
    _431_RequestHeaderFieldsTooLarge: 431,
  },
  /**
   * ## [ 5xx ] - Server Error Codes
   * ### [ 500 ] - Internal Server Error
   *- The server has encountered a situation it doesn't know how to handle.
   * ### [ 501 ] - Not Implemented
   * - The endpoint has not been implemented yet.
   * ### [ 502 ] - Bad Gateway
   * - Communication between the server and another server has failed.
   * ### [ 503 ] - Service Unavailable
   * - The server is not available now.
   * - Usually used when the server is down for maintenance or is overloaded.
   * ### [ 504 ] - Gateway Timeout
   * - Communication between the server and another server has timed out.
   */
  _5_ServerError: {
    /**
     * ### [ 500 ] - Internal Server Error
     *- The server has encountered a situation it doesn't know how to handle.
     */
    _500_InternalServerError: 500,
    /**
     * ### [ 501 ] - Not Implemented
     * - The endpoint has not been implemented yet.
     */
    _501_NotImplemented: 501,
    /**
     * ### [ 502 ] - Bad Gateway
     * - Communication between the server and another server has failed.
     */
    _502_BadGateway: 502,
    /**
     * ### [ 503 ] - Service Unavailable
     * - The server is not available now.
     * - Usually used when the server is down for maintenance or is overloaded.
     */
    _503_ServiceUnavailable: 503,
    /**
     * ### [ 504 ] - Gateway Timeout
     * - Communication between the server and another server has timed out.
     */
    _504_GatewayTimeout: 504,
  },
};

export default StatusCode;
