async function startIAMFAudio() {
  // Load the wrapper which loads the WASM
  const { IAMFPlayer } = await import('./iamf/decoder/wasm/wrapper.js');

  const player = new IAMFPlayer({
    wasmPath: './iamf/decoder/wasm/wrapper.wasm',
    decoderWorkerPath: './iamf/decoder_worker_bundle.js',
    appBundlePath: './iamf/app_bundle.js',
  });

  // Load your audio
  const audioResponse = await fetch('./iamf/data/videos/Animated_demo_3OA.iamf');
  const audioBuffer = await audioResponse.arrayBuffer();

  await player.load(audioBuffer);
  player.play();
}
