import './modalimg.css';

export default function Modaimg({ Images, modal, setModal }) {
    const Nextmodal = () => {
        let curentindex = Images.indexOf(modal)
        if (curentindex >= Images.length - 1) {
            setModal(Images[0])
        }
        else {
            let nextmodal = Images[curentindex + 1]
            setModal(nextmodal)
        }
    }
    const Prevmodal = () => {
        let curentindex = Images.indexOf(modal)
        if (curentindex <= 0) {
            setModal(Images[Images.length - 1])
        }
        else {
            let nextmodal = Images[curentindex - 1]
            setModal(nextmodal)
        }
    }
    return (
        <div className={modal ? 'modal active' : 'modal'}>
            <span onClick={() => setModal(null)} style={{ position: 'absolute', top: '7%', right: '28%', fontWeight: 'bold', cursor: 'pointer', color: 'white', fontSize: '35px' }}>&times;</span>
            <i onClick={Prevmodal} className="fa-solid fa-caret-left"></i>
            <div style={{ boxShadow: '0.5ppx 0.5px 0.5px 0.8px black' }}>
                <img src={modal}></img>
            </div>
            <i onClick={Nextmodal} className="fa-solid fa-caret-right"></i>
        </div>
    )
}