import { render, screen } from "@testing-library/react"

// User Event
import userEvent from "@testing-library/user-event"

// Component
import { Filters } from "@/app/components/Filters/Filters"

const mockFilter = "true"

const mockSetFilter = jest.fn()

describe("Filters", () => {
  // Render Check
  describe("Render", () => {
    // Test for text
    it("should have Filter text", () => {
      let { container } = render(
        <Filters
          data={{ all: [], results: [], live: [], upcoming: [] }}
          setFilter={mockSetFilter}
          filter={mockFilter}
        />
      )

      container = screen.getByText("Filters") // ACT

      expect(container).toBeInTheDocument() // ASSERT
    })
  })

  // Behaviour Check
  describe("Behaviour", () => {
    it("should call setFilter when all filter is clicked", async () => {
      // ARRANGE
      let { container } = render(
        <Filters
          data={{ all: [], results: [], live: [], upcoming: [] }}
          setFilter={mockSetFilter}
          filter={mockFilter}
        />
      )

      // ACT
      container = screen.getByTestId("all-filter")
      await userEvent.click(container)

      expect(mockSetFilter).toBeCalled() // ASSERT
    })

    it("should call setFilter when results filter is clicked", async () => {
      // ARRANGE
      let { container } = render(
        <Filters
          data={{ all: [], results: [], live: [], upcoming: [] }}
          setFilter={mockSetFilter}
          filter={mockFilter}
        />
      )

      // ACT
      container = screen.getByTestId("results-filter")
      await userEvent.click(container)

      expect(mockSetFilter).toBeCalled() // ASSERT
    })

    it("should call setFilter when live filter is clicked", async () => {
      // ARRANGE
      let { container } = render(
        <Filters
          data={{ all: [], results: [], live: [], upcoming: [] }}
          setFilter={mockSetFilter}
          filter={mockFilter}
        />
      )

      // ACT
      container = screen.getByTestId("live-filter")
      await userEvent.click(container)

      expect(mockSetFilter).toBeCalled() // ASSERT
    })

    it("should call setFilter when upcoming filter is clicked", async () => {
      // ARRANGE
      let { container } = render(
        <Filters
          data={{ all: [], results: [], live: [], upcoming: [] }}
          setFilter={mockSetFilter}
          filter={mockFilter}
        />
      )

      // ACT
      container = screen.getByTestId("upcoming-filter")
      await userEvent.click(container)

      expect(mockSetFilter).toBeCalled() // ASSERT
    })
  })
})
