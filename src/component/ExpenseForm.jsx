import React, { useState } from 'react';

export default function ExpenseForm({ onAddExpense, msg, showMsg }) {
    const [amount, setAmount] = useState('');
    const [reason, setReason] = useState('');
    const [bank, setBank] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const parsedAmount = parseFloat(amount);

        if (!parsedAmount || parsedAmount <= 0) return showMsg('⚠️ Please enter a valid amount.', 'error');
        if (!reason.trim()) return showMsg('⚠️ Please enter a reason.', 'error');
        if (!bank) return showMsg('⚠️ Please select a bank.', 'error');
        if (!category) return showMsg('⚠️ Please select a category.', 'error');
        if (!date) return showMsg('⚠️ Please pick a date.', 'error');

        onAddExpense({ amount: parsedAmount, reason: reason.trim(), bank, category, date });

        setAmount('');
        setReason('');
        setBank('');
        setCategory('');
        setDate(new Date().toISOString().split('T')[0]);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl space-y-5 shadow-xl">
            <h2 className="text-lg font-bold text-slate-200">Add New Expense</h2>

            <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Amount ($)</label>
                    <input type="number" placeholder="0.00" min="0" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-emerald-500" />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Reason</label>
                    <input type="text" placeholder="e.g. Groceries, Rent…" value={reason} onChange={(e) => setReason(e.target.value)} className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-emerald-500" />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Bank / Wallet</label>
                    <select value={bank} onChange={(e) => setBank(e.target.value)} className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-emerald-500">
                        <option value="">Select bank</option>
                        <option>Commercial Bank of Ethiopia</option>
                        <option>Awash Bank</option>
                        <option>Abyssinia Bank</option>
                        <option>Dashen Bank</option>
                        <option>Telebirr</option>
                        <option>Cash</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-emerald-500">
                        <option value="">Select category</option>
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
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-emerald-500" />
                </div>
            </div>

            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold py-3 px-4 rounded-xl transition">
                + Add Expense
            </button>

            {msg.text && (
                <div className={`text-center text-xs font-semibold p-3 rounded-xl border ${msg.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}`}>
                    {msg.text}
                </div>
            )}
        </form>
    );
}