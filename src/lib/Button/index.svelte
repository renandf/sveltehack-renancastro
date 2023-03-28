<script lang="ts">
  export let classes: string = '';
  // export let primary = false;
  // export let backgroundColor: string | undefined = undefined;
  // export let size: 'small' | 'medium' | 'large' = 'medium';
</script>

<button class="btn btn-primary {classes}" on:click>
  <slot>Button</slot>
</button>
<!-- 
<button class="btn">Button</button>
<button class="btn btn-primary">Button</button>
<button class="btn btn-secondary">Button</button>
<button class="btn btn-accent">Button</button>
<button class="btn btn-ghost">Button</button>
<button class="btn btn-link">Button</button> -->
