import { React, useContext } from 'react'
import { Layout, Button } from 'antd';
import { MainContext } from '../context/application/MainState'
// import { Link } from 'react-router-dom'

const { Header, Content } = Layout;

export const WorkOrders = () => {
    const { state: {user}, dispatch } = useContext(MainContext)
    return (
        <>
        <Header className="frame-navigation" >
            {/* <Link to="/expenses">Expenses</Link>
            <Link style={{margin: '0 0 0 10px' }} to="/invoices">Invoices</Link> */}
            <Button style={{margin: '0 10px'}} onClick={() => console.log(user)}>{user}</Button>
            <Button onClick={() => dispatch({ type: 'SET_USER', payload: 'Jane'} )}>Change</Button>
        </Header>
        <Content style={{ margin: '0 16px' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            This is a mock application being built in the style of an existing application, using promotional material as a model.<br/><br/>
            Now with Context, BrowserRouter, a Reducer, and a cleanly packaged Provider/Consumer component. Work Order page
        </div>
        </Content>
        </>
    )
}

// END of document
