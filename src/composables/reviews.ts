import type { Review } from "@/types";

export function useReviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Mirak Emma",
      reviewUrl: "https://g.co/kgs/C7zjTA",
      imageUrl: "https://lh3.googleusercontent.com/a-/AD_cMMTZ8wc0nckOJJRdoazA-JKZ5xGOkD_qKAodwTWeENPADn0=w60-h60-p-rp-mo-br100",
      imageAlt: "M",
      review: "Jas fitness center, consistent with impact over time, hospitable, reliable, affordable, with a conducive and serene environment.. a home for gymnastics. I love it.. I can now push above limits!!!",
      stars: 5,
    },
    {
      id: 2,
      name: "Brenda Forsbury",
      reviewUrl: "https://g.co/kgs/xiAvG9",
      imageUrl: "https://lh3.googleusercontent.com/a-/AD_cMMSm_JJOqCwPzj1KT9wsEUnseDSn3EznbLB1NW7HlMGj5Uw=w60-h60-p-rp-mo-br100",
      imageAlt: "B",
      review: "Well equipped and Conducive work out environment, cheerful management/clients relationship, friendly and attentive coaches who are kin into making your routine stressfully easy, while still getting your desired body goals. Jas Fitness is the place to be for everything fitness!",
      stars: 5,
    },
    {
      id: 3,
      name: "Enoabasi Essien",
      reviewUrl: "https://g.co/kgs/d5pVRR",
      imageUrl: "https://lh3.googleusercontent.com/a-/AD_cMMSJaUHtBao_itl_6J8tAw23aFrQ8V-y8F82vXcmE1k2jso=w60-h60-p-rp-mo-ba3-br100",
      imageAlt: "E",
      review: "A well stable fitness community at the heart of Lugbe. Fully equipped and stacked with state of the art equipment to ensure client meet their goals. A worth checking out I must say. Been here for 2 months and have surely met what I have been looking for.",
      stars: 5,
    },
    {
      id: 4,
      name: "Nneka Chukwurah",
      reviewUrl: "https://g.co/kgs/AsAAj6",
      imageUrl: "",
      imageAlt: "N",
      review: "Awesome. Good and friendly environment/instructors. Nice atmosphere. Good gym workout equipment.",
      stars: 5,
    },
    {
      id: 5,
      name: 'Anna Orefi',
      reviewUrl: 'https://g.co/kgs/HGNLV5',
      imageUrl: '',
      imageAlt: 'A',
      review:
        'Once you stop by Jas Gym. You shall get hooked Excellent Customer Service.',
      stars: 5
    },
    {
      id: 6,
      name: 'Afolalu Oluyemisi',
      reviewUrl: 'https://g.co/kgs/kFqo4m',
      imageUrl: '',
      imageAlt: 'A',
      review:
        'Friendly environment and instructors. Most importantly, I really appreciate the checking up on clients.',
      stars: 5
    },
    {
      id: 7,
      name: 'Ijeoma Jennifer',
      reviewUrl: 'https://g.co/kgs/DK1KnL',
      imageUrl:
        'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/IjeomaJennifer_2tYEBbcHS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852584',
      imageAlt: 'I',
      review:
        'Spending my post partum moment @jasfitness is one of the best decision I have made in life. I love what getting 💯💯💯💯',
      stars: 5
    },
  ];


  return reviews;
}