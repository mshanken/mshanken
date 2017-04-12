module.exports = {
	scss: [
	    {
	      pattern: /(@import ")(\w*|\w*-\w*|mixins\/\w*|mixins\/\w*-\w*)(";)/g,
	      replacement: '$1bower_components/bootstrap/scss/$2";'
	    },
	    {
	      pattern: /(@import "bower_components\/bootstrap\/scss\/)(custom)";/g,
	      replacement: '@import "../$2";'
	    }
	]
};