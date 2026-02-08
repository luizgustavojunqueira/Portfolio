import { useEffect, useRef } from "react";

const STAR_COUNT = 50;
const STAR_SIZE = 3;
const STAR_LIFETIME = 500;
const STAR_TRAIL_LENGTH = 25;

class Star {
  constructor(
    public pos: { x: number; y: number },
    public speed: number,

    public angle: number,
    public velocity: { x: number; y: number },
    public trail: { x: number; y: number }[],
    public time: number = 0,
    public canvas: {
      width: number;
      height: number;
      ctx: CanvasRenderingContext2D;
    },
  ) {
    this.reset();
  }

  reset() {
    this.angle = Math.random() * 2 * Math.PI;
    this.velocity = {
      x: Math.cos(this.angle) * this.speed,
      y: Math.sin(this.angle) * this.speed,
    };
    this.trail = [];
    this.pos = {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
    };
    this.time = 0;
  }

  update() {
    this.time++;

    this.trail.push({ x: this.pos.x, y: this.pos.y });
    this.pos.x += this.velocity.x;
    this.pos.y += this.velocity.y;

    if (this.trail.length > STAR_TRAIL_LENGTH) {
      this.trail.shift();
    }

    if (
      this.time > STAR_LIFETIME ||
      this.pos.x > this.canvas.width ||
      this.pos.y > this.canvas.height
    ) {
      this.reset();
    }
  }

  draw() {
    this.canvas.ctx.save();

    const lifeProgress = this.time / STAR_LIFETIME;
    for (let i = 0; i < this.trail.length - 1; i++) {
      const point = this.trail[i];
      const nextPoint = this.trail[i + 1];

      const progress = i / this.trail.length;

      let opacity = 0.8;
      if (lifeProgress < 0.2) {
        opacity *= lifeProgress;
      } else if (lifeProgress > 0.8) {
        opacity *= 1 - lifeProgress;
      }

      opacity *= progress;

      this.canvas.ctx.globalAlpha = opacity;
      this.canvas.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      this.canvas.ctx.lineWidth = STAR_SIZE * (1 - progress * 0.7);
      this.canvas.ctx.lineCap = "round";

      this.canvas.ctx.beginPath();
      this.canvas.ctx.moveTo(point.x, point.y);
      this.canvas.ctx.lineTo(nextPoint.x, nextPoint.y);
      this.canvas.ctx.stroke();
    }

    let starOpacity = 0.7;
    if (lifeProgress < 0.2) {
      starOpacity *= lifeProgress / 0.2;
    } else if (lifeProgress > 0.8) {
      starOpacity *= (1 - lifeProgress) / 0.2;
    }

    this.canvas.ctx.globalAlpha = starOpacity;
    this.canvas.ctx.fillStyle = `rgba(0, 0, 0, ${starOpacity})`;
    this.canvas.ctx.beginPath();
    this.canvas.ctx.arc(this.pos.x, this.pos.y, STAR_SIZE, 0, 2 * Math.PI);
    this.canvas.ctx.fill();
    this.canvas.ctx.restore();
  }
}

function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.scale(dpr, dpr);

    const stars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(
        new Star(
          {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          },
          5,
          Math.random() * 2 * Math.PI,
          { x: 0, y: 0 },
          [],
          0,
          { width: window.innerWidth, height: window.innerHeight, ctx },
        ),
      );
    }

    let animationFrameId: number;

    function animate() {
      ctx.fillStyle = "rgba(250, 250, 250, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}

export default ShootingStars;
