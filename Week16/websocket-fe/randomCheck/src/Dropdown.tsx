import React, { useState, useEffect, useRef } from "react";
import {
    ChevronDown,
    ChevronRight,
    Home,
    Info,
    Palette,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

const menuItems = [
{ label: "Home", href: "#" },

{
    label: "  Explore ATI   ",
    href: "#",

    submenu: [
    {
        label: "About Us ",
        href: "#",

        submenu: [
        { label: " Administrative Training Institute ", href: "#" },
        { label: "  Institutional Mandate ", href: "#" },
        { label: " Institute Structure ", href: "#" },
        { label: "   Director ATI    ", href: "#" },
        { label: " Department of Atomic Energy   ", href: "#" },
        { label: "  ATI Email Directory  ", href: "#" },
        { label: " Contact Us   ", href: "#" },
        ],
    },
    {
        label: "HISTORY ",
        href: "#",
        submenu: [
        { label: "Genesis   ", href: "#" },
        { label: "  History and Foundation Achieved  ", href: "#" },
        ],
    },
    {
        label: "MILESTONES ",
        href: "#",
        submenu: [{ label: "Milestones Achieved  ", href: "#" }],
    },
    ],
},

{
    label: " Training & Events  ",
    href: "#",

    submenu: [
    { label: "Email", href: "#" },
    {
        label: "Training ",
        href: "#",

        submenu: [
        { label: "Training Calendar e", href: "#" },
        { label: "Training Courses", href: "#" },
        { label: "Suggest a New Programme", href: "#" },
        ],
    },
    {
        label: "ATI Events",
        href: "#",

        submenu: [{ label: "Recent and Upcoming Events ", href: "#" }],
    },
    ],
},
{
    label: " Learning Resources   ",
    href: "#",

    submenu: [
    { label: "Course Material", href: "#" },
    { label: "Submit Your Content ", href: "#" },
    { label: "Request Study Materiale", href: "#" },
    ],
},

{
    label: "  Careers at ATI  ",
    href: "#",

    submenu: [
    {
        label: "Recruitment ",
        href: "#",

        submenu: [
        { label: "Vacancies  ", href: "#" },
        { label: "Results ", href: "#" },
        ],
    },
    {
        label: " RULES",
        href: "#",

        submenu: [{ label: "Recruitment Rules ", href: "#" }],
    },
    ],
},
{ label: "FAQ", href: "#" },
{
    label: "Media",
    href: "#",
    submenu: [
    { label: "Photo Gallery   ", href: "#" },
    { label: "Important Events & Awards", href: "#" },
    ],
},

{
    label: " RTI  ",
    href: "#",

    submenu: [
    { label: "Right To Information Portal ", href: "#" },
    { label: "Information under Section 25(3)   ", href: "#" },
    {
        label: "Web cast of RTI Act (Video)",
        href: "#",
    },
    { label: "CPIO & Applette Authority   ", href: "#" },
    { label: " List of APIO, CPIO & AA ", href: "#" },
    { label: " Transparency Officer  ", href: "#" },
    {
        label: "  Information under Section 4(1)(b)",
        href: "#",
    },
    ],
},
];


const SubNavItem = ({ item, isNested }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showOnLeft, setShowOnLeft] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        // If the submenu is open and it's nested, check if it will overflow off the screen
        if (isOpen && menuRef.current && isNested) {
        const rect = menuRef.current.getBoundingClientRect();
        const submenuWidth = 292; // Width of the submenu (w-48 = 12rem = 192px)
        const windowWidth = window.innerWidth;

        // Check if the submenu overflows the window's width on the right
        if (rect.right + submenuWidth > windowWidth) {
            setShowOnLeft(true); // If it does, show on the left side
        } else {
            setShowOnLeft(false); // Otherwise, show on the right side
        }
        }
    }, [isOpen, isNested]);

    return (
    <li ref={menuRef} className="relative group">
        <a
            href={item.href}
            className="flex ml-20 float-right items-center justify-between gap-2 px-4 py-2 text-white hover:bg-white hover:text-black transition-colors duration-300 w-full"
            onClick={(e) => {
            if (item.submenu) {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
            }}
            onMouseEnter={() => item.submenu && setIsOpen(true)}
            // onMouseLeave={() => item.submenu && setIsOpen(false)}
        >
            <span className="flex items-center gap-2">
            {item.icon}
            {item.label}
            </span>
            {item.submenu &&
            (isNested ? (
                <ChevronRight className="w-4 h-4" />
            ) : (
                <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                }`}
                />
            ))}
        </a>
        {item.submenu && isOpen && (
        <ul
            className={`
                ${
                    isNested
                    ? "block absolute top-0 left-20" // Show on the right
                    : "relative left-20 top-0" // Default position for non-nested submenus
                }
                bg-slate-700 shadow-lg rounded-lg overflow-hidden z-50 -ml-1
                w-3xl
            `}
        onMouseEnter={() => setIsOpen(true)}
        >
            {item.submenu.map((subItem, index) => (
                <SubNavItem key={index} item={subItem} isNested={true} />
            ))}
        </ul>
        )}
    </li>
    );
};

const NavItem = ({ item }) => {
const [isOpens, setIsOpens] = useState(false);

return (
    <li className="relative  group">
        <a
            href={item.href}
            className="flex items-center gap-2 px-3  text-white hover:bg-slate-700  transition-colors duration-300"
            onClick={(e) => {
            if (item.submenu) {
                e.preventDefault();
                setIsOpens(!isOpens);
            }
            }}
            onMouseEnter={() => item.submenu && setIsOpens(true)}
            onMouseLeave={() => item.submenu && setIsOpens(false)}
        >
            {item.icon}
            {item.label}
            {item.submenu && (
            <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                isOpens ? "rotate-180" : ""
                }`}
            />
            )}
        </a>
    
    {item.submenu && isOpens && (
        <ul
        className="absolute  top-full min-w-48 w-fit bg-slate-700 shadow-lg rounded-b-lg overflow-hidden z-50"
        onMouseEnter={() => setIsOpens(true)}
        // onMouseLeave={() => setIsOpens(false)}
        >
        {item.submenu.map((subItem, index) => (
            <SubNavItem key={index} item={subItem} isNested={false} />
        ))}
        </ul>
    )}
    </li>
);
};

const Navbar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

return (
    <nav className="bg-slate-700 p-2 shadow-lg">
    <div className="max-w-7xl  ">
        <div className="flex justify-between">
        <div className="flex items-center ">
            <ul className="flex items-center py-2 gap-10">
            {menuItems.map((item, index) => (
                <NavItem key={index} item={item} />
            ))}
            </ul>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center ">
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-slate-300 p-2"
            >
            <ChevronDown
                className={`w-6 h-6 transition-transform duration-200 ${
                isMobileMenuOpen ? "rotate-180" : ""
                }`}
            />
            </button>
        </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
        <div className="md:hidden">
            <ul className="pt-2 pb-4">
            {menuItems.map((item, index) => (
                <NavItem key={index} item={item} />
            ))}
            </ul>
        </div>
        )}
    </div>
    </nav>
);
};

export default Navbar;
