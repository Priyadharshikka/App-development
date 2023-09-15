import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

function Boutique() {
    return (
<div id="boutique">
<Link to="/login"><button>Admin</button></Link>
{/* <Link to="/userlogin"><button>User</button></Link> */}
</div>
    )
}
export default Boutique