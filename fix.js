const fs = require('fs');
let c = fs.readFileSync('components/ProductSection.tsx', 'utf8');

const r = (s, rep) => c = c.split(s).join(rep);

r('className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"', 'className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5"');
r('className="glass-card reveal-card relative p-6 flex flex-col gap-4"', 'className="glass-card reveal-card relative p-3 sm:p-6 flex flex-col gap-2 sm:gap-4"');
r('className="glass-card reveal-card relative p-6 flex flex-col gap-4 md:col-span-2 lg:col-span-1"', 'className="glass-card reveal-card relative p-3 sm:p-6 flex flex-col gap-2 sm:gap-4 md:col-span-2 lg:col-span-1"');
r('min-h-[180px] sm:min-h-[200px]', 'min-h-[100px] sm:min-h-[200px]');
r('text-base font-bold text-white', 'text-[13px] sm:text-base font-bold text-white leading-tight');
r('text-xs text-slate-400', 'text-[10px] sm:text-xs text-slate-400 leading-tight');
r('text-3xl font-extrabold text-white mb-3', 'text-xl sm:text-3xl font-extrabold text-white mb-1.5 sm:mb-3');
r('rounded-xl px-4 py-3', 'rounded-lg sm:rounded-xl px-2 sm:px-4 py-2 sm:py-3');
r('text-sm font-medium', 'text-[10px] sm:text-sm font-medium leading-tight');
r('text-sm font-bold ml-3 whitespace-nowrap', 'text-xs sm:text-sm font-bold ml-1 sm:ml-3 whitespace-nowrap');
r('w-11 h-11 rounded-xl', 'w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl');
r('w-6 h-6 text-red-400', 'w-4 h-4 sm:w-6 sm:h-6 text-red-400');
r('w-5 h-5 text-white', 'w-3.5 h-3.5 sm:w-5 sm:h-5 text-white');
r('w-6 h-6 text-sky-400', 'w-4 h-4 sm:w-6 sm:h-6 text-sky-400');
r('gap-2 w-full text-white font-semibold text-sm py-3 rounded-2xl', 'gap-1 sm:gap-2 w-full text-white font-bold text-[10px] sm:text-sm py-2 sm:py-3 rounded-xl sm:rounded-2xl leading-none tracking-wide');
r('w-4 h-4 flex-shrink-0', 'w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0');
r('border border-red-500/30 p-3', 'border border-red-500/30 p-2 sm:p-3');
r('text-[10px] font-bold text-red-400 bg-red-500/20 px-2 py-0.5', 'text-[8px] sm:text-[10px] font-bold text-red-400 bg-red-500/20 px-1.5 sm:px-2 py-0.5');
r('text-xs text-red-300 font-medium', 'text-[10px] sm:text-xs text-red-300 font-medium');
r('text-xl font-extrabold text-red-400', 'text-sm sm:text-xl font-extrabold text-red-400');
r('text-[11px] text-slate-500', 'text-[9px] sm:text-[11px] text-slate-500');

fs.writeFileSync('components/ProductSection.tsx', c);
console.log('done');
