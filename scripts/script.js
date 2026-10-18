document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const terminalBody = document.getElementById('terminal-body');
    const terminalInput = document.getElementById('terminal-input');

    const commands = {
        'help': 'Verfügbare Befehle: <span class="text-emerald-400">skills</span>, <span class="text-emerald-400">projects</span>, <span class="text-emerald-400">fastfetch</span>, <span class="text-emerald-400">contact</span>, <span class="text-emerald-400">clear</span>',
        'skills': 'OS: Arch Linux, Hyprland<br>Tools: Git, Bash, VSCodium, Android Studio, Godot, Blender<br>Languages: Kotlin, Java, Python, C, C#, JavaScript, GDScript<br>Frameworks: Jetpack Compose',
        'projects': '1. <b>Amberoid</b>: Native Android audio player in Kotlin & Compose<br>2. <b>Termux Ecosystem</b>: Custom Android CLI dev environment<br>3. <b>Godot 3D</b>: Interactive game mechanics & low-poly assets',
        'contact': 'E-Mail: <a href="mailto:voiatpavlo1@gmail.com" class="underline text-emerald-400">voiatpavlo1@gmail.com</a><br>GitHub: <a href="https://github.com/pavlovoiat" target="_blank" class="underline text-emerald-400">github.com/pavlovoiat</a>',
        'fastfetch': `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 p-2 bg-slate-950/50 rounded border border-slate-800/50 text-zinc-400">
                    <div>
                        <span class="text-emerald-400 font-semibold">OS:</span> Arch Linux x86_64<br>
                        <span class="text-emerald-400 font-semibold">WM:</span> Hyprland (Wayland)<br>
                        <span class="text-emerald-400 font-semibold">Shell:</span> bash<br>
                        <span class="text-emerald-400 font-semibold">Editor:</span> VSCodium
                    </div>
                    <div>
                        <span class="text-emerald-400 font-semibold">Target:</span> Ausbildung FIAE (2027)<br>
                        <span class="text-emerald-400 font-semibold">School:</span> Sickingen-Gymnasium (Kl. 13)<br>
                        <span class="text-emerald-400 font-semibold">Main Language:</span> Kotlin<br>
                        <span class="text-emerald-400 font-semibold">VCS:</span> Git
                    </div>
                </div>`
    };

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const inputVal = terminalInput.value.trim().toLowerCase();
            terminalInput.value = '';

            if (!inputVal) return;

            // Append user prompt
            const promptLine = document.createElement('div');
            promptLine.innerHTML = `<span class="text-emerald-400">pavlo@arch</span>:<span class="text-blue-400">~</span>$ ${inputVal}`;
            terminalBody.appendChild(promptLine);

            if (inputVal === 'clear') {
                terminalBody.innerHTML = '';
            } else if (commands[inputVal]) {
                const responseLine = document.createElement('div');
                responseLine.className = 'text-zinc-300 mt-1';
                responseLine.innerHTML = commands[inputVal];
                terminalBody.appendChild(responseLine);
            } else {
                const errorLine = document.createElement('div');
                errorLine.className = 'text-red-400/90 mt-1';
                errorLine.innerHTML = `Befehl nicht gefunden: ${inputVal}. Tippe <span class="text-emerald-400">help</span> ein.`;
                terminalBody.appendChild(errorLine);
            }

            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
});