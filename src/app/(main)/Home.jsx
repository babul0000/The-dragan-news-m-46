import { redirect } from 'next/navigation';


const dynamicId = "01";

const Home = () => {
    

    redirect(`/category/${dynamicId}`);
};

export default Home;