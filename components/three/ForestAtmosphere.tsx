'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ForestAtmosphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // WebGL Availability Check
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    // 1. Scene, Camera & Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // 2. Pine Tree Silhouettes Group (Subtle Depth Layers)
    const pineGroup = new THREE.Group();

    const pinesData = [
      { x: -7, y: -2, z: -6, radius: 1.5, height: 7, color: 0x070d0b, opacity: 0.45 },
      { x: 8, y: -1.5, z: -7, radius: 1.8, height: 8, color: 0x060c0a, opacity: 0.5 },
      { x: -9, y: -3, z: -3, radius: 2.2, height: 9, color: 0x0b1310, opacity: 0.35 },
      { x: 9.5, y: -3.5, z: -4, radius: 2.4, height: 9.5, color: 0x09100d, opacity: 0.35 },
    ];

    const pineGeometries: THREE.BufferGeometry[] = [];
    const pineMaterials: THREE.Material[] = [];

    pinesData.forEach((p) => {
      const geom = new THREE.ConeGeometry(p.radius, p.height, 5);
      const mat = new THREE.MeshBasicMaterial({
        color: p.color,
        transparent: true,
        opacity: p.opacity,
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(p.x, p.y, p.z);
      pineGroup.add(mesh);
      pineGeometries.push(geom);
      pineMaterials.push(mat);
    });

    scene.add(pineGroup);

    // 3. Drifting Fog Layer (Subtle Mountain Fog)
    const fogGeom = new THREE.PlaneGeometry(22, 10);
    const fogMat = new THREE.MeshBasicMaterial({
      color: 0x111e18,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    });
    const fogMesh = new THREE.Mesh(fogGeom, fogMat);
    fogMesh.position.set(0, -1, -2);
    scene.add(fogMesh);

    // 4. Pointer Depth Parallax Listener
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 5. Animation Loop & Visibility Control
    let animationFrameId: number;
    let isVisible = true;
    const clock = new THREE.Clock();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth pointer parallax movement for pine group
      pineGroup.position.x += (mouseX - pineGroup.position.x) * 0.03;
      pineGroup.position.y += (-mouseY - pineGroup.position.y) * 0.03;

      // Drifting fog horizontal motion
      fogMesh.position.x = Math.sin(elapsedTime * 0.15) * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Window Resize Listener
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };
    window.addEventListener('resize', handleResize);

    // 7. Cleanup GPU Resources
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      pineGeometries.forEach((g) => g.dispose());
      pineMaterials.forEach((m) => m.dispose());
      fogGeom.dispose();
      fogMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
