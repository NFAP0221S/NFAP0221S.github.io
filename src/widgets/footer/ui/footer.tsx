import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </footer>
  );
};
