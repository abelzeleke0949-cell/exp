import React from 'react';

export default function Header({ expenses }) {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    const formattedTotal = '$' + total.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return (
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
                <span className="text-4xl p-2 bg-slate-900 rounded-2xl border border-slate-800">💳</span>
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">ExpenseDesk</h1>
                    <p className="text-sm text-slate-400 font-medium">Personal Finance Tracker</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-xl px-5 py-3 min-w-[140px]">
                    <span className="block text-xs font-semibold text-slate-400 uppercase mb-0.5">Total Spent</span>
                    <span className="text-xl font-bold text-emerald-400 tabular-nums">{formattedTotal}</span>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-xl px-5 py-3 min-w-[100px]">
                    <span className="block text-xs font-semibold text-slate-400 uppercase mb-0.5">Entries</span>
                    <span className="text-xl font-bold text-slate-200 tabular-nums">{expenses.length}</span>
                </div>
            </div>
        </header>
    );
}