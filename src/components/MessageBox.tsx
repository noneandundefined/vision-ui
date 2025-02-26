import { useEffect } from 'react';
import Cancel from '../constants/svgs/cancel';
import Close from '../constants/svgs/close';
import Done from '../constants/svgs/done';

interface MessageBoxProps {
	status: number;
	message: string;
	setIsError: any;
}

const MessageBox: React.FC<MessageBoxProps> = ({
	status,
	message,
	setIsError,
}) => {
	const statusCode = status.toString();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsError(false);
		}, 4000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<>
			<div className="fixed bottom-7 right-5">
				{statusCode.startsWith('4') ? (
					<div className="flex gap-3 px-8 bg-[#161616] py-[0.7rem] px-[1.2rem] pr-[3rem] rounded-xl border border-[#444]">
						<Cancel
							fill="#ff0000"
							size={21}
							className="mt-[0.2rem]"
						/>
						<div>
							<p className="text-[#fff]">Error</p>
							<p className="text-[#888] text-[14px]">{message}</p>
						</div>
					</div>
				) : statusCode.startsWith('5') ? (
					<div className="flex gap-3 px-8 bg-[#161616] py-[0.7rem] px-[1.2rem] pr-[3rem] rounded-xl border border-[#444]">
						<Cancel
							fill="#ff0000"
							size={21}
							className="mt-[0.2rem]"
						/>
						<div>
							<p className="text-[#fff]">Error</p>
							<p className="text-[#888] text-[14px]">{message}</p>
						</div>
					</div>
				) : statusCode.startsWith('1') ? (
					<div className="flex gap-3 px-8 bg-[#161616] py-[0.7rem] px-[1.2rem] pr-[3rem] rounded-xl border border-[#444]">
						<Close
							fill="#ffe400"
							size={21}
							className="mt-[0.2rem]"
						/>
						<div>
							<p className="text-[#fff]">Warning</p>
							<p className="text-[#888] text-[14px]">{message}</p>
						</div>
					</div>
				) : (
					<div className="flex gap-3 px-8 bg-[#161616] py-[0.7rem] px-[1.2rem] pr-[3rem] rounded-xl border border-[#444]">
						<Done
							fill="#2fff00"
							size={21}
							className="mt-[0.2rem]"
						/>
						<div>
							<p className="text-[#fff]">Success</p>
							<p className="text-[#888] text-[14px]">{message}</p>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default MessageBox;
