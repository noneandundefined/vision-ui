import Cancel from '../constants/svgs/cancel';
import Close from '../constants/svgs/close';
import Done from '../constants/svgs/done';

interface MessageBoxProps {
	status: number;
	message: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ status, message }) => {
	const statusCode = status.toString();

	return (
		<>
			<div className="fixed bottom-7 right-5">
				{statusCode.startsWith('4') ? (
					<div className="flex items-center gap-3 px-8 bg-[#ff000040] p-3 rounded">
						<Cancel fill="#ff0000" />
						<p className="text-[#ff0000]">{message}</p>
					</div>
				) : statusCode.startsWith('5') ? (
					<div className="flex items-center gap-3 px-8 bg-[#ff000040] p-3 rounded">
						<Cancel fill="#ff0000" />
						<p className="text-[#ff0000]">{message}</p>
					</div>
				) : statusCode.startsWith('1') ? (
					<div className="flex items-center gap-3 px-8 bg-[#ffcd0040] p-3 rounded">
						<Close fill="#ffe400" />
						<p className="text-[#ffe400]">{message}</p>
					</div>
				) : (
					<div className="flex items-center gap-3 px-8 bg-[#46ff0040] p-3 rounded">
						<Done fill="#2fff00" />
						<p className="text-[#2fff00]">{message}</p>
					</div>
				)}
			</div>
		</>
	);
};

export default MessageBox;
