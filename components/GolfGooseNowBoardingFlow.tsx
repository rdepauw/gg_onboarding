"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function GolfGooseNowBoardingFlow() {
  const [step, setStep] = useState(1);
  const [showDashboard, setShowDashboard] = useState(false);
  const [takeoff, setTakeoff] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [handicap, setHandicap] = useState("");
  const [ghin, setGhin] = useState("");
  const GOALS = ['Driving Accuracy','Distance','Consistency','Short Game','Putting','Mental Game'];
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const MISSES = ['Slice City','Hook the Ball Off the Planet','Fat Shots','Thin Shots','Chipping Y*ps','Three-Putt King','The Shanks','Tempo Troubles'];
  const [selectedMisses, setSelectedMisses] = useState<string[]>([]);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const CLUBS = ['Driver','3 Wood','Hybrid','Irons','Wedges','Putter'];
  const [selectedClubs, setSelectedClubs] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Practice context
  const [playFrequency, setPlayFrequency] = useState("");
  const [practiceTime, setPracticeTime] = useState("");
  const [currentHandicap, setCurrentHandicap] = useState("");
  const [goalHandicap, setGoalHandicap] = useState("");
  const [homeSetup, setHomeSetup] = useState<string[]>([]);
  const [rangeSetup, setRangeSetup] = useState<string[]>([]);
  
  const HOME_OPTIONS = ['Putting Mat','Hitting Net','Large Mirror','Divot Board / Impact Bag','Backyard','Indoor Swing Space','Launch Monitor','Ball Machine'];
  const RANGE_OPTIONS = ['Driving Range','Short Game Area','Putting Green','Chipping Green','Bunker','Full Course Access'];

  const totalSlides = 14;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6, ease: "easeInOut" }
  };

  const toggleIn = (arr: string[], value: string, max?: number): string[] => {
    const exists = arr.includes(value);
    if (exists) return arr.filter(v => v !== value);
    if (max && arr.length >= max) return arr;
    return [...arr, value];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white flex flex-col items-center justify-center p-6 space-y-8 overflow-hidden">
      {!showDashboard ? (
        <>
          <div className="absolute top-2 right-2 flex gap-2 text-[11px]">
            <Button onClick={() => setStep((s) => (s > 1 ? s - 1 : totalSlides))} className="h-6 px-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded">Prev</Button>
            <div className="px-2 py-1 bg-zinc-900 border border-zinc-700 rounded">Slide {step}/{totalSlides}</div>
            <Button onClick={() => setStep((s) => (s < totalSlides ? s + 1 : 1))} className="h-6 px-2 bg-green-600 hover:bg-green-500 text-black rounded">Next</Button>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="slide1" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/images/golf-goose-logo.png" 
                        alt="Golf Goose AI Logo" 
                        className="w-16 h-16 object-contain"
                      />
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Golf Goose Airways</p>
                    </div>
                    <p className="text-xs text-zinc-500">Flight GG-001</p>
                  </div>
                  <CardContent className="space-y-4 text-center p-6">
                    <motion.h1 className="text-3xl font-bold tracking-wide" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ color: '#C3FCD2' }}>
                      <div className="flex items-center justify-center gap-3">
                        <img 
                          src="/images/golf-goose-logo.png" 
                          alt="Golf Goose AI Logo" 
                          className="w-20 h-20 object-contain"
                        />
                        NOW BOARDING
                      </div>
                    </motion.h1>
                    <div className="grid grid-cols-2 text-left text-sm text-zinc-300 font-mono border-y border-zinc-800 py-3">
                      <div>
                        <p className="text-zinc-500 text-xs">Passenger</p>
                        <p className="text-green-400 font-semibold">New Player</p>
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs">Destination</p>
                        <p className="text-green-400 font-semibold">Lower Scores</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm pt-4">Welcome aboard Golf Goose Airways! You're joining an elite crew of golfers ready to train smarter, track feels, and take flight with AI-powered insights.</p>
                    <ul className="text-zinc-300 text-sm list-disc text-left pl-6 space-y-1">
                      <li>Personalized feels and drills</li>
                      <li>Real-time coaching from Goose</li>
                      <li>Smarter performance tracking</li>
                    </ul>
                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <Button onClick={() => setStep(2)} className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 shadow-md">Board Now →</Button>
                      <p className="text-xs text-zinc-500 mt-2">Tap to begin onboarding</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="slide2" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">🎯</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Product Demo</p>
                    </div>
                      <p className="text-xs text-zinc-500">Step 2/13</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    {/* Main Hook */}
                    <div className="space-y-4">
                      <motion.h2 className="text-3xl font-bold tracking-wide" style={{ color: '#C3FCD2' }}>See Golf Goose in Action</motion.h2>
                      <p className="text-zinc-400 text-sm pt-2">Watch how AI coaching transforms your practice</p>
                    </div>

                    {/* Product Demo Video */}
                    <div className="bg-gradient-to-br from-green-600/20 to-zinc-800 rounded-xl p-6 border border-green-600/30 space-y-4 overflow-hidden">
                      {/* Video placeholder */}
                      <div className="w-full aspect-video bg-zinc-900 rounded-lg border border-green-600/30 flex items-center justify-center overflow-hidden">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src="/videos/product-demo.mp4" type="video/mp4" />
                          <div className="text-center p-8 text-zinc-400">
                            <p className="text-4xl mb-2">▶️</p>
                            <p className="text-sm">Product demo video will play here</p>
                            <p className="text-xs text-zinc-500">autoplay, no sound</p>
                          </div>
                        </video>
                      </div>
                    </div>

                    {/* Product Highlights */}
                    <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700 text-left">
                      <p className="text-green-400 font-semibold mb-2">What you'll get:</p>
                      <ul className="text-xs text-zinc-300 space-y-1">
                        <li>🎯 Personalized drills for your swing faults</li>
                        <li>🎙️ AI Coach Goose giving real-time feedback</li>
                        <li>📊 Track your progress and see improvement</li>
                      </ul>
                    </div>

                    {/* Social Proof */}
                    <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700">
                      <p className="text-zinc-300 text-sm">✨ <span className="font-semibold" style={{ color: '#C3FCD2' }}>50,000+ golfers</span> are improving their game with Goose</p>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(1)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3">Back</Button>
                        <Button onClick={() => setStep(3)} className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 shadow-md">Continue →</Button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">See personalized coaching</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="slide3" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">🎯</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Swing Faults</p>
                    </div>
                    <p className="text-xs text-zinc-500">Step 3/14</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    <motion.h2 className="text-3xl font-bold tracking-wide" style={{ color: '#C3FCD2' }}>What Resonates With You?</motion.h2>
                    <p className="text-zinc-400 text-sm pt-2">Pick the swing faults you fight most. We'll create personalized drills just for you.</p>
                    
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      {MISSES.map((miss) => (
                        <Button key={miss} onClick={() => setSelectedMisses(prev => toggleIn(prev, miss, 3))} className={`rounded-xl text-sm border transition-all duration-200 ${selectedMisses.includes(miss) ? 'bg-green-500 text-black border-green-500 shadow-lg' : 'bg-zinc-800 text-white border-zinc-700 hover:bg-green-600 hover:border-green-500'}`}>{miss}</Button>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(2)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3">Back</Button>
                        <Button onClick={() => setStep(4)} disabled={selectedMisses.length === 0} className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-md">Continue →</Button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">Select up to 3 misses</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="slide4" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">🎯</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Personalized Plan</p>
                    </div>
                    <p className="text-xs text-zinc-500">Step 4/14</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    <motion.h2 className="text-3xl font-bold tracking-wide" style={{ color: '#C3FCD2' }}>Your Personalized Practice Plan</motion.h2>
                    <p className="text-zinc-400 text-sm pt-2">Drills, feels, and games designed for your swing faults</p>

                    {/* Sample Drill */}
                    <div className="bg-gradient-to-br from-green-600/20 to-zinc-800 rounded-xl p-4 border border-green-600/30 text-left">
                      <p className="text-green-400 font-semibold mb-2">🎯 Your First Drill</p>
                      <p className="text-sm text-white mb-1">Gate Drill</p>
                      <p className="text-xs text-zinc-300">Place two tees creating a gate. Hit 20 balls through focusing on swing path.</p>
                    </div>

                    {/* Sample Feel */}
                    <div className="bg-gradient-to-br from-green-600/20 to-zinc-800 rounded-xl p-4 border border-green-600/30 text-left">
                      <p className="text-green-400 font-semibold mb-2">🎭 Try This Feel</p>
                      <p className="text-sm text-white mb-1">Gate Feel</p>
                      <p className="text-xs text-zinc-300">Feel the clubhead traveling through the gate. Imagine the clubface is your leading edge.</p>
                    </div>

                    {/* Sample Game */}
                    <div className="bg-gradient-to-br from-green-600/20 to-zinc-800 rounded-xl p-4 border border-green-600/30 text-left">
                      <p className="text-green-400 font-semibold mb-2">🎮 Practice Game</p>
                      <p className="text-sm text-white mb-1">Gate Challenge</p>
                      <p className="text-xs text-zinc-300">Hit 10 balls through the gate. Goal: 7+ successful passes. Track your progress.</p>
                    </div>

                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(3)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3">Back</Button>
                        <Button onClick={() => setStep(5)} className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 shadow-md">Continue →</Button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">Your personalized plan is ready</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="slide4" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">🎯</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Personalized Plan</p>
                    </div>
                    <p className="text-xs text-zinc-500">Step 4/11</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    <motion.h2 className="text-3xl font-bold tracking-wide" style={{ color: '#C3FCD2' }}>Your Personalized Practice Plan</motion.h2>
                    <p className="text-zinc-400 text-sm pt-2">Drills, feels, and games designed for your swing faults</p>

                    {/* Sample Drill */}
                    <div className="bg-gradient-to-br from-green-600/20 to-zinc-800 rounded-xl p-4 border border-green-600/30 text-left">
                      <p className="text-green-400 font-semibold mb-2">🎯 Your First Drill</p>
                      <p className="text-sm text-white mb-1">Gate Drill</p>
                      <p className="text-xs text-zinc-300">Place two tees creating a gate. Hit 20 balls through focusing on swing path.</p>
                    </div>

                    {/* Sample Feel */}
                    <div className="bg-gradient-to-br from-green-600/20 to-zinc-800 rounded-xl p-4 border border-green-600/30 text-left">
                      <p className="text-green-400 font-semibold mb-2">🎭 Try This Feel</p>
                      <p className="text-sm text-white mb-1">Gate Feel</p>
                      <p className="text-xs text-zinc-300">Feel the clubhead traveling through the gate. Imagine the clubface is your leading edge.</p>
                    </div>

                    {/* Sample Game */}
                    <div className="bg-gradient-to-br from-green-600/20 to-zinc-800 rounded-xl p-4 border border-green-600/30 text-left">
                      <p className="text-green-400 font-semibold mb-2">🎮 Practice Game</p>
                      <p className="text-sm text-white mb-1">Gate Challenge</p>
                      <p className="text-xs text-zinc-300">Hit 10 balls through the gate. Goal: 7+ successful passes. Track your progress.</p>
                    </div>

                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(3)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3">Back</Button>
                        <Button onClick={() => setStep(5)} className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 shadow-md">Continue →</Button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">Your personalized plan is ready</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="slide5" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-y-auto max-h-[90vh] shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">✈️</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Account Setup</p>
                    </div>
                    <p className="text-xs text-zinc-500">Step 5/11</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    <motion.h2 className="text-3xl font-bold tracking-wide" style={{ color: '#C3FCD2' }}>Create Your Account</motion.h2>
                    <p className="text-zinc-400 text-sm pt-2">Save your progress and sync across devices</p>
                    
                    {/* Social Auth */}
                    <div className="space-y-3 mt-6">
                      <Button className="w-full bg-white hover:bg-gray-100 text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-2 shadow-md">
                        <span>🔍</span> Continue with Google
                      </Button>
                      <Button className="w-full bg-black hover:bg-gray-900 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 shadow-md">
                        <span>🍎</span> Continue with Apple
                      </Button>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-px bg-zinc-700"></div>
                      <span className="text-xs text-zinc-500">or</span>
                      <div className="flex-1 h-px bg-zinc-700"></div>
                    </div>

                    {/* Email/Password */}
                    <div className="space-y-3 text-left">
                      <Input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email address" 
                        className="bg-zinc-800 border-zinc-700 rounded-xl text-white" 
                        type="email"
                      />
                      <Input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        className="bg-zinc-800 border-zinc-700 rounded-xl text-white" 
                        type="password"
                      />
                      <p className="text-xs text-zinc-400">Already have an account? <span className="text-green-400 cursor-pointer">Sign in</span></p>
                    </div>

                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(4)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3">Back</Button>
                        <Button onClick={() => setStep(6)} disabled={!email || !password} className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-md">Create Account →</Button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">Secure account creation</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div key="slide6" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">🎯</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Gate Information</p>
                    </div>
                    <p className="text-xs text-zinc-500">Step 6/11</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    <motion.h2 className="text-3xl font-bold tracking-wide" style={{ color: '#C3FCD2' }}>Flight Prep: Calibrate Your Game</motion.h2>
                    <p className="text-zinc-400 text-sm pt-2">Set your skill and handicap so Goose can personalize drills and targets.</p>
                    <div className="space-y-3 text-left">
                      <h3 className="text-lg font-semibold">Skill Level</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {['Beginner','High Handicapper','Intermediate','Advanced','Low / Scratch','Plus / Elite'].map((level) => (
                          <Button key={level} onClick={() => setSelectedLevel(level)} className={`rounded-xl text-sm border ${selectedLevel === level ? 'bg-green-500 text-black border-green-500' : 'bg-zinc-800 text-white border-zinc-700 hover:bg-green-600'}`}>{level}</Button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3 text-left">
                      <h3 className="text-lg font-semibold">Handicap Index</h3>
                      <Input value={handicap} onChange={(e) => setHandicap(e.target.value)} placeholder="e.g. 12.5" className="bg-zinc-800 border-zinc-700 rounded-xl text-center text-white" type="number" step="0.1" inputMode="decimal" />
                      <p className="text-xs text-zinc-400">Used to calibrate baselines and goals.</p>
                    </div>
                    <div className="space-y-3 text-left">
                      <h3 className="text-lg font-semibold">GHIN Number <span className="text-zinc-500 text-sm">(optional)</span></h3>
                      <Input value={ghin} onChange={(e) => setGhin(e.target.value)} placeholder="e.g. 1234567" className="bg-zinc-800 border-zinc-700 rounded-xl text-center text-white" type="text" inputMode="numeric" pattern="[0-9]*" />
                      <p className="text-xs text-zinc-400">Enables verification and future auto-sync of your index.</p>
                    </div>
                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(5)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3">Back</Button>
                        <Button onClick={() => setStep(7)} disabled={!selectedLevel || handicap === ''} className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-md">Continue →</Button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">Personalized coaching setup</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 7 && (
              <motion.div key="slide7" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">🏆</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Flight Manifest</p>
                    </div>
                    <p className="text-xs text-zinc-500">Step 7/11</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    <motion.h2 className="text-3xl font-bold tracking-wide" style={{ color: '#C3FCD2' }}>Define Your Mission</motion.h2>
                    <p className="text-zinc-400 text-sm pt-2">Pick up to 3 goals for this season.</p>
                    
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      {GOALS.map((goal) => (
                        <Button key={goal} onClick={() => setSelectedGoals(prev => toggleIn(prev, goal, 3))} className={`rounded-xl text-sm border ${selectedGoals.includes(goal) ? 'bg-green-500 text-black border-green-500' : 'bg-zinc-800 text-white border-zinc-700 hover:bg-green-600'}`}>{goal}</Button>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(6)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3">Back</Button>
                        <Button onClick={() => setStep(8)} disabled={selectedGoals.length === 0} className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-md">Next →</Button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">Select up to 3 goals</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 8 && (
              <motion.div key="slide8" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">🎙️</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Cockpit Check</p>
                    </div>
                    <p className="text-xs text-zinc-500">Step 8/11</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    <motion.h2 className="text-3xl font-bold tracking-wide" style={{ color: '#C3FCD2' }}>Meet Goose</motion.h2>
                    <p className="text-zinc-400 text-sm pt-2">Enable mic and speaker to talk with Goose and preview the AI chat experience.</p>
                    <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 text-left text-sm">
                      <p className="text-green-400 font-semibold mb-1">Sample Chat</p>
                      <p className="text-zinc-300 italic">Goose: "I noticed your tempo tends to quicken under pressure. Want to try a rhythm drill next?"</p>
                    </div>
                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <div className="flex gap-3">
                        <Button onClick={() => { setAudioEnabled(true); setStep(9); }} className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 shadow-md">Enable Mic & Speaker</Button>
                        <Button onClick={() => setStep(9)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3">Skip for Now</Button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">Optional AI coaching setup</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 9 && (
              <motion.div key="slide9" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">✈️</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Flight Plan</p>
                    </div>
                    <p className="text-xs text-zinc-500">Step 9/11</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    <CustomizingFlightPlan onComplete={() => setStep(10)} seconds={3} />
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 10 && (
              <motion.div key="slide11" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">✅</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Final Approach</p>
                    </div>
                    <p className="text-xs text-zinc-500">Step 10/11</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    <motion.h1 className="text-3xl font-bold tracking-wide" style={{ color: '#C3FCD2' }}>You're Cleared for Takeoff</motion.h1>
                    <p className="text-zinc-400 text-sm pt-2">You're all set! Goose is ready to help you practice smarter, play better, and have more fun on the course.</p>
                    
                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <div className="relative">
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 shadow-md" onClick={() => { setTakeoff(true); setTimeout(() => setStep(11), 1200); }}>
                          Ready for Takeoff →
                        </Button>
                        {takeoff && (
                          <motion.div initial={{ y: 0, opacity: 1 }} animate={{ y: -400, opacity: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 -translate-x-1/2 text-4xl">✈️</motion.div>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">Welcome to Golf Goose!</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 11 && (
              <motion.div key="slide11" {...fadeIn}>
                <div className="min-h-screen bg-black text-white p-6 pb-24 pt-20">
                  <div className="max-w-md mx-auto space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h1 className="text-2xl font-semibold">Welcome to GolfGoose!</h1>
                      <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700"></div>
                    </div>

                    {/* Complete Your Profile Checklist */}
                    <Card className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-700 rounded-3xl overflow-hidden shadow-xl">
                      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: '#C3FCD2' }} />
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">🎯</span>
                            <h2 className="text-lg font-semibold" style={{ color: '#C3FCD2' }}>Complete Your Profile</h2>
                          </div>
                          <span className="text-sm text-zinc-400">60%</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-500">✓</span>
                            <span className="text-zinc-300">Account created</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-500">✓</span>
                            <span className="text-zinc-300">Skill level set</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-zinc-500">○</span>
                            <span className="text-zinc-400">Add handicap for personalized targets</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-zinc-500">○</span>
                            <span className="text-zinc-400">Set goals to unlock custom drills</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-zinc-500">○</span>
                            <span className="text-zinc-400">Choose clubs for practice tracking</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-zinc-800">
                          <Button onClick={() => setStep(12)} className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-2 text-sm">
                            Complete Profile →
                          </Button>
                          <button onClick={() => setShowDashboard(true)} className="w-full text-xs text-zinc-500 mt-2 hover:text-zinc-400">
                            Maybe later
                          </button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Activity Calendar */}
                    <Card className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg">
                      <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Activity Calendar</h2>
                        <div className="grid grid-cols-7 gap-2 mb-4">
                          {['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE'].map((day) => (
                            <div key={day} className="text-xs text-zinc-500 text-center font-medium">{day}</div>
                          ))}
                          {['', '', '15', '16', '17', '18', '19'].map((date, i) => (
                            <div 
                              key={i} 
                              className={`aspect-square rounded-xl flex items-center justify-center text-sm font-medium ${
                                date === '17' 
                                  ? 'bg-white text-black' 
                                  : 'bg-zinc-800 text-zinc-400'
                              }`}
                            >
                              {date}
                            </div>
                          ))}
                          {['20', '21', '22', '23', '24', '25', '26'].map((date) => (
                            <div key={date} className="aspect-square rounded-xl flex items-center justify-center text-sm font-medium bg-zinc-800 text-zinc-400">
                              {date}
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-4 text-xs text-zinc-400">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C3FCD2' }}></div>
                            <span>Round</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span>Practice</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span>Mock Swings</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Progress Over Time */}
                    <Card className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg">
                      <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Progress Over Time</h2>
                        <div className="h-32 flex items-end justify-between">
                          <div className="flex flex-col items-center gap-1">
                            <div className="text-xs text-zinc-500">9</div>
                            <div className="text-xs text-zinc-500">8.5</div>
                            <div className="text-xs text-zinc-500">8</div>
                            <div className="text-xs text-zinc-500">7.5</div>
                            <div className="text-xs text-zinc-500">7</div>
                          </div>
                          <div className="flex-1 h-full ml-4 flex items-end justify-between">
                            {['Oct 1', 'Oct 2', 'Oct 2', 'Oct 3'].map((date, i) => (
                              <div key={i} className="flex flex-col items-center gap-2">
                                <div className="relative w-6 h-24">
                                  {i === 1 && (
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: '#C3FCD2' }}></div>
                                  )}
                                </div>
                                <div className="text-xs text-zinc-500">{date}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-2">
                        <span className="text-xl">✨</span>
                        <span>Pre-round Prep</span>
                      </Button>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-2">
                        <span className="text-xl">🔄</span>
                        <span>Log Practice</span>
                      </Button>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-2">
                        <span className="text-xl">🎒</span>
                        <span>Log Round</span>
                      </Button>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-2">
                        <span className="text-xl">💎</span>
                        <span>Test Paywall</span>
                      </Button>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800 p-4">
                      <div className="max-w-md mx-auto flex justify-around">
                        {[
                          { icon: '🏠', label: 'Home', active: true },
                          { icon: '🚩', label: 'Rounds', active: false },
                          { icon: '📚', label: 'Library', active: false },
                          { icon: '🔄', label: 'Practice', active: false },
                          { icon: '✨', label: 'AI Coach', active: false }
                        ].map((item) => (
                          <button
                            key={item.label}
                            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                              item.active ? 'bg-green-500 text-black' : 'text-white'
                            }`}
                          >
                            <span className="text-xl">{item.icon}</span>
                            <span className={`text-xs ${item.active ? 'font-semibold' : 'text-zinc-500'}`}>
                              {item.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 12 && (
              <motion.div key="slide12" {...fadeIn}>
                <Card className="relative bg-gradient-to-br from-zinc-900 to-black w-full max-w-md rounded-3xl border border-zinc-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">🏌️‍♂️</span>
                      <p className="font-semibold tracking-widest text-xs uppercase text-zinc-400">Check Your Bags</p>
                    </div>
                    <p className="text-xs text-zinc-500">Step 12/12</p>
                  </div>
                  <CardContent className="space-y-6 text-center p-6">
                    <motion.h2 className="text-3xl font-bold tracking-wide" style={{ color: '#C3FCD2' }}>Check Your Bags</motion.h2>
                    <p className="text-zinc-400 text-sm pt-2">Pick what you practice with most to get personalized recommendations.</p>
                    <div className="grid grid-cols-3 gap-3">
                      {CLUBS.map((club) => (
                        <Button 
                          key={club} 
                          onClick={() => setSelectedClubs(prev => toggleIn(prev, club))} 
                          className={`rounded-xl text-sm border ${selectedClubs.includes(club) ? 'bg-green-500 text-black border-green-500' : 'bg-zinc-800 text-white border-zinc-700'}`}
                        >
                          {club}
                        </Button>
                      ))}
                    </div>
                    <div className="mt-6 border-t border-dashed border-zinc-700 pt-4">
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(11)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3">Skip for Now</Button>
                        <Button onClick={() => setShowDashboard(true)} disabled={selectedClubs.length === 0} className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl py-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-md">Save Clubs →</Button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">Select your practice clubs</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : null}
    </div>
  );
}

export function CustomizingFlightPlan({ onComplete, seconds = 3 }: { onComplete: () => void, seconds?: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const total = seconds * 1000;
    const tick = (t: number) => {
      const pct = Math.min(1, (t - start) / total);
      setProgress(pct * 100);
      if (pct < 1) {
        raf = requestAnimationFrame(tick);
      } else if (onComplete) {
        onComplete();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seconds, onComplete]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <Card className="bg-zinc-900 w-full max-w-md rounded-3xl shadow-lg p-8 border border-zinc-800 text-center relative overflow-hidden">
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-semibold" style={{ color: '#C3FCD2' }}>Taxiing for Takeoff ✈️</h2>
          <p className="text-zinc-400 text-sm">Customizing your flight plan… syncing preferences, goals, misses, and clubs.</p>

          <div className="relative w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div className="absolute left-0 top-0 h-full bg-green-500" animate={{ width: `${progress}%` }} style={{ width: `${progress}%` }} transition={{ ease: "easeInOut", duration: 0.2 }} />
            <div className="absolute inset-0 flex justify-around items-center">
              {[...Array(8)].map((_, i) => (
                <motion.div key={i} className="w-1 h-3 bg-black/50" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.12 }} />
              ))}
            </div>
          </div>

          <div className="text-xs text-zinc-500">Preparing your flight plan… {Math.round(progress)}%</div>

          <div className="grid grid-cols-2 gap-2 text-left text-xs text-zinc-400">
            <div>🎯 Goals</div><div>✅</div>
            <div>💭 Misses</div><div>✅</div>
            <div>🏌️ Clubs</div><div>✅</div>
            <div>🪶 Voice</div><div>✅</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

