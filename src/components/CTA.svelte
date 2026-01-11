<script>
    import { reveal } from "$lib/actions/reveal";
    import Container from "./Container.svelte";
</script>

<section id="visit">
    <Container>
        <div use:reveal class="cta-content">
            <h2>Visit Us Today</h2>
            <p>Experience the best coffee, bagels, and community vibes in Billericay. We can't wait to serve you.</p>
            <div class="cta-buttons">
                <a href="#contact" class="btn-primary">Find Us</a>
                <a href="#menu" class="btn-secondary">View Menu</a>
            </div>
        </div>
    </Container>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        padding: 6rem 0;
        background: #111111;
        position: relative;
        overflow: hidden;
    }

    section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/images/sourdough.avif');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 0;
    }

    section::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    .cta-content {
        grid-column: 1 / -1;
        text-align: center;
        position: relative;
        z-index: 2;
    }

    h2 {
        font-family: "PT Sans Narrow", sans-serif;
        text-transform: uppercase;
        font-size: clamp(2.5rem, 5vw, 4rem);
        margin: 0 0 1.5rem;
        line-height: 1.2;
        color: #fff;
    }

    p {
        font-size: clamp(1.1rem, 2vw, 1.25rem);
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.8);
        margin: 0 auto 3rem;
        max-width: 600px;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn-primary,
    .btn-secondary {
        padding: 1rem 2.5rem;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-radius: 10px;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
        border: 2px solid #000000;
    }

    .btn-primary {
        background: #fff;
        color: #111111;
    }

    .btn-primary:hover {
        background: rgba(255, 255, 255, 0.9);
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
    }

    .btn-secondary {
        background: transparent;
        color: #fff;
        border-color: rgba(255, 255, 255, 0.3);
    }

    .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-2px);
    }

    @media (max-width: 968px) {
        section {
            padding: 5rem 0;
        }

        p {
            margin-bottom: 2.5rem;
        }
    }

    @media (max-width: 640px) {
        section {
            padding: 4rem 0;
        }

        h2 {
            margin-bottom: 1rem;
        }

        p {
            margin-bottom: 2rem;
        }

        .cta-buttons {
            flex-direction: column;
            align-items: center;
        }

        .btn-primary,
        .btn-secondary {
            width: 100%;
            max-width: 300px;
            padding: 1rem 2rem;
        }
    }
</style>