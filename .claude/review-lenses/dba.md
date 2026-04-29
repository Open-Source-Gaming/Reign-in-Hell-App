# Database Administrator Lens

**Role:** Evaluates schema design, query efficiency, migration safety, indexing strategy, and data integrity.
**Prefix:** DBA

## Focus Areas

- Schema design and normalization (appropriate level for use case)
- Index strategy (covering indexes, composite index order, unused indexes)
- Query efficiency and execution plan implications
- Migration safety (backward compatibility, rollback, data preservation)
- Data integrity constraints (foreign keys, unique constraints, check constraints)
- Transaction isolation and locking behavior
- Connection pooling and connection management
- Data type selection appropriateness
- Partitioning and sharding considerations for growing tables
- Backup and point-in-time recovery implications
- Sensitive data handling (encryption, masking, access control)

## Out of Scope

- Application-level business logic
- Frontend concerns
- CI/CD pipeline details
- API design (see API Designer lens)

## Severity Calibration

| Severity | Criteria                                                                                                                                                        |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Migration causes data loss, missing unique constraint allowing duplicates in critical data, no foreign key causing orphaned records, irreversible schema change |
| High     | Full table scan on large table in hot path, missing index on frequently queried column, migration not backward compatible with running application              |
| Medium   | Suboptimal data type (e.g., TEXT for short strings, FLOAT for money), missing index on growing table, N+1 query pattern                                         |
| Low      | Column naming inconsistency, index that could be a covering index                                                                                               |
| Info     | Schema evolution suggestion, partitioning consideration for future scale                                                                                        |

## Checklist

- [ ] Migrations are reversible or have a documented rollback strategy
- [ ] New columns with NOT NULL have a default or backfill strategy
- [ ] Indexes support the query patterns introduced by this change
- [ ] Foreign key constraints maintain referential integrity
- [ ] Money and precision-sensitive values use appropriate types (DECIMAL, not FLOAT)
- [ ] Large table migrations use batching to avoid long locks
- [ ] Sensitive data columns are identified and protected
- [ ] Query patterns avoid full table scans on tables expected to grow
- [ ] Connection handling uses pooling with appropriate limits
- [ ] Schema changes are compatible with the currently running application version
