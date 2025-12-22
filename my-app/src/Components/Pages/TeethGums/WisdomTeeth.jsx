import React from "react";
import { Link } from "react-router-dom";
import wisdom from "../../Images/wisdom.png";
import one from "../../Images/one.jpg";
import two from "../../Images/two.jpg";
import three from "../../Images/three.jpg";
import four from "../../Images/four.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function WisdomTeeth() {
  return (
    <>
    <div
      className="hero-section"
      style={{
  backgroundImage: `url(${wisdom})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",         // Full width of screen
  height: "350px",
        
}}
    >
      {<Link to="/TeethGums/wisdom-teeth"></Link>}
      <div className="hero-content">
        <h2>Treatments</h2>
        <h1>Wisdom Teeth Treatment in Lahore</h1>
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
    Do you experience discomfort from your wisdom teeth? It can be bothersome.
    We understand how difficult it can be. The pain caused by wisdom teeth can
    be very intense and unpredictable. Most people feel pain from their wisdom
    teeth from their late to mid-twenties. The emergence of teeth from wisdom
    teeth often leads to pain. Wisdom teeth may become impacted or stuck under
    the gums, causing gum soreness and irritation. Affected wisdom teeth can
    lead to infections and damage to surrounding teeth. Swelling, irritation,
    and intense pressure are indications that wisdom teeth removal may be
    necessary.
  </p>
</div>

<div
  style={{
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "80px",
    maxWidth: "1200px",
    margin: "80px auto",
    padding: "0 20px",
  }}
>
  {/* LEFT SIDE TEXT */}
  <div style={{ flex: 1 }}>
    <h2
      style={{
        fontSize: "32px",
        fontWeight: "700",
        color: "#0A2A7A",
        marginBottom: "20px",
      }}
    >
      Symptoms of wisdom teeth pain
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
        marginBottom: "20px",
      }}
    >
      During the eruption of wisdom teeth, discomfort or pain is common. Initial
      symptoms of wisdom teeth problems may include gum swelling, redness, and
      upper or lower jaw pain. Headaches or earaches may also arise with the
      eruption of wisdom teeth.
    </p>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
        marginBottom: "20px",
      }}
    >
      The unease in the vicinity of the wisdom tooth can vary from mild
      tenderness to pulsating, continual agony that hinders you from opening
      your mouth and brushing your teeth.
    </p>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
      }}
    >
      Ignoring impacted or extremely painful wisdom teeth may lead to dental
      caries, cavities, bleeding gums, bad breath, difficulty swallowing, severe
      pain, and even the formation of cysts that can spread the infection to
      nearby areas.
    </p>
  </div>

  {/* RIGHT SIDE IMAGE */}
  <div style={{ flex: 1 }}>
    <img
      src={one} 
      alt="Wisdom Teeth Treatment"
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 40px",
    backgroundColor: "#f1f7fd",
  }}
>
  {/* LEFT IMAGE */}
  <div style={{ flex: 1, paddingRight: "30px" }}>
    <img
      src={two}
      alt="Wisdom Teeth"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "20px",
        objectFit: "cover",
      }}
    />
  </div>

  {/* RIGHT CONTENT */}
  <div style={{ flex: 1, paddingLeft: "30px" }}>
    <h2
      style={{
        fontSize: "32px",
        color: "#0c1b3a",
        fontWeight: "700",
        marginBottom: "20px",
      }}
    >
      Causes of wisdom teeth pain
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.7",
        color: "#333",
        marginBottom: "20px",
      }}
    >
      Wisdom teeth are not linked to intelligence. Sometimes, they may need to
      be removed as they can cause annoyance and disruption. Most people have
      four wisdom teeth, but not everyone will get all four. Wisdom teeth often
      do not have sufficient space to grow properly when they erupt, resulting
      in impacted wisdom teeth. Consult with a dentist in Lahore who
      specialises in wisdom teeth treatment, such as SmileOn, is recommended.
      Effected wisdom teeth can lead to problems like:
    </p>

    <ul
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
        marginLeft: "20px",
        marginBottom: "20px",
      }}
    >
      <li>Infection</li>
      <li>Decay</li>
      <li>Cysts</li>
      <li>Damage to surrounding teeth</li>
    </ul>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.7",
        color: "#333",
      }}
    >
      Experiencing pain due to wisdom teeth is common, and there’s no need to
      be anxious. If you’re suffering from wisdom teeth pain, it’s advisable to
      seek treatment from SmileOn Lahore. Timely extraction can prevent the
      potentially severe complications associated with wisdom teeth.
    </p>
  </div>
</div>

<div style={{ textAlign: "center", padding: "60px 20px" }}>

  {/* Heading */}
  <h2
    style={{
      fontSize: "34px",
      fontWeight: "700",
      color: "#0f2b62ff",
      marginBottom: "20px",
    }}
  >
    What Next
  </h2>

  {/* Paragraph */}
  <p
    style={{
      fontSize: "18px",
      lineHeight: "1.7",
      color: "#444",
      maxWidth: "950px",
      margin: "0 auto 50px auto",
    }}
  >
    Review available treatments to learn about the next steps. We recommend
    scheduling a consultation with SmileOn Lahore, specialising in wisdom teeth
    treatment, to receive customised advice regarding your symptoms. You can
    specify that the painful tooth is wisdom and that a maxillofacial surgeon
    typically performs this treatment.
  </p>

  {/* Cards Container */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* CARD 1 */}
    <div
      style={{
        width: "330px",
        background: "#fff",
        padding: "40px 20px",
        borderRadius: "20px",
        boxShadow: "0px 6px 25px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <img
        src={three}
        alt="Oral Surgeon"
        style={{ width: "200px", marginBottom: "0px" }}
      />
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#0c1b3a",
        }}
      >
        Oral & Maxillofacial Surgeon
      </h3>
    </div>

    {/* CARD 2 */}
    <div
      style={{
        width: "330px",
        background: "#fff",
        padding: "40px 20px",
        borderRadius: "20px",
        boxShadow: "0px 6px 25px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <img
        src={four}
        alt="Wisdom Removal"
        style={{ width: "200px", marginBottom: "0px" }}
      />
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#0c1b3a",
        }}
      >
        Wisdom Teeth Removal
      </h3>
    </div>
  </div>
</div>

<div style={{ textAlign: "center", padding: "60px 20px" }}>
  {/* Heading */}
  <h2
    style={{
      fontSize: "34px",
      fontWeight: "700",
      color: "#0c1b3a",
      marginBottom: "40px",
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
      maxWidth: "1300px",
      margin: "0 auto",
    }}
  >

    {/* FAQ ITEM 1 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      01. How much does it cost to get wisdom teeth removed?
    </div>

    {/* FAQ ITEM 2 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      05. Does it hurt getting my wisdom teeth removed?
    </div>

    {/* FAQ ITEM 3 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      02. How do you make wisdom teeth pain go away?
    </div>

    {/* FAQ ITEM 4 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      06. What does wisdom teeth pain feel like?
    </div>

    {/* FAQ ITEM 5 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      03. Is it normal for wisdom teeth to hurt?
    </div>

    {/* FAQ ITEM 6 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      07. What are some home remedies for wisdom tooth pain?
    </div>

    {/* FAQ ITEM 7 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      04. How long does wisdom tooth pain last?
    </div>

    {/* FAQ ITEM 8 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      08. I'm anxious about visiting the dentist.
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
    
  );
}