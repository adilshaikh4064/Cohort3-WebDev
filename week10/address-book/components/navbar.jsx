// import { NavLink } from "react-router-dom";


// export default function NavBar(){
//     return
//     <>
//         <style>
//         {`
//                 .nav-link {
//                 text-decoration: none;
//                 padding: 5px;
//                 margin: 0;
//                 color: black;
//                 transition: color 0.3s ease-in-out;
//             }

//             .nav-link:hover {
//                 color: red;
//                 cursor: pointer;
//             }

//             .nav-link.active {
//                 color: green;   
//             }
//         `}
//         </style>
//         <nav>
//             <ul style={{listStyle:"none", padding:0, margin:0, display:"flex", gap:15}}>
//                 <li><NavLink to="/" 
//                     className={({isActive})=>(isActive?"nav-link active":"nav-link")}
//                 >
//                 Home</NavLink></li>
//                 <li><NavLink to="/about"
//                     className={({isActive})=>(isActive?"nav-link active":"nav-link")}
//                 >About</NavLink></li>
//                 <li><NavLink to="/products"
//                     className={({isActive})=>(isActive?"nav-link active":"nav-link")}
//                 >Products</NavLink></li>
//             </ul>
//         </nav>
//     </>
//     );
// }


import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        <style>
        {`
            .nav-link {
                text-decoration: none;
                padding: 5px;
                margin: 0;
                color: black;
                transition: color 0.3s ease-in-out;
            }

            .nav-link:hover {
                color: red;
                cursor: pointer;
            }

            /* This automatically applies when the link is active */
            .nav-link.active {
                color: green;
                font-weight: bold;
            }
        `}
        </style>
        
        <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 15 }}>
                <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
            </ul>
        </nav>
        </>
    );
}
