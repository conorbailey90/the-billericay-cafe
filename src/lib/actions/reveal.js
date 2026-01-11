// src/lib/actions/reveal.js

/**
 * Svelte action for scroll-reveal animations
 * @param {HTMLElement} node - The element to animate
 * @param {Object} options - Animation options
 * @param {number} options.delay - Delay in milliseconds (default: 0)
 * @param {number} options.duration - Animation duration in milliseconds (default: 600)
 * @param {number} options.y - Y-axis translation in pixels (default: 50)
 * @param {number} options.x - X-axis translation in pixels (default: 0)
 * @param {number} options.threshold - Intersection threshold (default: 0.1)
 * @param {boolean} options.once - Only animate once (default: true)
 */
export function reveal(node, options = {}) {
  const {
    delay = 0,
    duration = 600,
    y = 50,
    x = 0,
    threshold = 0.1,
    once = true
  } = options;

  // Set initial state
  node.style.opacity = '0';
  node.style.transform = `translate(${x}px, ${y}px)`;
  node.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
  node.style.transitionDelay = `${delay}ms`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animation
          node.style.opacity = '1';
          node.style.transform = 'translate(0, 0)';
          
          // Unobserve if once is true
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          // Reset animation if not once
          node.style.opacity = '0';
          node.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

// Example usage variations:
/*
// Basic usage
<div use:reveal>Fades in and slides up</div>

// Custom delay (stagger effect)
<div use:reveal={{ delay: 0 }}>Item 1</div>
<div use:reveal={{ delay: 100 }}>Item 2</div>
<div use:reveal={{ delay: 200 }}>Item 3</div>

// Slide from left
<div use:reveal={{ x: -50, y: 0 }}>Slides from left</div>

// Slide from right
<div use:reveal={{ x: 50, y: 0 }}>Slides from right</div>

// Longer duration
<div use:reveal={{ duration: 1000 }}>Slower animation</div>

// Higher threshold (trigger later)
<div use:reveal={{ threshold: 0.3 }}>Triggers at 30% visible</div>

// Repeat animation (not once)
<div use:reveal={{ once: false }}>Animates every time</div>
*/