import React from 'react';
import Cancel from '../../constants/svgs/cancel';
import Done from '../../constants/svgs/done';
import Received from '../../constants/svgs/received';
import Speed from '../../constants/svgs/speed';

interface RequestsProps {
	data?: {
		request_avg_latency_ms?: number;
		request_count?: number;
		request_success_count?: number;
		request_error_count?: number;
	};
}

const Requests: React.FC<RequestsProps> = ({ data }) => {
	return (
		<>
			<div className="flex items-center justify-between my-[2rem]">
				<div className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer" id="block__request">
					<div>
						<p className="text-[1.4rem]" id='title__request'>
							{data?.request_avg_latency_ms?.toFixed(2)}ms
						</p>
						<p className="text-[13px]" id="desc__request">Average response values</p>
					</div>
					<Speed fill="#fff" size={30} />
				</div>

				<div className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer" id="block__request">
					<div>
						<p className="text-[1.4rem]" id='title__request'>
							{data?.request_count} QTY
						</p>
						<p className="text-[13px]" id="desc__request">Total requests</p>
					</div>
					<Received fill="#fff" size={30} />
				</div>

				<div className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer" id="block__request">
					<div>
						<p className="text-[1.4rem]" id='title__request'>
							{data?.request_error_count} QTY
						</p>
						<p className="text-[13px]" id="desc__request">Total request errors</p>
					</div>
					<Cancel fill="#fff" size={30} />
				</div>

				<div className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer" id="block__request">
					<div>
						<p className="text-[1.4rem]" id='title__request'>
							{data?.request_success_count} QTY
						</p>
						<p className="text-[13px]" id="desc__request">Total success requests</p>
					</div>
					<Done fill="#fff" size={30} />
				</div>
			</div>
		</>
	);
};

export default Requests;
