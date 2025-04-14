import arrow1 from './arrow1.svg';
import arrow2 from './arrow2.svg';

export default function Arrow(props) {
    const { Images, curentindex, setCurentindex } = props

    const Nextslider = () => {
        if (curentindex === Images.length) {
            setCurentindex(1)
        }
        else {
            setCurentindex(curentindex + 1)
        }
    }
    const Prevslider = () => {
        if (curentindex !== 1) {
            setCurentindex(curentindex - 1)
        }
        else if (curentindex === 1) {
            setCurentindex(Images.length)
        }
    }

    setInterval(() => {
        Nextslider()
    }, 10000);
    return (
        <div className="arrow">
            <img onClick={Prevslider} style={{ marginRight: '10px' }} src={arrow1}></img>
            <img onClick={Nextslider} style={{ marginLeft: '10px' }} src={arrow2}></img>
        </div>
    )
}