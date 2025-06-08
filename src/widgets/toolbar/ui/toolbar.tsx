import { Actions, Menu, Navigation } from '@features/toolbar'

export function Toolbar() {
	return (
		<div className='bg-[#14191D] text-white py-4 flex justify-between px-2'>
			<Navigation />
			<Actions />
			<Menu />
		</div>
	)
}
