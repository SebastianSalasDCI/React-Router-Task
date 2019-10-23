import React from 'react'
import {useRouteMatch,withRouter} from 'react-router-dom'

const Home = withRouter(props => <Home2 {...props}/>);

 function Home2() {
    let {path,url} = useRouteMatch()
    console.log(useRouteMatch())
    console.log(path)
    console.log(url)
    return (
        <div>
            <h2>HOOOOME</h2>
        </div>
    )
}
export default Home;