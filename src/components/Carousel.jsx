import { Card } from "./Card";


export const Carousel = ({ items, renderItem, type }) => {
  if (!Array.isArray(items)) return null; // Evita el error de items.map

  return (
    <div className="row gap-2 d-flex overflow-hidden">
      {items.map((item) => {
        const props = renderItem(item); 
        return <Card key={props.id} {...props} type={type} />;
      })}
    </div>
  );
};