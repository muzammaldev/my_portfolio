"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Languages = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the animation is triggered
        }
      },
      { threshold: 0.1 } // Adjust threshold if needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="flex justify-center items-center dark:bg-gray-800 py-10 sm:py-20">
        <div className="max-w-xl mx-auto w-full px-4">
          <h4 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Languages
          </h4>
          <div className="space-y-7">
            {[
              { name: "HTML", percentage: 100, color: "#4CAF50" },
              { name: "CSS", percentage: 80, color: "#2196F3" },
              { name: "JavaScript", percentage: 70, color: "#F0DB4F" },
              { name: "TypeScript", percentage: 72, color: "#007ACC" },
            ].map(({ name, percentage, color }) => (
              <div key={name}>
                <div className="flex justify-between py-1">
                  <span className="text-base sm:text-lg font-semibold dark:text-[#A6A6A6]">
                    {name}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                    {percentage}%
                  </span>
                </div>
                <svg
                  className="rc-progress-line w-full"
                  viewBox="0 0 100 1"
                  preserveAspectRatio="none"
                >
                  <path
                    className="rc-progress-line-trail"
                    d="M 0.5,0.5 L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#D9D9D9"
                    strokeWidth={1}
                    fillOpacity={0}
                  />
                  <path
                    className="rc-progress-line-path"
                    d="M 0.5,0.5 L 99.5,0.5"
                    strokeLinecap="round"
                    stroke={color}
                    strokeWidth={1}
                    fillOpacity={0}
                    style={{
                      strokeDasharray: isVisible
                        ? `${percentage}px, 100px`
                        : "0px, 100px",
                      strokeDashoffset: 0,
                      transition: "stroke-dasharray 0.6s ease",
                    }}
                  ></path>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
