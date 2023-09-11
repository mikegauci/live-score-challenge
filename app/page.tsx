"use client"
import { useEffect, useState } from "react"

// Styled Components
import styled from "styled-components"

// Data
import rawData from "./data.json"

// Types
import { DataType, DataItemType } from "./types"

// Components
import { CardList } from "./components/CardList/CardList"
import { Filters } from "./components/Filters/Filters"

// Styled Components
const MainComponent = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem;
`

export default function Home() {
  const [data, setData] = useState<DataType>({})
  const [dataToShow, setDataToShow] = useState<DataItemType[] | any[]>([])
  const [filter, setFilter] = useState<string>("all")

  // Set initial Data and prepare it
  useEffect(() => {
    if (rawData && rawData?.length > 0) {
      let filteredResults = rawData?.filter(
        (item) => item?.status?.type === "finished"
      )
      let filteredLive = rawData?.filter(
        (item) => item?.status?.type === "inprogress"
      )
      let filteredUpcoming = rawData?.filter(
        (item) => item?.status?.type === "notstarted"
      )

      setData({
        all: rawData,
        results: filteredResults,
        live: filteredLive,
        upcoming: filteredUpcoming,
      })

      setDataToShow(rawData)
    }
  }, [])

  // Set data based on filters
  useEffect(() => {
    if (filter === "all") {
      setDataToShow(rawData)
    } else if (filter === "results") {
      setDataToShow(data?.results || [])
    } else if (filter === "live") {
      setDataToShow(data?.live || [])
    } else if (filter === "upcoming") {
      setDataToShow(data?.upcoming || [])
    } else {
      setDataToShow([])
    }
  }, [filter])

  return (
    <MainComponent>
      <Filters data={data} setFilter={setFilter} filter={filter} />

      <CardList data={dataToShow} />
    </MainComponent>
  )
}
