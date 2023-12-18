import React, { useState } from "react";
// import "./Certificates.css"; // Zaimportuj plik CSS

export const Test = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleButtonClick = (certificate) => {
    // Tutaj można dodać logikę ładowania danych dla wybranego certyfikatu
    setSelectedCertificate(certificate);
  };

  return (
    <div className="certificates-container">
      <div className="buttons-container">
        <button onClick={() => handleButtonClick("ATEX")}>ATEX</button>
        <button onClick={() => handleButtonClick("IECEx")}>IECEx</button>
        <button
          onClick={() => handleButtonClick("EU Declarations of Conformity")}
        >
          EU Declarations of Conformity
        </button>
        <button onClick={() => handleButtonClick("Zone 1 Certificates")}>
          Zone 1 Certificates
        </button>
        <button onClick={() => handleButtonClick("Zone 2 Certificates")}>
          Zone 2 Certificates
        </button>
      </div>

      <div className="certificate-details">
        {selectedCertificate && (
          <div>
            <h3>{selectedCertificate}</h3>
            <p>Details about {selectedCertificate}...</p>
            {/* Tutaj mogą pojawić się linki do pobrania i inne szczegóły */}
          </div>
        )}
      </div>
    </div>
  );
};
