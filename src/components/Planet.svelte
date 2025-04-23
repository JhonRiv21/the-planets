<script>
  let currentStep = $state(1);

  let {
    planet = "",
    overviewText = "",
    internalText = "",
    surfaceText = "",
    wikipedia = "",
  } = $props();
</script>

<article
  class="flex flex-col gap-10 lg:flex-row items-center justify-center w-full"
>
  <div class="w-full">
    <div hidden={currentStep !== 1}>
      <img src="src/assets/neptune/planet-neptune.svg" alt="" />
    </div>
    <div hidden={currentStep !== 2}>
      <img src="src/assets/neptune/planet-neptune-internal.svg" alt="" />
    </div>
    <div hidden={currentStep !== 3}>
      <div class="relative">
        <img
          class="relative"
          src="src/assets/neptune/planet-neptune.svg"
          alt=""
        />
        <img
          class="absolute -bottom-20 translate-x-[140px]"
          width="170"
          src="src/assets/neptune/geology-neptune.png"
          alt=""
        />
      </div>
    </div>
  </div>

  <div class="flex flex-col space-y-5 w-full lg:w-[60%]">
    <h1 class="text-7xl font-bold uppercase pb-4">{planet}</h1>
    <p hidden={currentStep !== 1} class="font-spartan text-base leading-7">
      {overviewText}
    </p>
    <p hidden={currentStep !== 2} class="font-spartan text-base leading-7">
      {internalText}
    </p>
    <p hidden={currentStep !== 3} class="font-spartan text-base leading-7">
      {surfaceText}
    </p>
    <p class="font-spartan py-4 font-bold text-white/40">
      Source: <a
        href={wikipedia}
        class="underline text-white/60 inline-flex items-center gap-2"
        target="_blank"
        >Wikipedia <svg width="1em" height="1em" viewBox="0 0 1536 1536"
          ><path
            fill="currentColor"
            d="M1280 800V320q0-26-19-45t-45-19H736q-42 0-59 39q-17 41 14 70l144 144l-534 534q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l534-534l144 144q18 19 45 19q12 0 25-5q39-17 39-59m256-512v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"
          ></path></svg
        ></a
      >
    </p>

    <div class="hidden lg:block w-full space-y-5">
      <button onclick={() => (currentStep = 1)} class="btn-tab"
        ><span class="btn-tab-number">01</span>
        <span class="btn-tab-text">OVERVIEW</span></button
      >
      <button onclick={() => (currentStep = 2)} class="btn-tab"
        ><span class="btn-tab-number">02</span>
        <span class="btn-tab-text">INTERNAL STRUCTURE</span></button
      >
      <button onclick={() => (currentStep = 3)} class="btn-tab"
        ><span class="btn-tab-number">03</span>
        <span class="btn-tab-text">SURFACE GEOLOGY</span></button
      >
    </div>
  </div>
</article>
