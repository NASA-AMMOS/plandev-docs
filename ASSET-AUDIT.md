# Multimedia Asset Audit for PlanDev/SeqDev Rebranding

This document lists all multimedia assets that may need to be reviewed or regenerated due to the Aerie → PlanDev/SeqDev rebranding.

**Legend:**

- [ ] Not reviewed yet
- [x] Reviewed - No changes needed
- [!] Reviewed - Needs update
- [~] Reviewed - Low priority / Minor issue

**Scan Results Summary:**

- 🔴 **UI Screenshots with full header**: Almost ALL show "AERIE" branding in the navigation bar
- 🟡 **Cropped UI elements**: Usually OK (no header visible)
- 🟢 **Conceptual diagrams**: Usually OK (no Aerie text)
- 🔴 **Custom diagrams (capabilities, getting started)**: Contain "Aerie" text throughout

---

## 1. Static Branding Assets (REQUIRE NEW DESIGN)

These are the core branding files that definitely need new versions:

### 1.1 Logo Files

| Status | File                                  | Description         | Notes                                                   |
| ------ | ------------------------------------- | ------------------- | ------------------------------------------------------- |
| [!]    | `static/img/aerie-logo-dark.svg`      | Dark mode logo      | ⚠️ SCANNED: Aerie logo icon - needs PlanDev replacement |
| [!]    | `static/img/aerie-logo-light.svg`     | Light mode logo     | ⚠️ Needs PlanDev logo replacement                       |
| [!]    | `static/img/aerie-wordmark-dark.svg`  | Dark mode wordmark  | ⚠️ Needs PlanDev wordmark replacement                   |
| [!]    | `static/img/aerie-wordmark-light.svg` | Light mode wordmark | ⚠️ SCANNED: Contains "AERIE" text as SVG paths          |

### 1.2 Video Assets

| Status | File                                     | Description               | Notes                                                           |
| ------ | ---------------------------------------- | ------------------------- | --------------------------------------------------------------- |
| [x]    | `static/video/aerie-video-still.png`     | Video thumbnail/poster    | ✅ SCANNED: No Aerie text                                       |
| [!]    | `static/video/aerie-video-subtitles.mp4` | Promotional video (101MB) | ⚠️ SCANNED: Contains "Aerie" text, audio, and video references. |

---

## 2. Homepage & Marketing Images

### 2.1 Main UI Screenshot

| Status | File                              | Description                   | Notes                                            |
| ------ | --------------------------------- | ----------------------------- | ------------------------------------------------ |
| [!]    | `static/img/plandev-ui-light.png` | Main homepage hero screenshot | ⚠️ SCANNED: Shows "AERIE" in top-left nav header |

### 2.2 Feature Cards (8 files)

| Status | File                                                             | Description                          | Notes                                         |
| ------ | ---------------------------------------------------------------- | ------------------------------------ | --------------------------------------------- |
| [x]    | `static/img/cards/plandev-feature-planning-commanding-light.png` | Planning & commanding feature        | ✅ SCANNED: No Aerie text - generic graphics  |
| [x]    | `static/img/cards/plandev-feature-planning-commanding-dark.png`  | Planning & commanding feature (dark) | ✅ Likely same as light version               |
| [x]    | `static/img/cards/plandev-feature-mission-modeling-light.png`    | Mission modeling feature             | ✅ SCANNED: No Aerie text - generic UI mockup |
| [x]    | `static/img/cards/plandev-feature-mission-modeling-dark.png`     | Mission modeling feature (dark)      | ✅ Likely same as light version               |
| [x]    | `static/img/cards/plandev-feature-collaboration-light.png`       | Collaboration feature                | ✅ SCANNED: No Aerie text - flow diagram      |
| [x]    | `static/img/cards/plandev-feature-collaboration-dark.png`        | Collaboration feature (dark)         | ✅ Likely same as light version               |
| [!]    | `static/img/cards/plandev-feature-rule-checking-light.png`       | Rule checking feature                | ⚠️ SCANNED: Has "Ae" logo icon in top-right   |
| [!]    | `static/img/cards/plandev-feature-rule-checking-dark.png`        | Rule checking feature (dark)         | ⚠️ Likely has same "Ae" icon                  |

### 2.3 Get Started Cards (10 files)

| Status | File                                                              | Description                     | Notes                                             |
| ------ | ----------------------------------------------------------------- | ------------------------------- | ------------------------------------------------- |
| [x]    | `static/img/cards/plandev-getstarted-mission-planners-light.png`  | For Mission Planners            | ✅ SCANNED: No Aerie text - generic clipboard     |
| [x]    | `static/img/cards/plandev-getstarted-mission-planners-dark.png`   | For Mission Planners (dark)     | ✅ Likely same as light version                   |
| [x]    | `static/img/cards/plandev-getstarted-systems-engineers-light.png` | For Systems Engineers           | ✅ SCANNED: No Aerie text                         |
| [x]    | `static/img/cards/plandev-getstarted-systems-engineers-dark.png`  | For Systems Engineers (dark)    | ✅ SCANNED: No Aerie text                         |
| [x]    | `static/img/cards/plandev-getstarted-spacecraftops-light.png`     | For Spacecraft Operators        | ✅ SCANNED: No Aerie text                         |
| [x]    | `static/img/cards/plandev-getstarted-spacecraftops-dark.png`      | For Spacecraft Operators (dark) | ✅ SCANNED: No Aerie text                         |
| [x]    | `static/img/cards/plandev-getstarted-opensource-light.png`        | Open Source card                | ✅ SCANNED: No Aerie text                         |
| [x]    | `static/img/cards/plandev-getstarted-opensource-dark.png`         | Open Source card (dark)         | ✅ SCANNED: No Aerie text                         |
| [!]    | `static/img/cards/plandev-getstarted-customize-light.png`         | Customization card              | ⚠️ SCANNED: Contains "Aerie UI" in service bubble |
| [!]    | `static/img/cards/plandev-getstarted-customize-dark.png`          | Customization card (dark)       | ⚠️ SCANNED: Contains "Aerie UI" in service bubble |

### 2.4 Learn More Cards (8 files)

| Status | File                                                  | Description              | Notes                                         |
| ------ | ----------------------------------------------------- | ------------------------ | --------------------------------------------- |
| [x]    | `static/img/cards/plandev-learn-slack.png`            | Slack card               | ✅ SCANNED: No Aerie text - generic Slack UI  |
| [x]    | `static/img/cards/plandev-learn-slack-dark.png`       | Slack card (dark)        | ✅ Likely same as light version               |
| [x]    | `static/img/cards/plandev-learn-github.png`           | GitHub card              | ✅ SCANNED: No Aerie text - generic GitHub UI |
| [x]    | `static/img/cards/plandev-learn-github-dark.png`      | GitHub card (dark)       | ✅ Likely same as light version               |
| [!]    | `static/img/cards/plandev-learn-googlegroup.png`      | Google Group card        | ⚠️ SCANNED: Contains "Aerie"                  |
| [!]    | `static/img/cards/plandev-learn-googlegroup-dark.png` | Google Group card (dark) | ⚠️ SCANNED: Contains "Aerie"                  |
| [!]    | `static/img/cards/plandev-learn-extensions.png`       | Extensions card          | ⚠️ SCANNED: Contains "Aerie" logo             |
| [!]    | `static/img/cards/plandev-learn-extensions-dark.png`  | Extensions card (dark)   | ⚠️ SCANNED: Contains "Aerie" logo             |

### 2.5 Partner/Mission Logos (likely OK as-is)

| Status | File                                         | Description             | Notes                     |
| ------ | -------------------------------------------- | ----------------------- | ------------------------- |
| [x]    | `static/img/missions/europa-logo-dark.png`   | Europa Clipper logo     | ✅ External branding - OK |
| [x]    | `static/img/missions/europa-logo-dark.svg`   | Europa Clipper logo SVG | ✅ External branding - OK |
| [x]    | `static/img/missions/europa-logo-light.png`  | Europa Clipper logo     | ✅ External branding - OK |
| [x]    | `static/img/missions/europa-logo-light.svg`  | Europa Clipper logo SVG | ✅ External branding - OK |
| [x]    | `static/img/missions/goddard-logo-dark.png`  | Goddard logo            | ✅ External branding - OK |
| [x]    | `static/img/missions/goddard-logo-light.png` | Goddard logo            | ✅ External branding - OK |
| [x]    | `static/img/missions/jpl-logo.png`           | JPL logo                | ✅ External branding - OK |
| [x]    | `static/img/missions/jpl-logo.svg`           | JPL logo SVG            | ✅ External branding - OK |
| [x]    | `static/img/missions/msr-dark.png`           | MSR logo                | ✅ External branding - OK |
| [x]    | `static/img/missions/msr-light.png`          | MSR logo                | ✅ External branding - OK |
| [x]    | `static/img/missions/nasa-logo.png`          | NASA logo               | ✅ External branding - OK |
| [x]    | `static/img/missions/nasa-logo.svg`          | NASA logo SVG           | ✅ External branding - OK |

---

## 3. Overview / Concept Documentation

### 3.1 Conceptual Diagrams

| Status | File                                             | Description                   | Notes                                                                                |
| ------ | ------------------------------------------------ | ----------------------------- | ------------------------------------------------------------------------------------ |
| [x]    | `docs/overview/assets/activity-type.png`         | Activity type concept diagram | ✅ SCANNED: No Aerie text - generic concept                                          |
| [x]    | `docs/overview/assets/mission-model.png`         | Mission model concept diagram | ✅ SCANNED: No Aerie text - generic concept                                          |
| [!]    | `docs/overview/assets/plandev-capabilities.png`  | PlanDev capabilities diagram  | ⚠️ SCANNED: Contains "Aerie Capabilities" title + "Aerie Web UI" - needs full update |
| [!]    | `docs/overview/assets/starting-with-plandev.png` | Getting started diagram       | ⚠️ SCANNED: Contains "Aerie" 10+ times throughout! Needs full recreation             |

### 3.2 Architecture Diagrams (PlantUML-generated)

| Status | File                                                         | Description                  | Notes                   |
| ------ | ------------------------------------------------------------ | ---------------------------- | ----------------------- |
| [x]    | `docs/overview/design/assets/c4-plandev-context.png`         | C4 context diagram           | ✅ Updated via PlantUML |
| [x]    | `docs/overview/design/assets/c4-plandev-container.png`       | C4 container diagram         | ✅ Updated via PlantUML |
| [x]    | `docs/overview/design/assets/c4-merlin-server-component.png` | Merlin component diagram     | ✅ Updated via PlantUML |
| [x]    | `docs/overview/design/assets/c4-scheduling-component.png`    | Scheduling component diagram | ✅ Updated via PlantUML |

---

## 4. API Documentation

| Status | File                                                    | Description               | Notes                                           |
| ------ | ------------------------------------------------------- | ------------------------- | ----------------------------------------------- |
| [x]    | `docs/api/assets/api-playground.png`                    | API playground screenshot | ✅ SCANNED: Shows Altair client - No Aerie text |
| [x]    | `docs/api/assets/gateway-auth-login.png`                | Gateway login screenshot  | ✅ SCANNED: No Aerie references                 |
| [x]    | `docs/api/assets/hasura-console-login.png`              | Hasura console screenshot | ✅ SCANNED: No Aerie references                 |
| [!]    | `docs/api/assets/api-playground-admin-secret.mov`       | Video: admin secret       | ⚠️ Uses "aerie" as admin secret in video        |
| [x]    | `docs/api/assets/api-playground-pre-request-script.mov` | Video: pre-request script | ✅ SCANNED: No Aerie references                 |

---

## 5. Command Expansion Documentation

### 5.1 Main Command Expansion

| Status | File                                                                             | Description           | Notes                                                  |
| ------ | -------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------ |
| [~]    | `docs/command-expansion/assets/command-dictionary-page.png`                      | Command dictionary UI | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/navigation-menu.png`                              | Navigation menu       | ⚠️ SCANNED: Shows "AERIE" logo in header + browser tab |
| [~]    | `docs/command-expansion/assets/plan-create-sequence.png`                         | Create sequence UI    | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/plan-expansion-assign-sequence.png`               | Assign sequence UI    | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/plan-expansion-filter-submission.png`             | Filter submission UI  | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/plan-expansion-new-filter.png`                    | New filter UI         | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/plan-expansion-panel-new.png`                     | Expansion panel UI    | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/plan-expansion-panel.png`                         | Expansion panel UI    | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/plan-expansion-sequence-creation-from-filter.png` | Sequence creation UI  | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/plan-run-expansion.png`                           | Run expansion UI      | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/plan-view-sequence.png`                           | View sequence UI      | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/rules-editor-command-args-1.png`                  | Rules editor UI       | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/rules-editor-command-args-2.png`                  | Rules editor UI       | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/rules-editor-command-args-error.png`              | Rules editor error    | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/rules-editor-command-autocomplete.png`            | Rules autocomplete    | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/rules-editor.png`                                 | Rules editor UI       | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/rules-page.png`                                   | Rules page UI         | ⚠️ SCANNED: Shows "AERIE" in header + browser tab      |
| [~]    | `docs/command-expansion/assets/sets-create-page.png`                             | Create sets UI        | ⚠️ Shows AERIE in header                               |
| [~]    | `docs/command-expansion/assets/sets-page.png`                                    | Sets page UI          | ⚠️ Shows AERIE in header                               |

### 5.2 Template Expansion

| Status | File                                                                                                | Description         | Notes                    |
| ------ | --------------------------------------------------------------------------------------------------- | ------------------- | ------------------------ |
| [~]    | `docs/command-expansion/template-expansion/assets/authoring-template-create-sequence-template.png`  | Create template UI  | ⚠️ Shows AERIE in header |
| [~]    | `docs/command-expansion/template-expansion/assets/authoring-template-editor.png`                    | Template editor UI  | ⚠️ Shows AERIE in header |
| [~]    | `docs/command-expansion/template-expansion/assets/authoring-template-helpers.png`                   | Template helpers UI | ⚠️ Shows AERIE in header |
| [~]    | `docs/command-expansion/template-expansion/assets/authoring-template-sequence-templates-option.png` | Templates option UI | ⚠️ Shows AERIE in header |
| [~]    | `docs/command-expansion/template-expansion/assets/expanding-templates-filter.png`                   | Expansion filter UI | ⚠️ Shows AERIE in header |
| [~]    | `docs/command-expansion/template-expansion/assets/expanding-templates-plan.png`                     | Expansion plan UI   | ⚠️ Shows AERIE in header |
| [~]    | `docs/command-expansion/template-expansion/assets/expanding-templates-result.png`                   | Expansion result UI | ⚠️ Shows AERIE in header |

---

## 6. Deployment Documentation

| Status | File                                       | Description           | Notes                                                             |
| ------ | ------------------------------------------ | --------------------- | ----------------------------------------------------------------- |
| [!]    | `docs/deployment/assets/ui-login-page.png` | Login page screenshot | ⚠️ SCANNED: Shows "Aerie" in browser tab + "Log in to Aerie" text |
| [~]    | `docs/deployment/assets/kube-demo.webm`    | Kubernetes demo video | ⚠️ Many "Aerie" references                                        |

---

## 7. Mission Modeling Documentation

| Status | File                                                   | Description             | Notes                   |
| ------ | ------------------------------------------------------ | ----------------------- | ----------------------- |
| [~]    | `docs/mission-modeling/assets/remote-debug-config.png` | Debug config screenshot | ⚠️ Has AERIE references |

---

## 8. Planning Documentation

### 8.1 Main Planning

| Status | File                                              | Description            | Notes                                                              |
| ------ | ------------------------------------------------- | ---------------------- | ------------------------------------------------------------------ |
| [!]    | `docs/planning/assets/create-plan.webm`           | Create plan video      | ⚠️ Has AERIE header                                                |
| [!]    | `docs/planning/assets/first-simulation.webm`      | First simulation video | ⚠️ Has AERIE header                                                |
| [!]    | `docs/planning/assets/upload-mission-model.webm`  | Upload model video     | ⚠️ Has AERIE header                                                |
| [~]    | `docs/planning/assets/export-plan.png`            | Export plan UI         | ✅ SCANNED: Cropped panel - no header visible                      |
| [~]    | `docs/planning/assets/extensions-navbar.png`      | Extensions navbar      | ⚠️ SCANNED: Shows "aerie admin" dropdown + "outside of Aerie" text |
| [~]    | `docs/planning/assets/gateway_dropdown.png`       | Gateway dropdown       | ⚠️ Shows AERIE in header                                           |
| [~]    | `docs/planning/assets/graphql_dropdown.png`       | GraphQL dropdown       | ⚠️ Shows AERIE AERIE header                                        |
| [x]    | `docs/planning/assets/invalid_anchor_tooltip.png` | Anchor tooltip         | ✅ SCANNED: Cropped panel - no header visible                      |
| [x]    | `docs/planning/assets/invalid_anchors_list.png`   | Anchors list           | ✅ SCANNED: Cropped panel - no header visible                      |

### 8.2 Planning Videos

| Status | File                                               | Description            | Notes                                      |
| ------ | -------------------------------------------------- | ---------------------- | ------------------------------------------ |
| [~]    | `docs/planning/assets/aasa.mov`                    | AASA demo video        | ⚠️ Shows AERIE in header in UI             |
| [~]    | `docs/planning/assets/anchoring_ui_demo.mov`       | Anchoring demo         | ⚠️ Shows AERIE in header in UI             |
| [~]    | `docs/planning/assets/remove_anchors_demo.mov`     | Remove anchors demo    | ⚠️ Shows AERIE in header in UI             |
| [~]    | `docs/planning/assets/simulate_with_incons.mov`    | Simulation with incons | ⚠️ Shows AERIE in header in UI             |
| [~]    | `docs/planning/assets/simulation_incons_query.mov` | Incons query demo      | ⚠️ Shows AERIE in header in UI             |
| [~]    | `docs/planning/assets/upload_incons.mov`           | Upload incons demo     | ⚠️ Shows AERIE in header in UI and Gateway |

### 8.3 Timeline Editing

| Status | File                                                         | Description         | Notes                                         |
| ------ | ------------------------------------------------------------ | ------------------- | --------------------------------------------- |
| [x]    | `docs/planning/assets/timeline-activity-filtering-modal.png` | Filtering modal     | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/planning/assets/timeline-activity-layer-adding.mov`    | Layer adding video  | ⚠️ Shows AERIE in header                      |
| [x]    | `docs/planning/assets/timeline-activity-options-mode.png`    | Options mode        | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/assets/timeline-activity-tree.png`            | Activity tree       | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/assets/timeline-cursor-interpolation-off.png` | Interpolation off   | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/assets/timeline-cursor-interpolation-on.png`  | Interpolation on    | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/assets/timeline-discrete-options-editor.png`  | Options editor      | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/assets/timeline-editor.png`                   | Timeline editor     | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/assets/timeline-icon-tray.png`                | Icon tray           | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/planning/assets/timeline-line-layer-editing.mov`       | Layer editing video | ⚠️ Shows AERIE in header                      |
| [x]    | `docs/planning/assets/timeline-row-editor.png`               | Row editor          | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/assets/timeline-y-axis-settings.png`          | Y-axis settings     | ✅ SCANNED: Cropped panel - no header visible |

### 8.4 Snapshots

| Status | File                                                             | Description           | Notes                                         |
| ------ | ---------------------------------------------------------------- | --------------------- | --------------------------------------------- |
| [x]    | `docs/planning/assets/snapshots/planMetadataPane.png`            | Metadata pane         | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/assets/snapshots/restoreSnapshotModal.png`        | Restore modal         | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/assets/snapshots/restoreSnapshotTakeSnapshot.png` | Restore/take snapshot | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/assets/snapshots/takeSnapshotModal.png`           | Take snapshot modal   | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/planning/assets/snapshots/takeSnapshotNavbar.png`          | Snapshot navbar       | ⚠️ Shows AERIE in header                      |
| [~]    | `docs/planning/assets/snapshots/viewSnapshot.png`                | View snapshot         | ⚠️ Shows AERIE in header                      |
| [~]    | `docs/planning/assets/snapshots/viewSnapshotNavbar.png`          | Snapshot navbar       | ⚠️ Shows AERIE in header                      |

### 8.5 Collaboration

| Status | File                                                             | Description          | Notes                                         |
| ------ | ---------------------------------------------------------------- | -------------------- | --------------------------------------------- |
| [~]    | `docs/planning/collaboration/assets/approve-merge.png`           | Approve merge        | ⚠️ Has AERIE header                           |
| [x]    | `docs/planning/collaboration/assets/begin-merge-modal.png`       | Begin merge modal    | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/planning/collaboration/assets/cancel-merge.png`            | Cancel merge         | ⚠️ Has AERIE header                           |
| [~]    | `docs/planning/collaboration/assets/create-branch-menu.png`      | Create branch menu   | ⚠️ SCANNED: Shows "AERIE" logo in header      |
| [x]    | `docs/planning/collaboration/assets/create-branch-modal.png`     | Create branch modal  | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/collaboration/assets/create-merge-rq-modal.png`   | Create merge request | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/collaboration/assets/create-merge-rq.png`         | Create merge request | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/planning/collaboration/assets/deny-merge.png`              | Deny merge           | ⚠️ Has AERIE header                           |
| [x]    | `docs/planning/collaboration/assets/incoming-merge-rqs.png`      | Incoming requests    | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/collaboration/assets/open-branch-header.png`      | Branch header        | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/collaboration/assets/open-branch-modal.png`       | Open branch modal    | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/collaboration/assets/open-parent-plan.png`        | Open parent plan     | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/collaboration/assets/outgoing-merge-rqs.png`      | Outgoing requests    | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/collaboration/assets/resolve-conflicts-bulk.png`  | Resolve conflicts    | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/planning/collaboration/assets/resolved-conflict.png`       | Resolved conflict    | ⚠️ Has AERIE header                           |
| [~]    | `docs/planning/collaboration/assets/unresolved-conflict.png`     | Unresolved conflict  | ⚠️ Has AERIE header                           |
| [x]    | `docs/planning/collaboration/assets/withdraw-merge-rq-modal.png` | Withdraw request     | ✅ SCANNED: Cropped panel - no header visible |

### 8.6 External Events

| Status | File                                                                                 | Description           | Notes                                         |
| ------ | ------------------------------------------------------------------------------------ | --------------------- | --------------------------------------------- |
| [x]    | `docs/planning/external-events/assets/create_derivation_group.png`                   | Create derivation     | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/create_external_event_type.png`                | Create event type     | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/create_external_source_type.png`               | Create source type    | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/create_groups_and_types_button.png`            | Create button         | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/derivation_example_full.png`                   | Derivation example    | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/derivation_group_motivation_ii.png`            | Derivation motivation | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/derivation_group_motivation.png`               | Derivation motivation | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/derivation_motivation.png`                     | Derivation motivation | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/external_event_options.png`                    | Event options         | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/external_event_table.png`                      | Event table           | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/external_events_before.png`                    | Events before         | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/external_events_derivation_group_disabled.png` | Derivation disabled   | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/external_events_derivation_group_enabled.png`  | Derivation enabled    | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/external_events_group_by_event_type.png`       | Group by type         | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/external_events_group_by_source.png`           | Group by source       | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/external_events_on_timeline.png`               | Events on timeline    | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/external_events_options.png`                   | Events options        | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/external_events_table.png`                     | Events table          | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/planning/external-events/assets/external_source_manager_intro.png`             | Source manager intro  | ⚠️ Has AERIE header                           |
| [x]    | `docs/planning/external-events/assets/external_source_manager_types_expanded.png`    | Types expanded        | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/planning/external-events/assets/external_source_manager_types_page.png`        | Types page            | ⚠️ Has AERIE header                           |
| [x]    | `docs/planning/external-events/assets/external_source_manager_upload.png`            | Upload manager        | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/planning/external-events/assets/external_sources_table.png`                    | Sources table         | ⚠️ Has AERIE header                           |
| [x]    | `docs/planning/external-events/assets/inspected_source.png`                          | Inspected source      | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/manage_derivation_group_modal.png`             | Manage derivation     | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/ordering_external_sources.png`                 | Ordering sources      | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/planning/external-events/assets/plan_external_source_full_view.png`            | Full view             | ⚠️ Has AERIE header                           |
| [x]    | `docs/planning/external-events/assets/plan_external_sources_panel.png`               | Sources panel         | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/plan_selected_external_event.png`              | Selected event        | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/planning/external-events/assets/timeline_and_editor_full.png`                  | Timeline editor       | ✅ SCANNED: Cropped panel - no header visible |

---

## 9. Scheduling & Constraints Documentation

### 9.1 Main Scheduling

| Status | File                                                                 | Description        | Notes                                         |
| ------ | -------------------------------------------------------------------- | ------------------ | --------------------------------------------- |
| [~]    | `docs/scheduling-and-constraints/assets/remote-debug-config.png`     | Debug config       | ⚠️ References Aerie                           |
| [x]    | `docs/scheduling-and-constraints/assets/run-scheduling-analysis.png` | Run analysis       | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/scheduling-and-constraints/assets/run-scheduling.png`          | Run scheduling     | ✅ SCANNED: Cropped panel - no header         |
| [x]    | `docs/scheduling-and-constraints/assets/scheduling-error.png`        | Scheduling error   | ✅ SCANNED: Cropped panel - no header         |
| [x]    | `docs/scheduling-and-constraints/assets/scheduling-failed.png`       | Scheduling failed  | ✅ SCANNED: Cropped panel - no header         |
| [x]    | `docs/scheduling-and-constraints/assets/scheduling-success.png`      | Scheduling success | ✅ SCANNED: Cropped panel - no header         |

### 9.2 Declarative Scheduling

| Status | File                                                                                         | Description          | Notes                                      |
| ------ | -------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------ |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/goal-context-menu.png`        | Goal context menu    | ✅ SCANNED: no Aerie text                  |
| [~]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/goal-editor-edit.png`         | Goal editor edit     | ⚠️ Shows AERIE header                      |
| [~]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/goal-editor-new.png`          | Goal editor new      | ⚠️ Shows AERIE header                      |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/invalid-recurrence-goal.png`  | Invalid goal         | ✅ SCANNED: no Aerie text                  |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/scheduling-panel.png`         | Scheduling panel     | ✅ SCANNED: no Aerie text                  |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/scheduling-specification.png` | Specification        | ✅ SCANNED: no Aerie text                  |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/xbeforey.png`                 | X before Y diagram   | ✅ SCANNED: Allen interval - no Aerie text |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/xcontainsy.png`               | X contains Y diagram | ✅ Allen interval - no Aerie text          |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/xequalsy.png`                 | X equals Y diagram   | ✅ Allen interval - no Aerie text          |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/xfinishesy.png`               | X finishes Y diagram | ✅ Allen interval - no Aerie text          |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/xmeetsy.png`                  | X meets Y diagram    | ✅ Allen interval - no Aerie text          |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/xoverlapsy.png`               | X overlaps Y diagram | ✅ Allen interval - no Aerie text          |
| [x]    | `docs/scheduling-and-constraints/declarative/scheduling/assets/xstartsy.png`                 | X starts Y diagram   | ✅ Allen interval - no Aerie text          |

### 9.3 Procedural Scheduling

| Status | File                                                                              | Description          | Notes                                         |
| ------ | --------------------------------------------------------------------------------- | -------------------- | --------------------------------------------- |
| [x]    | `docs/scheduling-and-constraints/procedural/assets/duplicate-invocation.png`      | Duplicate invocation | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/scheduling-and-constraints/procedural/assets/parameterized-goal.png`        | Parameterized goal   | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/scheduling-and-constraints/procedural/scheduling/assets/example-events.png` | Example events       | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/scheduling-and-constraints/procedural/scheduling/assets/results.png`        | Results              | ✅ SCANNED: Cropped panel - no header visible |

---

## 10. Sequencing (SeqDev) Documentation

| Status | File                                             | Description          | Notes                                                |
| ------ | ------------------------------------------------ | -------------------- | ---------------------------------------------------- |
| [~]    | `docs/sequencing/assets/editSeq.png`             | Edit sequence UI     | ⚠️ SCANNED: Shows "AERIE" header + browser tab + URL |
| [~]    | `docs/sequencing/assets/importSeqjson.png`       | Import seqJSON UI    | ⚠️ Shows AERIE header                                |
| [~]    | `docs/sequencing/assets/navigateSeq.png`         | Navigate sequence UI | ⚠️ SCANNED: Shows "AERIE" header + browser tab + URL |
| [~]    | `docs/sequencing/assets/parcelConfiguration.png` | Parcel config UI     | ⚠️ Shows AERIE header                                |
| [~]    | `docs/sequencing/assets/parcelMenuItem.png`      | Parcel menu item     | ⚠️ SCANNED: Shows "AERIE" in header dropdown         |
| [x]    | `docs/sequencing/assets/sequenceFormEditor.png`  | Form editor UI       | ✅ SCANNED: Cropped panel - no header visible        |
| [~]    | `docs/sequencing/assets/viewSeq.png`             | View sequence UI     | ⚠️ Likely has AERIE header                           |

---

## 11. Tutorials

### 11.1 Mission Modeling Tutorial

| Status | File                                                           | Description       | Notes               |
| ------ | -------------------------------------------------------------- | ----------------- | ------------------- |
| [~]    | `docs/tutorials/mission-modeling/assets/Simulation_Config.png` | Simulation config | ⚠️ Has AERIE header |
| [~]    | `docs/tutorials/mission-modeling/assets/Tutorial_Plan_1.png`   | Tutorial plan 1   | ⚠️ Has AERIE header |
| [~]    | `docs/tutorials/mission-modeling/assets/Tutorial_Plan_2.png`   | Tutorial plan 2   | ⚠️ Has AERIE header |
| [~]    | `docs/tutorials/mission-modeling/assets/Tutorial_Plan_3.png`   | Tutorial plan 3   | ⚠️ Has AERIE header |

### 11.2 External Events Tutorial (28 files)

| Status | File                                                                                                | Description             | Notes                                         |
| ------ | --------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------- |
| [x]    | `docs/tutorials/external-events/assets/external_events_overlapping_sources.png`                     | Overlapping sources     | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_adding_row_step1.png`               | Adding row step 1       | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_adding_row_step2.png`               | Adding row step 2       | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_adding_row_step3.png`               | Adding row step 3       | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_disableddgview.png`                 | Disabled DG view        | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/tutorials/external-events/assets/external_events_tutorial_disableddgviewreal.png`             | Disabled DG view real   | ⚠️ Has AERIE header                           |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_enableddg_view.png`                 | Enabled DG view         | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/tutorials/external-events/assets/external_events_tutorial_enableddgviewreal.png`              | Enabled DG view real    | ⚠️ Has AERIE header                           |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_external_sources_empty.png`         | Sources empty           | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_filter_shown.png`                   | Filter shown            | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_manage_derivation_groups_modal.png` | Manage derivation modal | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_new_association.png`                | New association         | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_opening_edit_row.png`               | Opening edit row        | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_opening_row_settings.png`           | Opening row settings    | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/tutorials/external-events/assets/external_events_tutorial_plan_page.png`                      | Plan page               | ⚠️ Has AERIE header                           |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_plan_parameters.png`                | Plan parameters         | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/tutorials/external-events/assets/external_events_tutorial_plan_specific_intro_page.png`       | Plan intro page         | ⚠️ Has AERIE header                           |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_timeline_editor.png`                | Timeline editor         | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_timeline_step1.png`                 | Timeline step 1         | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_timeline_step2.png`                 | Timeline step 2         | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/tutorials/external-events/assets/external_events_tutorial_upload_step1.png`                   | Upload step 1           | ⚠️ Has AERIE header                           |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_upload_step2.png`                   | Upload step 2           | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/tutorials/external-events/assets/external_events_tutorial_upload_step3.png`                   | Upload step 3           | ⚠️ Has AERIE header                           |
| [~]    | `docs/tutorials/external-events/assets/external_events_tutorial_upload_step4.png`                   | Upload step 4           | ⚠️ Has AERIE header                           |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_upload_step5_table.png`             | Upload step 5 table     | ✅ SCANNED: Cropped panel - no header visible |
| [x]    | `docs/tutorials/external-events/assets/external_events_tutorial_upload_step5_timeline.png`          | Upload step 5 timeline  | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/tutorials/external-events/assets/external_source_manager.png`                                 | Source manager          | ⚠️ Has AERIE header                           |
| [x]    | `docs/tutorials/external-events/assets/external_type_manager_file_parsed.png`                       | Type manager parsed     | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/tutorials/external-events/assets/external_type_manager_successful_upload.png`                 | Successful upload       | ⚠️ Has AERIE header                           |
| [~]    | `docs/tutorials/external-events/assets/external_type_manager.png`                                   | Type manager            | ⚠️ Has AERIE header                           |
| [~]    | `docs/tutorials/external-events/assets/scheduling_goal_modal.png`                                   | Scheduling goal modal   | ⚠️ Has AERIE header                           |
| [x]    | `docs/tutorials/external-events/assets/scheduling_goal_result.png`                                  | Scheduling goal result  | ✅ SCANNED: Cropped panel - no header visible |
| [~]    | `docs/tutorials/external-events/assets/scheduling_goal_upload.png`                                  | Scheduling goal upload  | ⚠️ Has AERIE header                           |

---

## Summary Statistics

| Category              | Total | Critical [!] | Low Priority [~] | OK [x] |
| --------------------- | ----- | ------------ | ---------------- | ------ |
| Static Branding       | 6     | 5            | 0                | 1      |
| Homepage & Marketing  | 39    | 9            | 0                | 30     |
| Overview Docs         | 8     | 2            | 0                | 6      |
| API Docs              | 5     | 1            | 0                | 4      |
| Command Expansion     | 26    | 0            | 26               | 0      |
| Deployment            | 2     | 1            | 1                | 0      |
| Mission Modeling      | 1     | 0            | 1                | 0      |
| Planning              | 81    | 3            | 24               | 54     |
| Scheduling            | 23    | 0            | 3                | 20     |
| Sequencing            | 7     | 0            | 6                | 1      |
| Tutorials             | 37    | 0            | 16               | 21     |
| **TOTAL**             | **235** | **21**     | **77**           | **137** |

**Legend:**
- **Critical [!]** = Needs recreation/significant work (Aerie in content, not just header)
- **Low Priority [~]** = Header-only branding (will auto-fix when UI is rebranded)
- **OK [x]** = No changes needed

---

## Key Findings

### Good News

**137 images (58%) are OK and need no changes.** Most UI screenshots are cropped panels that don't show the header.

**77 images (33%) are low-priority** - they only show "AERIE" in the header (nav bar, browser tab, URL). These will automatically be correct once the UI is rebranded - no manual recreation needed.

### Work Required

**Only 21 images (9%) need actual recreation:**

| Priority | Item | Reason |
|----------|------|--------|
| 🔴 Critical | `plandev-capabilities.png` | Contains "Aerie Capabilities" title + "Aerie Web UI" throughout |
| 🔴 Critical | `starting-with-plandev.png` | Contains "Aerie" 10+ times throughout diagram |
| 🔴 Critical | Logo SVGs (4 files) | Core branding - need design work |
| 🔴 Critical | `plandev-ui-light.png` | Homepage hero screenshot |
| 🟠 High | `plandev-getstarted-customize-*.png` (2) | Contains "Aerie UI" service bubble |
| 🟠 High | `plandev-feature-rule-checking-*.png` (2) | Has "Ae" logo icon |
| 🟠 High | `plandev-learn-googlegroup-*.png` (2) | Contains "Aerie" in card |
| 🟠 High | `plandev-learn-extensions-*.png` (2) | Contains "Aerie" logo |
| 🟠 High | `ui-login-page.png` | Shows "Log in to Aerie" |
| 🟠 High | `api-playground-admin-secret.mov` | Uses "aerie" as admin secret |
| 🟠 High | Planning videos (3) | Shows AERIE header prominently |
| 🟠 High | Promotional video | Contains Aerie throughout |

### Strategy

1. **Now** - Recreate the 21 critical/high priority items that have Aerie in content
2. **Later** - After UI rebrand, bulk-retake the 77 low-priority screenshots (or leave as-is for historical context)
3. **No action** - 137 images are already fine
