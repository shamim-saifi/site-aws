import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgentAddMoneyApi } from "../../redux/actions/paymentAction";
import { useDispatch } from "react-redux";

const quickAmounts = [100, 200, 500];

const AgentAddMoney = () => {
    const [amount, setAmount] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleQuickSelect = (value) => setAmount(value);

    const handleAddMoney = async () => {
        if (!amount || isNaN(amount)) return;
        // alert(`₹${amount} added (implement API)`);
        await dispatch(AgentAddMoneyApi(amount));
        navigate("/agent/payment");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 space-y-6">
                <h2 className="text-2xl font-bold text-orange-600 text-center">Add Money to Wallet</h2>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Enter Amount (₹)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Eg. 500"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                </div>

                <div className="flex gap-3 flex-wrap">
                    {quickAmounts.map((amt) => (
                        <button
                            key={amt}
                            onClick={() => handleQuickSelect(amt)}
                            className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition cursor-pointer"
                        >
                            ₹{amt}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleAddMoney}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition cursor-pointer"
                >
                    Add Money
                </button>

                <button
                    onClick={() => navigate(-1)}
                    className="w-full text-gray-500 underline text-sm mt-2 cursor-pointer"
                >
                    Cancel & Go Back
                </button>
            </div>
        </section>
    );
};

export default AgentAddMoney;
