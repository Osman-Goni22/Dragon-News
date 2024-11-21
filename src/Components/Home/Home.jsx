
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import LatestNews from '../LatestNews';
import LeftNavbar from '../LeftNavbar';
import Navbar from '../Navbar';
import RightNavBar from '../RightNavBar';
const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <LatestNews></LatestNews>
            <section className='mt-5'>
                <Navbar></Navbar>
            </section>

            <main className='grid md:grid-cols-12 py-5 gap-4'>
                <aside className='col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'><RightNavBar></RightNavBar></aside>
            </main>
        </div>
    );
};

export default Home;

