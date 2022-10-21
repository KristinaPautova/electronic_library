import React, { useContext, useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import "./RentList.css";
import { useSearchParams } from "react-router-dom";
import { carContextFire } from "../../context/CarContextFire";
import ReactPaginate from "react-paginate";
import RentCard from "../RentCard/RentCard";
import ImageList from "@mui/material/ImageList";
import LiveSearch from "../LiveSearch/LiveSearch";

const RentList = () => {
  // const { getProducts, productsArr, pageTotalCount } =
  //     useContext(productsContextFire);
  //

  const { getCar, carsArr } = useContext(carContextFire);

  //
  const [type, setType] = useState("all");
  //
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const [filtredData, setFiltredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  //

  const getFilteredProducts = () => {
    const filtred = carsArr.filter((item) =>
      item.model?.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (filtred.length) {
      setFiltredData(filtred);
    } else {
      setFiltredData(carsArr);
    }
  };

  useEffect(() => {
    getCar(type);
  }, [type, searchValue]);

  useEffect(() => {
    getFilteredProducts();
  }, [carsArr]);

  let limitPage = 4;
  let pageVisit = limitPage * currentPage;
  let countPage = Math.ceil(carsArr.length / limitPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="main_box">
        <div className="bac_cop">
          <h2>Арендуйте автомобиль</h2>
        </div>
        <div className="filter">
          <Filter type={type} setType={setType} />
        </div>
        <div className="search__box__bac">
          <div className="search__box">
            <LiveSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
        </div>
        {/*<h3>Рекомендуем поблизости</h3>*/}
        <div className="container1">
          {/*<ImageList   sx={{ width: 500, height: 250 }}>*/}
          {filtredData.slice(pageVisit, pageVisit + limitPage).map((item) => (
            <RentCard cars={item} key={item.id} />
          ))}
          {/*</ImageList>*/}
        </div>

        <ReactPaginate
          previousLabel="Prev"
          nextLabel="Next"
          onPageChange={changePage}
          pageCount={countPage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        ></ReactPaginate>
      </div>
    </>
  );
};

export default RentList;
