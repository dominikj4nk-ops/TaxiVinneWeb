const fs = require('fs');
const file = 'c:/Users/jdomi/Desktop/VineTaxi/vinetaxi/components/sections/CoverageMap.tsx';
let content = fs.readFileSync(file, 'utf8');

const start = content.indexOf('                        {/* Visual SVG Nodes Map */}');
const endMarker = '                    {/* Info Text Card */}';
const end = content.indexOf(endMarker);

if (start === -1 || end === -1) {
    console.error('Could not find markers', { start, end });
    process.exit(1);
}

const newMap = `                        {/* Premium Radar Visualization */}
                        <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[400px] mx-auto my-8 flex items-center justify-center">
                            
                            {/* Concentric Rings */}
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="absolute inset-0 border border-gray-100 rounded-full" 
                            />
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                                className="absolute inset-[18%] border border-gray-200/80 rounded-full" 
                            />
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                className="absolute inset-[36%] border border-gray-200 rounded-full bg-gray-50/50" 
                            />

                            {/* Center Hub: Hustopeče */}
                            <motion.div 
                                className="absolute z-30 flex flex-col items-center"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.4 }}
                            >
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FFD000] rounded-full shadow-[0_0_0_8px_rgba(255,208,0,0.15)] mb-2.5 relative flex items-center justify-center">
                                    <div className="absolute inset-0 bg-[#FFD000] rounded-full animate-ping opacity-40"></div>
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <div className="bg-[#111111] text-white px-3 py-1 rounded-full shadow-lg">
                                    <span className="text-[12px] sm:text-[13px] font-bold tracking-wide">Hustopeče</span>
                                </div>
                            </motion.div>

                            {/* Node: Brno (Outer Ring - Top) */}
                            <motion.div 
                                className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <div className="bg-white px-2.5 py-1 rounded-full shadow-sm border border-gray-100 mb-2 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-600">Brno <span className="text-gray-400 font-medium">BRQ</span></span>
                                </div>
                            </motion.div>

                            {/* Node: Vídeň (Outer Ring - Bottom Right) */}
                            <motion.div 
                                className="absolute top-[85%] left-[85%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                            >
                                <div className="bg-white px-2.5 py-1 rounded-full shadow-sm border border-gray-100 mt-2 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-600">{t('coverageMap.vienna') || 'Vídeň'} <span className="text-gray-400 font-medium">VIE</span></span>
                                </div>
                            </motion.div>

                            {/* Node: Znojmo (Mid Ring - Bottom Left) */}
                            <motion.div 
                                className="absolute top-[75%] left-[22%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                            >
                                <div className="bg-white px-2.5 py-1 rounded-full shadow-sm border border-gray-100 mt-2 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-600">Znojmo</span>
                                </div>
                            </motion.div>

                            {/* Node: Mikulov (Mid Ring - Bottom Center) */}
                            <motion.div 
                                className="absolute top-[82%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                            >
                                <div className="bg-white px-2.5 py-1 rounded-full shadow-sm border border-gray-100 mt-2 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-600">Mikulov</span>
                                </div>
                            </motion.div>

                            {/* Node: Břeclav (Mid Ring - Top Right) */}
                            <motion.div 
                                className="absolute top-[25%] left-[78%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                            >
                                <div className="bg-white px-2.5 py-1 rounded-full shadow-sm border border-gray-100 mb-2 flex items-center gap-1.5">
                                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-600">Břeclav</span>
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                </div>
                            </motion.div>

                            {/* Node: Pálava (Inner Ring - Bottom Left) */}
                            <motion.div 
                                className="absolute top-[60%] left-[38%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.3 }}
                            >
                                <div className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm border border-gray-100 mt-1 flex items-center gap-1">
                                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                    <span className="text-[9px] font-bold text-gray-500">Pálava</span>
                                </div>
                            </motion.div>

                            {/* Node: Velké Pavlovice (Inner Ring - Top Right) */}
                            <motion.div 
                                className="absolute top-[40%] left-[62%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                            >
                                <div className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm border border-gray-100 mb-1 flex items-center gap-1">
                                    <span className="text-[9px] font-bold text-gray-500">V. Pavlovice</span>
                                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                </div>
                            </motion.div>

                        </div>
`;

content = content.substring(0, start) + newMap + content.substring(end);
fs.writeFileSync(file, content);
console.log('Update complete.');
