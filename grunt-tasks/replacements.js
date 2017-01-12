module.exports = {
	less: [
	    {
	      pattern: /(@import ")(\w*|\w*-\w*|mixins\/\w*|mixins\/\w*-\w*)(.less");/g,
	      replacement: '$1bower_components/bootstrap/less/$2";'
	    },
	    {
	      pattern: /(@import ")(bower_components\/bootstrap\/less\/)(variables)";/g,
	      replacement: '@import "../$3";'
	    }
	]
};