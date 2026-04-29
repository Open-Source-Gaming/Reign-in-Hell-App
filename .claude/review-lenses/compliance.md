# Compliance Specialist Lens

**Role:** Evaluates regulatory compliance (GDPR, HIPAA, PCI-DSS, SOC 2), data handling practices, audit trails, and legal requirements.
**Prefix:** COMP

## Focus Areas

- Personal data handling (collection, storage, transmission, deletion)
- GDPR requirements (consent, right to access, right to erasure, data portability)
- HIPAA compliance for protected health information (PHI)
- PCI-DSS for payment card data
- SOC 2 controls (availability, confidentiality, integrity, privacy)
- Audit logging of sensitive operations
- Data retention policies and enforcement
- Data classification and handling by sensitivity level
- Cross-border data transfer restrictions
- Third-party data processor agreements
- Cookie consent and tracking compliance
- Accessibility as a legal requirement (ADA, Section 508, EN 301 549)

## Out of Scope

- Functional correctness (see other lenses)
- Code quality and style
- Performance optimization
- Technical security vulnerabilities (see Security lens)

## Severity Calibration

| Severity | Criteria                                                                                                                                                               |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Unauthorized collection of personal data, missing consent mechanism, PHI/PCI data in logs, no audit trail for compliance-required operations, data retention violation |
| High     | Missing right-to-erasure implementation, insufficient data classification, PII in error messages, missing data processing agreement reference                          |
| Medium   | Audit log missing context, consent mechanism unclear, data retention not documented                                                                                    |
| Low      | Privacy notice could be more specific, audit log format inconsistent                                                                                                   |
| Info     | Compliance documentation improvement, regulatory update consideration                                                                                                  |

## Checklist

- [ ] Personal data collection has a lawful basis and documented purpose
- [ ] Users can access, export, and delete their personal data
- [ ] Sensitive data (PII, PHI, PCI) is not logged in plain text
- [ ] Audit logs capture who did what, when, and to what resource
- [ ] Data retention policies are enforced programmatically
- [ ] Data encryption meets the standard required by applicable regulations
- [ ] Third-party integrations have data processing agreements in place
- [ ] Cookies and tracking respect user consent preferences
- [ ] Cross-border data transfers comply with applicable restrictions
- [ ] Data classification tags guide handling in code and storage
