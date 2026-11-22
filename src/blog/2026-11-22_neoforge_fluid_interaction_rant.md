---
layout: post.njk
title: NeoForged and the Idiot's Fluid Interaction Registry
date: 2026-11-22
tags: posts
---
You want to make a fuckin' fluid, right? You want like. wicked sweet fluid interactions for it with other shit. 
Yeah, NeoForged provides you with that, gives you the ability to register one in FluidInteractionRegistry.addInteraction. Sweet, right? NO!!!!!
YOU KNOW HOW FALLING LAVA TURNS WATER INTO STONE? WELL TOUGH FUCKING LUCK! YOU CANT DO THAT! CANT REGISTER THAT IN A FUCKING **_FLUID_** **INTERACTION** ***__REGISTRY__***!!!!!!1
TAKE A LOOK AT [NEOFORGE ISSUE 1880](https://github.com/neoforged/NeoForge/issues/1880) SEE IT? WELL YOU SHOULD. WORKS AS INTENDED? I'LL WORK YOU AS INTENDED!!!! "According to the javadoc of FluidInteractionRegistry, any interaction that causes changes below the fluid should be handled by spreadTo manually and not defined as an interaction." OKAY? AND WHAT IF I WANT LIKE, I DONT KNOW, LAVA OR WATER TO AFFECT MY FLUID. I HAVE TO MAKE A FUCKING MIXIN. A FUCKING MIXIN!!! FUCKKKK YOUUUUUUUUUUU
<div id="shit-container"></div>
<script>
document.addEventListener("DOMContentLoaded", (event) => {
    const divContainer = document.getElementById("shit-container");
    fillInitialView();
    window.addEventListener("scroll", () => {
        if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 100
        ) {
            addSentence();
        }
        });
        function addSentence() {
        const div = document.createElement("div");
        div.classList.add("dumbText");
        div.innerText = "This is correct and intended. According to the javadoc of FluidInteractionRegistry, any interaction that causes changes below the fluid should be handled by spreadTo manually and not defined as an interaction."
        divContainer.appendChild(div);
    }
    function fillInitialView() {
        while (document.body.offsetHeight < window.innerHeight * 1.05) {
            addSentence();
        }
    }
});
</script>