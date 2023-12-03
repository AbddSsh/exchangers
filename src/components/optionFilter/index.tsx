import { FC } from "react";
import styles from "./styles.module.css";
import { ICategories } from "../../model/ICategories";
import { Link } from "react-scroll";

interface OptionFilterProps {
  categories: ICategories;
}

export const OptionFilter: FC<OptionFilterProps> = ({ categories }) => {
  return (
    <div className={styles.filter}>
      {Object.keys(categories).map((category, index) => (
        <Link
          key={index}
          to={category}
          spy={true}
          smooth={true}
          duration={500}
          offset={-85}
          activeClass="active__category"
          className={styles.filter__item}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};
