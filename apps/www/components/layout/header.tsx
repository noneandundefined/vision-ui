// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import Code from '../common/svgs/code';
import Question from '../common/svgs/question';

const Header = () => {
	return (
		<>
			<header className="bg-[#000] border-y-[1px] border-y-[#333] w-screen h-12 flex items-center px-10 justify-between">
				<div className="flex items-center gap-9">
					<div className="bg-[#ffffff2b] hover:bg-[#ffffff45] transition p-[5px] rounded-[7px] cursor-pointer">
						<Question fill="#fff" size={14} />
					</div>
					<div className="border border-[#ffffff2b] bg-[transparent] hover:bg-[#ffffff2b] transition p-1 px-4 rounded-[20px] cursor-pointer">
						<p className="text-[12px] font-medium tracking-wide">
							V1.1.2
						</p>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<div className="flex items-center gap-1 border border-[#ffffff2b] bg-[transparent] hover:bg-[#ffffff2b] transition p-1 rounded-[20px] cursor-pointer">
						<div className="flex items-center justify-center bg-[#ff9848] w-[22px] h-[22px] rounded-[50%]">
							<p className="text-[13px] text-[#fff]">5</p>
						</div>
						<div className="flex items-center justify-center bg-[#ff4848] w-[22px] h-[22px] rounded-[50%]">
							<p className="text-[13px] text-[#fff]">2</p>
						</div>
					</div>

					<span className="flex h-[27px] w-[1px] bg-[#333]" />

					<div className="bg-[#ffffff2b] hover:bg-[#ffffff45] transition p-[5px] rounded-[7px] cursor-pointer">
						<Code fill="#fff" size={17} />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
