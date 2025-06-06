
import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface TransitionContextType {
  completed: boolean;
  toggleCompleted: (value: boolean) => void;
}

interface TransitionProviderProps {
  children: ReactNode;
}

const TransitionContext = createContext<TransitionContextType>({
  completed: true,
  toggleCompleted: () => {},
});

export const TransitionProvider: React.FC<TransitionProviderProps> = ({ children }) => {
  const [completed, setCompleted] = useState<boolean>(true);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider value={{ completed, toggleCompleted }}>
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
