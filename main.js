require.config({
	baseUrl:'node_modules',
	paths:{
		'jquery':'jquery/dist/jquery'
	},
	shim:{
		'jquery':{
			export:'jquery'
		}
	}
})

require(['jquery'],function($){
	$('body').html('我是jquery');
})