import { IconButton } from '@shared/ui/buttons'
import { getCurrentWindow } from '@tauri-apps/api/window'
import { App } from '@utils/config'
import { FaWindowMaximize, FaWindowMinimize } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'

export function Header() {
	const window = getCurrentWindow()

	return (
		<div data-tauri-drag-region className='bg-[#141419] py-1 font-light px-2 text-white flex justify-end items-center'>
			<p className='flex-1 text-center'>{App.Title}</p>
			<div className='flex justify-center gap-2 items-center'>
				<IconButton onPress={() => window.minimize()}>
					<FaWindowMinimize size={16} />
				</IconButton>
				<IconButton onPress={() => window.toggleMaximize()}>
					<FaWindowMaximize size={16} />
				</IconButton>
				<IconButton onPress={() => window.close()}>
					<IoClose />
				</IconButton>
			</div>
		</div>
	)
}
