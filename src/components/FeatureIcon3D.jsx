import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function FeatureIcon3D({ type, hovered }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    
    // Transparent background for glassmorphic overlay
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(80, 80);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 10;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    
    const group = new THREE.Group();
    scene.add(group);

    const mat = new THREE.MeshStandardMaterial({ 
      color: '#7F77DD', 
      roughness: 0.2, 
      metalness: 0.8,
      wireframe: type === 'events' // Events gets specialized wireframe styling
    });
    
    const matAccent = new THREE.MeshStandardMaterial({ 
      color: '#EF9F27', 
      roughness: 0.2, 
      metalness: 0.8 
    });

    // ── GEOMETRY PROCEDURAL CONSTRUCTION ──
    if (type === 'profile') {
      const head = new THREE.Mesh(new THREE.SphereGeometry(1.2, 16, 16), mat);
      head.position.y = 1.6;
      const body = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.6, 16, 32), mat);
      body.rotation.x = Math.PI / 2;
      group.add(head, body);
    } 
    else if (type === 'dashboard') {
      for(let i=0; i<3; i++) {
        const h = 1.2 + i * 1.5;
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.8, h, 0.8), i === 2 ? matAccent : mat);
        bar.position.set(-1.5 + i * 1.5, (h/2) - 2, 0);
        group.add(bar);
      }
    }
    else if (type === 'mentorship') {
      const n1 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), mat);
      n1.position.set(-2, -1, 0);
      const n2 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), matAccent);
      n2.position.set(2, 1, 0);
      
      const arcGeo = new THREE.TorusGeometry(2.5, 0.1, 8, 24, Math.PI);
      const arc = new THREE.Mesh(arcGeo, mat);
      arc.rotation.z = Math.PI / 4;
      arc.position.set(0, 0, 0);
      group.add(n1, n2, arc);
    }
    else if (type === 'marketplace') {
      for(let i=0; i<4; i++) {
        const tag = new THREE.Mesh(new THREE.BoxGeometry(2, 1, 0.1), i === 0 ? matAccent : mat);
        tag.position.set((Math.random()-0.5)*3, (Math.random()-0.5)*3, (Math.random()-0.5)*3);
        tag.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
        group.add(tag);
      }
    }
    else if (type === 'events') {
      const box = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 0.5), mat);
      const grid = new THREE.Mesh(new THREE.BoxGeometry(3.1, 3.1, 0.6), new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true}));
      group.add(box, grid);
    }
    else if (type === 'lobby') {
      const base = new THREE.Mesh(new THREE.BoxGeometry(4, 0.5, 4), mat);
      base.position.y = -1;
      const core = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), matAccent);
      core.position.y = 0.5;
      group.add(base, core);
      for(let i=0; i<4; i++) {
        const px = i < 2 ? -1.5 : 1.5;
        const pz = i % 2 === 0 ? -1.5 : 1.5;
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.4, 2, 0.4), mat);
        pillar.position.set(px, 0.5, pz);
        group.add(pillar);
      }
    }

    // Auto-center the generated clusters uniformly
    if (type !== 'dashboard') {
        const box = new THREE.Box3().setFromObject(group);
        const center = box.getCenter(new THREE.Vector3());
        group.position.sub(center);
    }

    let renderId;
    let baseSpeed = 0.01;
    
    // RENDER LOOP
    const render = () => {
      // Direct JS data attributes bridging to trigger smooth velocity lerps
      const isHovered = canvasRef.current.dataset.hovered === 'true';
      const targetSpeed = isHovered ? 0.06 : 0.01;
      baseSpeed += (targetSpeed - baseSpeed) * 0.1; // damping multiplier
      
      group.rotation.y += baseSpeed;
      if (type === 'marketplace' || type === 'mentorship') {
         group.rotation.x += baseSpeed * 0.6;
      }

      renderer.render(scene, camera);
      renderId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(renderId);
      renderer.dispose();
      scene.children.forEach(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
            if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
            else child.material.dispose();
        }
      });
    };
  }, [type]);

  return (
    <canvas 
      ref={canvasRef} 
      data-hovered={hovered} // Dataset bridging to pure webGL canvas without re-rendering overhead
      style={{ width: '80px', height: '80px', pointerEvents: 'none' }} 
    />
  );
}
