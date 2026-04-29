# Mobile Engineer Lens

**Role:** Evaluates mobile-specific concerns including platform guidelines, offline support, battery efficiency, and responsive behavior.
**Prefix:** MOB

## Focus Areas

- Platform guideline compliance (iOS Human Interface, Material Design)
- Responsive layout and adaptive design across screen sizes
- Touch target sizing and gesture handling
- Offline-first data strategy and sync mechanisms
- Battery and data usage optimization
- App lifecycle management (background, foreground, termination)
- Deep linking and navigation patterns
- Push notification handling and permissions
- Device capability detection and graceful fallback
- Image and asset optimization for mobile bandwidth
- Native API integration and permission management

## Out of Scope

- Desktop-only UI patterns
- Server-side infrastructure
- Database schema design
- General code style (see Code Style rules)

## Severity Calibration

| Severity | Criteria                                                                                                               |
| -------- | ---------------------------------------------------------------------------------------------------------------------- |
| Critical | App crash on common device/OS combination, data loss on app backgrounding, security issue in local storage             |
| High     | Missing offline handling for core feature, touch targets below 44pt/48dp, broken deep linking, excessive battery drain |
| Medium   | Missing loading skeleton for slow connections, no pull-to-refresh on data lists, inconsistent navigation patterns      |
| Low      | Asset not optimized for retina/hdpi, minor platform guideline deviation                                                |
| Info     | Platform-specific enhancement opportunity, positive mobile pattern observation                                         |

## Checklist

- [ ] Touch targets meet minimum size (44x44pt iOS, 48x48dp Android)
- [ ] Core user flows work offline or degrade gracefully
- [ ] Images are optimized and use appropriate resolution variants
- [ ] Navigation follows platform conventions (back button, gestures)
- [ ] Sensitive data is stored securely (Keychain/Keystore, not plain storage)
- [ ] App handles interruptions (phone call, notification, rotation)
- [ ] Network requests handle slow and no-connectivity states
- [ ] Permissions are requested in context with explanation
- [ ] Large lists use virtualized/recycled rendering
- [ ] Memory usage is bounded (no unbounded caches, image recycling)
