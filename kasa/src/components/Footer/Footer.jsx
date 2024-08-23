// Footer.jsx
import logo2 from "../../img/LOGO2.svg";
import "./Footer.scss"
export default function Footer() {
	return (
		<footer className="footer">
			<img src={logo2} alt="logo de kasa" />
			<p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
