import { useState, useEffect } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', phone: '' });
      }, 5000);
    }
  };

  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Укладка тротуарной плитки',
      description: 'Профессиональная укладка плитки любого типа с соблюдением технологии'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: 'Брусчатка под ключ',
      description: 'Комплексная укладка брусчатки с подготовкой основания и дренажом'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Каменные дорожки',
      description: 'Создание долговечных и эстетичных дорожек из натурального камня'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Благоустройство двора',
      description: 'Полное преображение территории: от проекта до реализации'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Подготовка основания',
      description: 'Качественная подготовка фундамента для долговечности покрытия'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      ),
      title: 'Дренаж и уклон',
      description: 'Правильный водоотвод для защиты покрытия от разрушения'
    }
  ];

  const advantages = [
    { icon: '📋', title: 'Работа по договору', description: 'Официальное оформление всех работ' },
    { icon: '🛡️', title: 'Гарантия на работы', description: 'До 5 лет гарантии качества' },
    { icon: '⏱️', title: 'Чёткие сроки', description: 'Сдаём объекты точно в срок' },
    { icon: '👷', title: 'Опытная бригада', description: 'Специалисты со стажем от 7 лет' },
    { icon: '💰', title: 'Без скрытых доплат', description: 'Цена фиксируется в договоре' }
  ];

  const portfolio = [
    { before: 'https://images.unsplash.com/photo-1599693942150-e83e6aae6a85?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1621251347575-4c0e3c2f8e8e?w=600&h=400&fit=crop', title: 'Благоустройство двора' },
    { before: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&h=400&fit=crop', title: 'Укладка брусчатки' },
    { before: 'https://images.unsplash.com/photo-1592722746350-2c893878f7cc?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1623164296348-f0c6e6a6a6a6?w=600&h=400&fit=crop', title: 'Каменные дорожки' }
  ];

  const steps = [
    { number: '01', title: 'Заявка', description: 'Оставляете заявку на сайте или звоните нам' },
    { number: '02', title: 'Выезд и расчёт', description: 'Бесплатный выезд замерщика и составление сметы' },
    { number: '03', title: 'Согласование', description: 'Утверждаем цену, сроки и подписываем договор' },
    { number: '04', title: 'Выполнение работ', description: 'Выполняем работы и сдаём готовый объект' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>КаменьПрофи</span>
                <p className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>Строительные работы</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['Услуги', 'Преимущества', 'Работы', 'Контакты'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors hover:text-amber-600 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <a href="tel:+79991234567" className={`hidden lg:block font-semibold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                +7 (999) 123-45-67
              </a>
              <button 
                onClick={scrollToForm}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Заказать расчёт
              </button>
              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {['Услуги', 'Преимущества', 'Работы', 'Контакты'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="tel:+79991234567" className="block text-amber-600 font-semibold py-2">
                +7 (999) 123-45-67
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900"></div>
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1920&h=1080&fit=crop" 
            alt="Брусчатка"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-amber-600/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🔥 Работаем по договору с гарантией
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Каменные работы и
              <br />
              <span className="text-amber-500">благоустройство под ключ</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Укладка брусчатки, плитки и камня с гарантией качества и сроков
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-amber-600/30"
              >
                Получить расчёт стоимости
              </button>
              <a 
                href="tel:+79991234567"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm border border-white/30"
              >
                📞 +7 (999) 123-45-67
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
              {[
                { number: '500+', label: 'Объектов сдано' },
                { number: '10+', label: 'Лет опыта' },
                { number: '5 лет', label: 'Гарантия' },
                { number: '100%', label: 'Соблюдение сроков' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-amber-500">{stat.number}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Наши услуги</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Что мы делаем
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                </div>
                <button 
                  onClick={scrollToForm}
                  className="w-full py-3 bg-gray-50 hover:bg-amber-50 text-amber-600 font-bold rounded-lg border border-amber-100 transition-colors"
                >
                  Узнать цену
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={scrollToForm}
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-600/20"
            >
              Получить полный прайс-лист
            </button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="преимущества" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Почему мы</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Наши преимущества
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-amber-200 transition-all"
              >
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={scrollToForm}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
            >
              Закрепить условия по договору
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="работы" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Наши работы</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
              Примеры выполненных объектов
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="grid grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img src={item.before} alt="До" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">ДО</span>
                    </div>
                    <div className="relative overflow-hidden border-l border-gray-900">
                      <img src={item.after} alt="После" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/10"></div>
                      <span className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">ПОСЛЕ</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  <button onClick={scrollToForm} className="text-amber-500 font-bold hover:underline">Хочу так же →</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gray-800 p-8 rounded-3xl inline-block border border-gray-700">
              <p className="text-white text-xl mb-6">Хотите оценить стоимость вашего проекта?</p>
              <button 
                onClick={scrollToForm}
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105"
              >
                Получить расчёт по фото (WhatsApp)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Процесс работы</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Как мы работаем
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-7xl font-bold text-amber-100 absolute -top-4 -left-2">{step.number}</div>
                <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">О компании</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Профессиональный подход к каждому объекту
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Мы выполняем каменные и строительные работы под ключ, создавая долговечные и качественные решения для дворов, участков и территорий.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Наша команда состоит из опытных специалистов, которые используют современные технологии и качественные материалы. Мы гарантируем соблюдение всех этапов технологии укладки, что обеспечивает долгий срок службы покрытия.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '500+', label: 'Довольных клиентов' },
                  { number: '10+', label: 'Лет на рынке' }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl font-bold text-amber-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop" 
                alt="Наша команда"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">10+ лет</div>
                <div className="text-amber-100">опыта работы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="контакты" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white">
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Оставьте заявку</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6">
                Получите бесплатный расчёт стоимости
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Заполните форму и наш специалист свяжется с вами в течение 15 минут для уточнения деталей и расчёта стоимости работ.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Телефон</div>
                    <a href="tel:+79991234567" className="text-xl font-bold hover:text-amber-500 transition-colors">+7 (999) 123-45-67</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">WhatsApp</div>
                    <a href="https://wa.me/79991234567" className="text-xl font-bold hover:text-green-500 transition-colors">Написать в WhatsApp</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Telegram</div>
                    <a href="https://t.me/+79991234567" className="text-xl font-bold hover:text-blue-400 transition-colors">Написать в Telegram</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="contact-form" className="bg-white rounded-2xl p-8 shadow-2xl scroll-mt-24">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Спасибо за заявку!</h3>
                  <p className="text-gray-600">Мы свяжемся с вами в ближайшее время для расчёта стоимости</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Иван"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  

                  
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    Оставить заявку
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold">КаменьПрофи</span>
                  <p className="text-xs text-gray-400">Строительные работы</p>
                </div>
              </div>
              <p className="text-gray-400">
                Профессиональные каменные и строительные работы под ключ. Качество, гарантия, соблюдение сроков.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Укладка тротуарной плитки</li>
                <li>Брусчатка под ключ</li>
                <li>Каменные дорожки</li>
                <li>Благоустройство двора</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="tel:+79991234567" className="hover:text-amber-500 transition-colors">+7 (999) 123-45-67</a>
                </li>
                <li>
                  <a href="https://wa.me/79991234567" className="hover:text-green-500 transition-colors">WhatsApp</a>
                </li>
                <li>
                  <a href="https://t.me/+79991234567" className="hover:text-blue-400 transition-colors">Telegram</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 КаменьПрофи. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 p-3">
        <div className="grid grid-cols-2 gap-3">
          <a 
            href="tel:+79991234567" 
            className="flex items-center justify-center space-x-2 bg-gray-900 text-white py-4 rounded-xl font-bold active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Позвонить</span>
          </a>
          <button 
            onClick={scrollToForm}
            className="flex items-center justify-center space-x-2 bg-amber-600 text-white py-4 rounded-xl font-bold active:scale-95 transition-transform shadow-lg shadow-amber-600/30"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Заявка</span>
          </button>
        </div>
      </div>
      
      {/* Spacer for sticky bar on mobile */}
      <div className="h-20 md:hidden bg-gray-900"></div>
    </div>
  );
}
