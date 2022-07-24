import Product from "./Product";

function ProductFeed({ products }) {
  return (
  <>
    <div className="grid grid-flow-row-dense md:grid-cols-2 xl:grid-cols-4 md:-mt-48">

        {products.slice(0, 4).map(({ id, title, description, category, image }) => (
            <Product 
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            image={image}
            />
        ))}

        <img src="https://links.papareact.com/dyz" className="md:col-span-full" alt="" />

        <div className="md:col-span-2">
        {products.slice(4, 5).map(({ id, title, description, category, image }) => (
            <Product 
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            image={image}
            />
        ))}
        </div>    

        {products.slice(5, products.length).map(({ id, title, description, category, image }) => (
            <Product 
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            image={image}
            />
        ))}

        </div>
    </>
  );
}

export default ProductFeed