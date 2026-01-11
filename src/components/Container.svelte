<script>
    	let { children } = $props();
</script>


<div class="container">
    {@render children()}
</div>

<style>
    .container{
        position: relative;
        z-index: 5;
        display: grid;
        width: 95%;
        grid-template-columns: repeat(12, 1fr);
    }
</style>