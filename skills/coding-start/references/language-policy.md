# Language Policy

This is the single authoritative Language Policy reference for `coding-start`. `SKILL.md`, `references/discovery.md`, and `references/artifact-contracts.md` link here instead of restating the contract.

<!-- lang-policy-core-start -->
Use these exact defaults unless an override is both explicitly requested and approved by a named `Maintainer Decision Authority` empowered for project language policy:

```text
documentation_language = en
engineering_language = en
```

- Documentation Language governs formal artifact prose in README, STAGE, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline and Knowledge Gap reports, Test Design documents, Implementation Plans, Review documents, Done Checklists, and Delivery Records.
- Engineering Language governs new class, method, variable, package, and module names; database tables and columns; API paths and definitions; configuration keys but not arbitrary values; environment variables; infrastructure names; branch names; commit messages; Issue/PR titles and descriptions; code comments; executable test names and descriptions; and developer-facing log messages.
- Product Content Language follows product requirements and has no default. Record actual BCP-47 value(s) when a product-content surface is known, `UNKNOWN - <resolution action>` while a potentially relevant surface is unresolved, or `N/A - no product-content surface` only when the confirmed scope has no user-facing or localized content. It permits localized resource/configuration values, exact product copy quoted in clearly labeled formal docs, and exact-copy assertions. Surrounding formal prose remains under Documentation Language; executable test names/descriptions, assertion code, and other engineering text remain under Engineering Language.
- Conversation MAY follow the user's language. Conversation language MUST NOT silently override any artifact-language dimension.
- Every override MUST be explicitly requested and approved by a named `Maintainer Decision Authority` empowered for project language policy; the requester is not automatically that authority. Record request source, authority name/role, approval source, scope, and affected artifacts. The Agent MUST NOT self-approve; a solo maintainer MAY hold the `Maintainer Decision Authority` role and approve their own explicit override request, recording request source, approval source, date, and scope like any other approval.
- Before writing or updating a formal artifact, inspect its existing formal-prose language. Excluding clearly labeled exact Product Content, if it is mixed, differs from the resolved Documentation Language, or the update would introduce a second prose language or require translation, record `CONFLICT` and `STOP`. Resume only after a named `Maintainer Decision Authority` approves one whole-document language and the user separately authorizes the required translation/update scope. This gate applies in both language directions.
- Persist every effective value exactly once in the nearest `AGENTS.md` whose scope fully governs it: repository-wide fallbacks and global engineering surfaces belong in root; a subtree-only override belongs in the nearest governing nested file, or root when none exists. Broader files MAY link to that authoritative entry but MUST NOT duplicate its value. Defaults are replaced only within the approved scope.
<!-- lang-policy-core-end -->

## Skill-specific: coding-start

- During Greenfield initialization, root `AGENTS.md` is the authoritative location for repository-wide fallbacks, global engineering surfaces, and any scoped override, because this Skill does not create nested policy files. If a later workflow adopts a nested policy, root MAY link to it but MUST NOT duplicate the value.
- Discovery notes or another unspecified document are not sufficient; later `feature-dev` work MUST be able to resolve every applicable dimension from the root-to-target `AGENTS.md` chain. Persist every effective value exactly once before handoff.
- The bidirectional mixed-document gate also covers pre-existing notes promoted into formal artifacts.
- Product Content Language exceptions never alter surrounding artifact or engineering text: executable test names/descriptions, assertion code, and other engineering text remain under Engineering Language even when they contain an exact Product Content assertion value.
