import languageList from "../languages";

export default function Languages({ wrongCount }) {
  
    return (
      <section>
        <ul className="languages">
          {languageList.map((name, index) => {
            const isLost = index < wrongCount;
            return (
              <li key={name} className={isLost ? "lost" : ""}>
                {name}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
  