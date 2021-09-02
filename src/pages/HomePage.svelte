<script lang="ts">
  import Link from "../components/Link.svelte";

  const links = [
    {
      href: "/about",
      text: "About",
    },
    {
      href: "/conter",
      text: "Counter",
    },
    {
      href: "/form",
      text: "Form",
    },
    {
      href: "/task",
      text: "Task",
    }
  ]
</script>

<h2>This is Home Page!</h2>
<div class="list">
  <ul>
    {#each links as item}
      <li>
        <Link href={item.href} >{item.text}</Link>
      </li>
    {/each}
  </ul>
</div>

<style>
  .list {
    width: 150px;
    margin: 0 auto;
  }
</style>