document.addEventListener('DOMContentLoaded', () => {
  startIAMFAudio();
});
async function startIAMFAudio() {
  if (typeof IAMFPlayer !== 'function') {
    console.error('IAMFPlayer not loaded correctly.');
    return;
  }

  const player = new IAMFPlayer({
    wasmPath: './iamf/decoder/wasm/wrapper.wasm',
    decoderWorkerPath: './iamf/decoder_worker_bundle.js',
    appBundlePath: './iamf/app_bundle.js',
  });

  const response = await fetch('./iamf/data/videos/Animated_demo_3OA.iamf');
  const buffer = await response.arrayBuffer();

  await player.load(buffer);
  player.play();
}
