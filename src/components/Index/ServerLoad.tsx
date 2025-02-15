import Memory from "../../constants/svgs/memory"

const ServerLoad = () => {
    return (
        <>
            <div className="flex items-center gap-3">
                <div className="bg-[#ffffff21] p-3">
                    <div className="flex ">
                        <div className="relative">
                            <div className="size-[9rem]">
                                <svg className="size-[8rem] -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="3"></circle>
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current" style={{ color: "#ffe900" }} strokeWidth="3" strokeDasharray="100" strokeDashoffset="80" strokeLinecap="round"></circle>
                                </svg>

                                <div className="absolute top-[4rem] left-[4.2rem] transform -translate-y-1/2 -translate-x-1/2">
                                    <span className="text-center text-xl font-semibold" style={{ color: "#ffe900" }}>20%</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="h-[21px] w-[21px] rounded-[50%] bg-[#ffe900]"></div>
                                <p className="text-[13px]">20%</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Memory fill="#fff" size={21} />
                        <p className="text-[13px]">Memory</p>
                    </div>
                </div>

                <div className="bg-[#ffffff21] p-3">
                    <div className="flex ">
                        <div className="relative">
                            <div className="size-[9rem]">
                                <svg className="size-[8rem] -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="3"></circle>
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current" style={{ color: "#00ff6e" }} strokeWidth="3" strokeDasharray="100" strokeDashoffset="80" strokeLinecap="round"></circle>
                                </svg>

                                <div className="absolute top-[4rem] left-[4.2rem] transform -translate-y-1/2 -translate-x-1/2">
                                    <span className="text-center text-xl font-semibold" style={{ color: "#00ff6e" }}>20%</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="h-[21px] w-[21px] rounded-[50%] bg-[#00ff6e]"></div>
                                <p className="text-[13px]">20%</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Memory fill="#fff" size={21} />
                        <p className="text-[13px]">CPU</p>
                    </div>
                </div>

                <div className="bg-[#ffffff21] p-3">
                    <div className="flex ">
                        <div className="relative">
                            <div className="size-[9rem]">
                                <svg className="size-[8rem] -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="3"></circle>
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current" style={{ color: "#6100ff" }} strokeWidth="3" strokeDasharray="100" strokeDashoffset="80" strokeLinecap="round"></circle>
                                </svg>

                                <div className="absolute top-[4rem] left-[4.2rem] transform -translate-y-1/2 -translate-x-1/2">
                                    <span className="text-center text-xl font-semibold" style={{ color: "#6100ff" }}>20%</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="h-[21px] w-[21px] rounded-[50%] bg-[#6100ff]"></div>
                                <p className="text-[13px]">20%</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Memory fill="#fff" size={21} />
                        <p className="text-[13px]">Network</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServerLoad
