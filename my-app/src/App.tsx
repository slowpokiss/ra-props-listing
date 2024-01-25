import Listing from "./components/Listing"
import data from "../../data/etsy.json"

export default function App() {
  return (
    <>
      <Listing items={data}/>
    </>
  )
}