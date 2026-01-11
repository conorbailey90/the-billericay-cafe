<script>
    import { reveal } from "$lib/actions/reveal";
    import Container from "./Container.svelte";
</script>

<section id="about">
    <Container>
        <div use:reveal class="text-content">
            <span class="label">About Us</span>
            <h2>Your Community Coffee Shop on the High Street</h2>
            <p>We're a boutique coffee shop serving speciality coffee alongside our amazing fresh bagels and artisan sourdough. Located in the heart of Billericay, we've become a beloved gathering place for our local community.</p>
            <p>From freshly baked cakes and pastries to our indulgent milkshakes and premium ice cream, everything is chosen with quality in mind. Known for the <strong>best coffee and milkshakes in Billericay</strong>, we bring together premium ingredients, expert craftsmanship, and unbeatable community spirit.</p>
            <p>Open 7 days a week, we're your daily escape! a place where great coffee meets warm hospitality.</p>
        </div>
        
        <div use:reveal class="images">
            <img src="/images/cakes.jpg" alt="Coffee shop interior" class="image-1">
            <img src="/images/coffees.jpg" alt="Fresh coffee" class="image-2">
        </div>
    </Container>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        padding: 8rem 0;
        background: #111111;
    }

    .text-content {
        grid-column: span 6;
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
        margin: 0 0 2rem;
        line-height: 1.2;
    }

    p {
        font-size: 1.05rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 1.5rem;
    }

    p strong {
        color: #fff;
        font-weight: 600;
    }

    .images {
        position: relative;
        grid-column: 8 / span 5;
        height: 600px;
    }

    img {
        border: 2px solid #000000;
        border-radius: 10px;
    }

    .image-1 {
        position: absolute;
        width: 70%;
        height: 70%;
        object-fit: cover;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .image-2 {
        position: absolute;
        width: 60%;
        height: 60%;
        object-fit: cover;
        bottom: 0;
        right: 0;
        z-index: 2;
    }



    @media (max-width: 640px) {
        section {
            padding: calc(80px + 2rem) 0 4rem;
        }

        .label {
            font-size: 0.75rem;
            margin-bottom: 1rem;
        }

        h2 {
            margin-bottom: 1.5rem;
        }

        .text-content {
            grid-column: span 12;
        }

        p {
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        .images {
            grid-column: 1 / span 12;
            /* height: 350px; */
        }

        .image-1 {
            width: 75%;
            height: 65%;
        }

        .image-2 {
            width: 65%;
            height: 55%;
        }
    }
</style>