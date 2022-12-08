import React from "react";
import Career from "./Intern/Career";
import { internHistory } from "./Intern/intern-history";

const InternSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h1 className="mb-8 text-4xl font-bold text-center">Intern</h1>
      <ol className="space-y-4">
        {internHistory.map((history) => (
          <Career {...history} key={history.companyName} />
        ))}
      </ol>
    </section>
  );
};

export default InternSection;
