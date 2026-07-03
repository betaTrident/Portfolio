"use client";

import dynamic from "next/dynamic";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type CommandProject = {
  title: string;
  slug: string;
  category: string;
};

type CommandMenuContextValue = {
  openCommandMenu: () => void;
};

const CommandMenuContext = createContext<CommandMenuContextValue | null>(null);

const LazyCommandMenuDialog = dynamic(
  () =>
    import("@/components/command-menu-dialog").then(
      (mod) => mod.CommandMenuDialog
    ),
  {
    loading: () => null,
    ssr: false,
  }
);

export function useCommandMenu() {
  const context = useContext(CommandMenuContext);

  if (!context) {
    throw new Error("useCommandMenu must be used inside CommandMenuProvider");
  }

  return context;
}

export function CommandMenuProvider({
  children,
  projects,
}: {
  children: ReactNode;
  projects: CommandProject[];
}) {
  const [open, setOpen] = useState(false);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openCommandMenu = useCallback(() => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setOpen(true);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => {
          if (!current) {
            previousFocusRef.current =
              document.activeElement instanceof HTMLElement
                ? document.activeElement
                : null;
          }

          return !current;
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      previousFocusRef.current?.focus();
    }
  }, [open]);

  const value = useMemo(() => ({ openCommandMenu }), [openCommandMenu]);

  return (
    <CommandMenuContext.Provider value={value}>
      {children}
      {open ? (
        <LazyCommandMenuDialog
          open={open}
          onOpenChange={setOpen}
          projects={projects}
        />
      ) : null}
    </CommandMenuContext.Provider>
  );
}
