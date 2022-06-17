import React from "react"
import Travel from "./Travel"
import data from "../Data"

export default function Main() {
  const travels = data.map((travel) => (
     <Travel key={travel.title} {...travel} />
  ))
  return <main>{travels}</main>
}
