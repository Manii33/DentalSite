import React from "react";
import { Link } from "react-router-dom";
import fiftyfive from "../../Images/fiftyfive.jpg";
import fiftysix from "../../Images/fiftysix.jpg";
import fiftyseven from "../../Images/fiftyseven.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function AmalgamFilling() {
  return (
    <>
    <div
  className="hero-section"
  style={{
    backgroundImage: `url(${fiftyfive})`,
    backgroundSize: "cover",
    backgroundPosition: "center 50%",
    backgroundRepeat: "no-repeat",  
    width: "100%",
    height: "350px",
  }}
>
    {<Link to="/TeethGums/amalgamfilling"></Link>}
  <div className="hero-content">
    <h2>Treatments</h2>
    <h1>Amalgam Filling Replacement in Lahore</h1>
  </div>
</div>

<div
  style={{
    maxWidth: "1300px",
    margin: " 40px auto",
    padding: " 20px",
    lineHeight: "1.8",
    fontSize: "18px",
    color: "#333",
    textAlign: "justify",
  }}
>
  <p>
If you have concerns about the health impact of amalgam fillings, replacing them with <span style={{color:"blue"}}>teeth filling</span> might be the optimal choice. The trend of replacing amalgam fillings has grown in popularity, often accompanied by a holistic approach. If you have conducted thorough research, possess specific health concerns, a relevant medical history, or personal convictions, you have the option to replace amalgam fillings.
  </p>
</div>

<div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
        padding: "60px 40px",
        maxWidth: "1200px",
        margin: "auto",
        flexWrap: "wrap",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* LEFT CONTENT */}
      <div style={{ flex: 1, minWidth: "280px" }}>
        <h2
          style={{
            color: "#0a1f44",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Why Would You Replace Amalgam Filling?
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#444",
            marginBottom: "20px",
          }}
        >
          The decision to replace amalgam fillings with another dental material
          is a matter of personal choice. People have various reasons for opting
          to do so, often based on personal research, health concerns, prior
          medical conditions, and religious beliefs. Some of the main reasons for
          replacing amalgam fillings are:
        </p>

        <ul
          style={{
            paddingLeft: "20px",
            color: "#444",
            fontSize: "16px",
            lineHeight: "1.8",
            listStyleType: "disc",
          }}
        >
          <li>
            Amalgam contains mercury, which for certain people may be a health
            danger.
          </li>
          <li>
            Composite fillings are more aesthetic and look like natural teeth.
          </li>
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div style={{ flex: 1, minWidth: "280px", textAlign: "right" }}>
        <img
          src={fiftysix}
          alt="Dental Treatment"
          style={{
            width: "100%",
            maxWidth: "620px",
            borderRadius: "18px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

     <div
      style={{
        backgroundColor: "#f5f9fc",
        padding: "70px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <img
            src={fiftyseven}
            alt="Dental Process"
            style={{
              maxwidth: "620%",
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <h2
            style={{
              color: "#0a1f44",
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            The Process of Replacing Amalgam Filling:
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#333",
              marginBottom: "16px",
            }}
          >
            After deciding to remove an amalgam filling, book a consultation
            appointment with your dentist to discuss the best long-term
            restorative option.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#333",
              marginBottom: "16px",
            }}
          >
            During the amalgam removal process, your dentist will follow
            protocols to protect you from exposure to the old filling material.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#333",
            }}
          >
            Once the amalgam is removed, your dentist will rebuild the tooth
            using appropriate non-metallic material.
          </p>
        </div>
      </div>
    </div>

    <div style={{ padding: "70px 40px" }}>
  {/* HEADING */}
  <h2
    style={{
      textAlign: "center",
      color: "#0a1f44",
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "50px",
    }}
  >
    FAQs
  </h2>

  {/* FAQ CONTAINER */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT COLUMN */}
    <div style={{ flex: 1, minWidth: "300px" }}>
      {[
        "01. How much does it cost to replace amalgam fillings?",
        "02. Should all amalgam fillings be replaced?",
        "03. When can you eat after amalgam filling?",
        "04. How long does an amalgam filling last?",
        "05. Does it hurt to replace amalgam fillings?",
      ].map((text, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#69bebc",
            padding: "18px 22px",
            marginBottom: "14px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "22px", fontWeight: "700" }}>+</span>
          <span>{text}</span>
        </div>
      ))}
    </div>

    {/* RIGHT COLUMN */}
    <div style={{ flex: 1, minWidth: "300px" }}>
      {[
        "06. Can fillings be prevented?",
        "07. Which is better amalgam or composite filling?",
        "08. What happens if you swallow amalgam filling?",
        "09. Which amalgam is used for dental filling?",
      ].map((text, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#69bebc",
            padding: "18px 22px",
            marginBottom: "14px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "22px", fontWeight: "700" }}>+</span>
          <span>{text}</span>
        </div>
      ))}
    </div>
  </div>
</div>

{/* MAP SECTION */}
    <div style={{ width: "100%", height: "250px", overflow: "hidden" }}>
      <iframe
      title="clinic-map"
      src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13615.739324467939!2d74.268749!3d31.443461!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI2JzM2LjUiTiA3NMKwMTYnMDcuNSJF!5e0!3m2!1sen!2sus!4v1765540023100!5m2!1sen!2sus"
      width="100%"
      height="450"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    
    </div>
    
    {/* FOOTER SECTION */}
    <div
      style={{
        background: "#0c2340",
        color: "white",
        padding: "60px 40px",
        marginTop: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1400px",
          margin: "0 auto",
          gap: "40px",
        }}
      >
        {/* COLUMN 1 */}
        <div style={{ minWidth: "200px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>Useful Links</h3>
          <p style={{ margin: "6px 0" }}>About Us</p>
          <p style={{ margin: "6px 0" }}>Contact Us</p>
          <p style={{ margin: "6px 0" }}>Meet the Team</p>
          <p style={{ margin: "6px 0" }}>Before & After</p>
          <p style={{ margin: "6px 0" }}>Blogs</p>
        </div>
    
        {/* COLUMN 2 */}
        <div style={{ minWidth: "200px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>Treatments</h3>
          <p style={{ margin: "6px 0" }}>Exam & X-Rays Check-Up</p>
          <p style={{ margin: "6px 0" }}>Dental Emergency</p>
          <p style={{ margin: "6px 0" }}>Smile Makeover</p>
          <p style={{ margin: "6px 0" }}>Veneers</p>
          <p style={{ margin: "6px 0" }}>Dental Implants</p>
          <p style={{ margin: "6px 0" }}>Root Canal Treatment</p>
          <p style={{ margin: "6px 0" }}>Orthodontic Braces</p>
          <p style={{ margin: "6px 0" }}>Clear Aligners</p>
        </div>
    
        {/* COLUMN 3 */}
        <div style={{ minWidth: "200px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>
            Dental Problems
          </h3>
          <p style={{ margin: "6px 0" }}>Yellow Teeth</p>
          <p style={{ margin: "6px 0" }}>Teeth Cleaning</p>
          <p style={{ margin: "6px 0" }}>Missing Teeth</p>
          <p style={{ margin: "6px 0" }}>Broken Chipped Tooth</p>
          <p style={{ margin: "6px 0" }}>Gum Disease</p>
          <p style={{ margin: "6px 0" }}>Crooked Teeth</p>
          <p style={{ margin: "6px 0" }}>Sensitive & Sore Teeth</p>
          <p style={{ margin: "6px 0" }}>Dental Anxiety</p>
        </div>
    
        {/* COLUMN 4 */}
        <div style={{ minWidth: "200px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>Patient Safety</h3>
          <p style={{ margin: "6px 0" }}>7X SAFETY</p>
          <p style={{ margin: "6px 0" }}>4 Step Sterilization</p>
          <p style={{ margin: "6px 0" }}>Safety Equipment</p>
          <p style={{ margin: "6px 0" }}>Equipment & Technology</p>
          <p style={{ margin: "6px 0" }}>Quality</p>
        </div>
    
        {/* COLUMN 5 */}
        <div style={{ minWidth: "250px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>Get in touch</h3>
    
          <p style={{ margin: "8px 0", display: "flex", gap: "10px" }}>
            📧 info@smileon.pk
          </p>
    
          <p style={{ margin: "8px 0", display: "flex", gap: "10px" }}>
            📞 0331 1066666
          </p>
    
          <p
            style={{
              margin: "8px 0",
              display: "flex",
              gap: "10px",
              lineHeight: "1.4",
            }}
          >
            📍 335-B Iqbal Avenue, Khayaban-e-Jinnah Service Road, Near<br />
            Shokat Khanum Hospital Johar Town, Lahore
          </p>
    
          <p style={{ marginTop: "20px", fontWeight: "600" }}>⭐ Clinic Timing</p>
          <p style={{ margin: "6px 0" }}>11:00am to 9:00pm</p>
    
          {/* SOCIAL ICONS */}
           <div
          style={{
            textAlign: "left",
            background: "#0c2340",
            color: "white",
            padding: "50px 20px",
          }}
        >
          {/* Social Icons */}
          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            {/* Facebook */}
            <a href="#"
               style={{
                width: "40px",
                height: "40px",
                background: "#112d53",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              <FaFacebookF size={20} color="white" />
            </a>
    
            {/* Instagram */}
            <a href="#"
               style={{
                width: "40px",
                height: "40px",
                background: "#112d53",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              <FaInstagram size={20} color="white" />
            </a>
    
            {/* YouTube */}
            <a href="#"
               style={{
                width: "40px",
                height: "40px",
                background: "#112d53",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              <FaYoutube size={22} color="white" />
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>


</>
  )
}