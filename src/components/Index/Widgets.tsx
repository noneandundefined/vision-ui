import Close from '../../constants/svgs/close';
import Database from '../../constants/svgs/database';
import Received from '../../constants/svgs/received';
import Speed from '../../constants/svgs/speed';

const Widgets = () => {
	return (
		<>
			<div className="flex items-center justify-between my-[2rem]">
				<div className="flex gap-5 items-center bg-[#6800ff21] hover:bg-[#6800ff0d] transition p-2 px-3 rounded-md cursor-pointer">
					<div>
						<p className="text-[1.4rem]">1.45ms</p>
						<p className="text-[13px]">Average response values</p>
					</div>
					<Speed fill="#fff" size={30} />
				</div>

				<div className="flex gap-5 items-center bg-[#6800ff21] hover:bg-[#6800ff0d] transition p-2 px-3 rounded-md cursor-pointer">
					<div>
						<p className="text-[1.4rem]">0.455ms</p>
						<p className="text-[13px]">
							Average db response values
						</p>
					</div>
					<Database fill="#fff" size={30} />
				</div>

				<div className="flex gap-5 items-center bg-[#6800ff21] hover:bg-[#6800ff0d] transition p-2 px-3 rounded-md cursor-pointer">
					<div>
						<p className="text-[1.4rem]">154 QTY</p>
						<p className="text-[13px]">Average response values</p>
					</div>
					<Received fill="#fff" size={30} />
				</div>

				<div className="flex gap-5 items-center bg-[#6800ff21] hover:bg-[#6800ff0d] transition p-2 px-3 rounded-md cursor-pointer">
					<div>
						<p className="text-[1.4rem]">13 QTY</p>
						<p className="text-[13px]">Total number of errors</p>
					</div>
					<Close fill="#fff" size={30} />
				</div>
			</div>
		</>
	);
};

export default Widgets;
