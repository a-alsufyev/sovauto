import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

const TIMELINE_EVENTS_EN = [
  { era: "1940s", title: "Post-War Recovery", desc: "ZIS-110 and Pobeda lead the recovery of the Soviet automotive spirit.", icon: "☭" },
  { era: "1950s", title: "The Executive Dawn", desc: "Introduction of the iconic Volga GAZ-21 and the elite Chaika.", icon: "★" },
  { era: "1960s", title: "Microcar Revolution", desc: "ZAZ-965 'Hunchback' brings motorization to the masses.", icon: "⎈" },
  { era: "1970s", title: "The Zhiguli Era", desc: "VAZ begins production in Tolyatti, defining the Soviet street with 'Classic' series.", icon: "⚙" },
  { era: "1980s", title: "Modern Transition", desc: "Lada Samara and Niva introduce FWD and modern 4x4 concepts to the world.", icon: "✦" },
];

const TIMELINE_EVENTS_RU = [
  { era: "1940-е", title: "Послевоенное восстановление", desc: "ЗИС-110 и Победа возглавляют возрождение советского автомобильного духа.", icon: "☭" },
  { era: "1950-е", title: "Эпоха представительской классики", desc: "Появление культовой Волги ГАЗ-21 и роскошной Чайки.", icon: "★" },
  { era: "1960-е", title: "Революция микролитражек", desc: "ЗАЗ-965 «Горбатый» делает автомобилизацию доступной для широких масс.", icon: "⎈" },
  { era: "1970-е", title: "Эра Жигулей", desc: "ВАЗ запускает производство в Тольятти, определяя облик советских улиц «классической» серией.", icon: "⚙" },
  { era: "1980-е", title: "Переход к современности", desc: "Лада Самара и Нива открывают миру передний привод и современные концепты 4x4.", icon: "✦" },
];

export default function Timeline() {
  const { language } = useLanguage();
  const events = language === 'ru' ? TIMELINE_EVENTS_RU : TIMELINE_EVENTS_EN;

  return (
    <div className="py-20">
      <div className="relative border-l border-gold/20 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between items-start gap-4">
        {events.map((event, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-10 md:pl-0 md:pt-10 flex-1 mb-12 md:mb-0"
          >
            {/* Dot */}
            <div className="absolute left-[-5px] top-0 md:left-1/2 md:top-[-5px] w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)] z-10" />
            
            {/* Desktop Vertical Line */}
            <div className="hidden md:block absolute top-[-1px] left-0 right-0 h-[1px] bg-gold/20 -z-0" />

            <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-2 block">{event.era}</div>
            <h4 className="font-display text-lg mb-2 text-white">{event.title}</h4>
            <p className="text-xs text-muted leading-relaxed font-light">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
