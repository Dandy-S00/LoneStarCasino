import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Deposit(){const {user}=useAuth();return <><Navbar showDeposit={false}/><section className="deposit-section"><div className="container"><div className="deposit-form-card" style={{maxWidth:560,margin:'0 auto'}}><h2 className="section-title">Make a Deposit</h2><p className="section-subtitle">Add funds securely to your Texas Winners account.</p><p style={{color:'rgba(255,255,255,.7)'}}>Signed in as {user?.email||'player'}.</p><Link to="/games" className="btn-texas">Continue to Games</Link></div></div></section><Footer minimal/></>;} 
