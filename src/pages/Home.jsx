import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Home(){return <><Navbar/><main className="hero-section"><div className="container text-center"><h1 className="display-3">Texas Winners</h1><p className="lead">Your seat at the table is waiting.</p><div className="d-flex gap-3 justify-content-center flex-wrap"><Link to="/signup" className="btn-texas">Join Now</Link><Link to="/games" className="btn-texas-outline">Play Games</Link></div></div></main><Footer minimal/></>;} 
