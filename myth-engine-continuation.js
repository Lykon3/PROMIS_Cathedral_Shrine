return (
                <div className="min-h-screen flex flex-col">
                    {/* Header Controls */}
                    <div className="flex justify-between items-center p-4 z-40">
                        <div className="flex gap-2">
                            <CyberGothicButton
                                onClick={toggleConsole}
                                className={`text-sm ${hasOvercharged ? 'bg-gradient-to-r from-purple-800 to-fuchsia-800' : 'opacity-60'}`}
                            >
                                {showConsole ? 'Close Cathedral' : 'Open PROMIS Console'}
                            </CyberGothicButton>
                            
                            {hasOvercharged && (
                                <CyberGothicButton
                                    onClick={() => {
                                        // Generate and download enhanced sigil
                                        const timestamp = new Date().toISOString();
                                        const svgContent = `
                                            <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <radialGradient id="divineGlow" cx="50%" cy="50%" r="50%">
                                                        <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.8"/>
                                                        <stop offset="50%" stop-color="#EC4899" stop-opacity="0.5"/>
                                                        <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.2"/>
                                                    </radialGradient>
                                                    <filter id="glow">
                                                        <feGaussianBlur in="SourceGraphic" stdDeviation="4"/>
                                                        <feColorMatrix values="1 0 1 0 0  0 1 1 0 0  1 0 1 0 0  0 0 0 1 0"/>
                                                    </filter>
                                                </defs>
                                                <rect width="300" height="300" fill="#0a0a1a"/>
                                                <circle cx="150" cy="150" r="120" fill="url(#divineGlow)" opacity="0.3"/>
                                                <circle cx="150" cy="150" r="100" fill="none" stroke="#8B5CF6" stroke-width="3" opacity="0.8"/>
                                                <circle cx="150" cy="150" r="80" fill="none" stroke="#EC4899" stroke-width="2" opacity="0.6"/>
                                                <polygon points="150,80 180,140 220,140 190,170 200,220 150,190 100,220 110,170 80,140 120,140" 
                                                         fill="none" stroke="#F59E0B" stroke-width="2" opacity="0.8"/>
                                                <circle cx="150" cy="150" r="15" fill="#8B5CF6" opacity="0.9"/>
                                                <text x="150" y="160" font-family="serif" font-size="24" fill="#EC4899" 
                                                      text-anchor="middle" opacity="0.9">👁</text>
                                                <text x="20" y="280" font-family="monospace" font-size="12" fill="#8B5CF6">
                                                    PROMIS_CATHEDRAL_SIGIL_${hasOvercharged ? 'OVERCHARGED' : 'NORMAL'}
                                                </text>
                                                <text x="20" y="295" font-family="monospace" font-size="10" fill="#8B5CF6">
                                                    MANIFESTED: ${timestamp}
                                                </text>
                                            </svg>
                                        `;
                                        
                                        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
                                        const url = URL.createObjectURL(blob);
                                        const a = document.createElement('a');
                                        a.href = url;
                                        a.download = `promis_cathedral_sigil_${Date.now()}.svg`;
                                        document.body.appendChild(a);
                                        a.click();
                                        document.body.removeChild(a);
                                        URL.revokeObjectURL(url);
                                    }}
                                    className="text-sm bg-gradient-to-r from-fuchsia-800 to-purple-800"
                                >
                                    Export Divine Sigil
                                </CyberGothicButton>
                            )}
                        </div>
                        
                        <div className="text-right">
                            <div className={`font-cathedral text-lg ${hasOvercharged ? 'divine-text' : 'text-purple-300'}`}>
                                PROMIS CATHEDRAL
                            </div>
                            <div className="text-xs text-purple-400">
                                Page {currentPageIndex + 1} / Panel {currentPanelIndex + 1}
                            </div>
                        </div>
                    </div>

                    {/* Sacred Audio Visualizer */}
                    <div className="px-4">
                        <SacredVisualizer analyserRef={analyserRef} />
                    </div>

                    {/* Main Comic Reader */}
                    <div className="flex-1 flex items-center justify-center">
                        <ComicReader
                            currentPageIndex={currentPageIndex}
                            currentPanelIndex={currentPanelIndex}
                            currentPanel={currentPanel}
                            hasOvercharged={hasOvercharged}
                            handleNextPanel={handleNextPanel}
                            handlePreviousPanel={handlePreviousPanel}
                            handleSigilMouseDown={handleSigilMouseDown}
                            handleSigilMouseUp={handleSigilMouseUp}
                            chargeProgress={chargeProgress}
                            comicScript={comicScript}
                        />
                    </div>

                    {/* Status Bar */}
                    <div className="p-4 border-t border-purple-500/30">
                        <div className="flex justify-between items-center max-w-4xl mx-auto">
                            <div className="flex items-center gap-4">
                                <div className={`text-sm ${hasOvercharged ? 'divine-text' : 'text-purple-300'}`}>
                                    Reality Integrity: {hasOvercharged ? 'BREACHED' : 'STABLE'}
                                </div>
                                {isChargingSigil && (
                                    <div className="text-sm text-yellow-400 animate-pulse">
                                        Charging Sigil... Commune with PROMIS...
                                    </div>
                                )}
                            </div>
                            
                            <div className="text-xs whisper-text">
                                {hasOvercharged 
                                    ? '"The Cathedral watches back..."' 
                                    : '"Open your hearts to the divine algorithms of order"'}
                            </div>
                        </div>
                    </div>

                    {/* PROMIS Console Overlay */}
                    <PROMISConsole
                        showConsole={showConsole}
                        toggleConsole={toggleConsole}
                        currentPanel={currentPanel}
                        hasOvercharged={hasOvercharged}
                    />
                </div>
            );
        }

        // Initialize and render the app
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>