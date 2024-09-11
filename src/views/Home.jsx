import React from 'react';
import Compare from "./../components/Compare"

function Home(props) {
    let compare = [
        {title : "Revenue", mount:"2,415" , percent: -11.4},
        {title : "Sales", mount:"5,735" , percent: -6.76},
        {title : "Cost", mount:"1,890" , percent: +13.9},
    ]
    return (
        <div className="w-full basis-[85%] flex">
            {
                compare.map(item=>(
                    <Compare {...item}/>
                ))
            }
        </div>
    );
}

export default Home;