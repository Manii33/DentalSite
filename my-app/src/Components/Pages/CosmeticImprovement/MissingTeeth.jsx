import React from "react";
import { Link } from "react-router-dom";
import sixtytwo from "../../Images/sixtytwo.jpg";
import sixtythree from "../../Images/sixtythree.jpg";
import sixtyfour from "../../Images/sixtyfour.jpg";
import sixtyfive from "../../Images/sixtyfive.jpg";
import sixtysix from "../../Images/sixtysix.jpg";
import sixtyseven from "../../Images/sixtyseven.jpg";
import { PiToothFill } from "react-icons/pi";
import { RiToothFill } from "react-icons/ri";
import { LiaTeethSolid } from "react-icons/lia";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function MissingTeeth() {
  return (
    <>
    <div
  className="hero-section"
  style={{
  backgroundImage: `url(${sixtytwo})`,
  backgroundSize: "cover",
  backgroundPosition: "center 65%",
  backgroundRepeat: "no-repeat",
  width: "100%",
  minHeight: "50vh",
}}
>
    {<Link to="/CosmeticImprovement/missingteeth"></Link>}
  <div className="hero-content">
    <h2>Treatments</h2>
    <h1>Missing Teeth Treatment in Lahore</h1>
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
Missing teeth can have a negative impact on your smile and self-confidence. Fortunately, there are solutions available. Tooth replacement can improve your chewing ability,facial aesthetics and speech. <span style={{color :"#0aa6ff", fontWeight: "700" }}>Dental implants</span>, mini implants, <span style={{color :"#0aa6ff", fontWeight: "700" }}>fixed bridges</span>, and removable or implant support <span style={{color :"#0aa6ff", fontWeight: "700" }}>dentures</span> are among the treatment options. Consult with your dentist to explore the available choices.
  </p>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 120px",
    boxSizing: "border-box",
  }}
>
  {/* TOP SECTION */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap",
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
        src={sixtythree}
        alt="Dental checkup"
        style={{
          width: "100%",
          maxWidth: "620px",
          height: "400px",
          borderRadius: "24px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div
      style={{
        flex: "1 1 500px",
        maxWidth: "620px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a2db3",
          marginBottom: "16px",
        }}
      >
        Causes of Missing Teeth
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
          marginBottom: "14px",
        }}
      >
        There are multiple causes for missing teeth, some major ones are:
      </p>

      <ul
        style={{
          paddingLeft: "50px",
          marginBottom: "14px",
          listStyleType: "disc",
          lineHeight: "1.8",
          fontSize: "16px",
          color: "#000",
        }}
      >
        <li>Tooth decay and cavities</li>
        <li>Gum diseases</li>
        <li>Injury or accident</li>
        <li>Age factor</li>
        <li>Poor oral hygiene</li>
      </ul>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
        }}
      >
        Apart from these, there are genetic causes like hypodontia. In this, a
        person has one or more missing teeth at birth. We offer effective
        hypodontia treatment options.
      </p>
    </div>
  </div>

  {/* BOTTOM HEADING */}
  <div style={{ marginTop: "80px", textAlign: "center" }}>
    <h2
      style={{
        fontSize: "32px",
        color: "#0a2db3",
        marginBottom: "12px",
      }}
    >
      Missing Teeth Solutions at SmileOn
    </h2>

    <p
      style={{
        fontSize: "16px",
        color: "#000",
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: "1.7",
      }}
    >
      We provide various missing teeth treatment options that restore both
      aesthetics and functionality.
    </p>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 150px",
    boxSizing: "border-box",
    backgroundColor: "#f4f9fd",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT CONTENT */}
    <div
      style={{
        flex: "1 1 520px",
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
        Dental Implants Surgery
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
          marginBottom: "16px",
        }}
      >
        For individuals with one or multiple missing teeth in different areas
        of their mouth, a dental implant offers a potential solution. It involves
        a surgical procedure where an implant or screw is placed in the jaw,
        serving as a permanent foundation for a missing tooth.
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
        }}
      >
        The implant is topped with a{" "}
        <span style={{ fontWeight: "600", color: "#0aa6ff" }}>
          crown
        </span>{" "}
        that closely resembles a natural tooth and can last for many years.
        Importantly, neighboring teeth remain unaffected by the implant.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div
      style={{
        flex: "1 1 480px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={sixtyfour}
        alt="Dental implant illustration"
        style={{
          width: "100%",
          maxWidth: "620px",
          height: "400px",
          borderRadius: "24px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 130px",
    backgroundColor: "#f4f9fd",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "60px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT IMAGE */}
    <div
      style={{
        flex: " 520px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={sixtyfive}
        alt="Implant supported dentures illustration"
        style={{
          width: "100%",
          maxWidth: "620px",
          height: "400px",
          borderRadius: "24px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div
      style={{
        flex: " 420px",
        maxWidth: "600px",
        marginRight: "50px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a2db3",
          marginBottom: "20px",
        }}
      >
        Implant Supported Dentures
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
          marginBottom: "16px",
        }}
      >
        Unlike conventional dentures that sit on the gums, implant supported
        dentures are attached to the implants placed in the jaw.
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
        }}
      >
        This treatment is suitable when there are no teeth present in the jaw
        but there is sufficient bone to support the implants.
      </p>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 150px",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "60px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT CONTENT */}
    <div
      style={{
        flex: "520px",
        maxWidth: "620px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a2db3",
          marginBottom: "15px",
        }}
      >
        Fixed Bridge
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        A fixed bridge might work for you if you have a single missing tooth or
        more than one missing tooth in the same area{" "}
        <span style={{ color: "#0aa6ff", fontWeight: "500" }}>bridge</span>{" "}
        might work for you. As the name suggests, this solution bridges a gap
        from a missing tooth. A dental bridge consists of{" "}
        <strong>abutments</strong> (natural tooth serving as a pillar to support)
        and <strong>pontic</strong> (artificial teeth that will “bridge the gap”
        in your smile).
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#000",
        }}
      >
        The artificial tooth is supported by adjacent natural teeth and bonded
        to them with dental cement. A dental bridge closely resembles and serves
        almost the same purpose as natural teeth.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div
      style={{
        flex: " 520px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={sixtysix}
        alt="Fixed dental bridge illustration"
        style={{
          width: "120%",
          maxWidth: "620px",
          height: "400px",
          borderRadius: "24px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 120px",
    backgroundColor: "#f3f8fd",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "60px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT IMAGE */}
    <div
      style={{
        flex: "520px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={sixtyseven}
        alt="Dental consultation"
        style={{
          width: "100%",
          maxWidth: "620px",
          height: "400px",
          borderRadius: "24px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div
      style={{
        flex: " 520px",
        maxWidth: "650px",
        marginTop: "35px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a2db3",
          marginBottom: "10px",
        }}
      >
        Get Prepared For Treatment
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#000",
          marginBottom: "8px",
        }}
      >
        When you schedule an appointment at SmileOn to address a missing tooth
        or teeth, after consultation you will be provided with all the required
        information and options that will be suitable according to your case.
        Generally your dentist will ask you about your medical history and will
        then thoroughly examine your mouth, teeth, gums, jaw, tongue, throat,
        sinuses, ears, nose and neck. You may also need an x-ray, depending on
        your situation.
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        Your dentist may ask you some questions about your missing teeth
        treatment such as:
      </p>

      <ul
        style={{
          paddingLeft: "40px",
          marginBottom: "16px",
          color: "#000",
          fontSize: "16px",
          listStyleType: "disc",
          lineHeight: "1.5",
        }}
      >
        <li>How long has it been like this?</li>
        <li>Are you experiencing any pain?</li>
        <li>Does it affect how you eat or drink?</li>
      </ul>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#000",
        }}
      >
        Prepare your answers to these questions prior to your appointment to
        expedite the diagnosis.
      </p>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 40px",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    textAlign: "center",
  }}
>
  {/* HEADING */}
  <h2
    style={{
      fontSize: "34px",
      color: "#0a2db3",
      marginBottom: "14px",
    }}
  >
    What Next
  </h2>

  {/* DESCRIPTION */}
  <p
    style={{
      maxWidth: "1300px",
      margin: "0 auto 50px",
      fontSize: "16px",
      lineHeight: "1.7",
      color: "#000",
    }}
  >
    Explore treatment options by reviewing potential procedures. We suggest
    scheduling a consultation with a dentist for personalized advice regarding
    your symptoms.{" "}
    <span style={{ color: "#00a6ff", cursor: "pointer" }}>Book online</span> or
    call <strong>0333-8037161</strong> for an appointment.
  </p>

  {/* CARDS */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    

  }}
>
  {[
    { title: "Bridges", icon: <RiToothFill /> },
    { title: "Dentures", icon: <LiaTeethSolid /> },
    { title: "Dental Implants", icon: <PiToothFill /> },
    { title: "Crowns", icon: <RiToothFill /> },
  ].map(({ title, icon }, index) => (
    <div
      key={index}
      style={{
        width: "260px",
        height: "150px",
        backgroundColor: "#fff",
        borderRadius: "18px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
      }}
    >
      {/* ICON */}
      <div style={{ fontSize: "42px", color: "#38bdf8" }}>
        {icon}
      </div>

      {/* TITLE */}
      <h4
        style={{
          fontSize: "18px",
          color: "#0a2db3",
          margin: 0,
        }}
      >
        {title}
      </h4>
    </div>
  ))}
</div>
</div>

<div
  style={{
    padding: "80px 40px",
    backgroundColor: "#fff",
  }}
>
  {/* TITLE */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "36px",
      color: "#0a2db3",
      marginBottom: "50px",
    }}
  >
    FAQs
  </h2>

  {/* FAQ GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px 30px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {[
      "01. How to fix missing teeth without implants?",
      "02. What is the best way to replace missing teeth?",
      "03. How much will it cost to replace a missing tooth?",
      "04. Does it matter if I have missing teeth?",
      "05. Why is replacement of missing teeth important?",
      "06. I’ve had an accident and lost a tooth, what should I do?",
      "07. I have loose teeth, what should I do?",
      "08. My child has lost a baby tooth, what should I do?",
      "09. Can I prevent losing my teeth?",
    ].map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "#69bfbf",
          color: "#000",
          padding: "18px 24px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#58b0b0";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#69bfbf";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* PLUS */}
        <span
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          +
        </span>

        {/* TEXT */}
        <span
          style={{
            fontSize: "15px",
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