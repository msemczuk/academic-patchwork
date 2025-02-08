
import Navigation from "@/components/Navigation";
import PublicationCard from "@/components/PublicationCard";
import { Mail, Github, Linkedin } from "lucide-react";

const Index = () => {
  const publications = [
    {
      title: "Understanding Complex Networks through Deep Learning Approaches",
      authors: "Your Name, Collaborator One, Collaborator Two",
      journal: "Journal of Network Science",
      year: "2023",
      link: "#",
    },
    {
      title: "Novel Applications of Machine Learning in Academic Research",
      authors: "Your Name, Another Collaborator",
      journal: "Advanced Computing Systems",
      year: "2022",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-800 mb-6">
            Marcin Semczuk
          </h1>
          <p className="text-xl text-neutral-600 mb-8">
            Postdoctoral researcher in astrophysics
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Welcome to my website! I am an astrophysicist interested in galactic dynamics and numerical simulations.
            Currently I am a postdoc in the GaiaUB group at the Institut de Ciències del Cosmos - Universitat de Barcelona.
            Check my<a href="https://ui.adsabs.harvard.edu/search/q=docs(library%2FRO7hi4tGRIO3jE0VTM-gDA)&sort=date%20desc%2C%20bibcode%20desc&p_=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mx-1 text-primary hover:text-primary-dark underline decoration-2 decoration-primary/30 hover:decoration-primary transition-colors"
            >
              ADS library
            </a> for the list of the publications I co-authored.
          </p>
        </div>
      </section>

      {/* Research Interests */}
      <section id="research" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Machine Learning", "Complex Networks", "Data Science", "Artificial Intelligence"].map((interest) => (
              <div key={interest} className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-800">{interest}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <PublicationCard key={index} {...pub} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8">Contact</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:your.email@example.com"
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
