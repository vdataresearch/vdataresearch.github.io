import relativeImages from 'mdsvex-relative-images';

export default {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [relativeImages]
};
