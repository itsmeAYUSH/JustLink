"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, Unlock, ShieldCheck, KeyRound, AlertCircle } from "lucide-react";

const CORRECT_PIN = "1234";
const MAX_ATTEMPTS = 5;
const LOCKOUT_SECONDS = 15;

export function VaultDemo() {
  const [pin, setPin] = useState<string>("");
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(0);
  const [lockoutRemaining, setLockoutRemaining] = useState<number>(0);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const checkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isLockedOut = lockoutRemaining > 0;

  useEffect(() => {
    return () => {
      if (checkTimeoutRef.current) clearTimeout(checkTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (lockoutRemaining <= 0) return;

    const timer = setTimeout(() => {
      setLockoutRemaining((prev) => {
        if (prev <= 1) {
          setAttempts(0);
          setError("");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [lockoutRemaining]);

  const handleDigit = (digit: string) => {
    if (unlocked || isLockedOut || isChecking) return;
    if (pin.length < 4) {
      const nextPin = pin + digit;
      setPin(nextPin);
      setError("");

      if (nextPin.length === 4) {
        setIsChecking(true);
        if (nextPin === CORRECT_PIN) {
          checkTimeoutRef.current = setTimeout(() => {
            setUnlocked(true);
            setError("");
            setAttempts(0);
            setIsChecking(false);
          }, 200);
        } else {
          checkTimeoutRef.current = setTimeout(() => {
            const nextAttempts = attempts + 1;
            setAttempts(nextAttempts);
            if (nextAttempts >= MAX_ATTEMPTS) {
              setLockoutRemaining(LOCKOUT_SECONDS);
              setError(`Too many wrong attempts (${MAX_ATTEMPTS}/${MAX_ATTEMPTS}).`);
            } else {
              setError(`Incorrect PIN (${nextAttempts}/${MAX_ATTEMPTS}). Try 1234 for demo.`);
            }
            setPin("");
            setIsChecking(false);
          }, 300);
        }
      }
    }
  };

  const clearPin = () => {
    if (isChecking) return;
    setPin("");
    if (!isLockedOut) setError("");
  };

  const handleAutoUnlock = () => {
    if (isLockedOut || isChecking || unlocked) return;
    setError("");
    setPin(CORRECT_PIN);
    setIsChecking(true);
    checkTimeoutRef.current = setTimeout(() => {
      setUnlocked(true);
      setAttempts(0);
      setIsChecking(false);
    }, 200);
  };

  const resetLockoutDemo = () => {
    setLockoutRemaining(0);
    setAttempts(0);
    setPin("");
    setError("");
  };

  const lockAgain = () => {
    if (checkTimeoutRef.current) clearTimeout(checkTimeoutRef.current);
    setUnlocked(false);
    setPin("");
    setError("");
    setAttempts(0);
    setIsChecking(false);
  };

  return (
    <section id="vault" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/[0.06]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-amber-500/[0.08] blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/30 px-3.5 py-1 text-xs font-medium text-amber-300">
            <Lock className="size-3 text-amber-400" />
            <span>Zero-Exposure Privacy</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Locked Folders.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
              Protected by Database RLS.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Lock any folder with a 4-digit PIN. Its links are strictly hidden everywhere—All links, search,
            tags, and count badges—until the PIN is entered on that device.
          </p>
        </div>

        {/* Interactive Vault Playground */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Security Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-[#12141a]/90 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Row Level Security in Postgres</h3>
                  <p className="text-xs text-zinc-400">Not just hidden in the UI; hidden by the database itself.</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Even if someone inspects the network tab or clones the client state, Supabase RLS enforces that
                unlocked sessions cannot query locked links until the authenticated vault function passes.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#12141a]/90 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                  <KeyRound className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Brute-Force & Session Protection</h3>
                  <p className="text-xs text-zinc-400">Salted hashes, attempt limits, and auto-lock.</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                5 consecutive wrong attempts temporarily block entry. Vault unlocks expire automatically after
                10 minutes of inactivity, keeping your shared or unattended device safe.
              </p>
            </div>
          </div>

          {/* Right: Interactive PIN Vault Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md rounded-2xl border border-amber-500/30 bg-[#101217] p-6 shadow-[0_0_50px_-10px_rgba(245,158,11,0.2)]">
              {/* Vault Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className={`size-8 rounded-lg flex items-center justify-center ${unlocked ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                    {unlocked ? <Unlock className="size-4" /> : <Lock className="size-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Confidential Folder</h4>
                    <p className="text-[11px] text-zinc-400">
                      {unlocked ? "Unlocked (Active Session)" : "Locked with 4-Digit PIN"}
                    </p>
                  </div>
                </div>

                {unlocked && (
                  <button
                    onClick={lockAgain}
                    className="text-xs px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition-colors"
                  >
                    Lock Now
                  </button>
                )}
              </div>

              {!unlocked ? (
                /* PIN Entry Screen */
                <div className="pt-6 text-center">
                  <p className="text-xs text-zinc-400 mb-4">
                    Enter the PIN to unlock hidden links <br />
                    <span className="text-amber-400/90 font-mono text-[11px]">(Demo PIN is 1234)</span>
                  </p>

                  {/* 4 PIN Dots */}
                  <div className="flex items-center justify-center gap-3.5 mb-6">
                    {[0, 1, 2, 3].map((index) => {
                      const filled = pin.length > index;
                      return (
                        <div
                          key={index}
                          className={`size-4 rounded-full border transition-all ${
                            filled
                              ? "bg-amber-400 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.7)] scale-110"
                              : "border-zinc-700 bg-zinc-800/50"
                          }`}
                        />
                      );
                    })}
                  </div>

                  {(error || isLockedOut) && (
                    <div className="mb-3 flex flex-col items-center gap-1">
                      <p className="text-xs text-red-400 flex items-center justify-center gap-1">
                        <AlertCircle className="size-3 shrink-0" />
                        <span>
                          {isLockedOut
                            ? `Vault temporarily blocked. Retry in ${lockoutRemaining}s.`
                            : error}
                        </span>
                      </p>
                      {isLockedOut && (
                        <button
                          onClick={resetLockoutDemo}
                          className="text-[11px] text-amber-300/90 hover:text-amber-200 underline"
                        >
                          Reset demo lockout
                        </button>
                      )}
                    </div>
                  )}

                  {/* Number Pad */}
                  <div className="grid grid-cols-3 gap-2.5 max-w-[260px] mx-auto">
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleDigit(num)}
                        disabled={isLockedOut || isChecking}
                        className="h-12 rounded-xl border border-white/10 bg-white/[0.04] text-lg font-semibold text-white hover:bg-white/[0.1] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
                      >
                        {num}
                      </button>
                    ))}
                    <button
                      onClick={clearPin}
                      disabled={isLockedOut || isChecking}
                      className="h-12 rounded-xl border border-white/10 bg-white/[0.02] text-xs font-medium text-zinc-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Clear
                    </button>
                    <button
                      onClick={() => handleDigit("0")}
                      disabled={isLockedOut || isChecking}
                      className="h-12 rounded-xl border border-white/10 bg-white/[0.04] text-lg font-semibold text-white hover:bg-white/[0.1] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
                    >
                      0
                    </button>
                    <button
                      onClick={handleAutoUnlock}
                      disabled={isLockedOut || isChecking}
                      className="h-12 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Auto
                    </button>
                  </div>
                </div>
              ) : (
                /* Unlocked Vault Contents */
                <div className="pt-5 space-y-3">
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="size-4" />
                      Session Unlocked (Auto-locks in 10m)
                    </span>
                    <span className="font-mono text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded">
                      RLS ACTIVE
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-lg border border-white/[0.06] bg-[#161821] hover:border-white/15 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-zinc-200">Q4 Investor Deck & Term Sheet</span>
                        <span className="text-[10px] text-amber-400/90 font-mono">notion.so</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                        Private draft copy with cap table adjustments and valuation models.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg border border-white/[0.06] bg-[#161821] hover:border-white/15 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-zinc-200">Cloud Infrastructure Keys & Vault</span>
                        <span className="text-[10px] text-amber-400/90 font-mono">aws.amazon.com</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                        Production root credentials and backup MFA instructions.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg border border-white/[0.06] bg-[#161821] hover:border-white/15 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-zinc-200">Personal Health & Lab Results</span>
                        <span className="text-[10px] text-amber-400/90 font-mono">myhealth.org</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                        Annual checkup results and specialist prescriptions.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
