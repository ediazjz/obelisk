<script src="hsluv.min.js"  type="text/javascript"></script>

<script>
  let primary;
  let accent;
  let light;
  let dark;
  let success;
  let warning;
  let error;

  $: colorPalette: {

  }
</script>

<div>
	<form action="POST" on:submit={}>
		<h2>Brand Colors</h2>
		<div>
			<label for="primary">Primary</label>
			<input type="text" id="primary" name="primary" class="border border-gray-300" />
		</div>

		<div>
			<label for="accent">Accent</label>
			<input type="text" id="accent" name="accent" class="border border-gray-300" />
		</div>

		<div>
			<label for="light">Light</label>
			<input type="text" id="light" name="light" class="border border-gray-300" />
		</div>

		<div>
			<label for="dark">Dark</label>
			<input type="text" id="dark" name="dark" class="border border-gray-300" />
		</div>

		<hr />

		<h2>Feedback Colors</h2>
		<div>
			<label for="success">Success</label>
			<input type="text" id="success" name="success" class="border border-gray-300" />
		</div>

		<div>
			<label for="warning">Warning</label>
			<input type="text" id="warning" name="warning" class="border border-gray-300" />
		</div>

		<div>
			<label for="error">Error</label>
			<input type="text" id="error" name="error" class="border border-gray-300" />
		</div>

    <button type="submit">Generate!</button>
	</form>
</div>

<!-- {#each colorPalette as groupColor}
	<div class="flex">
		{#each groupColor.colors as color}
			<Color {color} />
		{/each}
	</div>
{/each} -->
