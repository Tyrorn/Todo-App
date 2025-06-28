import React from "react";
import { Filters } from "../types/Filters";

type FilterButtonsProps = {
  filter: Filters;
  onFilterChange: (filter: Filters) => void;
};

const FilterButtons: React.FC<FilterButtonsProps> = ({
  filter,
  onFilterChange,
}) => {
  function handleOnChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    onFilterChange(target.value as Filters);
  }

  return (
    <>
      <form>
        Filter options:
        {(Object.values(Filters) as Filters[]).map((x) => (
          <label key={x}>
            {x}
            <input
              type="radio"
              name="filter"
              value={x}
              checked={x === filter}
              onChange={handleOnChange}
            ></input>
          </label>
        ))}
      </form>
    </>
  );
};

export default FilterButtons;
