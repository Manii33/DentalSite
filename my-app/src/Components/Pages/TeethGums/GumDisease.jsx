import React from "react";
import { Link } from "react-router-dom";
import twenty from "../../Images/twenty.jpg";
import twentyone from "../../Images/twentyone.jpg";
import twentytwo from "../../Images/twentytwo.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function GumDisease() {
  return (
    <>
    <div
  className="hero-section"
  style={{
    backgroundImage: `url(${twenty})`,
    backgroundSize: "cover",
    backgroundPosition: "center 70%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "350px",
  }}
>
    {<Link to="/TeethGums/gumdisease"></Link>}
  <div className="hero-content">
    <h2>Treatments</h2>
    <h1>Gum Disease Treatment in Lahore</h1>
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
  Gum disease, caused by poor dental hygiene, is hazardous. An infection of the gums can lead to tooth-supporting bone damage. Gum disease is often painless; tooth loss may occur if left untreated. The two main types are gingivitis and periodontitis.
  Gingivitis, affecting up to 70% of Pakistanis, is the most common form. Around 30% of individuals over 30 have periodontitis. Early detection and treatment improve dental health. Regular dental checkups, brushing techniques twice daily, and flossing help prevent gum disease.
  </p>
</div>

<div
      style={{
        maxWidth: "1800px",
        display: "flex",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      {/* CENTERED CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "80px 60px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "600",
                color: "#0B1C6D",
                margin: " 0 auto",
              }}
            >
              Symptoms of Gum Disease:
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "0 auto",
              }}
            >
              Good oral health is crucial due to the often painless nature of gum
              disease. Regular dental checkups are necessary to ensure proper
              maintenance.
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                margin: "auto",
              }}
            >
              Gum disease symptoms can be imperceptible. Some signs could be:
            </div>

            <ul
              style={{
                paddingLeft: "10px",
                margin: "auto",
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            >
              <li>red, swollen or tender gums</li>
              <li>bleeding when you floss or brush</li>
              <li>loose teeth or separation between teeth</li>
              <li>continuous bad breath</li>
              <li>gums that pull away from teeth</li>
              <li>when you bite, the position of your teeth changes</li>
            </ul>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              Gum disease can be asymptomatic for some individuals. Regular dental
              checkups serve as the primary defence. Early detection during
              hygienist visits ensures optimal oral health.
            </div>
          </div>

<div style={{ flex: 1 }}>
  <div
    style={{
      height: "500px",          // 👈 FIXED HEIGHT (IMPORTANT)
      overflow: "hidden",       // 👈 CLIP IMAGE
      borderRadius: "20px",
      position: "relative",
    }}
  >
    <img
      src={twentyone}
      alt="Gum Disease Checkup"
      style={{
        width: "180%",
        position: "absolute",
        top: "-60px",           // 👈 IMAGE MOVES UP HERE
        right: "0",
      }}
    />
  </div>
</div>


        </div>
      </div>
    </div>

     <div
      style={{
        width: "100%",
        background: "#F4F8FB",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* CENTERED CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          width: "180%",
          padding: "80px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "70px",
          }}
        >
          {/* LEFT IMAGE */}
          <div style={{ flex: 1 }}>
            <img
              src={twentytwo}
              alt="Causes of Gum Disease"
              style={{
                width: "120%",
                height: "500px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "600",
                color: "#0B1C6D",
                marginBottom: "20px",
              }}
            >
              Causes of Gum Disease:
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "15px",
              }}
            >
              Oral bacterial overgrowth leading to plaque buildup is the primary
              cause of gum disease. Poor oral health is a significant contributing
              factor.
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "15px",
              }}
            >
              There are a few more risk factors for gum disease, though, including:
            </div>

            <ul
              style={{
                paddingLeft: "20px",
                marginBottom: "15px",
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            >
              <li>Smoking</li>
              <li>Diabetes</li>
              <li>Pregnancy or hormonal changes</li>
              <li>Medication</li>
              <li>Genetics</li>
              <li>Other health problems</li>
              <li>Stress</li>
              <li>Poor nutrition</li>
            </ul>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              Gum disease is common but treatable. Regular dentist and hygienist
              visits are essential for maintaining dental health.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ width: "100%", background: "#fff" }}>
  {/* WHAT NOW */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "80px 60px 40px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        fontSize: "32px",
        fontWeight: "600",
        color: "#0B1C6D",
        marginBottom: "15px",
      }}
    >
      What now
    </div>

    <div
      style={{
        fontSize: "15px",
        lineHeight: "1.8",
        maxWidth: "900px",
        margin: "0 auto 30px",
      }}
    >
      Explore available treatments to gain further insight. For personalised
      advice regarding your symptoms, we recommend scheduling a dentist
      consultation. Contact us via phone or our online scheduling system to book
      an{" "}
      <span style={{ color: "#00AEEF", fontWeight: "500" }}>appointment</span>.
    </div>

    <div
      style={{
        display: "inline-block",
        background: "#25CFE5",
        color: "#fff",
        padding: "14px 32px",
        borderRadius: "30px",
        fontSize: "15px",
        fontWeight: "500",
        cursor: "pointer",
      }}
    >
      Book an Appointment
    </div>
  </div>

  {/* FAQs */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 60px 80px",
    }}
  >
    <div
      style={{
        textAlign: "center",
        fontSize: "32px",
        fontWeight: "600",
        color: "#0B1C6D",
        marginBottom: "40px",
      }}
    >
      FAQs
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >
      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;01. How much does it cost to treat gum disease?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;05. Does gum disease hurt?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;02. Can gum disease be prevented?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;06. What happens if you have gum disease?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;03. Does gum disease hurt?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;07. How do you get rid of gum disease at home?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;04. Can gum disease be cured?
      </div>
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