import React from "react";
import { Link } from "react-router-dom";
import thirtytwo from "../../Images/thirtytwo.jpg";
import thirtythree from "../../Images/thirtythree.jpg";
import thirtyfour from "../../Images/thirtyfour.jpg";
import thirtyfive from "../../Images/thirtyfive.jpg";
import thirtysix from "../../Images/thirtysix.jpg";
import periodontist from "../../Images/periodontist.png";
import toothbrush from "../../Images/toothbrush.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function BadBreath() {
  return (
    <>
    <div
  className="hero-section"
  style={{
    backgroundImage: `url(${thirtytwo})`,
    backgroundSize: "cover",
    backgroundPosition: "center 50%",
    backgroundRepeat: "no-repeat",  
    width: "100%",
    height: "350px",
  }}
>
    {<Link to="/TeethGums/badbreath"></Link>}
  <div className="hero-content">
    <h2>Treatments</h2>
    <h1>Bad Breath Treatment in Lahore</h1>
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
    Jaw pain can be excruciating and disruptive to daily life. It is a common and persistent condition that can greatly impact activities like eating and speaking. The intensity of jaw pain can make it difficult to focus, and many individuals experience limitations in mouth opening, along with facial and jaw tenderness. Headaches and earaches can also accompany jaw pain.
  </p>
</div>

<div
  style={{
    width: "100%",
    padding: "90px 80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // ✅ THIS centers both items
    gap: "80px",
    backgroundColor: "#fff",
    marginLeft: "80px",
    margintop: "0px",
  }}
>
  {/* LEFT CONTENT */}
  <div
    style={{
      flex: 1,
      maxWidth: "520px",
    }}
  >
    <h2
      style={{
        color: "#0b1a6d",
        fontSize: "34px",
        marginBottom: "20px",
      }}
    >
      When to See a Dentist:
    </h2>

    <p style={{ marginBottom: "18px", lineHeight: "1.7" }}>
      Get it checked up if you are not sure. Make a dental appointment as soon as
      possible if:
    </p>

    <ul
      style={{
        paddingLeft: "20px",
        marginBottom: "30px",
        lineHeight: "1.8",
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      <li>You’ve had chronic bad breath for more than several days</li>
      <li>The smell is more pronounced or alarming</li>
      <li>Your mouth hurts, your teeth hurt</li>
      <li>Teeth bleed, or your gums are painful</li>
    </ul>

    <h3
      style={{
        color: "#0b1a6d",
        fontSize: "22px",
        marginBottom: "10px",
      }}
    >
      Are You in Pain?
    </h3>

    <p style={{ lineHeight: "1.7" }}>
      If you have severe pain and need some dental help right away, please call
      us! We’ll immediately set up an appointment to check out your halitosis.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
    <img
      src={thirtythree}
      alt="Dental examination"
      style={{
        width: "620px",
        borderRadius: "22px",
        height: "400px",
        objectFit: "cover",
      }}
    />
  </div>
</div>

<div
  style={{
    width: "100%",
    backgroundColor: "#f3f8fc",
    padding: "90px 140px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  }}
>
  {/* LEFT IMAGE */}
  <div style={{ flex: 1 }}>
    <img
      src={thirtyfour}
      alt="Dental Checkup"
      style={{
        width: "90%",
        maxWidth: "1000px",
        height: "450px",
        marginleft: "70px",
        borderRadius: "22px",
        objectFit: "cover",
      }}
    />
  </div>

  {/* RIGHT CONTENT */}
  <div
    style={{
      flex: 1,
      maxWidth: "560px",
      gap: "30px",
    }}
  >
    <h2
      style={{
        color: "#0b1a6d",
        fontSize: "34px",
        marginBottom: "20px",
      }}
    >
      Symptoms of Bad Breath:
    </h2>

    <p style={{ lineHeight: "1.7", marginBottom: "18px" }}>
      Finding bad breath symptoms yourself isn’t always easy, but most other
      people will notice it first. And if you hear about it from a trusted
      friend or family member, see that as your cue to go for bad breath
      treatment. Halitosis can also be accompanied by other symptoms that
      indicate underlying oral health issues.
    </p>

    <p style={{ fontWeight: "600", marginBottom: "10px" }}>
      Some common signs of bad breath include:
    </p>

    <ul
      style={{
        paddingLeft: "20px",
        lineHeight: "1.8",
        marginBottom: "18px",
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      <li>Foul odor from the mouth.</li>
      <li>Gums that are painful, bleeding, or swollen.</li>
      <li>
        <span style={{ color: "#00a8ff", fontWeight: "600" }}>
          Toothache
        </span>{" "}
        or sensitivity.
      </li>
      <li>Persistent bad breath for weeks.</li>
      <li>
        Problems with dentures, like discomfort or improper fit.
      </li>
    </ul>

    <p style={{ lineHeight: "1.7" }}>
      If you experience any of these symptoms, it is time to make an appointment
      for bad breath smell treatment.
    </p>
  </div>
</div>

 <div
      style={{
        width: "100%",
        backgroundColor: "#f3f8fc",
        padding: "80px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* INNER WRAPPER (THIS CENTERS CONTENT) */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "260px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: "32px",
              color: "#0b2c5d",
              marginBottom: "20px",
            }}
          >
            Reason for Bad Breath:
          </h2>

          <p style={{ lineHeight: "1.7", marginBottom: "15px" }}>
            Most bad breath starts in the mouth due to poor oral hygiene, plaque
            accumulation or gum disease. Dry mouth, dietary choices, or you may
            also experience bad breath after root canal treatment. It usually
            happens when there is an infection or if the same tooth is not
            healing properly. You have to be aware of the cause to find a
            solution. <strong>Here are a few typical causes of bad breath:</strong>
          </p>

          <ul style={{ paddingLeft: "1px", lineHeight: "1.8",
          listStyleType: "disc",listStylePosition: "outside",}}>
            <li>Poor dental habits such as not brushing and flossing regularly.</li>
            <li>Food fragments caught between teeth or along the gums.</li>
            <li>The build-up of plaque from missed dental cleanings.</li>
            <li>Gum disease, tooth decay, or dental abscesses.</li>
            <li>
              Dry mouth (xerostomia) from smoking, certain medications, or mouth
              breathing.
            </li>
            <li>Stress, snoring, hormone changes or too much booze.</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={thirtyfive}
            alt="Bad breath dental check"
            style={{
              width: "130%",
              maxWidth: "1200px",
              height: "450px",
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
        backgroundColor: "#f4f8fb",
        padding: "80px 60px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: "#0b1f66",
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            Related Treatments:
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "16px",
            }}
          >
            To identify the source of your foul breath, your dentist will
            carefully check your mouth. You might require one of these usual
            cures.
          </p>

          <ul
            style={{
              paddingLeft: "20px",
              marginBottom: "35px",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
          >
            <li style={{ color: "#00a6ff", marginBottom: "6px" }}>Filling</li>
            <li style={{ color: "#00a6ff", marginBottom: "6px" }}>
              Root canal
            </li>
            <li style={{ color: "#00a6ff" }}>Teeth Extraction</li>
          </ul>

          <h2
            style={{
              color: "#0b1f66",
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            Get Prepared:
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "18px",
            }}
          >
            Preparation can speed up the process when you go for bad breath
            dental treatment at SmileOn Dental Clinic. Your dentist will require
            this information to help identify the underlying reason so the best
            course of action can be taken. Your dentist will now take a careful
            look at your mouth, teeth, tongue, throat and sinuses and a few other
            places. They will also examine your medical history and may order an
            X-ray if needed. To maximize your visit, make sure to come ready to
            discuss the following:
          </p>

          <ul style={{ paddingLeft: "20px", marginBottom: "16px",
            listStyleType: "disc", listStylePosition: "outside",}}>
            <li style={{ marginBottom: "6px" }}>
              How long have you had bad breath?
            </li>
            <li style={{ marginBottom: "6px" }}>
              How noticeable is the odor?
            </li>
            <li style={{ marginBottom: "6px" }}>
              What did you change about your dental routine?
            </li>
            <li style={{ marginBottom: "6px" }}>
              Are there recent changes to your diet?
            </li>
            <li>Do you have any pain or other symptoms?</li>
          </ul>

          <p
            style={{
              fontSize: "14px",
              color: "#333",
              lineHeight: "1.7",
            }}
          >
            Thinking through these questions ahead of time will enable your
            dentist to diagnose the cause and recommend the appropriate solution
            quickly.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={thirtysix}
            alt="Dental Checkup"
            style={{
              width: "110%",
              maxWidth: "750px",
              height: "450px",
              marginTop: "120px",
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
    padding: "90px 40px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    boxSizing: "border-box",
  }}
>
  {/* TITLE */}
  <div
    style={{
      fontSize: "34px",
      fontWeight: "700",
      color: "#0b1f66",
      marginBottom: "10px",
    }}
  >
    What Next
  </div>

  {/* DESCRIPTION */}
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto 55px auto",
      fontSize: "15px",
      lineHeight: "1.7",
      color: "#333",
    }}
  >
    View some potential therapies to learn more about what comes next. We advise
    scheduling a dental consultation to receive detailed information concerning
    your bad breath problems. To make an appointment, call us right away or book
    online right now.
  </div>

  {/* CARDS */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* CARD 1 */}
    <div
      style={{
        width: "320px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "45px 20px",
        boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ICON */}
      <div
        style={{
          width: "90px",
          height: "90px",
          marginBottom: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <img
          src={toothbrush}
          alt="Scaling & Polishing"
          style={{
            width: "60px",
            height: "60px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* TEXT */}
      <div
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#0b1f66",
        }}
      >
        Scaling &amp; Polishing
      </div>
    </div>

    {/* CARD 2 */}
    <div
      style={{
        width: "320px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "45px 20px",
        boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ICON */}
      <div
        style={{
          width: "90px",
          height: "90px",
          marginBottom: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={periodontist}
          alt="Periodontist Services"
          style={{
            width: "60px",
            height: "60px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* TEXT */}
      <div
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#0b1f66",
        }}
      >
        Periodontist Services
      </div>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "90px 40px",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  }}
>
  {/* HEADING */}
  <div
    style={{
      textAlign: "center",
      fontSize: "34px",
      fontWeight: "700",
      color: "#0b1f66",
      marginBottom: "50px",
    }}
    >
    FAQs
  </div>

  {/* FAQ GRID */}
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
      "01. Can ulcers cause bad breath?",
      "02. How to get rid of bad breath permanently?",
      "03. What causes bad breath from the stomach?",
      "04. Which habit helps avoid bad breath?",
      "05. Does a dead tooth make your breath stink?",
      "06. How to eliminate bad breath for good?",
      "07. Can a loose tooth make your breath smell bad?",
      "08. Why do I have bad breath even after brushing?",
    ].map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "#6cc1bc",
          padding: "18px 22px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {/* PLUS ICON */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#000",
          }}
        >
          +
        </div>

        {/* QUESTION */}
        <div
          style={{
            fontSize: "15px",
            color: "#000",
          }}
        >
          {item}
        </div>
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