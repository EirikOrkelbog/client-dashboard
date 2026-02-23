import Image from "next/image";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">
                <Image src="/vercel.svg" alt="Logo" width={100} height={50} />
            </div>
            <nav>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/clients">Clients</a></li>
                </ul>
            </nav>
        </aside>
    );
}