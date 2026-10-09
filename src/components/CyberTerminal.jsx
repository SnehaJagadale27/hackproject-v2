import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CyberTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ NexCore Cybernetic Console v2.6.0 [Ready]' },
    { type: 'system', text: 'Type "help" or click suggestions below to test commands.' },
  ]);
  const [isExecuting, setIsExecuting] = useState(false);
  const bottomRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  • team       - Print NexCore squad roster & telemetry',
      '  • projects   - List all deployed production projects',
      '  • run test   - Execute automated neural benchmark suite',
      '  • stats      - Show hackathon metrics & uptime',
      '  • clear      - Flush terminal buffer',
    ],
    team: () => [
      '👑 SQUAD ROSTER [NexCore]:',
      '  [1] Abhay Chougule   -> AI & Data Science Engineer (C++, PyTorch, LangChain)',
      '  [2] Avinash Kamble   -> Fullstack & Cloud Architect (React, Node, Firebase, AWS)',
      '  [3] Sneha Jagadale   -> AI/ML Researcher & Innovation Specialist (IIT Bombay CA)',
      '  [4] Sandhya Hake     -> AI/ML & Embedded Software Developer (RV Techniques)',
    ],
    projects: () => [
      '🚀 ACTIVE PROJECT DEPLOYMENTS (8 Projects Live):',
      '  [1] Digital Library System   (React, Firebase, Firestore) -> LIVE: 5,000+ records',
      '  [2] MedVision AI Classifier  (PyTorch, ResNet, OpenCV)   -> 96.4% Acc',
      '  [3] CogniHire LLM Engine     (LangChain, ChromaDB, RAG)  -> Production Ready',
      '  [4] NexCode Cloud IDE        (WebContainers, WebSockets) -> Sub-40ms latency',
      '  [5] AeroSense IoT Mesh       (ESP32, MQTT, AWS IoT)      -> 24/7 Telemetry',
      '  [6] FinPulse Sentiment AI    (FinBERT, NLP, Pandas)      -> Alpha Signal',
      '  [7] NeuroShield Threat AI    (Deep Autoencoders, PyTorch)-> 99.1% Intrusion Def',
      '  [8] AgroVision Drone AI      (YOLOv8, Edge AI, ESP32)    -> 97.8% Blight Vision',
    ],
    stats: () => [
      '📊 SYSTEM TELEMETRY:',
      '  • Team Synergy Index : 99.8%',
      '  • Commits Shipped     : 650+',
      '  • Hackathon Readyness : 100% (Maximum Momentum)',
      '  • Coffee to Code Ratio: 4.2 L / day',
    ],
    'run test': () => [
      '🧪 Initializing NexCore Test Suite...',
      '  [OK] Model weights loaded into VRAM (CUDA 12.4)',
      '  [OK] Firebase Firestore connection verified (22ms ping)',
      '  [OK] React 19 Framer Motion pipeline stabilized',
      '  [OK] 0 vulnerabilities detected. System Ready for Battle! 🚀',
    ],
  };

  const executeCommand = (cmdText) => {
    const rawCmd = cmdText.trim().toLowerCase();
    if (!rawCmd) return;

    setHistory((prev) => [...prev, { type: 'user', text: `$ ${cmdText}` }]);
    setIsExecuting(true);

    setTimeout(() => {
      if (rawCmd === 'clear') {
        setHistory([{ type: 'system', text: '⚡ Buffer cleared. Type "help" for options.' }]);
      } else if (commands[rawCmd]) {
        const output = commands[rawCmd]();
        setHistory((prev) => [
          ...prev,
          ...output.map((line) => ({ type: 'response', text: line })),
        ]);
      } else {
        setHistory((prev) => [
          ...prev,
          {
            type: 'error',
            text: `Command not found: "${cmdText}". Try "help", "team", "projects", or "stats".`,
          },
        ]);
      }
      setIsExecuting(false);
    }, 250);
  };

  const terminalBodyRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
    setInputVal('');
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-navy-950/80 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-navy-900/90 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-white/60 text-xs flex items-center gap-1">
            <TerminalIcon size={13} className="text-cyan-400" /> nexcore-shell ~ zsh
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/40">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> ONLINE
          </span>
          <Cpu size={14} className="text-purple-400" />
        </div>
      </div>

      {/* Terminal Output */}
      <div
        ref={terminalBodyRef}
        className="p-4 sm:p-6 space-y-2 max-h-72 overflow-y-auto scrollbar-thin text-left"
      >
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`leading-relaxed ${
              line.type === 'user'
                ? 'text-cyan-300 font-bold'
                : line.type === 'error'
                ? 'text-rose-400'
                : line.type === 'response'
                ? 'text-white/90'
                : 'text-purple-300'
            }`}
          >
            {line.text}
          </div>
        ))}
        {isExecuting && (
          <div className="flex items-center gap-2 text-cyan-400">
            <RefreshCw size={12} className="animate-spin" /> Processing request...
          </div>
        )}
      </div>

      {/* Quick Action Suggestion Chips */}
      <div className="px-4 py-2 bg-navy-900/50 border-t border-white/5 flex flex-wrap items-center gap-2">
        <span className="text-white/30 text-xs">Run:</span>
        {['help', 'team', 'projects', 'run test', 'stats', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-white/10 hover:border-cyan-400/40 text-[11px] transition-all"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center px-4 py-3 bg-navy-900/80 border-t border-white/10">
        <span className="text-emerald-400 mr-2 font-bold">nexcore ❯</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' or command..."
          className="flex-1 bg-transparent text-white outline-none placeholder-white/20 font-mono text-xs sm:text-sm"
        />
        <button
          type="submit"
          className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 transition-all"
        >
          <Play size={13} />
        </button>
      </form>
    </div>
  );
}
