import Link from "next/link";
import React from "react";

const Films = ({ films }) => {
  // const { items } = films;
  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>{/* {JSON} */}</ul>
    </div>
  );
};

export default Films;

// export async function getStaticProps() {
//   return fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/", {
//     method: "GET",
//     headers: {
//       "X-API-KEY": "4f35a3fb-8eaf-495d-a1e5-53a389c3c2a8",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((films) => {
//       return {
//         props: { films },
//       };
//     });
// }
