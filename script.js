const lines = [
    "Aiming to leverage proven",
    "communication, multitasking, and",
    "teamwork skills to successfully fill the",
    "required role at your company.",
    "Frequently praised as diligent by my",
    "peers, I can be relied upon to help your",
    "company achieve its goals."
];

let currentLine = 0;

function typeLine() {
    if (currentLine < lines.length) {
        const lineElement = document.getElementById(`line${currentLine + 1}`);
        if (lineElement) {
            lineElement.style.width = "100%";
            const lineText = lines[currentLine];
            let charIndex = 0;
            
            lineElement.textContent = ''; // Clear any previous text

            const typeChar = () => {
                if (charIndex < lineText.length) {
                    lineElement.textContent += lineText.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, 100); // Adjust typing speed here
                } else {
                    currentLine++;
                    setTimeout(typeLine, 500); // Adjust delay between lines here
                }
            };

            typeChar();
        } else {
            console.error(`Element with ID line${currentLine + 1} not found.`);
        }
    }
}

typeLine();
