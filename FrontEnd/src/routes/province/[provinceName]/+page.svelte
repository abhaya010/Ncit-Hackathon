<script>
    import {page} from '$app/stores';
    $:provinceName = $page.params.provinceName;
    let province = ['Koshi','Madhesh','Bagmati','Gandaki','Lumbini','Karnali','Sudurpaschim' ]
</script>

{#if province.includes(provinceName)}
    <h1>Proince {provinceName}</h1>

{/if}
