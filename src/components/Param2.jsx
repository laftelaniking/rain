import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Param2 = () => {

    const [params] = useSearchParams()
    console.log(params.size)

    const search = [...params]
    console.log(search)

    return (
        <div>
            {search.map(s => (
                <p>{s[0]} : {s[1]}</p>
            ))}


        </div>
    );
};

export default Param2;