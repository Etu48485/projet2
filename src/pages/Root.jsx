import { Outlet } from "react-router";

export default function Root (props){
    return(
        <>
            <h1>Root</h1>
            <Outlet/>
        </>
    )
}