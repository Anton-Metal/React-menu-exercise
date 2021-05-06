import { useState } from 'react'
import Noimport from './Noimport'
import CallFunctionInEvent from './CallFunctionInEvent'

const Menu = () => {
	const [selectedItem, setSelectedItem] = useState('')
	const NO_IMPORT = 'no import', CALL_FUNCTION ='call function with () in the event'

	let content = null
	if( selectedItem === NO_IMPORT ) (

		content = <Noimport />
	)
	else if( selectedItem === CALL_FUNCTION ) {
		content = <CallFunctionInEvent />
	}

	function chooseNoimport() {
		setSelectedItem(NO_IMPORT)
	} 
	

	return (
		<div className="menu">
			<nav>
				<button onClick={() => setSelectedItem('')}> Reset </button>
				<button onClick={chooseNoimport}> No import </button>  

				<button onClick={() => setSelectedItem(CALL_FUNCTION)}> Call function with () in the event </button>
			</nav>
			<main>
				{content}
			</main>
		</div>
	)
}

export default Menu