import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Heart, ThumbsUp, Share2 } from "lucide-react";

import "./Testimonials.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const testimonials = [
  {
    name: "Rashi Garg",
    reviews: "2 reviews",
    time: "3 months ago",
    text: "I visited this clinic for dental treatment and had a very comfortable experience. The doctor was very knowledgeable and took time to explain the problem and treatment options. The clinic maintains excellent hygiene and uses modern equipment. The staff was cooperative and the overall environment was very welcoming. I would highly recommend this clinic.",
  },
  {
    name: "Chinu B Aneja",
    reviews: "2 reviews",
    time: "5 months ago",
    text: "I had a good experience at Tooth Care Studio. Dr. Nisha is very professional, listens carefully and provides the best treatment. Prices are reasonable and genuine. Highly appreciated and recommended.",
  },
  {
    name: "Kakde Sunil",
    reviews: "3 reviews",
    time: "Edited 2 months ago",
    text: "Dr. Mam is very knowledgeable and treatment is so satisfying. I feel so comfortable and happy after treatment. Staff was very cooperative. I suggest Tooth Care Studio Clinic for treatment. Highly recommended.",
  },
  {
    name: "Monideep Sangwan",
    reviews: "1 review",
    time: "2 months ago",
    text: "I really appreciate your professionalism during my tooth extraction. The procedure was smooth and your instructions helped me recover well. Thank you for your care.",
  },
  {
    name: "Harsh Jain",
    reviews: "11 reviews",
    time: "8 months ago",
    text: "Tooth Care Studio Dental Clinic and Pathology Lab is excellent. The treatment I received was top-notch. All the equipment is sterilized, which made me feel safe. The customer service is great; everyone is friendly and helpful.",
  },
  {
    name: "Rohit Singh",
    reviews: "2 reviews",
    time: "9 months ago",
    text: "Dr. Nisha has fantastically changed the view of my teeth. I love my teeth now. Complete dental care and knowledge about teeth health. Highly recommendable.",
  },
  {
    name: "Rishav Singh",
    reviews: "1 review",
    time: "9 months ago",
    text: "Very nice experience. Staff is very polite and humble. Treatment at a genuine cost and Dr. Nisha is highly skilled in dental treatment. Highly recommended.",
  },
  {
    name: "Narender Dhull",
    reviews: "2 reviews",
    time: "2 weeks ago",
    text: "Painless Treatment of RCT with extreme level of care and cordial nature of Doctor and Staff.",
  },
  {
    name: "Deepansha Malik",
    reviews: "5 reviews",
    time: "8 months ago",
    text: "Exceptional care and professionalism. The team ensures every visit is comfortable and stress-free. Truly the perfect blend of expertise and compassion.",
  },
  {
    name: "Dr Swarnika Jain",
    reviews: "8 reviews",
    time: "6 months ago",
    text: "I have got my treatment done from here. Overall experience was very good. Dr Nisha Dua handled everything professionally and it was a pleasant experience.",
  },
  {
    name: "Vishnu Rai Rateek Kalsi",
    reviews: "5 reviews",
    time: "10 months ago",
    text: "I recently visited Tooth Care Studio for a dental consultation and treatment, and I must say, it was one of the best healthcare experiences I've had. From the moment I walked into the clinic, I was greeted with warmth and professionalism.",
  },
  {
    name: "Raj Dua",
    reviews: "1 review",
    time: "5 months ago",
    text: "Will definitely suggest everyone to visit Tooth Care Studio. Dr. Nisha is very experienced and cooperative.",
  },
  {
    name: "Aman Palia",
    reviews: "1 review",
    time: "8 months ago",
    text: "This clinic truly deserves all the appreciation. From the moment I walked in, I felt cared for. The treatment was smooth, and the team is highly professional. Highly recommended!",
  },
  {
    name: "Amit Kumar",
    reviews: "1 review",
    time: "8 months ago",
    text: "Best dental experience ever! The clinic is clean, modern, and the team is super friendly. I'm actually looking forward to my next appointment!",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 h-[500px] flex flex-col overflow-hidden">

      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#1a6faf] text-white flex items-center justify-center text-xl font-bold">
              {review.name.charAt(0)}
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900">
                {review.name}
              </h3>

              <p className="text-sm text-gray-500">
                {review.reviews}
              </p>
            </div>
          </div>

          {/* Google Style Badge */}
          <div className="text-blue-500 font-bold text-sm">
            Google
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-yellow-400 text-xl">
            ★★★★★
          </div>

          <span className="text-sm text-gray-500">
            {review.time}
          </span>
        </div>
      </div>

      {/* Review Text */}
      <div className="flex-1 overflow-y-auto p-6">
        <p className="text-gray-600 leading-relaxed">
          {review.text}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
        <div className="flex items-center justify-between">

          <span className="text-[#1a6faf] font-semibold text-sm">
            Verified Patient
          </span>

          <div className="flex items-center gap-4">

            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition">
              <Heart size={18} />
              <span className="text-sm">1</span>
            </button>

            <button className="text-gray-500 hover:text-blue-500 transition">
              <ThumbsUp size={18} />
            </button>

            <button className="text-gray-500 hover:text-green-500 transition">
              <Share2 size={18} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#1a6faf] font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Patients Say
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Trusted by hundreds of happy patients for quality dental care,
            painless treatments, and exceptional service.
          </p>
        </div>

        <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  spaceBetween={30}
  centeredSlides={true}
  loop={true}
  navigation={true}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
  className="testimonialSwiper"
>
  {testimonials.map((review, index) => (
    <SwiperSlide key={index}>
      <ReviewCard review={review} />
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
};

export default Testimonials;