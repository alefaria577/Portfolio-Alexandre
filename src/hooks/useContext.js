import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

export default function useContexts() {
  return useContext(DataContext)
}