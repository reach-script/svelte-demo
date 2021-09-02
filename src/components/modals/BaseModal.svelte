<script lang="ts">
  import { Modal, Button, Card } from 'svelte-chota';
  export let open: boolean;
 </script>
 
 <Modal bind:open={open}>
     <Card>
         <slot />
     </Card>
 </Modal>