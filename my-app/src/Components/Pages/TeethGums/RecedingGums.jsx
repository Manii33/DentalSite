import React from "react";
import { Link } from "react-router-dom";
import forteen from "../../Images/forteen.jpg";
import fifteen from "../../Images/fifteen.jpg";
import sixteen from "../../Images/sixteen.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function RecedingGumms() {
  return (
    <>
    <div
      className="hero-section"
      style={{
  backgroundImage: `url(${forteen})`,
  backgroundSize: "cover",
  backgroundPosition: "center 60%",
  backgroundRepeat: "no-repeat",
   transform: "scale(1)",
  width: "100%",         // Full width of screen
  height: "350px",
        
}}
    >
      {<Link to="/TeethGums/recedinggums"></Link>}
      <div className="hero-content">
        <h2>Treatments</h2>
        <h1>Receding Gums Treatment in Lahore</h1>
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
    Do you have a receding gums problem? Not to worry. Gum recession is one common dental problem that can be detected and prevented. The process of gums receding doesn’t happen fast enough that most people even realize they have the condition. Also, it can be a very common cause of tooth sensitivity.

Receding gums are risky to health because they expose the roots of the teeth and expose them to decay, infections, tooth loss or even the appearance of <span style={{ color: "#00a6ff" }}>yellow teeth</span>. In the end, everybody is recommended to see a dentist immediately for an oral health problem. If you are experiencing gum problems you need to call up the dentist and book an appointment to get the best treatment for receding gums today!
  </p>
</div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "70px",
        padding: "70px 80px",
        maxWidth: "1400px",
        margin: "auto",
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      {/* LEFT TEXT */}
      <div
        style={{
          flex: "1",
          minWidth: "350px",
        }}
      >
        <h2
          style={{
            color: "#0b1fa6",
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Symptoms of Receding Gums
        </h2>

        <p style={{ lineHeight: "1.8", marginBottom: "18px" }}>
          Though they may not feel pain at first. People with receding gums may
          find themselves to be more sensitive to tooth pain and may notice their
          teeth appear to be extended, farther from the root. Other common
          symptoms include:
        </p>

        <ul style={{ paddingLeft: "22px", lineHeight: "1.8" }}>
          <li>Fear of tooth loss</li>
          <li>
            Causes of being sensitive to hot or cold foods because of exposed
            tooth roots
          </li>
          <li>
            Concern of how the teeth should look as they agree, and where they
            should be spaced
          </li>
          <li>Bad breath</li>
          <li>Bleeding gums</li>
        </ul>

        <p style={{ marginTop: "18px", lineHeight: "1.8" }}>
          Regular dental check-ups and basic oral hygiene practices can prevent
          gum disease and{" "}
          <span style={{ color: "#00a6ff" }}>receding gums</span>. If you have gum
          problems, it is advisable to visit a dentist promptly.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div
        style={{
          flex: "1",
          minWidth: "500px",
          height: "400px",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={fifteen}
          alt="Dental checkup"
          style={{
            width: "100%",
            maxWidth: "620px",
            marginLeft: "40px",
            borderRadius: "26px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

     
    <div
      style={{
        background: "#f3f8fc",
        padding: "80px 70px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "70px",
          maxWidth: "1400px",
          margin: "auto",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <img
            src={sixteen}
            alt="Dental treatment"
            style={{
              width: "100%",
              maxWidth: "620px",
              borderRadius: "28px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <h2
            style={{
              color: "#0b1fa6",
              fontSize: "32px",
              marginBottom: "18px",
            }}
          >
            Causes of Receding Gums
          </h2>

          <p style={{ lineHeight: "1.8", marginBottom: "18px" }}>
            Gum recession can be caused by various factors including incorrect
            tooth cleaning methods. There is a common cause of gum disease
            called periodontal disease. You must look out for the receding gums
            treatment otherwise it will damage gum tissue and the supporting
            bone structure of your teeth. Other causes include:
          </p>

          <ul style={{ paddingLeft: "22px", lineHeight: "1.8" }}>
            <li>Your genes</li>
            <li>Brushing too hard or incorrectly</li>
            <li>Hormonal changes</li>
            <li>Not visiting your dentist or hygienist frequently</li>
            <li>Smoking</li>
            <li>Grinding or clenching your teeth</li>
            <li>Crooked teeth</li>
          </ul>
        </div>
      </div>
    </div>

     <div
      style={{
        padding: "80px 90px",
        maxWidth: "1400px",
        margin: "auto",
      }}
    >
      {/* TOP HEADING */}
      <h2
        style={{
          color: "#0b1fa6",
          fontSize: "34px",
          marginBottom: "18px",
        }}
      >
        Treatments to Reverse Gum Diseases
      </h2>

      <p style={{ lineHeight: "1.8", maxWidth: "1100px" }}>
        This is what leads to changes in the texture and color of gums; they
        become more sensitive and may start bleeding, and so is the case with
        tooth loss due to loss of gum tissue. However, if you are suffering from
        this, there is no way you will be able to regain more of those gums
        unless you pursue treatment for receding gums.
      </p>

      {/* TWO COLUMNS */}
      <div
        style={{
          display: "flex",
          gap: "80px",
          marginTop: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <h3
            style={{
              color: "#0b1fa6",
              fontSize: "26px",
              marginBottom: "15px",
            }}
          >
            Treatments for Early-Stage Receding Gums:
          </h3>

          <p style={{ lineHeight: "1.8" }}>
            In some instances, at the beginning of the treatment, you may be
            prescribed non-surgical therapy. These include:
          </p>

          <p style={{ lineHeight: "1.8" }}>
            <strong>Deep Cleaning:</strong> These procedures are done to reach
            subgingival plaque and calculi and will eliminate inflammation and
            cease further gingival recession.
          </p>

          <p style={{ lineHeight: "1.8" }}>
            <strong>Antibiotics:</strong> At times, your dentist may put you on
            antibiotics that would eradicate the bacteria and enable the
            controlling of gum disease.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <h3
            style={{
              color: "#0b1fa6",
              fontSize: "26px",
              marginBottom: "15px",
            }}
          >
            Treatments for Advanced Gum Recession:
          </h3>

          <p style={{ lineHeight: "1.8" }}>
            In cases where the gum recession is slightly worse, you may require
            receding gum surgery. Common surgical options include:
          </p>

          <p style={{ lineHeight: "1.8" }}>
            <strong>Gum Grafting:</strong> The exposed tooth roots are covered
            with tissue imported from another part of the mouth, or donor site.
          </p>

          <p style={{ lineHeight: "1.8" }}>
            <strong>Pinhole Surgical Technique:</strong> A procedure where
            stripped gum tissue is rolled back into position over an area of
            recession in a surgical way.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div style={{ marginTop: "70px", maxWidth: "1100px" }}>
        <h3
          style={{
            color: "#0b1fa6",
            fontSize: "26px",
            marginBottom: "15px",
          }}
        >
          Receding Gums and Dentures
        </h3>

        <p style={{ lineHeight: "1.8" }}>
          Ill-fitting dentures can also cause gum recession. It has to be a
          good fit since it is difficult to correct ill-fitted dentures without
          making the problems with the gums worse. But regular visits are just
          as important as the other adjustments you need to ensure the life of
          your dentures.
        </p>

        <p style={{ lineHeight: "1.8" }}>
          No matter whether you use non-surgical methods or receding gum surgery
          if you can stop your gum disease before it gets too out of hand, it
          will remain so.
        </p>
      </div>
    </div>

    <div style={{ padding: "80px 60px" }}>
  {/* WHAT NEXT */}
  <h2 style={{ textAlign: "center", color: "#0b1fa6", fontSize: "32px" }}>
    What Next
  </h2>

  <p
    style={{
      textAlign: "center",
      maxWidth: "900px",
      margin: "15px auto 30px",
      lineHeight: "1.7",
    }}
  >
    Hop on our website and explore more from simple treatment to receding gum
    surgery. Plan your appointment and start treating your receding gums the
    way they deserve.
  </p>

  <div style={{ textAlign: "center", marginBottom: "70px" }}>
    <button
      style={{
        background: "#28cfe8",
        border: "none",
        padding: "14px 34px",
        borderRadius: "30px",
        color: "#fff",
        cursor: "pointer",
        fontSize: "15px",
      }}
    >
      Book an Appointment
    </button>
  </div>

  {/* FAQs */}
  <h2 style={{ textAlign: "center", color: "#0b1fa6", fontSize: "30px" }}>
    FAQs
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "40px auto 0",
    }}
  >
    {[
      "01. What is the cost of receding gums treatment?",
      "02. Why do gums recede?",
      "03. What happens when your gums recede?",
      "04. What to do if my gums are receding?",
      "05. How do you stop receding gums?",
      "06. How are receding gums treated?",
      "07. How do I reverse receding gums naturally?",
      "08. Can receding gums grow back?",
      "09. Can receding gums be repaired without surgery?",
      "10. Is there any treatment for receding gums?",
    ].map((text, i) => (
      <div
        key={i}
        style={{
          background: "#6bbfbb",
          padding: "18px 22px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#57b2ad")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#6bbfbb")}
      >
        <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
        <span style={{ fontSize: "15px" }}>{text}</span>
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