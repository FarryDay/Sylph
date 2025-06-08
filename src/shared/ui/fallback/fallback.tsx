import { Link, useRouteError } from 'react-router-dom'
// import ErrorImage from 'shared/assets/images/errorImage.svg?react'
// import { RejectedDataType } from 'shared/types'

export function Fallback() {
	const error = useRouteError()

	const knownError = error as any

	return (
		<div className='bg-[#2E292D] text-white h-screen flex justify-center items-center flex-col text-center'>
			{/* <ErrorImage className='fallback__img' />
            <h1 className='fallback__img'>Something went wrong</h1>
            <span className='fallback__describe'>
                {knownError?.messageError} {knownError?.status}
            </span> */}
			<h1 className='text-3xl'>Ошибка: {knownError?.messageError || 'Неизвестная ошибка'}</h1>
			<Link to='/'>Перезапустить</Link>
		</div>
	)
}
