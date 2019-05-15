---
type: post
path: "/kubernetes-an-humble-introduction"
date: "2019-05-12"
title: "Kubernetes, an humble introduction"
author: "romain-dary"
source: "https://github.com/iam-merlin/website/blob/master/content/posts/2-kubernetes-an-humble-introduction.md"
tags:
    - digital transformation
    - development
    - kubernetes
    - architecture

excerpt: "In a few years, Kubernetes became The reference orchestrator. It first supplanted Docker Swarm and remains a leader against all its competitors. Behind the hype, we have to understand what Kubernetes enables our organizations to do and why its adoption is crucial."

---


_In a few years, Kubernetes became The reference orchestrator. It first supplanted Docker Swarm and remains a leader against all its competitors. Behind the hype, we have to understand what Kubernetes enables our organizations to do and why its adoption is crucial._


## tl;dr

I chose to start with a high level post, I let you pick which parts you are more interested in :

- [At the beginning, it was all about containers](#at-the-beginning-it-was-all-about-containers)
- [Kubernetes definition](#kubernetes-definition)
- [Kubernetes as an Ops tool](#kubernetes-as-an-ops-tool)
- [Kubernetes as an enabler](#kubernetes-as-an-enabler)
- [Last words](#last-words)
- [What's next](#whats-next)


## At the beginning, it was all about containers
Docker started the revolution with its containerized approach. 

Before, applications were deployed on a dedicated and pre-configured host system. Now, the execution context of our application is defined in a descriptive file, running in a sandbox view of the operating system and packaged into an image that is ready to run. Containers answer perfectly the question: "How to package an application?".

This is indisputable and, now, Docker as is any container engine must be a part of a developer's backpack.

While the container approach answers the application packaging issue... The exploitation problem is still unanswered and that's why Kubernetes came into the limelight.

## Kubernetes definition

Kubernetes is an orchestrator and manages containers. It means that we can run our application on a cluster with a fully managed container engine.

In fact, this explanation is too limited, and we should prefer the root definition that can be found on the [Kubernetes repository](https://github.com/kubernetes/kubernetes):

> Kubernetes is an open source system for managing containerized applications across multiple hosts, providing basic mechanisms for deployment, maintenance, and scaling of applications.

## Kubernetes core concepts

Because Kubernetes is made for "deployment, maintenance, and scaling", it answers nicely to these points. That's why Kubernetes is:

- **Lean:** lightweight, simple, accessible
- **Portable:** public, private, hybrid, multi-cloud
- **Extensible:** modular, pluggable, hookable, modular
- **Self-healing:** self-placement, auto-restart, auto-replication

As it embraces the digital world, Kubernetes is fully (and should uniquely) be supported through an API. `kubectl` and `yaml manifests` are just a sugar coating for making HTTP requests.

Kubernetes is not just an orchestrator, it's much more.

## Kubernetes as an Ops tool

At a naive stage, the Kubernetes API and its core are unseen. We just use `kubectl` and some tools like `k9s` or `helm`.

If we dig a little deeper, we can see that the Kubernetes world is working mainly and intensively on what is enabled by Kubernetes. At the opposite of what we can think, Kubernetes is not going to be bigger and will not include "nice to have" features. In fact, the project is always cleaning the system, putting non-core features outside of its system.

the Kubernetes world is moving fast by providing new tools and services using the Kubernetes core. Their goal is to embrace the key principle of DevOps : "automate everything".

## Kubernetes as an enabler

The Kubernetes core is a full stateless application centered on resources manipulation with scalability and lifecycle in mind :

- **The Configuration and Resources** are stored into a high availability key-value store
- **The API server** provides all the operations available on the cluster
- **The Controller Manager** is responsible for most of the collectors that regulates the state of a cluster and performs a task
- **The Scheduler** manages the workload

The API Server is the only component that is normally accessible. This is one of the best API I have ever seen. The API fully capitalizes on the Kubernetes core to expose all operations and resources available on the cluster. 

To do that and because the API is resource oriented, it will expose four methods:

- Read
- Create
- Update
- Delete

Kubernetes is also "reactive", that's why we can "Watch" resources states and so work on streams.

Kubernetes is by definition expandable and <?>everything is done to a thin integration <:?>:

- by creating new kind of resources (CRD : Custom Resource Definition) 
- by using lifecycle hooks (initializer, finalizers, etc.)

From my point of view, Kubernetes is far more than a just a tool or an orchestrator... It's a **DevOps framework.**

## Last words

To finish this humble introduction, if Kubernetes is a **DevOps Framework**, we have to explain :
- "Why we need a DevOps framework?" 
- ... and "How to use Kubernetes to fulfil our goals?".

If you are hasty, you should have a look to these links :
- [Extending your Kubernetes Cluster](https://kubernetes.io/docs/concepts/extend-kubernetes/extend-cluster)
- [Kubernetes controller and operators SDK](https://github.com/operator-framework/operator-sdk)

## What's next

The next article will take a look at core concepts of the Kubernetes ecosystem to show how the features we reviewed above were used to provide one of the main usages of Kubernetes.

After, we will try to answer the question: "How Kubernetes can help us succeed into the digital transformation and how we can use it to embrace the XaaS concept?".

Finally, a maturity model related to the Kubernetes adoption into the enterprise should emerged and we will define it.**(pas compris cette phrase, déso)**
