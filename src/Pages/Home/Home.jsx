
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Plantcard from '../../Components/PLantCard/Plantcard';
import { useLoaderData } from 'react-router';

const Home = () => {
//    const [plants,setPlants] =useState([])
//   useEffect(()=>{  fetch('https://openapi.programming-hero.com/api/plants')

//     .then(res=> res.json())
//     .then( data => setPlants(data?.plants))

//   },[]


// )
const {plants} = useLoaderData();

    return (
        <div>
<p className='text-fuchsia-900 font-bold text-4xl mb-5 text-center'>Wellcome to Home Page</p>
<div className=' grid grid-cols-1 md:grid-cols-3' >
    {
   plants.map( plant => <Plantcard key={plant.id} plant={plant

    } ></Plantcard> )
}
</div>

        </div>
    );
};

export default Home;