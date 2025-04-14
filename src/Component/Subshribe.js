import images from './images.webp'
import Email from './Email'

export default function Subshribe(){
    return(
        <div style={{maxWidth: '1200px', width: '100%', textAlign: 'center'}} className="border-2 relative flex justify-between p-10 items-center flex-col">
            <img style={{transform: 'translateY(-100px)'}} src={images}></img>
            <div className='p-5'>
                <span style={{color: '#bb5644', fontWeight: 'bold'}}><span>-</span> <span style={{fontSize: '22px', fontWeight: 'bold'}}>VESTIBULUM</span></span>
            </div>
            <div>
                <h1 style={{textAlign: 'center', fontSize: '38px', fontWeight: '400'}}>Subscribe to our newsletter</h1>
                <span style={{fontSize: '25px'}}>and grab <span style={{color: '#bb5644'}}>30% OFF!</span></span>
            </div>
           <Email/>
        </div>
    )
}