import React from "react"

// Components
import { Card } from "../Card/Card"

// Styled Components
import styled from "styled-components"

// Types
import { DataItemType } from "../../types"

interface PropType {
  data: DataItemType[]
}

// Styled Components
const CardListComponent = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: 10px;
  column-gap: 10px;
  align-content: center;
  margin: 0 auto;
  margin-top: 30px;

  @media screen and (min-width: 700px) {
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (min-width: 1480px) {
    grid-template-columns: auto auto auto auto;
  }
`

export const CardList: React.FC<PropType> = ({ data }) => {
  return (
    <CardListComponent>
      {data &&
        data?.length > 0 &&
        data?.map((card) => {
          return <Card key={card?.id} card={card} />
        })}

      {data?.length === 0 && <div>No Data Available</div>}
    </CardListComponent>
  )
}
