import { motion } from "framer-motion";

const features = [
  {
    emoji: "🚀",
    title: "Fast Delivery",
    description: "Quick dispatch and reliable delivery across Dhaka and all major cities in Bangladesh.",
  },
  {
    emoji: "✅",
    title: "Premium Hardware",
    description: "We source only genuine, enterprise-grade hardware from globally recognized brands.",
  },
  {
    emoji: "🛠️",
    title: "Expert Support",
    description: "Our technical team helps you select the right components for your infrastructure needs.",
  },
  {
    emoji: "🏅",
    title: "Genuine Products",
    description: "Every product comes with proper documentation and brand authenticity guarantee.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeatureSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose NanoTech Solutions?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We combine industry expertise with a commitment to quality, ensuring your business always gets the right hardware at the right time.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="bg-surface border border-slate-700 rounded-xl p-6 text-center hover:border-accent/40 transition-colors duration-200"
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
