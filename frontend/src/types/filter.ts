interface filterTypes {
  category: string;
  price: number[];
  sort: string;
  page:number;
  limit:number;
}

 export interface filterProps {
  filters: filterTypes;
  setFilters: React.Dispatch<React.SetStateAction<filterTypes>>;
}