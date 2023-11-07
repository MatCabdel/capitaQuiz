import { useEffect } from "react";
import axios from "axios";

function Countries() {
 
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then
  })
  return (
    <>
    </>
  )
}

export default Countries;