export function Projects() {
  return (
    <div class="featured-projects" id="projects">
      <h2>Featured Projects</h2>
      <div class="project-cards">
        <div class="project-card">
          <div class="project-icon leaf-icon">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10 Q70 30 70 50 Q70 70 50 90 Q30 70 30 50 Q30 30 50 10"
                fill="currentColor"
              />
            </svg>
          </div>
          <h3>Basil</h3>
          <p class="project-tagline">
            Simple, open-source budgeting for busy families.
          </p>
          <p>
            Take control of spending, track goals, and build healthier financial
            habits.
          </p>
          <a
            href="https://open-grove-labs.github.io/basil/"
            class="project-link"
          >
            → View project
          </a>
        </div>

        <div class="project-card">
          <div class="project-icon circle-icon">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="12" fill="currentColor" />
              <circle cx="70" cy="30" r="12" fill="currentColor" />
              <circle cx="50" cy="50" r="12" fill="currentColor" />
              <circle cx="30" cy="70" r="12" fill="currentColor" />
              <circle cx="70" cy="70" r="12" fill="currentColor" />
            </svg>
          </div>
          <h3>Smashy Keys</h3>
          <p class="project-tagline">
            A colorful keyboard-tapping playground for toddlers.
          </p>
          <p>Made for laughter, learning, and safe screen time.</p>
          <a
            href="https://open-grove-labs.github.io/smashy-keys/"
            class="project-link"
          >
            → View project
          </a>
        </div>

        <div class="project-card">
          <div class="project-icon lines-icon">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="20" y="20" width="60" height="8" fill="currentColor" />
              <rect x="20" y="40" width="50" height="8" fill="currentColor" />
              <rect x="20" y="60" width="55" height="8" fill="currentColor" />
              <rect x="20" y="80" width="45" height="8" fill="currentColor" />
            </svg>
          </div>
          <h3>Early Reader (Working Title)</h3>
          <p class="project-tagline">
            Interactive activities that help young readers build confidence, one
            step at a time.
          </p>
          <p>Coming Soon!</p>
        </div>
      </div>
    </div>
  );
}
