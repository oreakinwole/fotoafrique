<script setup>
import "animate.css";

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What makes Modern Yardz a top landscaper in San Diego?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Modern Yardz stands out for our decades of experience, passion for crafting beautiful, functional outdoor spaces, and personalized service tailored to each client's unique vision."
    }
  },{
    "@type": "Question",
    "name": "How can I find the best landscaping services near me in San Diego?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Look for landscapers with a strong local reputation, a portfolio of diverse projects, and services that match your outdoor vision. Modern Yardz meets all these criteria, offering comprehensive landscaping solutions across San Diego."
    }
  },{
    "@type": "Question",
    "name": "What types of landscaping services does Modern Yardz offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We specialize in a variety of services including garden design, artificial turf installation, outdoor kitchens, pools & spas, patio covers, pergolas, fire features, and custom concrete work."
    }
  },{
    "@type": "Question",
    "name": "Can Modern Yardz help with small landscaping projects?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Absolutely! We cater to projects of all sizes, from minor enhancements to major transformations, ensuring each client receives the attention and expertise their outdoor space deserves."
    }
  },{
    "@type": "Question",
    "name": "Does Modern Yardz offer eco-friendly landscaping options?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we're committed to sustainability, offering drought-tolerant landscapes, native plant selections, and efficient irrigation systems to minimize water use and support the local ecosystem."
    }
  },{
    "@type": "Question",
    "name": "How does the landscape design process work with Modern Yardz?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our process begins with a consultation to understand your vision and needs. We then provide a detailed design proposal, including 3D renderings, before starting the installation, ensuring your complete satisfaction with the final outcome."
    }
  },{
    "@type": "Question",
    "name": "What is the average cost of landscaping services in San Diego?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Costs vary widely depending on project scope, materials, and design complexity. Contact Modern Yardz for a free quote tailored to your specific landscaping needs and budget."
    }
  },{
    "@type": "Question",
    "name": "How long does a typical landscaping project take with Modern Yardz?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Project timelines can vary from a few days for simple installations to several weeks for comprehensive designs, depending on the project's scale and complexity. We prioritize efficiency and quality, keeping you informed every step of the way."
    }
  },{
    "@type": "Question",
    "name": "Can Modern Yardz incorporate existing landscape features into a new design?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we excel at blending new designs with existing landscape elements, enhancing your outdoor space while preserving its unique character and features you love."
    }
  },{
    "@type": "Question",
    "name": "How can I maintain my new landscape to keep it looking great year-round?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Modern Yardz offers maintenance advice and services, including proper watering, pruning, and care tips tailored to your landscape's specific needs, ensuring it thrives in every season."
    }
  }]
}`,
    },
  ],
});
</script>

<template>
  <div class="landing-container">
    <HeroNew />
    <FeaturesHomeSecondSegment />
    <FeaturesHomeThirdSegment />
    <FeaturesHomeLastSegment />
  </div>
</template>

<style>
@keyframes spin {
  to {
    transform: rotateY(3turn);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .spin_mod {
    animation: spin 8s ease-in-out infinite;
  }
}

/* .explore-item {
  transition: all 0.8s ease;
}

.explore-item:hover {
  cursor: url("@/assets/images/explore_new_cursor.svg"), auto;
} */
</style>
