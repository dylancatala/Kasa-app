import './Home.css';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import dataHouse from '../../data/logements.json';


const Home = () => {
  return (
    <div className='page-wrapper'>
      <Header home title="Chez vous, partout et ailleurs" />
      <div className="flex-template">
        {dataHouse.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
