import { Outlet } from "react-router";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

export default function Root (props){
    return(
        <Layout>
            <Header>
                <h1>Root</h1>
            </Header>
            <Content>
                    <Outlet/>
            </Content>
            </Layout>
    )
}