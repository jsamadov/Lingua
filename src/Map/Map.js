import React from "react";

function MapComponent() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24308.210650026278!2d49.800623349999995!3d40.3971895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087886fc97555%3A0x63d1056df10fb889!2sOlympic%20Star!5e0!3m2!1sen!2saz!4v1701991716218!5m2!1sen!2saz"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapComponent;
