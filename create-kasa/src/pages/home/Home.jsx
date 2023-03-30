import './Home.css';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import dataHouse from '../../data/logements.json';


const Home = () => {
  return (
    <div className='page-wrapper'>
      <Header title="Chez vous, partout et ailleurs" imageURL="images/home-banner.png" />
      <div className="grid-template">
      {dataHouse.map((items, index) => (
          <Card key={index} image={items.cover} />
        ))}
      </div>
    </div>
  );
};

export default Home;
