import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const AllUsers = () => {
  const [data, setData] = useState([]);
  const [axiosData, setAxiosData] = useState([]);

  const getFetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((apidata) => setData(apidata));
  };

  const getAxiosData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setAxiosData(res.data);
  };

  console.log(data);
  console.log("From Axios", axiosData);

  useEffect(() => {
    getFetchData();
    getAxiosData();
  }, []);

  // Map Pratice
  //   const me = [
  //     {name: "shade", age: 2},
  //     {name: "james", age: 6},
  //     {name: "Jojn", age: 9}
  //   ]

  return (
    <Container>
      <h2>User Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {/* {me.map((data, i)=> (
            <p key={i}> {data.name} </p>
        ))} */}

          {axiosData.map((data, i) => (
            <tr key={i}>
              <td> {data.name} </td>
              <td> {data.username} </td>
              <td> {data.email} </td>
              <td> {data.address.street} </td>
              <td> {data.phone} </td>
              <td> {data.website} </td>
              <td> {data.company.name} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default AllUsers;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  table {
    border-collapse: collapse;
    width: 80%;
    margin: 30px 0px;
  }

  th {
    background-color: lightgreen;
    color: #fff;
    padding: 10px;
    text-align: left;
    border-bottom: 2px solid #ddd;
  }

  td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  /* tr:nth-child(even) {
    background-color: #ddd;
  } */
`;
