import NavBar from "components/NavBar/Index";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import DataTableV from "components/DataTableV";
import Footer from "components/Footer/Index";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Daschboard Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary"> Taxa de sucesso  </h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary"> Participação nas vendas </h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas as Vendas</h2>
                </div>
                <DataTableV />
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;