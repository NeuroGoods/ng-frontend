import styles from "./CategoryNav.module.css";

function CategoryNav() {
    const categories = [
      { id: 1, name: "Sensory-Friendly", active: true },
      { id: 2, name: "Mas visitados", active: false },
      { id: 3, name: "Organización", active: false },
      { id: 4, name: "Recursos Didácticos", active: false },
      { id: 5, name: "Regulación", active: false },
      { id: 6, name: "Moda", active: false },
    ];

    return (
      <nav className={styles.categoryNav}>
        <div className={styles.categoryContainer}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${category.active ? styles.active : ""}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className={styles.categoryIndicator} />
      </nav>
    );
}

export default CategoryNav;
