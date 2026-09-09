# Sequence Templates

<details> 
 <summary>Sequence Templates vs Typescript Rules (For versions prior to v4.4.0)</summary>
If you are coming from an older version of PlanDev that supported [Typescript Expansion Rules](./deprecated/introduction),
here are the key ways in which Template Expansion compares to the old system:

* Like Typescript rules, sequence templates must be associated with a [**mission model**](/mission-modeling/introduction) and **a command dictionary/dictionaries** (via a [**parcel**](/sequencing/editor/#parcel)), since they directly refer to activity types defined in the model, and commands in the dictionaries.
* Like Typescript rules, you should only define **one template per activity type** in your model.
* Sequence templates **do not use [expansion sets](../deprecated/expansion-sets)** - instead they are *directly* associated with a mission model and a parcel, and their scope is mission-model-wide instead of expansion-set wide.
* As a result, instead of explicitly assigning an expansion set to a plan, sequence templates are **implicitly assigned to a plan** (and its simulation outputs) based on the **mission model**. Any plan using a given model will have the same sequence templates associated with it.

All other concepts related to sequences and sequence filter creation are the same in both systems.
</details>

Sequence templates are a straightforward and intuitive tool for expanding activities into a set of commands using templates. 
They make use of the [Handlebars](https://handlebarsjs.com/) templating language.

For example, sequence template expansion allows users to specify the `ThrowBanana` expansion using the following _template_:

```
C BOOT_COPY_NOR_IMAGE "ZONE_0" "ZONE_1"
A2024-123T00:00:00 AVS_PCE_MEMORY_POKE {{ attributes.arguments.quantity }} "string"
C EP_XFC_LV_CLOSE "XFC_A"
C DP_PRIORITIZE "STRING" {{ attributes.arguments.quantity }}
```

This will produce the following sequence (assuming `quantity` is equal to `5`):

```
C BOOT_COPY_NOR_IMAGE "ZONE_0" "ZONE_1"
A2024-123T00:00:00 AVS_PCE_MEMORY_POKE 5 "string"
C EP_XFC_LV_CLOSE "XFC_A"
C DP_PRIORITIZE "STRING" 5
```

You can get started by creating a [parcel](/sequencing/editor/#parcel).


