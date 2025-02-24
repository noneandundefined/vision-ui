import { useState } from "react";
import Effects from "../components/Effects";
import Close from "../constants/svgs/close";

const Protected = () => {
    const [code, setCode] = useState(['', '', '', '', '', '']);

    const handleChange = (index: number, event: any) => {
        const newCode = [...code];
        newCode[index] = event.target.value.slice(-1);

        if (!newCode[index]) {
            if (index > 0) {
                document.getElementById(`code-${index - 1}`)?.focus();
            }
        } else {
            if (event.target.value && index < 5) {
                document.getElementById(`code-${index + 1}`)?.focus();
            }
        }

        setCode(newCode);
    };


    return (
        <div className="flex flex-col justify-center items-center">
            <Effects />

            <div className="flex flex-col gap-5 items-center">
                <div className="bg-[#333] p-2 rounded-[50%] cursor-pointer flex justify-center">
                    <Close fill="#ccc" />
                </div>

                <p className="text-[#ccc]">A password is set on the vision UI panel</p>

                <div className="flex flex-col gap-6 bg-[#1b1b22e0] px-[5rem] pb-[2rem] pt-[2rem] border border-[#444] rounded-md text-center">
                    <p className="text-[#fff] text-[1.2rem]">Verify your identitiy</p>

                    <div className="flex gap-2">
                        {[...Array(6)].map((_, index) => (
                            <input
                                type="text"
                                key={index}
                                id={`code-${index}`}
                                maxLength={1}
                                value={code[index]}
                                onChange={(e) => handleChange(index, e)}
                                className="max-w-[2.2rem] min-h-[2.8rem] text-[#fff] items-center text-center rounded-[0.6rem] border border-[#888] bg-[#181b2f8f] font-semibold"
                            />
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-[1.5rem] text-[14px]">
                        <p className="cursor-pointer">Resend Code</p>
                        <p className="bg-[#3c3d488f] p-1 px-[0.7rem] rounded-md cursor-pointer">Verify Code</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Protected;
