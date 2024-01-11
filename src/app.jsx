import { PROYECTOS, TECHS } from './const';

import { DownloadFileIcon, GithubIcon, LinkedinIcon } from './components/Icons';
import Header from './components/Header';
import ListOfTags from './components/ListOfTags';
import Section from './components/Section';
import Card from './components/Card';
import cvPDF from './assets/CV_Guido_Rivoira.pdf'

export function App() {
  return (
    <div className='w-full'>
      <Header
        title={
          <>
            <p className='mb-6'> Guido Rivoira </p>
          </>
        }
        subtitle='Desarollador de software'
      />

      <div  id='sobre_mi' /> 

      <Section id='me' title='Sobre mí' className='flex mt-10 gap-x-4'>
        <div className='leading-relaxed mx-auto'>

          <p className='mb-4'>
            Graduado en la <strong>Tecnicatura en Desarrollo de Software</strong>, poseo conocimientos en el desarrollo de backend utilizando NodeJS, .NET Core y .NET Framework. En el ámbito del frontend, manejo tecnologías básicas como HTML, CSS y JavaScript, y para interfaces de usuario más complejas, utilizo ReactJS.
          </p>
          <p>
            Me considero una persona entusiasta y autodidacta. Disfruto manteniéndome al día con las últimas tendencias y novedades en el campo, lo que me ha permitido adoptar un enfoque innovador y creativo en mis proyectos. Estoy emocionado por continuar aprendiendo y creciendo como profesional.
          </p>

          <a
            href={cvPDF}
            target='_blank'
            class='bg-blue-600 px-4 py-2  mt-4 hover:bg-blue-700 text-white rounded-0 flex items-center w-fit gap-x-2'
          >
            <DownloadFileIcon width='22' height='22' />
            <span> Descargar CV </span>
          </a>
        </div>

      </Section>

      <Section
        id='tecnologias'
        title='Tecnologías y Herramientas'
        subtitle='Tecnologías y herramientas que uso para desarrollar software'
      >
        <ListOfTags
          tags={TECHS}
          className='flex-wrap w-full justify-center '
          tagClassname='py-2 px-4 border border-solid border-white text-sm border-opacity-50'
        />
      </Section>

      <Section
        id='proyectos'
        title='Proyectos'
        subtitle={
          <>
            Algunos proyectos que realicé. Ver más en mi 
            <a
              target='_blank'
              href='https://github.com/GuiDev404'
              class='text-white hover:text-white hover:underline ml-2 inline-block'
            >
              GitHub
            </a>
          </>
        }
      >
        <div className='columns-1 md:columns-2 lg:columns-3 gap-10 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit'>
          {PROYECTOS.map((proyecto) => (
            <Card key={proyecto.title} {...proyecto} />
          ))}
        </div>
      </Section>

      <Section
        id='contacto'
        title='Contáctame'
        subtitle='Puedes contactarte conmigo sobre cualquier duda que tengas'
      >
        <ListOfTags
          tags={[
            <a
              href='https://github.com/GuiDev404'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-x-2 py-4 px-6'
            >
              <GithubIcon />
              Github
            </a>,
            <a
              href='https://www.linkedin.com/in/guido-rivoira-7510a8267/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-x-2 py-4 px-6 '
            >
              <LinkedinIcon />
              Linkedin
            </a>,
 
          ]}
          className='flex-wrap w-full justify-center'
          tagClassname='border border-dashed border-white text-xl hover:bg-white hover:text-zinc-900 w-full sm:w-fit text-center'
        />
      </Section>
    </div>
  );
}
