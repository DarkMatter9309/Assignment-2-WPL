import create from "zustand";

const useStore = create((set) => ({
  properties: [],
  setProperties: (_properties) => set({ properties: _properties }),
  filteredProperties: [],
  setFilteredProperties: (_filteredProperties) =>
    set({ filteredProperties: _filteredProperties }),
  display: "cards",
  setDisplay: (_display) => set({ display: _display }),
  property: {},
  setProperty: (_property) => set({ property: _property }),
}));

export default useStore;
