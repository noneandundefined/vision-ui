import { Logs } from '@/app/types/monitoring';

interface LogsWidgetProps {
	data: {
		logs?: Logs[];
	};
}

const LogsWidget: React.FC<LogsWidgetProps> = ({ data }) => {
	return (
		<article>
			<div className="px-2 py-1 bg-[#ffffff14]">
				<p className="text-[12px] text-[#fff] text-uppercase">LOGS</p>
			</div>
			<div className="p-5 border border-[#ffffff14]">
				<table className="min-w-full">
					<tbody>
						{data?.logs?.map((log, index) => (
							<tr
								key={index}
								className={
									index % 2 === 0
										? 'bg-[transparent] cursor-pointer transition hover:bg-[transparent]'
										: 'bg-[#ffffff14] cursor-pointer hover:bg-[transparent] transition'
								}
							>
								<td className="text-[12px] px-2 py-2 border-b border-[#ffffff14]">
									{new Date(log.timestamp).toLocaleTimeString(
										[],
										{
											hour: '2-digit',
											minute: '2-digit',
											second: '2-digit',
										}
									)}
								</td>
								<td className="text-[12px] px-2 py-2 border-b border-[#ffffff14]">
									{log.info}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</article>
	);
};

export default LogsWidget;
