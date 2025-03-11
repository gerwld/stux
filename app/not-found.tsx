import Link from "next/link";
import "./globals.css"
import "./404.css"
import HeaderGradient from "@/components/HeaderGradient";

export default function Custom404() {
  return (
    <html>
      <body>
        
      <HeaderGradient withTexture/>
        <section className="page404_container">
        
          <div className="page404_wrapper">
          
            <div className="page404_content">
              <h2 className="page404_title">
                <span className="page404_srOnly">Error</span>404
              </h2>
              <p className="page404_message">
                Sorry, we couldn't find this page.
              </p>
              <p className="page404_description">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link
                rel="noopener noreferrer"
                href="/"
                className="page404_button"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}