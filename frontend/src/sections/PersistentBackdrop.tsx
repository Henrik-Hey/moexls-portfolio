import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import styled from "styled-components";
import {
  usePaletteContext,
  PaletteInterface,
} from "../providers/PaletteProviders";

import IDs from "../IDs";
import Portal from "../shared/Portal";

const PersistentBackdrop = () => {
  const waveModel = useRef<THREE.Mesh>(
    null
  ) as React.MutableRefObject<THREE.Mesh>;
  const waveModels = useRef<THREE.Mesh[]>([]) as React.MutableRefObject<
    THREE.Mesh[]
  >;

  const canvasRef = useRef<HTMLCanvasElement>(
    null
  ) as React.MutableRefObject<HTMLCanvasElement>;
  const persistCanvasRef = useRef<HTMLCanvasElement>(
    null
  ) as React.MutableRefObject<HTMLCanvasElement>;
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;
  const overlayRef = useRef<SVGSVGElement>(
    null
  ) as React.MutableRefObject<SVGSVGElement>;

  const palette = usePaletteContext();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const onMount = () => {
    InitializePersistentThreeJS(persistCanvasRef, waveModels);
    InitializeThreeJS(canvasRef, waveModel);
    BuildAnimation(waveModel, containerRef, overlayRef, waveModels, palette);
  };

  return (
    <FixedContainer>
      <PersistentCanvas ref={persistCanvasRef} />
      <Portal onMount={onMount}>
        <CanvasContainer ref={containerRef}>
          <FixedCanvas ref={canvasRef} />
          <SVGOverlay
            ref={overlayRef}
            width="100%"
            height="100%"
            viewBox="0 0 1080 1080"
          >
            <path d="M1080,0L0,0L0,1080L1080,1080L1080,0ZM494.672,702.151L566.371,674.76L675.934,854.415C675.934,854.415 815.304,803.657 828.193,830.242C841.083,856.827 858.001,924.498 803.22,925.304C748.438,926.109 607.457,925.304 607.457,925.304L494.672,702.151ZM305.069,564.717C305.069,564.717 320.212,490.868 341.035,514.53C361.857,538.192 404.554,613.91 404.554,613.91C404.554,613.91 493.418,555.276 511.401,564.717C529.384,574.158 545.978,622.13 538.628,639.789C531.277,657.448 437.211,686.166 437.211,686.166C437.211,686.166 552.1,829.707 526.545,851.476C500.99,873.246 457.669,883.657 437.211,873.246C416.753,862.834 375.275,720.641 375.275,720.641C375.275,720.641 290.303,810.21 264.749,797.906C239.194,785.602 209.853,756.764 211.746,734.27C213.639,711.776 345.767,656.502 345.767,656.502L305.069,564.717ZM917.457,649.283C1134.53,669.622 960.405,527.291 803.557,581.712C740.576,603.565 919.752,718.964 919.752,718.964C919.752,718.964 741.983,670.567 737.33,733.039C732.677,795.511 950.918,856.193 991.234,806.784C1031.55,757.375 984.01,684.495 917.457,649.283ZM570.278,259.756C570.278,259.756 689.648,388.477 538.628,554.111C546.616,602.381 669.658,769.908 718.875,706.494C768.092,643.08 703.376,570.792 649.427,535.773C670.25,532.933 807.415,599.609 831.077,512.533C854.739,425.457 686.903,390.641 686.903,390.641C686.903,390.641 866.526,386.584 838.131,292.882C809.737,199.181 656.407,211.485 570.278,259.756ZM218.004,596.779C238.377,596.779 254.917,613.319 254.917,633.691C254.917,654.064 238.377,670.604 218.004,670.604C197.632,670.604 181.092,654.064 181.092,633.691C181.092,613.319 197.632,596.779 218.004,596.779ZM182.405,464.825C182.405,464.825 195.834,617.465 130.768,603.077C65.702,588.689 25.738,383.52 103.46,269.389C181.183,155.257 189.735,370.29 189.735,370.29C189.735,370.29 199.482,191.548 244.625,208.429C289.768,225.31 397.698,387.173 371.123,445.4C344.547,503.627 265.839,348.9 265.839,348.9C265.839,348.9 319.749,564.6 268.664,564.717C217.578,564.834 182.405,464.825 182.405,464.825ZM484.372,189.54C416.201,127.526 249.648,156.389 296.164,207.304C423.004,346.139 415.192,424.531 375.275,477.762C330.252,537.804 487.801,587.294 551.44,493.557C624.09,386.548 574.356,271.398 484.372,189.54Z" />
          </SVGOverlay>
        </CanvasContainer>
        <NavBar id={IDs.Navbar}>
          <NavList>
            <NavItem>
              <NavLink href={`#${IDs.Intro}`}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`#${IDs.About}`}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`#${IDs.Projects}`}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`#`}>Contact</NavLink>
            </NavItem>
          </NavList>
        </NavBar>
      </Portal>
    </FixedContainer>
  );
};

const InitializePersistentThreeJS = (
  canvasRef: React.MutableRefObject<HTMLCanvasElement>,
  waveModels: React.MutableRefObject<THREE.Mesh[]>
) => {
  if (!canvasRef.current || !waveModels.current) return;

  const {
    width,
    height, // @ts-ignore
  } = canvasRef.current.getBoundingClientRect();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasRef.current,
    alpha: true,
  });

  renderer.setSize(width, height);
  renderer.setClearColor(0x141414, 0);

  const light2 = new THREE.AmbientLight(0x141414);
  scene.add(light2);

  camera.position.z = 5;

  const waveDepth = -1.5;
  const waveHeight = visibleHeightAtZDepth(waveDepth, camera);
  const waveWidth = visibleWidthAtZDepth(waveDepth, camera);

  const waves = [];
  const wave2 = generateWaveMesh(
    waveDepth,
    waveWidth,
    waveHeight,
    0xffd100,
    0.99
  );
  waves.push(wave2);
  waveModels.current.push(wave2);

  const wave3 = generateWaveMesh(
    waveDepth,
    waveWidth,
    waveHeight,
    0xfbfbfb,
    0.99
  );
  waves.push(wave3);
  waveModels.current.push(wave3);

  scene.add(...waves);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    wave2.material.uniforms.delta.value += 0.025;
    wave3.material.uniforms.delta.value += 0.025;
  };
  animate();
};

const InitializeThreeJS = (
  canvasRef: React.MutableRefObject<HTMLCanvasElement>,
  waveModel: React.MutableRefObject<THREE.Mesh>
) => {
  if (!canvasRef.current) return;

  const {
    width,
    height, // @ts-ignore
  } = canvasRef.current.getBoundingClientRect();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasRef.current,
    alpha: true,
  });

  renderer.setSize(width, height);
  renderer.setClearColor(0x141414, 0);

  const light2 = new THREE.AmbientLight(0x141414);
  scene.add(light2);

  camera.position.z = 5;

  const wave1Depth = -1.5;
  const wave1Height = visibleHeightAtZDepth(wave1Depth, camera);
  const wave1Width = visibleWidthAtZDepth(wave1Depth, camera);
  const wave1 = (waveModel.current = generateWaveMesh(
    wave1Depth,
    wave1Width,
    wave1Height,
    0xffd100,
    0.99
  ));
  scene.add(wave1);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    wave1.material.uniforms.delta.value += 0.05;
  };
  animate();
};

const BuildAnimation = (
  waveModel: React.MutableRefObject<THREE.Mesh>,
  container: React.MutableRefObject<HTMLDivElement>,
  overlay: React.MutableRefObject<SVGSVGElement>,
  waveModels: React.MutableRefObject<THREE.Mesh[]>,
  palette: PaletteInterface
) => {
  if (!waveModel.current || !container.current || !overlay.current) return;

  const timeline = gsap.timeline();

  const model = waveModel.current;

  timeline.fromTo(
    model.position,
    { y: -model.userData.height },
    { y: 0, duration: 1.5 },
    1.5
  );

  timeline.fromTo(
    container.current,
    {
      x: "150%",
      y: "75%",
      scale: "1",
    },
    {
      x: "32px",
      y: "32px",
      scale: ".2",
    },
    3
  );

  timeline.fromTo(
    `#${IDs.Navbar}`,
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, color: palette.theme.color1 },
    4
  );

  buildBGWaveAnimation(
    // @ts-ignore
    waveModels.current[0],
    `#${IDs.About}`,
    palette.theme.color1,
    palette.theme.color4
  );

  buildBGWaveAnimation(
    // @ts-ignore
    waveModels.current[1],
    `#${IDs.Projects}`,
    palette.theme.color4,
    palette.theme.color4
  );
};

const buildBGWaveAnimation = (
  model: THREE.Mesh,
  start: string,
  oldColor: string,
  newColor: string
) => {
  const timeline = gsap.timeline();

  timeline.fromTo(
    // @ts-ignore
    model.material.uniforms.seed,
    { value: 0 },
    { value: 1, duration: 0.5, ease: "power3.out" },
    0
  );

  timeline.fromTo(
    model.position,
    { y: -model.userData.height },
    { y: 0, duration: 1 },
    0
  );

  timeline.fromTo(
    // @ts-ignore
    model.material.uniforms.seed,
    { value: 1 },
    { value: 0, duration: 0.5, ease: "power3.out" },
    0.5
  );

  timeline.fromTo(
    `#${IDs.Navbar}`,
    { color: oldColor },
    { color: newColor },
    0.33
  );

  ScrollTrigger.create({
    trigger: start,
    // endTrigger: end,
    start: "top-=5% top",
    animation: timeline,
    toggleActions: "play none none reverse",
  });

  return timeline;
};

const generateWaveMesh = (
  depth: number,
  width: number,
  height: number,
  color: number,
  seed: number,
  sideCircleColor?: number
) => {
  const aspectRatio = width / height;
  const verticalSegments = 32;
  const horizontalSegments = verticalSegments * aspectRatio;
  const geometry = new THREE.PlaneGeometry(
    width,
    height,
    horizontalSegments,
    verticalSegments
  );

  // Material Logic
  const vertexShader = () => {
    return `
                varying vec3 vUv; 
                uniform float delta;
                uniform float seed;
            
                void main() {
                    vec3 morphedPos = position;
    
                    if(morphedPos.y >= 1.0) {
                      morphedPos.y -= sin(position.x + delta) * ((position.x + 5.0) / 7.0) * seed;
                    }
    
                    vUv = morphedPos; 
                    
    
                    vec4 modelViewPosition = modelViewMatrix * vec4(morphedPos, 1.0);
                    gl_Position = projectionMatrix * modelViewPosition; 
                }
            `;
  };

  const fragmentShader = () => {
    return `
                uniform vec3 color; 
                varying vec3 vUv;
        
                void main() {
                  gl_FragColor = vec4(color, 1.0);
                }
            `;
  };

  let uniforms = {
    color: { type: "vec3", value: new THREE.Color(color) },
    resolution: {
      type: "vec3",
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    circleColor: {
      type: "vec3",
      value: new THREE.Color(sideCircleColor || color),
    },
    delta: { type: "float", value: Math.sin(Date.now()) },
    seed: { type: "float", value: seed },
  };
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fragmentShader(),
    vertexShader: vertexShader(),
  });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.z = depth;
  mesh.position.y = 0 - height / 2;
  mesh.userData.height = height;
  return mesh;
};

const visibleHeightAtZDepth = (
  depth: number,
  camera: THREE.PerspectiveCamera
) => {
  // compensate for cameras not positioned at z=0
  const cameraOffset = camera.position.z;
  if (depth < cameraOffset) depth -= cameraOffset;
  else depth += cameraOffset;

  // vertical fov in radians
  const vFOV = (camera.fov * Math.PI) / 180;

  // Math.abs to ensure the result is always positive
  return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
};

const visibleWidthAtZDepth = (
  depth: number,
  camera: THREE.PerspectiveCamera
) => {
  const height = visibleHeightAtZDepth(depth, camera);
  return height * camera.aspect;
};

const FixedContainer = styled.div`
  position: fixed;
  z-index: 0;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.color4};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 25vw;
  height: 25vw;
  background-color: ${({ theme }) => theme.color1};
  transform-origin: top left;
  z-index: 10000;
`;

const SVGOverlay = styled.svg`
  position: absolute;
  top: -0.5vw;
  left: -0.5vw;
  width: 26vw;
  height: 26vw;

  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 2;
  fill: ${({ theme }) => theme.color4};
`;

const FixedCanvas = styled.canvas`
  position: absolute;
  width: 25vw;
  height: 25vw;
`;

const PersistentCanvas = styled.canvas`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const NavBar = styled.nav`
  position: absolute;
  right: 64px;
  top: 32px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color1};
  z-index: 10000;
`;

const NavList = styled.ul`
  color: inherit;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.li`
  color: inherit;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 400;
  margin-left: 32px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-family: BebasKai;
`;

export default PersistentBackdrop;
