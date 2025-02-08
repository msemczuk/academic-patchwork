
interface PublicationProps {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link?: string;
}

const PublicationCard = ({ title, authors, journal, year, link }: PublicationProps) => {
  return (
    <div className="p-6 bg-white rounded-lg border border-neutral-200 hover:border-primary/30 transition-colors duration-200 animate-fade-up">
      <h3 className="text-lg font-semibold text-neutral-800 mb-2">{title}</h3>
      <p className="text-neutral-600 mb-2">{authors}</p>
      <p className="text-neutral-500 text-sm">
        {journal} • {year}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-primary hover:text-primary-dark transition-colors duration-200"
        >
          Read Paper →
        </a>
      )}
    </div>
  );
};

export default PublicationCard;
