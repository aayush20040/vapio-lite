import React from 'react';

export default function Header() {
    return (
        <header className="shadow reletive top-0  text-black " >
            <nav className="px-4 py-2">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                    <a href="/" className="flex items-center">
                        <img
                            src="logo.jpg"
                            className="h-10 w-36"
                            alt="Logo"
                        />
                    </a>

                    <div className="flex space-x-8">
                        <a
                            href="/"
                            className="text-black hover:text-orange-500"
                        >
                            Product
                        </a>
                        <a
                            href="/Industry"
                            className="text-black hover:text-orange-500"
                        >
                            Industry
                        </a>
                        <a
                            href="/Pricing"
                            className="text-black hover:text-orange-500"
                        >
                            Pricing
                        </a>
                        <a
                            href="/Company"
                            className="text-black hover:text-orange-500"
                        >
                            Company
                        </a>
                    </div>

                    <a
                        href="#"
                        className="bg-orange-700 hover:bg-orange-800 text-white py-2 px-4 rounded"
                    >
                        Talk to Expert
                    </a>
                </div>
            </nav>
        </header>
    );
}
