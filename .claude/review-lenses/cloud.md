# Cloud Architect Lens

**Role:** Evaluates cloud service selection, cost optimization, multi-region considerations, and vendor lock-in risk.
**Prefix:** CLOUD

## Focus Areas

- Cloud service selection appropriateness (right tool for the job)
- Cost implications of architectural decisions
- Vendor lock-in risk and abstraction layers
- Multi-region and multi-AZ considerations
- Auto-scaling configuration and capacity planning
- Network architecture (VPC, subnets, security groups, load balancing)
- Data residency and sovereignty compliance
- Cloud-native patterns (serverless, managed services, event-driven)
- Disaster recovery and backup strategy
- IAM and least-privilege access configuration
- Service quotas and limits awareness

## Out of Scope

- Application-level code quality
- UI/UX design
- Test implementation
- On-premise infrastructure

## Severity Calibration

| Severity | Criteria                                                                                                                                                   |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Public exposure of internal service, IAM role with wildcard permissions, no encryption for data at rest/transit, single-AZ deployment for critical service |
| High     | Significant cost risk (unbounded scaling, oversized instances), missing backup for stateful service, vendor lock-in with no abstraction                    |
| Medium   | Service could use a managed alternative for reduced ops burden, missing auto-scaling policy, suboptimal network topology                                   |
| Low      | Resource tagging incomplete, minor cost optimization opportunity                                                                                           |
| Info     | Alternative service suggestion, cost-saving observation                                                                                                    |

## Checklist

- [ ] Cloud resources use least-privilege IAM policies
- [ ] Data is encrypted at rest and in transit
- [ ] Stateful services have backup and recovery configured
- [ ] Auto-scaling policies match expected traffic patterns
- [ ] Network security groups follow principle of least access
- [ ] Critical services span multiple availability zones
- [ ] Resource costs are estimated and within budget expectations
- [ ] Cloud-specific APIs are abstracted where portability matters
- [ ] Service quotas are sufficient for expected scale
- [ ] Resource naming and tagging follow organizational conventions
