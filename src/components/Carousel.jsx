import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "./Card";


export const Carousel = ({ dataType }) => {
  const { store } = useGlobalReducer();

  const items = dataType === "people" ? store.people : store.planets;

  return (
    <div className="row gap-4 d-flex overflow-hidden">
      {items.map((item) => {
        return <Card key={item.id} data={item} type={dataType} />;
      })}
    </div>
  );
};