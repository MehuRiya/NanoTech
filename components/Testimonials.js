import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rafiqul Islam",
    company: "DataLink BD Ltd.",
    quote:
      "NanoTech Solutions supplied us with Dell PowerEdge servers at competitive pricing. The delivery was fast and the hardware was exactly as described. Highly recommended for enterprise procurement.",
    initials: "RI",
  },
  {
    name: "Nusrat Jahan",
    company: "CloudBase Systems",
    quote:
      "We needed Cisco switches urgently for a network upgrade. NanoTech sourced them within 48 hours. Their technical support team helped us choose the right model for our setup.",
    initials: "NJ",
  },
  {
    name: "Tanvir Ahmed",
    company: "TechCore Solutions",
    quote:
      "We've been buying SFP transceivers and RAM from NanoTech for over two years. The products are always genuine, well-priced, and the team is very responsive on WhatsApp.",
    initials: "TA",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Businesses across Bangladesh trust NanoTech Solutions for their critical infrastructure needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-surface border border-slate-700 rounded-xl p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
