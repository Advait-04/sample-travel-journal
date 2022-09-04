import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

function App() {
    const card = data.map((item) => {
        return (
            <Card
                key={item.id}
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
                imageLoc={item.imageLoc}
            />
        );
    });

    return (
        <div className="main">
            <Navbar />
            <div className="cards">{card}</div>
        </div>
    );
}

export default App;
