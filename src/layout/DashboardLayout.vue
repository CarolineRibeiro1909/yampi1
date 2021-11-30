<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">

	<side-bar
		:title="loja"
	>
  	<mobile-menu slot="content"></mobile-menu>

	<template slot-scope="props" slot="links">

		<template>
			<sidebar-item :link="{name: 'Todos Produtos', path: '/principal/produtos', icon: 'fa fa-cubes'}"></sidebar-item>
		</template>

		<template>
			<sidebar-item :link="{name: 'Categorias', icon: 'fa fa-snowflake-o'}">
				<sidebar-item :link="{name: 'Eletrônicos', path: '/principal/categoria-eletronicos', icon: 'fa fa-desktop'}"></sidebar-item>
				<sidebar-item :link="{name: 'Masculino', path: '/principal/categoria-masculino', icon: 'fa fa-male'}"></sidebar-item>
				<sidebar-item :link="{name: 'Joias', path: '/principal/categoria-joias', icon: 'fa fa-diamond'}"></sidebar-item>
				<sidebar-item :link="{name: 'Feminino', path: '/principal/categoria-feminino', icon: 'fa fa-female'}"></sidebar-item>
			</sidebar-item>
		</template>

		<template>
			<sidebar-item :link="{name: 'Meu Carrinho', path: '/principal/carrinho', icon: 'fa fa-shopping-cart'}"></sidebar-item>
		</template>

	</template>
	</side-bar>
  	<div class="main-panel">
		<top-navbar></top-navbar>

		<dashboard-content @click="toggleSidebar">

		</dashboard-content>

		<content-footer></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */


function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
  } else {
	// try to init it later in case this component is loaded async
	setTimeout(() => {
	  initScrollbar(className);
	}, 100);
  }
}
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'

export default {
	mixins: [
  	],
	components: {
		TopNavbar,
		ContentFooter,
		DashboardContent,
		MobileMenu
  },
	data() {
		return {
			loja: 'Loja Virtual'
		}
	},
	computed: {

	},
	methods: {
		toggleSidebar() {
			if (this.$sidebar.showSidebar) {
				this.$sidebar.displaySidebar(false);
			}
		},
	},
	mounted() {
	}
};
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
	opacity: 0;
	transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
	opacity: 1;
  }
}
.main-panel .zoomIn {
  animation-name: zoomIn95;
}
@keyframes zoomOut95 {
  from {
	opacity: 1;
  }
  to {
	opacity: 0;
	transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}
.main-panel .zoomOut {
  animation-name: zoomOut95;
}
</style>
