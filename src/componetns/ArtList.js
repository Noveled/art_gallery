import React from "react";
import Art from "./Art";
import axios from "axios";

class ArtList extends React.Component {
    state = {
        isLoading: true,
        contents: [],
    };

    getData = async () => {
        

        this.props.props === "" ? this.props={cate: "pp", sort: "", limit: "1"} : this.props = this.props;

        const MAIN_URL = 'https://www.dabipyeung.com/baexang_back/product/get_products?';
        const QUERY = {
            cate: this.props.cate,
            limit: this.props.limit,
            sort: this.props.sort,
        };
        const MAIN_URL_QUERY = `${MAIN_URL}cate=${QUERY.cate}&limit=${QUERY.limit}&sort=${QUERY.sort}`;
        console.log(MAIN_URL_QUERY); // current url

        const getContents = await axios.get(MAIN_URL_QUERY);
        console.log(getContents.data);
        this.setState({contents: getContents.data, isLoading: false});
    };

    componentDidMount() {
        console.log(this.props);
        this.getData();
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