import { useState } from "react";
import LineChart from "./Line";
import { MaxWidth } from "../../components/MaxWidth";
import {
  CategoriesWrapper,
  CategoryWrapper,
  ChartWrapper,
  Wrapper,
} from "./styles";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { color, getHoverColor } from "chart.js/helpers";

const categories = [
  "Data Analytics",
  "Devops",
  "Frontend",
  "Software Tester",
  "UiUx",
  "Machine Learning",
  "AR & VR",
];

export function Content() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <img
        src="./src/images/bg-img.png"
        className="w-full h-screen" 
      />
      <a href="./graph"  target="_blank">
      <button className="px-5 absolute ml-10 -mt-20 py-3 text-white text-2xl rounded-2xl bg-[#1F3255] hover:bg-[#1F3285] hover:pointer">Show prediction</button>
      </a>
    </>
  );
}
