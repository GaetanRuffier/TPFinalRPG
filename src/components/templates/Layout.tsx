import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>RPG Exploration</header>
      <main>{children}</main>
    </div>
  );
};