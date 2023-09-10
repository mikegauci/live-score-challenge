import React from "react"

// Styled Components
import styled from "styled-components"

// Types
import { DataItemType } from "../types"

// Circular Progressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

// Moment
import moment from "moment"

interface PropType {
  card: DataItemType
}

// Styled Components
export const CardComponent = styled.div`
  background-color: #2f2f2f;
  padding: 30px 10px;
  color: #efefef;
  text-align: center;
`

export const CountryText = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  color: #dfdfdf;
  font-weight: 300;
  letter-spacing: 1px;
  opacity: 90%;
`

export const CompetitionText = styled.div`
  margin: 8px 0;
  font-size: 18px;
  font-weight: 300;
`

export const StatusText = styled.div`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const ScoreText = styled.div`
  margin-top: 30px;
  font-size: 50px;
  font-weight: 300;
`

export const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`

export const Team = styled.div`
  flex: 1;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Progress = styled.div`
  flex: 1;
  max-width: 50px;
  margin: 0 10px;
`

export const Card: React.FC<PropType> = ({ card }) => {
  let status = ""
  let statusColor = "#bbbbbb"

  // Variable to show Circular Progress bar
  let circularProgressBar = (
    <CircularProgressbar
      strokeWidth={2}
      styles={buildStyles({
        pathColor: `#3edd4e`,
        textColor: `#3edd4e`,
        textSize: "25px",
        trailColor: "grey",
      })}
      value={0}
      text={`${card?.liveStatus}\``}
    />
  )

  // Showing Circular Bar based on status
  if (card?.status?.type === "finished") {
    circularProgressBar = (
      <CircularProgressbar
        strokeWidth={2}
        styles={buildStyles({
          pathColor: `#3edd4e`,
          textColor: `#3edd4e`,
          textSize: "25px",
          trailColor: "grey",
        })}
        value={100}
        text={`${card?.liveStatus}`}
      />
    )

    status = "ENDED"
    statusColor = "#3cce4a"
  } else if (card?.status?.type === "inprogress") {
    let liveStatus = 0
    let value = 0

    if (card?.liveStatus) {
      if (card?.liveStatus === "HT") {
        value = 50
      } else {
        liveStatus = parseInt(card?.liveStatus)
        value = liveStatus
      }
    }

    circularProgressBar = (
      <CircularProgressbar
        strokeWidth={2}
        styles={buildStyles({
          pathColor: `#3edd4e`,
          textColor: `#3edd4e`,
          textSize: "25px",
          trailColor: "grey",
        })}
        value={value}
        text={`${card?.liveStatus}`}
      />
    )

    status = "LIVE"
    statusColor = "#e6d01c"
  } else if (card?.status?.type === "notstarted") {
    circularProgressBar = (
      <CircularProgressbar
        strokeWidth={2}
        styles={buildStyles({
          pathColor: `#3edd4e`,
          textColor: `#3edd4e`,
          textSize: "25px",
          trailColor: "grey",
        })}
        value={0}
        text={``}
      />
    )

    status = `${moment.unix(card?.timestamp || 0).format("MMM DD")} ${
      card?.time
    }`
  } else if (card?.status?.type === "canceled") {
    circularProgressBar = (
      <CircularProgressbar
        strokeWidth={2}
        styles={buildStyles({
          pathColor: `#3edd4e`,
          textColor: `#3edd4e`,
          textSize: "25px",
          trailColor: "grey",
        })}
        value={0}
        text={``}
      />
    )

    status = "CANCELLED"
    statusColor = "#eb5c71"
  }

  return (
    <CardComponent key={card?.id}>
      <CountryText>{card?.country}</CountryText>
      <CompetitionText>{card?.competition}</CompetitionText>
      <StatusText
        style={{
          color: statusColor,
        }}
      >
        {status}
      </StatusText>

      <ScoreText>
        {card?.homeScore?.current || 0} - {card?.awayScore?.current || 0}
      </ScoreText>
      <Teams>
        <Team>{card?.homeTeam?.name}</Team>
        <Progress>{circularProgressBar}</Progress>
        <Team>{card?.awayTeam?.name}</Team>
      </Teams>
    </CardComponent>
  )
}
