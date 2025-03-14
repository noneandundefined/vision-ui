// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import React from 'react';
import ChevronDown from '../../constants/svgs/chevron-down';
import Close from '../../constants/svgs/close';
import { ErrorLog } from '../../types/monitoring';

interface LastErrorsProps {
	data?:
		| {
				last_errors?: ErrorLog[];
		  }
		| undefined;
}

const LastErrors: React.FC<LastErrorsProps> = ({ data }) => {
	return (
		<>
			<div className="mt-[2rem] flex flex-col gap-5">
				<p className="text-[1.2rem] font-semibold">Last Errors</p>

				{data?.last_errors?.length == 0 ? (
					<p className="text-center my-[5rem] text-[14px] text-[#ccc]">
						You don't have any errors on the server
					</p>
				) : (
					<div className="flex flex-col gap-1">
						{data?.last_errors?.map((error, index) => (
							<div
								className="bg-[#ff000036] hover:bg-[#ff000017] transition p-3 rounded-md cursor-pointer"
								key={index}
							>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="bg-[#4b0000] p-1 rounded-[50%]">
											<Close fill="#ff00005e" size={19} />
										</div>
										<p className="text-[14px]">
											{error.error}
										</p>
									</div>

									<ChevronDown fill="#fff" />
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default LastErrors;
