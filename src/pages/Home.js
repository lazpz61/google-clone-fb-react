import React from 'react'
import { BrowserRouter as Router, Switch, route, Link } from "react-router-dom";

function Home() {
    return (
        <div>
        
            <div className="home_header"> 
                <div className="home_headerLeft">
                    <Link ></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Icon/>
                    <Avatar/>
                </div>

                <div className="home_headerRight">

                </div>
            </div>

            <div className="home_body">

            </div>

        </div>
    )
}

export default Home
