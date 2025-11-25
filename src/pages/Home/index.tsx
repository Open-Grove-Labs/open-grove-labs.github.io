import { useState } from 'preact/hooks';
import './style.css';
import { Footer } from '../../components/Footer'
import { Projects } from '../../components/Projects';
import { About } from '../../components/About';

export function Home() {
	const [isAboutOpen, setIsAboutOpen] = useState(false);

	return (
		<div class="home">
			{/* About Button */}
			<button 
				class="about-button" 
				onClick={() => setIsAboutOpen(true)}
				aria-label="About Open Grove Labs"
			>
				?
			</button>

			{/* About Modal */}
			{isAboutOpen && (
				<div class="modal-overlay" onClick={() => setIsAboutOpen(false)}>
					<div class="modal-content" onClick={(e) => e.stopPropagation()}>
						<button 
							class="modal-close" 
							onClick={() => setIsAboutOpen(false)}
							aria-label="Close"
						>
							×
						</button>
						<About />
					</div>
				</div>
			)}

			{/* Hero Section */}
			<section class="hero">
				<h1>Open Source Tools for Modern Families</h1>
				<p class="hero-subheadline">
					Practical open-source apps for parents and their kids — thoughtfully designed, privacy-first, and free forever.
				</p>
				<div class="hero-cta">
					<a href="#projects" class="btn-primary">Explore Projects</a>
					<a href="https://github.com/Open-Grove-Labs" class="btn-secondary" target="_blank" rel="noopener noreferrer">
						View on GitHub →
					</a>
				</div>
			</section>

			{/* Featured Projects */}
			<Projects />

			{/* Mission Statement */}
			<section class="mission">
				<h2>Our Mission</h2>
				<div class="mission-text">
					<p>We build open, accessible tools that solve real problems for parents.</p>
					<p>Every app is crafted with care — designed to be simple, reliable, and delightful to use.</p>
					<p>No ads, no data harvesting, no dark patterns.</p>
					<p>Just useful software for everyday family life.</p>
				</div>
			</section>

			{/* Highlight Strip */}
			<section class="highlight-strip">
				<h3>Designed with Care</h3>
				<div class="highlights">
					<div class="highlight-item">
						<span class="highlight-icon">✓</span>
						<p>Open source by default</p>
					</div>
					<div class="highlight-item">
						<span class="highlight-icon">✓</span>
						<p>Thoughtful UX for both kids and adults</p>
					</div>
					<div class="highlight-item">
						<span class="highlight-icon">✓</span>
						<p>Privacy-first design on every project</p>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
