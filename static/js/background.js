window.onload = function() {
    // Set up canvas
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
  
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgba(139, 0, 0, 0.3)';
    ctx.lineWidth = 2;
  
    // Draw diagonal lines
    for (let i = -canvas.width; i < canvas.width; i += 10) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + canvas.width, canvas.height);
      ctx.stroke();
    }
  
    // Set up chat box opacity
    const chatBox = document.querySelector('.chat-container');
    chatBox.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
};
