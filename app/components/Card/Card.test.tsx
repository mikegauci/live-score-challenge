import { render, screen } from "@testing-library/react"

// Component
import { Card } from "@/app/components/Card/Card"

// Types
import { DataItemType } from "@/app/types"

const mockData: DataItemType = {
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
}

describe("Card", () => {
  // Render Check
  describe("Render", () => {
    // Test country text
    it("should render country text", () => {
      let { container } = render(<Card card={mockData} />)

      container = screen.getByText("Russia") // ACT

      expect(container).toBeInTheDocument() // ASSERT
    })

    // Test competition text
    it("should render competition text", () => {
      let { container } = render(<Card card={mockData} />)

      container = screen.getByText("Football National League") // ACT

      expect(container).toBeInTheDocument() // ASSERT
    })

    // Test status text
    it("should render status text", () => {
      let { container } = render(<Card card={mockData} />)

      container = screen.getByText("ENDED") // ACT

      expect(container).toBeInTheDocument() // ASSERT
    })

    // Test score text
    it("should render score text", () => {
      let { container } = render(<Card card={mockData} />)

      container = screen.getByText("0 - 0") // ACT

      expect(container).toBeInTheDocument() // ASSERT
    })

    // Test home team text
    it("should render home team text", () => {
      let { container } = render(<Card card={mockData} />)

      container = screen.getByText("FK Tyumen") // ACT

      expect(container).toBeInTheDocument() // ASSERT
    })

    // Test away team text
    it("should render away team text", () => {
      let { container } = render(<Card card={mockData} />)

      container = screen.getByText("Luch-Energiya Vladivostok") // ACT

      expect(container).toBeInTheDocument() // ASSERT
    })
  })
})
