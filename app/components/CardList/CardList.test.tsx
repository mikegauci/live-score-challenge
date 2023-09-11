import { render, screen } from "@testing-library/react"

// Component
import { CardList } from "@/app/components/CardList/CardList"

// Types
import { DataItemType } from "@/app/types"

const mockData: DataItemType[] = [
  {
    id: "hbaffaf",
    name: "FK Tyumen - Luch-Energiya Vladivostok",
    competitionId: "bbbg",
    competition: "Football National League",
    countryId: "cb",
    country: "Russia",
    timestamp: 1470484800,
    date: "06.08.2016.",
    time: "12:00",
    status: {
      code: 100,
      type: "finished",
    },
    round: {
      round: 6,
    },
    homeTeam: {
      id: 75207,
      name: "FK Tyumen",
      slug: "fk-tyumen",
      gender: "M",
    },
    awayTeam: {
      id: 5852,
      name: "Luch-Energiya Vladivostok",
      slug: "luch-energiya-vladivostok",
      gender: "M",
    },
    homeScore: {
      current: 0,
      period1: 0,
      normaltime: 0,
    },
    awayScore: {
      current: 0,
      period1: 0,
      normaltime: 0,
    },
    liveStatus: "FT",
  },
  {
    id: "gjiedjb",
    name: "Seinajoen JK - Kuopio PS",
    competitionId: "db",
    competition: "Veikkausliiga",
    countryId: "bj",
    country: "Finland",
    timestamp: 1470488400,
    date: "06.08.2016.",
    time: "13:00",
    status: {
      code: 100,
      type: "finished",
    },
    round: {
      round: 1,
    },
    homeTeam: {
      id: 22395,
      name: "Seinajoen JK",
      slug: "seinajoen-jk",
      gender: "M",
    },
    awayTeam: {
      id: 2244,
      name: "Kuopio PS",
      slug: "kuopio-ps",
      gender: "M",

    },
    homeScore: {
      current: 1,
      period1: 1,
      normaltime: 1,
    },
    awayScore: {
      current: 0,
      period1: 0,
      normaltime: 0,
    },
    liveStatus: "FT",
  },
]

describe("CardList", () => {
  // Render Check
  describe("Render", () => {
    // Test empty array
    it('should render "No Data Available" when the array is empty', () => {
      let { container } = render(<CardList data={[]} />)

      container = screen.getByText("No Data Available") // ACT

      expect(container).toBeInTheDocument() // ASSERT
    })

    // Test Data to be displayed
    it("should render a list with correct number of cards", () => {
      render(<CardList data={mockData} />)

      let container = screen.getAllByTestId("card") // ACT

      expect(container.length).toBe(2) // ASSERT
    })
  })
})
