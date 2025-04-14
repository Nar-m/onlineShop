import Producttitle from "./Producttitle"
import './Product.css';
import Productfilter from "./Productfilter";
import { useState, useContext } from "react";
import Sydbbar from "./Sydbar";
import './Sydbar.css';
import Productcontent from "./Productcontent";
import Btns from "./Btns";
import Searchproduct from "./Searchproduct";
import { ProductContext } from "./Cartprovider";
import Cartproduct from "./Cartproduct";

export default function Product() {
    const { product, setProduct } = useContext(ProductContext)
    const [sydebar, setSydebar] = useState(false);
    const [filtered, seTfiltered] = useState([]);
    const [search, setSearch] = useState(false)
    const [page, setPage] = useState(1);
    const [btnshide, setbtnshide] = useState(true);



    function Showsydbar() {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.456)'
        document.body.style.zIndex = '1000'
        setSydebar(true)
    }

    function Hidesydbar() {
        document.body.style.backgroundColor = 'white'
        setSydebar(false)
    }
    function Showmore() {
        setPage(page + 1)
        if (page * 4 >= product.length && page * 4 >= filtered.length) {
            setbtnshide(false);
        }
    }
    function Handlessearch(text) {
        const filterproduct = product.filter(item => {
            return item.description.toLowerCase().includes(text.toLowerCase())
                || item.title.toLowerCase().includes(text.toLowerCase())
        })
        setSearch(true)
        seTfiltered(filterproduct)
    }

    return (
        <>
            <Producttitle />
            <Searchproduct Handlessearch={Handlessearch} />
            <Productfilter Showsydbar={Showsydbar} />
            <div style={{ minHeight: '100vh' }} className="flex justify-center items-center p-10 flex-wrap">
                {(search ? filtered : product).slice(0, page * 4).map((item, index) => {
                    return <Productcontent product={product} item={item} key={index} />
                })}
            </div>
            {btnshide ? <Btns Showmore={Showmore} /> : ''}
            <Sydbbar sydebar={sydebar} Hidesydbar={Hidesydbar} />
            <Cartproduct />
        </>
    )
}