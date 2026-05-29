import React from 'react';

export default function ExpenseTable({ expenses, onDeleteExpense }) {

    const formatDate = (dateStr) => {
        if (!dateStr) return '—';
        const [y, m, d] = dateStr.split('-');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
    };

    const getAmountStyle = (amount) => {
        if (amount >= 5000) return { text: 'text-rose-400 font-bold', bg: 'hover:bg-rose-500/5' };
        if (amount >= 1000) return { text: 'text-amber-400 font-bold', bg: 'hover:bg-amber-500/5' };
        if (amount >= 500) return { text: 'text-emerald-400 font-bold', bg: 'hover:bg-emerald-500/5' };
        return { text: 'text-slate-200', bg: 'hover:bg-slate-800/30' };
    };

    return (
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-4 border-b border-slate-800 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 bg-slate-900/20">
                <span className="text-slate-300 font-semibold">Tiers:</span>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> ≥ $500</div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> ≥ $1,000</div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-400" /> ≥ $5,000</div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-800 text-xs font-bold text-slate-400 tracking-wider bg-slate-950/40">
                            <th className="p-4 w-12">#</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Reason</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Bank</th>
                            <th className="p-4 text-right">Amount</th>
                            <th className="p-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50 text-sm">
                        {expenses.map((e, index) => {
                            const styles = getAmountStyle(e.amount);
                            return (
                                <tr key={e.id} className={`transition-colors duration-150 ${styles.bg}`}>
                                    <td className="p-4 text-xs font-mono text-slate-500">{index + 1}</td>
                                    <td className="p-4 whitespace-nowrap font-medium text-slate-300">{formatDate(e.date)}</td>
                                    <td className="p-4 text-slate-200 font-medium">{e.reason}</td>
                                    <td className="p-4 text-slate-300 text-xs">
                                        <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700">{e.category}</span>
                                    </td>
                                    <td className="p-4 text-xs text-slate-400">{e.bank}</td>
                                    <td className={`p-4 text-right font-mono text-base ${styles.text}`}>
                                        {'$' + e.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                    </td>
                                    <td className="p-4 text-center">
                                        <button onClick={() => onDeleteExpense(e.id)} className="text-xs font-semibold text-rose-400 hover:bg-rose-500/10 px-2.5 py-1.5 rounded-lg transition">
                                            🗑 Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {expenses.length === 0 && (
                <div className="p-12 text-center space-y-3 bg-slate-950/20">
                    <span className="block text-4xl">📭</span>
                    <p className="text-sm font-medium text-slate-400">No expenses found. Add your first one above!</p>
                </div>
            )}
        </div>
    );
}