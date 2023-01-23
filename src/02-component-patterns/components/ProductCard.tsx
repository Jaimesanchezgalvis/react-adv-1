import { createContext } from "react";
import { useProducts } from "../hooks/useProducts";

import styles from "../styles/styles.module.css";
import {
  ProductContextProps,
  ProductCardsProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardsProps) => {
  const { counter, increaseBy } = useProducts();

  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
