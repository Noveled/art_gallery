import React, { useState } from "react";
import Art from "../componetns/Art";

// class ArtList extends React.Component {
const ArtList = () => {
    const [contents, setContents] = useState([]);
    const [ isLoading , setIsLoding] = useState(true);

    const getData = async () => {
        // const MAIN_URL = 'https://www.dabipyeung.com/baexang_back/product/get_products?';
        // const QUERY = {
        //     cate: 'pp',
        //     limit: '20',
        //     sort: 'new',
        // };
        // const MAIN_URL_QUERY = `${MAIN_URL}cate=${QUERY.cate}&limit=${QUERY.limit}&sort=${QUERY.sort}`;
        // console.log(MAIN_URL_QUERY); // current url

        const MAIN_URL = 'https://www.dabipyeung.com/soaply_backend/model/get_products.php?';
        const QUERY = {
            qnt: '5',
        }
        const MAIN_URL_QUERY = `${MAIN_URL}qnt=${QUERY.qnt}`;
        // console.log(MAIN_URL_QUERY); // current url

        const getContents = await fetch(
            //'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4'
            MAIN_URL_QUERY
        )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            setIsLoding(false);
            setContents(data);
            // return data;
        })
        .catch((error) => {
            console.log(error);
        });
        
        // console.log(getContents);
        // this.setState({contents: getContents, isLoading: false});
    };
    
    getData();
    
    return (
        <div>
            {/* {console.log('화면 갱신됨.')} */}
            { isLoading ? <h2>Data Loading...</h2> : 
                contents.map((content, i) => {
                        return <Art key={i} props={content} />
                    }
                )
            }
        </div>
    )
}

export default ArtList