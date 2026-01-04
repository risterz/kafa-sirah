// Sound effects utility using Web Audio API
// Generates simple sounds without needing audio files

class SoundEffects {
    private audioContext: AudioContext | null = null;

    private getAudioContext(): AudioContext {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        return this.audioContext;
    }

    // Play a simple beep/tone
    private playTone(frequency: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.3) {
        try {
            const ctx = this.getAudioContext();
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            oscillator.type = type;
            oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

            // Fade out
            gainNode.gain.setValueAtTime(volume, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + duration);
        } catch (e) {
            console.log('Sound not available');
        }
    }

    // Click sound - short, gentle pop
    click() {
        this.playTone(600, 0.08, 'sine', 0.15);
    }

    // Navigation sound - soft whoosh effect
    navigate() {
        this.playTone(400, 0.1, 'sine', 0.1);
        setTimeout(() => this.playTone(500, 0.1, 'sine', 0.1), 50);
    }

    // Correct answer - happy ascending notes
    correct() {
        this.playTone(523, 0.12, 'sine', 0.25); // C
        setTimeout(() => this.playTone(659, 0.12, 'sine', 0.25), 100); // E
        setTimeout(() => this.playTone(784, 0.2, 'sine', 0.25), 200); // G
    }

    // Wrong answer - gentle descending note
    wrong() {
        this.playTone(400, 0.15, 'triangle', 0.2);
        setTimeout(() => this.playTone(300, 0.2, 'triangle', 0.15), 100);
    }

    // Select option - light tap
    select() {
        this.playTone(500, 0.05, 'sine', 0.12);
    }

    // Completion celebration - victory fanfare
    complete() {
        this.playTone(523, 0.15, 'sine', 0.2); // C
        setTimeout(() => this.playTone(659, 0.15, 'sine', 0.2), 120); // E
        setTimeout(() => this.playTone(784, 0.15, 'sine', 0.2), 240); // G
        setTimeout(() => this.playTone(1047, 0.3, 'sine', 0.25), 360); // High C
    }

    // Points earned - coin-like sound
    points() {
        this.playTone(880, 0.08, 'square', 0.1);
        setTimeout(() => this.playTone(1100, 0.1, 'square', 0.08), 60);
    }

    // Badge unlocked - magical sparkle
    badge() {
        const notes = [880, 1100, 1320, 1540];
        notes.forEach((freq, i) => {
            setTimeout(() => this.playTone(freq, 0.12, 'sine', 0.15), i * 80);
        });
    }

    // Next button - forward motion
    next() {
        this.playTone(440, 0.06, 'sine', 0.12);
        setTimeout(() => this.playTone(550, 0.08, 'sine', 0.12), 40);
    }

    // Previous button - backward motion
    prev() {
        this.playTone(550, 0.06, 'sine', 0.12);
        setTimeout(() => this.playTone(440, 0.08, 'sine', 0.12), 40);
    }
}

// Export singleton instance
export const sounds = new SoundEffects();
