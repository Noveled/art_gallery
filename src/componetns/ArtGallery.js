import React, { useRef, useState } from 'react';
import ArtList from './ArtList';

const ArtGallery = () => {
    const [currentForm, setCurrentForm] = useState('');
    const selectedCate = useRef();
    const selectedSort = useRef();
    const selectedLimit = useRef();
    
    const getFormInfo = (e) => {
        e.preventDefault();
        // console.log(selectedCate.current.value);
        // console.log(selectedSort.current.value);
        // console.log(selectedLimit.current.value);

        setCurrentForm({pp: selectedCate.current.value, 
            sort: selectedSort.current.value,
            limit: selectedLimit.current.value,
        })
    }
    // console.log(currentForm);
    return (
        <>
            <h1>ArtGallery</h1>
            <form onSubmit={getFormInfo}>
                <select name="cate" id="cate-select" ref={selectedCate}>
                    <option value="">유형</option>
                    <option value="pic">사진 작품</option>
                    <option value="art">그림 작품</option>
                </select>
                <select name="sort" id="sort-select" ref={selectedSort}>
                    <option value="">정렬 기준</option>
                    <option value="new">신상품</option>
                    <option value="best">조회수</option>
                </select>
                <select name="limit" id="limit-select" ref={selectedLimit}>
                    <option value="">개수</option>
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                </select>
                <input type='text'></input>
                <button>버튼</button>
            </form>

            {/* button 을 클릭하면 data 를 갱신하고, data개수 만큼 ArtList 를 통해 content 생성 */}
            
            <ArtList props={currentForm} />
        </>
    )
}

export default ArtGallery