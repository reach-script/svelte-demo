<script lang="ts">
  import Link from "../components/Link.svelte";
  import InputText from '../components/InputText.svelte'
  import Button from '../components/buttons/Button.svelte'

  let name = "";
  let age = ""
  const onClickSend = (e) => {
    e.preventDefault();
    console.log(name, age);
  }
  </script>
  
  <h2>This is Form Page!</h2>
  <div class="form-wapper">
    <form>
      <InputText label="名前" bind:value={name} />
      <InputText label="年齢" bind:value={age} />
      <Button onClick={onClickSend}>送信</Button>
    </form>
  </div>
  <Link href="/">Home</Link>