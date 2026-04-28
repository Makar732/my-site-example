import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  Clock3,
  FileText,
  HardHat,
  House,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const phoneDisplay = "+7 (920) 000-00-00";
const phoneHref = "tel:+79200000000";
const tgHref = "https://t.me/";
const waHref = "https://wa.me/79200000000";

const services = [
  {
    title: "Заборы под ключ",
    description:
      "Профнастил, евроштакетник, 3D-сетка, кирпичные столбы. От замера до установки ворот и калитки.",
    image: "/images/portfolio-brick-pillar-fence.jpg",
  },
  {
    title: "Каменные конструкции",
    description:
      "Подпорные стены, цоколь, входные группы, декоративные зоны. Надёжно и с расчётом нагрузки.",
    image: "/images/portfolio-stone-after.jpg",
  },
  {
    title: "Благоустройство участков",
    description:
      "Планировка, дренаж, отсыпка, подготовка территории без хаоса и лишних переделок.",
    image: "/images/portfolio-yard-drainage.jpg",
  },
];

const trustItems = [
  { icon: FileText, text: "Работа по договору" },
  { icon: Wallet, text: "Фиксированная цена" },
  { icon: ShieldCheck, text: "Гарантия результата" },
  { icon: Clock3, text: "Соблюдение сроков" },
  { icon: HardHat, text: "Опытные мастера" },
];

const steps = [
  "Заявка",
  "Консультация",
  "Выезд / расчёт",
  "Договор",
  "Выполнение работ",
  "Сдача объекта",
];

const portfolio = [
  {
    title: "Забор из профнастила",
    term: "4 дня",
    description: "До/после: заменили старый забор, усилили основание, поставили новые ворота.",
    image: "/images/portfolio-fence-before.jpg",
    status: "До",
  },
  {
    title: "Забор из профнастила",
    term: "4 дня",
    description: "До/после: итог после монтажа секций и выравнивания линии по всему периметру.",
    image: "/images/portfolio-fence-after.jpg",
    status: "После",
  },
  {
    title: "Подпорная стенка",
    term: "6 дней",
    description: "До/после: участок с перепадом высоты и осыпанием грунта до начала работ.",
    image: "/images/portfolio-stone-before.jpg",
    status: "До",
  },
  {
    title: "Подпорная стенка",
    term: "6 дней",
    description: "До/после: готовая каменная конструкция, укреплённый склон и аккуратная входная зона.",
    image: "/images/portfolio-stone-after.jpg",
    status: "После",
  },
  {
    title: "Габионный забор",
    term: "5 дней",
    description: "Смонтировали габионы и секции, закрыли участок от дороги и шума.",
    image: "/images/portfolio-gabion-fence.jpg",
    status: "Проект",
  },
  {
    title: "Забор с кирпичными столбами",
    term: "7 дней",
    description: "Капитальный фасадный забор с воротами и аккуратным примыканием к дому.",
    image: "/images/portfolio-brick-pillar-fence.jpg",
    status: "Проект",
  },
  {
    title: "Дренаж участка",
    term: "3 дня",
    description: "Сделали отвод воды и подготовили территорию для комфортной эксплуатации.",
    image: "/images/portfolio-yard-drainage.jpg",
    status: "Проект",
  },
  {
    title: "Каменная зона отдыха",
    term: "5 дней",
    description: "Построили функциональную каменную зону для отдыха и готовки на участке.",
    image: "/images/portfolio-stone-bbq-zone.jpg",
    status: "Проект",
  },
];

function CtaButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href="#form"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
      >
        <Calculator className="h-4 w-4" />
        Рассчитать стоимость
      </a>
      <a
        href={phoneHref}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        <Phone className="h-4 w-4" />
        Позвонить
      </a>
      <a
        href={tgHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
      >
        <MessageCircle className="h-4 w-4" />
        Telegram / WhatsApp
      </a>
    </div>
  );
}

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const isPhoneValid = useMemo(() => {
    const digits = phone.replace(/\D/g, "");
    return digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"));
  }, [phone]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);
    if (!name.trim() || !isPhoneValid) {
      return;
    }
    setSubmitted(true);
    setName("");
    setPhone("");
    setTouched(false);
  };

  return (
    <div className="bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-900 sm:text-base">
            <House className="h-5 w-5 text-emerald-600" />
            <span>ФОРТИФАЙ СТРОЙ</span>
          </div>
          <div className="hidden items-center gap-5 text-sm md:flex">
            <a href="#services" className="hover:text-emerald-700">
              Услуги
            </a>
            <a href="#portfolio" className="hover:text-emerald-700">
              Портфолио
            </a>
            <a href="#contacts" className="hover:text-emerald-700">
              Контакты
            </a>
            <a href={phoneHref} className="font-semibold text-emerald-700">
              {phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative min-h-[88vh] overflow-hidden">
          <img
            src="/images/hero-fence-masonry.jpg"
            alt="Установка забора и каменные работы для частного дома"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/30" />

          <div className="relative mx-auto flex min-h-[88vh] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl space-y-6 text-white"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">ФОРТИФАЙ СТРОЙ</p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Заборы и каменные работы под ключ в Нижнем Новгороде и области
              </h1>
              <p className="max-w-xl text-base text-slate-100 sm:text-lg">
                Работаем по договору, фиксируем цену, даём гарантию на результат
              </p>

              <ul className="grid gap-2 text-sm text-slate-100 sm:grid-cols-2 sm:text-base">
                {[
                  "Фиксированная смета без скрытых доплат",
                  "Гарантия на работы",
                  "Работа по договору",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CtaButtons />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Что мы делаем</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Выполняем полный цикл работ по частным участкам в Нижнем Новгороде и области. Берём ответственность за
            результат и аккуратную сдачу объекта.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white"
              >
                <img src={service.image} alt={service.title} className="h-44 w-full object-cover" />
                <div className="space-y-3 p-5">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{service.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-emerald-600 bg-white px-4 py-4 sm:px-6">
            <p className="text-sm text-slate-700 sm:text-base">
              Нужен точный расчёт под ваш участок? Получите смету и сроки до начала работ.
            </p>
            <CtaButtons className="mt-4" />
          </div>
        </section>

        <section className="bg-slate-900 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl">Почему нам доверяют</h2>
            <p className="mt-3 max-w-3xl text-slate-200">
              Мы строим так, чтобы вы не возвращались к проблеме через сезон: чёткие условия, прозрачная смета,
              контроль каждого этапа.
            </p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.09 } },
              }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                    className="flex items-center gap-3 border border-slate-700 bg-slate-800/70 px-4 py-4"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-sm sm:text-base">{item.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <CtaButtons className="mt-8" />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Как мы работаем</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Понятный процесс без сюрпризов: от заявки до сдачи объекта.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-emerald-700">Шаг {index + 1}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-emerald-600 bg-white px-4 py-4 sm:px-6">
            <p className="text-sm text-slate-700 sm:text-base">Оставьте заявку, и мы бесплатно подскажем оптимальное решение под ваш бюджет.</p>
            <CtaButtons className="mt-4" />
          </div>
        </section>

        <section id="portfolio" className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl">Портфолио работ</h2>
            <p className="mt-3 max-w-3xl text-slate-600">Реальные типы задач для частных домов и дач в Нижегородской области.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {portfolio.map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden border border-slate-200 bg-white"
                >
                  <div className="relative">
                    <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                    <span className="absolute left-3 top-3 bg-slate-900/85 px-2 py-1 text-xs font-semibold text-white">{item.status}</span>
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">Срок: {item.term}</p>
                    <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <CtaButtons className="mt-8" />
          </div>
        </section>

        <section id="form" className="bg-slate-900 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl">Получите расчёт стоимости</h2>
            <p className="mt-3 max-w-2xl text-slate-200">
              Заполните форму, и мы свяжемся с вами, уточним задачу и подготовим расчёт без скрытых доплат.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid max-w-2xl gap-4">
              <label className="grid gap-2 text-sm">
                Имя
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Как к вам обращаться"
                  className="h-11 rounded-md border border-slate-600 bg-slate-800 px-3 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm">
                Телефон
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder="+7 (___) ___-__-__"
                  className="h-11 rounded-md border border-slate-600 bg-slate-800 px-3 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none"
                />
              </label>

              {touched && !isPhoneValid && (
                <p className="text-sm text-red-300">Введите корректный номер телефона в формате +7 или 8.</p>
              )}

              <button
                type="submit"
                className="mt-1 inline-flex h-11 items-center justify-center rounded-md bg-emerald-600 px-5 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Получить расчёт
              </button>

              {submitted && <p className="text-sm text-emerald-300">Мы свяжемся с вами в ближайшее время.</p>}
            </form>
          </div>
        </section>

        <section id="contacts" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Контакты</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Работаем по Нижнему Новгороду и всей Нижегородской области. Звоните или пишите в мессенджеры.
          </p>

          <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4 sm:text-base">
            <a href={phoneHref} className="flex items-center gap-2 border border-slate-200 bg-white p-4 font-semibold hover:border-emerald-400">
              <Phone className="h-4 w-4 text-emerald-700" />
              {phoneDisplay}
            </a>
            <a href={tgHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-slate-200 bg-white p-4 font-semibold hover:border-emerald-400">
              <MessageCircle className="h-4 w-4 text-emerald-700" />
              Telegram
            </a>
            <a href={waHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-slate-200 bg-white p-4 font-semibold hover:border-emerald-400">
              <MessageCircle className="h-4 w-4 text-emerald-700" />
              WhatsApp
            </a>
            <a href={phoneHref} className="inline-flex items-center justify-center gap-2 bg-slate-900 p-4 font-semibold text-white hover:bg-slate-800">
              <Phone className="h-4 w-4" />
              Позвонить
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            Нижний Новгород и вся Нижегородская область
          </div>
        </section>
      </main>

      <a
        href={phoneHref}
        className="fixed bottom-4 right-4 z-50 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition hover:bg-emerald-500 md:hidden"
      >
        <Phone className="h-4 w-4" />
        Позвонить
      </a>

      <footer className="border-t border-slate-200 bg-white py-5 text-center text-sm text-slate-500">
        <p>ФОРТИФАЙ СТРОЙ, 2026. Заборы и каменные работы под ключ в Нижегородской области.</p>
      </footer>
    </div>
  );
}
