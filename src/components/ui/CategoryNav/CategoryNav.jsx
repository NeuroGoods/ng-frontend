import { useState } from "react";
import styles from "./CategoryNav.module.css";

function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState(1); // Estado para manejar la categoría seleccionada

  const categories = [
    { id: 1, name: "Sensory-Friendly" },
    { id: 2, name: "Mas visitados" },
    { id: 3, name: "Organización" },
    { id: 4, name: "Recursos Didácticos" },
    { id: 5, name: "Regulación" },
    { id: 6, name: "Moda" },
  ];

  const handleCategoryClick = (id) => {
    setActiveCategory(id); // Actualiza el estado con la categoría seleccionada
  };

  return (
    <nav className={styles.categoryNav}>
      <div className={styles.categoryContainer}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)} // Cambia el estado cuando se hace click
            className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ""}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default CategoryNav;
