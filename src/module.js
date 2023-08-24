console.log('Module working')

async function start() {
	return await Promise.resolve('async working')
}

start().then(console.log)