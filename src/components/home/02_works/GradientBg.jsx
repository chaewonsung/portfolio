import React, { useEffect, useRef } from 'react';

const GradientBgTop = () => {
  return (
    <div className="gradient-bg gradient-bg--top">
      <Canvas />
      <div className="gradient-bg__img-container"></div>
    </div>
  );
};

const Canvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width, height;

    function resize() {
      width = canvas.width;
      height = canvas.height;
    }

    window.addEventListener('resize', resize);
    resize();

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.cur = Math.random() * 100;
        this.speed = 0.005;
        this.max = Math.min(this.fixedY, height - this.fixedY);
      }

      update() {
        this.cur += this.speed;
        this.y = this.fixedY + Math.sin(this.cur) * this.max;
      }
    }

    const totalPoints = 4;
    const points = [];

    function initPoints() {
      points.length = 0;
      const gap = width / (totalPoints - 1);
      for (let i = 0; i < totalPoints; i++) {
        points.push(new Point(gap * i, height / 2));
      }
    }

    initPoints();

    function draw() {
      ctx.clearRect(0, 0, width, height);

      ctx.filter = 'blur(10px)';
      // const gradient = ctx.createLinearGradient(
      //   width / 2,
      //   height / 2,
      //   width / 2,
      //   height
      // );
      // gradient.addColorStop(0, '#901600');
      // gradient.addColorStop(0.7, '#90160000');
      // gradient.addColorStop(1, '#90160000');

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      // 중간 점만 출렁이게
      for (let i = 1; i < points.length - 1; i++) {
        points[i].update();
      }

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const cur = points[i];
        const cx = (prev.x + cur.x) / 2;
        const cy = (prev.y + cur.y) / 2;
        ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
      }

      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = '#C91300';
      ctx.fill();

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

const GradientBgBottom = () => {
  return (
    <div className="gradient-bg gradient-bg--bottom ">
      <div className="gradient-bg__img-container"></div>
    </div>
  );
};

export { GradientBgTop, GradientBgBottom };
