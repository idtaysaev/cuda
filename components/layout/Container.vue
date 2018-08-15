<template>
	<div class="container">
		<slot/>
	</div>
</template>

<style lang="scss">
$container-max-width: 1090px;
$container-small-max-width: 900px;
$container-padding: 0 20px;

.container {
  width: 100%;
  max-width: $container-max-width;
  padding: $container-padding;
	margin: 0 auto;

	&.wide {
		max-width: 100%;
	}

  &.small {
    max-width: $container-small-max-width;
  }
}
</style>
