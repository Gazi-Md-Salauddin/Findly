import { PlusSquare } from 'lucide-react';
import Link from 'next/link';
import StatCard from '@/components/dashboard/StatCard';

const DashboardPage = () => {
    return (
        <div>
            <div className="h-screen py-6 flex bg-slate-50/60">
                <div className="max-w-7xl w-full justify-between pl-26">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-bold text-3xl">Welcome Back,Salauddin!</h2>
                            <p>Here's whats happening with yours reports.</p>
                        </div>
                        <div>
                            <Link href="/report-item" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-2xl shadow-md shadow-blue-500/20 transition-all text-sm sm:text-base cursor-pointer">
                                <PlusSquare className="w-4 h-4" />
                                <span>Report Item</span>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8">
                        <StatCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;