<script>
// @ts-nocheck
    import { reveal } from "$lib/actions/reveal";
    import Container from "./Container.svelte";

    let activeCategory = $state('coffee');

    const categories = [
        { id: 'coffee', name: 'Coffee' },
        { id: 'bagels', name: 'Bagels' },
        { id: 'food', name: 'Food' },
        { id: 'drinks', name: 'Drinks' }
    ];

    const menuItems = {
        coffee: [
            { name: 'Espresso', description: 'Single or double shot', price: '2.50' },
            { name: 'Americano', description: 'Smooth and bold', price: '2.80' },
            { name: 'Cappuccino', description: 'Classic Italian style', price: '3.20' },
            { name: 'Flat White', description: 'Velvety microfoam', price: '3.30' },
            { name: 'Latte', description: 'Smooth and creamy', price: '3.40' },
            { name: 'Mocha', description: 'Coffee meets chocolate', price: '3.80' }
        ],
        bagels: [
            { name: 'Classic Cream Cheese', description: 'Traditional Brick Lane style', price: '4.50' },
            { name: 'Smoked Salmon', description: 'With capers and cream cheese', price: '6.50' },
            { name: 'Salt Beef', description: 'London street food classic', price: '6.80' },
            { name: 'Veggie Supreme', description: 'Fresh vegetables', price: '5.50' },
            { name: 'Bacon & Egg', description: 'Perfect breakfast', price: '5.80' },
            { name: 'Build Your Own', description: 'Choose your fillings', price: '4.00+' }
        ],
        food: [
            { name: 'Sourdough Toast', description: 'Freshly baked daily', price: '3.50' },
            { name: 'Artisan Cakes', description: 'Daily selection', price: '3.50' },
            { name: 'Fresh Pastries', description: 'Croissants and more', price: '2.80' },
            { name: 'Cookies & Brownies', description: 'Freshly made', price: '2.50' },
            { name: 'Premium Ice Cream', description: 'Various flavours', price: '3.00' },

        ],
        drinks: [
            { name: 'Signature Milkshakes', description: 'Famous in Billericay', price: '4.50' },
            { name: 'Iced Coffee', description: 'Cold brew perfection', price: '3.50' },
            { name: 'Smoothies', description: 'Fresh fruit blends', price: '4.00' },
            { name: 'Fresh Juices', description: 'Squeezed daily', price: '3.80' }
        ]
    };
</script>

<section id="menu">
    <Container>
        <div use:reveal class="menu-header">
            <span class="label">Our Menu</span>
            <h2>What We Serve</h2>
        </div>

        <div use:reveal class="category-tabs">
            {#each categories as category}
                <button 
                    class="tab" 
                    class:active={activeCategory === category.id}
                    onclick={() => activeCategory = category.id}
                >
                    {category.name}
                </button>
            {/each}
        </div>

        <div class="menu-items">
            {#each menuItems[activeCategory] as item}
                <div class="menu-item">
                    <div class="item-info">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                    <span class="price">£{item.price}</span>
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

    .menu-header {
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

    .category-tabs {
        grid-column: span 12;
        display: flex;
        gap: 1rem;
        margin-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        overflow-x: auto;
    }

    .tab {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.5);
        font-size: 1rem;
        padding: 1rem 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        border-bottom: 2px solid transparent;
        text-transform: uppercase;
        letter-spacing: 1px;
        white-space: nowrap;
    }

    .tab:hover {
        color: rgba(255, 255, 255, 0.8);
    }

    .tab.active {
        color: #ffffff;
        border-bottom-color: #ffffff;
    }

    .menu-items {
        grid-column: span 12;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
    }

    .menu-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .item-info {
        flex: 1;
    }

    .menu-item h3 {
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0 0 0.5rem;
    }

    .menu-item p {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.6);
        margin: 0;
        line-height: 1.5;
    }

    .price {
        font-size: 1rem;
        font-weight: 500;
        white-space: nowrap;
    }

    @media (max-width: 968px) {
        section {
            padding: calc(80px + 2rem) 0 3rem;
        }

        .menu-items {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    @media (max-width: 640px) {
      

        .menu-header {
            margin-bottom: 3rem;
        }

        .category-tabs {
            gap: 0.5rem;
            margin-bottom: 2rem;
        }

        .tab {
            font-size: 0.9rem;
            padding: 0.75rem 1rem;
        }

        .menu-item {
            padding-bottom: 1.5rem;
            gap: 1rem;
        }

        .menu-item h3 {
            font-size: 1rem;
        }

        .menu-item p {
            font-size: 0.9rem;
        }

        .price {
            font-size: 0.95rem;
        }
    }
</style>