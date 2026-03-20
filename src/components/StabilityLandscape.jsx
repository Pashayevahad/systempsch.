import React, { useEffect, useRef } from 'react';

const StabilityLandscape = ({ coreTemp = 37.0 }) => {
    const canvasRef = useRef(null);
    const ballPos = useRef({ x: 0, v: 0 });
    const requestRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width;
        let height = canvas.height;

        const resize = () => {
            width = canvas.parentElement.clientWidth;
            height = 300;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', resize);
        resize();

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // 1. Calculate Curve parameters based on coreTemp
            // Thresholds: 37 is center.
            const diff = coreTemp - 37.0;
            const absDiff = Math.abs(diff);

            // b: Stability parameter. Negative = single well, Positive = double well.
            // At 37: b = -1. At 40: b = 2.
            const b = (absDiff * 1.5) - 1.0;

            // c: Tilt parameter.
            const c = diff * 0.5;

            // 2. Physics: Move the ball based on the gradient of the curve
            // Curve: f(x) = 0.5*x^4 - b*x^2 + c*x
            // Gradient f'(x) = 2*x^3 - 2*b*x + c
            const x = ballPos.current.x;
            const gradient = 2 * Math.pow(x, 3) - 2 * b * x + c;

            // Jitter/Noise increases as we get further from 37
            const noise = (Math.random() - 0.5) * (absDiff * 0.05);

            ballPos.current.v = (ballPos.current.v * 0.95) - (gradient * 0.01) + noise;
            ballPos.current.x += ballPos.current.v;

            // Constrain ball
            if (ballPos.current.x > 1.8) { ballPos.current.x = 1.8; ballPos.current.v *= -0.5; }
            if (ballPos.current.x < -1.8) { ballPos.current.x = -1.8; ballPos.current.v *= -0.5; }

            // 3. Draw the Curve
            ctx.beginPath();
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 4;
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#38bdf8';

            const scaleX = width / 4;
            const scaleY = 40;
            const offsetX = width / 2;
            const offsetY = height / 2 + 50;

            for (let i = -2; i <= 2; i += 0.05) {
                const y = 0.5 * Math.pow(i, 4) - b * Math.pow(i, 2) + c * i;
                const canvasX = offsetX + i * scaleX;
                const canvasY = offsetY + y * scaleY;
                if (i === -2) ctx.moveTo(canvasX, canvasY);
                else ctx.lineTo(canvasX, canvasY);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Labels
            ctx.fillStyle = '#64748b';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('STABLE REGION', offsetX, offsetY - 80);
            ctx.fillStyle = '#ef4444';
            ctx.fillText('FAILURE', offsetX - scaleX * 1.7, offsetY - 50);
            ctx.fillText('FAILURE', offsetX + scaleX * 1.7, offsetY - 50);

            // 4. Draw the Ball
            const bX = offsetX + ballPos.current.x * scaleX;
            const bY = offsetY + (0.5 * Math.pow(ballPos.current.x, 4) - b * Math.pow(ballPos.current.x, 2) + c * ballPos.current.x) * scaleY;

            ctx.beginPath();
            ctx.arc(bX, bY - 8, 8, 0, Math.PI * 2);
            ctx.fillStyle = '#ef4444';
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#ef4444';
            ctx.fill();
            ctx.shadowBlur = 0;

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [coreTemp]); // We re-initialize on coreTemp change to keep simple, 
    // but the pos.current ref maintains physics state across frames.

    return (
        <div className="w-full bg-[#1e293b]/30 rounded-3xl p-6 border border-slate-700/50 mt-8">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-xl font-bold text-slate-200">Stability Landscape</h3>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Waddington Resilience Model</p>
                </div>
                <div className="text-right">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold">Resilience Status</span>
                    <span className={`text-sm font-bold uppercase ${Math.abs(coreTemp - 37) < 1 ? 'text-emerald-400' : (Math.abs(coreTemp - 37) < 3 ? 'text-amber-400' : 'text-red-500')}`}>
                        {Math.abs(coreTemp - 37) < 1 ? 'Stable' : (Math.abs(coreTemp - 37) < 3 ? 'Decreasing' : 'Critical Failure')}
                    </span>
                </div>
            </div>
            <canvas ref={canvasRef} className="w-full h-[300px] cursor-crosshair" />
            <div className="mt-4 grid grid-cols-3 gap-4 text-[9px] font-bold text-slate-500 uppercase tracking-tighter text-center">
                <div className="border-t border-slate-800 pt-2">Irreversible Strain</div>
                <div className="border-t border-slate-800 pt-2 text-slate-400">Homeostatic Basin</div>
                <div className="border-t border-slate-800 pt-2">Decompression</div>
            </div>
        </div>
    );
};

export default StabilityLandscape;
