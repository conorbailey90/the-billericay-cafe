<script>
    import { reveal } from "$lib/actions/reveal";
    import Container from "./Container.svelte";

    const images = [
        { src: '/images/cakes.jpg', alt: 'Coffee being poured' },
        { src: '/images/coffees.jpg', alt: 'Fresh bagels' },
        { src: '/images/cakes.jpg', alt: 'Coffee shop interior' },
        { src: '/images/coffees.jpg', alt: 'Latte art' },
        { src: '/images/cakes.jpg', alt: 'Pastries display' },
        { src: '/images/coffees.jpg', alt: 'Milkshake' },
        { src: '/images/cakes.jpg', alt: 'Pastries display' },
        { src: '/images/coffees.jpg', alt: 'Milkshake' },
        { src: '/images/cakes.jpg', alt: 'Pastries display' },
        { src: '/images/coffees.jpg', alt: 'Milkshake' },
        { src: '/images/cakes.jpg', alt: 'Pastries display' },
        { src: '/images/coffees.jpg', alt: 'Milkshake' }
    ];
</script>

<section id="gallery">
    <Container>
        <div use:reveal class="gallery-header">
            <span class="label">Gallery</span>
            <h2>A Glimpse Inside</h2>
        </div>

        <div class="gallery-grid">
            {#each images as image}
                <div use:reveal class="gallery-item">
                    <img src={image.src} alt={image.alt}>
                </div>
            {/each}
        </div>
    </Container>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        padding: 4rem 0;
        background: #0a0a0a;
    }

    .gallery-header {
        grid-column: span 12;
        margin-bottom: 0rem;
        text-align: center;
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
        margin: 2rem 0;
        line-height: 1.2;
    }

    .gallery-grid {
        grid-column: span 12;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0rem;
    }

    .gallery-item {
        position: relative;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 10px;
        border: 2px solid #000000;
        background: #1a1a1a;
    }

    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease, filter 0.3s ease;
    
    }

    .gallery-item:hover img {
        transform: scale(1.05);
      
    }

    @media (max-width: 968px) {
        section {
            padding: calc(80px + 2rem) 0 4rem;
        }

        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            /* gap: .5rem; */
        }
    }

    @media (max-width: 640px) {

        .gallery-header {
            margin-bottom: 1rem;
        }

       
    }
</style>