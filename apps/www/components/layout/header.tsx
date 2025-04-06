// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<div className="flex items-center">
				<img
					src="https://github.com/Artymiik/vision/blob/main/public/logo-vision-none.png?raw=true"
					width={50}
					alt=""
				/>
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
