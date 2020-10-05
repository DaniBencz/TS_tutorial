//https://www.codingforentrepreneurs.com/blog/typescript-setup-guide
//https://www.youtube.com/playlist?list=PLEsfXFp6DpzQMickZgPq0Pn2uQD77UXoi
//https://github.com/codingforentrepreneurs/getting-started-with-typescript

import * as $ from "jquery";
import { hello } from './hello'
import { foo } from './foo'

class SweetSweetClass {
	constructor() {
		let bar = 'bar'
		console.log("Even sweeter")
		$("body").css('background', 'aqua')
		$('body').html(`<h1>${bar}</h1>`)
	}
}
let basil = new SweetSweetClass()
hello(foo)
