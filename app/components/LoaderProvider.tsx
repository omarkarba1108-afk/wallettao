"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import TaoLoader from "./TaoLoader";

type Ctx = {
  show: boolean;
  forceShow: () => void;
  hide: () => void;
};

const LoaderCtx = createContext<Ctx | null>(null);

export function LoaderProvider({
  children,
  firstVisitKey = "wallettao_seen_loader",
  autoHideMs = 1500,
}: {
  children: React.ReactNode;
  firstVisitKey?: string;
  autoHideMs?: number;
}) {
  const [show, setShow] = useState(false);

  // Show on first visit only
  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.localStorage.getItem(firstVisitKey);
    if (!seen) {
      setShow(true);
      window.localStorage.setItem(firstVisitKey, "1");
    }
  }, [firstVisitKey]);

  // Auto-hide after delay
  useEffect(() => {
    if (!show || !autoHideMs) return;
    const timer = setTimeout(() => setShow(false), autoHideMs);
    return () => clearTimeout(timer);
  }, [show, autoHideMs]);

  const hide = useCallback(() => setShow(false), []);
  const forceShow = useCallback(() => setShow(true), []);

  return (
    <LoaderCtx.Provider value={{ show, forceShow, hide }}>
      <TaoLoader show={show} onFinished={hide} />
      {children}
    </LoaderCtx.Provider>
  );
}

export function useInitialLoader() {
  const ctx = useContext(LoaderCtx);
  if (!ctx) throw new Error("useInitialLoader must be used within LoaderProvider");
  return ctx;
}