<template>
  <div class="container mb-32 px-6">
    <!-- title -->
    <div class="page-title pb-14 border-b-2 mb-14">
      <h1 class="text-5xl font-bold mb-4">Privacy Policy</h1>
      <p class="font-semibold">
        Last Updated: 
        <span class="font-normal">July, 2023</span>
      </p>
    </div>
    
    <!-- body -->
    <div class="body">
      <section class="sub-section">
        <div class="sub-section__content">
          <div class="sub-section__content__body">
            <p>
              In consideration of being allowed to participate in the activities and programs offered by Jas Fitness Center, I, the undersigned, hereby acknowledge and agree to the following terms and conditions:
            </p>
          </div>
        </div>

        <div class="sub-section__content">
          <h4 class="sub-section__content__sub-title">Assumption of Risk</h4>
          <div class="sub-section__content__body">
            <p>
              I am aware that participation in physical fitness activities, including the use of gym equipment, personal training, group classes, and other related activities, involves inherent risks of injury, illness, or death. I voluntarily assume all risks associated with such participation, including but not limited to muscle strains, sprains, fractures, heart attacks, or any other injury or illness that may result from physical exertion.
            </p>
          </div>
        </div>

        <div class="sub-section__content">
          <h4 class="sub-section__content__sub-title">Health and Medical conditions</h4>
          <div class="sub-section__content__body">
            <p>
              I certify that I am physically and medically capable of participating in the activities offered by Jas Fitness Center. I have consulted with a medical professional regarding any pre-existing medical conditions, injuries, or health concerns that may affect my ability to engage in physical activities. I agree to inform the gym staff of any changes to my health or medical condition that may arise during my membership.
            </p>
          </div>
        </div>

        <div class="sub-section__content">
          <h4 class="sub-section__content__sub-title">Release of Liability</h4>
          <div class="sub-section__content__body">
            <p>
              I, on behalf of myself, my heirs, executors, administrators, and assigns, hereby release, discharge, and hold harmless Jas Fitness Center, its owners, employees, trainers, instructors, and representatives from any and all claims, demands, actions, or causes of action arising out of or in connection with my participation in the gym activities, including any negligence or fault on the part of the gym or its employees. 
            </p>
          </div>
        </div>

        <div class="sub-section__content">
          <h4 class="sub-section__content__sub-title">Payment for Instructors</h4>
          <div class="sub-section__content__body">
            <p>
              I understand that certain gym activities, such as personal training sessions or specialized classes, may require additional fees or payments directly to the instructors. I acknowledge that the gym will not be responsible for any financial transactions or disputes related to these payments. I understand that failure to pay the designated fees to the instructors may result in the denial of services or participation in those activities, and the gym will not be liable for any damages or losses incurred as a result of non-payment.
            </p>
          </div>
        </div>

        <div class="sub-section__content">
          <h4 class="sub-section__content__sub-title">Responsibility for Damaged Equipment</h4>
          <div class="sub-section__content__body">
            <p>
              I acknowledge that it is my responsibility to use the gym equipment and facilities with care and in accordance with the provided instructions. In the event that I cause any damage to the gym equipment, including but not limited to machines, weights, mats, or other gym property, I agree to compensate Jas Fitness Center for the full cost of repair, replacement, or restoration of the damaged equipment. I understand that any damage caused by willful misconduct, negligence, or failure to follow gym rules and instructions may result in the termination of my membership and may also subject me to further legal action, if necessary.
            </p>
          </div>
        </div>

        <div class="sub-section__content">
          <h4 class="sub-section__content__sub-title">Personal Property</h4>
          <div class="sub-section__content__body">
            <p>
              I acknowledge that any personal belongings brought into the gym facility, including but not limited to clothing, equipment, or valuables, are solely my responsibility. I release Jas Fitness Center from any liability for the loss, theft, damage, or disappearance of personal property.
            </p>
          </div>
        </div>

        <div class="sub-section__content">
          <h4 class="sub-section__content__sub-title">Compliance with Rules and Instructions</h4>
          <div class="sub-section__content__body">
            <p>
              I agree to abide by all gym rules, regulations, and instructions provided by Jas Fitness Center staff. I understand that failure to comply with these rules may result in the termination of my membership or participation in gym activities.
            </p>
          </div>
        </div>

        <div class="sub-section__content">
          <h4 class="sub-section__content__sub-title">Photographic Release</h4>
          <div class="sub-section__content__body">
            <p class="mb-2">
              I grant Jas Fitness Center the right to take and use photographs or videos of me for promotional purposes, including but not limited to websites, social media, and marketing materials. I waive any rights of compensation or ownership in connection with the use of such photographs or videos.
            </p>
            <p>
              I have carefully read and understood this Liability Waiver and Release Agreement, and I voluntarily sign it as my own free act and deed.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  @apply w-full lg:w-[900px] mx-auto;

  & .sub-section {
    @apply mb-16;
    
    & .sub-section__title {
      @apply font-bold text-xl uppercase mb-4 border-b pb-2;
    }

    & .sub-section__content {
      @apply mb-5;
      .sub-section__content__sub-title {
        @apply font-medium text-base mb-1;
      }

      .sub-section__content__body {
        @apply font-light;
      }
    }
  }
}

.ref {
  @apply text-amber-500 font-medium hover:underline;
}
</style>