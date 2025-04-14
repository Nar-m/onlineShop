export default function Slider({item, curentindex}){
    return(
        <div style={{
            position: 'absolute',  
            transform: 'translateY(-150px)',
            height: '100%',
            width: '100%',
            transition: ' 0.8s all',
            transform: `translateX(-${curentindex ? '100px' : '0px'})`,
            opacity: `${curentindex ? '1': '0'}`
            }}>
            <img style={{ width: '100%',height: '100%'}}  src={item.img}></img>
        </div>
    )
}