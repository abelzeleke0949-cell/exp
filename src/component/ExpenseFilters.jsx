import React from 'react';

export default function ExpenseFilters({ category, setCategory, bank, setBank, dateFrom, setDateFrom, dateTo, setDateTo, onClear }) {
    return (
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Filters</h3>
                <button onClick={onClear} className="text-xs font-medium text-slate-400 hover:text-slate-200 transition">
                    Clear Filters
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none">
                    <option value="">All Categories</option>
                    <option>🍔 Food & Dining</option>
                    <option>🚌 Transport</option>
                    <option>🏠 Housing & Rent</option>
                    <option>🛒 Shopping</option>
                    <option>💊 Health</option>
                    <option>📚 Education</option>
                    <option>🎉 Entertainment</option>
                    <option>💡 Utilities</option>
                    <option>✈️ Travel</option>
                    <option>💰 Savings</option>
                    <option>📦 Other</option>
                </select>

                <select value={bank} onChange={(e) => setBank(e.target.value)} className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none">
                    <option value="">All Banks</option>
                    <option>Commercial Bank of Ethiopia</option>
                    <option>Awash Bank</option>
                    <option>Abyssinia Bank</option>
                    <option>Dashen Bank</option>
                    <option>Telebirr</option>
                    <option>Cash</option>
                    <option>Other</option>
                </select>

                <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none" title="From Date" />
                <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none" title="To Date" />
            </div>
        </div>
    );
}