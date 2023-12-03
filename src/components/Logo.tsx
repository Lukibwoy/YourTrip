import logo from './images/logo.png'
export default function Logo() {
	return (
		<div className="logo h-36 w-36 ml-7">
			<img src={logo} alt="logo" className="rounded-full" />
		</div>
	)
}
