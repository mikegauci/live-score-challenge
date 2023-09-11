import React from "react"

// Styled Components
import styled from "styled-components"

// Types
import { DataType } from "../../types"

interface PropType {
  data: DataType
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

// Styled Components
const FiltersComponent = styled.div`
  background: white;
`

const FilterHeading = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
  padding: 0rem 1rem;
  padding-top: 1.5rem;
`

const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-top: 1px solid gray;
  color: #171717;
  font-size: 18px;
  align-items: center;
`

const FilterCount = styled.div`
  background: black;
  color: white;
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

export const Filters: React.FC<PropType> = ({ data, filter, setFilter }) => {
  return (
    <FiltersComponent>
      <FilterHeading>Filters</FilterHeading>
      <div>
        <FilterBox
          data-testid="all-filter"
          onClick={() => setFilter("all")}
          style={
            filter === "all"
              ? {
                  background: "#e2dae1",
                }
              : {
                  background: "white",
                }
          }
        >
          All <FilterCount>{data?.all?.length}</FilterCount>
        </FilterBox>
        <FilterBox
          data-testid="results-filter"
          onClick={() => setFilter("results")}
          style={
            filter === "results"
              ? {
                  background: "#e2dae1",
                }
              : {
                  background: "white",
                }
          }
        >
          Results <FilterCount>{data?.results?.length}</FilterCount>
        </FilterBox>
        <FilterBox
          data-testid="live-filter"
          onClick={() => setFilter("live")}
          style={
            filter === "live"
              ? {
                  background: "#e2dae1",
                }
              : {
                  background: "white",
                }
          }
        >
          Live <FilterCount>{data?.live?.length}</FilterCount>
        </FilterBox>
        <FilterBox
          data-testid="upcoming-filter"
          onClick={() => setFilter("upcoming")}
          style={
            filter === "upcoming"
              ? {
                  background: "#e2dae1",
                }
              : {
                  background: "white",
                }
          }
        >
          Upcoming <FilterCount>{data?.upcoming?.length}</FilterCount>
        </FilterBox>
      </div>
    </FiltersComponent>
  )
}
