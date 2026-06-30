import { useState, FormEvent } from 'react';
import { Calculator, ArrowRight, Activity, Info, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export default function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [heightFt, setHeightFt] = useState<string>('');
  const [heightIn, setHeightIn] = useState<string>('');
  
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');
  const [colorClass, setColorClass] = useState<string>('');

  const calculateBMI = (e: FormEvent) => {
    e.preventDefault();
    
    let weightKg = 0;
    let heightM = 0;

    if (unitSystem === 'metric') {
      const w = parseFloat(weight);
      const h = parseFloat(height); // in cm
      
      if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        alert('Please enter valid positive numbers for height and weight.');
        return;
      }
      
      weightKg = w;
      heightM = h / 100;
    } else {
      const wLb = parseFloat(weight);
      const hFt = parseFloat(heightFt);
      const hIn = parseFloat(heightIn || '0');

      if (isNaN(wLb) || isNaN(hFt) || wLb <= 0 || hFt < 0 || hIn < 0) {
        alert('Please enter valid positive numbers.');
        return;
      }

      weightKg = wLb * 0.45359237;
      const totalInches = (hFt * 12) + hIn;
      heightM = totalInches * 0.0254;
    }

    if (heightM === 0) return;

    const bmiScore = parseFloat((weightKg / (heightM * heightM)).toFixed(1));
    setBmi(bmiScore);

    // Categories and suggestions
    if (bmiScore < 18.5) {
      setCategory('Underweight');
      setSuggestion('Consider a balanced diet with higher clean calorie density, proper protein intake, and structured strength training at B Natural to build solid muscle mass safely.');
      setColorClass('text-blue-400 border-blue-400/20 bg-blue-500/5');
    } else if (bmiScore >= 18.5 && bmiScore < 25) {
      setCategory('Normal Weight');
      setSuggestion('Great job! You are in a healthy range. Maintain your excellent physical form by combining steady progressive resistance training and cardiovascular fitness in our gym.');
      setColorClass('text-brand-neon border-brand-neon/20 bg-brand-neon/5');
    } else if (bmiScore >= 25 && bmiScore < 30) {
      setCategory('Overweight');
      setSuggestion('A structured caloric deficit paired with high-intensity interval training (HIIT), compound lifting, and consistent cardio cycles at our gym will help you lean down.');
      setColorClass('text-yellow-400 border-yellow-400/20 bg-yellow-500/5');
    } else {
      setCategory('Obese');
      setSuggestion('Focus on active lifestyle habits, structured cardio conditioning, weight loss training programs, and regular personal guidance at B Natural Gym to improve body composition.');
      setColorClass('text-red-400 border-red-400/20 bg-red-500/5');
    }
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setHeightFt('');
    setHeightIn('');
    setBmi(null);
    setCategory('');
    setSuggestion('');
    setColorClass('');
  };

  return (
    <section id="bmi" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-neon tracking-widest uppercase mb-3 block">
            KNOW YOUR NUMBERS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            INTERACTIVE BMI CALCULATOR
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Body Mass Index (BMI) is a quick indicator of body fatness. Check your category and get instant customized fitness recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Calculator Inputs Column */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-neon/5 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none" />
            
            {/* Unit System Select */}
            <div className="flex gap-2 p-1 bg-white/5 rounded-xl mb-8 border border-white/10">
              <button
                type="button"
                id="bmi-system-metric"
                onClick={() => { setUnitSystem('metric'); handleReset(); }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  unitSystem === 'metric' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Metric (cm / kg)
              </button>
              <button
                type="button"
                id="bmi-system-imperial"
                onClick={() => { setUnitSystem('imperial'); handleReset(); }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  unitSystem === 'imperial' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Imperial (ft-in / lbs)
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={calculateBMI} className="flex flex-col gap-6">
              
              {/* Height Inputs */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block mb-2 font-mono">
                  {unitSystem === 'metric' ? 'Your Height (cm)' : 'Your Height'}
                </label>
                
                {unitSystem === 'metric' ? (
                  <input
                    type="number"
                    step="any"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-neon rounded-xl py-3 px-4 text-white font-mono text-sm focus:outline-none transition-colors"
                    required
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="number"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        placeholder="Feet"
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-neon rounded-xl py-3 px-4 text-white font-mono text-sm focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        placeholder="Inches"
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-neon rounded-xl py-3 px-4 text-white font-mono text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Weight Input */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block mb-2 font-mono">
                  {unitSystem === 'metric' ? 'Your Weight (kg)' : 'Your Weight (lbs)'}
                </label>
                <input
                  type="number"
                  step="any"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={unitSystem === 'metric' ? 'e.g. 70' : 'e.g. 154'}
                  className="w-full bg-white/5 border border-white/10 focus:border-brand-neon rounded-xl py-3 px-4 text-white font-mono text-sm focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Form Actions */}
              <div className="flex gap-4 mt-2">
                <button
                  type="submit"
                  id="bmi-calc-btn"
                  className="flex-1 bg-brand-neon hover:scale-105 text-black font-black uppercase tracking-widest text-xs py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calculator className="w-4 h-4 stroke-[2.5]" />
                  <span>Calculate BMI</span>
                </button>
                {(height || weight || heightFt || heightIn || bmi) && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl transition-all cursor-pointer animate-fade-in"
                    title="Reset Fields"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>
          </div>

          {/* Calculator Results Display Column */}
          <div className="lg:col-span-6 flex flex-col justify-center min-h-[300px]">
            {bmi === null ? (
              <div className="text-center p-8 border border-dashed border-zinc-800 rounded-3xl bg-zinc-950/20">
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-600 mx-auto mb-4">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-white text-base uppercase">Interactive Gauge Ready</h3>
                <p className="text-zinc-500 text-xs mt-1.5 max-w-sm mx-auto font-sans">
                  Enter your height and weight on the left and hit calculate to receive instant health metrics and professional training advice.
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-8 rounded-3xl border ${colorClass} transition-all duration-500`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-brand-neon" />
                    <span className="font-display font-black text-sm uppercase tracking-wide text-zinc-300">Your Results</span>
                  </div>
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md text-zinc-400 font-bold uppercase tracking-wider">
                    Computed
                  </span>
                </div>

                <div className="flex items-end gap-3 mb-4">
                  <span className="text-6xl font-display font-black tracking-tighter text-white">
                    {bmi}
                  </span>
                  <div className="mb-2">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">BMI SCORE</p>
                    <p className="text-sm font-display font-extrabold uppercase tracking-wide text-white">
                      {category}
                    </p>
                  </div>
                </div>

                {/* Styled slider bar gauge */}
                <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden mb-8 relative border border-zinc-800">
                  <div 
                    className="absolute top-0 bottom-0 left-0 bg-brand-neon rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(Math.max((bmi / 40) * 100, 10), 100)}%` }}
                  />
                  {/* Category markers */}
                  <div className="absolute top-0 bottom-0 left-[46%] w-0.5 bg-black" title="18.5 limit" />
                  <div className="absolute top-0 bottom-0 left-[62.5%] w-0.5 bg-black" title="25.0 limit" />
                  <div className="absolute top-0 bottom-0 left-[75%] w-0.5 bg-black" title="30.0 limit" />
                </div>

                {/* Suggestion block */}
                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-brand-neon" />
                    B Natural Gym Suggestion
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                    {suggestion}
                  </p>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-neon hover:text-brand-neon-light transition-colors"
                  >
                    <span>Discuss nutrition with us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
