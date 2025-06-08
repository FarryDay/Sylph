import { Button, ButtonProps } from '@heroui/react'
import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
} & ButtonProps

export function IconButton({ children, className, ...props }: Props) {
	return (
		<Button
			isIconOnly
			className={clsx('w-auto rounded-none min-w-0 text-white bg-transparent h-auto p-0 text-xl', className)}
			{...props}
		>
			{children}
		</Button>
	)
}
