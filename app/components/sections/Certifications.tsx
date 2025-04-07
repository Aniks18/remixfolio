import React from "react";

type CertificationsProps = {
  data: any;
};

export default function Certifications({ data }: CertificationsProps) {
  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-background to-background/90 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(data) && data.map((cert) => (
            <div key={cert.id || Math.random()} className="bg-background/80 p-4 rounded-lg border border-primary/30">
              <h3 className="text-lg font-bold mb-2">{cert.name || "Certificate"}</h3>
              <p className="text-text-secondary mb-2">Issued by {cert.issuer || "Unknown"}</p>
              <p className="text-text-secondary text-sm">{cert.date || "2023"}</p>
            </div>
          ))}
          
          {/* Fallback if no data */}
          {(!Array.isArray(data) || data.length === 0) && (
            <div className="col-span-3 text-center py-10">
              <p>No certifications to display</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}