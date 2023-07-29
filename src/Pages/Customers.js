import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getCustomer } from "../API";


const Customers = () => {
 
  const [customersdata, setCustomersData] = useState([]);
  useEffect(() => {
    getCustomer().then((res) => {
      setCustomersData(res.users);
      // console.log(customersdata);

    })
  });

  const columns=[
    {
      name:'Photo',
      selector: row => row.photo,
      maxWidth: '80px',
    },
    {
      name:'Full Name',
      selector: row => row.name,
      maxWidth: '300px'
    },
    {
      name:'Age',
      selector: row => row.age,
      maxWidth: '80px',
    },
    {
      name:'Email id',
      selector: row => row.email,
      maxWidth: '300px'
    },
    {
      name:'Phone No.',
      selector: row => row.mobile,
      maxWidth: '200px'
    },
    {
      name:'Address',
      selector: row => row.address,
      maxWidth: '600px'
    },
  ];
  const data=customersdata && customersdata.map((user)=>{
    return( {
       id:user.id,
       photo:<img src={user.image} className=" w-10 h-10" alt="img"/>,
      //  photo:user.image,
       name:user.firstName +" "+user.lastName,
       age:user.age,
       email:user.email,
       mobile:user.phone,
       address:user.address.address+" "+user.address.city,
    })
   
  });


  const paginationComponentOptions = {
    noRowsPerPage:true,
  };
  const customStyles = {
    rows: {
      style: {
        minHeight: "45px",
        fontSize: "15px",
        // borderRight:'2px',
        "@media (max-width: 500px)": {
          fontSize: "12px",
        },
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        fontWeight: "bold",
        fontSize: "20px",
        // backgroundColor:"blue",
        
      "@media (max-width: 768px)": {
        paddingLeft: "5px", // override the cell padding for head cells
        paddingRight: "5px",
        fontSize: "15px",
      },
      "@media (max-width: 500px)": {
        paddingLeft: "5px", // override the cell padding for head cells
        paddingRight: "5px",
        fontSize: "12px",
      },
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        "@media (max-width: 500px)": {
          paddingLeft: "5px", // override the cell padding for head cells
          paddingRight: "5px",
          fontSize: "12px",
        },
      },
    },
    pagination: {
      style: {},
    },
  };

  return (
    <div>
      <h3 className="mt-2 ml-4 text-2xl font-medium max-sm:text-xl">Customers</h3>
      <div className="w-full h-[75vh] mt-2">
        {/* <table>
          <thead>
            <tr className=" bg-gray-300 ">
              <th className="border-x-2 ">Photo</th>
              <th className="border-x-2 w-1/6">Full Name</th>
              <th className="border-x-2 w-1/6">Age</th>
              <th className="border-x-2 w-1/6">Email Id</th>
              <th className="border-x-2 w-1/6">Phone No.</th>
              <th className="border-x-2 w-2/6">Address</th>
            </tr>
          </thead>
          <tbody>
            {customersdata &&
              customersdata.map((user) => {
                return (
                  <tr key={user.id}>
                    <th className="border-x-2 font-medium p-2 border-y-2">
                    <img src={user.image} className="w-10 h-8" />
                    </th>
                    <th className="border-x-2 font-medium p-2 border-y-2">
                      {user.firstName} {user.lastName}
                    </th>
                    <th className="border-x-2 font-medium p-2 border-y-2">
                      {user.age}
                    </th>
                    <th className="border-x-2 font-medium p-2 border-y-2">
                      {user.email}
                    </th>
                    <th className="border-x-2 font-medium p-2 border-y-2">
                      {user.phone}
                    </th>

                    <th className="border-x-2 font-medium p-2 border-y-2">
                    {user.address.address} , {user.address.city}
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table> */}
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          customStyles={customStyles}
          className="h-[70vh]"
        />
      </div>
    </div>
  );
};

export default Customers;
