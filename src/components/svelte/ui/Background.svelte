<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import * as THREE from "three";

  let canvas: HTMLCanvasElement;

  let renderer: THREE.WebGLRenderer | undefined;
  let animationId: number | undefined;
  let sphere: THREE.Mesh | undefined;

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 0;

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xdc143c, wireframe: true });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (sphere) {
        sphere.rotation.y += 0.01;
        sphere.rotation.x += 0.005;
      }
      if (renderer) {
        renderer.render(scene, camera);
      }
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer?.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  onDestroy(() => {
    if (animationId) cancelAnimationFrame(animationId);
    if (renderer) {
      renderer.dispose();
      const gl = renderer.getContext();
      const loseContextExt = gl?.getExtension("WEBGL_lose_context");
      loseContextExt?.loseContext();
      renderer = undefined;
    }
    if (sphere) {
      sphere.geometry.dispose();
      if (Array.isArray(sphere.material)) sphere.material.forEach(m => m.dispose());
      else sphere.material.dispose();
      sphere = undefined;
    }
  });
</script>

<div class="fixed inset-0 w-dvw h-dvh">
  <canvas class="w-full h-full" bind:this={canvas}></canvas>
</div>
