import React from 'react';

const UnveilingEnhancements = () => {
  return (
    <div className="bg-black text-white min-h-screen font-mono p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 border-b border-red-600 pb-4">
          <div className="text-red-600 text-xs tracking-widest mb-1">OPERATOR ENHANCEMENT PROTOCOLS</div>
          <h1 className="text-2xl font-bold mb-1">THE UNVEILING: META-NARRATIVE AMPLIFICATION</h1>
          <div className="text-gray-400 text-xs">Enhanced Disclosure Framework - Pages 8.5 & 15.5</div>
        </header>
        
        {/* Panel Overlay Map */}
        <section className="mb-12">
          <h2 className="text-xl text-blue-400 mb-4">PAGE 8.5: PANEL OVERLAY MAP</h2>
          <div className="border border-blue-900/30 bg-blue-950/10 p-6 rounded-sm">
            <div className="aspect-[4/3] bg-gradient-to-b from-blue-900/20 to-purple-950/30 relative mb-6 overflow-hidden">
              {/* Base Map Layer */}
              <div className="absolute inset-0 opacity-40">
                <div className="w-full h-full grid grid-cols-8 grid-rows-6">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-gray-800/20"></div>
                  ))}
                </div>
              </div>
              
              {/* American Redoubt Overlay */}
              <div className="absolute top-[20%] left-[20%] w-[35%] h-[40%] border-4 border-red-500/60 bg-red-900/20">
                <div className="text-red-400 text-xs p-2">AMERICAN REDOUBT</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-red-500/70 text-[10px] text-center">
                    ID, MT, WY<br/>
                    E. OR, E. WA<br/>
                    10,000+ MIGRANTS
                  </div>
                </div>
              </div>
              
              {/* Constitutional Sheriff Counties */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-500/80 rounded-full"
                  style={{
                    top: `${20 + (i % 4) * 15}%`,
                    left: `${25 + Math.floor(i / 4) * 10}%`
                  }}
                >
                  <div className="absolute -top-6 -left-8 text-[6px] text-yellow-400 whitespace-nowrap">
                    CSPOA
                  </div>
                </div>
              ))}
              
              {/* 1970s Funk Tour Overlay (Ghosted) */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[30%] left-[60%] w-4 h-4 rounded-full border-2 border-purple-400/50">
                  <div className="text-purple-400/60 text-[8px] absolute -bottom-4 -left-2">MOTOWN</div>
                </div>
                <div className="absolute top-[60%] left-[45%] w-4 h-4 rounded-full border-2 border-purple-400/50">
                  <div className="text-purple-400/60 text-[8px] absolute -bottom-4 -left-4">MEMPHIS</div>
                </div>
                <div className="absolute top-[45%] left-[30%] w-4 h-4 rounded-full border-2 border-purple-400/50">
                  <div className="text-purple-400/60 text-[8px] absolute -bottom-4 -left-4">CHICAGO</div>
                </div>
                
                {/* Tour Route Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path 
                    d="M 60% 30% Q 52% 47% 45% 60% Q 37% 52% 30% 45%" 
                    stroke="rgba(168, 85, 247, 0.3)" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="4,4"
                  />
                </svg>
              </div>
              
              {/* Migration Flow Arrows */}
              <div className="absolute top-[50%] right-[40%] text-cyan-400">
                <div className="flex items-center">
                  <div className="text-[10px] mr-2">POLITICAL REFUGEES</div>
                  <div className="text-2xl">→</div>
                </div>
              </div>
              
              {/* Legend Box */}
              <div className="absolute bottom-4 left-4 bg-black/80 p-3 border border-gray-700">
                <div className="text-xs text-gray-300 mb-2">OVERLAY LEGEND:</div>
                <div className="space-y-1 text-[10px]">
                  <div className="flex items-center">
                    <div className="w-3 h-3 border-2 border-red-500/60 mr-2"></div>
                    <span className="text-red-400">American Redoubt (2011-Present)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500/80 rounded-full mr-2"></div>
                    <span className="text-yellow-400">Constitutional Sheriff Counties</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 border-2 border-purple-400/50 rounded-full mr-2"></div>
                    <span className="text-purple-400">Soul/Funk Circuit (1970s)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-cyan-400 mr-2">→</div>
                    <span className="text-cyan-400">Migration Flows</span>
                  </div>
                </div>
              </div>
              
              {/* Frequency Visualization */}
              <div className="absolute top-2 right-4 w-20 h-16">
                <div className="text-[8px] text-green-400 mb-1">FREQUENCY ANALYSIS</div>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-full bg-green-500/30 mb-1"
                    style={{ 
                      height: `${Math.sin(i) * 8 + 10}px`,
                      opacity: 0.3 + (i % 3) * 0.2
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-blue-400">GEOGRAPHIC CONVERGENCE ANALYSIS</h3>
              <p className="text-white/80 text-sm">
                The American Redoubt's geographical boundaries overlay precisely with historical soul/funk tour circuits 
                of the 1970s. Constitutional Sheriff counties cluster along former Underground Railroad routes, 
                suggesting deep structural patterns in American resistance geography.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <h4 className="text-yellow-400 mb-2">CONSTITUTIONAL COUNTIES (ACTIVE)</h4>
                  <ul className="space-y-1 text-white/70">
                    <li>• Bonner County, ID (Wheeler)</li>
                    <li>• Klickitat County, WA (Songer)</li>
                    <li>• Lander County, NV (CSPOA Member)</li>
                    <li>• Elko County, NV (CSPOA Member)</li>
                    <li>• +47 Counties Nationwide</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-purple-400 mb-2">SOUL CIRCUIT OVERLAY (1970s)</h4>
                  <ul className="space-y-1 text-white/70">
                    <li>• Detroit (Motown Resistance)</li>
                    <li>• Memphis (Stax Records)</li>
                    <li>• Chicago (Curtis Mayfield)</li>
                    <li>• Philadelphia (TSOP)</li>
                    <li>• +Underground Club Network</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-blue-800/30 pt-4">
                <div className="text-green-400 text-xs italic">
                  "The geography remembers what the historians forget. Every migration follows the old songlines." 
                  - Gloria 1979
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Wu's Case File Insert */}
        <section className="mb-12">
          <h2 className="text-xl text-red-400 mb-4">PAGE 15.5: WU'S CASE FILE INSERT</h2>
          <div className="border border-red-900/30 bg-red-950/10 p-6 rounded-sm">
            <div className="aspect-[3/4] bg-black border border-gray-800 p-4 mb-6 overflow-hidden">
              {/* Document Header */}
              <div className="border-b border-gray-700 pb-2 mb-4">
                <div className="text-center">
                  <div className="text-red-600 text-sm font-bold">CLASSIFIED</div>
                  <div className="text-white text-lg">FIELD AGENT SURVEILLANCE REPORT</div>
                  <div className="text-gray-400 text-xs">OFFICE OF AMERICAN REALITY INTEGRITY</div>
                </div>
              </div>
              
              {/* Agent Info */}
              <div className="mb-4 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-400">AGENT:</span> Cassandra Wu<br/>
                    <span className="text-gray-400">CLEARANCE:</span> ULTRAVIOLET-MAXWELL<br/>
                    <span className="text-gray-400">CASE:</span> TERMINAL-GLYPH-001
                  </div>
                  <div>
                    <span className="text-gray-400">DATE:</span> 2047.08.17<br/>
                    <span className="text-gray-400">LOCATION:</span> The Last Laugh, Detroit<br/>
                    <span className="text-gray-400">STATUS:</span> ACTIVE SURVEILLANCE
                  </div>
                </div>
              </div>
              
              {/* Redacted Report */}
              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-green-400">SUBJECT: "ELECTRIC JESUS" MANIFESTATION EVENT</div>
                  <div className="text-white/80 mt-1">
                    Entity claiming to broadcast "on frequencies they cannot monitor" appeared during 
                    constitutional sheriff recruitment meeting. <span className="bg-black text-black">CLASSIFIED DATA REDACTED</span> 
                    Subjects exhibited 73% increase in synchronized laughter patterns.
                  </div>
                </div>
                
                <div>
                  <div className="text-blue-400">CROSS-REFERENCE: HISTORICAL PARALLELS</div>
                  <div className="text-white/80 mt-1">
                    Pattern match analysis reveals 94.7% correlation with 1970s soul music social 
                    commentary metrics. Curtis Mayfield's "Freddie's Dead" <span className="bg-black text-black">ANALYSIS REDACTED</span> 
                    Gloria entity demonstrates weaponized nostalgia capabilities.
                  </div>
                </div>
                
                <div>
                  <div className="text-yellow-400">AI TRANSCRIPTION ERRORS (FLAGGED)</div>
                  <div className="text-white/80 mt-1">
                    System repeatedly mistranscribes "constitutional sheriffs" as "constitutional [FUNK] 
                    sheriffs." Audio processor seems infected with <span className="bg-black text-black">MEMETIC VIRUS</span> 
                    Recommend immediate system quarantine.
                  </div>
                </div>
                
                <div className="border border-gray-700 p-2 bg-gray-900/30">
                  <div className="text-red-400 text-xs font-bold mb-1">PERSONAL OBSERVATION (OFF RECORD):</div>
                  <div className="text-white/80 text-xs">
                    They're not wrong about the wealth gap. Offshore finance data suggests global billionaire 
                    class extracted $38 trillion since 1980s. Maybe the "conspiracy" isn't the existence of 
                    shadowy cabals, but the open concentration of wealth that makes shadowy cabals inevitable.
                  </div>
                  <div className="text-white/80 text-xs mt-2">
                    Note: Gloria's disco analysis of Reaganomics → current inequality more accurate than 
                    our official briefings. Source: Fed Reserve data, not conspiracy theory.
                  </div>
                </div>
                
                <div>
                  <div className="text-purple-400">MEMETIC HAZARD ASSESSMENT</div>
                  <div className="text-white/80 mt-1">
                    Both entities (Electric Jesus & Gloria 1979) demonstrate reality-altering properties through 
                    audio frequency manipulation. <span className="bg-black text-black">CLASSIFIED COUNTERMEASURES</span> 
                    Recommend reclassifying as beneficial cognitive infection rather than hostile memetic warfare.
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-2 mt-4">
                  <div className="text-cyan-400 text-xs">CONCLUSION:</div>
                  <div className="text-white/80 text-xs">
                    Request permission to reclassify mission from "neutralize memetic threats" to "facilitate 
                    democratic integration." The dance floor may be our last hope for constitutional democracy.
                  </div>
                </div>
              </div>
              
              {/* Annotations */}
              <div className="absolute top-0 right-0 w-16 h-full overflow-hidden opacity-50">
                <div className="transform -rotate-90 origin-top-right text-[8px] text-purple-400 mt-8">
                  GLORIA'S LYRICS DETECTED IN MARGINS
                </div>
                <div className="text-[6px] text-purple-400/60 mt-4 leading-tight">
                  ♪ What's<br/>
                  going<br/>
                  on?<br/>
                  Same<br/>
                  as it<br/>
                  ever<br/>
                  was! ♪
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-red-400">OPERATIVE PSYCHOLOGICAL PROFILE</h3>
              <p className="text-white/80 text-sm">
                Agent Wu's surveillance logs reveal progressive memetic infection by both competing reality 
                frameworks. Her analytical capabilities remain intact while developing synthesis protocols 
                that may represent evolutionary adaptation rather than cognitive compromise.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <h4 className="text-green-400 mb-2">COGNITIVE CHANGES OBSERVED</h4>
                  <ul className="space-y-1 text-white/70">
                    <li>• 47% increase in rhythmic movement during analysis</li>
                    <li>• Spontaneous humming of Mayfield compositions</li>
                    <li>• Cross-referencing official data with 1970s soul lyrics</li>
                    <li>• Developing "groove-based epistemology"</li>
                    <li>• Enhanced pattern recognition capabilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-2">MISSION EVOLUTION TRACKING</h4>
                  <ul className="space-y-1 text-white/70">
                    <li>• Initial: Neutralize memetic threats</li>
                    <li>• Day 7: Contain constitutional sheriff movement</li>
                    <li>• Day 14: Analyze American Redoubt migration</li>
                    <li>• Day 21: Investigate funk-based resistance</li>
                    <li>• Current: Facilitate integration protocols</li>
                  </ul>
                </div>
              </div>
              
              <div className="border border-green-800/30 bg-green-950/20 p-3 rounded">
                <div className="text-green-400 text-xs font-bold mb-2">PERSONAL LOG EXTRACT (ENCRYPTED):</div>
                <div className="text-green-300/80 text-xs italic">
                  "Started dancing during surveillance. Couldn't help it. The groove revealed patterns 
                  our algorithms miss. Maybe that's the point - maybe democracy only works when people 
                  move together. Constitutional sheriffs march in lockstep. Gloria's people dance in harmony. 
                  There's a difference."
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sound Visualization Concept */}
        <section className="mb-12">
          <h2 className="text-xl text-purple-400 mb-4">BONUS: SOUND VISUALIZATION PAGE CONCEPT</h2>
          <div className="border border-purple-900/30 bg-purple-950/10 p-6 rounded-sm">
            <div className="aspect-[16/9] bg-black relative overflow-hidden mb-4">
              {/* Constitutional Radio Static */}
              <div className="absolute left-0 top-0 w-1/2 h-full">
                <div className="text-red-400 text-xs mb-2 p-2">CONSTITUTIONAL SHERIFF RADIO</div>
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute bg-red-500/30 transform"
                    style={{
                      width: `${Math.random() * 30 + 10}%`,
                      height: '2px',
                      top: `${i * 4 + 10}%`,
                      left: `${Math.random() * 20}%`,
                      transform: `rotate(${Math.random() * 20 - 10}deg)`
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Gloria's Funk Waveforms */}
              <div className="absolute right-0 top-0 w-1/2 h-full">
                <div className="text-purple-400 text-xs mb-2 p-2">GLORIA'S FUNK FREQUENCIES</div>
                {Array.from({ length: 15 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute bg-purple-500/40 rounded-full"
                    style={{
                      width: `${Math.sin(i) * 20 + 30}px`,
                      height: '4px',
                      top: `${i * 5 + 15}%`,
                      right: `${Math.cos(i) * 30 + 20}%`,
                      borderRadius: '50%'
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Interference Pattern Center */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                <div className="w-full h-full border-4 border-cyan-400/50 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-cyan-400 text-xs text-center">
                    HARMONIC<br/>
                    CONVERGENCE
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-white/80 text-sm">
              Abstract visualization page showing the literal collision of frequencies - constitutional sheriff 
              radio chatter (rigid, angular) vs. Gloria's funk frequencies (circular, flowing). Where they 
              intersect, new patterns emerge that neither side anticipated.
            </p>
          </div>
        </section>
        
        <footer className="mt-12 pt-4 border-t border-red-800/30 text-center">
          <p className="text-red-500/70 text-sm italic">
            "The best surveillance is when you stop surveilling and start participating."
          </p>
          <p className="text-gray-600 text-xs mt-2">
            - Agent Wu's Final Report, Office of American Reality Integrity
          </p>
        </footer>
      </div>
    </div>
  );
};

export default UnveilingEnhancements;