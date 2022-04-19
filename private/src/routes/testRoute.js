export const textRoute = {
	path: '/api/test',
	method: 'get',
	handler: (req, res) => {
		res.status(200).send('Hi, I am working on big company');
	},
};