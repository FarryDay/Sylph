import { IconButton } from '@shared/ui/buttons'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

export function Navigation() {
	return (
		<div className='flex items-center gap-2'>
			<IconButton>
				<RiArrowLeftSLine size={24} />
			</IconButton>
			<IconButton>
				<RiArrowRightSLine size={24} />
			</IconButton>
		</div>
	)
}
