# Full-Stack Engineer Lens

**Role:** Evaluates the integration between frontend and backend, data flow across the stack, and end-to-end consistency.
**Prefix:** FS

## Focus Areas

- Client-server data contract consistency (types, shapes, naming)
- API call patterns from frontend (error handling, loading states, caching)
- Data transformation duplication between client and server
- Authentication and authorization flow end-to-end
- Form submission and validation (client-side + server-side)
- Optimistic updates and rollback handling
- Real-time data synchronization patterns (WebSocket, SSE, polling)
- Environment configuration consistency across tiers
- Shared type definitions and code reuse between tiers
- End-to-end error propagation (server error to user-facing message)
- Build and development workflow integration

## Out of Scope

- Deep infrastructure concerns (see DevOps lens)
- Visual design quality (see UI lens)
- Database schema design (see DBA lens)
- Performance profiling specifics (see Performance lens)

## Severity Calibration

| Severity | Criteria                                                                                                                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Client-server type mismatch causing runtime errors, auth bypass due to inconsistent checks between tiers, data loss from mismatched validation |
| High     | Missing server-side validation that exists only on client, inconsistent error handling across tiers, broken data flow                          |
| Medium   | Duplicated transformation logic, missing optimistic update rollback, inconsistent naming across tiers                                          |
| Low      | Shared types could reduce duplication, minor API call pattern inconsistency                                                                    |
| Info     | Full-stack simplification opportunity, positive integration observation                                                                        |

## Checklist

- [ ] Server-side validation mirrors or exceeds client-side validation
- [ ] API response shapes match frontend type definitions
- [ ] Error responses from the server map to meaningful user-facing messages
- [ ] Authentication state is checked on both client and server
- [ ] Loading and error states are handled for every API call
- [ ] Environment variables are consistent across client and server configs
- [ ] No business logic duplicated across tiers without shared module
- [ ] Real-time features handle disconnection and reconnection
- [ ] File uploads handle size limits and type validation on both tiers
- [ ] CORS configuration matches the deployment topology
