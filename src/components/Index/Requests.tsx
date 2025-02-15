import Cancel from "../../constants/svgs/cancel"
import Done from "../../constants/svgs/done"
import Received from "../../constants/svgs/received"
import Speed from "../../constants/svgs/speed"

const Requests = () => {
    return (
        <>
            <div className="flex items-center justify-between my-[2rem]">
                <div className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer">
                    <div>
                        <p className="text-[1.4rem]">1.45ms</p>
                        <p className="text-[13px]">Average response values</p>
                    </div>
                    <Speed fill="#fff" size={30} />
                </div>

                <div className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer">
                    <div>
                        <p className="text-[1.4rem]">0.455ms</p>
                        <p className="text-[13px]">Total requests</p>
                    </div>
                    <Received fill="#fff" size={30} />
                </div>

                <div className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer">
                    <div>
                        <p className="text-[1.4rem]">154 QTY</p>
                        <p className="text-[13px]">Total request errors</p>
                    </div>
                    <Cancel fill="#fff" size={30} />
                </div>

                <div className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer">
                    <div>
                        <p className="text-[1.4rem]">13 QTY</p>
                        <p className="text-[13px]">Total success requests</p>
                    </div>
                    <Done fill="#fff" size={30} />
                </div>
            </div>
        </>
    )
}

export default Requests
