import React from 'react';

const Navbar = () => {
    return (
        <div className="border border-2 flex justify-between w-full max-w-7xl mx-auto p-2">
            <h2 className="flex gap-6 font-bold">Findly</h2>
            <div>
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>Browse Item</li>
                    <li>Home</li>
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;