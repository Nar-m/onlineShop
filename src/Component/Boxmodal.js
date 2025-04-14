import ReactDOM from "react-dom"

export default function Boxmodal(props) {
    const { modalimg, index, Slide, Nextslider, Prevslider, Hidemodal } = props
    return (
        ReactDOM.createPortal(
            <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.549)',
                zIndex: '100',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <span onClick={Hidemodal} style={{ position: 'absolute', top: '70px', right: '26%', color: 'white', fontSize: '40px', cursor: 'pointer' }}>&times;</span>

                <i onClick={Prevslider} style={{ fontSize: '3em', color: 'white' }} className="fa-solid fa-caret-left"></i>
                <div className="relative" style={{ boxShadow: '0.1px 0.2px 10px 1px black' }}>
                    <span style={{
                        position: 'absolute',
                        bottom: '5px',
                        right: '2px',
                        color: 'white',
                        fontSize: '18px'

                    }}>{index} / {Slide.length}</span>
                    <img  src={modalimg}></img>
                </div>
                <i onClick={Nextslider} style={{ fontSize: '3em', color: 'white' }} className="fa-solid fa-caret-right"></i>

            </div>, document.getElementById("modal-slide")
        )
    )
}