import './Footer.css';

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="company">
          <p>
            Created by: efmomoh&nbsp;
            <a
              href="https://github.com/efmomoh/math-magician/blob/create-full-website-with-router/MIT.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT LICENSED
            </a>
            &nbsp; &copy; 2023 EFM Reserved Rights.
          </p>
        </div>
        <div className="media-container">
          <span className="connect">Let&apos;s Connect</span>
          <div className="media">
            <a
              href="https://web.facebook.com/efmomoh"
              target="_blank"
              rel="noopener noreferrer"
            >
              FaceBook
            </a>
            <a
              href="https://www.linkedin.com/in/efmomoh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/efmomoh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/efmomoh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twiter
            </a>
            <a
              href="https://app.slack.com/client/T47CT8XPG/D04KXU6HWUS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Slack
            </a>
            <a
              href="https://github.com/efmomoh"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
