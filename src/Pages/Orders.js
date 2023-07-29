import React, {  useEffect, useState } from "react";
import getOrders from "../API";
import DataTable from "react-data-table-component";




const Orders = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    getOrders().then((res) => {
      setData(res.products);
    });
  });

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      maxWidth: "500px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      maxWidth: "150px",
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      maxWidth: "150px",
    },
    {
      name: "Total Amount",
      selector: (row) => row.total,
      maxWidth: "300px",
    },
    {
      name: "Discounted Amount",
      selector: (row) => row.discountedPrice,
      maxWidth: "400px",
    },
  ];
  const dataList =
    data &&
    data.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price?.toLocaleString('en-US'),
        quantity: product.quantity,
        total: product.total?.toLocaleString('en-US'),
        discountedPrice: product.discountedPrice?.toLocaleString('en-US'),
      };
    });
  // console.log(dataList);
  const paginationComponentOptions = {
    noRowsPerPage: true,
  };
  const customStyles = {
    rows: {
      style: {
        minHeight: "45px",
        fontSize: "15px",
        // borderRight:'2px',
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        fontWeight: "bold",
        fontSize: "20px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
    pagination: {
      style: {},
    },
  };




  return (
    <div>
      <h3 className="mt-2 ml-4 text-2xl font-medium max-sm:text-xl">Orders</h3>
      <div className="w-full h-[70vh] overflow-auto mt-2">
        {/* <table>
          <thead>
            <tr className=" bg-gray-300 ">
              <th className="border-x-2 w-2/6">Title</th>
              <th className="border-x-2 w-1/6">Price</th>
              <th className="border-x-2 w-1/6">Quantity</th>
              <th className="border-x-2 w-1/6">Total</th>
              <th className="border-x-2 w-1/6">Discounted Price</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((product) => {
                return (
                  <tr key={product.id}>
                    <th className="border-x-2 font-medium p-2 border-y-2">
                      {product.title}
                    </th>
                    <th className="border-x-2 font-medium p-2 border-y-2">
                      &#8377;{product.price * 100}
                    </th>
                    <th className="border-x-2 font-medium p-2 border-y-2">
                      {product.quantity}
                    </th>
                    <th className="border-x-2 font-medium p-2 border-y-2">
                      &#8377; {product.total * 100}
                    </th>

                    <th className="border-x-2 font-medium p-2 border-y-2">
                      &#8377;{product.discountedPrice * 100}
                    </th>
                  </tr>
                  
                );
              })}
          </tbody>
        </table> */}
        <DataTable
          columns={columns}
          data={dataList}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          customStyles={customStyles}
          className="h-[70vh]"
        />
      </div>
    </div>
  );
};

export default Orders;
