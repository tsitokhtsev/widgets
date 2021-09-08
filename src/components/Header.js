import React from 'react'
import Link from './Link'

const Header = () => {
	return (
		<div>
			<div className="ui secondary pointing menu">
				<Link href="/widgets/" className="item">Accordion</Link>
				<Link href="/widgets/search" className="item">Search</Link>
				<Link href="/widgets/dropdown" className="item">Dropdown</Link>
				{/* <Link href="/widgets/translate" className="item">Translate</Link> */}
			</div>
		</div>
	)
}

export default Header