import { Link } from 'react-router-dom';
import AuthGate from '../components/AuthGate';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Admin(){return <AuthGate><Navbar showDeposit={false}/><section className="deposit-section"><div className="container"><h2 className="section-title">Portal Dashboard</h2><p className="section-subtitle">Manage your Texas Winners account.</p><div className="card-texas"><p>Administrative tools are available to authorized portal users.</p><Link to="/account" className="btn-texas-outline">Back to Account</Link></div></div></section><Footer minimal/></AuthGate>;} 
