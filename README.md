# How to make a reasonable person

This repository contains the experiments, data, and analyses for the paper "How to make a reasonable person" by Sarah A. Wu, Siying Zhang, and Tobias Gerstenberg.

__Contents:__
- [Introduction](#introduction)
- [Experiments](#experiments)
- [Repository structure](#repository-structure)
- [CRediT author statement](#credit-author-statement)

## Introduction

Many legal decisions rely on evaluating how a "reasonable person" would have acted, but what constitutes such a person? We offer an experimental jurisprudence perspective by exploring what subjective features come to mind when reasoning about a reasonable person. In Experiment 1, we examined how people conceptually organize various demographic, dispositional, and action features along dimensions of relevance, controllability, and normality. In Experiment 2, we used these dimensions to predict what features shape judgments about reasonableness and outcomes. We found that participants tended to change relevant, abnormal actions in order to undo outcomes; that between the defendant and a reasonable person, participants tended to carry over normal attributes while changing abnormal, controllable ones; and that the subjective standards participants most endorsed included features that were relevant and normal, but relatively uncontrollable. Together, these findings map a "template" of a reasonable person and provide a descriptive foundation to inform legal theory.

## Experiments

![Overview of paradigm](figures/overview.jpg)

Preregistrations for all experiments are available on the Open Science Framework (OSF):

- [Experiment 1](https://osf.io/6nyhr) (relevance, controllability, and normality conditions)
- [Experiment 2](https://osf.io/38nt2) (undo, same, and different conditions)
- [Experiment 2](https://osf.io/3f9v4) (endorse condition)

A list of all vignettes and features can be found [here](https://github.com/cicl-stanford/reasonable_person_cogsci/blob/main/data/stories.md).

To try out any of the experiments, use the links below:
- Experiment 1 - [Relevance](https://cicl-stanford.github.io/reasonable_person_cogsci/experiment1/relevance),
  [Controllability](https://cicl-stanford.github.io/reasonable_person_cogsci/experiment1/controllability),
  [Normality](https://cicl-stanford.github.io/reasonable_person_cogsci/experiment1/normality)
- Experiment 2 - [Undo](https://cicl-stanford.github.io/reasonable_person_cogsci/experiment2/undo),
  [Same](https://cicl-stanford.github.io/reasonable_person_cogsci/experiment2/same),
  [Different](https://cicl-stanford.github.io/reasonable_person_cogsci/experiment2/different),
  [Endorse](https://cicl-stanford.github.io/reasonable_person_cogsci/experiment2/endorse)


## Repository structure

```
├── analysis
├── data
│   ├── experiment1
│   │   ├─── relevance
│   │   ├─── controllability
│   │   └─── normality
│   └── experiment2
│   │   ├─── undo
│   │   ├─── same
│   │   ├─── different
│   │   └─── endorse
├── docs
│   ├── experiment1
│   │   └─── ...
│   └── experiment2
│   │   └─── ...
└── figures
```

- `analysis`: contains all the code for analyzing data and generating figures
      (see a rendered file [here](https://cicl-stanford.github.io/reasonable_person_cogsci/)).
- `data`: contains anonymized data from both experiments.
  For each experiment condition, `participants.csv` contains demographic information and post-experiment feedback and comments, and `trials.csv` contains the response data.
- `docs`: contains the experiment code.

## CRediT author statement

| Term                       | Sarah A. Wu | Siying Zhang | Tobias Gerstenberg |
|----------------------------|-------------|--------------|--------------------|
| Conceptualization          | x           |              | x                  |
| Methodology                | x           |              | x                  |
| Software                   | x           | x            |                    |
| Validation                 | x           |              | x                  |
| Formal analysis            | x           | x            |                    |
| Investigation              | x           | x            |                    |
| Resources                  |             |              |                    |
| Data Curation              | x           | x            |                    |
| Writing - Original Draft   | x           |              |                    |
| Writing - Review & Editing | x           |              | x                  |
| Visualization              | x           |              | x                  |
| Supervision                |             |              | x                  |
| Project administration     | x           |              | x                  |
| Funding acquisition        |             |              | x                  |

