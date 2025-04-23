<script>
  let currentStep = $state(1);

  let {
    planet = "",
    overviewText = "",
    internalText = "",
    surfaceText = "",
    wikipedia = "",
    overviewImage = "",
    internalImage = "",
    surfaceImage = "",
    overviewAlt = "",
    internalAlt = "",
    surfaceAlt = "",
    color = "",
  } = $props();
</script>

<article
  class="flex flex-col gap-10 lg:flex-row items-center justify-center w-full"
>
  <div class="flex lg:hidden flex-row gap-3 justify-between w-full border-t border-b border-white/60 pt-4 px-2 sm:px-5 font-spartan font-bold text-[11px] uppercase">
    <button
      onclick={() => currentStep = 1}
      class="relative flex flex-col items-center flex-1 cursor-pointer uppercase"
    >
      <span class={currentStep === 1 ? "text-white" : "text-white/60"}>Overview</span>
      {#if currentStep === 1}
        <div class={`mt-2 h-1.5 w-18 bg-${color}`}></div>
      {/if}
    </button>

    <button
      onclick={() => currentStep = 2}
      class="relative flex flex-col items-center flex-1 cursor-pointer uppercase"
    >
      <span class={currentStep === 2 ? "text-white" : "text-white/60"}>Structure</span>
      {#if currentStep === 2}
        <div class={`mt-2 h-1.5 w-18 bg-${color}`}></div>
      {/if}
    </button>

    <button
      onclick={() => currentStep = 3}
      class="relative flex flex-col items-center flex-1 cursor-pointer uppercase"
    >
      <span class={currentStep === 3 ? "text-white" : "text-white/60"}>Surface</span>
      {#if currentStep === 3}
        <div class={`mt-2 h-1.5 w-18 bg-${color}`}></div>
      {/if}
    </button>
  </div>

  <div class="w-full">
    <div hidden={currentStep !== 1} class="flex justify-center">
      <img
        class=""
        src={overviewImage}
        decoding="async" 
        alt={overviewAlt} 
      />
    </div>
    <div hidden={currentStep !== 2} class="flex justify-center">
      <img
        class=""
        src={internalImage}
        decoding="async" 
        alt={internalAlt}
      />
    </div>
    <div hidden={currentStep !== 3} class="relative flex justify-center items-end">
      <div class="relative">
        <img
          class="relative w-auto h-auto object-contain"
          src={overviewImage}
          decoding="async"
          alt={overviewAlt}
        />
        <div class="absolute bottom-[-4rem] left-1/2 -translate-x-1/2">
          <img
            width="170"
            class="h-auto object-contain"
            src={surfaceImage}
            decoding="async"
            alt={surfaceAlt}
          />
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col pt-10 sm:pt-0 space-y-5 w-full lg:w-[60%]">
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
    <p class="font-spartan py-4 font-bold text-white/50">
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
    
    <!-- purge-safe: bg-green bg-blue bg-orange bg-red bg-purple bg-yellow bg-aqua bg-brick -->
    <div class="hidden lg:block w-full space-y-5">
      <button onclick={() => (currentStep = 1)} class={`btn-tab ${currentStep === 1 ? `bg-${color}` : ''}`}
        ><span class="btn-tab-number">01</span>
        <span class="btn-tab-text">OVERVIEW</span></button
      >
      <button onclick={() => (currentStep = 2)} class={`btn-tab ${currentStep === 2 ? `bg-${color}` : ''}`}
        ><span class="btn-tab-number">02</span>
        <span class="btn-tab-text">INTERNAL STRUCTURE</span></button
      >
      <button onclick={() => (currentStep = 3)} class={`btn-tab ${currentStep === 3 ? `bg-${color}` : ''}`}
        ><span class="btn-tab-number">03</span>
        <span class="btn-tab-text">SURFACE GEOLOGY</span></button
      >
    </div>
  </div>
</article>
