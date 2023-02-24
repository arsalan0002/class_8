// import React from "react";
// import ShowData from "./components/showData";

// function App() {
//   const arr = [
//     {
//       id: 1,
//       title: "Hello world",
//       desc: "Azhar Zafar",
//       price: 123,
//     },
//     {
//       id: 1,
//       title: "Hello world",
//       desc: "Azhar Zafar",
//       price: 123,
//     },
//     {
//       id: 1,
//       title: "Hello world",
//       desc: "Azhar Zafar",
//       price: 123,
//     },
//     {
//       id: 1,
//       title: "Hello world",
//       desc: "Azhar Zafar",
//       price: 123,
//     },
//   ];
//   return (
//     <>
//       <div>
//         {/* <showData data={arr} */}
//         <ShowData data={arr} />
//       </div>
//     </>
//   );
// }

// export default App;

// import axios from "axios";
// // import { Button } from "bootstrap";
// import React, { useState } from "react";

// function App() {
//   const { data, setData } = useState([]);
//   let api = "https://jsonplaceholder.typicode.com/todos";
//   let getAPIData = () => {
//     axios
//       .get(api)
//       .then((res) => {
//         console.log(res);
//         setData([...res.data]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//    axios.post(api,{
//     body:''
//    })
//    axios.put(api + "/1",{body:"Custom"})
//    .put
//   };

//   return (
//     <div>
//       <button onClick={getAPIData}>Get Data</button>
//       <div>
//         {data.map((e, i) => {
//           return(

//             <p>{e.title}</p>
//           )
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;


import AppRouter from "./config/approuter";

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
