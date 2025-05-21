export default function Languages({ wrongCount }) {
    const languageNames = [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Typescript",
      "Node.js",
      "Python",
      "Ruby",
      "Assembly",
    ];
  
    return (
      <section>
        <ul className="languages">
          {languageNames.map((name, index) => {
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
  