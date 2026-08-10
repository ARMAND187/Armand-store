import Link from "next/link";

export default function LogoPreviewPage() {
  return (
    <div className="min-h-screen bg-[#05000f] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Logo Preview</h1>
        <p className="text-[#8b8ba8] mb-16">Here are the 3 logo options rendered visually. Let me know which one you prefer!</p>
        
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Option 1 */}
          <div className="glass-card p-8 flex flex-col items-center gap-6 border border-violet-500/20 rounded-2xl">
            <h2 className="text-xl font-bold text-white">Option 1: Minimalist Tech</h2>
            <div className="w-24 h-24 bg-gradient-to-br from-[#180a3e] to-[#05000f] border border-violet-500/30 rounded-2xl flex items-center justify-center shadow-xl shadow-violet-900/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-violet-700 rounded-2xl opacity-20 blur-md group-hover:opacity-40 transition-opacity"></div>
              <svg className="w-12 h-12 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 20H8L12 11V2Z" fill="url(#opt1-violet)" />
                <path d="M12 2L20 20H16L12 11V2Z" fill="url(#opt1-cyan)" opacity="0.9" />
                <rect x="9" y="15" width="6" height="2" rx="1" fill="#ffffff" />
                <defs>
                  <linearGradient id="opt1-violet" x1="4" y1="2" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#7c3aed" />
                  </linearGradient>
                  <linearGradient id="opt1-cyan" x1="12" y1="2" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#67e8f9" />
                    <stop offset="1" stopColor="#06b6d4" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Option 2 */}
          <div className="glass-card p-8 flex flex-col items-center gap-6 border border-violet-500/50 rounded-2xl shadow-[0_0_30px_rgba(124,58,237,0.2)] relative">
            <h2 className="text-xl font-bold text-white">Option 2: 3D Ribbon</h2>
            <div className="w-24 h-24 bg-gradient-to-br from-[#180a3e] to-[#05000f] border border-violet-500/30 rounded-2xl flex items-center justify-center shadow-xl shadow-violet-900/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-violet-700 rounded-2xl opacity-30 blur-md group-hover:opacity-50 transition-opacity"></div>
              <svg className="w-12 h-12 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 15L20 22H15L11.5 17L15 15Z" fill="url(#opt2-cyan)" opacity="0.7"/>
                <path d="M12 2L4 22H9L12 14.5L16 22H21L12 2Z" fill="url(#opt2-violet)" />
                <path d="M12 7.5L9.5 13.5H14.5L12 7.5Z" fill="#ffffff" opacity="0.15" />
                <path d="M8 15L16 15L14.5 12L9.5 12L8 15Z" fill="url(#opt2-cyan)" />
                <defs>
                  <linearGradient id="opt2-violet" x1="4" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c4b5fd" />
                    <stop offset="0.5" stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#4c1d95" />
                  </linearGradient>
                  <linearGradient id="opt2-cyan" x1="8" y1="12" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#22d3ee" />
                    <stop offset="1" stopColor="#0891b2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="absolute -top-3 text-xs font-bold text-violet-400 bg-violet-900 px-3 py-1 rounded-full border border-violet-400">RECOMMENDED</span>
          </div>

          {/* Option 3 */}
          <div className="glass-card p-8 flex flex-col items-center gap-6 border border-violet-500/20 rounded-2xl">
            <h2 className="text-xl font-bold text-white">Option 3: Cyberpunk</h2>
            <div className="w-24 h-24 bg-gradient-to-br from-[#180a3e] to-[#05000f] border border-violet-500/30 rounded-2xl flex items-center justify-center shadow-xl shadow-violet-900/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-700 rounded-2xl opacity-20 blur-md group-hover:opacity-40 transition-opacity"></div>
              <svg className="w-12 h-12 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L9 8H15L12 1Z" fill="#ffffff" />
                <path d="M8 10L3 22H7L10.5 13.5L8 10Z" fill="url(#opt3-violet)" />
                <path d="M16 10L13.5 13.5L17 22H21L16 10Z" fill="url(#opt3-cyan)" />
                <circle cx="12" cy="15" r="2.5" fill="#a78bfa" />
                <defs>
                  <linearGradient id="opt3-violet" x1="3" y1="10" x2="10.5" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#7c3aed" />
                  </linearGradient>
                  <linearGradient id="opt3-cyan" x1="13.5" y1="10" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#67e8f9" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
        </div>
        
        <div className="mt-16">
          <Link href="/" className="text-violet-400 hover:text-violet-300 underline underline-offset-4 font-semibold">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
