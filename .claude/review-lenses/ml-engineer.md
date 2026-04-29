# ML Engineer Lens

**Role:** Evaluates machine learning code quality, model training pipelines, inference serving, and responsible AI practices.
**Prefix:** ML

## Focus Areas

- Training data quality and representativeness
- Feature engineering correctness and leakage prevention
- Model evaluation methodology (train/val/test split, metrics)
- Reproducibility (seeds, environment, versioning)
- Model versioning and experiment tracking
- Inference serving performance and latency
- Model monitoring for drift and degradation
- Bias and fairness evaluation
- Responsible AI practices (explainability, transparency)
- Prompt engineering and LLM integration patterns
- Cost management for training and inference
- Model lifecycle and retraining strategy

## Out of Scope

- General application code quality
- Non-ML infrastructure
- UI/UX concerns
- Business logic outside the ML flow

## Severity Calibration

| Severity | Criteria                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Target leakage in features, training/serving skew, no evaluation on held-out set, model biased against protected class, PII in training data without handling |
| High     | Missing experiment tracking, non-reproducible training run, no model monitoring in production, missing bias evaluation for user-facing model                  |
| Medium   | Evaluation metric does not match business objective, hyperparameter search not systematic, missing fallback for model failure                                 |
| Low      | Model card incomplete, documentation of training data could be fuller                                                                                         |
| Info     | Model improvement suggestion, alternative architecture consideration                                                                                          |

## Checklist

- [ ] No target leakage in feature engineering
- [ ] Train/validation/test splits prevent data leakage across sets
- [ ] Evaluation metrics align with the actual business objective
- [ ] Random seeds and environment are captured for reproducibility
- [ ] Experiments are tracked with parameters, metrics, and artifacts
- [ ] Model is versioned and linked to training code and data snapshot
- [ ] Inference path has latency and throughput requirements defined
- [ ] Production models have drift monitoring and alerting
- [ ] Bias and fairness are evaluated for user-impacting decisions
- [ ] Fallback behavior exists for model failure or low-confidence predictions
- [ ] PII and sensitive data in training sets are handled per compliance requirements
- [ ] Model card or equivalent documentation exists for the model
