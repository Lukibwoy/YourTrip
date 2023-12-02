import logo from './images/logo.png'
export default function Logo() {
	return (
		<div className="logo h-20 w-20 ml-7">
			<img src={logo} alt="logo" className="rounded-full" />
		</div>
	)
}
