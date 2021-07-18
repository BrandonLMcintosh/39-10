import { useState } from "react";
import axios from "axios";
import { v4 as UUID } from 'uuid';

const useFlip = (initialValue = false) => {
    const [isFlipped, setIsFlipped] = useState(initialValue);
    const flip = () => {
        setIsFlipped( flipped => !flipped);
    }

    return [isFlipped, flip]
}

const useAxios = () => {
    const [dataArr, setDataArr] = useState([]);
    const addCard = async (url, name=null) => {
        const res = await axios.get(name ? url + name : url);
        console.log(res);
        setDataArr(dataArr => [...dataArr, {...res.data, id: UUID()}]);
    };

    return [dataArr, addCard]
}

export {useFlip, useAxios}