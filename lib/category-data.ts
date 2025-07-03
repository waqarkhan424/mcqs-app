import {
    BookOpenText,
    Monitor,
    BookType,
    Landmark,
    Calculator,
    FlaskConical,
    Atom,
    MoonStar,
    Newspaper,
    BadgeCheck,
} from "lucide-react";

export const categories = [
    { key: "english", label: "English", icon: BookType, color: "text-pink-600" },
    { key: "general-knowledge", label: "General Knowledge", icon: BookOpenText, color: "text-yellow-600" },
    { key: "current-affairs", label: "Current Affairs", icon: Newspaper, color: "text-blue-600" },
    { key: "pakistan-studies", label: "Pakistan Studies", icon: Landmark, color: "text-red-600" },
    { key: "islamic-studies", label: "Islamic Studies", icon: MoonStar, color: "text-orange-600" },
    { key: "mathematics", label: "Mathematics", icon: Calculator, color: "text-purple-600" },
    { key: "everyday-science", label: "Everyday Science", icon: FlaskConical, color: "text-cyan-600" },
    { key: "computer", label: "Computer", icon: Monitor, color: "text-teal-600" },
    { key: "iq", label: "IQ / Logical Reasoning", icon: Atom, color: "text-indigo-600" },
];

export const pastPapers = [
    { key: "fia", label: "FIA", icon: BadgeCheck, color: "text-green-600" },
    { key: "ib", label: "Intelligence Bureau", icon: BadgeCheck, color: "text-lime-500" },
    { key: "asf", label: "ASF", icon: BadgeCheck, color: "text-amber-500" },
    { key: "nab", label: "NAB", icon: BadgeCheck, color: "text-teal-600" },
    // { key: "tehsildar", label: "Tehsildar", icon: BadgeCheck, color: "text-pink-500" },
    // { key: "naib-tehsildar", label: "Naib Tehsildar", icon: BadgeCheck, color: "text-red-500" },
    // { key: "punjab-police", label: "Punjab Police", icon: BadgeCheck, color: "text-blue-600" },
    // { key: "kpk-police", label: "KPK Police", icon: BadgeCheck, color: "text-purple-600" },
    // { key: "nadra", label: "NADRA", icon: BadgeCheck, color: "text-cyan-600" },
];
