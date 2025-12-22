import React from "react";
import { Link } from "react-router-dom";
import nine from "../../Images/nine.png";
import ten from "../../Images/ten.jpg";
import eleven from "../../Images/eleven.jpg";
import twelve from "../../Images/twelve.jpg";
import thirteen from "../../Images/thirteen.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Toothache() {
  return (
    <>
    <div
      className="hero-section"
      style={{
  backgroundImage: `url(${nine})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",         // Full width of screen
  height: "350px",
        
}}
    >
      {<Link to="/TeethGums/toothache"></Link>}
      <div className="hero-content">
        <h2>Treatments</h2>
        <h1>Teeth Pain Treatment in Lahore</h1>
      </div>
    </div><br/>

    <div
      style={{
        padding: "60px 40px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "50px",
      }}
    >
      {/* LEFT TEXT SECTION */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#0c1b3a",
            marginBottom: "20px",
          }}
        >
          When to See a Dentist
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "15px",
            maxWidth: "750px",
          }}
        >
          If in doubt, check it out.
          <br />
          Book an appointment to see a dentist as soon as possible if:
        </p>

        <ul
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#222",
            paddingLeft: "20px",
            maxWidth: "750px",
            marginBottom: "25px",
          }}
        >
          <li>The pain lasts longer than a day or two</li>
          <li>The pain is severe or starts to become unbearable</li>
          <li>You have a fever, earache, or pain when you open your mouth wide</li>
        </ul>

        <h3
          style={{
            fontSize: "26px",
            color: "#0c1b3a",
            marginBottom: "12px",
            marginTop: "20px",
            fontWeight: "600",
          }}
        >
          Are you in tooth Pain?
        </h3>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            maxWidth: "750px",
          }}
        >
          Call us if you’re experiencing pain and need emergency dental care.  
          We’ll get you in fast for an urgent appointment.
        </p>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div style={{ flex: 1 }}>
        <img
          src={ten}
          alt="Dentist Consultation"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "30px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

    <div
      style={{
        backgroundColor: "#eef4ff",
        padding: "60px 40px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "50px",
      }}
    >
      {/* LEFT IMAGE */}
      <div style={{ flex: 1 }}>
        <img
          src= {eleven}
          alt="Symptoms of Tooth Pain"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "30px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* RIGHT TEXT */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#0c1b3a",
            marginBottom: "20px",
          }}
        >
          Symptoms of Tooth Pain
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "18px",
            maxWidth: "700px",
          }}
        >
          Toothache refers to any pain or distress experienced in or around a
          tooth. There are diverse forms of pain, making it challenging to
          convey your sensations to the dentist effectively. The discomfort can
          range from mild to severe, throbbing, sharp, or persistent.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "18px",
            maxWidth: "700px",
          }}
        >
          Sometimes, pressure on the tooth is the sole means to perceive the
          pain. Furthermore, your teeth may exhibit heightened sensitivity to
          extreme temperatures. Discomfort while chewing is also quite common.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            maxWidth: "700px",
          }}
        >
          Additional indications may comprise migraines, elevated body
          temperatures, and gum inflammation near the tooth or within the jaw.
          Furthermore, gum or tooth bleeding may occur. In the case of an
          infection, unpleasant-tasting fluid might be discharged from the
          surrounding area of the tooth.
        </p>
      </div>
    </div>

     (
    <div
      style={{
        backgroundColor: "#eef4ff",
        padding: "60px 40px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "60px",
      }}
    >
      {/* LEFT TEXT */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#0c1b3a",
            marginBottom: "20px",
          }}
        >
          Causes of Toothache
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "18px",
            maxWidth: "750px",
          }}
        >
          Dental and medical problems can also result in toothaches. Your teeth,
          gums, or jaw may be involved in dental pain reasons. The following are
          the most typical causes of toothaches that our dentists see daily:
        </p>

        <ul
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#222",
            paddingLeft: "20px",
            marginBottom: "18px",
            maxWidth: "750px",
          }}
        >
          <li>Dental cavities as a result of tooth decay</li>
          <li>
            <strong style={{ color: "#008cba" }}>A fractured or broken tooth</strong>
          </li>
          <li>An impacted tooth</li>
        </ul>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            maxWidth: "750px",
          }}
        >
          Occasionally, discomfort may stem from a broken filling, tooth
          sensitivity, or an abscess. Similarly, toothaches can be caused by
          gingivitis or gum disease, although some individuals may not experience
          pain. Toothaches can also be induced by other pain radiating to the
          jaw, known as referred pain. The temporomandibular joint (TMJ),
          commonly called the jaw joint, is one such location. Earaches, sinus
          infections, shingles, and, on rare occasions, heart conditions are
          additional medical conditions that can result in toothaches.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div style={{ flex: 1 }}>
        <img
          src={twelve}
          alt="Causes of Toothache"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "30px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

     
    <div
      style={{
        width: "100%",
        background: "#f0f7ff",
        padding: "60px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "85%",
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT IMAGE */}
        <img
          src={thirteen}
          alt="Dental Treatment"
          style={{
            width: "50%",
            borderRadius: "25px",
            objectFit: "cover",
            marginTop:"90px",
          }}
        />

        {/* RIGHT TEXT SECTION */}
        <div style={{ width: "50%" }}>
          {/* TITLE */}
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#012970",
              marginBottom: "20px",
            }}
          >
            Get Prepared
          </h1>

          {/* PARAGRAPH */}
          <p style={{ fontSize: "16px", lineHeight: "28px", color: "#333" }}>
            When you schedule a toothache appointment at one of our dental
            offices, you only want the pain to stop. It makes sense that way.
            Consider what your dentist will require to identify and treat your
            toothache in advance.
            <br />
            <br />
            Usually, your dentist will ask you about your medical history before
            performing a comprehensive oral, dental, jaw, tongue, throat, sinus,
            ear, nose, and neck examination. Depending on what your dentist
            thinks might be the reason for your toothache, you might also
            require an X-ray.
          </p>

          {/* BULLETS */}
          <ul
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              paddingLeft: "20px",
              lineHeight: "28px",
            }}
          >
            <li>When did your toothache start?</li>
            <li>How severe is the pain?</li>
            <li>Where do you feel the pain?</li>
            <li>What makes it worse?</li>
            <li>What makes it better?</li>
          </ul>

          <p style={{ fontSize: "16px", lineHeight: "28px", color: "#333" }}>
            Before your appointment, consider your responses to these questions.
            Preparation can improve the diagnosis.
          </p>

          {/* RELATED TREATMENTS TITLE */}
          <h2
            style={{
              fontSize: "24px",
              color: "#012970",
              fontWeight: "700",
              marginTop: "30px",
              marginBottom: "15px",
            }}
          >
            Related Treatments:
          </h2>

          {/* RELATED LINKS */}
          <ul
            style={{
              marginTop: "0px",
              paddingLeft: "20px",
              lineHeight: "28px",
              fontSize: "16px",
            }}
          >
            <li>
              <a href="#" style={{ color: "#00aaff", fontWeight: "600" }}>
                Fillings
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#00aaff", fontWeight: "600" }}>
                Root canals
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#00aaff", fontWeight: "600" }}>
                TMJ
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#00aaff", fontWeight: "600" }}>
                Tooth extraction
              </a>
            </li>
            <li>Antibiotics and pain relief medication</li>
          </ul>
        </div>
      </div>
    </div>

    <div style={{ width: "100%", marginTop: "80px" }}>
  {/* Heading */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "42px",
      color: "#0A0A5F",
      fontWeight: "700",
      marginBottom: "10px",
    }}
  >
    What Next
  </h2>

  {/* Subtext */}
  <p
    style={{
      textAlign: "center",
      fontSize: "18px",
      maxWidth: "900px",
      margin: "0 auto",
      color: "#333",
    }}
  >
    Explore possible treatments to gain further insight into the next steps.
    We recommend arranging a dental appointment for comprehensive guidance on your concerns.
  </p>

  {/* Button */}
  <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
    <button
      style={{
        backgroundColor: "#15c0cf",
        border: "none",
        padding: "14px 40px",
        borderRadius: "50px",
        fontSize: "18px",
        fontWeight: "600",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Book an Appointment
    </button>
  </div>

  {/* FAQs SECTION */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "40px",
      marginTop: "70px",
      color: "#0A0A5F",
      fontWeight: "700",
    }}
  >
    FAQs
  </h2>

  {/* FAQ Container */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      marginTop: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT COLUMN */}
    <div style={{ width: "45%" }}>
      {[
        "01. How much does it cost to treat toothache?",
        "02. Why is toothache so bad?",
        "03. Why is toothache worse at night?",
        "04. What are the best painkillers for toothache?",
      ].map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#5AB7B1",
            padding: "18px 20px",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "24px", marginRight: "12px" }}>＋</span>
          <span style={{ fontSize: "17px", fontWeight: "500" }}>{item}</span>
        </div>
      ))}
    </div>

    {/* RIGHT COLUMN */}
    <div style={{ width: "45%" }}>
      {[
        "05. Help! It’s sore but I’m anxious about visiting the dentist!",
        "06. Can toothache be prevented?",
        "07. Can toothache go away on its own?",
        "08. How do you stop toothache at home?",
      ].map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#5AB7B1",
            padding: "18px 20px",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "24px", marginRight: "12px" }}>＋</span>
          <span style={{ fontSize: "17px", fontWeight: "500" }}>{item}</span>
        </div>
      ))}
    </div>
  </div>
</div><br/><br/>

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