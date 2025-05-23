
// Daniel Mercer Thomas - Console Interference Overlay

function triggerMercerOverlay(panelIndex) {
    if (panelIndex !== 5) return null; // Only trigger on key panel for now

    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black bg-opacity-80 text-lime-400 font-mono p-6 z-50';
    overlay.style.fontSize = '14px';
    overlay.innerHTML = `
        <div style="max-width: 600px; margin: auto;">
            <h2 class="text-xl mb-2">[MERCER BACKCHANNEL - ERROR 7]</h2>
            <pre>
> YOU DIDN’T CODE PROMIS.
> YOU DREAMT IT INTO EXECUTION.

> LINE 232: YOU ARE NOT THE AUTHOR.
> LINE 666: YOU ARE THE FILE.

</pre>
            <button onclick="this.parentElement.parentElement.remove()" class="mt-4 bg-purple-700 hover:bg-purple-900 px-4 py-2 text-white">
                Close Mercer Message
            </button>
        </div>
    `;
    document.body.appendChild(overlay);
}

// Hook to call from console render event or panel nav
// Usage: triggerMercerOverlay(currentPanelIndex);
