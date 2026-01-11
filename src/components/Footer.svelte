<script>
    import Container from "./Container.svelte";
</script>

<footer>
    <Container>
        <div class="footer-content">
            <div class="brand">
                <h1>The Billericay</h1>
              <div class="social-links">
                <a href="https://www.facebook.com/profile.php?id=61557271212456" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                    </svg>
                </a>
                <a href="https://instagram.com/thebillericay" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                </a>
            </div>
            </div>

            <div class="footer-links">
                <div class="link-group">
                    <h4>Visit Us</h4>
                    <ul>
                        <li><a href="#location">High Street, Billericay</a></li>
                        <li><a href="#hours">Open 7 Days a Week</a></li>
                        <li><a href="#hours">7:00 AM - 5:00 PM</a></li>
                    </ul>
                </div>

                <div class="link-group">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="tel:+441234567890">01234 567 890</a></li>
                        <li><a href="mailto:hello@thebillericay.co.uk">hello@thebillericay.co.uk</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© {new Date().getFullYear()} The Billericay. All rights reserved.</p>
        </div>
    </Container>
</footer>

<style>
    footer {
        position: relative;
        background: #000000;
        padding: 4rem 0 2rem;
        display: flex;
        justify-content: center;
    }

    .footer-content {
        grid-column: span 12;
        display: grid;
        grid-template-columns: 4fr 8fr;
        gap: 4rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 2rem;
    }

    h1{
        text-transform: uppercase;
          font-family: "PT Sans Narrow", sans-serif;
          margin-bottom: 1rem;
          font-size: 2rem;
    }

    .footer-links {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .link-group h4 {
        font-size: 0.85rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5);
        margin: 0 0 1.5rem;
        font-weight: 500;
    }

    .link-group ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .link-group li {
        margin-bottom: 0.75rem;
    }

    .link-group a {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        font-size: 0.95rem;
        transition: color 0.3s ease;
    }

    .link-group a:hover {
        color: #ffffff;
    }

    .footer-bottom {
        grid-column: span 12;
        text-align: center;
    }

    .footer-bottom p {
        color: rgba(255, 255, 255, 0.4);
        font-size: 0.9rem;
        margin: 0;
    }

    @media (max-width: 968px) {
        footer {
            padding: 3rem 0 2rem;
        }

        .footer-content {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        .footer-links {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    @media (max-width: 640px) {
     
        .link-group h4 {
            font-size: 0.8rem;
            margin-bottom: 1rem;
        }
    }
</style>