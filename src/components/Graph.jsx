import { useState } from "react";
import LineChart from "../pages/Home/Line";
import { MaxWidth } from "./MaxWidth";
import {
  CategoriesWrapper,
  CategoryWrapper,
  ChartWrapper,
  Wrapper,
} from "../pages/Home/styles";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { color, getHoverColor } from "chart.js/helpers";
import { Header } from "./Header";

const categories = [
  "Data Analytics",
  "Devops",
  "Frontend",
  "Software Tester",
  "UiUx",
  "Machine Learning",
  "AR & VR",
];

export default function Graph() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <Header/>
      <MaxWidth className="w-full flex justify-center align-items-center">
        <Wrapper className="w-8/12 rounded-xl p-3">
          <ChartWrapper>
            <LineChart category={selectedCategory} />
          </ChartWrapper>
        </Wrapper>
      </MaxWidth>
    </>
  );
}
