"use client";

import { Input } from "@material-tailwind/react";
import { useState } from "react";

//@ts-ignore
export default function SearchComponent({ searchInput, setSearchInput }) {
  return (
    <Input
      value={searchInput}
      //@ts-ignore
      onChange={(e) => setSearchInput(e.target.value)}
      label="Search Images"
      icon={<i className="fa-solid fa-magnifying-glass" />}
    />
  );
}