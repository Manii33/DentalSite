import React from "react";
import { Link } from "react-router-dom";
import fiftyeight from "../../Images/fiftyeight.jpg";
import fiftynine from "../../Images/fiftynine.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function DryMouth() {
  return (
    <>
<div
      className="hero-section"
   style={{
  backgroundImage: `url(${fiftyeight})`,
  backgroundSize: "cover",
  backgroundPosition: "center 50%",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "50vh",
}}


    >
      {<Link to="/TeethGums/dry-mouth-treatment"></Link>}
      <div className="hero-content">
        <h2>Treatments</h2>
        <h1>Dry Mouth Treatment in Lahore</h1>
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
  Conditions like oral thrush or dry mouth can be very irritating and troublesome if they become a regular feature of your life. Chronic dry mouth can signal insufficient saliva production. Most people experience dry mouth from time to time, which can be caused by a number of things.<br/><br/>
It is more prevalent in some people than others. You may feel a dry, sticky mouth after eating. Having a dry mouth weathered often can be bothersome and nerve-racking. Dry mouth treatment is for you to seek out at SmileOn. It’s vital because it can lead to more severe problems if neglected.  
  </p>
</div>

<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "80px",
    padding: "60px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
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
        fontSize: "28px",
        fontWeight: "700",
        color: "#0b1c8c",
        marginBottom: "20px",
      }}
    >
      Symptoms of Dry Mouth:
    </h2>

    <p
      style={{
        fontSize: "15px",
        lineHeight: "1.7",
        color: "#333",
        marginBottom: "16px",
      }}
    >
      Feeling like your mouth is dry is common. But a constantly dry mouth can
      cause problems. The most common symptoms of a dry mouth are trouble
      chewing, swallowing or speaking and the sensation of a sticky or dry mouth
      or throat. You might even feel a slight burn in your throat or in your
      mouth. Other dry mouth symptoms can also include:
    </p>

    <ul
      style={{
        paddingLeft: "38px",
        marginBottom: "16px",
        color: "#333",
        fontSize: "15px",
        lineHeight: "1.8",
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      <li>A rough tongue</li>
      <li>Cracked lips</li>
      <li style={{ color: "#00aaff" }}>Bad breath</li>
      <li style={{ color: "#00aaff" }}>Mouth sores</li>
    </ul>

    <p
      style={{
        fontSize: "14px",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      Dry mouths are more prone to developing cavities, which can lead to larger
      dental issues. In such cases, regular dental visits are important.
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
      src={fiftynine}
      alt="Dental checkup"
      style={{
        width: "120%",
        maxWidth: "620px",
        borderRadius: "18px",
        objectFit: "cover",
      }}
    />
  </div>
</div>

<div
  style={{
    backgroundColor: "#f4f8fb",
    padding: "60px 40px",
  }}
>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
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
        src={fiftynine}
        alt="Dental examination"
        style={{
          width: "100%",
          maxWidth: "620px",
          borderRadius: "18px",
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
          fontSize: "28px",
          fontWeight: "700",
          color: "#0b1c8c",
          marginBottom: "20px",
        }}
      >
        Causes of Dry Mouth:
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#333",
          marginBottom: "18px",
        }}
      >
        Dry mouth can develop for many reasons, ranging from lifestyle choices
        to underlying health conditions. Some reasons might be temporary and
        under control while others may need medical help. Dry mouth has several
        causes, particularly if it occurs regularly.
      </p>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#333",
          marginBottom: "14px",
        }}
      >
        Some common factors that contribute to dry mouth include:
      </p>

      <ul
        style={{
          paddingLeft: "40px",
          fontSize: "15px",
          lineHeight: "1.9",
          color: "#333",
          listStyleType: "disc",
        }}
      >
        <li>Dry mouth during sleep caused by sleeping with mouth open</li>
        <li>Not getting enough water or not being hydrated</li>
        <li>Medications (e.g., antihistamines, antidepressants)</li>
        <li>Anticancer therapies (chemotherapy, radiation)</li>
        <li>Smoking or tobacco use</li>
        <li>Autoimmune conditions (including sjogren’s syndrome)</li>
        <li>Nerve damage that affects salivary glands</li>
      </ul>
    </div>
  </div>
</div>

<div
  style={{
    fontFamily: "Arial, sans-serif",
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    boxSizing: "border-box",
  }}
>
  {/* Top Section */}
  <div style={{ marginBottom: "40px" }}>
    <h2
      style={{
        color: "#0b2c8a",
        fontSize: "28px",
        fontWeight: "700",
        marginBottom: "16px",
      }}
    >
      Treatment for Dry Lips and Mouth:
    </h2>

    <p
      style={{
        fontSize: "16px",
        lineHeight: "1.7",
        color: "#333",
        marginBottom: "10px",
        maxWidth: "900px",
      }}
    >
      Treating dry mouth and lips means controlling symptoms and treating the
      main cause. Staying hydrated, using saliva substitutes, and practicing
      good oral hygiene is important.
    </p>

    <p
      style={{
        fontSize: "16px",
        lineHeight: "1.7",
        color: "#333",
        maxWidth: "900px",
      }}
    >
      In more severe cases, a healthcare provider may recommend medications,
      mouthwashes or special lip balms.
    </p>
  </div>

  {/* Bottom Two Columns */}
  <div
    style={{
      display: "flex",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* Left Column */}
    <div style={{ flex: "1 1 400px" }}>
      <h3
        style={{
          color: "#0b2c8a",
          fontSize: "26px",
          fontWeight: "700",
          marginBottom: "14px",
        }}
      >
        Dry Mouth Causes Cavities:
      </h3>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#333",
        }}
      >
        Saliva aids in washing away food particles and neutralizing acids
        produced by bacteria. So, when the mouth is dry, those functions are
        compromised. This creates the perfect setting for harmful bacteria to
        generate, attacking tooth enamel and the chances of cavities. Without
        dry mouth treatment, your teeth can’t remineralize. It will make them
        more susceptible to cavities.
      </p>
    </div>

    {/* Right Column */}
    <div style={{ flex: "1 1 400px" }}>
      <h3
        style={{
          color: "#0b2c8a",
          fontSize: "26px",
          fontWeight: "700",
          marginBottom: "14px",
        }}
      >
        Dry Mouth Causes Tooth Decay:
      </h3>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#333",
        }}
      >
        Saliva is important in protecting the teeth from decay as it keeps them
        moist and washes away acids and sugars. In the case of dry mouth, a
        protective mechanism is missing, and plaque and bacteria can accumulate
        on the teeth. Hence leads to the demineralization of the enamel and
        cavities. If untreated, over time, this can result in worsening tooth
        decay.
      </p>
    </div>
  </div>
</div>

<div
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "30px",
      color: "#0b2c8a",
    }}
  >
    FAQs
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
      gap: "20px 30px",
    }}
  >
    {[
      "01. How much does it cost to treat a dry mouth?",
      "05. Can dry mouth be prevented?",
      "02. How do you get rid of dry mouth? Treat a teeth abscess at home?",
      "06. I'm anxious about visiting the dentist.",
      "03. Can you smoke with an abscessed tooth?",
      "07. Can toothpaste make your mouth dry?",
      "04. Is dry mouth dangerous?",
      "08. Does a wisdom tooth cause a dry mouth?",
    ].map((text, i) => (
      <div
        key={i}
        style={{
          backgroundColor: "#6bbdbb",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "16px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#5aaead")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#6bbdbb")
        }
      >
        <span style={{ fontSize: "20px", fontWeight: "700" }}>+</span>
        <span>{text}</span>
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