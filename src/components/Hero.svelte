<script>
    import { reveal } from "$lib/actions/reveal";
    import Container from "./Container.svelte";
        import { base } from '$app/paths';
</script>

<section id="home">
    <img src="{base}/images/hero.webp" alt="" class="hero">
    <div class="overlay"></div>
    <Container>
        <div use:reveal class="intro">
            <h1>The Billericay</h1>

            <h4>Finest coffee, fresh bagels and sourdough, indulgent ice creams, creamy milkshakes, and more bringing the very best with unbeatable community spirit.</h4>
        </div>
    </Container>
    <div class="scroll">
        <p>SCROLL FOR MORE</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"></path></svg>
    </div>
</section>

<style>
    section { 
        position: relative;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-start; /* Ensure content starts from top on smaller screens */
    }

    .hero {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: linear-gradient(to bottom, #111111 calc(60px + 2rem), transparent 50%, #111111 100%);
    }

    .intro {
        margin-top: 200px;
        grid-column: span 4;
        z-index: 3; /* Ensure text is above overlay */
        position: relative;
    }

    h1 {
        text-transform: uppercase;
        font-family: "PT Sans Narrow", sans-serif;
        font-size: 4rem;
        line-height: 1.2;
        letter-spacing: -0.03em;
        margin: 0;
    }

    h4 {
        text-wrap: balance;
        margin-top: 1rem;
        font-size: clamp(1rem, 2.5vw, 1.25rem); /* Responsive for body text */
        line-height: 1.4;
    }

    .scroll {
        position: absolute;
        align-items: center;
        z-index: 5;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        bottom: 2rem;
        gap: 0.5rem;
        opacity: 0.8; /* Subtle fade for better UX */
    }

    .scroll p {
        margin: 0;
        font-size: 0.875rem;
        letter-spacing: 0.1em;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .intro {
            margin-top: 200px; /* Reduced top margin for mobile */
            grid-column: span 12; /* Full width on mobile assuming 12-column grid */
            padding: 0 1rem; /* Add horizontal padding for edges */
        }

        .overlay {
            background: linear-gradient(to bottom, #111111 calc(50px + 1.5rem), transparent 40%, #111111 100%); /* Adjust gradient for smaller screens */
        }

          h1 {
            text-transform: uppercase;
            font-family: "PT Sans Narrow", sans-serif;
            font-size: 3rem;
            line-height: 1.2;
            letter-spacing: -0.03em;
            margin: 0;
        }

        .scroll {
            bottom: 1rem; /* Closer to bottom on mobile */
            gap: 0.25rem;
        }

        .scroll svg {
            width: 20px;
            height: 20px; /* Slightly smaller icon */
        }
    }

</style>