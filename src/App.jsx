import { useState } from "react";
import Products from "./components/Products";
import Basket from "./components/Basket";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 103,
      title: "Business",
      price: 42,
      picture:
        "https://i5.walmartimages.com/seo/DK-Big-Ideas-The-Business-Book-Big-Ideas-Simply-Explained-Paperback-9781465475886_a2601568-2767-4cc9-86b7-cbf3b1aa0a38.edd822cd8e88252ab8712dd4e14d4f43.jpeg",
    },
    {
      id: 101,
      title: "Design",
      price: 29,
      picture:
        "https://m.media-amazon.com/images/I/81gDywN3JFL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 106,
      title: "Economics",
      price: 19,
      picture:
        "https://booksandyou.in/cdn/shop/files/TheEconomicsBook_1.webp?v=1732795447",
    },
    {
      id: 104,
      title: "Literature",
      price: 18,
      picture: "https://images.booksense.com/images/015/491/9781465491015.jpg",
    },
    {
      id: 107,
      title: "JavaScript The Definitive Guide",
      price: 225,
      picture:
        "https://www.oreilly.com/covers/urn:orm:book:9781491952016/300w/",
    },
    {
      id: 102,
      title: "Poetry",
      price: 23,
      picture:
        "https://m.media-amazon.com/images/I/91Mzoi3Z+RL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 105,
      title: "Politics",
      price: 25,
      picture:
        "https://bookazine.com.hk/cdn/shop/products/ed07d7fa693fc323bddb394e163b257a.jpg?v=1589031076",
    },
  ]);

  const [basket, setBasket] = useState([]);

  const handleMove = (product) => {
    const found = basket.find((prod) => prod.id === product.id);

    if (found) {
      setBasket(
        basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  };

  const handleAdd = (product) => {
    setBasket(
      basket.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const handleRemove = (product) => {
    setBasket(basket.filter((prod) => prod.id !== product.id));
  };

  const handleReduce = (product) => {
    setBasket(
      basket.map((item) => {
        if (item.id == product.id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    );
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="display-2 text-warning fw-bold">Bookshop</h1>

        <div className="row">
          <Products products={products} onMove={handleMove} />
          <Basket
            basket={basket}
            onAdd={handleAdd}
            onReduce={handleReduce}
            onRemove={handleRemove}
          />
        </div>
      </div>
    </>
  );
}

async function foo() {
  await new Promise(() => console.log(3));
  console.log(4);
}
