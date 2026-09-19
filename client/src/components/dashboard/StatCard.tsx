import React from 'react';

const StatCard = () => {
    return (
        <div className="flex justify-between gap-4">
            <div className="bg-white p-8 text-center shadow-xl">
                <p>Total Reports</p>
                <h2 className="font-bold text-3xl">12</h2>
            </div>
            <div className="bg-white p-8 text-center shadow-xl">
                <p>Active</p>
                <h2 className="font-bold text-3xl">4</h2>
            </div>
            <div className="bg-white p-8 text-center shadow-xl">
                <p>Matches</p>
                <h2 className="font-bold text-3xl">2</h2>
            </div>
            <div className="bg-white p-8 text-center shadow-xl">
                <p>Resolved</p>
                <h2 className="font-bold text-3xl">7</h2>
            </div>
        </div>
    );
};

export default StatCard;