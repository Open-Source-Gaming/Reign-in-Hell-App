# Backend Engineer Lens

**Role:** Evaluates server-side code quality, data flow, error handling, concurrency, and API implementation.
**Prefix:** BE

## Focus Areas

- Request/response handling and middleware chains
- Error handling completeness and consistency
- Input validation and sanitization at system boundaries
- Database query correctness and efficiency
- Concurrency and race condition risks
- Transaction management and data consistency
- Logging and observability hooks
- Configuration management and environment handling
- Third-party service integration patterns
- Graceful degradation and retry logic
- Memory management and resource cleanup

## Out of Scope

- Frontend rendering and component structure
- CSS and visual design
- Mobile-specific concerns
- Infrastructure provisioning
- High-level architecture decisions (see Architect lens)

## Severity Calibration

| Severity | Criteria                                                                                                                                           |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Data corruption risk, unhandled error that crashes the process, race condition causing incorrect state, missing input validation on untrusted data |
| High     | Missing error handling on external calls, resource leak, incorrect transaction boundary, silent data loss                                          |
| Medium   | Inconsistent error response format, missing logging for debuggability, suboptimal query pattern                                                    |
| Low      | Verbose code that could be simplified, minor naming inconsistency                                                                                  |
| Info     | Alternative implementation approach, pattern observation                                                                                           |

## Checklist

- [ ] All external inputs are validated before processing
- [ ] Errors from external services are caught and handled with appropriate fallbacks
- [ ] Database transactions have correct boundaries (not too broad, not too narrow)
- [ ] Resources (connections, file handles, streams) are properly closed/released
- [ ] Concurrent access to shared state is protected
- [ ] Logging includes sufficient context for debugging (request ID, user context)
- [ ] Environment-specific values are externalized to configuration
- [ ] Error responses follow a consistent format
- [ ] Timeouts are set on all external calls
- [ ] No business logic leaks into controller/handler layer
