import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { getInventory } from "../API";
import ReactLoading from "react-loading";
import DataTable from "react-data-table-component";

const Inverntory = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  // let records;

  useEffect(() => {
    setisLoading(true);
    // if(data){
    //   setisLoading(true);
    // }
    getInventory()
      .then((res) => {
        setData(res.products);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[80vh] ">
        <ReactLoading
          type="spinningBubbles"
          color="#764abc"
          height={100}
          width={100}
        />
      </div>
    );

  const columns = [
    {
      name: "Thumbnail",
      selector: (row) => row.photo,
      maxWidth: "150px",
    },
    {
      name: "Title",
      selector: (row) => row.title,
      maxWidth: "500px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      maxWidth: "100px",
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      maxWidth: "300px",
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
      maxWidth: "100px",
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
      maxWidth: "300px",
    },
    {
      name: "Category",
      selector: (row) => row.category,
      maxWidth: "400px",
    },
  ];
  const dataList =
    data &&
    data.map((product) => {
      return {
        id: product.id,
        photo: <img src={product.thumbnail} className="w-10 h-10" alt="img" />,
        title: product.title,
        price: product.price?.toLocaleString('en-US'),
        rating: (
          <StarRatings
            rating={product.rating}
            numberOfStars={5}
            starRatedColor="#f1d045"
            starEmptyColor="#b0b0b0"
            starDimension="20px"
            isAggregateRating="true"
            starSpacing="2px"
            name="rating"
          />
        ),
        stock: product.stock,
        brand: product.brand,
        category: product.category,
      };
    });
  console.log(dataList);
  const paginationComponentOptions = {
    noRowsPerPage: true,
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
      <h3 className="mt-2 ml-4 text-2xl font-medium max-sm:text-xl">Inventory</h3>

      <div className="w-full h-[75vh]">
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

export default Inverntory;
