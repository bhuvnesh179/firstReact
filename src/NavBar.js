// import React from "react";
// import styled from "styled-components";
// +++++++++==== css COMPONENET ++++++++++++++++ //
// const Nav = styled.div`
//         width: 100%;
//         height: 70px;
//         background-color:#0b2239;
//         display:flex;
//         justify-content:space-between;
//         align-items:center;
//         position: relative;
// `;
// const Title = styled.div`
//             font-size: 30px;
//             color: #fff;
//             font-weight: 600;
//             font-family: Montserrat; sans-srief;
//             text-transform: uppercase;
//             margin-left: 20px;
//             cursor:pointer;
//             &:hover{color:#0f0};
// `;
// const Cartcontainer = styled.div`
//            position: relative;
//            cursor: pointer;
// `;
// const CartIcon = styled.img`
//             height: 48px;
//             margin-right:20px;
//             &:hover{height: 78px;
//                     margin-top: 1px};
// `;
// const Cartcount = styled.div`
//     // background-color:orange;

//     // we can pass color as a property 👇 by this.
//         background-color: ${(props) => props.color};
//          border-radius:50%;
//          padding:4px 8px;
//          position: absolute;
//          right: 10px;
//          top: -5px;
//          font-size: 12px;
//          visibility: ${(props) => props.show?"visible":"hidden"};
//          &:hover{font-size: 40px};
// `;
import React from "react";
import navStyle from "./NavBar.module.css";

class NavBar extends React.Component{
    render(){
        return(
            // <div style={{ width: "100%",
            //               height: 70,
            //               background:"red",
            //               display:"flex",
            //               justifyContent:"space-between"}}>
            // it is different method of styling in which we create another object of style which stores the properties of all styles and we pass object like this 👇
            // <div style = {styles.nav}>
            // {/* <div style={sty  les.title}>
            //         Movie-App
            //     </div> */}
            // <>
            // <Nav>
            //     <Title>  
            //     Movie-App
            //     </Title>
            //     <Cartcontainer>
            //         <CartIcon alt="cart icon" src ="https://cdn-icons-png.flaticon.com/128/891/891462.png"  /> 
            //         <Cartcount color="yellow" show={true}>3</Cartcount>
            //     </Cartcontainer>
                
            // </Nav>
            // </>

            // ++++++++++++++++ css module code ++++++++++++++++ //
            <div className={navStyle.nav}>
                <div className={navStyle.title}>Movie-App</div>
                <div className={navStyle.cartContainer}>
                    <img alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" className={navStyle.cartIcon}/>
                    <div className={navStyle.cartCount}>{this.props.cartCount}</div>
                </div>
            </div>
        )
    }
}

export default NavBar;

// const styles = {
//     nav:{
//         width: "100%",
//         height: 70,
//         background:"#0b2239",
//         display:"flex",
//         justifyContent:"space-between",
//         alignItems:"center",
//         position: "relative"
//     },
//     title:{
//         fontSize: 30,
//         color: "#fff",
//         fontWeight: 600,
//         fontFamily: '"Montserrat", sans-srief',
//         textTransform: "uppercase",
//         marginLeft: 20
//     },
//     cartContainer:{
//         position: "relative",
//         cursor: "pointer",
//     },
    // cartIcon:{
    //     height: 48,
    //     marginRight:20
    // },
//     cartCount:{
//         background:"orange",
//         borderRadius:"50%",
//         padding:"4px 8px",
//         position: "absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12
//     }
// }