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

excerpt: "Kubernetes became in a few years the reference orchestrator. After having supplanted Swarm, the solution remains the leader against its competitors. Behind the hype, we have to understand what Kubernetes enable to our organisation and why its adoption is crucial."

---


_Kubernetes became in a few years the reference orchestrator.
After having supplanted Docker Swarm, the solution remains the leader against its competitors.
Behind the hype, we have to understand what Kubernetes enable to our
organization and why its adoption is crucial._

## tl;dr

This post is really common at the beginning, I let you below pick the part that fit you interest :

- [At the beginning, it was all about containers](#at-the-beginning-it-was-all-about-containers)
- [Kubernetes definition](#kubernetes-definition)
- [Kubernetes as an Ops tool](#kubernetes-as-an-ops-tool)
- [Kubernetes as an enabler](#kubernetes-as-an-enabler)
- [Last words](#last-words)
- [What's next](#whats-next)


## At the beginning, it was all about containers
The initial revolution has been made by Docker and its containerized approach. 

At the beginning, applications were deployed on a dedicated/pre-configured host system. Now, the execution context of our application is defined in a descriptive file, running in a sandbox view of the operating system and packaged into an image ready that is ready to run. Container answer perfectly to the question "How to package an application?".

This is indisputable and, now, Docker or any container engine must be a part of the developer backpack.

While the container approach answer to the application packaging... the exploitation is still unanswered and that's why Kubernetes come into the spotlights.

## Kubernetes definition

Kubernetes is an orchestrator and so on manage containers. It means that we can run our application on a cluster with a fully managed container engine.

In fact, this explanation is really limited, and we should prefer the root definition that can be found on the [Kubernetes repository](https://github.com/kubernetes/kubernetes):

> Kubernetes is an open source system for managing containerized applications across multiple hosts, providing basic mechanisms for deployment, maintenance, and scaling of applications.

## Kubernetes core concepts

Because Kubernetes is made for "deployment, maintenance, and scaling", it answers nicely to these points. That's why Kubernetes is:

- **Lean:** lightweight, simple, accessible
- **Portable:** public, private, hybrid, multi cloud
- **Extensible:** modular, pluggable, hookable, modular
- **Self-healing:** self-placement, auto-restart, auto-replication

And because it embraces the digital world, Kubernetes is fully (and should uniquely) supported through an API (`kubectl` and `yaml manifests` are just a sugar form for making HTTP requests).

Kubernetes is not just an orchestrator, it's far more.

## Kubernetes as an Ops tool

At a naive stage, the Kubernetes API and its core are unseen. We just use `kubectl` and some tools like `k9s` or `helm`.

If we dig a little deeper, we can see that the Kubernetes world is working mainly and intensively on what is enabled by Kubernetes. At the opposite of what we can think, Kubernetes is not going to be bigger and will not include nice to have features. In fact, the project is always cleaning the system, putting non-core features outside of its system.

In fact, the Kubernetes world is moving fast by providing new tools and services that use the Kubernetes core. The goal is to embrace the key principle of DevOps : "automate everything".

## Kubernetes as an enabler

The Kubernetes core is a full stateless application centered on resources manipulation with scalability and lifecycle in mind :

- **The Configuration and Resources** are stored into a high availability key-value store
- **The API server** provides all the operation available on the cluster
- **The Controller Manager** is responsible for most of the collectors that regulates the state of cluster and performs a task
- **The Scheduler** manages the workload

The API Server is the only component that is normally accessible. This is one of the best API I have ever seen. The API fully capitalized on the Kubernetes core to expose all operations and mainly resources available on the cluster. 

To do that and because the API is resource oriented, it will expose four methods:

- Read
- Create
- Update
- Delete

Kubernetes is also "reactive", that's why we can "Watch" resources states and so work on streams.

So, Kubernetes is by definition expandable and everything is done to a thin integration :

- by creating new kind of resource (CRD : Custom Resource Definition) 
- by using lifecycle hooks (initializer, finalizers, etc.).

Kubernetes is from far more than a tool, neither just an orchestrator... from my point of view, it's a **DevOps framework.**

## Last words

To finish this humble introduction, if Kubernetes is a **DevOps Framework**, we have to explain :
- "Why we need a DevOps framework?" 
- ... and "How to use Kubernetes to fulfil our goals?".

If you are hasty, you should have a look to these links :
- [Extending your Kubernetes Cluster](https://kubernetes.io/docs/concepts/extend-kubernetes/extend-cluster)
- [Kubernetes controller and operators SDK](https://github.com/operator-framework/operator-sdk)

## What's next

The next article will take a core concept of the Kubernetes eco-system to show how what we have seen below has been at the early stage used to provide one of the main usages of Kubernetes.

And just after, we will try to answer to the question: "How Kubernetes can help us to succeed into the digital transformation and how we can use it to embrace the XaaS concept?".

After that, a maturity model related to the Kubernetes adoption into the enterprise should emerged and we will define it.
