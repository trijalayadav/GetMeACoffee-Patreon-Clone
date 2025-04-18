"use client"
import React, { useState } from "react";

export default function PaymentPageDark() {
    const [amount, setAmount] = useState("");

    const handlePresetClick = (value) => {
        setAmount(value);
    };

    return (
        <div className="flex items-center justify-center p-4 text-white">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">Make a Payment</h2>

                {/* Name */}
                <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Enter Your Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Message */}
                <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Enter a Message</label>
                    <textarea
                        placeholder="Thanks for your work!"
                        rows={3}
                        className="w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Enter Amount (USD)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="e.g., 10"
                        className="w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Preset Buttons */}
                <div className="flex gap-4 mb-6">
                    {[5, 10, 20].map((val) => (
                        <button
                            key={val}
                            onClick={() => handlePresetClick(val)}
                            className={`px-4 py-2 rounded-xl font-medium transition duration-200 ${amount == val
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                                }`}
                        >
                            ${val}
                        </button>
                    ))}
                </div>

                {/* Pay Button */}
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300">
                    Pay Now
                </button>
            </div>
        </div>
    );
}
