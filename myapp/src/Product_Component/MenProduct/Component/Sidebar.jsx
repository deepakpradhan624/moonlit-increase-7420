import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Stack } from "@chakra-ui/react";

const Sidebar = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const initialState = searchParam.getAll("category");
  const initialRating = searchParam.getAll("rating");
  const initialOrder = searchParam.get("order");
  const [category, setCategory] = useState(initialState || []);
  const [order, setOrder] = useState(initialOrder || "");
  const [rating, setRating] = useState(initialRating || []);

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  const handleRating = (e) => {
    let newRating = [...rating];
    let value = e.target.value;

    if (newRating.includes(value)) {
      newRating.splice(newRating.indexOf(value), 1);
    } else {
      newRating.push(value);
    }
    setRating(newRating);
  };

  const handleChange = (e) => {
    let newCategory = [...category];
    let value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    let params = {
      category,
      rating,
    };
    order && (params.order = order);
    setSearchParam(params);
  }, [category, order, rating]);

  return (
    <>
      <Stack direction={["column", "column", "column"]} w="40%" m="3">
        <Stack>
          <h3> <b>
            Filter by Rating
            </b> 
            </h3>
          <div>
            <input
              type="checkbox"
              value="1"
              onChange={handleRating}
              checked={rating.includes("1")}
            />
            <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
            <br />
            <input
              type="checkbox"
              value="2"
              onChange={handleRating}
              checked={rating.includes("2")}
            />
            <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
            <br />
            <input
              type="checkbox"
              value="3"
              onChange={handleRating}
              checked={rating.includes("3")}
            />
            <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
            <br />
            <input
              type="checkbox"
              value="4"
              onChange={handleRating}
              checked={rating.includes("4")}
            />
            <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
            <br />
            <input
              type="checkbox"
              value="5"
              onChange={handleRating}
              checked={rating.includes("5")}
            />
            <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
            <br />
          </div>
          <br />
        </Stack>
        <Stack>
          <h3> <b>Filter By</b> </h3>
          <div>
            <input
              type="checkbox"
              value="shirt"
              onChange={handleChange}
              checked={category.includes("shirt")}
            />
            <label>  Shirt</label>
            <br />
            <input
              type="checkbox"
              value="tshirt"
              onChange={handleChange}
              checked={category.includes("tshirt")}
            />
            <label>  T-Shirt</label>
            <br />
            <input
              type="checkbox"
              value="jogger"
              onChange={handleChange}
              checked={category.includes("jogger")}
            />
            <label>  Jogger</label>
            <br />
            <input
              type="checkbox"
              value="jacket"
              onChange={handleChange}
              checked={category.includes("jacket")}
            />
            <label>  Jacket</label>
            <br />
            <input
              type="checkbox"
              value="sneaker"
              onChange={handleChange}
              checked={category.includes("sneaker")}
            />
            <label>  Sneaker</label>
          </div>
        </Stack>
        <Stack>
          <h3> <b>Sort By Price</b></h3>
          <div onChange={handleSort}>
            <input
              type="radio"
              name="order"
              value={"asc"}
              checked={order === "asc"}
            />
            
            <label>  Low to High</label>
            <br />
            <input
              type="radio"
              name="order"
              value={"desc"}
              checked={order === "desc"}
            />
            <label>  High to Low</label>
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default Sidebar;
