import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const whatsappNumber = "917350272829";
  const whatsappMessage = encodeURIComponent("I need more information about this app");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="Brand Reply Logo" width={40} height={40} className={styles.logo} />
            <span className={styles.brandName}>Brand Reply</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="/brandreply.apk" download="brandreply.apk" className="btn btn-primary">
              Download App
            </a>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.glow}></div>
          <div className={`container ${styles.heroContainer}`}>
            <div className={`${styles.heroContent} animate-fade-in`}>
              <div className={styles.badge}>
                <i className="fa-solid fa-shield-check"></i> 100% Secure & Trusted APK
              </div>
              <h1 className={styles.heroTitle}>
                Automate Your Business Communication with <span className="text-gradient">Brand Reply</span>
              </h1>
              <p className={styles.heroDescription}>
                Never miss a lead again. Automatically send personalized SMS and WhatsApp messages to your callers after every received, missed, or disconnected call. Grow your brand effortlessly.
              </p>
              <div className={styles.heroActions}>
                <a href="/brandreply.apk" download="brandreply.apk" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', width: 'fit-content' }}>
                  <i className="fa-brands fa-android"></i> Download Secure APK
                </a>
                <p className={styles.trustText}>
                  <i className="fa-solid fa-shield"></i> Verified & Safe for your Business
                </p>
              </div>
            </div>
            <div className={`${styles.heroImageContainer} animate-float`}>
              <Image 
                src="/mockup.jpg" 
                alt="Brand Reply App Interface Mockup" 
                width={400} 
                height={800} 
                className={styles.mockupImage} 
                priority
              />
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className={styles.features}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Built for <span className="text-gradient">Business Growth</span></h2>
              <p className={styles.sectionSubtitle}>
                Brand Reply gives you the tools to automate your follow-ups, build a strong personal brand, and capture every lead automatically.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
              <div>
                <Image 
                  src="/business_owner.jpg" 
                  alt="Happy successful business owner using Brand Reply" 
                  width={600} 
                  height={600} 
                  style={{ borderRadius: '1.5rem', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', width: '100%', height: 'auto' }} 
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="glass-card" style={{ background: '#fff', border: 'none', boxShadow: 'none', padding: 0 }}>
                  <i className={`fa-brands fa-whatsapp ${styles.featureIcon}`}></i>
                  <h3 className={styles.featureTitle}>Auto WhatsApp & SMS</h3>
                  <p className={styles.featureDescription}>
                    Instantly send pre-defined messages with your business details, catalog links, and offers to every caller. Join thousands of happy business owners saving hours every day.
                  </p>
                </div>
                
                <div className="glass-card" style={{ background: '#fff', border: 'none', boxShadow: 'none', padding: 0 }}>
                  <i className={`fa-solid fa-bullhorn ${styles.featureIcon}`}></i>
                  <h3 className={styles.featureTitle}>Personal Branding</h3>
                  <p className={styles.featureDescription}>
                    Make a professional impression. Your callers receive beautifully formatted messages that showcase your brand identity.
                  </p>
                </div>

                <div className="glass-card" style={{ background: '#fff', border: 'none', boxShadow: 'none', padding: 0 }}>
                  <i className={`fa-solid fa-chart-line ${styles.featureIcon}`}></i>
                  <h3 className={styles.featureTitle}>Generate Leads</h3>
                  <p className={styles.featureDescription}>
                    Turn missed calls into potential customers. Engage them immediately before they move on to a competitor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={styles.howItWorks}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>How <span className="text-gradient">Brand Reply</span> Works</h2>
              <p className={styles.sectionSubtitle}>
                Set it up once and let the app handle your customer communications automatically in the background.
              </p>
            </div>

            <div className={styles.stepsContainer}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h3>Set Your Message Templates</h3>
                  <p>Customize your SMS and WhatsApp messages with your business name, services, links, and contact info.</p>
                </div>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h3>Receive a Call</h3>
                  <p>Whether you answer the call, miss it, or disconnect because you are busy, Brand Reply detects it instantly.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h3>Automated Reply Sent</h3>
                  <p>The app automatically triggers a WhatsApp or SMS message to the caller without you having to type anything.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerLogo}>
            <Image src="/logo.png" alt="Brand Reply Logo" width={24} height={24} />
            <span className={styles.brandName}>Brand Reply</span>
          </div>
          <p className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} Brand Reply. All rights reserved. Helping businesses grow with smart automation.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappFloat}>
        <i className="fa-brands fa-whatsapp"></i>
        <span>Chat with us</span>
      </a>
    </>
  );
}
