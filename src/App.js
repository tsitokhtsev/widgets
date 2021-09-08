import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
// import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework'
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite javascript library among engineers'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components'
	}
]

const options = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Green',
		value: 'green'
	},
	{
		label: 'The Shade of Blue',
		value: 'blue'
	}
]

const App = () => {
	const [selected, setSelected] = useState(options[0])

	return (
		<div>
			<Header />
			<Route path="/widgets/">
				<Accordion items={items} />
			</Route>
			<Route path="/widgets/search">
				<Search />
			</Route>
			<Route path="/widgets/dropdown">
				<Dropdown
					label="Select a color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			{/* <Route path="/widgets/translate">
				<Translate />
			</Route> */}
		</div>
	)
}

export default App