import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "quick-start",
    title: "Quick Start",
  },
  {
    id: "deployments",
    title: "Deployments",
  },
  {
    id: "dashboard",
    title: "Dashboard",
  },
  {
    id: "api",
    title: "API",
  },
  {
    id: "faq",
    title: "FAQ",
  },
];

export default function Docs() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Documentation
            </p>

            <h1 className="max-w-4xl text-6xl font-medium tracking-tight lg:text-7xl">
              Everything you need to deploy AI.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
              Learn how to create deployments, manage projects, monitor models
              and integrate NeuralShip into your AI workflow.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[240px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="mb-6 text-sm font-medium text-zinc-400">
                  ON THIS PAGE
                </h3>

                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() =>
                        document.getElementById(section.id)?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                        activeSection === section.id
                          ? "bg-zinc-900 text-white"
                          : "text-zinc-500 hover:bg-zinc-950 hover:text-white"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-24">
              <section id="introduction">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Introduction
                </p>

                <h2 className="text-4xl font-medium tracking-tight">
                  Build and deploy AI applications with confidence.
                </h2>

                <p className="mt-6 max-w-3xl leading-8 text-zinc-500">
                  NeuralShip is a modern AI deployment platform designed for
                  students, researchers and developers. It provides a clean
                  interface for deploying machine learning models, monitoring
                  deployments and organizing projects without dealing with cloud
                  infrastructure.
                </p>
              </section>

              <section id="quick-start">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Quick Start
                </p>

                <h2 className="text-4xl font-medium">
                  Create your first deployment
                </h2>

                <p className="mt-6 text-zinc-500">
                  Follow these simple steps to deploy your first AI model.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-6">
                    <span className="text-4xl font-medium">01</span>

                    <h3 className="mt-8 font-medium">Create Project</h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      Create a new deployment project from the dashboard.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-6">
                    <span className="text-4xl font-medium">02</span>

                    <h3 className="mt-8 font-medium">Configure Model</h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      Select your AI model, version and environment.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-6">
                    <span className="text-4xl font-medium">03</span>

                    <h3 className="mt-8 font-medium">Deploy</h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      Launch your deployment and monitor it instantly.
                    </p>
                  </div>
                </div>
              </section>

              <section id="installation">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Installation
                </p>

                <h2 className="text-4xl font-medium">Install the CLI</h2>

                <p className="mt-5 text-zinc-500">
                  Install the NeuralShip CLI using npm.
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-900 bg-[#050505]">
                  <div className="flex items-center gap-2 border-b border-zinc-900 px-6 py-4">
                    <div className="h-3 w-3 rounded-full bg-zinc-700" />
                    <div className="h-3 w-3 rounded-full bg-zinc-700" />
                    <div className="h-3 w-3 rounded-full bg-zinc-700" />

                    <span className="ml-4 text-sm text-zinc-500">Terminal</span>
                  </div>

                  <pre className="overflow-x-auto p-6 text-sm text-zinc-300">
                    {`npm install -g neuralship-cli

neuralship login

neuralship deploy
`}
                  </pre>
                </div>
              </section>

              <section id="deployments">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Deployments
                </p>

                <h2 className="text-4xl font-medium">Your first deployment</h2>

                <p className="mt-6 max-w-3xl leading-8 text-zinc-500">
                  After installation, open the dashboard, create a deployment,
                  choose a model and click Deploy. NeuralShip automatically
                  creates a deployment entry and starts monitoring it.
                </p>

                <div className="mt-10 rounded-3xl border border-zinc-900 bg-[#050505] p-8">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between rounded-xl border border-zinc-900 bg-black p-5">
                      <div>
                        <p className="font-medium">Customer Support Agent</p>

                        <p className="mt-1 text-sm text-zinc-500">GPT-4o</p>
                      </div>

                      <span className="rounded-full bg-white px-3 py-1 text-xs text-black">
                        Running
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-zinc-900 bg-black p-5">
                      <div>
                        <p className="font-medium">Medical Diagnosis</p>

                        <p className="mt-1 text-sm text-zinc-500">Claude 4</p>
                      </div>

                      <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                        Building
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="dashboard">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Dashboard
                </p>

                <h2 className="text-4xl font-medium">Dashboard Overview</h2>

                <p className="mt-6 max-w-3xl leading-8 text-zinc-500">
                  The NeuralShip dashboard acts as the central workspace for
                  managing AI deployments. From a single interface you can
                  create new deployments, inspect running services, monitor
                  deployment health and review platform activity without
                  switching between multiple tools.
                </p>

                <p className="mt-6 max-w-3xl leading-8 text-zinc-500">
                  The overview page displays live platform metrics such as
                  deployment count, request volume, average latency and overall
                  success rate. Below the metrics, you can create new
                  deployments, inspect recently deployed models and monitor
                  platform activity in real time.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
                    <h3 className="font-medium">Deployment Management</h3>

                    <p className="mt-4 leading-7 text-zinc-500">
                      Create deployments, select environments, configure
                      versions and monitor deployment progress from one unified
                      dashboard.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
                    <h3 className="font-medium">Platform Monitoring</h3>

                    <p className="mt-4 leading-7 text-zinc-500">
                      View deployment status, activity feeds, request metrics,
                      health checks and infrastructure statistics in one place.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
                    <h3 className="font-medium">Analytics</h3>

                    <p className="mt-4 leading-7 text-zinc-500">
                      Monitor request throughput, average latency, uptime and
                      deployment success rates across all active AI services.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
                    <h3 className="font-medium">Activity Timeline</h3>

                    <p className="mt-4 leading-7 text-zinc-500">
                      Track deployment history, version updates, build events
                      and recent platform activity through a chronological event
                      feed.
                    </p>
                  </div>
                </div>
              </section>

              <section id="api">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  API
                </p>

                <h2 className="text-4xl font-medium">API Reference</h2>

                <p className="mt-6 max-w-3xl leading-8 text-zinc-500">
                  Every deployment receives a unique endpoint. Use the REST API
                  to query deployment status, trigger inference and retrieve
                  metrics.
                </p>

                <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-900 bg-[#050505]">
                  <div className="border-b border-zinc-900 px-6 py-4">
                    <p className="text-sm text-zinc-500">POST /v1/inference</p>
                  </div>

                  <pre className="overflow-x-auto p-6 text-sm text-zinc-300">
                    {`curl -X POST https:
              -H "Authorization: Bearer YOUR_API_KEY" \\
              -H "Content-Type: application/json" \\
              -d '{
                "model":"customer-support",
                "prompt":"Hello"
              }'`}
                  </pre>
                </div>
              </section>

              <section>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Best Practices
                </p>

                <h2 className="text-4xl font-medium">Recommendations</h2>

                <div className="mt-10 space-y-5">
                  {[
                    "Use semantic versioning for every deployment.",
                    "Separate Production and Preview environments.",
                    "Monitor latency after every deployment.",
                    "Rollback failed deployments immediately.",
                    "Keep deployment names descriptive.",
                  ].map((tip) => (
                    <div
                      key={tip}
                      className="rounded-2xl border border-zinc-900 bg-[#050505] p-6"
                    >
                      {tip}
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  FAQ
                </p>

                <h2 className="text-4xl font-medium">
                  Frequently Asked Questions
                </h2>

                <div className="mt-10 space-y-6">
                  {[
                    [
                      "What is NeuralShip?",
                      "A modern AI deployment platform for managing machine learning deployments.",
                    ],

                    [
                      "Does this actually deploy AI models?",
                      "This project demonstrates deployment workflows for educational purposes.",
                    ],

                    [
                      "Can I monitor deployments?",
                      "Yes. The dashboard provides deployment status, metrics and activity.",
                    ],

                    [
                      "Can I create multiple deployments?",
                      "Yes. Every project can contain multiple deployment versions.",
                    ],
                  ].map(([question, answer]) => (
                    <div
                      key={question}
                      className="rounded-3xl border border-zinc-900 bg-[#050505] p-8"
                    >
                      <h3 className="font-medium">{question}</h3>

                      <p className="mt-4 leading-7 text-zinc-500">{answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
