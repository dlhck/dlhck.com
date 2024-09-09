import Link from "next/link";

export function Navbar() {
    const links = [
        {
            href: '/notes',
            label: 'Notes'
        },
        {
            href: '/essays',
            label: 'Essays'
        },
    ]

    return (
        <nav className="py-4">
            <div className="container flex justify-between items-center">
                <div className="flex font-geist">
                    <div className="h-6 aspect-square mr-2 bg-slate-950 rounded-full"></div>
                    <span className="font-semibold">
                        dlhck.
                    </span>
                </div>
                <ul className="flex gap-6 font-geist font-bold">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}