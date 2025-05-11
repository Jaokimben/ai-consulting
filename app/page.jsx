import React from "react";
import { Navbar1 } from "../components/Navbar1";
import { Footer3 } from "../components/Footer3";
import { Button } from "@relume_io/relume-ui";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section Personnalisée */}
      <section className="relative px-[2vw] pt-8 pb-20 md:py-24 bg-[#18101d] rounded-3xl m-4 shadow-lg overflow-hidden">
        {/* Barre de navigation personnalisée */}
        <nav className="flex items-center justify-between mb-16">
          {/* Logo image */}
          <img src="/cropped-FactoRise-1.png" alt="FactoRise.io logo" className="h-14 w-auto ml-2" />
          {/* Menu */}
          <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
            <li><a href="#">AI Solutions</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Case Studies</a></li>
            <li className="relative group">
              <a href="#" className="flex items-center">Resources <span className="ml-1">▼</span></a>
              {/* Dropdown possible ici */}
            </li>
          </ul>
          {/* Boutons */}
          <div className="flex gap-3">
            <Button variant="secondary" size="md" className="rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#18101d] px-6">Learn</Button>
            <Button size="md" className="rounded-full bg-white text-[#18101d] px-6">Sign Up</Button>
          </div>
        </nav>
        {/* Contenu principal hero */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Texte à gauche */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Empowering Your Business with<br />Smart AI Solutions
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8">
              At our core, we are dedicated to helping businesses select the most effective AI tools to enhance every aspect of their operations. Our mission is to optimize customer, employee, and business outcomes.
            </p>
            {/* Vous pouvez ajouter un bouton ici si besoin */}
          </div>
          {/* Image illustrative à droite */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&w=600&q=80"
              alt="Team working on AI solutions"
              className="rounded-2xl shadow-xl object-cover w-[350px] h-[300px] md:w-[420px] md:h-[340px] lg:w-[500px] lg:h-[400px]"
            />
          </div>
        </div>
      </section>
      {/* Le reste de la page (services, études de cas, etc.) */}
      <main className="flex-1">
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