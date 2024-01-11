export default function Section({ children, title, subtitle, id, className = '' } = {}) {
  return (
    <section id={id} className={`bg-zinc-900 p-5 md:p-5 lg:p-10 lg:m-10 sm:m-5 my-4 shadow-lg text-white border-gray `}>
      <header class='text-center mb-3'>
        <h2 class='font-bold text-4xl after:absolute  after:bottom-[-1.1rem] after:content-[" "] after:block after:w-[10%] after:h-1 after:bg-blue-600 relative flex justify-center'> {title} </h2>
        <p class='my-8 font-light text-xl text-zinc-400'>{subtitle}</p>
      </header>

      <div className={`${className}`}>
        {children}
      </div>
    </section>
  );
}
