import React from 'react';
import Compare from "./../components/Compare"
import Chart from "../components/Chart";
import NewMembers from "../components/NewMembers";
import LastTransActions from "../components/LastTransActions";

function Home(props) {
    let compare = [
        {title: "Revenue", mount: "2,415", percent: -11.4},
        {title: "Sales", mount: "5,735", percent: -6.76},
        {title: "Cost", mount: "1,890", percent: +13.9},
    ]

    let dataSet = [120, 201, 87, 46, 321, 187, 123, 154, 152, 102, 243, 98]

    return (
        <>
            <div className="flex flex-wrap justify-center w-[85%] absolute right-0">
                {
                    compare.map(item => (
                        <Compare key={Math.random()} {...item}/>
                    ))
                }
                <Chart data={dataSet} title="New Users"/>
                <div className="flex w-full">
                    <NewMembers/>
                    <LastTransActions/>
                </div>
            </div>
        </>
    );
}

export default Home;