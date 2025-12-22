import React from "react";
import { Link } from "react-router-dom";
import seventeen from "../../Images/seventeen.jpg";
import eighteen from "../../Images/eighteen.jpg";
import nineteen from "../../Images/nineteen.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function TeethCleaning() {
  return (
    <>
    <div
      className="hero-section"
      style={{
  backgroundImage: `url(${seventeen})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
   transform: "scale(1)",
  width: "100%",         // Full width of screen
  height: "350px",
        
}}
    >
      {<Link to="/TeethGums/teethcleaning"></Link>}
      <div className="hero-content">
        <h2>Treatments</h2>
        <h1>Teeth Cleaning Treatment in Lahore</h1>
      </div>
    </div><br/>

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
 Do you desire a white, healthy smile? Regularly cleaning your teeth prevents future problems and ensures dental health. Achieve a happy, healthy smile through home dental hygiene and regular dentist visits. The dental cleaning process in Pakistan helps maintain excellent oral health and provides the satisfaction of fresh, clean teeth.
  </p>
</div>

<div
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
  }}
>
  <div
    style={{
      display: "flex",
      gap: "50px",
      alignItems: "flex-start",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT TEXT */}
    <div style={{ flex: "1 1 500px" }}>
      <h2
        style={{
          fontSize: "30px",
          color: "#0b1c6d",
          fontWeight: "600",
          marginBottom: "20px",
        }}
      >
        What is Teeth Cleaning Process?
      </h2>

      <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
        Do you desire a white, healthy smile? Teeth cleaning prevents future
        issues and is crucial for dental health. Home dental hygiene and regular
        dentist visits maintain a happy, healthy smile. Clean teeth after a
        dental visit in Pakistan provide unmatched satisfaction. It supports
        good oral health!
      </p>

      <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
        Cleaning removes plaque and tartar to prevent cavities and gum disease.
        Good oral hygiene prevents costly problems. Home care and dental visits
        keep teeth clean.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
        Our dentists train patients to maintain healthy teeth and gums. During
        teeth cleaning in Lahore, dentists assess your oral condition and check
        for disease. Plaque and bacteria are removed, leaving teeth smooth and
        clean.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
        Dentists provide home care guidance, including flossing and brushing
        techniques.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8" }}>
        Deep cleaning, called scaling and root planning, treats severe gum
        disease. It removes plaque and tartar from tooth surfaces and roots.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div style={{ flex: "1 1 500px" }}>
      <img
        src={eighteen}
        alt="Teeth Cleaning"
        style={{
          width: "620px",
          height: "480px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
    </div>
  </div>
</div>

    <div
  style={{
    width: "100%",
    padding: "80px 40px",
    backgroundImage: `url(${nineteen})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* OVERLAY */}
  <div
    style={{
      background: "rgba(0,0,0,0.55)",
      padding: "60px 40px",
      borderRadius: "30px",
      maxWidth: "1400px",
      margin: "auto",
    }}
  >
    {/* CARDS ROW */}
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/* CARD 1 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          Appointments:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Routine cleaning every six months.</li>
          <li>Scaling may require two visits.</li>
          <li>Follow-up sessions may be needed.</li>
        </ul>
      </div>

      {/* CARD 2 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          Before Your Appointment:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>No special preparation required.</li>
          <li>Brush and floss normally.</li>
        </ul>
      </div>

      {/* CARD 3 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          How Long it Takes:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Hygiene treatments: 30–60 minutes.</li>
          <li>Consultations: ~60 minutes.</li>
        </ul>
      </div>
    </div>

    {/* SECOND ROW */}
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "40px",
      }}
    >
      {/* CARD 4 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          After Your Appointment:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>You can resume normal activities.</li>
        </ul>
      </div>

      {/* CARD 5 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          You May Be Asked About:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Dental & medical history.</li>
          <li>Daily oral care routine.</li>
        </ul>
      </div>

      {/* CARD 6 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          Quick Tips:
        </h3>
        <p style={{ lineHeight: "1.8" }}>
          Building good dental habits takes time. Place reminders near your
          mirror and follow your dentist’s advice.
        </p>
      </div>
    </div>
  </div>
</div>

<div style={{ padding: "60px 40px" }}>
  {/* TITLE */}
  <div
    style={{
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "600",
      marginBottom: "40px",
      color: "#0B1C6D",
    }}
  >
    FAQs
  </div>

  {/* FAQ GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {/* ROW 1 */}
    <div
      style={{
        background: "#67BDB8",
        padding: "18px 22px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      01. How much does it cost to get your teeth cleaned?
    </div>

    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      05. What is ultrasonic dental cleaning?
    </div>

    {/* ROW 2 */}
    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      02. Is professional teeth cleaning painful?
    </div>

    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      06. When would you get ultrasonic dental cleaning?
    </div>

    {/* ROW 3 */}
    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      03. How often should I visit a dentist or hygienist?
    </div>

    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      07. What is the best way to clean dentures?
    </div>

    {/* ROW 4 */}
    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      04. Why should you get dental teeth cleaning done?
    </div>

    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      08. What is teeth cleaning price in Pakistan?
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