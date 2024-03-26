interface searchClassName {
	className: string
}
export default function Search({ className }: searchClassName) {
	return <div className={className}>
		<form action="">
			<div className="w-full flex">
				<label htmlFor="search-input"></label>
				<input className="block outline-none text-black w-full px-2 py-3 rounded-tl-md rounded-bl-md" type="text" placeholder="What in your mind?" required name="search-input" />
				<button className="px-4 py-2 rounded-tr-md rounded-br-md bg-blue-400" type="submit">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
					</svg>

				</button>
			</div>
		</form>
	</div>
}