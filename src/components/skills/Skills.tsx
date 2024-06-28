import { useEffect, useState } from "react";
import { SkillsProps } from "../../interfaces";

export const Skills = ({ title, skills }: SkillsProps) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);

  return (
    <>
      {title && <h2>{title}</h2>}
      {!!skills.length && <ul>
        {skills.map((skill, index) => (
          <li key={index + skill}>{skill}</li>
        ))}
      </ul>}
      {
        isLoggedIn ?
          <button onClick={() => setIsLoggedIn(false)}>Logout</button> :
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
      }
    </>
  );
};
