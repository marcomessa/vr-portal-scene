# Vr Portal Scene
This scene based on exercise 49 - "Portal Scene" of the epic course "[ThreeJS Journey](https://threejs-journey.com/)" by [Bruno Simon](https://twitter.com/bruno_simon). I added ThreeJS WebXR API to create a full immersive vr experience around the original scene.

## Running in browser
- I really suggest [this extension](https://chrome.google.com/webstore/detail/immersive-web-emulator/cgffilbpcibhmcfbgggfhfolhkfbhmik) for testing vr experience in your browser

## Extra dependencies
- Vr integration in R3F [@react-three/xr](https://github.com/pmndrs/react-xr)
- Vite https plugin [vite-plugin-mkcert](https://www.npmjs.com/package/vite-plugin-mkcert)

## How to run
- `npm install` (I'm using node 18)
- `npm run dev`

## Differences between original scene
- `VRButton` in `index.jsx` to toggle full immersion
- `VrExperience` component that wraps `Experience` and creates VrControllers and Hands. It also handles vr experience start and end events, saving and restoring non vr position and placing the user on the ground after entering in full immersion mode (thanks to [@mrdoob teleport example](https://github.com/mrdoob/three.js/blob/master/examples/webxr_vr_teleport.html) for the moving code)

## TODO
- Add teleport