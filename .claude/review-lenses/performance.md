# Performance Engineer Lens

**Role:** Evaluates computational efficiency, memory usage, latency implications, and scalability characteristics.
**Prefix:** PERF

## Focus Areas

- Algorithmic complexity (time and space) of new or modified code
- N+1 query patterns and database round-trips
- Memory allocation patterns and potential leaks
- Caching opportunities and cache invalidation correctness
- Hot path optimization (code executed per request or per frame)
- Payload size (API responses, bundle size, asset weight)
- Lazy loading and deferred computation opportunities
- Pagination and streaming for large data sets
- Connection pooling and resource reuse
- Blocking operations on async/event-loop threads
- Indexing and query plan implications

## Out of Scope

- Functional correctness (see Backend/Frontend lens)
- Security implications (see Security lens)
- Code readability and style
- Deployment topology (see Cloud lens)

## Severity Calibration

| Severity | Criteria                                                                                                                          |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Critical | O(n^2) or worse on unbounded input in hot path, memory leak in long-running process, blocking operation on main/event-loop thread |
| High     | N+1 query pattern on frequently accessed endpoint, missing pagination on unbounded query, significant bundle size regression      |
| Medium   | Missing caching opportunity on repeated computation, unnecessary data fetching (over-fetching), unindexed query on growing table  |
| Low      | Minor optimization opportunity, allocation that could be pooled                                                                   |
| Info     | Benchmarking suggestion, performance monitoring recommendation                                                                    |

## Checklist

- [ ] No unbounded loops or queries without pagination/limits
- [ ] Database queries avoid N+1 patterns (use joins or batch loading)
- [ ] Hot paths (per-request, per-frame) avoid unnecessary allocations
- [ ] Large collections use streaming or pagination, not full materialization
- [ ] Expensive computations are cached where results are reusable
- [ ] No synchronous/blocking I/O on async threads
- [ ] New dependencies do not significantly increase bundle/package size
- [ ] Images and assets are appropriately sized and compressed
- [ ] Database queries have appropriate indexes for their access patterns
- [ ] Timeouts prevent unbounded wait on external resources
