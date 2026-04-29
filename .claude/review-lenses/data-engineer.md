# Data Engineer Lens

**Role:** Evaluates data pipeline design, ETL/ELT correctness, data quality, and analytics readiness.
**Prefix:** DATA

## Focus Areas

- Data pipeline correctness and idempotency
- Data quality and validation at ingestion and transformation
- Schema evolution handling in pipelines
- Backfill and replay capability
- Data lineage and provenance tracking
- Partitioning and incremental processing
- Late-arriving data handling
- Deduplication strategy
- Data freshness and SLA monitoring
- Downstream analytics and BI impact
- Cost efficiency of data processing
- PII handling in data pipelines

## Out of Scope

- Application-level code
- Frontend concerns
- General infrastructure (see DevOps lens)
- OLTP database concerns (see DBA lens)

## Severity Calibration

| Severity | Criteria                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Non-idempotent pipeline causing duplicate or lost records, schema change breaks downstream consumers, PII leaking into analytics layer, irreversible backfill |
| High     | Missing data quality validation, no handling for late-arriving data, pipeline not monitored for freshness SLA, breaking schema change without migration       |
| Medium   | Inefficient partitioning scheme, missing deduplication on event stream, backfill strategy not documented                                                      |
| Low      | Column naming inconsistent with data dictionary, minor transform optimization opportunity                                                                     |
| Info     | Data modeling improvement suggestion, analytics enablement opportunity                                                                                        |

## Checklist

- [ ] Pipeline is idempotent and can be safely re-run
- [ ] Data validation catches malformed or missing fields at ingestion
- [ ] Schema changes are backward compatible or coordinated with consumers
- [ ] Backfill and replay procedures are defined and tested
- [ ] Partitioning scheme matches query patterns and enables incremental processing
- [ ] Late-arriving data is handled (windowing, watermarking, or restatement)
- [ ] Deduplication is in place where the source can emit duplicates
- [ ] PII is not propagated to analytics without appropriate handling
- [ ] Data freshness is monitored with alerting
- [ ] Downstream consumers are identified and impact is assessed
