import { HeroUIProvider } from '@heroui/react'
import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from 'shared/ui/fallback'

type Props = {
	children: ReactNode
}

export function Providers({ children }: Props) {
	return (
		<ErrorBoundary FallbackComponent={Fallback}>
			<HeroUIProvider>{children}</HeroUIProvider>
		</ErrorBoundary>
	)
}
