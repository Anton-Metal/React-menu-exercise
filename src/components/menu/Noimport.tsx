const code = "import { useState } from react"

const Noimport = () => (

	<div>
		<p>
		TypeScript error in: Cannot find name 'useState'.  TS2304
		</p>
		<p> remember to input useState</p>
		<p> <code> import {"{useState}"} from 'react' </code> </p>
		
		<code> {code} </code>
	</div>
)
export default Noimport