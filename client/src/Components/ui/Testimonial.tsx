import React from "react";
import { useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        " During my final exams in med school, I was diagnosed with life-threatening pancreatic cancer. As an orphan and caregiver for my younger brother, I felt hopeless and even had suicidal thoughts. Then, a friend told me about Hib4Me. I created a profile and shared my story, and to my surprise, the kindness of strangers helped me raise enough for my treatment and living expenses. I am forever grateful to Ib4Me!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-14">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold sm:text-6xl">Success Stories</h2>
          <div className="flex justify-center py-6">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-10 h-10 text-[#A26439] mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.284 3.948a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.285 3.947c.3.921-.755 1.688-1.54 1.118l-3.374-2.452a1 1 0 00-1.175 0l-3.374 2.452c-.784.57-1.84-.197-1.54-1.118l1.285-3.947a1 1 0 00-.364-1.118L2.057 9.375c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.284-3.948z" />
              </svg>
            ))}
          </div>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-xl font-semibold text-black sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        alt={`${item.name}'s avatar`}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block font-semibold text-black">
                          {item.name}
                        </span>
                        <span className="block text-black text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex justify-center gap-x-3">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ${
                    currentTestimonial == idx ? "bg-[#9E6643]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                  title={`Testimonial ${idx + 1}`}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
