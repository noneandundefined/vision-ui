import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<div className="flex items-center">
				<img src="/logo-vision-none.png" width={50} alt="" />
				<div className="ml-[1rem]">
					<p>
						<Link
							to="https://github.com/Artymiik/vision"
							className="underline"
						>
							Data Sources
						</Link>{' '}
						/ Vision
					</p>
					<p className="text-[13px] text-[#999]">Server monitoring</p>
				</div>
			</div>
		</>
	);
};

export default Header;
