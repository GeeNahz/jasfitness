<template>
  <div
    class="hidden md:flex flex-col items-center relative w-[290px] h-full md:px-4 md:float-left md:border-r-2 border-gray-300 bg-white rounded-br-xl md:rounded-br-none"
  >
    <!-- logo -->
    <div
      class="logo flex items-center space-x-4 px-3 mt-8 md:mt-10 mb-10 md:mb-20 font-semibold"
    >
      <div class="navbar-brand">
        <img
          src="@/assets/icons/company-logo-medium.png"
          alt="logo"
          width="94"
          height="92"
        />
      </div>
    </div>
    <!-- outer side bar -->
    <div class="burger-menu">
      <ul class="space-y-4 md:space-y-10 text-base md:text-lg">
        <li>
          <router-link :to="{ name: 'DashboardHome' }" class="p-3 flex gap-3">
            <div class="icon">
              <svg
                width="27"
                height="30"
                viewBox="0 0 27 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="path"
                  d="M25.5 8.93485L16.5 1.13308C15.675 0.403403 14.6069 0 13.5 0C12.3932 0 11.3251 0.403403 10.5001 1.13308L1.50013 8.93485C1.02369 9.35619 0.643488 9.87307 0.384847 10.4511C0.126207 11.0291 -0.0049388 11.6549 0.00014219 12.2869V25.2503C0.00014219 26.4305 0.474245 27.5622 1.31815 28.3967C2.16206 29.2312 3.30664 29.7 4.50011 29.7H22.5C23.6934 29.7 24.838 29.2312 25.6819 28.3967C26.5259 27.5622 27 26.4305 27 25.2503V12.2721C27.0029 11.6426 26.8707 11.0196 26.6122 10.4443C26.3536 9.86901 25.9745 9.35453 25.5 8.93485ZM16.5 26.7335H10.5001V19.3174C10.5001 18.924 10.6581 18.5468 10.9394 18.2686C11.2207 17.9905 11.6022 17.8342 12.0001 17.8342H15C15.3979 17.8342 15.7794 17.9905 16.0607 18.2686C16.342 18.5468 16.5 18.924 16.5 19.3174V26.7335ZM24 25.2503C24 25.6437 23.8419 26.021 23.5606 26.2991C23.2793 26.5773 22.8978 26.7335 22.5 26.7335H19.5V19.3174C19.5 18.1373 19.0259 17.0055 18.182 16.171C17.3381 15.3365 16.1935 14.8677 15 14.8677H12.0001C10.8066 14.8677 9.66201 15.3365 8.8181 16.171C7.97419 17.0055 7.50009 18.1373 7.50009 19.3174V26.7335H4.50011C4.10229 26.7335 3.72076 26.5773 3.43946 26.2991C3.15816 26.021 3.00012 25.6437 3.00012 25.2503V12.2721C3.00039 12.0615 3.04601 11.8534 3.13395 11.6616C3.22188 11.4698 3.35012 11.2987 3.51012 11.1597L12.5101 3.37275C12.7838 3.13496 13.1357 3.00382 13.5 3.00382C13.8644 3.00382 14.2163 3.13496 14.49 3.37275L23.49 11.1597C23.65 11.2987 23.7782 11.4698 23.8661 11.6616C23.9541 11.8534 23.9997 12.0615 24 12.2721V25.2503Z"
                  fill="black"
                />
              </svg>
            </div>
            <p>Home</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'DashboardFitnessRecord' }"
            class="p-3 flex items-center gap-3"
          >
            <div class="icon">
              <svg
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="path"
                  d="M21.1999 10.6872H18.0479C17.9921 10.6795 17.9356 10.6795 17.8799 10.6872H17.7439C17.7021 10.7114 17.662 10.7386 17.6239 10.7685C17.5793 10.7983 17.5366 10.8309 17.4959 10.866C17.4692 10.8992 17.4451 10.9345 17.4239 10.9716C17.3872 11.0228 17.3551 11.0772 17.3279 11.1341L16.0479 14.7175L12.7119 5.53558C12.6558 5.37871 12.5536 5.24318 12.419 5.1474C12.2845 5.05162 12.1242 5.00024 11.9599 5.00024C11.7956 5.00024 11.6353 5.05162 11.5007 5.1474C11.3662 5.24318 11.2639 5.37871 11.2079 5.53558L9.35988 10.6872H6.79988C6.5877 10.6872 6.38422 10.7728 6.23419 10.9252C6.08416 11.0776 5.99988 11.2843 5.99988 11.4998C5.99988 11.7153 6.08416 11.9219 6.23419 12.0743C6.38422 12.2267 6.5877 12.3123 6.79988 12.3123H9.93588H10.1199H10.2399C10.2853 12.2901 10.3283 12.2628 10.3679 12.2311C10.4124 12.2012 10.4552 12.1686 10.4959 12.1336L10.5679 12.0279C10.606 11.9777 10.6382 11.9232 10.6639 11.8654L11.9599 8.18452L15.2879 17.464C15.3438 17.621 15.446 17.7567 15.5805 17.8527C15.7151 17.9487 15.8755 18.0002 16.0399 18.0002C16.2043 18.0002 16.3647 17.9487 16.4992 17.8527C16.6338 17.7567 16.736 17.621 16.7919 17.464L18.6319 12.3123H21.1999C21.4121 12.3123 21.6155 12.2267 21.7656 12.0743C21.9156 11.9219 21.9999 11.7153 21.9999 11.4998C21.9999 11.2843 21.9156 11.0776 21.7656 10.9252C21.6155 10.7728 21.4121 10.6872 21.1999 10.6872Z"
                  fill="black"
                />
                <path
                  id="path"
                  d="M24.5384 2.54248C23.107 1.10447 21.2096 0.226787 19.1888 0.0679796C17.1681 -0.0908282 15.1573 0.479708 13.5196 1.67653C11.8015 0.396051 9.66304 -0.184579 7.5348 0.0515635C5.40656 0.287706 3.44666 1.32308 2.04978 2.94919C0.652892 4.57529 -0.0772172 6.67134 0.00647544 8.81525C0.0901681 10.9591 0.981446 12.9916 2.50083 14.5035L10.8865 22.9194C11.5887 23.6119 12.5344 24 13.5196 24C14.5049 24 15.4506 23.6119 16.1528 22.9194L24.5384 14.5035C26.1151 12.914 27 10.764 27 8.52297C27 6.28194 26.1151 4.13196 24.5384 2.54248ZM22.6344 12.6362L14.2488 21.0387C14.1534 21.1352 14.0398 21.2119 13.9147 21.2642C13.7895 21.3165 13.6552 21.3434 13.5196 21.3434C13.384 21.3434 13.2498 21.3165 13.1246 21.2642C12.9994 21.2119 12.8859 21.1352 12.7904 21.0387L4.40481 12.5957C3.34582 11.511 2.75282 10.0539 2.75282 8.5365C2.75282 7.0191 3.34582 5.56202 4.40481 4.47734C5.48395 3.40977 6.93937 2.81115 8.45584 2.81115C9.97231 2.81115 11.4277 3.40977 12.5069 4.47734C12.6324 4.60416 12.7818 4.70482 12.9463 4.77352C13.1109 4.84221 13.2874 4.87757 13.4656 4.87757C13.6439 4.87757 13.8204 4.84221 13.9849 4.77352C14.1495 4.70482 14.2988 4.60416 14.4244 4.47734C15.5035 3.40977 16.9589 2.81115 18.4754 2.81115C19.9919 2.81115 21.4473 3.40977 22.5264 4.47734C23.6 5.54781 24.2124 6.99698 24.2326 8.51442C24.2528 10.0319 23.6791 11.4969 22.6344 12.5957V12.6362Z"
                  fill="black"
                />
              </svg>
            </div>
            <p>Fiteness Record</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'DashboardSubscription' }"
            class="p-3 flex items-center gap-3"
          >
            <div class="icon">
              <svg
                width="28"
                height="21"
                viewBox="0 0 28 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="path"
                  d="M7 13.4187H11.2C11.5713 13.4187 11.9274 13.2773 12.1899 13.0256C12.4525 12.774 12.6 12.4327 12.6 12.0768C12.6 11.7209 12.4525 11.3796 12.1899 11.128C11.9274 10.8763 11.5713 10.7349 11.2 10.7349H7C6.6287 10.7349 6.2726 10.8763 6.01005 11.128C5.7475 11.3796 5.6 11.7209 5.6 12.0768C5.6 12.4327 5.7475 12.774 6.01005 13.0256C6.2726 13.2773 6.6287 13.4187 7 13.4187ZM23.8 0H4.2C3.08609 0 2.0178 0.424125 1.23015 1.17907C0.442499 1.93402 0 2.95794 0 4.0256V16.1024C0 17.1701 0.442499 18.194 1.23015 18.9489C2.0178 19.7039 3.08609 20.128 4.2 20.128H23.8C24.9139 20.128 25.9822 19.7039 26.7698 18.9489C27.5575 18.194 28 17.1701 28 16.1024V4.0256C28 2.95794 27.5575 1.93402 26.7698 1.17907C25.9822 0.424125 24.9139 0 23.8 0ZM25.2 16.1024C25.2 16.4583 25.0525 16.7996 24.79 17.0512C24.5274 17.3029 24.1713 17.4443 23.8 17.4443H4.2C3.8287 17.4443 3.4726 17.3029 3.21005 17.0512C2.9475 16.7996 2.8 16.4583 2.8 16.1024V8.0512H25.2V16.1024ZM25.2 5.36747H2.8V4.0256C2.8 3.66971 2.9475 3.32841 3.21005 3.07676C3.4726 2.82511 3.8287 2.68373 4.2 2.68373H23.8C24.1713 2.68373 24.5274 2.82511 24.79 3.07676C25.0525 3.32841 25.2 3.66971 25.2 4.0256V5.36747Z"
                />
              </svg>
            </div>
            <p>Subscription</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- logout button -->
    <router-link
      :to="{ name: 'LoginPage' }"
      class="md:absolute bottom-48 left-8 flex items-center ml-4 md:ml-0 py-8 md:py-0 space-x-4 text-xl font-bold"
      ><div class="icon">
        <svg
          width="21"
          height="28"
          viewBox="0 0 28 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path"
            d="M0 17.5C0 17.0359 0.184374 16.5908 0.512562 16.2626C0.84075 15.9344 1.28587 15.75 1.75 15.75H15.0325L11.0075 11.7425C10.8443 11.5793 10.7149 11.3856 10.6266 11.1724C10.5383 10.9592 10.4928 10.7308 10.4928 10.5C10.4928 10.2692 10.5383 10.0408 10.6266 9.82756C10.7149 9.61438 10.8443 9.42067 11.0075 9.2575C11.1707 9.09433 11.3644 8.9649 11.5776 8.8766C11.7908 8.78829 12.0192 8.74284 12.25 8.74284C12.4808 8.74284 12.7092 8.78829 12.9224 8.8766C13.1356 8.9649 13.3293 9.09433 13.4925 9.2575L20.4925 16.2575C20.6518 16.4239 20.7767 16.6202 20.86 16.835C21.035 17.2611 21.035 17.7389 20.86 18.165C20.7767 18.3798 20.6518 18.5761 20.4925 18.7425L13.4925 25.7425C13.3298 25.9065 13.1363 26.0367 12.923 26.1256C12.7098 26.2144 12.481 26.2601 12.25 26.2601C12.019 26.2601 11.7902 26.2144 11.577 26.1256C11.3637 26.0367 11.1702 25.9065 11.0075 25.7425C10.8435 25.5798 10.7133 25.3863 10.6244 25.173C10.5356 24.9598 10.4899 24.731 10.4899 24.5C10.4899 24.269 10.5356 24.0402 10.6244 23.827C10.7133 23.6137 10.8435 23.4202 11.0075 23.2575L15.0325 19.25H1.75C1.28587 19.25 0.84075 19.0656 0.512562 18.7374C0.184374 18.4092 0 17.9641 0 17.5ZM5.25 0H22.75C24.1424 0 25.4777 0.553124 26.4623 1.53769C27.4469 2.52226 28 3.85761 28 5.25V29.75C28 31.1424 27.4469 32.4777 26.4623 33.4623C25.4777 34.4469 24.1424 35 22.75 35H5.25C3.85761 35 2.52225 34.4469 1.53769 33.4623C0.553123 32.4777 0 31.1424 0 29.75V24.5C0 24.0359 0.184374 23.5908 0.512562 23.2626C0.84075 22.9344 1.28587 22.75 1.75 22.75C2.21413 22.75 2.65925 22.9344 2.98744 23.2626C3.31563 23.5908 3.5 24.0359 3.5 24.5V29.75C3.5 30.2141 3.68437 30.6593 4.01256 30.9874C4.34075 31.3156 4.78587 31.5 5.25 31.5H22.75C23.2141 31.5 23.6592 31.3156 23.9874 30.9874C24.3156 30.6593 24.5 30.2141 24.5 29.75V5.25C24.5 4.78587 24.3156 4.34075 23.9874 4.01256C23.6592 3.68437 23.2141 3.5 22.75 3.5H5.25C4.78587 3.5 4.34075 3.68437 4.01256 4.01256C3.68437 4.34075 3.5 4.78587 3.5 5.25V10.5C3.5 10.9641 3.31563 11.4092 2.98744 11.7374C2.65925 12.0656 2.21413 12.25 1.75 12.25C1.28587 12.25 0.84075 12.0656 0.512562 11.7374C0.184374 11.4092 0 10.9641 0 10.5V5.25C0 3.85761 0.553123 2.52226 1.53769 1.53769C2.52225 0.553124 3.85761 0 5.25 0Z"
            fill="black"
          />
        </svg>
      </div>
      <p>Logout</p></router-link
    >
  </div>

  <!-- nav bar on small screen -->
  <div
    class="z-30 flex justify-between items-center md:hidden w-full p-4 bg-white fixed shadow"
  >
    <div class="logo flex items-center space-x-4 font-semibold">
      <div class="navbar-brand" href="#">
        <img
          src="@/assets/icons/company-logo-small.png"
          alt="logo"
          width="53"
          height="52"
        />
      </div>
    </div>
    <svg
      @click="toggleSideBar"
      class="h-full"
      width="37"
      height="40"
      viewBox="0 0 37 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 32L32 32"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="5"
        cy="31.6667"
        rx="4"
        ry="4"
        transform="rotate(90 5 31.6667)"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M2 42L23 42"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="27.6667"
        cy="42.3334"
        rx="4"
        ry="4"
        transform="rotate(90 27.6667 42.3334)"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M9 11L32 11"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="5"
        cy="10.6667"
        rx="4"
        ry="4"
        transform="rotate(90 5 10.6667)"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M2 21L23 21"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="27.6667"
        cy="21.3334"
        rx="4"
        ry="4"
        transform="rotate(90 27.6667 21.3334)"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </div>
  <!-- hamburger menu on small screen -->
  <div
    @click.self="toggleSideBar"
    v-if="showSideBarNav"
    class="md:hidden fixed md:fixed top-0 left-0 h-full w-full bg-gray-500 bg-opacity-50 z-50"
  >
    <div
      class="relative w-3/5 h-max md:px-4 pt-4 pb-24 md:float-left md:border-r-2 border-gray-300 bg-white rounded-br-xl md:rounded-br-none"
    >
      <div
        class="logo flex items-center w-full justify-center space-x-4 px-3 mt-8 md:mt-10 mb-10 md:mb-20 font-semibold"
      >
        <div class="navbar-brand">
          <img
            src="@/assets/icons/company-logo-small.png"
            alt="logo"
            width="81"
            height="79"
          />
        </div>
      </div>
      <!-- outer side bar -->
      <div class="burger-menu">
        <ul class="space-y-4 pl-2 md:space-y-10 text-lg">
          <li>
            <router-link
              :to="{ name: 'DashboardHome' }"
              class="p-3 flex items-center gap-3"
            >
              <div class="icon">
                <i
                  ><svg
                    width="27"
                    height="30"
                    viewBox="0 0 27 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="path"
                      d="M25.5 8.93485L16.5 1.13308C15.675 0.403403 14.6069 0 13.5 0C12.3932 0 11.3251 0.403403 10.5001 1.13308L1.50013 8.93485C1.02369 9.35619 0.643488 9.87307 0.384847 10.4511C0.126207 11.0291 -0.0049388 11.6549 0.00014219 12.2869V25.2503C0.00014219 26.4305 0.474245 27.5622 1.31815 28.3967C2.16206 29.2312 3.30664 29.7 4.50011 29.7H22.5C23.6934 29.7 24.838 29.2312 25.6819 28.3967C26.5259 27.5622 27 26.4305 27 25.2503V12.2721C27.0029 11.6426 26.8707 11.0196 26.6122 10.4443C26.3536 9.86901 25.9745 9.35453 25.5 8.93485ZM16.5 26.7335H10.5001V19.3174C10.5001 18.924 10.6581 18.5468 10.9394 18.2686C11.2207 17.9905 11.6022 17.8342 12.0001 17.8342H15C15.3979 17.8342 15.7794 17.9905 16.0607 18.2686C16.342 18.5468 16.5 18.924 16.5 19.3174V26.7335ZM24 25.2503C24 25.6437 23.8419 26.021 23.5606 26.2991C23.2793 26.5773 22.8978 26.7335 22.5 26.7335H19.5V19.3174C19.5 18.1373 19.0259 17.0055 18.182 16.171C17.3381 15.3365 16.1935 14.8677 15 14.8677H12.0001C10.8066 14.8677 9.66201 15.3365 8.8181 16.171C7.97419 17.0055 7.50009 18.1373 7.50009 19.3174V26.7335H4.50011C4.10229 26.7335 3.72076 26.5773 3.43946 26.2991C3.15816 26.021 3.00012 25.6437 3.00012 25.2503V12.2721C3.00039 12.0615 3.04601 11.8534 3.13395 11.6616C3.22188 11.4698 3.35012 11.2987 3.51012 11.1597L12.5101 3.37275C12.7838 3.13496 13.1357 3.00382 13.5 3.00382C13.8644 3.00382 14.2163 3.13496 14.49 3.37275L23.49 11.1597C23.65 11.2987 23.7782 11.4698 23.8661 11.6616C23.9541 11.8534 23.9997 12.0615 24 12.2721V25.2503Z"
                      fill="black"
                    /></svg
                ></i>
              </div>
              <p>Home</p>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'DashboardFitnessRecord' }"
              class="p-3 flex items-center gap-3"
            >
              <div class="icon">
                <i
                  ><svg
                    width="27"
                    height="24"
                    viewBox="0 0 27 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="path"
                      d="M21.1999 10.6872H18.0479C17.9921 10.6795 17.9356 10.6795 17.8799 10.6872H17.7439C17.7021 10.7114 17.662 10.7386 17.6239 10.7685C17.5793 10.7983 17.5366 10.8309 17.4959 10.866C17.4692 10.8992 17.4451 10.9345 17.4239 10.9716C17.3872 11.0228 17.3551 11.0772 17.3279 11.1341L16.0479 14.7175L12.7119 5.53558C12.6558 5.37871 12.5536 5.24318 12.419 5.1474C12.2845 5.05162 12.1242 5.00024 11.9599 5.00024C11.7956 5.00024 11.6353 5.05162 11.5007 5.1474C11.3662 5.24318 11.2639 5.37871 11.2079 5.53558L9.35988 10.6872H6.79988C6.5877 10.6872 6.38422 10.7728 6.23419 10.9252C6.08416 11.0776 5.99988 11.2843 5.99988 11.4998C5.99988 11.7153 6.08416 11.9219 6.23419 12.0743C6.38422 12.2267 6.5877 12.3123 6.79988 12.3123H9.93588H10.1199H10.2399C10.2853 12.2901 10.3283 12.2628 10.3679 12.2311C10.4124 12.2012 10.4552 12.1686 10.4959 12.1336L10.5679 12.0279C10.606 11.9777 10.6382 11.9232 10.6639 11.8654L11.9599 8.18452L15.2879 17.464C15.3438 17.621 15.446 17.7567 15.5805 17.8527C15.7151 17.9487 15.8755 18.0002 16.0399 18.0002C16.2043 18.0002 16.3647 17.9487 16.4992 17.8527C16.6338 17.7567 16.736 17.621 16.7919 17.464L18.6319 12.3123H21.1999C21.4121 12.3123 21.6155 12.2267 21.7656 12.0743C21.9156 11.9219 21.9999 11.7153 21.9999 11.4998C21.9999 11.2843 21.9156 11.0776 21.7656 10.9252C21.6155 10.7728 21.4121 10.6872 21.1999 10.6872Z"
                      fill="black"
                    />
                    <path
                      id="path"
                      d="M24.5384 2.54248C23.107 1.10447 21.2096 0.226787 19.1888 0.0679796C17.1681 -0.0908282 15.1573 0.479708 13.5196 1.67653C11.8015 0.396051 9.66304 -0.184579 7.5348 0.0515635C5.40656 0.287706 3.44666 1.32308 2.04978 2.94919C0.652892 4.57529 -0.0772172 6.67134 0.00647544 8.81525C0.0901681 10.9591 0.981446 12.9916 2.50083 14.5035L10.8865 22.9194C11.5887 23.6119 12.5344 24 13.5196 24C14.5049 24 15.4506 23.6119 16.1528 22.9194L24.5384 14.5035C26.1151 12.914 27 10.764 27 8.52297C27 6.28194 26.1151 4.13196 24.5384 2.54248ZM22.6344 12.6362L14.2488 21.0387C14.1534 21.1352 14.0398 21.2119 13.9147 21.2642C13.7895 21.3165 13.6552 21.3434 13.5196 21.3434C13.384 21.3434 13.2498 21.3165 13.1246 21.2642C12.9994 21.2119 12.8859 21.1352 12.7904 21.0387L4.40481 12.5957C3.34582 11.511 2.75282 10.0539 2.75282 8.5365C2.75282 7.0191 3.34582 5.56202 4.40481 4.47734C5.48395 3.40977 6.93937 2.81115 8.45584 2.81115C9.97231 2.81115 11.4277 3.40977 12.5069 4.47734C12.6324 4.60416 12.7818 4.70482 12.9463 4.77352C13.1109 4.84221 13.2874 4.87757 13.4656 4.87757C13.6439 4.87757 13.8204 4.84221 13.9849 4.77352C14.1495 4.70482 14.2988 4.60416 14.4244 4.47734C15.5035 3.40977 16.9589 2.81115 18.4754 2.81115C19.9919 2.81115 21.4473 3.40977 22.5264 4.47734C23.6 5.54781 24.2124 6.99698 24.2326 8.51442C24.2528 10.0319 23.6791 11.4969 22.6344 12.5957V12.6362Z"
                      fill="black"
                    />
                  </svg>
                </i>
              </div>
              <p>Fiteness Record</p>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'DashboardSubscription' }"
              class="p-3 flex items-center gap-3"
            >
              <div class="icon">
                <svg
                  width="28"
                  height="21"
                  viewBox="0 0 28 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="path"
                    d="M7 13.4187H11.2C11.5713 13.4187 11.9274 13.2773 12.1899 13.0256C12.4525 12.774 12.6 12.4327 12.6 12.0768C12.6 11.7209 12.4525 11.3796 12.1899 11.128C11.9274 10.8763 11.5713 10.7349 11.2 10.7349H7C6.6287 10.7349 6.2726 10.8763 6.01005 11.128C5.7475 11.3796 5.6 11.7209 5.6 12.0768C5.6 12.4327 5.7475 12.774 6.01005 13.0256C6.2726 13.2773 6.6287 13.4187 7 13.4187ZM23.8 0H4.2C3.08609 0 2.0178 0.424125 1.23015 1.17907C0.442499 1.93402 0 2.95794 0 4.0256V16.1024C0 17.1701 0.442499 18.194 1.23015 18.9489C2.0178 19.7039 3.08609 20.128 4.2 20.128H23.8C24.9139 20.128 25.9822 19.7039 26.7698 18.9489C27.5575 18.194 28 17.1701 28 16.1024V4.0256C28 2.95794 27.5575 1.93402 26.7698 1.17907C25.9822 0.424125 24.9139 0 23.8 0ZM25.2 16.1024C25.2 16.4583 25.0525 16.7996 24.79 17.0512C24.5274 17.3029 24.1713 17.4443 23.8 17.4443H4.2C3.8287 17.4443 3.4726 17.3029 3.21005 17.0512C2.9475 16.7996 2.8 16.4583 2.8 16.1024V8.0512H25.2V16.1024ZM25.2 5.36747H2.8V4.0256C2.8 3.66971 2.9475 3.32841 3.21005 3.07676C3.4726 2.82511 3.8287 2.68373 4.2 2.68373H23.8C24.1713 2.68373 24.5274 2.82511 24.79 3.07676C25.0525 3.32841 25.2 3.66971 25.2 4.0256V5.36747Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p>Subscription</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- logout button -->
      <router-link
        :to="{ name: 'LoginPage' }"
        class="md:absolute bottom-10 flex items-center text-lg font-semibold ml-4 md:ml-0 py-8 md:py-0 space-x-4"
        ><div class="icon">
          <svg
            width="28"
            height="35"
            viewBox="0 0 28 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path"
              d="M0 17.5C0 17.0359 0.184374 16.5908 0.512562 16.2626C0.84075 15.9344 1.28587 15.75 1.75 15.75H15.0325L11.0075 11.7425C10.8443 11.5793 10.7149 11.3856 10.6266 11.1724C10.5383 10.9592 10.4928 10.7308 10.4928 10.5C10.4928 10.2692 10.5383 10.0408 10.6266 9.82756C10.7149 9.61438 10.8443 9.42067 11.0075 9.2575C11.1707 9.09433 11.3644 8.9649 11.5776 8.8766C11.7908 8.78829 12.0192 8.74284 12.25 8.74284C12.4808 8.74284 12.7092 8.78829 12.9224 8.8766C13.1356 8.9649 13.3293 9.09433 13.4925 9.2575L20.4925 16.2575C20.6518 16.4239 20.7767 16.6202 20.86 16.835C21.035 17.2611 21.035 17.7389 20.86 18.165C20.7767 18.3798 20.6518 18.5761 20.4925 18.7425L13.4925 25.7425C13.3298 25.9065 13.1363 26.0367 12.923 26.1256C12.7098 26.2144 12.481 26.2601 12.25 26.2601C12.019 26.2601 11.7902 26.2144 11.577 26.1256C11.3637 26.0367 11.1702 25.9065 11.0075 25.7425C10.8435 25.5798 10.7133 25.3863 10.6244 25.173C10.5356 24.9598 10.4899 24.731 10.4899 24.5C10.4899 24.269 10.5356 24.0402 10.6244 23.827C10.7133 23.6137 10.8435 23.4202 11.0075 23.2575L15.0325 19.25H1.75C1.28587 19.25 0.84075 19.0656 0.512562 18.7374C0.184374 18.4092 0 17.9641 0 17.5ZM5.25 0H22.75C24.1424 0 25.4777 0.553124 26.4623 1.53769C27.4469 2.52226 28 3.85761 28 5.25V29.75C28 31.1424 27.4469 32.4777 26.4623 33.4623C25.4777 34.4469 24.1424 35 22.75 35H5.25C3.85761 35 2.52225 34.4469 1.53769 33.4623C0.553123 32.4777 0 31.1424 0 29.75V24.5C0 24.0359 0.184374 23.5908 0.512562 23.2626C0.84075 22.9344 1.28587 22.75 1.75 22.75C2.21413 22.75 2.65925 22.9344 2.98744 23.2626C3.31563 23.5908 3.5 24.0359 3.5 24.5V29.75C3.5 30.2141 3.68437 30.6593 4.01256 30.9874C4.34075 31.3156 4.78587 31.5 5.25 31.5H22.75C23.2141 31.5 23.6592 31.3156 23.9874 30.9874C24.3156 30.6593 24.5 30.2141 24.5 29.75V5.25C24.5 4.78587 24.3156 4.34075 23.9874 4.01256C23.6592 3.68437 23.2141 3.5 22.75 3.5H5.25C4.78587 3.5 4.34075 3.68437 4.01256 4.01256C3.68437 4.34075 3.5 4.78587 3.5 5.25V10.5C3.5 10.9641 3.31563 11.4092 2.98744 11.7374C2.65925 12.0656 2.21413 12.25 1.75 12.25C1.28587 12.25 0.84075 12.0656 0.512562 11.7374C0.184374 11.4092 0 10.9641 0 10.5V5.25C0 3.85761 0.553123 2.52226 1.53769 1.53769C2.52225 0.553124 3.85761 0 5.25 0Z"
              fill="black"
            />
          </svg>
        </div>
        <p>Logout</p></router-link
      >
      <button
        @click="toggleSideBar"
        class="flex justify-center items-center mx-auto h-7 w-7 border-2 border-zinc-900 rounded-full font-bold hover:scale-105 hover:bg-slate-100 hover:cursor-pointer"
      >
        X
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showSideBarNav = ref(false)

const toggleSideBar = () => {
  showSideBarNav.value = !showSideBarNav.value
  document.querySelector('#app').classList.toggle('overflow-y-hidden')
}
</script>

<style scoped>
a {
  color: #2c3e50;
  transition: color 0.2s ease-in-out, border 0.1s ease-in-out;
}
a:hover {
  color: #ca9b42;
  border-left: #ca9b42;
}
a #path {
  fill: #2c3e50;
  transition: fill 0.2s ease-in-out;
}
a:hover #path {
  fill: #ca9b42;
}

a.router-link-exact-active {
  /* color: #ca9b42; */
  border-left: solid;
}
</style>