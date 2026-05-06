"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";
import { ISORail } from "./ISORail";

function pageId(pathname: string): string {
  if (pathname === "/") return "home";
  const seg = pathname.split("/")[1];
  return seg || "home";
}

export function Navbar() {
  const pathname = usePathname();
  const current = pageId(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomeOverlay = current === "home" && !scrolled;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        transition: "all .35s ease",
        background: scrolled ? "#ffffff" : "rgba(255,255,255,0)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,.06)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 14px rgba(0,0,0,.05)" : "none",
        paddingTop: isHomeOverlay ? 16 : 0,
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          height: scrolled ? 80 : 104,
          transition: "height .35s ease, background .35s ease, border-radius .35s ease, box-shadow .35s ease, padding .35s ease",
          background: isHomeOverlay ? "rgba(255,255,255,.86)" : "transparent",
          backdropFilter: isHomeOverlay ? "blur(8px) saturate(140%)" : "none",
          WebkitBackdropFilter: isHomeOverlay ? "blur(14px) saturate(160%)" : "none",
          borderRadius: isHomeOverlay ? 14 : 0,
          boxShadow: isHomeOverlay ? "0 12px 40px -16px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.5) inset" : "none",
          padding: isHomeOverlay ? "0 28px" : "0",
          margin: "0 auto",
          maxWidth: isHomeOverlay ? 1280 : 1320,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="navbar-logo"
            src="/assets/aesa-logo-eslogan-color.png"
            alt="AESA · Atenas Energía S.A."
            style={{
              height: scrolled ? 64 : 88,
              width: "auto",
              display: "block",
              transition: "height .3s ease",
            }}
          />
        </Link>

        <nav className={`nav-links${menuOpen ? " open" : ""}`}>
          {NAV.map((n) => {
            const active = current === n.id;
            return (
              <Link
                key={n.id}
                href={n.href}
                onClick={closeMenu}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12.5,
                  fontWeight: active ? 700 : 500,
                  letterSpacing: ".08em",
                  color: active ? "var(--aesa-1)" : "var(--aesa-ink-2)",
                  position: "relative",
                  padding: "8px 0",
                  whiteSpace: "nowrap",
                  transition: "color .2s ease",
                }}
              >
                {n.label}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 2,
                      background: "var(--aesa-1)",
                      borderRadius: 2,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center" }}>
          <ISORail />
          <button
            className="nav-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{ marginLeft: 8 }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
              {menuOpen ? (
                <path d="M2 2 L16 12 M16 2 L2 12" stroke="var(--aesa-ink)" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M0 1 H18" stroke="var(--aesa-ink)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M0 7 H18" stroke="var(--aesa-ink)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M0 13 H18" stroke="var(--aesa-ink)" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
