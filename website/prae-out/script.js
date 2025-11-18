/** Praetorius Works Console — starter v0
 * This is a seed file. The wizard-driven flow uses:
 *   - .prae/works.json  (your data)
 *   - praetorius generate  (to emit dist/script.js from data)
 */
(function(){
  const works = [
    {
      id: 1,
      slug: 'soundnoisemusic',
      title: 'WORK 1 — String Quartet No. 2 “SOUNDNOISEMUSIC”',
      oneliner: 'A through-composed/indeterminate quartet...',
      cues: [{ label: '@10:30', t: 630 }],
      audio: 'https://cdn.jsdelivr.net/gh/cbassuarez/website-blog/audio/SSS_soundnoisemusic_audio.mp3',
      pdf:   'https://cdn.jsdelivr.net/gh/cbassuarez/website-blog/STRING%20QUARTET%20NO.%202%20_soundnoisemusic_%20-%20Score-min.pdf'
    }
  ];
  window.PRAE = window.PRAE || {};
  window.PRAE.works = works;
  console.log('[prae] starter loaded: 1 work (edit script.js or use "praetorius add" + "praetorius generate").');
})();
