import './inspirations.css';
import Sliderinspitations from './Sliderinspirations';
import Subshribe from './Subshribe';

export default function Inspirations() {
    return (
        <div>
            <div className="p-10 text-center">
                <span style={{ color: '#bb5644' }}>- <span style={{ marginLeft: '8px', fontWeight: 'bold', color: '#bb5644' }}>BEJEWELERY</span></span>
                <h1 className="title" style={{ marginTop: '15px', fontSize: '80px', lineHeight: '72px', fontWeight: '400', color: '#bb5644' }}>INSPIRATIONS</h1>
            </div>
            <Sliderinspitations/>
            <div className='flex justify-center items-center' style={{minHeight: '50vh'}}>
                <Subshribe/>
            </div>
        </div>
    )
}