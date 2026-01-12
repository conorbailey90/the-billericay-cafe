<script>
    import Container from "./Container.svelte";
    
    const testimonials = [
        {
            quote: "The best coffee and milkshakes in Billericay – hands down. It's our go-to spot for a quick catch-up with that real community feel.",
            cite: "Sarah J."
        },
        {
            quote: "Those bagels are a game-changer. Fresh, flavorful, and paired with their speciality brews? Perfection every time.",
            cite: "Mike T."
        },
        {
            quote: "Love the indulgent ice creams and the warm vibe. Feels like family here – we'll be back tomorrow!",
            cite: "Emma L."
        },
        {
            quote: "Absolutely love this place! The coffee is always perfect and the staff are so welcoming. Can't start my day without it.",
            cite: "James R."
        },
        {
            quote: "The sourdough is incredible and the cakes are to die for. Such a lovely atmosphere too.",
            cite: "Rachel K."
        },
        {
            quote: "Best flat white I've had outside of London. The attention to detail in every cup is amazing.",
            cite: "David M."
        },
        {
            quote: "My kids love the milkshakes and I love the coffee. Perfect spot for the whole family.",
            cite: "Lisa W."
        },
        {
            quote: "Great place to work from with excellent WiFi and even better coffee. The pastries are a bonus!",
            cite: "Tom H."
        },
        {
            quote: "The breakfast bagels are unbeatable. Fresh, tasty, and always served with a smile.",
            cite: "Sophie B."
        },
        {
            quote: "Such a gem on the High Street. Quality ingredients, friendly service, and a cozy atmosphere.",
            cite: "Chris P."
        }
    ];
</script>

<section id="testimonials">
    
    <Container>
        <div class="header">
            <span class="label">Testimonials</span>
            <h2>What Our Customers Say</h2>
        </div>
           <div class="overlay_1"></div>
        <div class="overlay_2"></div>
        
        <div class="slider-container">
         
            <div class="slider-track">
                {#each testimonials as testimonial}
                    <div class="testimonial-tile">
                        <blockquote>{testimonial.quote}</blockquote>
                        <cite>&mdash; {testimonial.cite}</cite>
                    </div>
                {/each}
                {#each testimonials as testimonial}
                    <div class="testimonial-tile">
                        <blockquote>{testimonial.quote}</blockquote>
                        <cite>&mdash; {testimonial.cite}</cite>
                    </div>
                {/each}
            </div>
        </div>
    </Container>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        padding: 4rem 0;
        background: #111111;
    }

    .header {
        grid-column: 1 / -1;
        text-align: center;
        margin-bottom: 4rem;
    }

    .label {
        display: block;
        font-size: 0.85rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 1.5rem;
    }

    h2 {
        font-family: "PT Sans Narrow", sans-serif;
        text-transform: uppercase;
        font-size: clamp(2rem, 4vw, 3rem);
        text-wrap: balance;
        margin: 0;
        line-height: 1.2;
        color: #fff;
    }

    .slider-container {
        position: relative;
        grid-column: 1 / -1;
        overflow: hidden;

    }

  .slider-track {
    display: flex;
    /* Use max-content to ensure the track takes full width of children */
    width: max-content; 
    animation: infiniteSlide 40s linear infinite;
    /* Ensure gap is consistent */
    gap: 1rem;
    will-change: transform;
}
    .slider-track:hover {
        animation-play-state: paused;
    }
    .overlay_1{
        position: absolute;
        left: 0;
        top: 0;
        width: 100px;
        height: 100%;
        background: linear-gradient(to right, #111111, transparent);
        z-index: 69;
    }

     .overlay_2{
        position: absolute;
        right: 0;
        top: 0;
        width: 100px;
        height: 100%;
        background: linear-gradient(to right, transparent, #111111);
        z-index: 9;

    }

   @keyframes infiniteSlide {
    0% {
        transform: translateX(0);
    }
    100% {
        /* Move by exactly half the track's width */
        /* To be pixel-perfect including the gap, we subtract half a gap */
        transform: translateX(calc(-50% - 0.5rem));
    }
}

    .testimonial-tile {
        flex: 0 0 320px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 2rem;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       
    }

    blockquote {
        font-size: 1rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.9);
        font-style: italic;
        margin: 0 0 1rem;
        flex-grow: 1;
    }

    cite {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.6);
        font-style: normal;
        text-align: right;
        align-self: flex-end;
    }

    @media (max-width: 968px) {
         section {
            padding: calc(80px + 2rem) 0 4rem;
        }

        .header {
            margin-bottom: 3rem;
        }

        .testimonial-tile {
            flex: 0 0 280px;
            padding: 1.5rem;
            height: 180px;
        }

        blockquote {
            font-size: 0.95rem;
        }

        .slider-track {
    
            gap: 1rem;
        }
    }

    @media (max-width: 640px) {
      

        .label {
            font-size: 0.75rem;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 2rem;
        }

        .testimonial-tile {
            flex: 0 0 calc(100vw - 4rem);
            max-width: 300px;
            height: 160px;
            padding: 1.25rem;
            margin: 0 auto;
        }

        blockquote {
            font-size: 0.9rem;
            line-height: 1.4;
        }

        cite {
            font-size: 0.85rem;
        }

        .slider-track {
           
            gap: 1rem;
        }
    }
</style>