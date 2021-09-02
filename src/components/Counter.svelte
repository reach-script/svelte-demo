<script lang="ts">
  import Button from "./buttons/Button.svelte";
  let count = 0;

const onClickIncrement = ()=> {
  ++count;
}
const onClickDecrement = ()=> {
  --count;
  }
</script>

<p>Count: {count}</p>
<Button onClick={onClickIncrement}>Increment</Button>
<Button onClick={onClickDecrement} disabled={count <= 0} >Decrement</Button>

