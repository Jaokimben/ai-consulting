import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { Footer3 } from "./components/Footer3";
import { Button } from "@relume_io/relume-ui";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar1 />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-[5%] py-20 md:py-32 lg:py-40 bg-background-primary">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
                AI Consulting for the Modern Business
              </h1>
              <p className="mb-8 text-lg md:text-xl">
                Transform your business with cutting-edge AI solutions tailored to your needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg">Get Started</Button>
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-[5%] py-20 md:py-32 bg-background-secondary">
          <div className="container mx-auto max-w-7xl">
            <h2 className="mb-12 text-3xl font-bold md:text-4xl lg:text-5xl">
              Our AI Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "AI Strategy",
                  description: "Develop a comprehensive AI roadmap aligned with your business goals."
                },
                {
                  title: "Machine Learning",
                  description: "Implement predictive models to drive data-driven decisions."
                },
                {
                  title: "Computer Vision",
                  description: "Leverage image recognition for automation and insights."
                },
                {
                  title: "NLP Solutions",
                  description: "Process and analyze text data at scale."
                },
                {
                  title: "AI Integration",
                  description: "Seamlessly incorporate AI into your existing systems."
                },
                {
                  title: "Training & Support",
                  description: "Empower your team with AI knowledge and skills."
                }
              ].map((service, index) => (
                <div key={index} className="p-6 border border-border-primary rounded-lg">
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="text-md">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="px-[5%] py-20 md:py-32 bg-background-primary">
          <div className="container mx-auto max-w-7xl">
            <h2 className="mb-12 text-3xl font-bold md:text-4xl lg:text-5xl">
              Success Stories
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Retail Analytics",
                  description: "Increased sales by 35% through predictive inventory management."
                },
                {
                  title: "Healthcare AI",
                  description: "Reduced diagnosis time by 60% with computer vision."
                }
              ].map((caseStudy, index) => (
                <div key={index} className="p-8 bg-background-secondary rounded-lg">
                  <h3 className="mb-4 text-2xl font-bold">{caseStudy.title}</h3>
                  <p className="mb-6 text-md">{caseStudy.description}</p>
                  <Button variant="secondary">Read Case Study</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-[5%] py-20 md:py-32 bg-background-secondary">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-lg md:text-xl">
              Schedule a free consultation with our AI experts today.
            </p>
            <Button size="lg">Contact Us</Button>
          </div>
        </section>
      </main>
      <Footer3 />
    </div>
  );
} 