import React from "react";
import { Link } from "react-router-dom";
import twentythree from "../../Images/twentythree.jpg";
import twentyfour from "../../Images/twentyfour.jpg";
import twentyfive from "../../Images/twentyfive.jpg";
import twentyeight from "../../Images/twentyeight.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function TeethGrinding() {
  return (
    <>
    <div
  className="hero-section"
  style={{
    backgroundImage: `url(${twentythree})`,
    backgroundSize: "cover",
    backgroundPosition: "center 70%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "350px",
  }}
>
    {<Link to="/TeethGums/teethgrinding"></Link>}
  <div className="hero-content">
    <h2>Treatments</h2>
    <h1>Teeth Grinding Treatment in Lahore</h1>
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
    Bruxism, or teeth grinding, is the act of clenching, grinding, or gnashing your teeth. It can range from barely bothersome to highly uncomfortable. Timely treatment may be necessary to prevent permanent damage. Awake bruxism occurs when you unknowingly clench your teeth while awake, while sleep bruxism happens during sleep. Minor teeth grinding may not require treatment, but prolonged grinding can lead to significant tooth damage. Long-term bruxism can result in migraines, jaw problems, tooth wear and fractures.
  </p>
</div>

<div
  style={{
    width: "100%",
    background: "#F4F9FC",
    padding: "80px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "60px",
      padding: "0 40px",
    }}
  >
    {/* LEFT CONTENT */}
    <div style={{ flex: 1 }}>
      <h2
        style={{
          color: "#0B1C6D",
          fontSize: "32px",
          fontWeight: "600",
          marginBottom: "15px",
        }}
      >
        When to See a Dentist:
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom: "15px",
        }}
      >
        If in doubt, check it out. Book an appointment to see a dentist as soon
        as possible if:
      </p>

      <ul
        style={{
          paddingLeft: "20px",
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom: "15px",
        }}
      >
        <li>You have pain that lasts longer than a day or two</li>
        <li>Your pain is severe or starts to become unbearable</li>
        <li>
          You have a fever, earache or pain when you open your mouth wide
        </li>
        <li>You have chipped or loose teeth</li>
        <li>You are concerned about teeth clenching or grinding</li>
      </ul>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
        }}
      >
        Contact us immediately if you're in pain and require emergency dental
        care. We'll prioritise your urgent appointment to provide prompt
        assistance.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div style={{ flex: 1, textAlign: "right" }}>
      <img
        src={twentyfour}
        alt="Dentist Consultation"
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
    background: "#F4F9FC",
    padding: "80px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "60px",
      padding: "0 40px",
    }}
  >
    {/* LEFT IMAGE */}
    <div style={{ flex: 1 }}>
      <img
        src={twentyfive}
        alt="Teeth Grinding Symptoms"
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div style={{ flex: 1 }}>
      <h2
        style={{
          color: "#0B1C6D",
          fontSize: "32px",
          fontWeight: "600",
          marginBottom: "15px",
        }}
      >
        Symptoms of Teeth Grinding
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom: "15px",
        }}
      >
        If your condition is mild, you may not be aware that you are grinding
        your teeth. It might be that a friend or family member notices it first.
        Or perhaps symptoms of bruxism are seen by your dentist during a routine
        appointment. Some signs and symptoms that you may have bruxism include:
      </p>

      <ul
        style={{
          paddingLeft: "20px",
          fontSize: "15px",
          lineHeight: "1.9",
        }}
      >
        <li>Clenching or grinding your teeth, either awake or asleep</li>
        <li>
          <span style={{ color: "#00AEEF" }}>
            Fractured or chipped teeth
          </span>
        </li>
        <li>Tooth loss</li>
        <li>
          Flattened teeth or{" "}
          <span style={{ color: "#00AEEF" }}>worn teeth</span> and enamel,
          exposing deeper layers of your tooth
        </li>
        <li>Increased tooth pain or sensitive teeth</li>
        <li>
          Tired or tight jaw muscles, or a locked jaw that won’t open or close
          completely
        </li>
        <li>Pain or soreness in your jaw, neck, face or ears</li>
        <li>Headaches</li>
        <li>Damage from chewing on the inside of your cheek</li>
        <li>Disrupted sleep</li>
      </ul>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    background: "#FFFFFF",
    padding: "80px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "60px",
      padding: "0 40px",
    }}
  >
    {/* LEFT CONTENT */}
    <div style={{ flex: 1 }}>
      <h2
        style={{
          color: "#0B1C6D",
          fontSize: "32px",
          fontWeight: "600",
          marginBottom: "15px",
        }}
      >
        Causes of Teeth Grinding
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom: "15px",
        }}
      >
        There are a number of reasons bruxism can occur. It’s sometimes caused by
        excess stress or anxiety. Heightened emotions such as anger, frustration
        or tension can also trigger it. Teeth grinding may also develop as a
        coping strategy during periods of concentration. If you have sleep
        bruxism, it is more likely to be caused by an abnormal bite,{" "}
        <span style={{ color: "#00AEEF" }}>missing teeth</span>, or{" "}
        <span style={{ color: "#00AEEF" }}>crooked teeth</span>. Or it might be
        due to a sleep disorder such as sleep apnoea. There are some risk factors
        that may increase your chance of developing bruxism. These include:
      </p>

      <ul
        style={{
          paddingLeft: "20px",
          fontSize: "15px",
          lineHeight: "1.9",
        }}
      >
        <li>Increased stress, anxiety or frustration</li>
        <li>
          Age – bruxism is common in young children and generally lessens by
          adulthood
        </li>
        <li>
          Personality type – being aggressive, competitive or hyperactive may
          increase your risk
        </li>
        <li>
          Medications – it may be an uncommon side effect of some medications
          including some antidepressants
        </li>
        <li>Family history – sleep bruxism often occurs in families</li>
        <li>
          Other disorders – bruxism can be associated with some mental health and
          medical disorders including Parkinson’s disease, dementia,
          gastroesophageal reflux disorder (GERD), epilepsy, night terrors, and
          sleep-related disorders such as{" "}
          <span style={{ color: "#00AEEF" }}>sleep apnoea</span>
        </li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <div style={{ flex: 1 }}>
      <img
        src={twentyfive}
        alt="Dental checkup"
        style={{
          width: "100%",
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
          gap: "60px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1" }}>
          <img
            src={twentyeight}
            alt="Dental Treatment"
            style={{
              width: "100%",
              height: "500px",
              marginTop: "120px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "1.2" }}>
          <h2
            style={{
              color: "#0a1c74",
              fontSize: "28px",
              marginBottom: "10px",
            }}
          >
            Related Treatments
          </h2>

          <p style={{ marginBottom: "15px", lineHeight: "1.7" }}>
            Your dentist will scrutinise your mouth to diagnose the cause of your
            pain or condition. You may need one of these standard treatments.
          </p>

          <ul style={{ marginLeft: "20px", marginBottom: "30px" }}>
            <li style={{ marginBottom: "8px", color: "#00a8e8" }}>Filling</li>
            <li style={{ marginBottom: "8px", color: "#00a8e8" }}>Root canal</li>
            <li style={{ marginBottom: "8px", color: "#00a8e8" }}>TMJ</li>
            <li style={{ marginBottom: "8px", color: "#00a8e8" }}>
              Teeth Extraction
            </li>
          </ul>

          <h2
            style={{
              color: "#0a1c74",
              fontSize: "26px",
              marginBottom: "10px",
            }}
          >
            Get Prepared
          </h2>

          <p style={{ lineHeight: "1.7", marginBottom: "15px" }}>
            When scheduling a check-up or treatment at our dental practices,
            efficiency is important. It’s beneficial to anticipate the
            information your dentist will require for diagnosis and treatment.
          </p>

          <p style={{ lineHeight: "1.7", marginBottom: "15px" }}>
            Typically, your dentist will inquire about your medical history and
            perform a comprehensive examination of your oral and facial areas.
            This includes the mouth, teeth, gums, jaw, tongue, throat, sinuses,
            ears, nose, and neck. Depending on the suspected cause of your issue,
            an X-ray may also be necessary.
          </p>

          <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
            <li>Are you experiencing any pain?</li>
            <li>How severe is the pain?</li>
            <li>Where do you feel the pain?</li>
            <li>What is your regular dental routine?</li>
            <li>What is your diet like?</li>
            <li>Are you experiencing any extra stress?</li>
            <li>What is your lifestyle like?</li>
            <li>Do you suffer from anxiety?</li>
          </ul>

          {/* FINAL TEXT */}
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Before your appointment, consider your responses to these questions.
            Being prepared can expedite the diagnosis.
          </p>
        </div>
      </div>
    </div>

    <div
  style={{
    width: "100%",
    padding: "80px 60px",
    boxSizing: "border-box",
    background: "#ffffff",
  }}
>
  {/* HEADING */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "32px",
      color: "#0a1c74",
      marginBottom: "50px",
    }}
  >
    FAQs
  </h2>

  {/* FAQ GRID */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "25px 30px",
    }}
  >
    {/* LEFT COLUMN */}
    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>01. How much does it cost to treat bruxism?</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>05. How do you treat bruxism caused by tooth problems?</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>02. Is teeth grinding common?</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>06. I’m anxious about visiting the dentist.</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>03. What causes teeth grinding?</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>07. Can bruxism be prevented?</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>04. How can I stop grinding my teeth?</span>
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