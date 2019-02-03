<template>
	<div>
		<div class="input-group my-1">
		  <div class="input-group-prepend">
		    <span class="input-group-text"><fa icon="search" /></span>
		  </div>
		  <input type="text"
							class="form-control form-control-lg"
							placeholder="Search Movie"
							aria-label="Search"
							@keyup="onKeyup" >
		</div>
	</div>
</template>

<script>

export default {
	props: {
		startSearch: { type: Function, default: () => {} }
	},

	methods: {
		onKeyup(e) {
			// store keywords
      let keyword = e.target.value

      // add delay
      clearTimeout(this.onTimeout)
      this.onTimeout = setTimeout(() => {
        this.startSearch(keyword)
      }, 200)
		}
	}
}
</script>



