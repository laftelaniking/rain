import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { students } from '../data/data';

const BComp3 = () => {

    const [ id, setId ] = useState("")
    const [ pwd, setPwd ] = useState("")    

    return (
        <div>
            <input type="text" name="id" placeholder='id입력' onChange={(e)=>{setId(e.target.value)}}/>
            <input type="text" name="pwd" placeholder='pw입력' onChange={(e)=>{setPwd(e.target.value)}}/>
            <Link to={
                {
                    pathname : "/param",
                    search : `?id=${id}&pwd=${pwd}`
                }
            }><button>전송</button></Link>
            <br/><br/><hr/><br/>

            <Link to ={
                { pathname : "/param/25" }
            }> variable 25전달 </Link>
            <br/><hr/><br/>

            {students.map(s => (
                <Link to ={
                    { pathname : `/param/${s.name}` }
                }>{s.name}</Link>
            ))}
            <br/><hr/><br/>

            <Link to="/param?num=5&page=3">param전송</Link>
            <Link to= {{
                pathname : "/param",
                search : "?num=11&page=5"
            }} >param전송(query string)</Link>
    
        </div>
    );
};
export default BComp3;