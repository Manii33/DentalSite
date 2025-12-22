import React from "react";
import { Link } from "react-router-dom";
import five from "../../Images/five.png";
import six from "../../Images/six.png";
import seven from "../../Images/seven.jpg";
import eight from "../../Images/eight.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function BrokenChippedTeeth() {
  return (
    <>
<div
      className="hero-section"
   style={{
  backgroundImage: `url(${five})`,
  backgroundSize: "cover 80%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
}}


    >
      {<Link to="/TeethGums/broken-chiped-teeth"></Link>}
      <div className="hero-content">
        <h2>Treatments</h2>
        <h1>Broken Tooth Treatment in Lahore</h1>
      </div>
    </div><br/>
  
    <div
  style={{
    maxWidth: "1000px",
    margin: "40px auto",
    padding: " 20px",
    lineHeight: "1.8",
    fontSize: "18px",
    color: "#333",
    textAlign: "justify",
  }}
>
  <p>
    A broken tooth is stressful and uncomfortable, but you don’t have to face it alone. Our professional dentists provide effective treatment for your teeth. Our specialists help you with broken teeth treatment, giving procedures that can rebuild your smile and eliminate pain. Whether you have a minor chip or crack, a deep chip or any form of sensitivity, we employ modern technology to get the best service done in the shortest time possible.
Call <b>SmileOn</b> now for professional dental services, including cracked tooth syndrome treatment, broken tooth pain treatment and more. Keep smiling because your smile is worthy of the best.
  </p>
</div>

<div
  style={{
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "60px 40px",
    gap: "40px",
  }}
>
  {/* LEFT SECTION */}
  <div style={{ flex: 1, maxWidth: "50%" }}>
    <h2
      style={{
        fontSize: "36px",
        fontWeight: "700",
        color: "#10254fff",
        marginBottom: "20px",
      }}
    >
      Causes of a Broken Tooth
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.7",
        color: "#333",
        marginBottom: "20px",
      }}
    >
      A crack within a tooth can occur for many causes, either through an
      accident or due to our daily practices. Here are some common reasons
      for a broken tooth:
    </p>

    {/* BULLET POINTS */}
    <ul style={{ fontSize: "18px", lineHeight: "1.8", color: "#222" }}>
      <li>Chewing hard foods</li>
      <li>Accidents or falls</li>
      <li>Grinding teeth at night</li>
      <li>Tooth decay</li>
      <li>Weak or old fillings</li>
      <li>Accident (sports-related, falls)</li>
      <li>Biting nails or ice</li>
    </ul>
  </div>

  {/* RIGHT IMAGE */}
  <div style={{ flex: 1, maxWidth: "50%" }}>
    <img
      src={six}
      alt="Dentist treating patient"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "20px",
        objectFit: "cover",
      }}
    />
  </div>
</div>

<div
  style={{
    backgroundColor: "#eef5fb",
    padding: "80px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
  }}
>
  {/* LEFT IMAGE */}
  <div style={{ flex: 1 }}>
    <img
      src={seven}
      alt="Dental check"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "30px",
        objectFit: "cover",
      }}
    />
  </div>

  {/* RIGHT TEXT */}
  <div style={{ flex: 1, paddingRight: "20px" }}>
    <h2
      style={{
        fontSize: "36px",
        fontWeight: "700",
        color: "#0c1b3a",
        marginBottom: "20px",
      }}
    >
      Symptoms of Chipped or Broken Teeth
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
        marginBottom: "20px",
        maxWidth: "650px",
      }}
    >
      It is thus helpful to understand some of the symptoms you are likely to
      experience with a broken tooth so that you can seek treatment immediately.
      Here are the common signs to watch for:
    </p>

    <ul
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#222",
        paddingLeft: "20px",
      }}
    >
      <li>Pain when chewing or biting</li>
      <li>Sensitivity to hot, cold, or sweet food</li>
      <li>Inflammation or pain in the region of the tooth</li>
      <li>Visible cracks or chips</li>
      <li>Continuous pain or stinging pain</li>
    </ul>
  </div>
</div>

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
          Broken Tooth Repair Options
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "20px",
            maxWidth: "750px",
          }}
        >
          At SmileOn Dental Clinic, we provide various treatments for broken,
          damaged or cracked teeth. Whether you want broken tooth pain treatment
          or need a smile makeover, our experts will recommend the best option
          based on your situation. <br />
          Our treatment options include:
        </p>

        <ul
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#222",
            paddingLeft: "20px",
            maxWidth: "750px",
          }}
        >
          <li>
            <strong>Dental Fillings</strong> — this procedure is best suited for
            minor chipped or cracked sections of a tooth; fillings will restore
            the strength of the offending tooth.
          </li>

          <li>
            <strong>Dental Bonding</strong> — A speedy and cheap chipped tooth
            treatment; bonding utilizes resin material named dental bonding
            material.
          </li>

          <li>
            <strong>Dental Crowns</strong> — When cracks or fractures extend
            deep, crowns encircle the whole tooth. It provides the support it
            needs as well as produces the look.
          </li>

          <li>
            <strong>Veneers</strong> — Designed for broken front tooth repair,
            veneers enhance the tooth’s appearance and strength.
          </li>

          <li>
            <strong>Root Canal Treatment</strong> — For a case where decay goes
            deeper and touches the pulp, a root canal is required to relieve
            pain and avoid worsening.
          </li>

          <li>
            <strong>Tooth Extraction</strong> — In cases where the tooth cannot
            be saved, it is removed. The lost tooth is later restored with
            implants or a bridge.
          </li>
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div style={{ flex: 1 }}>
        <img
          src={eight}
          alt="Repair Options"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "30px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

    <div style={{ width: "100%", textAlign: "center", paddingTop: "40px" }}>
      {/* Heading */}
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#0c1b3a",
          marginBottom: "10px",
        }}
      >
        What Next
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.7",
          maxWidth: "900px",
          margin: "0 auto",
          color: "#333",
        }}
      >
        Expert staff enables you to get the most appropriate cracked tooth
        treatment for a long time. Find yourself another day without fixing your
        smile? Make an appointment today!
      </p>

      {/* Button */}
      <button
        style={{
          marginTop: "25px",
          padding: "15px 40px",
          borderRadius: "40px",
          border: "2px solid #00aab5",
          background: "#00c8d2",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Book an Appointment
      </button>

      {/* FAQs Heading */}
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#0c1b3a",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        FAQs
      </h2>

      {/* FAQ GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "0 150px 60px",
        }}
      >
        {[
          "01. How to treat a cracked tooth?",
          "02. What happens if one of the front teeth is chipped?",
          "03. Can you replace tooth enamel?",
          "04. Can broken or chipped teeth be prevented?",
          "05. What is the price to get a chipped tooth repaired?",
          "06. What is the treatment for a fractured tooth?",
          "07. What are the measures you take when you have a broken tooth?",
          "08. Are there any home remedies for a broken tooth?",
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#57b7b7",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            {/* Plus icon */}
            <span
              style={{
                fontSize: "22px",
                fontWeight: "900",
                marginTop: "-3px",
              }}
            >
              +
            </span>

            {/* Question */}
            <span style={{ fontSize: "18px", color: "#0c1b3a" }}>{item}</span>
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