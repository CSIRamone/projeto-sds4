import DataTable from "components/DataTable";
import Footer from "components/Footer/Index";
import NavBar from "components/NavBar/Index";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container"> 
        <h1 className="text-primary">Olá React!!!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
