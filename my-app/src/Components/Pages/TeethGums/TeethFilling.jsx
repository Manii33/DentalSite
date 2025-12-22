import React from "react";
import { Link } from "react-router-dom";
import fiftytwo from "../../Images/fiftytwo.jpg";
import fiftythree from "../../Images/fiftythree.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function TeethFilling() {
  return (
    <>
    <div
  className="hero-section"
  style={{
    backgroundImage: `url(${fiftytwo})`,
    backgroundSize: "cover",
    backgroundPosition: "center 70%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "350px",
  }}
>
    {<Link to="/TeethGums/teethfilling"></Link>}
  <div className="hero-content">
    <h2>Treatments</h2>
    <h1>Teeth Filling Treatment in Lahore</h1>
  </div>
</div>

<div
  style={{
    maxWidth: "1300px",
    margin: "40px auto",
    padding: " 20px",
    lineHeight: "1.8",
    fontSize: "18px",
    color: "#333",
    textAlign: "justify",
  }}
>
  <p>
    Bruxism, or teeth grinding, is the act of clenching, grinding, or gnashing your teeth. It can range from barely bothersome to highly uncomfortable. Timely treatment may be necessary to prevent permanent damage. Awake bruxism occurs when you unknowingly clench your teeth while awake, while sleep bruxism happens during sleep. Minor teeth grinding may not require treatment, but prolonged grinding can lead to significant tooth damage. Long-term bruxism can result in migraines, jaw problems, tooth wear and fractures.
  </p>
</div>


<div
      style={{
        width: "100%",
        backgroundColor: "#f3f8fc",
        padding: "80px 60px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: "#0b1c7d",
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Symptoms of a Teeth Filling:
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            It may not always be visible when a filling is lost or falls out,
            especially if it is a little filling. You might encounter the
            following symptoms if you’ve lost a filling:
          </p>

          <ul
            style={{
              paddingLeft: "20px",
              marginLeft: "20px",
              listStyleType: "disc", 
            }}
          >
            <li style={{ marginBottom: "10px", color: "#000" }}>
              Pain in the tooth that has been filled
            </li>
            <li style={{ marginBottom: "10px", color: "#000" }}>
              Sensitivity to hot or cold food
            </li>
            <li style={{ marginBottom: "10px", color: "#000" }}>
              You may notice a gap or hole in your tooth
            </li>
            <li style={{ marginBottom: "10px", color: "#000" }}>
              You may feel a hard object in your mouth when you bite on hard food
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: 1 }}>
          <img
            src={fiftytwo}
            alt="Teeth Filling Treatment"
            style={{
              maxwidth: "620%",
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>

    <div
      style={{
        width: "100%",
        backgroundColor: "#f3f8fc",
        padding: "80px 60px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: 1 }}>
          <img
            src={fiftythree}
            alt="Causes of a Teeth Filling"
            style={{
              maxwidth: "620%",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: "#0b1c7d",
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Causes of a Teeth Filling:
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            Various factors can lead to the loss or dislodgement of fillings.
            Hard food or athletic injuries can cause fillings to fall out.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            Furthermore, decay near the filling or prolonged use can result in
            fillings coming loose.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            If you suspect a missing filling, it is crucial to promptly schedule
            a dental appointment.
          </p>
        </div>
      </div>
    </div>

    <div
      style={{
        width: "100%",
        padding: "80px 60px",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
          color: "#0b1c7d",
          marginBottom: "50px",
        }}
      >
        FAQs
      </h2>

      {/* Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            "01. What do you do when you lose a filling?",
            "02. How much does it cost to fix a lost filling?",
            "03. Why does my tooth filling hurt after months?",
            "04. How to relieve tooth pain after filling?",
            "05. Is a lost filling a dental emergency?",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#69bdbb",
                padding: "18px 22px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#000",
                }}
              >
                +
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#000",
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            "06. How many times can a filling be replaced?",
            "07. What can you do at home when you lose a filling?",
            "08. How long does a filling last?",
            "09. How long after a filling can I drink?",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#69bdbb",
                padding: "18px 22px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#000",
                }}
              >
                +
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#000",
                }}
              >
                {text}
              </span>
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
              <a
                href="#"
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
              <a
                href="#"
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
              <a
                href="#"
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