import { useState } from 'react';
import Effects from '../components/Effects';
import Close from '../constants/svgs/close';
import LockReset from '../constants/svgs/lock-reset';
import hashService from '../services/hash.service';
import authService from '../services/auth.service';

interface ProtectedProps {
	setIsError: any;
	setResponseError: any;
}

const CodeInput: React.FC<{
	code: string[];
	setCode: (newCode: string[]) => void;
	onComplete: () => void;
}> = ({ code, setCode, onComplete }) => {
	const handleChange = (index: number, event: any) => {
		const newCode = [...code];
		newCode[index] = event.target.value.slice(-1);

		if (event.nativeEvent.inputType === 'deleteContentBackward' && index > 0) {
			document.getElementById(`code-${index - 1}`)?.focus();
		} else if (event.target.value && index < 4) {
			document.getElementById(`code-${index + 1}`)?.focus();
		}

		setCode(newCode);

		if (newCode.every((char) => char)) {
			onComplete();
		}
	};

	return (
		<div className="flex gap-2 justify-center">
			{code.map((_, index) => (
				<input
					type="text"
					key={index}
					id={`code-${index}`}
					maxLength={1}
					value={code[index]}
					onChange={(e) => handleChange(index, e)}
					className={`max-w-[2.2rem] min-h-[2.8rem] text-[#fff] items-center text-center rounded-[0.6rem] border bg-[#181b2f8f] font-semibold`}
					style={{
						borderColor: code[index] ? '#3f9f75' : '#9f3f3f',
					}}
				/>
			))}
		</div>
	);
};

const Protected: React.FC<ProtectedProps> = ({
	setIsError,
	setResponseError,
}) => {
	const [code, setCode] = useState(['', '', '', '', '']);
	const [isModal, setIsModal] = useState<boolean>(false);

	const handleVerifyCode = () => {
		try {
			authService.login(code.join(''));
		} catch (error: any) {
			setIsError(true);
			setResponseError(error.message);
		}
	};

	return (
		<>
			{isModal && <PaswdModal setIsModal={setIsModal} />}

			<div className="flex flex-col justify-center items-center h-[80vh]">
				<Effects />

				<div className="flex flex-col gap-5 items-center">
					<div className="bg-[#1b1b22e0] p-2 rounded-[50%] cursor-pointer flex justify-center">
						<Close fill="#ccc" size={28} />
					</div>

					<p className="text-[#ccc]">
						A password is set on the vision UI panel
					</p>

					<div className="flex flex-col justify-center gap-6 bg-[#1b1b22e0] min-w-[27rem] min-h-[15rem] border border-[#444] rounded-md text-center">
						<p className="text-[#fff] text-[1.2rem]">
							Verify your identitiy
						</p>

						<CodeInput code={code} setCode={setCode} onComplete={handleVerifyCode} />

						<div className="flex items-center justify-center gap-3 mt-[1.5rem] text-[14px]">
							<p className="cursor-pointer hover:text-[#fff]">
								Resend Code
							</p>
							<p
								className="bg-[#3c3d488f] p-1 px-[0.7rem] rounded-md cursor-pointer hover:text-[#fff]"
								onClick={handleVerifyCode}
							>
								Verify Code
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				className="flex items-center gap-3 cursor-pointer fixed bottom-7 left-[3rem] bg-[#333333a6] p-[0.4rem] px-[0.6rem] rounded opacity-[0.4] hover:opacity-[1] transition"
				onClick={() => setIsModal(true)}
			>
				<LockReset fill="#999" size={19} />
				<p className="text-[13px]">Create pswd</p>
			</div>
		</>
	);
};

const PaswdModal: React.FC<{ setIsModal: any }> = ({ setIsModal }) => {
	const [code, setCode] = useState(['', '', '', '', '']);
	const [paswd, setPaswd] = useState<string>('');
	const [paswdLabel, setPaswdLabel] = useState<string>('Enter the password');

	// const handleChange = (index: number, event: any) => {
	// 	const newCode = [...code];
	// 	newCode[index] = event.target.value.slice(-1);

	// 	if (event.nativeEvent.inputType === 'deleteContentBackward') {
	// 		if (index > 0) {
	// 			document.getElementById(`code-${index - 1}`)?.focus();
	// 		}
	// 	} else if (event.target.value && index < 5) {
	// 		document.getElementById(`code-${index + 1}`)?.focus();
	// 	}

	// 	setCode(newCode);
	// };

	return (
		<>
			<div className="fixed top-0 left-0 z-[1000] w-screen h-screen bg-[#00000c]">
				<Effects />
				<div className="flex flex-col gap-5 justify-center h-[95vh] items-center">
					<div className="bg-[#1b1b22e0] p-2 rounded-[50%] cursor-pointer flex justify-center">
						<LockReset fill="#ccc" size={28} />
					</div>

					<p className="text-[#ccc]">
						Creating a hash of your password
					</p>

					<div className="flex flex-col justify-center gap-6 bg-[#1b1b22e0] min-w-[27rem] min-h-[15rem] border border-[#444] rounded-md text-center">
						<p className="text-[#fff] text-[1.2rem]">
							{paswdLabel}
						</p>

						{paswd == '' ? (
							<CodeInput code={code} setCode={setCode} onComplete={() => {
								setPaswd(hashService.getHash(code.join('')));
								setPaswdLabel('Your hash:');
							}} />
						) : (
							<p className="text-[1.7rem] tracking-[0.5rem] font-medium">
								{paswd}
							</p>
						)}

						<div className="flex items-center justify-center gap-3 mt-[1.5rem] text-[14px]">
							<p
								onClick={() => setIsModal(false)}
								className="cursor-pointer hover:text-[#fff]"
							>
								Back
							</p>
							<p
								className="bg-[#3c3d488f] p-1 px-[0.7rem] rounded-md cursor-pointer hover:text-[#fff]"
								onClick={() => {
									setPaswd(
										hashService.getHash(code.join(''))
									);
									setPaswdLabel('Your hash:');
								}}
							>
								Generate
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Protected;
