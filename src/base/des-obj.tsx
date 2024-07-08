import React from 'react';

// Define TypeScript interface for Persona
interface Person {
  name: string;
  age: number;
  secretKey: string;
  position?: string; // Optional property
}

// Define TypeScript interface for the return value of usePersonaContext
interface PersonContext {
  codeName: string;
  age: number;
  geolocation: {
    lat: number;
    lng: number;
  };
}

// Sample persona object
const user: Person = {
  name: 'Tony',
  age: 45,
  secretKey: 'Ironman',
};

// Function renamed to usePersonaContext to avoid conflict with React's useContext
const usePersonaContext = ({
  secretKey: clave,
  age,
}: Person): PersonContext => {
  return {
    codeName: clave,
    age,
    geolocation: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

// React component
const PersonaComponent: React.FC = () => {
  const {
    codeName: nombreClave,
    age: anios,
    geolocation: { lat, lng },
  } = usePersonaContext(user);

  return (
    <div>
      <p>{`Nombre Clave: ${nombreClave}, Años: ${anios}`}</p>
      <p>{`Latitud: ${lat}, Longitud: ${lng}`}</p>
    </div>
  );
};

export { PersonaComponent, usePersonaContext };
