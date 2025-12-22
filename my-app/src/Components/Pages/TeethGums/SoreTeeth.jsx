import React from "react";
import { Link } from "react-router-dom";
import thirtyseven from "../../Images/thirtyseven.png";
import thirtyeight from "../../Images/thirtyeight.jpg";
import thirtynine from "../../Images/thirtynine.jpg";
import forty from "../../Images/forty.jpg";
import fortyone from "../../Images/fortyone.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function SoreTeeth() {
  return (
    <>
    <div
      className="hero-section"
      style={{
  backgroundImage: `url(${thirtyseven})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  aspectRatio: "7 / 4",   
  width: "100%",         // Full width of screen
  height: "400px",
  backgroundColor: "#000",  
        
}}
    >
      {<Link to="/TeethGums/soreteeth"></Link>}
      <div className="hero-content">
        <h2>Treatments</h2>
        <h1>Sensitive Sore Teeth Treatment in Lahore</h1>
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
   Tooth sensitivity and pain can be highly uncomfortable. Fortunately, there are available remedies. Causes include tooth decay, fractures, abscesses, receding gums, and poor oral hygiene. Tooth sensitivity can vary, and it’s best to consult a dentist before it worsens. Treatment options include avoiding certain foods, using specialized toothpaste and toothbrushes, and receiving procedures such as <span style={{ color: "blue", fontWeight: "600" }}> fillings, root canals, crowns and tooth extractions</span> .
  </p>
</div>


 <div
  style={{
    width: "100%",
    padding: "100px 160px", // ⬅ increased left & right space
    display: "flex",
    backgroundColor: "#ffffff",
  }}
>
  {/* LEFT TEXT */}
  <div style={{ width: "55%" }}>
    <h2
      style={{
        fontSize: "32px",
        fontWeight: "700",
        color: "#0b1f8f",
        marginBottom: "14px",
      }}
    >
      When to See a Dentist:
    </h2>

    <p
      style={{
        fontSize: "15px",
        color: "#333",
        marginBottom: "18px",
        maxWidth: "520px",
      }}
    >
      Check it out if you’re unsure. Set up a dental appointment as soon as you
      can if:
    </p>

    <ul
      style={{
        paddingLeft: "18px",
        fontSize: "15px",
        color: "#000",
        lineHeight: "1.8",
        marginBottom: "28px",
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      <li>You are in pain</li>
      <li>Pain lasts longer than a day or two</li>
      <li>The pain is severe or unbearable</li>
      <li>
        You have a fever, earache or pain when you open your mouth wide
      </li>
    </ul>

    <h3
      style={{
        fontSize: "22px",
        fontWeight: "700",
        color: "#0b1f8f",
        marginBottom: "8px",
      }}
    >
      Are You in Pain?
    </h3>

    <p
      style={{
        fontSize: "15px",
        color: "#333",
        maxWidth: "520px",
      }}
    >
      For urgent dental care, contact us if you’re in pain. We’ll promptly
      arrange an appointment for you.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div
    style={{
      width: "45%",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src={thirtyeight} // keep your image
      alt="Dentist"
      style={{
        width: "100%",
        maxWidth: "620px",
        borderRadius: "18px",
        objectFit: "cover",
      }}
    />
  </div>
</div>

<div
      style={{
        width: "100%",
        backgroundColor: "#f4f8fb",
        padding: "70px 100px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "0 0 50%" }}>
          <img
            src={thirtynine}
            alt="Dental treatment"
            style={{
              width: "100%",
              maxWidth: "620px",
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "0 0 50%" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#0b1f8f",
              marginBottom: "18px",
            }}
          >
            Symptoms of Sensitive Teeth:
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "18px",
              maxWidth: "520px",
            }}
          >
            Pain or discomfort often signals a more severe issue. It may vary or
            worsen gradually. Chewing can cause sharp pain, while hot or cold
            liquids may increase the discomfort. Sweet or acidic foods can also
            heighten sensitivity or tooth soreness.
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              maxWidth: "520px",
            }}
          >
            Cold air or mouth breathing can sometimes worsen sensitivity or
            pain. Tooth sensitivity occurs when the inner dentin layer is
            exposed due to enamel wear on the outer layer.
          </p>
        </div>
      </div>
    </div>

    <div
      style={{
        width: "100%",
        padding: "70px 100px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: "0 0 50%" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#0b1f8f",
              marginBottom: "18px",
            }}
          >
            Causes of Teeth Grinding:
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "18px",
              maxWidth: "520px",
            }}
          >
            One of the primary causes of tooth sensitivity is unprotected dentine.
            There are several possible causes for this. Common causes include plaque
            buildup, dental decay, receding gums, chips in your tooth, and gum
            disease. Additional factors include:
          </p>

          <ul
            style={{
              paddingLeft: "20px",
              marginBottom: "18px",
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.8",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
          >
            <li>Acidic food, drink or mouthwash</li>
            <li>
              <span style={{ color: "#1ecad3", fontWeight: "600" }}>
                Bruxism
              </span>
              , or grinding and clenching your teeth
            </li>
            <li>Brushing your teeth too hard</li>
            <li>Some tooth whitening products</li>
          </ul>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              maxWidth: "520px",
            }}
          >
            To maintain good oral health, maintain regular dental and hygienist
            appointments. We all occasionally need reminders of the best oral
            hygiene practices.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: "0 0 50%" }}>
          <img
            src={forty}
            alt="Dental procedure"
            style={{
              width: "100%",
              maxWidth: "620px",
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
        backgroundColor: "#f3f8fc",
        padding: "70px 90px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "0 0 48%" }}>
          <img
            src={fortyone}
            alt="Dental patient preparation"
            style={{
              width: "100%",
              maxWidth: "620px",
              height: "auto",
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "0 0 52%" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#0b1f8f",
              marginBottom: "18px",
            }}
          >
            Get Prepared:
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#222",
              marginBottom: "16px",
            }}
          >
            When you schedule an appointment at SmileOn for sensitive or
            uncomfortable teeth, your primary goal is alleviating your suffering.
            Understanding what information your dentist will need for an accurate
            diagnosis and treatment is important. Usually, your dentist will inquire
            about your medical history before thoroughly examining your oral, dental,
            jaw, tongue, throat, sinus, ear, nose, and neck areas. Sometimes, an X-ray
            may be necessary based on your dentist’s assessment of the underlying
            cause. Your dentist will ask you questions about the pain, such as:
          </p>

          <ul
            style={{
              paddingLeft: "20px",
              marginBottom: "16px",
              fontSize: "15px",
              color: "#222",
              lineHeight: "1.8",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
          >
            <li>When did the pain start?</li>
            <li>How severe is it?</li>
            <li>Where do you feel sensitivity?</li>
            <li>What makes it worse?</li>
            <li>What makes it better?</li>
          </ul>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#222",
            }}
          >
            Before to your appointment, consider your responses to these questions.
            Preparation can hasten the diagnosis.
          </p>
        </div>
      </div>
    </div>

    <div style={{ width: "100%", padding: "80px 60px" }}>
      
      {/* WHAT NEXT */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
          color: "#0b1f8f",
          marginBottom: "10px",
        }}
      >
        What Next
      </h2>

      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "#000",
          maxWidth: "750px",
          margin: "0 auto 30px",
          lineHeight: "1.6",
        }}
      >
        Explore therapeutic strategies to gain further insight. Book a dental
        consultation for detailed information on your concerns.
      </p>

      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <button
          style={{
            backgroundColor: "#10c6e8",
            color: "#fff",
            border: "none",
            padding: "14px 34px",
            borderRadius: "30px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Book an Appointment
        </button>
      </div>

      {/* FAQs */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "700",
          color: "#0b1f8f",
          marginBottom: "40px",
        }}
      >
        FAQs
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px 30px",
        }}
      >
        {/* LEFT COLUMN */}
        <div className="faq-item">+&nbsp;&nbsp;01. How much does it cost to treat sensitive teeth?</div>
        <div className="faq-item">+&nbsp;&nbsp;04. Why are my teeth sore during spring?</div>

        <div className="faq-item">+&nbsp;&nbsp;02. Why are my teeth sore or sensitive?</div>
        <div className="faq-item">+&nbsp;&nbsp;05. I’m anxious about visiting the dentist.</div>

        <div className="faq-item">+&nbsp;&nbsp;03. How can I treat sensitive teeth?</div>
        <div className="faq-item">+&nbsp;&nbsp;06. Can sensitive teeth be prevented?</div>
      </div>

      {/* Inline style for FAQ boxes */}
      <style>
        {`
          .faq-item {
            background-color: #69bebc;
            color: #000;
            padding: 18px 22px;
            font-size: 15px;
            font-weight: 500;
            display: flex;
            align-items: center;
            cursor: pointer;
          }
        `}
      </style>
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