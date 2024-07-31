import React from "react";
import Art from "../componetns/Art";

class ArtList extends React.Component {
    state = {
        isLoading: true,
        contents: [],
    };

    

    getData = async ({props}) => {
        const MAIN_URL = 'https://www.dabipyeung.com/baexang_back/product/get_products?';
        const QUERY = {
            cate: 'pp',
            limit: '20',
            sort: 'new',
        };
        const MAIN_URL_QUERY = `${MAIN_URL}cate=${QUERY.cate}&limit=${QUERY.limit}&sort=${QUERY.sort}`;
        console.log(MAIN_URL_QUERY); // current url

        // const MAIN_URL = 'https://www.dabipyeung.com/soaply_backend/model/get_products.php?';
        // const QUERY = {
        //     qnt: props,
        // }
        // const MAIN_URL_QUERY = `${MAIN_URL}qnt=${QUERY.qnt}`;
        // console.log(MAIN_URL_QUERY); // current url

        const getContents = await fetch(
            //'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4'
            MAIN_URL_QUERY, {
                mode: 'no-cors'
            }
        )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
        // console.log(getContents);
        this.setState({contents: getContents, isLoading: false});
    };

    componentDidMount() {
        // console.log(this.props);
        this.getData(this.props);
        console.log('데이터 갱신 완료');
    }

    render() {
        const { isLoading } = this.state;
        return (
            <div>
                { isLoading ? <h2>Data Loading...</h2> : 
                    this.state.contents.map((content, i) => {
                            return <Art key={i} props={content} />
                        }
                    )
                }
            </div>
        )
    }
}

export default ArtList