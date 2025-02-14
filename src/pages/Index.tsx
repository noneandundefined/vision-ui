import Effects from "../components/Effects"
import Header from "../components/Header"
import Database from "../components/Index/Database"
import LastErrors from "../components/Index/LastErrors"
import Widgets from "../components/Index/Widgets"

const Index = () => {
    return (
        <>
            <Effects />

            <div>
                <Header />
                <Widgets />

                <div>
                    <Database />
                    <LastErrors />
                </div>
            </div>
        </>
    )
}

export default Index
