import { useEffect, useState } from "react";
import { List } from "antd";
import { SendOutlined } from '@ant-design/icons';


export default function FirstPage (props){
    const [list,setlist] = useState([]);

    useEffect(() => {
        loadList();
    },[])
    
    
    
    return(
        <>
            <h1>Page 1</h1>
        </>
    )
}