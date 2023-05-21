<template>
  <div
    class="rounded-lg shadow md:py-8 py-5 w-[75px] cursor-pointer md:w-[200px] font-semibold bg-white "
    :class="[selectedClasses]"
    @click="handleClick">
    <div class="text-center text-xs md:text-base">
      {{ props.day.toUpperCase() }}
    </div>
    <div class="text-center text-4xl md:text-7xl font-bold md:my-4 my-2">
      {{ props.date }}
    </div>
    <div class="text-center md:text-4xl">{{ props.month.toUpperCase() }}</div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "@nuxtjs/composition-api";
 
  interface Props {
    date: string;
    month: string;
    day: string;
    active?: boolean;
  }

  const props = defineProps<Props>();
  const selectedClasses = computed(() => {
    return props.active ? "border-2 border-primary" : "";
  });
  const emit = defineEmits(["click"]);

  const handleClick = () => {
    emit("click");
  };
</script>
