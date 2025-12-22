import React from "react";
import { Link } from "react-router-dom";
import twentynine from "../../Images/twentynine.jpg";
import thirty from "../../Images/thirty.jpg";
import thirtyone from "../../Images/thirtyone.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function JawPain() {
  return (
    <>
    <div
  className="hero-section"
  style={{
    backgroundImage: `url(${twentynine})`,
    backgroundSize: "cover",
    backgroundPosition: "center 50%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "350px",
  }}
>
    {<Link to="/TeethGums/jawpain"></Link>}
  <div className="hero-content">
    <h2>Treatments</h2>
    <h1>Jaw Pain Treatment in Lahore</h1>
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
    Jaw pain can be excruciating and disruptive to daily life. It is a common and persistent condition that can greatly impact activities like eating and speaking. The intensity of jaw pain can make it difficult to focus, and many individuals experience limitations in mouth opening, along with facial and jaw tenderness. Headaches and earaches can also accompany jaw pain.
  </p>
</div>

<div
  style={{
    width: "100%",
    background: "#f4f9fc",
    padding: "80px 60px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  }}
>
  {/* MAIN CONTAINER */}
  <div
    style={{
      maxWidth: "1200px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "60px",
    }}
  >
    {/* LEFT CONTENT */}
    <div style={{ flex: "1" }}>
      <h2
        style={{
          color: "#0a1c74",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        Symptoms of Jaw Pain:
      </h2>

      <p
        style={{
          lineHeight: "1.8",
          marginBottom: "20px",
          fontSize: "15px",
        }}
      >
        Untreated, jaw pain can become chronic and unbearable. It can arise from
        chewing hard foods or excessive gum chewing, but typically resolves
        quickly. However, chronic jaw pain is often associated with more serious
        conditions such as temporomandibular joint disease (TMJ).
      </p>

      <p
        style={{
          lineHeight: "1.8",
          fontSize: "15px",
        }}
      >
        Common symptoms of TMJ and jaw pain include aching or tender jaw, ear
        pain, discomfort in the temporomandibular joints, and difficulty or pain
        while chewing. Additional possible symptoms include lower jaw pain,
        facial pain, and limited mouth movement.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div style={{ flex: "1", textAlign: "right" }}>
      <img
        src={thirty} // replace with your image import
        alt="Jaw Pain Examination"
        style={{
          width: "100%",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    background: "#f4f9fc",
    padding: "80px 60px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  }}
>
  {/* MAIN WRAPPER */}
  <div
    style={{
      maxWidth: "1200px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "60px",
    }}
  >
    {/* LEFT IMAGE */}
    <div style={{ flex: "1" }}>
      <img
        src={thirtyone} // import your image
        alt="Causes of Jaw Pain"
        style={{
          width: "100%",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div style={{ flex: "1" }}>
      <h2
        style={{
          color: "#0a1c74",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        Causes of Jaw Pain :
      </h2>

      <p
        style={{
          lineHeight: "1.8",
          fontSize: "15px",
          marginBottom: "15px",
        }}
      >
        There are several different causes of jaw pain. TMJ, also known as
        temporomandibular joint disease, is a frequent source of jaw pain. A
        crucial joint in the body is the mandible joint. It enables complicated
        motions like talking, eating, and swallowing. Trauma or damage may
        result in TMJ. This could be the result of an accident or participating
        in sports. Jaw discomfort and TMJ may also be brought on by:
      </p>

      <ul
        style={{
          paddingLeft: "20px",
          marginBottom: "15px",
          lineHeight: "1.8",
          fontSize: "15px",
        }}
      >
        <li>Dental problems, such as misaligned teeth and jaws</li>
        <li>
          <span style={{ color: "#00a6ff", fontWeight: "500" }}>
            Teeth grinding
          </span>{" "}
          or clenching
        </li>
        <li>Arthritis in the joint</li>
        <li>Stress, leading to tightened facial muscles</li>
      </ul>

      <p
        style={{
          lineHeight: "1.8",
          fontSize: "15px",
        }}
      >
        Jaw pain can be triggered by consuming excessively tough food or
        overextending the mouth. Typically, the discomfort subsides within a
        couple of days. Severe jaw pain requires attention from a dentist or
        other qualified professional.
      </p>
    </div>
  </div>
</div>

{/* WHAT NOW SECTION */}
<div
  style={{
    width: "100%",
    padding: "80px 40px",
    textAlign: "center",
    background: "#ffffff",
  }}
>
  <h2
    style={{
      fontSize: "32px",
      color: "#0a1c74",
      marginBottom: "15px",
    }}
  >
    What Now
  </h2>

  <p
    style={{
      maxWidth: "800px",
      margin: "0 auto 30px",
      fontSize: "15px",
      lineHeight: "1.7",
    }}
  >
    View some potential therapies to learn more about what comes next. We
    advise scheduling a dental consultation to receive detailed information
    concerning your problems.
  </p>

  <button
    style={{
      background: "#2dd4f7",
      border: "none",
      color: "#fff",
      padding: "12px 30px",
      borderRadius: "30px",
      fontSize: "15px",
      cursor: "pointer",
    }}
  >
    Book an Appointment
  </button>
</div>

{/* FAQ SECTION */}
<div
  style={{
    width: "100%",
    padding: "60px 40px 100px",
    background: "#ffffff",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "32px",
      color: "#0a1c74",
      marginBottom: "40px",
    }}
  >
    FAQs
  </h2>

  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px 30px",
    }}
  >
    {/* FAQ ITEM */}
    {[
      "01. How much does it cost to treat jaw pain?",
      "02. How do you get rid of jaw pain?",
      "03. What are the causes of jaw pain?",
      "04. What can I do at home to help with jaw pain?",
      "05. I’m anxious about visiting the dentist.",
      "06. Can jaw pain be prevented?",
    ].map((item, index) => (
      <div
        key={index}
        style={{
          background: "#6cc3c0",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          fontSize: "15px",
          fontWeight: "500",
        }}
      >
        <span
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginRight: "15px",
          }}
        >
          +
        </span>
        {item}
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