// ENHANCEMENT 1: IMPROVED STYLING
// Add these to the <style> section for enhanced visual effects

/* Improved Comic Panel Styling */
.comic-panel {
  background: linear-gradient(135deg, rgba(20, 20, 25, 0.7), rgba(10, 10, 15, 0.9));
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.comic-panel:hover {
  box-shadow: 0 0 25px rgba(139, 92, 246, 0.4);
  transform: translateY(-2px);
}

/* Enhanced Glitch Effect */
@keyframes enhanced-glitch-flicker {
  0% { text-shadow: 0 0 0 currentColor; }
  5% { text-shadow: -1px 0 0 #ff0000, 1px 0 0 #00ffff; }
  10% { text-shadow: 1px 0 0 #ff0000, -1px 0 0 #00ffff; }
  15% { text-shadow: -1px 0 0 #ff0000, 1px 0 0 #00ffff; }
  20% { text-shadow: 1px 0 0 #ff0000, -1px 0 0 #00ffff; }
  25% { text-shadow: 0 0 0 currentColor; }
  30% { text-shadow: 2px 0 0 #ff00ff, -2px 0 0 #00ff00; }
  35% { text-shadow: -2px 0 0 #ff00ff, 2px 0 0 #00ff00; }
  40% { text-shadow: 0 0 0 currentColor; }
  50% { transform: skewX(0.5deg); }
  60% { transform: skewX(-0.5deg); }
  70% { filter: hue-rotate(5deg); }
  80% { filter: hue-rotate(-5deg); }
  100% { text-shadow: 0 0 0 currentColor; transform: skewX(0); filter: hue-rotate(0); }
}

.glitch-text {
  position: relative;
  animation: enhanced-glitch-flicker 1.5s infinite linear alternate;
}

/* Reality Fracture Effect (for Overcharged state) */
.reality-fracture {
  position: relative;
  overflow: hidden;
}

.reality-fracture::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(45deg, rgba(255, 0, 255, 0.1) 25%, transparent 25%), 
    linear-gradient(-45deg, rgba(255, 0, 255, 0.1) 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, rgba(255, 0, 255, 0.1) 75%), 
    linear-gradient(-45deg, transparent 75%, rgba(255, 0, 255, 0.1) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  pointer-events: none;
  opacity: 0.3;
  z-index: 1;
  animation: pattern-shift 20s linear infinite;
}

@keyframes pattern-shift {
  0% { background-position: 0 0, 0 10px, 10px -10px, -10px 0px; }
  100% { background-position: 100px 100px, 100px 110px, 110px 90px, 90px 100px; }
}

/* CRT Scanline Effect */
.scanlines {
  position: relative;
  overflow: hidden;
}

.scanlines::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    transparent 50%, 
    rgba(0, 0, 0, 0.05) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 2;
}

/* Enhanced Button Styling */
.cyber-button {
  position: relative;
  background: linear-gradient(45deg, #8B5CF6, #EC4899);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
  text-transform: uppercase;
  transition: all 0.2s;
  overflow: hidden;
  cursor: pointer;
}

.cyber-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: all 0.6s;
}

.cyber-button:hover {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
  transform: translateY(-2px);
}

.cyber-button:hover::before {
  left: 100%;
}


// ENHANCEMENT 2: IMPROVED AUDIO ENGINE
// Enhanced AudioEngine Component with better audio effects

// --- Enhanced AudioEngine Component ---
const AudioEngine = ({ currentPageIndex, currentPanelIndex, isMuted, hasOvercharged, currentSceneSound, analyserRef, overchargeFilterRef, overchargeDistortionRef }) => {
  const radioFuzzRef = useRef(null);
  const distortedDroneRef = useRef(null);
  const funkBasslineRef = useRef(null);
  const binauralStaticRef = useRef(null);
  const overchargeHumRef = useRef(null);
  const reverbRef = useRef(null);
  const compressorRef = useRef(null);

  // Initialize Tone.js instruments on component mount with enhanced audio settings
  useEffect(() => {
    const initializeAudio = async () => {
      if (Tone.context.state !== 'running') {
        await Tone.start();
        console.log('Tone.js audio context started.');
      }

      // Better signal chain for improved audio quality
      compressorRef.current = new Tone.Compressor({
        threshold: -24,
        ratio: 4,
        attack: 0.005,
        release: 0.1
      }).toDestination();
      
      reverbRef.current = new Tone.Reverb({
        decay: 2.5,
        wet: 0.2
      }).connect(compressorRef.current);

      analyserRef.current = new Tone.Analyser('waveform', 512); // Higher resolution
      compressorRef.current.connect(analyserRef.current);

      // Enhanced overcharge effects
      overchargeFilterRef.current = new Tone.Filter({
        frequency: 2000, 
        type: 'lowpass',
        rolloff: -48 // Steeper filter slope
      }).connect(reverbRef.current);
      
      overchargeDistortionRef.current = new Tone.Distortion({
        distortion: 0.8,
        wet: 0
      }).connect(overchargeFilterRef.current);

      // Enhanced radio fuzz with more complex processing
      radioFuzzRef.current = new Tone.Noise('white');
      const radioEQ = new Tone.EQ3({
        low: -20,
        mid: 0,
        high: -10
      });
      const radioFilter = new Tone.Filter({
        frequency: 700,
        type: 'bandpass',
        Q: 1.5
      });
      const radioGain = new Tone.Gain(0.5);
      radioFuzzRef.current.chain(radioEQ, radioFilter, radioGain, overchargeDistortionRef.current);
      radioFuzzRef.current.volume.value = -25;

      // Enhanced drone with more modulation
      distortedDroneRef.current = new Tone.FMSynth({
        harmonicity: 3,
        modulationIndex: 10,
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.1, decay: 0.5, sustain: 0.7, release: 1 },
        modulation: { type: 'square' }
      });
      const droneDelay = new Tone.PingPongDelay({
        delayTime: 0.25,
        feedback: 0.3,
        wet: 0.2
      });
      const droneDistortion = new Tone.Distortion(0.8);
      distortedDroneRef.current.chain(droneDistortion, droneDelay, overchargeDistortionRef.current);
      distortedDroneRef.current.volume.value = -20;

      // Enhanced funk bassline with warmer tone
      funkBasslineRef.current = new Tone.MonoSynth({
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.4, release: 0.5 },
        filterEnvelope: {
          attack: 0.001,
          decay: 0.3,
          sustain: 0.5,
          release: 0.1,
          baseFrequency: 300,
          octaves: 2.5
        }
      });
      const bassChebyshev = new Tone.Chebyshev(3); // Adds harmonics
      const bassEQ = new Tone.EQ3({
        low: 3,
        mid: 0,
        high: -6
      });
      funkBasslineRef.current.chain(bassChebyshev, bassEQ, overchargeDistortionRef.current);
      funkBasslineRef.current.volume.value = -15;

      // Enhanced binaural static with spatial effects
      binauralStaticRef.current = new Tone.Noise('pink');
      const staticPanner = new Tone.AutoPanner({
        frequency: 0.05,
        depth: 0.8
      }).start();
      const staticFilter = new Tone.Filter({
        frequency: 800,
        type: 'lowpass'
      });
      binauralStaticRef.current.chain(staticFilter, staticPanner, reverbRef.current);
      binauralStaticRef.current.volume.value = -30;

      // Enhanced overcharge hum with more presence
      overchargeHumRef.current = new Tone.AMSynth({
        harmonicity: 2,
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.5, decay: 1, sustain: 0.8, release: 2 },
        modulation: { type: 'sine' }
      });
      const overchargeChorus = new Tone.Chorus({
        frequency: 4,
        delayTime: 2.5,
        depth: 0.7,
        spread: 180
      }).start();
      const overchargeTremolo = new Tone.Tremolo({
        frequency: 2,
        depth: 0.5
      }).start();
      overchargeHumRef.current.chain(overchargeChorus, overchargeTremolo, reverbRef.current);
      overchargeHumRef.current.volume.value = -12;
    };

    document.documentElement.addEventListener('mousedown', initializeAudio, { once: true });
    document.documentElement.addEventListener('touchstart', initializeAudio, { once: true });

    return () => {
      // Properly dispose of all audio components
      [
        radioFuzzRef.current, distortedDroneRef.current, 
        funkBasslineRef.current, binauralStaticRef.current, 
        overchargeHumRef.current, analyserRef.current, 
        overchargeFilterRef.current, overchargeDistortionRef.current,
        reverbRef.current, compressorRef.current
      ].forEach(component => {
        if (component) component.dispose();
      });
      
      document.documentElement.removeEventListener('mousedown', initializeAudio);
      document.documentElement.removeEventListener('touchstart', initializeAudio);
    };
  }, []);

  // Rest of the AudioEngine component...
  return null; // AudioEngine doesn't render anything
};


// ENHANCEMENT 3: IMPROVED SIGIL INTERACTION
// Enhanced SigilInteraction Component with better visuals and animations

// --- Enhanced SigilInteraction Component ---
const SigilInteraction = ({ hasOvercharged, isChargingSigil, audioLevel, handleSigilMouseDown, handleSigilMouseUp, chargeProgress }) => {
  const sigilOpacity = useTransform(audioLevel, [0, 1], [0.3, 0.8]);
  const sigilScale = useTransform(audioLevel, [0, 1], [0.95, 1.15]);
  const sigilGlowStrength = useTransform(chargeProgress, [0, 1], [0, 60]);
  const innerCircleScale = useTransform(chargeProgress, [0, 1], [0, 1]);
  const rotationAngle = useTransform(chargeProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      key="central-sigil"
      initial={{ opacity: 0, scale: 0, rotateZ: 0 }}
      animate={{
        opacity: isChargingSigil ? 0.95 : (hasOvercharged ? 0.9 : sigilOpacity),
        scale: isChargingSigil ? 1.3 : (hasOvercharged ? 1.15 : sigilScale),
        rotateZ: isChargingSigil ? rotationAngle : (hasOvercharged ? 15 : 0)
      }}
      exit={{ opacity: 0, scale: 0, rotateZ: 0 }}
      transition={{ 
        duration: isChargingSigil ? 0.3 : 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full
        ${hasOvercharged ? 'bg-purple-600/30 border-red-400/70' : 'bg-purple-600/20 border-purple-400/50'} 
        border-2 flex items-center justify-center cursor-pointer select-none overflow-hidden
        ${isChargingSigil ? 'reality-fracture' : ''} ${hasOvercharged ? 'pulse' : ''}`}
      style={{
        width: '180px',
        height: '180px',
        boxShadow: sigilGlowStrength.map(s => `0 0 ${s}px ${isChargingSigil ? 'rgba(255,255,0,0.9)' : (hasOvercharged ? 'rgba(255,0,255,0.9)' : 'rgba(192, 132, 252, 0.7)')}`),
        transition: 'box-shadow 0.1s ease-out'
      }}
      onMouseDown={handleSigilMouseDown}
      onMouseUp={handleSigilMouseUp}
      onMouseLeave={handleSigilMouseUp}
      onTouchStart={handleSigilMouseDown}
      onTouchEnd={handleSigilMouseUp}
    >
      {/* Animated ring around sigil */}
      <motion.div
        className={`absolute inset-0 rounded-full border-4 border-dashed 
          ${hasOvercharged ? 'border-red-500/50' : 'border-purple-400/40'}`}
        animate={{ 
          rotate: isChargingSigil ? 360 : 0
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      {/* Inner color fill based on charge status */}
      <motion.div
        className={`absolute inset-0 rounded-full ${hasOvercharged ? 'bg-red-500/50' : 'bg-purple-400/30'}`}
        style={{ scale: innerCircleScale }}
      />
      
      {/* Light beams during charging or overcharged state */}
      {(isChargingSigil || hasOvercharged) && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isChargingSigil ? 0.7 : (hasOvercharged ? 0.5 : 0) }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`beam-${i}`}
              className={`absolute top-1/2 left-1/2 h-1 rounded-full ${hasOvercharged ? 'bg-red-400/70' : 'bg-purple-300/70'}`}
              style={{
                width: '200%',
                transformOrigin: 'left center',
                transform: `rotate(${i * 45}deg) translateX(0)`,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scaleX: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
      
      {/* Central omega symbol */}
      <span className={`text-6xl font-extrabold z-10 ${hasOvercharged ? 'text-red-300 red-glow' : 'text-purple-300 purple-glow'} ${isChargingSigil ? 'glitch-text' : ''}`}>
        Ω
      </span>
      
      {/* Particle effects during charging */}
      {isChargingSigil && chargeProgress.get() > 0.3 && (
        <motion.div className="absolute inset-0 overflow-hidden rounded-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className={`absolute w-1 h-1 rounded-full ${hasOvercharged ? 'bg-red-400' : 'bg-purple-300'}`}
              initial={{ 
                x: Math.random() * 180 - 90, 
                y: Math.random() * 180 - 90,
                scale: 0
              }}
              animate={{ 
                x: Math.random() * 300 - 150,
                y: Math.random() * 300 - 150,
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 1 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};


// ENHANCEMENT 4: AUDIO VISUALIZER COMPONENT
// Add this new component for real-time audio visualization

// --- Audio Visualizer Component ---
const AudioVisualizer = ({ analyserRef, audioLevel }) => {
  const [bars, setBars] = useState(Array(20).fill(0));
  
  useEffect(() => {
    const updateVisualizer = () => {
      if (analyserRef.current && Tone.context.state === 'running') {
        const waveform = analyserRef.current.getValue();
        const newBars = Array(20).fill(0).map((_, i) => {
          const index = Math.floor(i * (waveform.length / 20));
          const value = Math.abs(waveform[index]) * 2;
          return Math.min(Math.max(value * 50, 5), 50); // Min 5px, max 50px
        });
        setBars(newBars);
      }
      requestAnimationFrame(updateVisualizer);
    };
    
    const animationId = requestAnimationFrame(updateVisualizer);
    return () => cancelAnimationFrame(animationId);
  }, [analyserRef, audioLevel]);
  
  return (
    <div className="flex items-end h-12 gap-1 justify-center">
      {bars.map((height, index) => (
        <div 
          key={index} 
          className="audio-bar" 
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
};


// ENHANCEMENT 5: ENHANCED COMIC READER COMPONENT
// Improved ComicReader component with better visual effects

// --- Enhanced ComicReader Component ---
const ComicReader = ({ currentPageIndex, currentPanelIndex, currentPanel, hasOvercharged, audioLevel, handleNextPanel, handlePreviousPanel, handleSigilMouseDown, handleSigilMouseUp, chargeProgress, userGlyphHistory }) => {
  // Create a reference to the panel element for scroll effects
  const panelRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  
  // Determine visual effects based on current state
  const isElectricJesus = currentPageIndex === 1; // Page 2
  const isOverchargeScene = currentPageIndex >= 4 && currentPageIndex <= 6;
  const isGlitchedReality = hasOvercharged && (currentPageIndex < 4 || currentPageIndex > 8);
  
  // Determine if "disruption" glyphs have been viewed
  const hasViewedDisruptionGlyphs = userGlyphHistory.some(glyphId => 
    ['spahn_ranch', 'labiana_house', 'mockingsuit', 'authority_shell'].includes(glyphId)
  );
  
  // Apply more intense visual corruption if disruption glyphs were viewed AND overcharged
  const dynamicFilter = isGlitchedReality && hasViewedDisruptionGlyphs
    ? 'saturate(2.0) hue-rotate(330deg) blur(1px) contrast(1.2)' // More intense, reddish hue
    : isGlitchedReality
      ? 'saturate(1.5) hue-rotate(300deg) blur(0.5px)' // Normal overcharge
      : 'none';
  
  // Panel animation variants
  const panelVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.98,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
  };

  // Glitch effect variants
  const glitchVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.15, 0, 0.2, 0, 0.15, 0],
      scaleY: [1, 0.98, 1.02, 0.99, 1.01, 1],
      skewX: [0, 0.5, -0.5, 0.2, -0.2, 0],
      filter: [
        "none",
        "hue-rotate(90deg)",
        "none",
        "hue-rotate(-90deg)",
        "none"
      ],
      transition: {
        repeat: Infinity,
        duration: 0.2,
        ease: "steps(3)",
        repeatDelay: 0.5
      }
    },
    exit: { opacity: 0 }
  };
  
  // Reveal text animation for a more engaging reading experience
  useEffect(() => {
    setIsRevealed(false);
    const timer = setTimeout(() => setIsRevealed(true), 300);
    return () => clearTimeout(timer);
  }, [currentPageIndex, currentPanelIndex]);
  
  // Custom shadow effect based on audio level
  const shadowStrength = useTransform(audioLevel, [0, 1], [0, 30]);
  
  return (
    <motion.div
      className={`md:col-span-4 col-span-full p-10 relative flex flex-col justify-center items-center md:items-start text-center md:text-left overflow-hidden comic-panel
        ${isElectricJesus ? 'visual-noise' : ''}
        ${isOverchargeScene ? 'overcharged' : ''}
        ${isGlitchedReality ? 'reality-fracture' : ''}`}
      style={{
        boxShadow: shadowStrength.map(s => `0 0 ${s}px ${hasOvercharged ? 'rgba(255, 0, 255, 0.7)' : 'rgba(192, 132, 252, 0.5)'}`),
        transition: 'box-shadow 0.1s ease-out, background-color 0.5s ease',
        filter: dynamicFilter,
        backgroundColor: isOverchargeScene ? 'rgba(30, 10, 40, 0.8)' : 'rgba(20, 20, 25, 0.7)'
      }}
      ref={panelRef}
    >
      {/* Page Title Display */}
      <div className="absolute top-4 left-0 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-lg font-mono font-bold ${hasOvercharged ? 'text-red-400' : 'text-purple-400'} px-4 py-1 border-b border-t ${hasOvercharged ? 'border-red-500/30' : 'border-purple-500/30'}`}
        >
          {comicScript[currentPageIndex].pageTitle}
        </motion.div>
      </div>
      
      <AnimatePresence mode="wait">
        {/* Current Comic Panel Display */}
        <motion.div
          key={`${currentPageIndex}-${currentPanelIndex}`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={panelVariants}
          className="flex flex-col items-center md:items-start text-center md:text-left z-20 w-full h-full justify-center mt-8"
        >
          {/* Visual Description */}
          <motion.div 
            className={`text-zinc-200 text-lg mb-6 max-w-2xl w-full cyber-frame ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p className={`${hasOvercharged ? 'text-red-400' : 'text-purple-400'} font-bold mb-2`}>Visual:</p>
            <p className={isElectricJesus ? 'glitch-text' : ''}>{currentPanel.visual}</p>
          </motion.div>
          
          {/* Caption Text */}
          {currentPanel.caption && (
            <motion.p 
              className={`mt-2 text-zinc-400 text-sm max-w-2xl w-full ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className={`${hasOvercharged ? 'text-red-300' : 'text-purple-300'} font-bold`}>Caption:</span> 
              <span className={isGlitchedReality ? 'glitch-text' : ''}>{currentPanel.caption}</span>
            </motion.p>
          )}
          
          {/* Speech Dialogue */}
          {currentPanel.speech && (
            <motion.p 
              className={`mt-4 text-zinc-200 text-md max-w-2xl w-full font-medium ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className={`${hasOvercharged ? 'text-red-400' : 'text-green-400'} font-bold`}>Speech:</span> 
              <span className={`${isOverchargeScene || isElectricJesus ? 'glitch-text' : ''}`}>{currentPanel.speech}</span>
            </motion.p>
          )}
          
          {/* Technical Overlay */}
          {currentPanel.overlay && (
            <motion.pre 
              className={`mt-4 ${hasOvercharged ? 'text-red-400' : 'text-red-400'} text-xs max-w-2xl w-full whitespace-pre-wrap font-mono terminal ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className={`${hasOvercharged ? 'text-red-500' : 'text-red-500'} font-bold`}>Overlay:</span> 
              {currentPanel.overlay}
            </motion.pre>
          )}
        </motion.div>

        {/* Glitch Layer - Enhanced for "Electric Jesus" panels */}
        {isElectricJesus && (
          <motion.div
            key="glitch-overlay"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={glitchVariants}
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundColor: 'rgba(0, 255, 255, 0.05)',
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0px, rgba(255,255,255,.07) 1px, transparent 1px, transparent 3px)',