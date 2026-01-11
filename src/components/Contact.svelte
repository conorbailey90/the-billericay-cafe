<script>
    import { reveal } from "$lib/actions/reveal";
    import Container from "./Container.svelte";
</script>

<section id="contact">
    <Container>
        <div use:reveal class="contact-header">
            <span class="label">Visit Us</span>
            <h2>Where To Find Us</h2>
        </div>

      
            <div use:reveal class="info">
                <div class="info-block">
                    <h3>Address</h3>
                    <p>134 High Street<br>Billericay<br>Essex</p>
                </div>

                <div class="info-block">
                    <h3>Opening Hours</h3>
                    <p>Monday – Sunday<br>7:00 AM – 5:00 PM</p>
                    <p class="highlight">Open 7 days a week</p>
                </div>

                <div class="info-block">
                    <h3>Contact</h3>
                    <p>
                        <a href="tel:+441234567890">01277 715972</a><br>
                        <a href="mailto:hello@thebillericay.co.uk">hello@thebillericay.co.uk</a>
                    </p>
                </div>

                <div class="info-block">
                    <h3>Getting Here</h3>
                    <p>Parking available nearby<br>Easy access by car or train</p>
                </div>
            </div>

            <div use:reveal class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19816.10336676104!2d0.37825584411620755!3d51.62297247019971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c1c879a571eb%3A0x70761ddc6740055!2sThe%20Billericay!5e0!3m2!1sen!2suk!4v1768063204439!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="The billericay Location"></iframe>
            
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

    .contact-header {
        grid-column: span 12;
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
        margin: 0;
        line-height: 1.2;
    }

    .info {
        grid-column: span 5;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .info-block h3 {
        font-size: 0.85rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5);
        margin: 0 0 1rem;
        font-weight: 500;
    }

    .info-block p {
        font-size: 1.05rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
    }

    .info-block a {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .info-block a:hover {
        color: #ffffff;
    }

    .highlight {
        margin-top: 0.75rem;
        color: #ffffff;
        font-weight: 500;
    }

    .map {
        grid-column: 7 / span 6;
        min-height: 400px;
        border-radius: 10px;
        overflow: hidden;
        border: 2px solid #000000;
    }

    .map iframe {
        display: block;
    }

    @media (max-width: 968px) {
         section {
            padding: calc(80px + 2rem) 0 4rem;
        }

        .info {
            grid-column: span 12;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .map {
            margin-top: 1rem;
            grid-column: 1 / span 12;
            min-height: 400px;
        }
    }

    @media (max-width: 640px) {
      

        .contact-header {
            margin-bottom: 3rem;
        }

        .info {
            gap: 2rem;
        }

        .info-block h3 {
            font-size: 0.8rem;
        }

        .info-block p {
            font-size: 1rem;
        }

        .map {
            min-height: 350px;
        }
    }
</style>