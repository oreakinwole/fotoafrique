<script setup>
// const router = useRouter();
// const searchTerm = ref("sa");

// onMounted(() => {
//   fetchPages();
// });

const fetchPages = async () => {
  // try {
  //   const { data } = await useFetch(
  //     `https://modernyardz.com/search/suggest?q=sa&section_id=predictive-search`
  //   );

  //   console.log("DATA", data);
  // } catch (error) {
  //   console.log("ERROR", error);
  // }

  // const routessss = router.getRoutes();

  // console.log("DATA", routessss);
};

watch(searchTerm, () => {
  // fetchPages();
});
</script>

<template>
  <div class="pt-20 space-y-7">
    <p class="text-center text-3xl font-bold">Search</p>
    <div class="w-full text-center">
      <input
        class="loc-search-input border border-black w-2/4 h-14 pl-8 pr-16 rounded-3xl"
        type="text"
        placeholder="Search.."
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loc-search-input {
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat scroll 96% center;

  &::placeholder {
    // font-weight: bold;
    color: black;
  }
}
</style>
