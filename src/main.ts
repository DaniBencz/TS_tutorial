//https://www.codingforentrepreneurs.com/blog/typescript-setup-guide
//https://www.youtube.com/playlist?list=PLEsfXFp6DpzQMickZgPq0Pn2uQD77UXoi
//https://github.com/codingforentrepreneurs/getting-started-with-typescript

import { hello } from './hello'
import { foo } from './foo'

class SweetSweetClass {
	constructor() {
		console.log("Even sweeter")
	}
}
let basil = new SweetSweetClass()
hello(foo)
