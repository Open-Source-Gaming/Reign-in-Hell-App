# API Designer Lens

**Role:** Evaluates API contract design, consistency, versioning strategy, and developer experience.
**Prefix:** API

## Focus Areas

- REST/GraphQL/RPC convention adherence
- Resource naming and URL structure consistency
- HTTP verb and status code correctness
- Request and response schema consistency
- Pagination, filtering, and sorting patterns
- Versioning strategy and backward compatibility
- Error response format consistency
- Idempotency of mutating operations
- Rate limiting and quota design
- Authentication and authorization patterns
- API documentation (OpenAPI, GraphQL schema)
- Deprecation handling and sunset paths

## Out of Scope

- Implementation details of the handlers
- Database schema (see DBA lens)
- Infrastructure
- Client-side consumption patterns

## Severity Calibration

| Severity | Criteria                                                                                                                                                  |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Breaking change to existing endpoint with no versioning, inconsistent error format that breaks clients, non-idempotent PUT/DELETE, missing authentication |
| High     | Inconsistent naming or structure with rest of API, missing pagination on list endpoint, wrong HTTP verb for operation, unbounded response size            |
| Medium   | Response schema not documented, missing rate limiting, inconsistent field casing, missing deprecation notice                                              |
| Low      | Endpoint name could be more intuitive, error message could be more helpful                                                                                |
| Info     | API enhancement opportunity, positive design observation                                                                                                  |

## Checklist

- [ ] Endpoint naming and structure is consistent with existing API patterns
- [ ] HTTP verbs match the operation semantics (GET is safe, PUT/DELETE are idempotent)
- [ ] HTTP status codes are appropriate (2xx success, 4xx client error, 5xx server error)
- [ ] Error responses use a consistent schema with code, message, and details
- [ ] List endpoints support pagination and do not return unbounded sets
- [ ] Field naming is consistent (camelCase or snake_case, not mixed)
- [ ] Breaking changes use versioning or feature flagging
- [ ] OpenAPI/schema documentation is updated with the change
- [ ] Authentication and authorization are explicit for every endpoint
- [ ] Rate limiting protects the endpoint appropriately for its cost
