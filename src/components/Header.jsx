import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Crest from "./Crest";
import { shopIsOpen } from "../data/departments";

const links = [
    { to: "/house", label: "The House" },
    { to: "/departments", label: "Departments" },
    { to: "/collections", label: "Collections" },
    { to: "/bespoke", label: "Bespoke" },
    ...(shopIsOpen ? [{ to: "/shop", label: "Shop" }] : []),
    { to: "/partnerships", label: "Partnerships" },
];

const icons = {
    search: <><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></>,
    account: <><circle cx="12" cy="8.5" r="3.75" /><path d="M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" /></>,
    bag: <><path d="M5.5 8.5h13l-1 11.5h-11z" /><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" /></>,
};

function IconLink({ to, label, name }) {
    return (
        <Link to={to} aria-label={label} className="grid h-11 w-11 place-items-center text-ivory/85 hover:text-gold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {icons[name]}
            </svg>
        </Link>
    );
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50 border-b border-gold/20 bg-olive-deep pt-[env(safe-area-inset-top)]">
            <div className="wrap flex h-21 items-center justify-between gap-6">
                <Link to="/" className="flex shrink-0 items-center gap-3 no-underline" aria-label="KAFÉERA home">
                    <Crest className="h-11 w-auto sm:h-13" />
                    <span className="font-display text-lg font-medium tracking-[0.14em] text-gold sm:text-[1.375rem] sm:tracking-[0.16em]">KAFÉERA</span>
                </Link>

                <nav
                    id="site-nav"
                    aria-label="Main"
                    className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col border-b border-gold/20 bg-olive-deep px-6 pb-6 pt-2
            lg:static lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:border-0 lg:p-0`}
                >
                    {links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            className={({ isActive }) =>
                                `border-b py-4 text-[0.93rem] no-underline lg:py-1 ${isActive
                                    ? "border-gold/10 text-gold lg:border-gold lg:text-ivory"
                                    : "border-gold/10 text-ivory/85 hover:text-ivory lg:border-transparent"
                                }`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <Link to="/appointments" className="btn btn-gold mt-5 lg:hidden">Private appointment</Link>
                </nav>

                <div className="flex items-center">
                    {shopIsOpen && (
                        <>
                            <span className="hidden sm:contents">
                                <IconLink to="/search" label="Search" name="search" />
                                <IconLink to="/account" label="Your account" name="account" />
                            </span>
                            <IconLink to="/cart" label="Your bag" name="bag" />
                        </>
                    )}
                    <Link to="/appointments" className="btn btn-outline-gold ml-3 hidden px-4.5 py-2.5 text-sm xl:inline-block">
                        Private appointment
                    </Link>
                    <button
                        className="ml-2 grid h-11 w-11 place-items-center text-gold lg:hidden"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="site-nav"
                        onClick={() => setOpen(!open)}
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}