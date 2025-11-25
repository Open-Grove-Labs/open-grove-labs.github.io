import "./index.css";

export function About() {
  return (
    <div class="about">
      <section class="mission-block">
        <h2>Why We Build</h2>
        <div class="mission-content">
          <p>
            Parents juggle a lot — and the software they rely on should help,
            not get in the way. We design tools that are intuitive, accessible,
            and thoughtful.
          </p>
          <p>
            Every project is created with care, built openly, and shaped by the
            needs of real families.
          </p>
        </div>
      </section>

      <section class="founder-profile">
        <h2>About Max</h2>
        <div class="founder-content">
          <div class="founder-portrait">
            <div class="portrait-placeholder">M</div>
          </div>
          <div class="founder-bio">
            <p>Hi, I'm Max — the creator of Open Grove Labs.</p>
            <p>
              I'm a senior frontend engineer and technical lead with years of
              experience building large-scale, high-impact web applications. I
              love crafting intuitive interfaces, solving hard UX problems, and
              making software feel effortless.
            </p>
            <p>
              As a parent of young kids, I'm passionate about creating tools
              that help families thrive. Open Grove Labs is where I bring those
              ideas to life through open source.
            </p>
          </div>
        </div>
      </section>

      <section class="principles">
        <h2>Our Principles</h2>
        <div class="principles-grid">
          <div class="principle-card">
            <div class="principle-icon">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <line
                  x1="50"
                  y1="15"
                  x2="50"
                  y2="35"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <line
                  x1="50"
                  y1="65"
                  x2="50"
                  y2="85"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <line
                  x1="15"
                  y1="50"
                  x2="35"
                  y2="50"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <line
                  x1="65"
                  y1="50"
                  x2="85"
                  y2="50"
                  stroke="currentColor"
                  stroke-width="4"
                />
              </svg>
            </div>
            <h3>Openness</h3>
            <p>Transparent, community-driven projects</p>
          </div>

          <div class="principle-card">
            <div class="principle-icon">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M50 20 L65 40 L50 35 L35 40 Z" fill="currentColor" />
                <rect
                  x="30"
                  y="40"
                  width="40"
                  height="35"
                  rx="3"
                  stroke="currentColor"
                  stroke-width="4"
                  fill="none"
                />
                <circle cx="50" cy="57" r="6" fill="currentColor" />
                <line
                  x1="50"
                  y1="63"
                  x2="50"
                  y2="70"
                  stroke="currentColor"
                  stroke-width="4"
                />
              </svg>
            </div>
            <h3>Careful UX</h3>
            <p>Software that supports both parents and kids</p>
          </div>

          <div class="principle-card">
            <div class="principle-icon">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="25"
                  y="30"
                  width="50"
                  height="50"
                  rx="5"
                  stroke="currentColor"
                  stroke-width="4"
                  fill="none"
                />
                <path
                  d="M35 30 L35 25 Q35 20 40 20 L60 20 Q65 20 65 25 L65 30"
                  stroke="currentColor"
                  stroke-width="4"
                  fill="none"
                />
                <line
                  x1="45"
                  y1="50"
                  x2="55"
                  y2="50"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <line
                  x1="50"
                  y1="45"
                  x2="50"
                  y2="55"
                  stroke="currentColor"
                  stroke-width="4"
                />
              </svg>
            </div>
            <h3>Privacy-First</h3>
            <p>No tracking, no ads, no hidden data collection</p>
          </div>
        </div>
      </section>
    </div>
  );
}
