import React from "react";
import { Link } from "react-router-dom";
import fortytwo from "../../Images/fortytwo.jpg"
import fortythree from "../../Images/fortythree.jpg"
import fortyfour from "../../Images/fortyfour.jpg"
import fortyfive from "../../Images/fortyfive.jpg"
import fortysix from "../../Images/fortyfive.jpg"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function AbscessTeeth() {
  return (
    <>
    <div
  className="hero-section"
  style={{
    backgroundImage: `url(${fortytwo})`,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    backgroundRepeat: "no-repeat",  
    width: "100%",
    height: "350px",
  }}
>
    {<Link to="/TeethGums/abscessteeth"></Link>}
  <div className="hero-content">
    <h2>Treatments</h2>
    <h1>Abscess Teeth Treatment in Lahore</h1>
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
 A tooth abscess is a painful dental condition that forms when a bacteria-infected pocket of pus develops in or around the tooth. It can cause swelling, pain and sensitivity, and if not treated it could lead to more serious health problems. Visit SmileOn for an effective dental abscess treatment from qualified dentists to end your suffering.

Our knowledgeable staff knows how painful a tooth abscess can be, so we are here to help. Do not wait—early treatment is essential to keeping your smile healthy.
  </p>
</div>


<div
  style={{
    width: "100%",
    padding: "80px 120px",   // left & right margin increased
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "40px",
    backgroundColor: "#ffffff",
  }}
>
  {/* LEFT CONTENT */}
  <div style={{ flex: 1, maxWidth: "55%" }}>
    <h2
      style={{
        fontSize: "30px",
        fontWeight: "700",
        color: "#0a1b5c",
        marginBottom: "14px",
      }}
    >
      When to See a Dentist:
    </h2>

    <p
      style={{
        fontSize: "15px",
        color: "#000",
        marginBottom: "18px",
        lineHeight: "1.7",
      }}
    >
      Check it out if you’re not sure. Put in place a dental appointment as soon
      as you can if:
    </p>

    <ul
      style={{
        paddingLeft: "22px",
        listStyleType: "disc",
        listStylePosition: "outside",
        fontSize: "15px",
        lineHeight: "1.9",
        marginBottom: "28px",
        color: "#000",
      }}
    >
      <li>You are in pain</li>
      <li>Pain lasts longer than a day or two</li>
      <li>The pain is persistent, severe or unbearable</li>
      <li>
        When you open your mouth wide, you experience pain, a fever, or ear, jaw,
        or headaches.
      </li>
      <li>If you have difficulty breathing or swallowing</li>
      <li>Your face, cheek, or tender areas of your body may be swelled.</li>
      <li>If you’ve ever experienced a tooth infection</li>
      <li>If you’re experiencing stress, or run down</li>
    </ul>

    <h3
      style={{
        fontSize: "22px",
        fontWeight: "700",
        color: "#0a1b5c",
        marginBottom: "10px",
      }}
    >
      Are You in Pain?
    </h3>

    <p
      style={{
        fontSize: "15px",
        color: "#000",
        lineHeight: "1.7",
      }}
    >
      In pain? For fast, pain-free recovery from every type of dental infection,
      including wisdom tooth abscess treatment, contact our dental experts.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
    <img
      src={fortythree}   // replace with your imported image
      alt="Dentist consultation"
      style={{
        width: "650px",
        maxWidth: "620px",
        height: "400px",
        objectFit: "cover",
        marginTop: "30px",
        borderRadius: "20px",
      }}
    />
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 120px",
    display: "flex",
    alignItems: "flex-start",
    gap: "60px",
    backgroundColor: "#f3f7fb",
  }}
>
  {/* LEFT IMAGE */}
  <div style={{ flex: "0 0 45%" }}>
    <img
      src={fortyfour} 
      alt="Dental abscess treatment"
      style={{
        maxwidth: "620%",
        height: "420px",
        objectFit: "cover",
        borderRadius: "20px",
        marginTop: "80px",
      }}
    />
  </div>

  {/* RIGHT CONTENT */}
  <div style={{ flex: "0 0 55%" }}>
    <h2
      style={{
        fontSize: "30px",
        fontWeight: "700",
        color: "#0a1b5c",
        marginBottom: "12px",
      }}
    >
      Tooth Abscess Stages:
    </h2>

    <p
      style={{
        fontSize: "15px",
        color: "#000",
        lineHeight: "1.7",
        marginBottom: "22px",
      }}
    >
      Knowing the stages of a tooth abscess can help with early identification of
      the issue and speedy dental abscess treatment. Here’s a breakdown of the
      typical stages:
    </p>

    {/* STAGE 1 */}
    <h4 style={{ color: "#0a1b5c", fontWeight: "700", marginBottom: "6px" }}>
      Initial Infection:
    </h4>
    <p style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "18px" }}>
      Bacteria somehow get into the tooth (often by way of decay, trauma, or gum
      disease). At this point, you might experience mild discomfort or sensitivity.
    </p>

    {/* STAGE 2 */}
    <h4 style={{ color: "#0a1b5c", fontWeight: "700", marginBottom: "6px" }}>
      Pulpal Involvement:
    </h4>
    <p style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "18px" }}>
      The infection reaches the tooth’s pulp, leading to inflammation and immense
      pain. This is usually when a periapical abscess develops at the tooth’s tip.
    </p>

    {/* STAGE 3 */}
    <h4 style={{ color: "#0a1b5c", fontWeight: "700", marginBottom: "6px" }}>
      Abscess Formation:
    </h4>
    <p style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "18px" }}>
      Pus builds up at the site of infection, causing swelling and pressure in the
      gums or jaw. Pain becomes increasingly severe, and other symptoms, such as
      fever or swelling, can occur.
    </p>

    {/* STAGE 4 */}
    <h4 style={{ color: "#0a1b5c", fontWeight: "700", marginBottom: "6px" }}>
      Advanced Abscess:
    </h4>
    <p style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "18px" }}>
      The infection can extend to nearby tissues, resulting in complications such
      as facial swelling or difficulty opening the mouth.
    </p>

    {/* STAGE 5 */}
    <h4 style={{ color: "#0a1b5c", fontWeight: "700", marginBottom: "6px" }}>
      Chronic Stage
    </h4>
    <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
      Without treatment, the abscess can become chronic — it sometimes drains but
      continues to do damage. This could lead to permanent tooth loss or more
      serious infections.
    </p>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 120px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "60px",
    backgroundColor: "#ffffff",
  }}
>
  {/* LEFT CONTENT */}
  <div style={{ flex: "0 0 50%" }}>
    <h2
      style={{
        fontSize: "30px",
        fontWeight: "700",
        color: "#0a1b5c",
        marginBottom: "12px",
      }}
    >
      Causes of a Tooth Abscess:
    </h2>

    <p
      style={{
        fontSize: "15px",
        color: "#000",
        lineHeight: "1.7",
        marginBottom: "16px",
      }}
    >
      A tooth abscess occurs when bacteria infect the tooth or the gums. This may
      be due to poor oral hygiene, untreated cavities or gum disease. If left
      untreated, in the long term, it can lead to a chronic abscess tooth. Common
      causes include:
    </p>

    <ul
      style={{
        paddingLeft: "20px",
        marginBottom: "18px",
        fontSize: "15px",
        lineHeight: "1.8",
        color: "#000",
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      <li>Cavities or untreated tooth decay.</li>
      <li>Cracks or chips in the tooth that let bacteria inside.</li>
      <li>Periodontal infections or gum disease.</li>
      <li>Damage or injury to the tooth.</li>
      <li>Poor dental care and plaque accumulation.</li>
      <li>Dental procedures’ complications.</li>
    </ul>

    <p
      style={{
        fontSize: "15px",
        color: "#000",
        lineHeight: "1.7",
      }}
    >
      Early detection and treatment can easily address dental abscesses and prevent
      complications. Whether periapical abscesses or any other type, we offer the
      best treatment to restore oral health.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div style={{ flex: "0 0 45%" }}>
    <img
      src={fortyfive} 
      alt="Dental abscess consultation"
      style={{
        maxwidth: "620%",
        height: "420px",
        objectFit: "cover",
        borderRadius: "20px",
      }}
    />
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 120px",
    backgroundColor: "#f3f8fb",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "70px",
    }}
  >
    {/* LEFT IMAGE */}
    <div style={{ flex: "0 0 48%" }}>
      <img
        src={fortysix}
        alt="Dental procedure"
        style={{
          maxwidth: "620%",
          height: "420px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div style={{ flex: "0 0 50%" }}>
      <h2
        style={{
          fontSize: "30px",
          fontWeight: "700",
          color: "#0a1b5c",
          marginBottom: "14px",
        }}
      >
        Get Prepared:
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#000",
          marginBottom: "18px",
        }}
      >
        When you first have the tooth abscess treated, your dentist will want to
        know several important things so they can help you feel better.
      </p>

      <p
        style={{
          fontSize: "15px",
          fontWeight: "500",
          marginBottom: "12px",
        }}
      >
        Your dentist may ask:
      </p>

      <ul
        style={{
          paddingLeft: "20px",
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom: "18px",
          listStyleType: "disc",
          listStylePosition: "outside",
        }}
      >
        <li>When did the pain or discomfort begin?</li>
        <li>Has there been swelling or cemented into your teeth?</li>
        <li>Do you have sensitivity to hot or cold?</li>
        <li>Have you experienced any sickness symptoms?</li>
        <li>
          Do you take any medications or get any other medical treatment?
        </li>
        <li>Did you have any trauma or previous treatments recently?</li>
        <li>
          Do you have a history of dental problems, like cavities or gum disease?
        </li>
      </ul>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#000",
        }}
      >
        Your dentist will depend on you to answer these questions truthfully to
        help him with an effective abscess tooth removal procedure.
      </p>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 120px",
    backgroundColor: "#ffffff",
  }}
>
  {/* HEADING */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "700",
      color: "#0a1b5c",
      marginBottom: "40px",
    }}
  >
    FAQs
  </h2>

  {/* GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "30px",
      rowGap: "20px",
    }}
  >
    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;01. What is the treatment for a tooth abscess?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;05. Can tooth abscesses be prevented?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;02. How can I treat a tooth abscess at home?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;06. Will abscesses go away after tooth extraction?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;03. Can you smoke with an abscessed tooth?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;07. Does the tooth abscess show on the X-ray?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;04. What causes a tooth abscess?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;08. Can a dentist pull an abscessed tooth?</div>
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