<script setup lang="ts">
import { computed, onMounted, ref, defineComponent } from "vue";
import ProgressBar from "progressbar.js";

import { useRadialBar } from "@/composables/radialbarSettings";

defineComponent({
  name: "RadialProgressbar",
});

interface Props {
  progress: number;
  width?: number;
  height?: number;
  animationDuration?: number;
  isFullCircle?: boolean;
  strokeWidth?: number;
  trailWidth?: number;
}

/*
Displays a semi-circle or full circle radial progress bar.
For more customization info got to "https://progressbarjs.readthedocs.io/en/latest/"

NOTE: width and height props should follow the aspect ratio of the kind of progress bar you want. All units in pixels (px)
  e.g. :- for "SemiCircle":
    width: 300
    height: 150

"progress" prop is the amount that the trail should cover. IMPORTANT: It is in percentage between 0 - 1.

"strokeWidth" prop
"trailWidth" prop
"isFullCircle" prop
*/
// NOTE: Consider adding stroke color transition props
// that is, the start color, end color, strokeColor, and trailColor,

const props = withDefaults(defineProps<Props>(), { strokeWidth: 8, trailWidth: 8, isFullCircle: true, width: 200, height: 200, animationDuration: 1500, });

const progressTextValue = computed<number>(() => props.progress * 100);

const finalTrailColor = ref<string>("#eee");
const { colorCode } = useRadialBar();
finalTrailColor.value = colorCode(props.progress);

function createProgressBar() {
  let ctx;
  const fontSize = props.isFullCircle ? `${0.015 * props.width}rem` : `${0.01 * props.width}rem`;
  const defaultOptions = {
    color: "#fcb03c",
    strokeWidth: props.strokeWidth,
    trailColor: '#f4f4f4',
    trailWidth: props.trailWidth,
    svgStyle: {
      display: 'inline-block',
      width: '100%',
    },
    text: {
      value: "0",
      className: 'progressbar__label',
      style: {
        color: finalTrailColor.value,
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: 0,
        margin: 0,
        fontSize: fontSize,
        transform: {
          prefix: true,
          value: 'translate(-50%, -50%)',
        },
      },
      autoStyleContainer: true,
      alignToBottom: true,
    },
    fill: null,
    duration: props.animationDuration,
    easing: "easeOut",
    from: { color: '#ff0000' },
    to: { color: finalTrailColor.value },
    step: function (state: any, circle: any, attachment: any) {
      circle.path.setAttribute('stroke', state.color);
    },
    warnings: true,
  };

  if (props.isFullCircle) {
    ctx = new ProgressBar.Circle("#progressbar-container", defaultOptions);
  } else {
    ctx = new ProgressBar.SemiCircle("#progressbar-container", defaultOptions);
  }

  ctx.animate(props.progress, {
    // duration: 1200,
  });
  const innerTextElement = `
    <div style="display: flex; flex-direction: column; align-items: center;">
      ${progressTextValue.value}
      <p style="font-size: 0.7rem; text-transform: uppercase; color: #fff; font-weight: 500; mix-blend-mode: difference;">completed</p>
    </div>
  `;
  ctx.text.innerHTML = innerTextElement;
  // ctx.animate(props.progress, {
  //   duration: 2000,
  // }, function() {
  //   console.log("Animation has finished");
  // });
}
onMounted(() => {
  createProgressBar();
});
</script>
<template>
  <div class="wrapper" :style="`width: ${width}px; height: ${height}px; margin: 0 auto;`">
    <div id="progressbar-container" class="">
    </div>
  </div>
</template>
<style scoped>
#progressbar-container {
  width: inherit;
  height: inherit;
}
</style>