import React from "react";
import { Link } from "react-router-dom";
import sixty from "../../Images/sixty.jpg";
import Pic from "../../Images/Pic.jpg";
import Pic2 from "../../Images/Pic2.jpg";
import Pic3 from "../../Images/Pic3.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function YellowTeeth() {
  return (
    <>
    <div
  className="hero-section"
  style={{
  backgroundImage: `url(${sixty})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  minHeight: "50vh",
}}
>
    {<Link to="/CosmeticImprovement/yellowteeth"></Link>}
  <div className="hero-content">
    <h2>Treatments</h2>
    <h1>Yellow Teeth Treatment in Lahore</h1>
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
Concerned about yellow teeth? You’re not alone. We understand. Despite your efforts with brushing, whitening toothpaste, and flossing, your teeth may still appear yellow. Don’t worry. Professional treatment can effectively address yellow teeth. Visit SmileOn for a discussion on yellow teeth treatment. Stained or yellow teeth can affect your confidence, but there are affordable and durable solutions available.
  </p>
</div>

<div
  style={{
    width: "100%",
    padding: "50px 160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    boxSizing: "border-box",
  }}
>
  {/* LEFT CONTENT */}
  <div
    style={{
      flex: "1 1 500px",
      maxWidth: "600px",
    }}
  >
    <h2
      style={{
        fontSize: "32px",
        color: "#0a2db3",
        marginBottom: "20px",
      }}
    >
      Symptoms of yellow teeth
    </h2>

    <p
      style={{
        fontSize: "16px",
        lineHeight: "1.7",
        color: "#000",
        marginBottom: "16px",
      }}
    >
      Yellow teeth can be disheartening, whether it's a few teeth or all of them.
      The signs are usually noticeable, standing out against your normal tooth
      color. If you're concerned about the color of your teeth, schedule a
      dentist appointment for yellow teeth treatment to explore your options.
    </p>

    <p
      style={{
        fontSize: "16px",
        lineHeight: "1.7",
        color: "#000",
      }}
    >
      Sometimes all of your teeth will be discolored or stained and you notice
      it in a photograph with other people. If you're worried about the color
      of your teeth, book an appointment with a dentist for yellow teeth
      treatment to discuss your options.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div
    style={{
      flex: "1 1 400px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src={Pic}
      alt="Dental checkup"
      style={{
        width: "100%",
        maxWidth: "620px",
        borderRadius: "20px",
        objectFit: "cover",
      }}
    />
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "50px 160px",
    backgroundColor: "#f4f9fd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
    boxSizing: "border-box",
  }}
>
  {/* LEFT IMAGE */}
  <div
    style={{
      flex: "1 1 480px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src={Pic2}
      alt="Dental treatment"
      style={{
        width: "100%",
        maxWidth: "620px",
        borderRadius: "20px",
        objectFit: "cover",
      }}
    />
  </div>

  {/* RIGHT CONTENT */}
  <div
    style={{
      flex: "1 1 500px",
      maxWidth: "600px",
    }}
  >
    <h2
      style={{
        fontSize: "32px",
        color: "#0a2db3",
        marginBottom: "18px",
      }}
    >
      Causes of yellow teeth
    </h2>

    <p
      style={{
        fontSize: "16px",
        lineHeight: "1.7",
        color: "#000",
        marginBottom: "18px",
      }}
    >
      Yellow teeth can be caused by various factors. Regular smoking and coffee
      consumption can lead to staining. Fizzy drinks and red wine can also
      contribute to yellowing. Additionally, thin tooth enamel can be a
      potential cause of yellow teeth. There are also a few other causes of
      yellow teeth including:
    </p>

    <ul
      style={{
        paddingLeft: "20px",
        lineHeight: "1.8",
        fontSize: "16px",
        color: "#000",
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      <li>Some diseases</li>
      <li>Certain medications</li>
      <li>Your age</li>
      <li>Trauma or injury to your teeth</li>
    </ul>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 40px",
    boxSizing: "border-box",
  }}
>
  {/* WHAT NEXT */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "32px",
      color: "#0a2db3",
      marginBottom: "16px",
    }}
  >
    What Next
  </h2>

  <p
    style={{
      textAlign: "center",
      maxWidth: "1300px",
      margin: "0 auto 50px",
      fontSize: "16px",
      lineHeight: "1.7",
      color: "#000",
    }}
  >
    Discover treatment options by exploring potential procedures. We suggest
    scheduling a dental appointment for personalized guidance regarding your
    condition. Book{" "}
    <span style={{ color: "#00a3ff", cursor: "pointer" }}>book online</span> or
    call now to secure your appointment.
  </p>

  {/* CENTERED CARD */}
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "90px",
    }}
  >
    <div
  style={{
    width: "340px",
    padding: "40px 20px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
    textAlign: "center",
  }}
>
  {/* ICON PLACEHOLDER */}
  <div
    style={{
      width: "100px",
      height: "64px",
      margin: "0 auto 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    
    { 
        <img src={Pic3} alt="" style={{ width: "100%" }} />
        
    }
  </div>

  <p
    style={{
      fontSize: "16px",
      color: "#0a2db3",
      fontWeight: "600",
    }}
  >
    Teeth Whitening Treatment
  </p>
</div>

  </div>

  {/* FAQs */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "28px",
      color: "#0a2db3",
      marginBottom: "40px",
    }}
  >
    FAQs
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "20px",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    {[
      "01. How much does it cost to fix yellow teeth?",
      "02. What does it mean if you have yellow teeth?",
      "03. How do you get rid of yellow teeth?",
      "04. How do you prevent yellow teeth?",
      "05. Why are my teeth yellow when I brush them everyday?",
    ].map((item, index) => (
      <div
        key={index}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#5ab4af";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#69c1bd";
          e.currentTarget.style.transform = "translateY(0)";
        }}
        style={{
          backgroundColor: "#69c1bd",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "all 0.3s ease",
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
            fontSize: "16px",
            color: "#000",
          }}
        >
          {item}
        </span>
      </div>
    ))}
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