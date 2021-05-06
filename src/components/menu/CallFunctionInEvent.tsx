
const badCode = "<button onClick={chooseNoimport()}> No import </button>"
const goodCode = "<button onClick={chooseNoimport}> No import </button>"

const CallFunctionInEvent = () => (
	<div>
		<p>type void is not assignable to type...</p>
		<p>do not use parantheses when declaring event listeners</p>

		<p> bad:  <code> {badCode} </code> </p>
		<p> good: <code> {goodCode} </code> </p>

	</div>
)

export default CallFunctionInEvent