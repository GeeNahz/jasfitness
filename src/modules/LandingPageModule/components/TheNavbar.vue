<template>
  <header class="p-3 bg-dark">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <svg
            class="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlink:href="#bootstrap" />
          </svg>
        </a>

        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>
            <a href="#" class="text-gray-300 nav-link px-2 hover:text-[#fe902d]"
              >Home</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-300 nav-link px-2 hover:text-[#fe902d]"
              >Features</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-300 nav-link px-2 hover:text-[#fe902d]"
              >Pricing</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-300 nav-link px-2 hover:text-[#fe902d]"
              >FAQs</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-300 nav-link px-2 hover:text-[#fe902d]"
              >About</a
            >
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            class="form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div class="text-end">
          <button
            type="button"
            class="px-4 py-2 bg-[#fe902d] hover:bg-[#ffa14f] active:bg-[#e99348] rounded me-2 text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped></style>
