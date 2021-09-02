<script lang="ts">
  import {Button} from 'svelte-chota';
  export let onClick: (e)=>void;
  export let disabled = false;
</script>

<Button primary on:click={onClick} disabled={disabled} class={disabled && "disabled"} ><slot /></Button>