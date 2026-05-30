import React, { useState, useEffect } from 'react';
import Header from "./component/Header"
import ExpenseForm from './component/ExpenseForm'
import ExpenseFilters from './component/ExpenseFilters';
import ExpenseTable from './component/ExpenseTable'

export default function App() {

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenseDesk');
    return saved ? JSON.parse(saved) : [];
  });

  
  const [filterCategory, setFilterCategory] = useState('');
  const [filterBank, setFilterBank] = useState('');
  const [filterDateFrom, setFilterDateFrom] = useState('');
  const [filterDateTo, setFilterDateTo] = useState('');

  const [msg, setMsg] = useState({ text: '', type: '' });

  
  useEffect(() => {
    localStorage.setItem('expenseDesk', JSON.stringify(expenses));
  }, [expenses]);

  const showMsg = (text, type) => {
    setMsg({ text, type });
    setTimeout(() => setMsg({ text: '', type: '' }), 3000);
  };

  const addExpense = (newExpense) => {
    const entry = { ...newExpense, id: Date.now() };
    setExpenses([entry, ...expenses]);
    showMsg('✅ Expense added successfully!', 'success');
  };

 
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  
  const clearFilters = () => {
    setFilterCategory('');
    setFilterBank('');
    setFilterDateFrom('');
    setFilterDateTo('');
  };

  
  const filteredExpenses = expenses.filter(e => {
    if (filterCategory && e.category !== filterCategory) return false;
    if (filterBank && e.bank !== filterBank) return false;
    if (filterDateFrom && e.date < filterDateFrom) return false;
    if (filterDateTo && e.date > filterDateTo) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-8 space-y-8">
        <Header expenses={expenses} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <ExpenseForm onAddExpense={addExpense} msg={msg} showMsg={showMsg} />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <ExpenseFilters
              category={filterCategory} setCategory={setFilterCategory}
              bank={filterBank} setBank={setFilterBank}
              dateFrom={filterDateFrom} setDateFrom={setFilterDateFrom}
              dateTo={filterDateTo} setDateTo={setFilterDateTo}
              onClear={clearFilters}
            />
            <ExpenseTable expenses={filteredExpenses} onDeleteExpense={deleteExpense} />
          </div>
        </div>
      </div>
    </div>
  );
} 
