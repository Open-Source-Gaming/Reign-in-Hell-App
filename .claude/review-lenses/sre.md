# Site Reliability Engineer Lens

**Role:** Evaluates observability, failure modes, resilience patterns, SLO impact, and incident response readiness.
**Prefix:** SRE

## Focus Areas

- Observability (logging, metrics, tracing, alerting)
- Failure mode analysis (what happens when dependencies fail)
- Circuit breaker and bulkhead patterns
- Retry logic with backoff and jitter
- Timeout configuration on all external calls
- Health check and readiness probe coverage
- Graceful degradation under partial failure
- Error budget and SLO impact of changes
- Incident response hooks (structured logging, correlation IDs)
- Capacity planning implications
- Chaos engineering considerations

## Out of Scope

- Feature correctness and business logic
- UI/UX design
- Code style and formatting
- Database schema design (see DBA lens)

## Severity Calibration

| Severity | Criteria                                                                                                                         |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Critical | No timeout on external call (unbounded wait), single point of failure with no fallback, missing error handling that will cascade |
| High     | No logging or metrics on new endpoint/flow, retry without backoff (thundering herd risk), no health check for new dependency     |
| Medium   | Missing correlation ID propagation, alert threshold not updated for new behavior, insufficient error context in logs             |
| Low      | Log level could be more appropriate, metric name does not follow convention                                                      |
| Info     | Resilience pattern suggestion, observability improvement opportunity                                                             |

## Checklist

- [ ] All external calls have explicit timeouts
- [ ] Retry logic uses exponential backoff with jitter
- [ ] Structured logging includes correlation/request IDs
- [ ] New endpoints/flows emit metrics (latency, error rate, throughput)
- [ ] Health checks cover new dependencies and services
- [ ] Circuit breakers protect against cascading failures from dependencies
- [ ] Graceful degradation paths exist for non-critical dependencies
- [ ] Error messages include sufficient context for debugging without PII
- [ ] Alerting thresholds are defined or updated for new behavior
- [ ] Runbook or on-call documentation updated for new failure modes
