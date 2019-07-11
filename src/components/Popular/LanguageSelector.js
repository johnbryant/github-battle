import React from "react";

const LanguageSelector = ({ language, onSelect }) => {
  const languages = [
    "All",
    "Javascript",
    "Ruby",
    "Java",
    "CSS",
    "Python",
    "PHP",
    "Shell"
  ];

  return (
    <ul className="popular-languages">
      {languages.map(lang => (
        <li
          className={lang === language ? "selected-language" : ""}
          key={lang}
          onClick={onSelect.bind(null, lang)}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelector;
