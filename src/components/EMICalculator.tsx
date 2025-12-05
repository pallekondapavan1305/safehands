import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Percent } from 'lucide-react';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const numberOfMonths = tenure;

    if (ratePerMonth === 0) {
      const monthlyEmi = principal / numberOfMonths;
      setEmi(monthlyEmi);
      setTotalInterest(0);
      setTotalAmount(principal);
    } else {
      const monthlyEmi =
        (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) /
        (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);

      const total = monthlyEmi * numberOfMonths;
      const interest = total - principal;

      setEmi(monthlyEmi);
      setTotalInterest(interest);
      setTotalAmount(total);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
              <Calculator className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900">EMI Calculator</h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Calculate your monthly EMI and plan your loan repayment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-modern">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    Loan Amount
                  </label>
                  <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 sm:h-3 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full appearance-none cursor-pointer accent-blue-600 slider touch-manipulation"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1 sm:mt-2">
                  <span>₹10K</span>
                  <span>₹1Cr</span>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Percent className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    Interest Rate (p.a.)
                  </label>
                  <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {interestRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 sm:h-3 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full appearance-none cursor-pointer accent-blue-600 slider touch-manipulation"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1 sm:mt-2">
                  <span>5%</span>
                  <span>20%</span>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    Loan Tenure
                  </label>
                  <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {tenure} months
                  </span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="360"
                  step="6"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 sm:h-3 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full appearance-none cursor-pointer accent-blue-600 slider touch-manipulation"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1 sm:mt-2">
                  <span>6 months</span>
                  <span>30 years</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-modern-lg transform hover:scale-105 transition-transform">
              <div className="text-center">
                <p className="text-blue-100 mb-2 sm:mb-3 text-sm sm:text-lg font-medium">Monthly EMI</p>
                <p className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-1 sm:mb-2">
                  ₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </p>
                <p className="text-blue-200 text-xs sm:text-sm">per month</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all">
                <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 font-medium">Principal Amount</p>
                <p className="text-lg sm:text-xl md:text-2xl font-display font-bold text-green-700">
                  ₹{loanAmount.toLocaleString('en-IN')}
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all">
                <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 font-medium">Total Interest</p>
                <p className="text-lg sm:text-xl md:text-2xl font-display font-bold text-orange-700">
                  ₹{totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 font-medium">Total Amount Payable</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                ₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
